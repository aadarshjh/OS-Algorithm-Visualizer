import {
  buildResult,
  cloneProcesses,
  createIdleSegment,
  createProcessSegment,
  sortByArrivalThenInputOrder
} from "./helpers.js";

export function runMlq(processes, queueConfigs, contextSwitchTime = 0) {
  const sortedProcesses = cloneProcesses(processes).sort(sortByArrivalThenInputOrder);
  const remainingBurstTimes = new Map(sortedProcesses.map((p) => [p.pid, p.burstTime]));
  const completionTimes = new Map();
  const firstStartTimes = new Map();
  const ganttChart = [];
  let currentTime = 0;

  const queues = new Map();
  for (const config of queueConfigs) {
    queues.set(String(config.id), {
      config: { ...config, priority: Number(config.priority) },
      readyQueue: []
    });
  }

  const sortedQueueIds = Array.from(queues.values())
    .sort((a, b) => a.config.priority - b.config.priority)
    .map(q => String(q.config.id));

  let nextProcessIndex = 0;

  function addArrivedProcesses(time) {
    while (nextProcessIndex < sortedProcesses.length) {
      const p = sortedProcesses[nextProcessIndex];
      if (p.arrivalTime <= time) {
        const qId = String(p.queueId);
        if (queues.has(qId)) {
          queues.get(qId).readyQueue.push(p);
        } else {
          // Fallback to highest priority queue if assigned queue is invalid
          if (sortedQueueIds.length > 0) {
             queues.get(sortedQueueIds[0]).readyQueue.push(p);
          }
        }
        nextProcessIndex++;
      } else {
        break;
      }
    }
  }

  function getHighestPriorityProcess() {
    for (const qId of sortedQueueIds) {
      const q = queues.get(qId);
      if (q.readyQueue.length > 0) {
        return { process: q.readyQueue.shift(), queueInfo: q };
      }
    }
    return null;
  }

  while (completionTimes.size < sortedProcesses.length) {
    addArrivedProcesses(currentTime);
    const selected = getHighestPriorityProcess();

    if (!selected) {
      if (nextProcessIndex < sortedProcesses.length) {
        const nextArrival = sortedProcesses[nextProcessIndex].arrivalTime;
        if (currentTime < nextArrival) {
          ganttChart.push(createIdleSegment(currentTime, nextArrival));
          currentTime = nextArrival;
        }
      } else {
        break;
      }
      continue;
    }

    const { process, queueInfo } = selected;
    const start = currentTime;

    if (!firstStartTimes.has(process.pid)) {
      firstStartTimes.set(process.pid, start);
    }

    let runTime;
    if (queueInfo.config.algorithm === "rr") {
      const quantum = Number(queueInfo.config.timeQuantum) || 1;
      runTime = Math.min(quantum, remainingBurstTimes.get(process.pid));
    } else {
      runTime = remainingBurstTimes.get(process.pid);
    }

    const end = start + runTime;
    ganttChart.push(createProcessSegment(process.pid, start, end));
    remainingBurstTimes.set(process.pid, remainingBurstTimes.get(process.pid) - runTime);
    currentTime = end;

    addArrivedProcesses(currentTime);

    if (remainingBurstTimes.get(process.pid) > 0) {
      queueInfo.readyQueue.push(process);
    } else {
      completionTimes.set(process.pid, currentTime);
    }
  }

  const extraMetricsMap = new Map();
  for (const p of sortedProcesses) {
    extraMetricsMap.set(p.pid, { queueId: p.queueId });
  }

  return buildResult(sortedProcesses, ganttChart, completionTimes, firstStartTimes, contextSwitchTime, extraMetricsMap);
}

export function renderPlaybackControls(playback) {
  if (!playback) return '';
  const { currentStep, totalSteps, isPlaying, speedMs } = playback;
  
  const progressPercent = totalSteps > 0 ? (currentStep / totalSteps) * 100 : 0;
  
  return `
    <div class="playback-controls-bar">
      <div class="playback-progress-container">
        <div class="playback-progress-bar">
          <div class="playback-progress-fill" style="width: ${progressPercent}%"></div>
          <div class="playback-progress-thumb" style="left: ${progressPercent}%"></div>
        </div>
      </div>
      <div style="display: flex; justify-content: space-between; width: 100%; align-items: center;">
        <div class="playback-buttons">
          <button class="icon-button" data-action="playback-reset" title="Reset to Start" ${currentStep === 0 ? "disabled" : ""}>⏮</button>
          <button class="icon-button" data-action="playback-prev" title="Previous Step" ${currentStep === 0 ? "disabled" : ""}>◀</button>
          <button class="icon-button primary" data-action="playback-toggle" title="${isPlaying ? 'Pause' : 'Play'}" ${currentStep >= totalSteps ? "disabled" : ""}>
            ${isPlaying ? '⏸' : '▶'}
          </button>
          <button class="icon-button" data-action="playback-next" title="Next Step" ${currentStep >= totalSteps ? "disabled" : ""}>▶</button>
          <button class="icon-button" data-action="playback-skip" title="Skip to End" ${currentStep >= totalSteps ? "disabled" : ""}>⏭</button>
        </div>
        <div class="playback-status">
          <span>Step ${currentStep} of ${totalSteps}</span>
        </div>
        <div class="playback-speed">
          <label>Speed:</label>
          <select data-action="playback-speed" class="select-control short">
            <option value="2000" ${speedMs === 2000 ? "selected" : ""}>0.5×</option>
            <option value="1000" ${speedMs === 1000 ? "selected" : ""}>1×</option>
            <option value="500" ${speedMs === 500 ? "selected" : ""}>2×</option>
            <option value="250" ${speedMs === 250 ? "selected" : ""}>4×</option>
          </select>
        </div>
      </div>
    </div>
  `;
}

export function renderReadyPlaceholder(moduleName, icon) {
  return `
    <section class="panel">
      <div class="panel-header">
        <div><p class="eyebrow">Visualization Arena</p><h2>Ready to Visualize</h2></div>
      </div>
      <div class="ready-placeholder">
        <div class="ready-placeholder-icon">${icon}</div>
        <h3>Configure Input & Run</h3>
        <p>Configure your input on the left and run the simulation to see the ${moduleName} algorithm execute step by step.</p>
      </div>
    </section>
  `;
}

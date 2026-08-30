---
name: Algorithmic Precision
colors:
  surface: '#fcf8fa'
  surface-dim: '#dcd9db'
  surface-bright: '#fcf8fa'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f6f3f5'
  surface-container: '#f0edef'
  surface-container-high: '#eae7e9'
  surface-container-highest: '#e4e2e4'
  on-surface: '#1b1b1d'
  on-surface-variant: '#45464d'
  inverse-surface: '#303032'
  inverse-on-surface: '#f3f0f2'
  outline: '#76777d'
  outline-variant: '#c6c6cd'
  surface-tint: '#565e74'
  primary: '#000000'
  on-primary: '#ffffff'
  primary-container: '#131b2e'
  on-primary-container: '#7c839b'
  inverse-primary: '#bec6e0'
  secondary: '#4b41e1'
  on-secondary: '#ffffff'
  secondary-container: '#645efb'
  on-secondary-container: '#fffbff'
  tertiary: '#000000'
  on-tertiary: '#ffffff'
  tertiary-container: '#271901'
  on-tertiary-container: '#98805d'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#dae2fd'
  primary-fixed-dim: '#bec6e0'
  on-primary-fixed: '#131b2e'
  on-primary-fixed-variant: '#3f465c'
  secondary-fixed: '#e2dfff'
  secondary-fixed-dim: '#c3c0ff'
  on-secondary-fixed: '#0f0069'
  on-secondary-fixed-variant: '#3323cc'
  tertiary-fixed: '#fcdeb5'
  tertiary-fixed-dim: '#dec29a'
  on-tertiary-fixed: '#271901'
  on-tertiary-fixed-variant: '#574425'
  background: '#fcf8fa'
  on-background: '#1b1b1d'
  surface-variant: '#e4e2e4'
typography:
  display-lg:
    fontFamily: Inter
    fontSize: 32px
    fontWeight: '600'
    lineHeight: 40px
    letterSpacing: -0.02em
  headline-md:
    fontFamily: Inter
    fontSize: 24px
    fontWeight: '600'
    lineHeight: 32px
    letterSpacing: -0.01em
  title-sm:
    fontFamily: Inter
    fontSize: 18px
    fontWeight: '500'
    lineHeight: 24px
  body-md:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
  body-sm:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: '400'
    lineHeight: 20px
  label-caps:
    fontFamily: Inter
    fontSize: 12px
    fontWeight: '600'
    lineHeight: 16px
    letterSpacing: 0.05em
  mono-data:
    fontFamily: JetBrains Mono
    fontSize: 13px
    fontWeight: '400'
    lineHeight: 18px
rounded:
  sm: 0.125rem
  DEFAULT: 0.25rem
  md: 0.375rem
  lg: 0.5rem
  xl: 0.75rem
  full: 9999px
spacing:
  base: 4px
  xs: 8px
  sm: 16px
  md: 24px
  lg: 32px
  xl: 48px
  container-max: 1440px
  sidebar-width: 280px
---

## Brand & Style
The design system is engineered for high-level academic environments where complex technical concepts must be visualized with absolute clarity. The brand personality is **Academic and Technical**, favoring structural integrity over decorative flourish. 

The design style is **Corporate / Modern** with a lean toward **Minimalism**. It utilizes a "Professional Application Shell" approach—where the interface acts as a quiet, sophisticated framework that recedes to allow the visualizations (Gantt charts, memory maps, and process queues) to take center stage. Every element is intentional, utilizing generous whitespace and crisp 1px borders to define information architecture without the cognitive load of heavy shadows or complex gradients.

## Colors
The palette is rooted in a **Deep Charcoal and Navy** (`#0F172A`) primary, providing a grounded, authoritative feel for navigation and headers. A **Strong Indigo Accent** (`#4F46E5`) is used sparingly for primary actions and active states, ensuring high-contrast focal points.

Backgrounds utilize a **Very Light Neutral** (`#F8FAFC`) to minimize eye strain during long sessions, while interactive surfaces and "cards" use a **Crisp White**. Functional colors for process states (Success, Warning, Error) are muted and desaturated to maintain the sophisticated aesthetic while remaining glanceable. Visualization components should use a distinct "series palette" of mathematical hues to differentiate between multiple processes or memory blocks.

## Typography
This design system utilizes **Inter** for all UI elements to ensure maximum legibility and a neutral, systematic appearance. The hierarchy is strictly enforced: **Display** and **Headline** levels use semi-bold weights with subtle negative letter-spacing for a premium, compact look.

**Body** text is optimized for readability with a 1.5x line height. A special **Label-Caps** style is used for table headers and section metadata to provide clear structural anchors. For visualization data, such as memory addresses or hex codes, a secondary monospaced font (e.g., JetBrains Mono) is recommended to ensure character alignment.

## Layout & Spacing
The layout follows a **Fixed Grid** philosophy for the application shell, utilizing a permanent sidebar for algorithm selection and a top navigation bar for global controls. The main viewport is a fluid canvas for the visualization.

The spacing rhythm is based on a **4px baseline**, with standard increments of 16px (sm) and 24px (md) for internal component padding. Generous margins of 32px (lg) separate major layout sections, reinforcing the "Visual-first" priority. Components should align to a 12-column grid within the main content area to maintain mathematical balance.

## Elevation & Depth
In alignment with the sophisticated, technical aesthetic, the design system avoids heavy shadows. Depth is communicated through **Tonal Layers** and **1px Low-Contrast Outlines**.

- **Level 0 (Background):** Neutral light grey.
- **Level 1 (Surface):** White surfaces with a 1px border in a slightly darker neutral (`#E2E8F0`). 
- **Level 2 (Interactive/Floating):** Subtle, ultra-diffused shadow (4px blur, 5% opacity) only for menus or tooltips.
- **Active State:** The 1px border transitions from neutral to the Indigo accent color to indicate focus or selection.

## Shapes
The shape language is conservative and structural. A **Soft** roundedness level (0.25rem) is applied to buttons, input fields, and containers. This creates a modern feel without the "playfulness" of highly rounded or pill-shaped elements. Visualization blocks (like CPU segments or memory frames) should maintain sharp or minimally rounded corners to emphasize their mathematical nature.

## Components

### Buttons
- **Primary:** Solid Navy or Indigo background, white text, 1px border. No gradients.
- **Secondary:** White background, Navy text, 1px Navy border.
- **Ghost:** Transparent background, Navy text, appears only on hover.

### Inputs & Controls
- **Fields:** White background, 1px neutral border. Focus state uses a 1px Indigo border and a 2px soft Indigo outer glow (halo).
- **Control Bar:** A horizontal container for "Play/Pause/Step" controls, utilizing consistent icon sizes and secondary button styles.

### Process & Data Visualization
- **Process Blocks:** Solid color fills with 1px inset borders. Use a distinctive color scale (e.g., Slate, Blue, Teal, Violet) to differentiate P1, P2, P3, etc.
- **Gantt Charts:** Horizontal bars with labels using `mono-data` typography.
- **Tables:** Minimalist, no vertical lines. 1px horizontal dividers only. Header text uses `label-caps`.

### Cards & Containers
- Containers for "Algorithm Details" or "Control Panels" should have a white background, 1px border, and no shadow. The header of the card should be separated by a 1px horizontal line.
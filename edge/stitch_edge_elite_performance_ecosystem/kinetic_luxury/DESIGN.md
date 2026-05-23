---
name: Kinetic Luxury
colors:
  surface: '#131313'
  surface-dim: '#131313'
  surface-bright: '#393939'
  surface-container-lowest: '#0e0e0e'
  surface-container-low: '#1b1b1b'
  surface-container: '#1f1f1f'
  surface-container-high: '#2a2a2a'
  surface-container-highest: '#353535'
  on-surface: '#e2e2e2'
  on-surface-variant: '#d0c5af'
  inverse-surface: '#e2e2e2'
  inverse-on-surface: '#303030'
  outline: '#99907c'
  outline-variant: '#4d4635'
  surface-tint: '#e9c349'
  primary: '#f2ca50'
  on-primary: '#3c2f00'
  primary-container: '#d4af37'
  on-primary-container: '#554300'
  inverse-primary: '#735c00'
  secondary: '#c4c7ca'
  on-secondary: '#2d3134'
  secondary-container: '#46494d'
  on-secondary-container: '#b6b8bc'
  tertiary: '#d0cdcd'
  on-tertiary: '#313030'
  tertiary-container: '#b4b2b2'
  on-tertiary-container: '#454544'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#ffe088'
  primary-fixed-dim: '#e9c349'
  on-primary-fixed: '#241a00'
  on-primary-fixed-variant: '#574500'
  secondary-fixed: '#e0e2e6'
  secondary-fixed-dim: '#c4c7ca'
  on-secondary-fixed: '#191c1f'
  on-secondary-fixed-variant: '#44474a'
  tertiary-fixed: '#e5e2e1'
  tertiary-fixed-dim: '#c8c6c5'
  on-tertiary-fixed: '#1b1b1b'
  on-tertiary-fixed-variant: '#474746'
  background: '#131313'
  on-background: '#e2e2e2'
  surface-variant: '#353535'
typography:
  display-hero:
    fontFamily: Sora
    fontSize: 48px
    fontWeight: '800'
    lineHeight: '1.1'
    letterSpacing: -0.04em
  headline-lg:
    fontFamily: Sora
    fontSize: 32px
    fontWeight: '700'
    lineHeight: '1.2'
  headline-lg-mobile:
    fontFamily: Sora
    fontSize: 24px
    fontWeight: '700'
    lineHeight: '1.2'
  headline-md:
    fontFamily: Sora
    fontSize: 20px
    fontWeight: '600'
    lineHeight: '1.4'
  body-lg:
    fontFamily: Hanken Grotesk
    fontSize: 18px
    fontWeight: '400'
    lineHeight: '1.6'
  body-md:
    fontFamily: Hanken Grotesk
    fontSize: 16px
    fontWeight: '400'
    lineHeight: '1.5'
  label-data:
    fontFamily: JetBrains Mono
    fontSize: 14px
    fontWeight: '500'
    lineHeight: '1.2'
    letterSpacing: 0.05em
  label-caps:
    fontFamily: Sora
    fontSize: 12px
    fontWeight: '700'
    lineHeight: '1.0'
    letterSpacing: 0.1em
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  container-margin-desktop: 40px
  container-margin-mobile: 20px
  gutter: 24px
  unit: 8px
  section-gap: 64px
---

## Brand & Style

This design system is built for the elite tier of fitness management. It rejects the cluttered, high-energy tropes of traditional gym apps in favor of a **Cinematic Minimalism** that evokes the quiet confidence of a private club and the precision of high-performance engineering.

The aesthetic is grounded in a "Dark Mode First" philosophy, utilizing depth and light to guide the user's focus. It blends **Glassmorphism**—using semi-transparent frosted surfaces to maintain a sense of environmental depth—with **Atmospheric Lighting**, where subtle gold glows act as beacons for interaction. The visual narrative is one of discipline, luxury, and relentless performance.

- **Target Audience:** High-net-worth fitness enthusiasts, elite trainers, and luxury health club operators.
- **Emotional Response:** Empowered, focused, prestigious, and technologically advanced.
- **Visual Pillars:** Deep obsidian backgrounds, metallic accents, expansive whitespace, and razor-sharp data visualization.

## Colors

The palette is anchored in **Matte Black** and **Graphite**, creating a non-distracting canvas that feels infinite. **Titanium Silver** provides high-contrast legibility for data and secondary information.

The defining element is **Champagne Gold**. This is not used as a decorative flourish but as a functional "Performance Indicator." Use it for primary calls to action, active states, and premium achievement markers. 

Metallic gradients should be applied sparingly to typography or high-level containers to simulate the luster of physical gym equipment and luxury watch faces. Use the `surface_glass` token for floating panels to ensure they feel like distinct physical layers over the photography.

## Typography

Typography balances aggressive athleticism with modern technicality. 

- **Sora** is the voice of the brand, used for bold, impactful headers that command attention. Its geometric structure feels engineered and precise.
- **Hanken Grotesk** handles the body content, offering a clean, approachable, and highly legible experience during intense physical activity.
- **JetBrains Mono** is utilized for biometric data, timestamps, and performance metrics, providing a "instrumental" feel that suggests data accuracy and technical sophistication.

**Hierarchy Rules:**
- Large display text should always use tight letter spacing.
- Labels and secondary data points should use uppercase and increased tracking for a premium, architectural feel.

## Layout & Spacing

The layout philosophy follows a **Fixed-Fluid Hybrid** model. While the content containers scale, they are bound by generous margins that preserve a sense of "Gallery Spacing." 

- **Desktop:** 12-column grid. Content is centered with a max-width of 1440px to prevent data fatigue.
- **Mobile:** 4-column grid. Prioritize verticality and thumb-reachable "Action Zones" at the bottom of the screen.
- **Rhythm:** All spacing must be a multiple of the 8px base unit. 

Use oversized padding within cards (minimum 24px) to ensure the UI feels "breathable," even when displaying complex performance metrics.

## Elevation & Depth

Hierarchy is achieved through **Tonal Stacking** and **Backdrop Blurs** rather than traditional drop shadows.

1.  **Level 0 (Floor):** Pure `#000000` Matte Black. Used for the background.
2.  **Level 1 (Card):** Graphite `#1C1C1C`. The primary surface for content.
3.  **Level 2 (Overlay):** Glassmorphic panels with a 20px blur and a 1px `Titanium Silver` stroke at 10% opacity.
4.  **Level 3 (Interaction):** Subtle outer glows in `Champagne Gold` (blur: 15px, opacity: 0.15) applied to active elements like buttons or "Current Exercise" cards to simulate a light source emitting from the screen.

Avoid heavy, dark shadows; instead, use light strokes and tonal shifts to define edges.

## Shapes

The shape language is **"Architectural Rounded."** It avoids the "bubbly" feel of consumer apps by using controlled radii that feel like machined metal or molded carbon fiber.

- **Standard Elements (Buttons, Inputs):** 0.5rem (8px).
- **Large Containers (Cards, Imagery):** 1.5rem (24px).
- **Interactive Triggers (Chips, Toggles):** Fully pill-shaped for high tactile feedback.

Strokes on shapes should be thin (1px) and use the secondary titanium color at low opacities to create "ghost" boundaries.

## Components

### Buttons
- **Primary:** Champagne Gold background with Black typography. No shadow, but a subtle inner-glow on hover.
- **Secondary:** Ghost style with a 1px Titanium Silver border.
- **Tertiary:** Text-only in JetBrains Mono with a chevron icon for "View More" actions.

### High-Performance Charts
- Use thin, vector-perfect lines for graphs.
- Gradients should fill the area beneath the line, transitioning from Primary Gold (20% opacity) to Transparent.
- Tooltips must be glassmorphic with high blur.

### Cards
- Cards never have flat backgrounds; they use a subtle radial gradient from the center to suggest depth.
- Headers within cards should use the `label-caps` typography style.

### Input Fields
- Underline-only or dark-filled with no top/side borders. 
- Focus state is indicated by the bottom border turning Champagne Gold and a faint glow appearing beneath the input line.

### Athletic Photography
- All images should be treated with a high-contrast, low-saturation filter to match the "Cinematic" aesthetic.
- Use vignettes to ensure text overlay legibility.
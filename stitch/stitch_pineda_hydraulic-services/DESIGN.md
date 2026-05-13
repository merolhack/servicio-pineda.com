---
name: Pineda Hydraulic Industrial Precision
colors:
  surface: '#fff8f7'
  surface-dim: '#f4d2cf'
  surface-bright: '#fff8f7'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#fff0ee'
  surface-container: '#ffe9e6'
  surface-container-high: '#ffe2de'
  surface-container-highest: '#fddbd7'
  on-surface: '#291715'
  on-surface-variant: '#5d3f3c'
  inverse-surface: '#402b29'
  inverse-on-surface: '#ffedea'
  outline: '#926f6b'
  outline-variant: '#e7bdb8'
  surface-tint: '#c00014'
  primary: '#ba0013'
  on-primary: '#ffffff'
  primary-container: '#e31e24'
  on-primary-container: '#fffafa'
  inverse-primary: '#ffb4ab'
  secondary: '#5f5e5e'
  on-secondary: '#ffffff'
  secondary-container: '#e4e2e1'
  on-secondary-container: '#656464'
  tertiary: '#006190'
  on-tertiary: '#ffffff'
  tertiary-container: '#007bb5'
  on-tertiary-container: '#fbfcff'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#ffdad6'
  primary-fixed-dim: '#ffb4ab'
  on-primary-fixed: '#410002'
  on-primary-fixed-variant: '#93000d'
  secondary-fixed: '#e4e2e1'
  secondary-fixed-dim: '#c8c6c6'
  on-secondary-fixed: '#1b1c1c'
  on-secondary-fixed-variant: '#474747'
  tertiary-fixed: '#cbe6ff'
  tertiary-fixed-dim: '#8ecdff'
  on-tertiary-fixed: '#001e30'
  on-tertiary-fixed-variant: '#004b71'
  background: '#fff8f7'
  on-background: '#291715'
  surface-variant: '#fddbd7'
typography:
  display-lg:
    fontFamily: Hanken Grotesk
    fontSize: 48px
    fontWeight: '800'
    lineHeight: '1.1'
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Hanken Grotesk
    fontSize: 32px
    fontWeight: '800'
    lineHeight: '1.2'
    letterSpacing: -0.01em
  headline-md:
    fontFamily: Hanken Grotesk
    fontSize: 24px
    fontWeight: '700'
    lineHeight: '1.2'
    letterSpacing: -0.01em
  body-lg:
    fontFamily: Hanken Grotesk
    fontSize: 18px
    fontWeight: '400'
    lineHeight: '1.6'
    letterSpacing: '0'
  body-md:
    fontFamily: Hanken Grotesk
    fontSize: 16px
    fontWeight: '400'
    lineHeight: '1.6'
    letterSpacing: '0'
  label-bold:
    fontFamily: Hanken Grotesk
    fontSize: 14px
    fontWeight: '700'
    lineHeight: '1.4'
    letterSpacing: 0.05em
  label-sm:
    fontFamily: Hanken Grotesk
    fontSize: 12px
    fontWeight: '500'
    lineHeight: '1.4'
    letterSpacing: '0'
rounded:
  sm: 0.125rem
  DEFAULT: 0.25rem
  md: 0.375rem
  lg: 0.5rem
  xl: 0.75rem
  full: 9999px
spacing:
  xs: 4px
  sm: 8px
  md: 16px
  lg: 24px
  xl: 32px
  xxl: 48px
---

## Brand & Style

This design system is engineered for **Industrial Precision**, reflecting the durability, power, and exactness of high-performance hydraulic systems. The aesthetic is rooted in **Structural Minimalism** with a nod to **Neo-Brutalism**, utilizing heavy strokes, high-contrast layers, and a strictly disciplined grid to communicate reliability and authority.

The target audience consists of engineers, procurement officers, and technical operators who value clarity and speed of information over decorative flourishes. The UI avoids all illusions of soft depth (like shadows or gradients) in favor of physical, flat-layered depth created by solid borders and distinct tonal shifts.

## Colors

The palette is high-contrast and functional, designed to draw immediate attention to critical actions and data points.

- **Primary (#E31E24):** A high-intensity red reserved exclusively for primary calls to action, critical alerts, and brand accents. 
- **Charcoal Gray (#2D2D2D):** Used for all headings, body text, and heavy structural borders to provide a solid, grounded feel.
- **Surface Neutrals:** Pure white (#FFFFFF) is the base for all main content areas, while the light gray (#F5F5F5) is used for secondary sections, sidebars, and inactive UI components to create subtle organizational separation.

## Typography

This design system utilizes **Hanken Grotesk** across all roles to maintain a cohesive, technical appearance. 

Headlines are designed to be "heavy" and impactful, utilizing Bold (700) and Heavy (800) weights with negative letter-spacing to create a dense, industrial feel. Body text prioritizes legibility with a generous 1.6 line-height ratio, ensuring technical specifications and long-form descriptions remain readable. Label styles often utilize uppercase styling and increased letter-spacing to differentiate data headers from content.

## Layout & Spacing

The layout is built on a rigorous **12-column fixed grid** with a maximum container width of 1280px. All spacing, padding, and margins are derived from an **8px base unit**.

- **Desktop (1280px+):** 12 columns, 24px gutters, 32px side margins.
- **Tablet (768px - 1279px):** 8 columns, 16px gutters, 24px side margins.
- **Mobile (< 767px):** 4 columns, 16px gutters, 16px side margins.

Alignment should be strict; elements should snap to the grid to maintain the industrial "built" aesthetic. Use white space intentionally—not for luxury, but for structural clarity.

## Elevation & Depth

This design system rejects the use of drop shadows and blurs. Instead, it employs **Flat Structural Layering** to communicate hierarchy:

1.  **Level 0 (Base):** White (#FFFFFF) background.
2.  **Level 1 (Sections):** Light Gray (#F5F5F5) backgrounds or panels with a 1px solid #E0E0E0 border.
3.  **Level 2 (Active/Heavy):** Elements wrapped in a 1px or 2px solid Charcoal (#2D2D2D) border.

To simulate "lifting" an element (e.g., on hover), do not add a shadow; instead, increase the border weight from 1px to 2px or shift the background color to a slightly darker neutral.

## Shapes

The shape language is strictly controlled to maintain a "machined" look. All interactive elements and containers utilize a **4px corner radius**. This provides just enough softening to distinguish the UI from raw code or blueprints while maintaining a sharp, precision-engineered character. Larger containers like cards and primary sections also adhere to this 4px standard.

## Components

### Buttons
- **Primary:** Solid Red (#E31E24) background, white text, uppercase, Bold 700. No border.
- **Secondary:** Transparent background, 2px solid Charcoal (#2D2D2D) border, charcoal text, uppercase, Bold 700.
- **Tertiary:** Text-only, charcoal, underlined on hover.

### Inputs & Form Fields
- **Default State:** 1px solid Charcoal (#2D2D2D) border, 4px corner radius, white background.
- **Focus State:** 2px solid Charcoal (#2D2D2D) border.
- **Labels:** Use the `label-bold` typography style, positioned directly above the input with a 4px gap.

### Cards & Surfaces
- **Data Cards:** 1px solid #E0E0E0 border, white background, no shadow.
- **Active Cards:** 2px solid #2D2D2D border.
- Use internal padding of 24px (3x base unit) for content density.

### Data Tables
- Header row uses #F5F5F5 background with a 1px solid #2D2D2D bottom border.
- All rows separated by 1px #E0E0E0 lines.
- No alternating row colors; use 1px borders for separation.

### Status Indicators
- Use the primary red for errors, but introduce a technical green (#28A745) for "System Ready/OK" and amber (#FFC107) for "Warning," ensuring all colors maintain high contrast against the charcoal text.
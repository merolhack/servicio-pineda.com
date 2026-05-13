---
name: Industrial Precision System
colors:
  surface: '#f9f9f9'
  surface-dim: '#dadada'
  surface-bright: '#f9f9f9'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f3f3f3'
  surface-container: '#eeeeee'
  surface-container-high: '#e8e8e8'
  surface-container-highest: '#e2e2e2'
  on-surface: '#1a1c1c'
  on-surface-variant: '#5d3f3c'
  inverse-surface: '#2f3131'
  inverse-on-surface: '#f1f1f1'
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
  tertiary: '#5b5b5c'
  on-tertiary: '#ffffff'
  tertiary-container: '#747474'
  on-tertiary-container: '#fdfbfb'
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
  tertiary-fixed: '#e3e2e2'
  tertiary-fixed-dim: '#c7c6c6'
  on-tertiary-fixed: '#1b1c1c'
  on-tertiary-fixed-variant: '#464747'
  background: '#f9f9f9'
  on-background: '#1a1c1c'
  surface-variant: '#e2e2e2'
typography:
  headline-xl:
    fontFamily: Hanken Grotesk
    fontSize: 48px
    fontWeight: '800'
    lineHeight: 56px
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Hanken Grotesk
    fontSize: 32px
    fontWeight: '700'
    lineHeight: 40px
    letterSpacing: -0.01em
  headline-md:
    fontFamily: Hanken Grotesk
    fontSize: 24px
    fontWeight: '700'
    lineHeight: 32px
  body-lg:
    fontFamily: Hanken Grotesk
    fontSize: 18px
    fontWeight: '400'
    lineHeight: 28px
  body-md:
    fontFamily: Hanken Grotesk
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
  label-lg:
    fontFamily: Hanken Grotesk
    fontSize: 14px
    fontWeight: '600'
    lineHeight: 20px
    letterSpacing: 0.05em
  label-sm:
    fontFamily: Hanken Grotesk
    fontSize: 12px
    fontWeight: '500'
    lineHeight: 16px
  headline-xl-mobile:
    fontFamily: Hanken Grotesk
    fontSize: 36px
    fontWeight: '800'
    lineHeight: 44px
  headline-lg-mobile:
    fontFamily: Hanken Grotesk
    fontSize: 28px
    fontWeight: '700'
    lineHeight: 36px
rounded:
  sm: 0.125rem
  DEFAULT: 0.25rem
  md: 0.375rem
  lg: 0.5rem
  xl: 0.75rem
  full: 9999px
spacing:
  base: 8px
  container-max: 1280px
  gutter: 24px
  margin-desktop: 64px
  margin-mobile: 20px
---

## Brand & Style
The design system is engineered to project reliability, technical expertise, and industrial robustness. It serves a professional audience that values efficiency and precision over decorative flair. The aesthetic is rooted in **Corporate Modernism** with a **High-Contrast** edge, utilizing stark white spaces and bold charcoal typography to establish immediate authority. 

The visual language communicates a "no-nonsense" attitude. Every element is purposeful, mirroring the structural integrity of industrial machinery. The emotional response is one of trust and stability, achieved through a structured grid, generous negative space, and a restricted but powerful color palette.

## Colors
This palette is designed for maximum legibility and functional signaling. 

*   **Primary Red (#E31E24):** Reserved exclusively for high-priority actions, critical status alerts, and brand accents. It acts as a visual "ignition" point within the interface.
*   **Charcoal Gray (#2D2D2D):** Used for primary headings and body text to ensure high contrast against light backgrounds, providing a softer but equally authoritative alternative to pure black.
*   **Functional Neutrals:** A range of grays from `#757575` (secondary text) to `#F5F5F5` (surface backgrounds) creates a layered hierarchy without relying on depth-heavy shadows.
*   **White (#FFFFFF):** The core canvas color, used to maintain a clean, clinical, and modern environment.

## Typography
The design system utilizes **Hanken Grotesk** across all touchpoints. This choice provides a sharp, contemporary, and engineered feel that remains highly legible in technical contexts.

Headlines are set with heavy weights and tight letter-spacing to mimic industrial signage and blueprint headers. Body text maintains a generous line height to ensure readability for technical specifications. Labels utilize uppercase styling with increased tracking to differentiate functional UI metadata from narrative content.

## Layout & Spacing
The layout follows a **Fixed Grid** philosophy on desktop to project a sense of organized structure and containment.

*   **Grid Model:** A 12-column grid system is used for desktop (1280px max-width) and tablet, collapsing to a single column on mobile devices.
*   **Spacing Rhythm:** All spatial relationships are governed by an 8px base unit. 
*   **Gutters & Margins:** Gutters are fixed at 24px to ensure distinct separation between data points. Wide external margins (64px) on desktop are used to frame the content, focusing the user's eye on the technical details.
*   **Verticality:** Content blocks are separated by significant vertical padding (80px - 120px) to prevent the "technical" nature of the brand from feeling cluttered or overwhelming.

## Elevation & Depth
Depth in the design system is communicated through **Flat High-Contrast Layers** rather than realistic shadows. This reinforces the technical, blueprint-like aesthetic.

*   **Low-Contrast Outlines:** Instead of shadows, surfaces are defined by 1px or 2px solid strokes in `#E0E0E0` or `#2D2D2D`.
*   **Tonal Layering:** Depth is achieved by placing `#FFFFFF` cards on `#F5F5F5` backgrounds. 
*   **Active States:** When an element is focused or active, it does not "lift"; instead, it receives a thick, high-contrast border or a solid color fill (using the Primary Red).

## Shapes
The shape language is "Soft" (Level 1), utilizing a 4px corner radius. This subtle rounding provides just enough approachability to feel modern while maintaining the rigid, "machined" appearance necessary for an industrial brand. Sharp 90-degree angles are avoided to prevent the UI from feeling dated or hostile, but excessive rounding is strictly prohibited to maintain a professional tone.

## Components
Consistent implementation of components ensures the design system remains a cohesive tool for technical communication.

*   **Buttons:** Primary buttons are solid `#E31E24` with white uppercase text. Secondary buttons use a 2px `#2D2D2D` border. All buttons use the 4px corner radius and lack gradients or shadows.
*   **Input Fields:** Defined by a 1px `#2D2D2D` border. On focus, the border weight increases to 2px. Labels are always positioned above the field in the `label-lg` style.
*   **Cards:** Pure white backgrounds with a subtle `#F5F5F5` stroke. No box-shadows are used. Header sections within cards are often demarcated by a light gray background fill.
*   **Chips & Tags:** Used for status (e.g., "In Service", "Under Maintenance"). These utilize high-contrast background fills with bold typography.
*   **Data Lists:** Technical specs should be presented in clean, bordered rows with alternating light gray backgrounds for row-level scanning.
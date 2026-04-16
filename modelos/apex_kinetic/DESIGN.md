# Design System Document: The Kinetic Precision Framework

## 1. Overview & Creative North Star: "The Neon Pulse"
This design system is built to transform a standard fitness application into a high-performance, editorial-grade digital experience. The "Neon Pulse" North Star dictates a UI that feels alive, rhythmic, and elite. We move away from the static, "boxed-in" feel of traditional apps by utilizing high-contrast accents against an infinite deep-space void. 

To achieve a premium feel, we break the grid with **intentional asymmetry**: large-scale typography that overflows containers, overlapping glass layers, and "breathing" layouts that prioritize focus over density. This isn't just a tracker; it’s a coach in digital form.

---

## 2. Colors: Depth & Luminescence
Our palette is rooted in the `background` (#0a0e14) to provide maximum contrast for our high-energy accents.

*   **Primary (Electric Growth):** `primary` (#ddffaf) and `primary_container` (#a3fe00). Use these for peak momentum—PRs, active workout timers, and primary action buttons.
*   **Secondary (Neon Flow):** `secondary` (#00e3fd). Use this for technical data, secondary navigational elements, and "cool down" states.
*   **The "No-Line" Rule:** Under no circumstances should 1px solid borders be used to separate sections. Boundaries are defined by shifting from `surface` to `surface_container_low` or `surface_container_high`.
*   **Surface Hierarchy & Nesting:** Treat the UI as layers of dark obsidian. 
    *   Base layer: `background`
    *   In-page sections: `surface_container_low`
    *   Interactive Cards: `surface_container_highest`
*   **The "Glass & Gradient" Rule:** Floating action buttons or modal overlays must use a **Glassmorphism** effect: `surface_variant` at 60% opacity with a `24px` backdrop-blur. Apply a linear gradient from `primary` to `primary_container` (at 15% opacity) as a subtle overlay to add "soul" to empty states.

---

## 3. Typography: Editorial Authority
We use a dual-font strategy to balance technical precision with high-impact motivation.

*   **Display & Headlines (Space Grotesk):** This is our "Brutalist" voice. Use `display-lg` (3.5rem) for workout summaries and `headline-md` (1.75rem) for exercise names. Don't be afraid to let these bleed close to the edge of the screen to create a sense of scale.
*   **Body & Labels (Manrope):** Our "Functional" voice. `body-lg` (1rem) is for instructions; `label-md` (0.75rem) is for metadata (e.g., "Set 1 of 3").
*   **Hierarchy Tip:** Use `primary` color for key numerical data (Weight, Reps) to make them pop against the `on_surface_variant` descriptive text.

---

## 4. Elevation & Depth: Tonal Layering
Traditional shadows are too heavy for a dark UI. We use light and transparency to create height.

*   **The Layering Principle:** To lift a card, place a `surface_container_highest` element on top of a `surface_dim` background. This creates a "soft lift" that feels architectural rather than applied.
*   **Ambient Shadows:** For floating elements (Modals/FABs), use a shadow color tinted with `primary` (at 5% opacity) with a blur of `40px`. This simulates a neon glow rather than a grey shadow.
*   **The "Ghost Border" Fallback:** If a divider is mandatory for accessibility, use `outline_variant` at 15% opacity. It should be felt, not seen.
*   **Glassmorphism:** Use `surface_bright` with 40% opacity for top navigation bars to allow the vibrant colors of the workout content to scroll beneath it, maintaining a sense of spatial depth.

---

## 5. Components: High-Performance Primitives

### Cards & Containers
*   **Rule:** Minimum radius is `DEFAULT` (1rem/16px), but hero cards should use `md` (1.5rem/24px).
*   **Layout:** No dividers. Separate content using `spacing-6` (2rem) of vertical whitespace.

### Buttons (The Kinetic Triggers)
*   **Primary:** Background: `primary_container`. Text: `on_primary_container`. Shape: `full` (pill). These should feel like "Start" buttons on a high-end supercar.
*   **Secondary:** Background: `transparent`. Border: `outline` at 20% opacity. Text: `secondary`.
*   **State Change:** On press, the button should scale down to 96% and increase `surface_tint` intensity.

### Chips (Performance Tags)
*   **Style:** Use `surface_container_highest` with `label-md` text. For "Active" filters, switch background to `secondary_container` and text to `on_secondary_container`.

### Inputs (Data Entry)
*   **Style:** Minimalist. No bottom line. Use `surface_container_low` with a `sm` (0.5rem) radius.
*   **Error State:** Border becomes `error` (#ff7351) with a soft glow of the same color.

### Specialized Component: The "Progress Pulse"
*   A custom progress bar using a gradient from `secondary` to `primary`. The leading edge should have a small "glow" element (a 4px shadow with the `primary` color) to represent the "current moment" of the workout.

---

## 6. Do's and Don'ts

### Do:
*   **Use Oversized Type:** Let a "120 BPM" label be massive (`display-md`) to create a focal point.
*   **Embrace the Dark:** Keep 90% of the UI in `background` and `surface_container_low`. The neon accents only work if the rest of the UI stays out of the way.
*   **Subtle Animation:** Use "Ease-Out-Expo" for transitions (300ms) to mimic the feeling of elite athletic equipment.

### Don't:
*   **Don't use pure white (#FFFFFF):** Use `on_background` (#f1f3fc) to prevent eye strain in dark environments (the gym).
*   **Don't use Dividers:** Avoid horizontal lines. If you need to separate two pieces of data, use a background color shift or a `spacing-4` gap.
*   **Don't use standard Icons:** Use thin-line (1.5pt) custom icons that match the "Modern & Clean" aesthetic. Avoid filled icons unless they are in an "active" state.

---

**Director's Final Note:** 
This system is about **contrast**. The deep blacks represent the grind; the neon greens represent the energy. Keep the layouts spacious and the typography bold. If the UI feels "quiet" but "powerful," you have succeeded.
# Design System Strategy: The Luminescent Editorial

## 1. Overview & Creative North Star
The Creative North Star for this design system is **"The Digital Curator."** 

This is not a template; it is a high-end digital gallery. We move away from the rigid, boxed-in layouts of standard SaaS and move toward an editorial experience characterized by intentional asymmetry, vast "breathing room," and tonal depth. By utilizing the deep `background` (#0e141a) as a canvas, we treat UI elements not as static boxes, but as floating planes of glass and light. The system rejects traditional structural lines in favor of **Tonal Layering**, creating a sophisticated, multi-dimensional environment that feels both expansive and intimate.

---

## 2. Colors & Surface Architecture
Our palette is rooted in deep obsidian tones, punctuated by the electric "glow" of Cyan and Teal accents.

### The "No-Line" Rule
**Explicit Instruction:** Designers are prohibited from using 1px solid borders for sectioning or containment. Traditional borders create "visual noise" that cheapens the premium feel. Instead, boundaries must be defined through:
- **Background Color Shifts:** Using `surface-container-low` (#161c22) sections against the `surface` (#0e141a) background.
- **Tonal Transitions:** Defining edges through the natural contrast of nested containers.

### Surface Hierarchy & Nesting
Treat the UI as a series of physical layers—stacked sheets of frosted glass.
*   **Base:** `surface` (#0e141a) – The infinite canvas.
*   **Sectioning:** `surface-container-low` (#161c22) – Used for large logical blocks.
*   **Component Level:** `surface-container` (#1a2027) – Used for cards and primary UI elements.
*   **Elevated Elements:** `surface-container-highest` (#2f353c) – Used for hover states or "floating" modals.

### The "Glass & Gradient" Rule
To achieve the "Agency" feel, main CTAs and Hero elements must use signature textures.
*   **Glow Gradients:** Transition from `primary` (#a9c7ff) to `primary-container` (#3d90ff) at a 135-degree angle.
*   **Signature Glows:** Use `secondary_container` (#00e3fd) as a blur-background behind key metrics or headlines to simulate a "Cyan glow" effect.

---

## 3. Typography: The Editorial Voice
We utilize a high-contrast scale to create an authoritative, curated hierarchy.

*   **Display & Headlines (Plus Jakarta Sans / Outfit):** These are the "Art Pieces." Use `display-lg` (3.5rem) for hero statements with tight letter-spacing (-0.02em). The bold weight conveys confidence and modernism.
*   **Body & Titles (Inter):** These are the "Information Layer." Use `body-lg` (1rem) for readability. Inter’s neutral, clean structure balances the expressive nature of the headlines.
*   **Labels (Inter):** Used for micro-copy and metadata. Always in `label-md` or `label-sm`, often with increased letter-spacing (+0.05em) to maintain a "Technical-Chic" aesthetic.

---

## 4. Elevation & Depth
Depth in this system is achieved through light and layering, not drop shadows.

*   **The Layering Principle:** Place a `surface-container-lowest` card on a `surface-container-low` section. The subtle value shift creates a "natural lift" that feels architectural.
*   **Ambient Shadows:** If a floating effect is mandatory (e.g., a dropdown), use a shadow with a `48px` blur and `6%` opacity. The shadow color must be a tinted version of the background, never pure black.
*   **The "Ghost Border" Fallback:** If accessibility requires a border, use the `outline-variant` (#414754) token at **15% opacity**. It should feel like a suggestion of an edge, not a hard line.
*   **Glassmorphism:** For navigation bars and floating chips, use `surface-variant` (#2f353c) at 60% opacity with a `backdrop-filter: blur(20px)`.

---

## 5. Components

### Buttons
*   **Primary:** Gradient fill (`primary` to `primary-container`), `rounded-xl`, with a subtle outer glow on hover using `surface_tint`.
*   **Secondary:** Ghost style. Transparent background with a "Ghost Border" and `on_surface` text.
*   **Tertiary:** Text-only with an animated underline that expands from the center on hover.

### Cards & Lists
*   **The Grid:** Forbid the use of divider lines. Separate list items using the spacing scale (e.g., `spacing-4` or `1.4rem`).
*   **Card Styling:** Use `rounded-2xl` (1rem) for all cards. Backgrounds should be `surface-container`. On hover, transition to `surface-container-high` and apply a slight vertical translation (-4px).

### Input Fields
*   **State:** Default state is a `surface-container-low` fill.
*   **Focus State:** The field background remains, but the "Ghost Border" increases to 40% opacity in the `secondary` (#bdf4ff) color. No heavy glow; just a sharp, clean highlight.

### Signature Component: The "Lume-Badge"
A small selection chip or status indicator using a `secondary_fixed_dim` (#00daf3) background with 10% opacity and a high-saturation `secondary` text color. It mimics a glowing LED indicator.

---

## 6. Do’s and Don’ts

### Do:
*   **Use Asymmetry:** Place a large headline on the left and a small body paragraph offset to the right. Use the `spacing-24` (8.5rem) token to create massive gaps between sections.
*   **Layer Surfaces:** Place dark containers on slightly lighter sections to create a "recessed" look.
*   **Respect the "Deep Dark":** Keep the primary background `background` (#0e141a) to maintain the high-end OLED feel.

### Don’t:
*   **No 100% Opacity Borders:** Never use a solid, high-contrast line to separate content.
*   **No "Flat" Grays:** Avoid neutral grays. Every "neutral" in this system is slightly blue-tinted to maintain the Teal/Cyan atmosphere.
*   **No Standard Shadows:** Never use the default `box-shadow: 0 4px 6px rgba(0,0,0,0.1)`. It destroys the curated, custom feel of the system.
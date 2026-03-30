```markdown
# High-End Editorial Design System: Implementation Guide

## 1. Overview & Creative North Star: "The Digital Curator"

This design system is built on the philosophy of **The Digital Curator**. Unlike standard "SaaS" templates that rely on rigid grids and heavy borders, this system treats the screen as a curated editorial space. It balances the authoritative weight of a high-end literary agency with the fluid, breathing energy of a modern creative community.

To move beyond "standard" UI, we employ **Intentional Asymmetry** and **Tonal Layering**. The goal is to create a signature experience where content is not just "displayed," but "presented." We achieve this through high-contrast typography scales and an "Invisible Structure" that relies on negative space rather than lines.

---

## 2. Colors & Surface Logic

Our palette moves from the deep, intellectual blues of a private library (`primary`: `#091426`) to the vibrant, creative spark of `secondary` teal (`#006a61`).

### The "No-Line" Rule
**Explicit Instruction:** Do not use 1px solid borders to section content. Boundaries must be defined solely through background color shifts. Use `surface-container-low` sections sitting on a `surface` background to define structural change.

### Surface Hierarchy & Nesting
Treat the UI as a series of physical layers—like stacked sheets of heavy-weight paper. Use the surface-container tiers to create nested depth:
*   **Base Layer:** `surface` (#f6fafe) or `surface-container-low` (#f0f4f8).
*   **Content Cards:** `surface-container-lowest` (#ffffff) to provide a clean, high-contrast lift.
*   **Elevated Details:** `surface-container-highest` (#dfe3e7) for small, interactive components like search bars or filter anchors.

### The "Glass & Gradient" Rule
To inject "soul" into the professional framework:
*   **Glassmorphism:** Use `surface-container-lowest` at 70% opacity with a `backdrop-blur: 12px` for floating navigation bars or talent filter overlays.
*   **Signature Gradients:** Apply a subtle linear gradient from `primary` (#091426) to `primary-container` (#1e293b) at a 135-degree angle for main Hero sections or primary CTAs. This prevents the deep blues from feeling "flat" or "heavy."

---

## 3. Typography: The Editorial Voice

We pair the modern utility of **Inter** with the intellectual sophistication of **Newsreader** (an evolution of the requested Playfair/Serif style for better digital readability).

*   **Display & Headline (Newsreader):** Used for "The Hook." High-end editorial feel. Headlines should have a tighter letter-spacing (-0.02em) to feel intentional and authoritative.
*   **Title & Body (Inter):** Used for "The Information." Inter provides the accessibility of a community platform.
*   **Hierarchy as Identity:** The jump between `headline-lg` (2rem) and `title-sm` (1rem) should be sharp. Don't be afraid of large Newsreader headlines followed by small, clean Inter body text; this contrast is what creates the "Agency" aesthetic.

---

## 4. Elevation & Depth: Tonal Layering

Traditional drop shadows are forbidden unless specified. We use **Tonal Layering** to convey hierarchy.

*   **The Layering Principle:** Place a `surface-container-lowest` card on a `surface-container-low` section. The subtle difference in hex values provides all the "lift" required for a sophisticated interface.
*   **Ambient Shadows:** If a floating effect is required (e.g., a Talent Card hover state), use a shadow with a 40px blur, 4% opacity, using the `on-surface` color (#171c1f) as the tint.
*   **The "Ghost Border" Fallback:** If a border is required for accessibility in input fields, use `outline-variant` (#c5c6cd) at 20% opacity. **Never use 100% opaque borders.**

---

## 5. Components

### Talent Cards (The Directory)
*   **Structure:** No borders. Use `surface-container-lowest` on a `surface-container-low` background.
*   **Spacing:** Use `spacing-6` (1.5rem) for internal padding to ensure the content "breathes."
*   **Imagery:** Talent avatars should have a `rounded-lg` (0.5rem) corner radius.

### Buttons
*   **Primary:** `primary` background with `on-primary` text. Use a subtle 2px vertical lift on hover.
*   **Secondary/Creative:** `secondary` (#006a61) background. Use this only for "Dynamic" actions like "Join the Bank" or "Submit Manuscript."
*   **Tertiary:** No background. `primary` text with `label-md` styling.

### Filters & Chips
*   **Filter Chips:** Use `surface-container-highest` backgrounds with `label-md` Inter text. Selected states should transition to `secondary-container` (#86f2e4) with `on-secondary-container` text.
*   **Layout:** In the Talent Bank, filters should be sticky on the left or top, utilizing a "Glass" backdrop blur effect to float over the scrolling content.

### Input Fields
*   **Base:** `surface-container-lowest` background.
*   **Indicator:** A 2px bottom-bar of `secondary` (#006a61) that expands from the center on focus. Avoid the "box" look; prefer a sophisticated underline or a very soft, ghost-bordered container.

---

## 6. Do’s and Don’ts

### Do
*   **Do use asymmetric white space.** Allow large margins on the left of headlines to create an editorial layout.
*   **Do use `secondary` (#006a61) as a tactical spark.** Use it for small icons, active states, or "New" badges.
*   **Do prioritize typography over icons.** In a literary platform, the word is the hero.

### Don't
*   **Don't use dividers.** Never use a horizontal line to separate two list items. Use `spacing-4` (1rem) or a subtle color shift instead.
*   **Don't use pure black.** Use `primary` (#091426) for deep tones to maintain the intellectual, blue-hued "Trust" palette.
*   **Don't crowd the Talent Bank.** If the directory feels like a spreadsheet, you have failed the "Curator" North Star. Increase your `spacing` scale values.

---

## 7. Signature Editorial Components

*   **The Pull Quote:** A large `headline-sm` Newsreader text block, center-aligned, with a `secondary` teal left-accent bar (4px width).
*   **The Subtle Parallax:** Image containers in the Talent Bank should have a slight scroll-speed difference to give the feel of a high-end agency site.
*   **Curated Grid:** In the directory, every 3rd card should be 1.5x the width of the others, breaking the "monotonous grid" and highlighting featured talent.```
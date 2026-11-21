# Design System Master File — Erbol & Nuraida (`Эрбол & Нураида`)

> **LOGIC:** Strict Monochrome Editorial & Paper Collage system customized from `ui-ux-pro-max` (`minimalist-monochrome` + `Luxury Minimalist` + `cyrillic-ext` font verification).

---

**Project:** erbol-nuraida (Youth Monochrome Wedding Invitation)
**Updated:** 2026-11-21
**Category:** Wedding Event Editorial
**Primary Language:** Kyrgyz (`ky`, `КЫР`) | **Secondary:** Russian (`ru`, `РУС`)
**Design Dials:** Variance 7/10 | Motion 6/10 | Density 3/10 (Spacious)

---

## Global Rules

### Color Palette (Strict Monochrome)

| Role | Hex | CSS Variable |
|------|-----|--------------|
| Background (Alabaster Paper) | `#F4F2EE` | `--color-background` |
| Surface Paper Warm | `#EFECE8` | `--color-paper-warm` |
| Backdrop Stage (Desktop Gray) | `#D8D6D1` | `--color-stage` |
| Primary / Ink | `#111111` | `--color-primary` |
| On Primary | `#F4F2EE` | `--color-on-primary` |
| Deep Noir / Torn Paper | `#0A0A0A` | `--color-noir` |
| Charcoal / Secondary | `#1A1A1A` | `--color-secondary` |
| Foreground | `#111111` | `--color-foreground` |
| Card | `#F4F2EE` | `--color-card` |
| Card Foreground | `#111111` | `--color-card-foreground` |
| Muted | `#E7E4DE` | `--color-muted` |
| Muted Foreground | `#52504C` | `--color-muted-foreground` |
| Border / Hairline | `#111111` | `--color-border` |
| Border Subtle | `#CFCBC4` | `--color-border-subtle` |
| Ring | `#111111` | `--color-ring` |

### Typography (`cyrillic` + `cyrillic-ext` Verified for Kyrgyz `Ө ө`, `Ү ү`, `Ң ң`)

- **Display / Editorial Serif:** `Cormorant Garamond` (weights 300, 400, 500, 600, italic 400)
- **Tracked Small-Caps Serif:** `Cormorant SC` (weights 400, 500, 600)
- **Micro-UI / Clean Sans:** `Manrope` (weights 300, 400, 500, 600)
- **Calligraphic Script:** `Bad Script` + `Caveat` (weights 400, 500)
- **Google Fonts Import:**
```css
@import url('https://fonts.googleapis.com/css2?family=Bad+Script&family=Caveat:wght@400;500&family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;1,300;1,400&family=Cormorant+SC:wght@400;500;600&family=Manrope:wght@300;400;500;600&display=swap&subset=cyrillic,cyrillic-ext');
```

### Geometry & Collage Rules
- **Border Radius:** `0px` on all cards, buttons, inputs, and modals (strictly editorial / sharp paper edges).
- **Shadows:** Subtle soft paper elevation (`0 24px 60px rgba(10, 10, 10, 0.14)`) on the 3 triptych panels over the stage; flat `0` shadows inside panels.
- **Collage Elements:** Torn black paper SVG cutouts (`#121212` + fractal noise grain), 1px sweeping bezier SVG hairlines, B&W film grain portrait rendering (`grayscale(100%) contrast(1.12)`).
- **Anti-Patterns:** Zero ethno ornaments, zero gold gradients, zero emoji icons inside UI chrome (use crisp 1px SVG icons), zero horizontal scroll on mobile.

### Spacing Variables (`Density: 3/10 — Spacious`)
- `--space-xs: 4px`
- `--space-sm: 8px`
- `--space-md: 24px`
- `--space-lg: 32px`
- `--space-xl: 48px`
- `--space-2xl: 64px`
- `--space-3xl: 96px`

---

## Pre-Delivery Checklist
- [x] Kyrgyz `Ө`, `Ү`, `Ң` glyphs verified via `cyrillic-ext` subsets
- [x] No emojis used as UI icons (SVG only)
- [x] `cursor: pointer` on all interactive buttons & toggles
- [x] High contrast (`>= 4.5:1`) in both light alabaster and dark noir sections
- [x] Visible focus rings for keyboard navigation
- [x] `prefers-reduced-motion` honored
- [x] Responsive across `375px`, `768px`, `1024px`, `1440px`

# NORTHLINE

A fictional gorpcore / outdoor streetwear brand built as a frontend portfolio project. The site combines editorial aesthetics with a clean vanilla JavaScript architecture across a main landing page and four category pages.

---

## Preview

```
index.html              → main landing page
html/fleece.html        → Fleece category
html/bottoms.html       → Bottoms category
html/accessories.html   → Accessories category
html/footwear.html      → Footwear category
```

---

## Tech Stack

| Layer   | Technology                                       |
| ------- | ------------------------------------------------ |
| Markup  | HTML5                                            |
| Styles  | SCSS (BEM methodology) → compiled to `*.min.css` |
| Scripts | Vanilla JavaScript (ES Modules)                  |
| Fonts   | Anton + Space Grotesk via Google Fonts           |
| Tooling | Live Sass Compiler (VS Code)                     |

No frameworks. No build tools beyond the Sass compiler.

---

## Project Structure

```
northline/
├── index.html
├── html/
│   ├── fleece.html
│   ├── bottoms.html
│   ├── accessories.html
│   └── footwear.html
│
├── scss/                        # Source + compiled CSS (Live Sass output)
│   ├── index/
│   │   ├── style.scss           # Entry point
│   │   ├── style.min.css        # Compiled output
│   │   ├── _header.scss
│   │   ├── _hero.scss
│   │   ├── _about.scss
│   │   ├── _collection.scss
│   │   ├── _values.scss
│   │   ├── _modal.scss
│   │   ├── _product-card.scss
│   │   └── _footer.scss
│   ├── fleece/
│   │   ├── fleece.scss
│   │   ├── fleece.min.css
│   │   └── _*.scss              # Partials per section
│   ├── bottoms/
│   │   ├── bottoms.scss
│   │   ├── bottoms.min.css
│   │   └── _*.scss
│   ├── accesories/
│   │   ├── accesories.scss
│   │   ├── accesories.min.css
│   │   └── _*.scss
│   └── footwear/
│       ├── footwear.scss
│       ├── footwear.min.css
│       └── _*.scss
│
├── js/
│   ├── index/
│   │   ├── pages/home.js        # Entry point
│   │   ├── data/                # about-data, hero-data, section-data, value-data
│   │   └── components/          # about-cards, hero-cards, section-cards, value-cards
│   ├── fleece/
│   │   ├── pages/fleece.js
│   │   ├── data/                # featured-data, hero-data, shop-data
│   │   └── components/          # featured-card, hero-card, shop-card
│   ├── bottoms/        (same structure)
│   ├── accesories/     (same structure)
│   ├── footwear/       (same structure)
│   │
│   └── modules/                 # DOM wiring + behaviour per page
│       ├── index/
│       │   ├── about/           # render-about, init-slider, product-modal
│       │   ├── hero/            # hero-render
│       │   ├── section/         # render-section
│       │   └── render-value.js
│       ├── fleece/
│       │   ├── featured/        # render-featured, featured-modal
│       │   ├── hero/            # render-hero
│       │   └── shop/            # render-shop, init-slider, shop-modal
│       ├── bottoms/    (same structure)
│       ├── accesories/ (same structure)
│       └── footwear/   (same structure)
│
└── img/
    ├── index/track/             # Product images for the About carousel
    ├── fleece/
    │   ├── hero/
    │   ├── featured/
    │   ├── collection/
    │   └── shop/id{1–5}/        # Per-product image sets
    ├── bottoms/
    │   └── shop/id{1–6}/
    ├── accesories/
    │   └── shop/id{1–6}/
    └── footwear/
        └── shop/id{1–6}/
```

---

## JS Architecture

Every page follows the same three-layer pattern:

```
data → component → module → page entry
```

| Layer           | Location                | Responsibility                                                                 |
| --------------- | ----------------------- | ------------------------------------------------------------------------------ |
| **data/**       | `js/[page]/data/`       | Plain JS arrays describing products, hero copy, values                         |
| **components/** | `js/[page]/components/` | Pure functions that receive one data object and return an HTML string          |
| **modules/**    | `js/modules/[page]/`    | Query the DOM, call components, attach event listeners                         |
| **pages/**      | `js/[page]/pages/`      | Single entry file per page; imports and calls everything on `DOMContentLoaded` |

Components and modules are content-agnostic — swapping a data file is enough to repopulate a section.

---

## Sections

### Index page

| Section              | Description                                                                                                                                         |
| -------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Header**           | Navigation with links to all four category pages                                                                                                    |
| **Hero**             | Full-screen editorial hero; content injected via JS                                                                                                 |
| **About / Carousel** | Auto-scrolling product card slider with dot navigation and prev / next buttons; clicking a card opens a product detail modal with an image carousel |
| **Collection**       | Featured seasonal collection banner                                                                                                                 |
| **Values**           | Numbered brand-pillar list with hover highlight                                                                                                     |
| **Footer**           | Copyright + social / contact links                                                                                                                  |

### Category pages (Fleece, Bottoms, Accessories, Footwear)

| Section        | Description                                                                                                                                                   |
| -------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Header**     | Navigation back to Home and to sibling categories                                                                                                             |
| **Hero**       | Full-screen editorial hero; content injected via JS                                                                                                           |
| **Featured**   | Numbered editorial cards in a product-story format; each opens a detail modal                                                                                 |
| **Collection** | Static seasonal banner with background image and CTA                                                                                                          |
| **Shop**       | Auto-scrolling product card slider with dot navigation, counter, and prev / next buttons; clicking a card opens a product detail modal with an image carousel |
| **Footer**     | Copyright + social / contact links                                                                                                                            |

---

## Key Features

**Product modal** — event delegation on the slider track via `data-id` attributes; a `createModalContent()` function builds the gallery HTML on demand; `initCarousel()` wires arrows and dots after injection.

**Featured modal** — separate overlay for editorial cards; Escape key closes it.

**Shop / About slider** — `init-slider.js` shared across all pages; `goTo(index)` wraps with `% n` so navigation is infinite in both directions; auto-scrolls every 3 s and resets the timer on manual interaction.

**Scroll-reveal** — `IntersectionObserver` with `threshold: 0.15`; adds class `.in` once and calls `unobserve()` immediately so elements don't re-animate on scroll back.

---

## Getting Started

No package install required.

1. Clone or download the repository.
2. Open in VS Code and start **Live Server** (port 5501 is pre-configured).
   ES Modules require HTTP — opening the HTML file directly in a browser will not load the scripts.
3. To edit styles, modify any `.scss` file in `scss/`; **Live Sass Compiler** will output the corresponding `.min.css` automatically.

---

## Design Tokens

Defined in `:root` inside each page's SCSS entry:

```scss
--main-white: #ffffff;
--main-black: #000000;
--main-gray: #979595;
--secondary-color: #63103a;
--orange: #ff6600;
```

---

## Author

Ron — © 2026

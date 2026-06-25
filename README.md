# NORTHLINE

A fictional gorpcore / outdoor streetwear brand experience built as a frontend portfolio project. The site combines editorial aesthetics with clean vanilla JavaScript architecture to create an immersive product landing page.

---

## Preview

> `index.html` → main landing page  
> `html/fleece.html` → category page (Fleece collection)  
> `html/bottoms.html` → category page (Bottoms collection)

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
test portfolio/
├── index.html                    # Main landing page
├── html/
│   ├── fleece.html               # Fleece category page
│   ├── bottoms.html              # Bottoms category page
│   ├── accessories.html
│   └── footwear.html
├── scss/                         # SCSS source files (compiled by Live Sass)
│   ├── index/
│   │   ├── style.scss            # Main SCSS entry point
│   │   ├── style.min.css         # Compiled output
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
│   │   └── _*.scss               # Partials per section
│   └── bottoms/
│       ├── bottoms.scss
│       ├── bottoms.min.css
│       └── _*.scss               # Partials per section
├── css/                          # Legacy / copied compiled CSS
│   ├── style.min.css
│   ├── fleece.min.css
│   ├── modal-fixes.css
│   ├── index/style.min.css
│   └── fleece/fleece.min.css
├── js/
│   ├── index/
│   │   ├── pages/home.js         # Entry point — initialises all modules
│   │   ├── data/                 # Static data arrays (products, hero, values)
│   │   └── components/           # Template functions that return HTML strings
│   ├── fleece/
│   │   ├── pages/fleece.js
│   │   ├── data/
│   │   └── components/
│   ├── bottoms/
│   │   ├── pages/bottoms.js
│   │   ├── data/
│   │   └── components/
│   ├── modules/                  # Render & behaviour logic per page
│   │   ├── index/
│   │   │   ├── about/            # Slider, modal, render
│   │   │   ├── hero/
│   │   │   ├── section/
│   │   │   └── render-value.js
│   │   ├── fleece/
│   │   │   ├── featured/         # Featured modal, render
│   │   │   ├── hero/
│   │   │   └── shop/             # Slider, product modal, render
│   │   └── bottoms/
│   │       ├── featured/
│   │       ├── hero/
│   │       └── shop/
│   └── utils/
└── img/
    ├── index/
    │   ├── hero/
    │   ├── colection/
    │   └── track/                # Product images for the carousel
    ├── fleece/
    │   ├── hero/
    │   ├── featured/
    │   ├── collection/
    │   └── shop/                 # Per-product image sets (id1–id5)
    └── bottoms/
        ├── hero/
        ├── featured/
        ├── collection/
        └── shop/                 # Per-product image sets (id1–id6)
```

### JS Architecture

The JavaScript follows a strict three-layer separation of concerns:

```
data → component → render / module
```

- **data/** — plain JS arrays/objects describing content (products, copy, etc.)
- **components/** — pure functions that receive a data object and return an HTML string
- **modules/** — functions that query the DOM, call components, and attach behaviour; live at `js/modules/[page]/` (separate from data and components)
- **pages/** — single entry file per page that imports and initialises everything on `DOMContentLoaded`

---

## Sections (index page)

| Section              | Description                                                                                |
| -------------------- | ------------------------------------------------------------------------------------------ |
| **Header**           | Fixed navigation with links to category pages                                              |
| **Hero**             | Full-screen editorial hero, content injected via JS                                        |
| **About / Carousel** | Horizontally scrollable product card slider with dot navigation and a product detail modal |
| **Collection**       | Featured collection grid                                                                   |
| **Values**           | Numbered list of brand pillars (waterproofing, delivery, quality, returns, warranty)       |
| **Footer**           | Copyright + social / contact links                                                         |

## Sections (category pages — Fleece & Bottoms)

| Section        | Description                                                                                                                                |
| -------------- | ------------------------------------------------------------------------------------------------------------------------------------------ |
| **Header**     | Navigation back to Home and to sibling category pages                                                                                      |
| **Hero**       | Full-screen editorial hero, content injected via JS                                                                                        |
| **Featured**   | Numbered editorial cards (product story format), each opens a featured detail modal                                                        |
| **Collection** | Static seasonal banner with image, season label, and CTA button                                                                            |
| **Shop**       | Horizontally scrollable product slider with dot navigation, counter, and prev / next buttons; clicking a card opens a product detail modal |
| **Footer**     | Copyright + social / contact links                                                                                                         |

---

## Key Features

- **Product modal** — clicking a product card in the Shop slider opens a detail overlay with a full image gallery, brand, title, price, and description. Built with event delegation via `data-id` attributes.
- **Featured modal** — clicking a featured editorial card opens a separate overlay with a larger image and extended product copy.
- **Shop slider** — prev / next buttons + dot navigation switch visible product cards; a counter shows current position. Shared `init-slider.js` module reused across Fleece and Bottoms pages.
- **Scroll-reveal animation** — sections fade and slide up on entry using `IntersectionObserver` with a `0.15` threshold and a `.reveal` / `.in` CSS class pair.
- **Data-to-render pattern** — all visible content (products, hero copy, values) lives in plain JS data files; components and modules stay content-agnostic.

---

## Getting Started

No package install required.

1. Clone or download the repo.
2. Open `index.html` directly in a browser, **or** use a local dev server (e.g. VS Code Live Server) to avoid ES Module CORS restrictions.
3. SCSS changes: edit files in `scss/index/`, `scss/fleece/`, or `scss/bottoms/` and let Live Sass Compiler output the `.min.css` files automatically.

> **Note:** the JS entry points use `type="module"`, so the page must be served over HTTP — double-clicking the HTML file will not load the scripts.

---

## Design Tokens (CSS custom properties)

Defined in `:root` inside each page's SCSS entry file:

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

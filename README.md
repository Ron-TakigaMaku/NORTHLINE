# NORTHLINE

A fictional gorpcore / outdoor streetwear brand experience built as a frontend portfolio project. The site combines editorial aesthetics with clean vanilla JavaScript architecture to create an immersive product landing page.

---

## Preview

> `index.html` → main landing page  
> `html/fleece.html` → category page (Fleece collection)

---

## Tech Stack

| Layer   | Technology                                           |
| ------- | ---------------------------------------------------- |
| Markup  | HTML5                                                |
| Styles  | SCSS (BEM methodology) → compiled to `style.min.css` |
| Scripts | Vanilla JavaScript (ES Modules)                      |
| Fonts   | Anton + Space Grotesk via Google Fonts               |
| Tooling | Live Sass Compiler (VS Code)                         |

No frameworks. No build tools beyond the Sass compiler.

---

## Project Structure

```
test portfolio/
├── index.html                  # Main landing page
├── html/
│   ├── fleece.html             # Fleece category page
│   ├── bottoms.html
│   ├── accessories.html
│   └── footwear.html
├── css/
│   ├── index/
│   │   ├── style.scss          # Main SCSS source
│   │   └── style.min.css       # Compiled output
│   ├── fleece/
│   │   ├── fleece.scss
│   │   └── fleece.min.css
│   └── modal-fixes.css
├── js/
│   ├── index/
│   │   ├── pages/home.js       # Entry point — initialises all modules
│   │   ├── data/               # Static data arrays (products, hero, values)
│   │   ├── components/         # Template functions that return HTML strings
│   │   └── modules/            # Render & behaviour logic (slider, modal, etc.)
│   ├── fleece/
│   │   ├── pages/fleece.js
│   │   ├── data/
│   │   ├── components/
│   │   └── modules/
│   └── utils/
└── img/
    ├── index/
    │   ├── hero/
    │   ├── colection/
    │   └── track/              # Product images for the carousel
    └── fleece/
        └── hero/
```

### JS Architecture

The JavaScript follows a strict three-layer separation of concerns:

```
data → component → render / module
```

- **data/** — plain JS arrays/objects describing content (products, copy, etc.)
- **components/** — pure functions that receive a data object and return an HTML string
- **modules/** — functions that query the DOM, call components, and attach behaviour
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

---

## Key Features

- **Product modal** — clicking a product card opens a detail overlay with image, description, and a link. Built with event delegation via `data-id` attributes.
- **Scroll-reveal animation** — sections fade and slide up on entry using `IntersectionObserver` with a `0.15` threshold and a `.reveal` / `.in` CSS class pair.
- **Category pages** — Fleece page has its own independent JS + SCSS pipeline mirroring the index architecture.

---

## Getting Started

No package install required.

1. Clone or download the repo.
2. Open `index.html` directly in a browser, **or** use a local dev server (e.g. VS Code Live Server) to avoid ES Module CORS restrictions.
3. SCSS changes: edit files in `css/index/` or `css/fleece/` and let Live Sass Compiler output the `.min.css` files automatically.

> **Note:** the JS entry points use `type="module"`, so the page must be served over HTTP — double-clicking the HTML file will not load the scripts.

---

## Design Tokens (CSS custom properties)

Defined in `:root` inside `style.scss`:

```scss
--main-white: #ffffff --main-black: #000000 --main-gray: #979595
	--secondary-color: #63103a --orange: #ff6600;
```

---

## Author

Ron — © 2026

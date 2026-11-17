# Rakesh Molla — Portfolio

A minimalist, monochrome developer portfolio built with semantic HTML, Tailwind CSS
and a small amount of vanilla JavaScript. The layout is a pixel-close recreation of
the supplied "Minimalist Monochrome Developer Portfolio" design.

## Highlights

- Fully responsive: 4-column desktop grid → 2 → 1 column on mobile
- Sticky header with scroll state, active section highlighting and a mobile menu
- Scroll-reveal animations and animated skill bars (respects `prefers-reduced-motion`)
- Hand-built project thumbnails (no screenshot assets required)
- Accessible: semantic landmarks, skip link, focus states, ARIA labels, alt text
- Zero runtime dependencies — one compiled CSS file and one small JS file

## Project structure

```
portfolio/
├── index.html                  # Page markup
├── package.json                # Scripts & dev dependencies
├── tailwind.config.js          # Design tokens (colors, fonts, easing)
├── postcss.config.js           # PostCSS / Autoprefixer
├── src/
│   ├── css/
│   │   └── input.css           # Tailwind layers + component styles
│   └── js/
│       └── main.js             # Header, menu, reveals, skill bars
├── dist/
│   └── css/
│       └── style.css           # Compiled stylesheet (generated)
├── assets/
│   └── images/
│       ├── building.jpg        # Hero photograph
│       └── favicon.svg
└── README.md
```

## Getting started

```bash
# 1. Install the build tooling
npm install

# 2. Build the stylesheet once
npm run build

# 3. Or watch while developing
npm run dev
```

Then open `index.html` in a browser (or run `npm run serve`).

> The compiled `dist/css/style.css` is committed, so the page also works by simply
> opening `index.html` without installing anything.

## Design tokens

| Token   | Value     | Usage                          |
| ------- | --------- | ------------------------------ |
| `paper` | `#F7F7F6` | Page background                |
| `ink`   | `#0B0B0A` | Headings, buttons, icons       |
| `mute`  | `#6C6C68` | Secondary copy                 |
| `line`  | `#DCDCD7` | Rules and dividers             |
| `mist`  | `#E6E5E4` | Hero disc behind the building  |

Typeface: **Inter** (Google Fonts) with a system sans-serif fallback.

## Customising

- **Content** — edit the copy directly in `index.html`.
- **Colours / fonts** — update `theme.extend` in `tailwind.config.js`, then rebuild.
- **Skills** — each row uses `--level` inline (`style="--level: 90%"`), so changing a
  percentage only requires editing that value.
- **Project links** — the three cards currently point at `#projects`; replace each
  `href` with the live project or case-study URL.
- **Hero image** — swap `assets/images/building.jpg` (recommended 920 × 584, landscape).
  The artwork sits on a circular disc using `mix-blend-mode: darken`, so a photo with
  a light, uncluttered sky works best.

## Credits

- Hero photograph: [Unsplash](https://unsplash.com) (free to use under the Unsplash License).
- Design reference: provided by the client.

## License

Personal portfolio — content and design © Rakesh Molla. Code may be reused as a
starting point for your own portfolio.

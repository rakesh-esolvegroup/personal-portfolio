# Rakesh Molla — Portfolio

A minimalist, monochrome developer portfolio built with semantic HTML, Tailwind CSS
and a small amount of vanilla JavaScript. The layout is a pixel-close recreation of
the supplied "Minimalist Monochrome Developer Portfolio" design.

## Highlights

- Fully responsive: 4-column desktop grid → 2 → 1 column on mobile
- Sticky header with scroll state, active section highlighting and a mobile menu
- Contact popup: native `<dialog>` with blurred backdrop, focus trapping, Esc /
  backdrop / X to close, and a front-end-only form ready for an endpoint
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
│       └── main.js             # Header, menu, reveals, skill bars, contact dialog
├── dist/
│   └── css/
│       └── style.css           # Compiled stylesheet (generated)
├── assets/
│   └── images/
│       ├── dev-boy.png         # Hero illustration
│       ├── hello-envelope.png  # Contact popup artwork (transparent PNG)
│       ├── building.jpg        # Alternate hero photograph (unused)
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
- **Contact form** — the popup is front-end only by default (it validates, fakes a
  short send, then shows the success panel). To receive real messages, add an
  endpoint to the form in `index.html`:

  ```html
  <form class="contact-form" data-contact-form novalidate
        data-endpoint="https://formspree.io/f/your-id">
  ```

  The script POSTs `FormData` to that URL and shows the error line if the request
  fails. Any endpoint that accepts a form POST (Formspree, Netlify Forms, your own
  API) works — no other code changes needed.
- **Hero image** — swap `assets/images/dev-boy.png` (square-ish illustration on a
  transparent background works best). `assets/images/building.jpg` is kept as an
  unused alternative photo.

## Credits

- Hero photograph: [Unsplash](https://unsplash.com) (free to use under the Unsplash License).
- Design reference: provided by the client.

## License

Personal portfolio — content and design © Rakesh Molla. Code may be reused as a
starting point for your own portfolio.

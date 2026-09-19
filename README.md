# quentin.dev — personal site

Freelance portfolio site for Quentin Vanderlinden. Built with **Astro** + **Tailwind CSS v4**,
implementing the *Quentin Vanderlinden Design System* (imported from Claude Design).

## Stack

- **[Astro](https://astro.build)** — static site generator; zero JS shipped by default
- **[Tailwind CSS v4](https://tailwindcss.com)** — via the `@tailwindcss/vite` plugin, wired to
  the brand tokens (`@theme` in `src/styles/global.css`)
- **[astro-icon](https://github.com/natemoo-re/astro-icon)** + `@iconify-json/lucide` — Lucide
  glyphs inlined as SVG at build time (no icon-font, no runtime JS)
- **[@astrojs/rss](https://docs.astro.build/en/guides/rss/)** — the `/rss.xml` feed

## Commands

```sh
npm install      # install dependencies
npm run dev      # local dev server at http://localhost:4321
npm run build    # production build → ./dist
npm run preview  # serve the production build locally
```

## Project structure

```
src/
  styles/
    tokens.css       # design tokens (colors, type, spacing, shape, motion) + base element styles
    components.css   # the qv-* component styles (core / forms / data / feedback / navigation)
    site.css         # page-layout classes (hero, sections, work rows, prose, footer)
    global.css       # entry: fonts → tailwind → tokens/components/site + @theme token bridge
  components/         # Astro ports of the design-system components (Button, Card, Logo, …)
  layouts/
    Base.astro       # <html> shell + Header + Footer + <slot/>, SEO/OG tags
  pages/
    index.astro      # Home
    work/
      index.astro    # Work index — lists all engagements
      cebir.astro    # Case study (Cebir); add more as work/<slug>.astro
    writing.astro    # Writing list — tab filter + live search
    contact.astro    # Enquiry form + toast confirmation
    rss.xml.ts        # RSS feed
  data/
    posts.ts         # writing posts (single source: writing page, home teaser, RSS)
    work.ts          # engagements (single source: home teaser + /work index)
  icons/             # drop custom .svg here to use as <Icon name="..." />
public/
  favicon.svg        # the QV pixel-grid mark
```

## Design-system fidelity

The design tokens and `qv-*` component CSS are ported **verbatim** from the Claude Design project,
so the site is pixel-faithful to the source. Astro components in `src/components` emit those same
class names. Tailwind is layered on top for page composition — the design system's 4px spacing scale
lines up 1:1 with Tailwind's default spacing, and brand colors/fonts/radii are exposed as Tailwind
theme values via `@theme`.

To update against a changed design project, re-import the relevant token/component CSS and adjust the
matching `.astro` component.

## Content

Copy across the site reflects Quentin's real résumé — the selected-work list (Cebir, Enobase, Embie,
IMEC, The Great Circle, CSC), the `/work` case study (the Cebir reporting automation), the "in
numbers" stats, and the contact details. Where there was no truthful source, nothing was invented:
there is no fabricated client testimonial (the inverse card is Quentin's own words + his degree) and
no made-up VAT/registration number.

## Notes / next steps

- **Social links** in the footer (`github`, `linkedin`) are placeholders — drop in your real profile
  URLs in `src/components/Footer.astro`.
- **Fonts** load from Google Fonts (`src/styles/global.css`). To self-host, drop `.woff2` files in
  `public/fonts` and swap the `@import` for `@font-face` rules in `tokens.css`.
- **Contact form** currently confirms with a toast only (matching the source design). Wire it to a
  real endpoint (Formspree, a Cloudflare Worker, or a `mailto:` fallback) before going live — see the
  script at the bottom of `src/pages/contact.astro`.
- **Writing posts** are placeholder topics themed to Quentin's areas (`src/data/posts.ts`), with no
  per-post pages yet. Add a `src/pages/writing/[slug].astro` route (or an Astro content collection)
  when you start publishing; the RSS feed already links to `/writing/<slug>/`.
- **More case studies:** `/work` lists every engagement from `src/data/work.ts`; only those with a
  `slug` link to a write-up. To add one, create `src/pages/work/<slug>.astro` (copy `cebir.astro`)
  and set the matching `slug` on that engagement. Consider an Astro content collection once there are
  several.

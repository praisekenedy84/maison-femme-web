# Maison Femme

Next.js website for Maison Femme — a community and advocacy organization in Dar es Salaam, Tanzania.

## Pages

- `/` — Home
- `/about` — About / Who We Are
- `/work` — Our Work / Programmes
- `/pink-legacy` — Pink Legacy Initiative
- `/partner` — Partner With Us
- `/journal` — Journal / Impact Stories
- `/contact` — Contact

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Design system

- Palette and type tokens live in `src/app/globals.css` (`:root`).
- Fonts: Cormorant Garamond (display), Figtree (body), IBM Plex Mono (labels/data) via `next/font/google`.
- Site copy and data (programmes, steps, stats, contact routes) live in `src/lib/site.ts`.
- Scroll reveals: add `data-reveal` (and optional `--i` for stagger) to any element.
- Set `NEXT_PUBLIC_SITE_URL` (see `.env.example`) for canonical URLs, sitemap and Open Graph.

## Notes

- Images currently use Unsplash URLs as visual placeholders.
- The contact form opens the visitor's email client; swap `ContactForm.handleSubmit` for a Server Action once an email provider is connected.
- Replace placeholder impact figures `[—]` with confirmed client data before publishing.
- Replace the placeholder email/address if needed.
- The Tanzania Oncology Association partnership wording should be confirmed by the client before final publication.

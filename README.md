# CampusPe Landing Page

One-page landing site for CampusPe, connecting students, colleges and employers. Built from the Figma prototype with Next.js, React and Tailwind CSS.

## Tech Stack

- [Next.js](https://nextjs.org/) (App Router, TypeScript)
- [React](https://react.dev/)
- [Tailwind CSS v4](https://tailwindcss.com/)
- Icons: [lucide-react](https://lucide.dev/) and [react-icons](https://react-icons.github.io/react-icons/) (brand icons)
- Fonts via `next/font`: Roboto (headings) and Inter (body)
- Package manager: [pnpm](https://pnpm.io/)

## Getting Started

```bash
pnpm install
pnpm dev        # http://localhost:3000
```

| Command      | Description               |
| ------------ | ------------------------- |
| `pnpm dev`   | Start the dev server      |
| `pnpm build` | Create a production build |
| `pnpm start` | Run the production build  |
| `pnpm lint`  | Run ESLint                |

## Project Structure

```
├── app/
│   ├── globals.css        # Tailwind import, theme colors, fonts, marquee animation
│   ├── layout.tsx         # Root layout, font setup, metadata
│   └── page.tsx           # Composes all sections
├── components/
│   ├── ui.tsx             # Shared Btn, Pill, Eyebrow, Section helpers
│   ├── data.ts            # Content for the Colleges and Employers sections
│   ├── Navbar.tsx
│   ├── Hero.tsx           # Headline, option cards, stats
│   ├── Sections.tsx       # Partners marquee, Opportunity feed, Resume upload
│   ├── Audience.tsx       # Reusable Colleges / Employers section
│   ├── App.tsx            # App screens carousel and Download section
│   └── Footer.tsx         # Support, "Ready for what's next?" CTA, Footer
└── public/
    ├── partners/          # Partner logos (marquee)
    ├── companies/         # Logos used in the opportunity feed
    ├── screens/           # App carousel screenshots
    ├── stores/            # Google Play and App Store badges
    └── app-mockup.png     # "Download App Now" phone image
```

## Page Sections

1. Navbar
2. Hero with option cards and stats
3. Partners (right-to-left marquee)
4. Opportunity discovery and feed
5. Resume upload
6. For Colleges
7. For Employers
8. App interface carousel
9. Download app
10. Support CTA
11. "Ready for what's next?" CTA
12. Footer

## Customization

- **Colors:** edit `--color-brand` and `--color-ink` in `@theme` in `app/globals.css`.
- **Fonts:** Inter is the default (`font-sans`); Roboto applies to `h1`–`h4` and the `font-heading` class. Weights are set in `app/layout.tsx`.
- **Colleges / Employers content:** edit `components/data.ts`.
- **Partner logos:** edit the `partners` array in `components/Sections.tsx`; marquee speed is `--animate-marquee` in `globals.css`.
- **Opportunity feed:** edit the `feed` array in `components/Sections.tsx`.
- **App screens:** edit the `screens` array in `components/App.tsx`.
- **Store links:** set `PLAY_URL` and `STORE_URL` at the top of `components/App.tsx`.

## Assets

Use lowercase, hyphenated file names. Prefer `.svg` for logos and badges, `.png` or `.webp` for screenshots. Files in `public/` are served from the site root, e.g. `/partners/radiant.png`.

## Deployment

The easiest option is [Vercel](https://vercel.com/new): import the repository and deploy with the default Next.js settings.

## License

Copyright © 2026 CampusPe Technologies Pvt. Ltd. All rights reserved.

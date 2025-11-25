# ☕ Brew Haven

![version](https://img.shields.io/badge/version-0.1.0-blue.svg)

Live demo: https://coffee-app-ruddy.vercel.app/

## What this project does

Brew Haven is a modern, front-end-focused coffee shop web app built with Next.js and TypeScript. It showcases a responsive menu, featured carousel, subtle motion effects, and a clean UI for browsing coffees and pastries. The app is static/SSR-ready and uses a small client-side state store for UI state.

Key features

- Image carousel for featured items (Keen Slider)
- Responsive menu with category filtering and item pages
- Smooth UI animations using Framer Motion
- Lightweight state management with Zustand
- Skeleton loading UI for better perceived performance

## Why it’s useful

This repo is a compact example of a production-ish Next.js app using modern tooling (React 19, Next 15, TypeScript, Tailwind). It's useful as:

- A starter/template for marketing or small product sites
- A showcase of accessible, responsive UI patterns and animations
- A learning reference for integrating Keen Slider, Framer Motion, and Zustand in Next.js

## Tech stack

- Next.js 15
- React 19
- TypeScript
- Tailwind CSS
- Framer Motion
- Keen Slider
- Zustand
- Lucide icons

See `package.json` for full dependency versions.

## Quick start

Prerequisites:

- Node.js 18+ (or compatible with the Next.js version in `package.json`)
- npm (or yarn/pnpm)

Clone and run locally:

```powershell
git clone https://github.com/yourusername/brew-haven.git
cd brew-haven
npm install
npm run dev
```

Open http://localhost:3000 in your browser.

Scripts

- `npm run dev` — development server
- `npm run build` — production build (`--turbopack` enabled)
- `npm run start` — start production server
- `npm run lint` — run ESLint

## Project layout (high level)

- `app/` — Next.js app routes and pages (server/client components)
- `components/` — shared UI components
- `sections/` — page sections (home, about, menu)
- `data/` & `public/` — content and static assets
- `store/` — Zustand store (`store/menuStore.tsx`)

Explore the `app/` and `components/` folders to find UI entry points.

## Usage examples

Example: start the dev server and view the carousel and menu.

Example snippet (Framer Motion usage already in the codebase):

```ts
import { motion } from "framer-motion";

const fadeIn = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function AnimatedHeader() {
  return (
    <motion.h1 initial="hidden" animate="visible" variants={fadeIn}>
      Welcome to Brew Haven
    </motion.h1>
  );
}
```

## Where to get help

- Open an issue in this repository for bugs or feature requests
- Email the maintainer: `rashidvisda@gmail.com`

If you need more detailed developer docs, consider adding a `/docs` folder or a project wiki.

## Maintainers & Contributing

Maintainer: Rashid Visda — `rashidvisda@gmail.com`

Contributions are welcome. For contribution guidelines, see `CONTRIBUTING.md`.

Basic contribution flow:

1. Fork the repo and create a feature branch
2. Run tests (if any) and linting
3. Open a PR with a clear description of changes

Please keep pull requests small and focused.

## Security & License

This repository does not include a LICENSE file. Add a `LICENSE` in the root if you intend to open-source the project.

## Next steps (suggested)

- Add `CONTRIBUTING.md` and `CODE_OF_CONDUCT.md` for clear contributor expectations
- Add CI (build/test) badges to the README after setting up GitHub Actions or another CI
- Add runtime environment docs if the app requires environment variables

---

If you'd like, I can also create a minimal `CONTRIBUTING.md` (recommended so the README link works). Want me to add that now?

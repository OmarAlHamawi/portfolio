# Omar Al-Hamawi — Portfolio

Portfolio website for Omar Al-Hamawi, Full-Stack Software Engineer specializing in scalable Spring Boot architectures and React interfaces.

Live: https://www.omaralhamawi.dev/

## Stack

- React 19 + TypeScript + Vite 7
- Tailwind CSS 4 (via `@tailwindcss/vite`)
- Framer Motion, Lucide React, React Scroll
- Vercel Analytics

## Scripts

```bash
npm install   # install dependencies
npm run dev   # start dev server
npm run build # type-check + production build
npm run lint  # run ESLint
npm run preview # preview production build
```

## Structure

```
index.html
public/                  # static assets (cv, certificates, images)
src/
  main.tsx               # entry point
  App.tsx                # composition root + LanguageProvider
  index.css              # Tailwind theme + global styles
  data.ts                # portfolio content (EN/AR)
  context/
    LanguageContext.tsx  # EN/AR language state
  components/
    NavBar.tsx
    Hero.tsx
    Skills.tsx
    Experience.tsx
    Education.tsx
    Projects.tsx
    Certifications.tsx
```

## Deploy

Built with `npm run build` (outputs `dist/`). Deployed on Vercel from the main branch. Any static host works — serve `dist/` after build.

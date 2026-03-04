# Leanotion Website

Next.js site for [Leanotion](https://leantechco.com) — productivity templates and tools. App Router, TypeScript, Tailwind CSS.

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

Project root is the Next.js app — no subfolder. Deploy directly:

**Option A: Vercel CLI (recommended)**

```bash
# One-time: install Vercel CLI and login
npm i -g vercel
vercel login

# Preview deploy
npm run deploy

# Production deploy
npm run deploy:prod
```

**Option B: Git + Vercel Dashboard**

1. Push this repo to GitHub (or connect your Git provider in Vercel).
2. In [Vercel](https://vercel.com/new), import the repository.
3. **Root Directory:** leave empty if this repo contains only Leanotion (root = app). If the repo is a monorepo and Leanotion lives in a subfolder, set **Root Directory** to that folder (e.g. `leanotion`).
4. Deploy. Vercel will detect Next.js automatically.

---

## Troubleshooting: 404 NOT_FOUND

If https://leanotion.vercel.app/ shows **404 NOT_FOUND**, check the following in [Vercel Dashboard](https://vercel.com) → your project → **Settings**:

| Check | Correct value | Notes |
|-------|---------------|-------|
| **Root Directory** | Empty **or** `leanotion` | Empty if the repo contains only Leanotion. If the repo is a workspace/monorepo (multiple folders including `leanotion`), set **Root Directory** to `leanotion`. |
| **Framework Preset** | **Next.js** | Do not use "Other" or "None". |
| **Build Command** | `next build` (default) | Do not change to `npm run build` if package.json already has a build script. |
| **Output Directory** | Default (empty) | Next.js uses `.next`; do not set manually unless customized. |
| **Install Command** | `npm install` (default) | Usually no need to change. |

**Quick steps:**

1. Go to **Settings → General → Root Directory**: if your repo is a workspace (multiple projects), click **Edit**, enter `leanotion`, **Save**.
2. **Settings → General → Framework Preset**: select **Next.js**.
3. **Deployments**: select the latest deployment → **Redeploy** (or push a new commit to trigger a deploy).

After changing Root Directory or Framework, **Redeploy** (Deployments → ⋮ → Redeploy) to apply.

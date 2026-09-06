# disam.dev

Samuel Corsan’s portfolio, built with Astro and TypeScript. Pages are generated as static HTML; small browser scripts handle the theme switch and project stories. Styling uses Tailwind CSS v4 and the existing portfolio styles, with self-hosted Geist fonts.

## Development

Requires Node.js 22.12 or newer and pnpm.

```sh
pnpm install
pnpm dev --host 127.0.0.1 --port 3001
```

## Verification and production

```sh
pnpm lint
pnpm build
pnpm preview --host 127.0.0.1 --port 3001
```

`pnpm build` checks Astro and TypeScript, then writes the static site to `dist/`. Deploy that directory to a static host. No server adapter or runtime environment variables are required. For an existing hosting project, select the Astro framework preset and `dist` output directory.

Content lives in `src/components/*.astro` and `src/lib/`. The shared layout contains SEO metadata and Vercel Analytics. Images and SVG logos are in `public/`. The theme preference uses the existing `theme` local-storage key.

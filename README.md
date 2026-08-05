# The Way landing page

The public landing page for The Way.

- Production: [the-way-landing.vercel.app](https://the-way-landing.vercel.app)
- Vercel project: [wprebles-projects/the-way-landing](https://vercel.com/wprebles-projects/the-way-landing)
- Repository: [wpreble/the-way-landing](https://github.com/wpreble/the-way-landing)

`PROJECT.md` covers the site's positioning, logo assets, design tone, and
architecture decisions.

## Local development

```bash
pnpm install
pnpm dev
```

The project is pinned to pnpm 10.15.0 through `package.json`.

## Production validation

```bash
pnpm build
npx tsc --noEmit
```

## Deployment

Vercel builds this repository directly. Pushing to `main` deploys to production,
and any other branch produces a preview deployment.

```bash
git push origin main
```

To deploy the working tree without committing, bypass Git and upload the current
source:

```bash
vercel deploy --prod
```

The `legacy-v0` remote points at `wpreble/thewayland1.1`, the abandoned v0
version of the site. It is retained for history only and is not deployed.

## Runtime configuration

The intake proxy requires these Vercel environment variables in Production,
Preview, and Development:

- `INTAKE_BASE_URL`
- `INTAKE_SLUG`
- `INTAKE_KEY`

The values are configured in Vercel and must not be committed to source.

# The Way landing page

The public landing page for The Way.

- Production: [the-way-landing.vercel.app](https://the-way-landing.vercel.app)
- Vercel project: [wprebles-projects/the-way-landing](https://vercel.com/wprebles-projects/the-way-landing)

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

Deploy the current workspace source to production:

```bash
vercel deploy --prod
```

Vercel Git deployments are intentionally disconnected because the imported site
and the current GitHub `main` branch have divergent histories. Reconcile those
histories before enabling automatic Git deployments.

## Runtime configuration

The intake proxy requires these Vercel environment variables in Production,
Preview, and Development:

- `INTAKE_BASE_URL`
- `INTAKE_SLUG`
- `INTAKE_KEY`

The values are configured in Vercel and must not be committed to source.

# Development log

## 2026-08-05

- Compared a fresh Replit export against the local workspace and confirmed it
  carried no new content. Replit has been untouched since 2026-05-13, so the
  local source is the authoritative version of the site.
- Verified the self-managed toolchain end to end: `pnpm install`, a clean
  `pnpm build` across all ten routes with TypeScript validation enabled, and a
  working dev server.
- Committed the outstanding intake proxy, build, and toolchain work from
  2026-07-23.
- Published the site to a new repository, `wpreble/the-way-landing`, and left
  the divergent `wpreble/thewayland1.1` untouched as `legacy-v0`.
- Connected the Vercel project to the new repository, replacing manual CLI
  deploys with push-to-deploy.
- Removed the unreachable `gitsafe-backup` remote left behind by Replit.

## 2026-07-23

- Imported the `thewayland11` source archive into the shared The Way workspace.
- Removed exported Replit caches, generated builds, and other disposable files,
  reducing the working project from roughly 1.2 GB to 16 MB.
- Pinned pnpm 10.15.0 for reproducible local and Vercel installs.
- Removed an unused showcase component with a missing dependency and restored
  mandatory TypeScript validation during production builds.
- Hardened `/api/asc-intake` configuration and upstream error handling.
- Created `wprebles-projects/the-way-landing` in Vercel and configured the
  intake service for Production, Preview, and Development.
- Deployed and verified the production site at
  `https://the-way-landing.vercel.app`.
- Left Vercel Git deployments disconnected because the imported archive and
  GitHub `main` contain materially different site versions.

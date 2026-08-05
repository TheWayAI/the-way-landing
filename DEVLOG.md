# Development log

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

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
- Archived `wpreble/thewayland1.1` on GitHub so the abandoned v0 site is clearly
  historical and read only.
- Deleted the `.replit` runtime config and renamed `replit.md` to `PROJECT.md`.
  Despite its name the file held no Replit specifics, only the site's
  positioning, logo assets, design tone, and architecture decisions.
- Confirmed `followtheway.io` still resolves to Replit at 34.111.179.208.
  Compared it against the Vercel build and found the only content differences
  are the three intended post deploy changes: the contact CTA becoming
  "Request Early Access" and the removal of the research reading time estimate.
  Vercel serves the newer site.
- Added `followtheway.io` and `www.followtheway.io` to the Vercel project.
- Cut `followtheway.io` over from Replit to Vercel. Repointed the apex A record
  at Namecheap from `34.111.179.208` to `76.76.21.21`. The change propagated to
  Cloudflare and Google resolvers immediately.
- Vercel served the domain over HTTP right away but never auto-issued a TLS
  certificate, so HTTPS failed the handshake for several minutes. Issuing the
  certificate explicitly with `vercel certs issue followtheway.io` fixed it.
  Worth remembering for the next domain: if HTTPS hangs after a cutover while
  port 80 already returns 200, the certificate is the thing to check.
- Left the `replit-verify` TXT record in place. It costs nothing and keeps a
  rollback to Replit simple: point the apex A record back at `34.111.179.208`.
- `www.followtheway.io` still has no DNS record and is the one outstanding item.
- Repaired the repository. A stray `.git/refs/remotes/origin/main 2` file, a
  macOS duplicate left by the Replit export, was breaking `git fetch`. Removed
  it; the commit it referenced is still reachable through `legacy-v0/main`.
  `git fsck` is clean and `main` matches `origin/main`.
- Moved the two redundant 366 MB export archives out of Downloads now that the
  full source, including every binary asset, is committed and pushed.

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

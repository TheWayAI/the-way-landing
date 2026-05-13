/**
 * Reusable layout strings for notch / home-indicator safe areas.
 * Requires `viewportFit: "cover"` (see `app/layout.tsx`).
 */
export const safe = {
  navTop: "env(safe-area-inset-top, 0px)",
  /** Fixed nav row height below the safe-area inset */
  navStack: "calc(62px + env(safe-area-inset-top, 0px))",
  /** Standard horizontal gutters for text columns */
  gutter: {
    paddingLeft: "calc(clamp(14px, 4vw, 28px) + env(safe-area-inset-left, 0px))",
    paddingRight: "calc(clamp(14px, 4vw, 28px) + env(safe-area-inset-right, 0px))",
  },
  /** Slightly tighter gutters (e.g. top nav bar) */
  gutterTight: {
    paddingLeft: "calc(clamp(12px, 3vw, 22px) + env(safe-area-inset-left, 0px))",
    paddingRight: "calc(clamp(12px, 3vw, 22px) + env(safe-area-inset-right, 0px))",
  },
  footerPad: {
    paddingBottom: "calc(clamp(16px, 2.4vh, 28px) + env(safe-area-inset-bottom, 0px))",
  },
} as const

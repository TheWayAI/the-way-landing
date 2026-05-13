"use client"

/**
 * There is no official Ascendance logo file in `public/` (Vision referenced
 * `/Ascendance White Icon.png`, which is missing). Add `public/ascendance-logo.svg`
 * (or .png) and switch the glyph below to `next/image` when you have the final mark.
 */
function AscendanceMonogram({ color }: { color: string }) {
  return (
    <svg width={20} height={20} viewBox="0 0 24 24" fill="none" aria-hidden style={{ flexShrink: 0, opacity: 0.92 }}>
      <path d="M12 4.5 L19.2 19H4.8L12 4.5Z" stroke={color} strokeWidth={1.15} strokeLinejoin="round" />
      <line x1="7.5" y1="14.25" x2="16.5" y2="14.25" stroke={color} strokeWidth={1.05} />
    </svg>
  )
}

export function AscendanceFooterLink({ theme }: { theme: "onDark" | "onLight" }) {
  const idle = theme === "onDark" ? "rgba(247,245,240,0.65)" : "rgba(28,23,16,0.55)"
  const hover = theme === "onDark" ? "rgba(247,245,240,0.95)" : "#1c1710"
  const glyph = theme === "onDark" ? "#f7f5f0" : "#1c1710"

  return (
    <a
      className="ascendance-footer-mark"
      href="https://ascendance.one"
      target="_blank"
      rel="noopener noreferrer"
      style={{
        display: "inline-flex",
        alignItems: "center",
        gap: "10px",
        flexWrap: "wrap",
        textDecoration: "none",
        color: idle,
        transition: "color 0.2s ease",
      }}
      onMouseEnter={e => {
        e.currentTarget.style.color = hover
      }}
      onMouseLeave={e => {
        e.currentTarget.style.color = idle
      }}
    >
      <AscendanceMonogram color={glyph} />
      <span
        style={{
          fontFamily: "var(--font-mono), monospace",
          fontSize: "9px",
          letterSpacing: "0.22em",
          textTransform: "uppercase",
        }}
      >
        An Ascendance Company
      </span>
    </a>
  )
}

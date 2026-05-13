"use client"

import Image from "next/image"

export function AscendanceFooterLink({ theme, compact = false }: { theme: "onDark" | "onLight"; compact?: boolean }) {
  const idle = theme === "onDark" ? "rgba(247,245,240,0.65)" : "rgba(28,23,16,0.55)"
  const hover = theme === "onDark" ? "rgba(247,245,240,0.95)" : "#1c1710"
  const logoFilter = theme === "onDark" ? "invert(1)" : "none"

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
      <Image
        src="/Ascendance Black Icon.png"
        alt=""
        width={20}
        height={20}
        aria-hidden
        style={{
          flexShrink: 0,
          objectFit: "contain",
          opacity: 0.92,
          filter: logoFilter,
        }}
      />
      <span
        className={compact ? undefined : "ascendance-company-prefix"}
        style={{
          fontFamily: "var(--font-mono), monospace",
          fontSize: "9px",
          letterSpacing: "0.22em",
          textTransform: "uppercase",
        }}
      >
        {compact ? "Ascendance" : "An Ascendance Company"}
      </span>
    </a>
  )
}

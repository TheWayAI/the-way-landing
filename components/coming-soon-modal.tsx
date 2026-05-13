"use client"

import { useEffect } from "react"
import Link from "next/link"
import { X } from "lucide-react"

const LIGHT = "#f7f5f0"
const DARK = "#1c1710"
const RED = "#d63030"
const WHITE_65 = "rgba(247,245,240,0.65)"
const WHITE_35 = "rgba(247,245,240,0.35)"

function CompassRose({ size = 360, color = LIGHT }: { size?: number; color?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="60" cy="60" r="56" stroke={color} strokeWidth="0.5" />
      <circle cx="60" cy="60" r="36" stroke={color} strokeWidth="0.5" />
      <circle cx="60" cy="60" r="18" stroke={color} strokeWidth="0.5" />
      <line x1="60" y1="4" x2="60" y2="116" stroke={color} strokeWidth="0.5" />
      <line x1="4" y1="60" x2="116" y2="60" stroke={color} strokeWidth="0.5" />
      <line x1="20" y1="20" x2="100" y2="100" stroke={color} strokeWidth="0.3" strokeDasharray="2 4" />
      <line x1="100" y1="20" x2="20" y2="100" stroke={color} strokeWidth="0.3" strokeDasharray="2 4" />
      {[0, 30, 60, 90, 120, 150, 180, 210, 240, 270, 300, 330].map(deg => {
        const rad = (deg * Math.PI) / 180
        const round = (v: number) => Number(v.toFixed(4))
        const x1 = round(60 + 52 * Math.sin(rad))
        const y1 = round(60 - 52 * Math.cos(rad))
        const x2 = round(60 + 56 * Math.sin(rad))
        const y2 = round(60 - 56 * Math.cos(rad))
        return <line key={deg} x1={x1} y1={y1} x2={x2} y2={y2} stroke={color} strokeWidth="0.5" />
      })}
      <circle cx="60" cy="60" r="2" fill={color} />
    </svg>
  )
}

function MapDot({ color, size = 8, pulse = false }: { color: string; size?: number; pulse?: boolean }) {
  return (
    <span
      className={pulse ? "pulse-dot" : ""}
      style={{
        display: "inline-block",
        width: size,
        height: size,
        borderRadius: "50%",
        backgroundColor: color,
        flexShrink: 0,
      }}
    />
  )
}

export function ComingSoonModal({ open, onClose }: { open: boolean; onClose: () => void }) {
  useEffect(() => {
    if (!open) return
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose()
    }
    window.addEventListener("keydown", handler)
    const prev = document.body.style.overflow
    document.body.style.overflow = "hidden"
    return () => {
      window.removeEventListener("keydown", handler)
      document.body.style.overflow = prev
    }
  }, [open, onClose])

  if (!open) return null

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="coming-soon-title"
      onClick={onClose}
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 100,
        backgroundColor: "rgba(28,23,16,0.88)",
        backdropFilter: "blur(8px)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        paddingTop: "max(20px, env(safe-area-inset-top, 0px))",
        paddingBottom: "max(20px, env(safe-area-inset-bottom, 0px))",
        paddingLeft: "max(16px, env(safe-area-inset-left, 0px))",
        paddingRight: "max(16px, env(safe-area-inset-right, 0px))",
        animation: "fadeIn 0.25s ease",
      }}
    >
      <div
        onClick={e => e.stopPropagation()}
        style={{
          position: "relative",
          backgroundColor: DARK,
          color: LIGHT,
          maxWidth: "440px",
          width: "100%",
          padding: "clamp(40px, 10vw, 56px) clamp(20px, 6vw, 36px) clamp(32px, 8vw, 44px)",
          border: `1px solid ${WHITE_35}`,
          borderTop: `3px solid ${RED}`,
          textAlign: "center",
          overflow: "hidden",
          animation: "rise 0.35s cubic-bezier(0.2, 0.8, 0.2, 1)",
        }}
      >
        <div
          aria-hidden
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            opacity: 0.08,
            pointerEvents: "none",
          }}
        >
          <CompassRose size={360} color={LIGHT} />
        </div>

        <button
          onClick={onClose}
          aria-label="Close"
          type="button"
          style={{
            position: "absolute",
            top: "max(12px, env(safe-area-inset-top, 0px))",
            right: "max(12px, env(safe-area-inset-right, 0px))",
            background: "none",
            border: "none",
            color: WHITE_65,
            cursor: "pointer",
            minWidth: 44,
            minHeight: 44,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            transition: "color 0.2s",
          }}
          onMouseEnter={e => (e.currentTarget.style.color = LIGHT)}
          onMouseLeave={e => (e.currentTarget.style.color = WHITE_65)}
        >
          <X size={18} />
        </button>

        <div style={{ position: "relative", zIndex: 1 }}>
          <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "10px", marginBottom: "24px" }}>
            <div style={{ width: "24px", height: "1px", backgroundColor: WHITE_35 }} />
            <MapDot color={RED} size={8} pulse />
            <div style={{ width: "24px", height: "1px", backgroundColor: WHITE_35 }} />
          </div>

          <span
            style={{
              fontFamily: "var(--font-mono), monospace",
              fontSize: "10px",
              letterSpacing: "0.3em",
              textTransform: "uppercase",
              color: RED,
              display: "block",
              marginBottom: "20px",
            }}
          >
            § II — Product
          </span>

          <h2
            id="coming-soon-title"
            style={{
              fontFamily: "var(--font-serif), Georgia, serif",
              fontSize: "clamp(2rem, 5vw, 2.6rem)",
              fontWeight: 300,
              lineHeight: 1.15,
              letterSpacing: "-0.015em",
              marginBottom: "20px",
            }}
          >
            <em>Coming Soon.</em>
          </h2>

          <p
            style={{
              fontFamily: "var(--font-body), Georgia, serif",
              fontSize: "1rem",
              lineHeight: 1.75,
              color: WHITE_65,
              maxWidth: "320px",
              margin: "0 auto 32px",
            }}
          >
            Wayfinder is in private build. The first cohort of believers will receive access at launch.
          </p>

          <Link
            href="/vision#email-signup"
            style={{
              fontFamily: "var(--font-mono), monospace",
              fontSize: "11px",
              letterSpacing: "0.28em",
              textTransform: "uppercase",
              color: LIGHT,
              fontWeight: 600,
              textDecoration: "none",
              borderBottom: `2px solid ${WHITE_35}`,
              paddingBottom: "4px",
              display: "inline-block",
              transition: "border-color 0.2s",
            }}
            onMouseEnter={e => (e.currentTarget.style.borderBottomColor = LIGHT)}
            onMouseLeave={e => (e.currentTarget.style.borderBottomColor = WHITE_35)}
          >
            Request Early Access →
          </Link>
        </div>
      </div>
    </div>
  )
}

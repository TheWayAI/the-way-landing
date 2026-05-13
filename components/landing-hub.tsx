"use client"

import { useState, useRef } from "react"
import Image from "next/image"
import Link from "next/link"
import { ComingSoonModal } from "@/components/coming-soon-modal"
import { AscendanceFooterLink } from "@/components/ascendance-footer-link"
import { safe } from "@/lib/safe-area"

const LIGHT = "#f7f5f0"
const DARK = "#1c1710"
const BLUE = "#4a7cbf"
const RED = "#d63030"
const DARK_65 = "rgba(28,23,16,0.65)"
const DARK_50 = "rgba(28,23,16,0.5)"
const DARK_20 = "rgba(28,23,16,0.2)"
const DARK_15 = "rgba(28,23,16,0.15)"
const DARK_10 = "rgba(28,23,16,0.1)"
const DARK_05 = "rgba(28,23,16,0.05)"

function CompassRose({ size = 120, color = DARK_15, className }: { size?: number; color?: string; className?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
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
      <text x="60" y="14" textAnchor="middle" fontSize="7" fill={color} fontFamily="monospace" letterSpacing="0.05em">N</text>
    </svg>
  )
}

function TriangleMark({ size = 40, color = DARK_20, className }: { size?: number; color?: string; className?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      <polygon points="20,4 36,34 4,34" stroke={color} strokeWidth="1" fill="none" />
      <polygon points="20,10 31,30 9,30" stroke={color} strokeWidth="0.4" fill="none" />
    </svg>
  )
}

function CodexMark({ size = 80, color = DARK_20, className }: { size?: number; color?: string; className?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      <rect x="14" y="14" width="52" height="52" stroke={color} strokeWidth="0.5" fill="none" />
      <line x1="40" y1="14" x2="40" y2="66" stroke={color} strokeWidth="0.5" />
      <line x1="22" y1="26" x2="34" y2="26" stroke={color} strokeWidth="0.5" />
      <line x1="22" y1="34" x2="34" y2="34" stroke={color} strokeWidth="0.5" />
      <line x1="22" y1="42" x2="32" y2="42" stroke={color} strokeWidth="0.5" />
      <line x1="46" y1="26" x2="58" y2="26" stroke={color} strokeWidth="0.5" />
      <line x1="46" y1="34" x2="58" y2="34" stroke={color} strokeWidth="0.5" />
      <line x1="46" y1="42" x2="56" y2="42" stroke={color} strokeWidth="0.5" />
      <rect x="39" y="52" width="2" height="10" fill={color} />
      <rect x="35" y="55" width="10" height="2" fill={color} />
    </svg>
  )
}

function MapDot({ color = RED, size = 8, pulse = false }: { color?: string; size?: number; pulse?: boolean }) {
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

type PathCardProps = {
  marker: string
  code: string
  title: string
  tagline: string
  action: string
  accent: string
  decoration: "compass" | "triangle" | "codex"
  href?: string
  onClick?: () => void
  status?: "available" | "soon"
  index: number
}

function PathCard({ marker, code, title, tagline, action, accent, decoration, href, onClick, status = "available", index }: PathCardProps) {
  const [hovered, setHovered] = useState(false)

  const decorEl =
    decoration === "compass"
      ? <CompassRose size={260} color={hovered ? DARK_15 : DARK_10} />
      : decoration === "triangle"
      ? <TriangleMark size={180} color={hovered ? DARK_15 : DARK_10} />
      : <CodexMark size={200} color={hovered ? DARK_15 : DARK_10} />

  const content = (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onFocus={() => setHovered(true)}
      onBlur={() => setHovered(false)}
      className="path-card"
      style={{
        position: "relative",
        height: "100%",
        width: "100%",
        padding: "clamp(36px, 5vh, 56px) clamp(24px, 3vw, 40px)",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        cursor: "pointer",
        overflow: "hidden",
        background: hovered ? "rgba(255,255,255,0.55)" : "rgba(255,255,255,0.28)",
        transition: "background 0.4s ease, box-shadow 0.4s ease",
        boxShadow: hovered ? "inset 0 1px 0 rgba(255,255,255,0.75)" : "inset 0 1px 0 rgba(255,255,255,0.35)",
        textDecoration: "none",
        color: "inherit",
        outline: "none",
        animation: `revealRise 0.9s cubic-bezier(0.2, 0.8, 0.2, 1) ${0.25 + index * 0.12}s both`,
      }}
    >
      <div
        aria-hidden
        className="path-card-decor"
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: `translate(-50%, -50%) scale(${hovered ? 1.05 : 0.95})`,
          opacity: hovered ? 0.95 : 0.32,
          transition: "opacity 0.5s ease, transform 0.6s cubic-bezier(0.2, 0.8, 0.2, 1)",
          pointerEvents: "none",
        }}
      >
        {decorEl}
      </div>

      <div style={{ position: "relative", zIndex: 1, display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
        <span
          style={{
            fontFamily: "var(--font-mono), monospace",
            fontSize: "10px",
            letterSpacing: "0.3em",
            textTransform: "uppercase",
            color: hovered ? DARK : DARK_50,
            transition: "color 0.3s ease",
          }}
        >
          {marker}
        </span>
        <span
          style={{
            fontFamily: "var(--font-mono), monospace",
            fontSize: "10px",
            letterSpacing: "0.2em",
            color: accent,
            display: "flex",
            alignItems: "center",
            gap: "8px",
          }}
        >
          {status === "soon" && <MapDot color={accent} size={5} pulse />}
          {code}
        </span>
      </div>

      <div style={{ position: "relative", zIndex: 1, textAlign: "center", padding: "32px 0" }}>
        <h2
          style={{
            fontFamily: "var(--font-serif), Georgia, serif",
            fontSize: "clamp(1.75rem, 8vw, 3.4rem)",
            fontWeight: 300,
            lineHeight: 1,
            letterSpacing: "-0.02em",
            color: DARK,
            marginBottom: "20px",
            transform: hovered ? "translateY(-2px)" : "translateY(0)",
            transition: "transform 0.45s cubic-bezier(0.2, 0.8, 0.2, 1)",
          }}
        >
          <em>{title}</em>
        </h2>
        <p
          style={{
            fontFamily: "var(--font-body), Georgia, serif",
            fontSize: "0.97rem",
            lineHeight: 1.65,
            color: DARK_65,
            maxWidth: "260px",
            margin: "0 auto",
            fontStyle: "italic",
          }}
        >
          {tagline}
        </p>
      </div>

      <div style={{ position: "relative", zIndex: 1, display: "flex", justifyContent: "center", alignItems: "center", gap: "10px" }}>
        <div
          style={{
            height: "1px",
            width: hovered ? "44px" : "20px",
            backgroundColor: accent,
            transition: "width 0.4s ease",
          }}
        />
        <span
          style={{
            fontFamily: "var(--font-mono), monospace",
            fontSize: "10px",
            letterSpacing: "0.28em",
            textTransform: "uppercase",
            color: hovered ? DARK : DARK_65,
            fontWeight: 600,
            transition: "color 0.3s ease",
            whiteSpace: "nowrap",
          }}
        >
          {action}
        </span>
        <div
          style={{
            height: "1px",
            width: hovered ? "44px" : "20px",
            backgroundColor: accent,
            transition: "width 0.4s ease",
          }}
        />
      </div>
    </div>
  )

  if (href) {
    return (
      <Link href={href} style={{ display: "block", height: "100%", textDecoration: "none", color: "inherit" }}>
        {content}
      </Link>
    )
  }

  return (
    <button
      type="button"
      onClick={onClick}
      style={{
        display: "block",
        height: "100%",
        width: "100%",
        background: "none",
        border: "none",
        padding: 0,
        textAlign: "left",
        font: "inherit",
        color: "inherit",
        cursor: "pointer",
      }}
    >
      {content}
    </button>
  )
}

export function LandingHub() {
  const [productOpen, setProductOpen] = useState(false)
  const containerRef = useRef<HTMLDivElement>(null)
  const coords = "36.1627° N · 86.7816° W"

  return (
    <>
      <main
        ref={containerRef}
        style={{
          minHeight: "100dvh",
          width: "100%",
          backgroundColor: LIGHT,
          color: DARK,
          position: "relative",
          overflow: "hidden",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <div
          aria-hidden
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: "min(1100px, 95vw)",
            height: "min(1100px, 95vw)",
            opacity: 0.042,
            pointerEvents: "none",
            zIndex: 0,
          }}
        >
          <CompassRose size={1100} color={DARK} className="w-full h-full" />
        </div>

        <div
          aria-hidden
          className="w-3 h-3 md:w-5 md:h-5"
          style={{
            position: "absolute",
            zIndex: 2,
            top: "calc(16px + env(safe-area-inset-top, 0px))",
            right: "calc(12px + env(safe-area-inset-right, 0px))",
            borderTop: `1px solid ${DARK_20}`,
            borderRight: `1px solid ${DARK_20}`,
          }}
        />

        <header
          style={{
            position: "relative",
            zIndex: 3,
            paddingTop: "clamp(20px, 3vh, 32px)",
            paddingBottom: "clamp(20px, 3vh, 32px)",
            ...safe.gutter,
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            gap: "16px",
          }}
        >
          <Link href="/" style={{ display: "flex", alignItems: "center", gap: "10px", textDecoration: "none" }}>
            <Image
              src="/thewaylogo.jpeg"
              alt="The Way"
              width={30}
              height={30}
              style={{ objectFit: "contain" }}
              priority
            />
            <span
              style={{
                fontFamily: "var(--font-mono), monospace",
                fontSize: "11px",
                letterSpacing: "0.22em",
                textTransform: "uppercase",
                color: DARK,
                fontWeight: 500,
              }}
            >
              The Way
            </span>
          </Link>

          <div
            className="hidden md:flex"
            style={{
              alignItems: "center",
              gap: "10px",
              fontFamily: "var(--font-mono), monospace",
              fontSize: "10px",
              letterSpacing: "0.22em",
              textTransform: "uppercase",
              color: DARK_50,
            }}
          >
            <MapDot color={RED} size={5} pulse />
            <span>{coords}</span>
          </div>
        </header>

        <section
          style={{
            position: "relative",
            zIndex: 3,
            flex: "1 1 auto",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            paddingTop: "clamp(8px, 2vh, 24px)",
            paddingBottom: "clamp(8px, 2vh, 24px)",
            ...safe.gutter,
            width: "100%",
            maxWidth: "1280px",
            margin: "0 auto",
            boxSizing: "border-box",
          }}
        >
          <div
            style={{
              marginBottom: "clamp(14px, 2vh, 20px)",
              animation: "revealRise 0.8s cubic-bezier(0.2, 0.8, 0.2, 1) 0.05s both",
              textAlign: "center",
            }}
          >
            <span
              style={{
                fontFamily: "var(--font-mono), monospace",
                fontSize: "10px",
                letterSpacing: "0.28em",
                textTransform: "uppercase",
                color: DARK_50,
              }}
            >
              Frontier Technology for the Body of Christ
            </span>
          </div>

          <h1
            style={{
              fontFamily: "var(--font-serif), Georgia, serif",
              fontSize: "clamp(2.2rem, 5.6vw, 4rem)",
              fontWeight: 300,
              lineHeight: 1.05,
              letterSpacing: "-0.018em",
              color: DARK,
              textAlign: "center",
              marginBottom: "clamp(14px, 2vh, 22px)",
              animation: "revealRise 0.9s cubic-bezier(0.2, 0.8, 0.2, 1) 0.12s both",
              maxWidth: "880px",
            }}
          >
            Choose your <em>way.</em>
          </h1>

          <p
            style={{
              fontFamily: "var(--font-body), Georgia, serif",
              fontSize: "clamp(0.95rem, 1.6vw, 1.05rem)",
              fontStyle: "italic",
              lineHeight: 1.6,
              color: DARK_65,
              textAlign: "center",
              maxWidth: "520px",
              marginBottom: "clamp(22px, 4vh, 44px)",
              animation: "revealRise 0.9s cubic-bezier(0.2, 0.8, 0.2, 1) 0.18s both",
            }}
          >
            Three thresholds. One foundation. The transformation of the Body of Christ in the age of artificial intelligence.
          </p>

          <div className="hub-grid">
            <PathCard
              index={0}
              marker="§ I"
              code="VIS"
              title="Vision"
              tagline="The thesis. Why identity precedes activity in the age of AI."
              action="Enter the vision"
              accent={BLUE}
              decoration="compass"
              href="/vision"
            />
            <PathCard
              index={1}
              marker="§ II"
              code="PRD · SOON"
              title="Product"
              tagline="Wayfinder. The identity layer. In private build for the first cohort."
              action="View status"
              accent={RED}
              decoration="triangle"
              onClick={() => setProductOpen(true)}
              status="soon"
            />
            <PathCard
              index={2}
              marker="§ III"
              code="RES"
              title="Research"
              tagline="Publications on AI, formation, and the Church."
              action="Explore research"
              accent={BLUE}
              decoration="codex"
              href="/research"
            />
          </div>
        </section>

        <footer
          style={{
            position: "relative",
            zIndex: 3,
            paddingTop: "clamp(16px, 2.4vh, 28px)",
            ...safe.footerPad,
            ...safe.gutter,
            display: "flex",
            alignItems: "center",
            justifyContent: "flex-end",
            borderTop: `1px solid ${DARK_10}`,
          }}
        >
          <AscendanceFooterLink theme="onLight" />
        </footer>
      </main>

      <ComingSoonModal open={productOpen} onClose={() => setProductOpen(false)} />

      <style jsx>{`
        .hub-grid {
          display: grid;
          grid-template-columns: 1fr;
          width: 100%;
          max-width: 1100px;
          gap: 1px;
          background-color: rgba(28, 23, 16, 0.14);
          border: 1px solid rgba(28, 23, 16, 0.16);
          border-radius: 8px;
          overflow: hidden;
          box-shadow:
            0 20px 56px rgba(28, 23, 16, 0.1),
            0 2px 12px rgba(28, 23, 16, 0.05),
            inset 0 1px 0 rgba(255, 255, 255, 0.65);
        }
        .hub-grid > * {
          background: linear-gradient(165deg, #fdfcfa 0%, #f3efe6 100%);
          min-height: 220px;
        }
        @media (min-width: 768px) {
          .hub-grid {
            grid-template-columns: 1fr 1fr 1fr;
          }
          .hub-grid > * {
            min-height: 300px;
          }
        }
      `}</style>
      <style jsx global>{`
        @keyframes revealRise {
          from { opacity: 0; transform: translateY(14px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes rise {
          from { opacity: 0; transform: translateY(20px) scale(0.98); }
          to { opacity: 1; transform: translateY(0) scale(1); }
        }
      `}</style>
    </>
  )
}

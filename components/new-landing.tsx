"use client"

import { useState, useEffect, useRef } from "react"
import { Menu, X } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

/* ─── Design tokens pulled from the logo ─── */
const LIGHT = "#f7f5f0"        // off-white, barely warm
const DARK = "#1c1710"         // deep ink
const BLUE = "#4a7cbf"         // logo triangle blue
const RED = "#d63030"          // logo dot red
const BLUE_20 = "rgba(74,124,191,0.2)"
const BLUE_10 = "rgba(74,124,191,0.1)"
const RED_20 = "rgba(214,48,48,0.2)"
const WHITE_90 = "rgba(247,245,240,0.9)"
const WHITE_80 = "rgba(247,245,240,0.8)"
const WHITE_65 = "rgba(247,245,240,0.65)"
const WHITE_50 = "rgba(247,245,240,0.5)"
const WHITE_35 = "rgba(247,245,240,0.35)"
const WHITE_20 = "rgba(247,245,240,0.2)"
const DARK_80 = "rgba(28,23,16,0.8)"
const DARK_65 = "rgba(28,23,16,0.65)"
const DARK_50 = "rgba(28,23,16,0.5)"
const DARK_30 = "rgba(28,23,16,0.3)"
const DARK_20 = "rgba(28,23,16,0.2)"
const DARK_15 = "rgba(28,23,16,0.15)"
const DARK_10 = "rgba(28,23,16,0.1)"
const DARK_08 = "rgba(28,23,16,0.08)"
const WHITE_25 = "rgba(247,245,240,0.25)"

/* ─── Decorative SVG elements ─── */
function CompassRose({ size = 120, color = DARK_15, className }: { size?: number; color?: string; className?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      {/* Outer circle */}
      <circle cx="60" cy="60" r="56" stroke={color} strokeWidth="0.5" />
      {/* Inner circle */}
      <circle cx="60" cy="60" r="36" stroke={color} strokeWidth="0.5" />
      <circle cx="60" cy="60" r="18" stroke={color} strokeWidth="0.5" />
      {/* Cardinal lines */}
      <line x1="60" y1="4" x2="60" y2="116" stroke={color} strokeWidth="0.5" />
      <line x1="4" y1="60" x2="116" y2="60" stroke={color} strokeWidth="0.5" />
      {/* Diagonal lines */}
      <line x1="20" y1="20" x2="100" y2="100" stroke={color} strokeWidth="0.3" strokeDasharray="2 4" />
      <line x1="100" y1="20" x2="20" y2="100" stroke={color} strokeWidth="0.3" strokeDasharray="2 4" />
      {/* Tick marks */}
      {[0, 30, 60, 90, 120, 150, 180, 210, 240, 270, 300, 330].map(deg => {
        const rad = (deg * Math.PI) / 180
        const x1 = 60 + 52 * Math.sin(rad)
        const y1 = 60 - 52 * Math.cos(rad)
        const x2 = 60 + 56 * Math.sin(rad)
        const y2 = 60 - 56 * Math.cos(rad)
        return <line key={deg} x1={x1} y1={y1} x2={x2} y2={y2} stroke={color} strokeWidth="0.5" />
      })}
      {/* Center dot */}
      <circle cx="60" cy="60" r="2" fill={color} />
      {/* N marker */}
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

/* Radar / tech-themed graphic for dark sections */
function RadarSweep({ size = 200, color = WHITE_20, className }: { size?: number; color?: string; className?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      {/* Concentric arcs */}
      <circle cx="60" cy="60" r="56" stroke={color} strokeWidth="0.6" fill="none" />
      <circle cx="60" cy="60" r="42" stroke={color} strokeWidth="0.5" fill="none" />
      <circle cx="60" cy="60" r="28" stroke={color} strokeWidth="0.5" fill="none" />
      <circle cx="60" cy="60" r="14" stroke={color} strokeWidth="0.5" fill="none" />
      {/* Cross hairs */}
      <line x1="60" y1="4" x2="60" y2="116" stroke={color} strokeWidth="0.5" />
      <line x1="4" y1="60" x2="116" y2="60" stroke={color} strokeWidth="0.5" />
      {/* Diagonal sweep lines */}
      <line x1="60" y1="60" x2="60" y2="4" stroke={color} strokeWidth="0.4" strokeDasharray="2 3" />
      <line x1="60" y1="60" x2="100" y2="20" stroke={color} strokeWidth="0.3" strokeDasharray="1 4" />
      <line x1="60" y1="60" x2="116" y2="60" stroke={color} strokeWidth="0.3" strokeDasharray="1 4" />
      {/* Center blip */}
      <circle cx="60" cy="60" r="3" fill={color} />
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

function SectionRule({ light = false }: { light?: boolean }) {
  const lineColor = light ? WHITE_35 : DARK_20
  const dotColor = light ? WHITE_65 : DARK_30
  return (
    <div style={{ display: "flex", alignItems: "center", gap: "0", justifyContent: "center", margin: "0 auto", width: "200px" }}>
      <div style={{ flex: 1, height: "1px", backgroundColor: lineColor }} />
      <div style={{ width: "5px", height: "5px", borderRadius: "50%", backgroundColor: dotColor, margin: "0 8px" }} />
      <div style={{ flex: 1, height: "1px", backgroundColor: lineColor }} />
    </div>
  )
}

/* ─── Nav ─── */
function Nav() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 48)
    window.addEventListener("scroll", handler)
    return () => window.removeEventListener("scroll", handler)
  }, [])

  return (
    <nav
      style={{
        position: "fixed",
        top: 0,
        width: "100%",
        zIndex: 50,
        backgroundColor: scrolled ? "rgba(247,245,240,0.96)" : "transparent",
        borderBottom: scrolled ? `1px solid ${DARK_10}` : "1px solid transparent",
        backdropFilter: scrolled ? "blur(10px)" : "none",
        transition: "all 0.35s ease",
      }}
    >
      <div style={{ maxWidth: "1040px", margin: "0 auto", padding: "0 28px" }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", height: "62px" }}>
          <Link href="/" style={{ display: "flex", alignItems: "center", gap: "10px", textDecoration: "none" }}>
            <Image
              src="/thewaylogo.jpeg"
              alt="The Way"
              width={30}
              height={30}
              style={{ objectFit: "contain" }}
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

          <a
            href="#email-signup"
            className="hidden md:inline-block"
            style={{
              fontFamily: "var(--font-mono), monospace",
              fontSize: "10px",
              letterSpacing: "0.2em",
              textTransform: "uppercase",
              color: DARK_50,
              textDecoration: "none",
              borderBottom: `1px solid ${DARK_20}`,
              paddingBottom: "2px",
              transition: "color 0.2s, border-color 0.2s",
            }}
            onMouseEnter={e => {
              const el = e.target as HTMLElement
              el.style.color = DARK
              el.style.borderBottomColor = DARK_50
            }}
            onMouseLeave={e => {
              const el = e.target as HTMLElement
              el.style.color = DARK_50
              el.style.borderBottomColor = DARK_20
            }}
          >
            Request Access
          </a>

          <button
            className="md:hidden"
            onClick={() => setIsOpen(!isOpen)}
            style={{ color: DARK, background: "none", border: "none", cursor: "pointer" }}
          >
            {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>

        {isOpen && (
          <div style={{ padding: "16px 0 20px", borderTop: `1px solid ${DARK_10}` }}>
            <a
              href="#email-signup"
              style={{
                display: "block",
                textAlign: "center",
                fontFamily: "var(--font-mono), monospace",
                fontSize: "10px",
                letterSpacing: "0.2em",
                textTransform: "uppercase",
                color: DARK,
                textDecoration: "none",
                padding: "12px 0",
              }}
              onClick={() => setIsOpen(false)}
            >
              Request Access
            </a>
          </div>
        )}
      </div>
    </nav>
  )
}

/* ─── Reveal hook ─── */
function useReveal() {
  const ref = useRef<HTMLDivElement>(null)
  useEffect(() => {
    if (!ref.current) return
    const els = ref.current.querySelectorAll(".reveal")
    const obs = new IntersectionObserver(
      (entries) => entries.forEach((e) => { if (e.isIntersecting) e.target.classList.add("visible") }),
      { threshold: 0.1 }
    )
    els.forEach((el) => obs.observe(el))
    return () => obs.disconnect()
  }, [])
  return ref
}

function MonoLabel({ children, color }: { children: React.ReactNode; color?: string }) {
  return (
    <span style={{
      fontFamily: "var(--font-mono), monospace",
      fontSize: "10px",
      letterSpacing: "0.28em",
      textTransform: "uppercase",
      color: color ?? DARK_50,
      display: "block",
    }}>
      {children}
    </span>
  )
}

/* ─── Main export ─── */
export function NewLanding() {
  const mainRef = useReveal()

  return (
    <main ref={mainRef} style={{ minHeight: "100vh" }}>
      <Nav />

      {/* ══════ HERO — LIGHT ══════ */}
      <section
        style={{
          backgroundColor: LIGHT,
          minHeight: "100dvh",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          position: "relative",
          overflow: "hidden",
          paddingTop: "80px",
          paddingBottom: "60px",
        }}
      >
        {/* Compass rose — top right decorative (larger on desktop) */}
        <div className="w-[140px] md:w-[240px] h-[140px] md:h-[240px] opacity-40 md:opacity-50" style={{ position: "absolute", top: "60px", right: "40px" }}>
          <CompassRose size={240} color={DARK_20} className="w-full h-full" />
        </div>
        {/* Triangle mark — bottom left (larger on desktop) */}
        <div className="w-[56px] md:w-[100px] h-[56px] md:h-[100px] opacity-30 md:opacity-40" style={{ position: "absolute", bottom: "48px", left: "40px" }}>
          <TriangleMark size={100} color={DARK_20} className="w-full h-full" />
        </div>
        {/* Coordinate tick marks — corners (bigger on desktop) */}
        {[
          { top: 72, left: 28 },
          { top: 72, right: 28 },
          { bottom: 28, left: 28 },
          { bottom: 28, right: 28 },
        ].map((pos, i) => (
          <div
            key={i}
            className="w-3 h-3 md:w-5 md:h-5"
            style={{
              position: "absolute",
              borderTop: i < 2 ? `1px solid ${DARK_20}` : undefined,
              borderBottom: i >= 2 ? `1px solid ${DARK_20}` : undefined,
              borderLeft: i % 2 === 0 ? `1px solid ${DARK_20}` : undefined,
              borderRight: i % 2 === 1 ? `1px solid ${DARK_20}` : undefined,
              ...pos,
            }}
          />
        ))}

        <div style={{ position: "relative", zIndex: 1, maxWidth: "600px", margin: "0 auto", padding: "0 28px", textAlign: "center" }}>
          <div style={{ marginBottom: "44px" }}>
            <Image
              src="/thewaylogo.jpeg"
              alt="The Way"
              width={110}
              height={110}
              style={{ objectFit: "contain", margin: "0 auto" }}
              priority
            />
          </div>

          <div style={{ marginBottom: "28px", display: "flex", alignItems: "center", justifyContent: "center", gap: "10px" }}>
            <div style={{ width: "20px", height: "1px", backgroundColor: DARK_20 }} />
            <MonoLabel color={DARK_50}>Frontier Technology for the Body of Christ</MonoLabel>
            <div style={{ width: "20px", height: "1px", backgroundColor: DARK_20 }} />
          </div>

          <h1
            style={{
              fontFamily: "var(--font-serif), Georgia, serif",
              fontSize: "clamp(2.8rem, 6.5vw, 4.6rem)",
              fontWeight: 300,
              lineHeight: 1.1,
              color: DARK,
              letterSpacing: "-0.015em",
              marginBottom: "36px",
            }}
          >
            You are not who<br />
            the world <em>made you.</em>
          </h1>

          <blockquote style={{ marginBottom: "52px" }}>
            <p
              style={{
                fontFamily: "var(--font-body), Georgia, serif",
                fontSize: "1.05rem",
                fontStyle: "italic",
                color: DARK_50,
                lineHeight: 1.75,
                maxWidth: "440px",
                margin: "0 auto 12px",
              }}
            >
              &ldquo;If anyone is in Christ, he is a new creation. The old has passed away; behold, the new has come.&rdquo;
            </p>
            <cite
              style={{
                fontFamily: "var(--font-mono), monospace",
                fontSize: "10px",
                letterSpacing: "0.28em",
                textTransform: "uppercase",
                color: DARK_50,
                fontStyle: "normal",
              }}
            >
              2 Corinthians 5:17
            </cite>
          </blockquote>

          <a
            href="#email-signup"
            style={{
              fontFamily: "var(--font-mono), monospace",
              fontSize: "clamp(12px, 1.4vw, 14px)",
              letterSpacing: "0.28em",
              textTransform: "uppercase",
              color: DARK,
              fontWeight: 600,
              textDecoration: "none",
              borderBottom: `2px solid ${DARK_50}`,
              paddingBottom: "4px",
              display: "inline-block",
            }}
          >
            Request Early Access
          </a>
        </div>

        {/* Bottom thin rule with red dot */}
        <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, display: "flex", alignItems: "center" }}>
          <div style={{ flex: 1, height: "1px", backgroundColor: DARK_10 }} />
          <div style={{ width: "8px", height: "8px", borderRadius: "50%", backgroundColor: RED, margin: "0 12px" }} />
          <div style={{ flex: 1, height: "1px", backgroundColor: DARK_10 }} />
        </div>
      </section>

      {/* ══════ I — THE TRANSFORMATION — DARK ══════ */}
      <section
        style={{ backgroundColor: DARK, padding: "96px 0 108px", position: "relative", overflow: "hidden" }}
      >
        {/* Background radar — tech-themed, more visible on desktop */}
        <div className="w-[280px] md:w-[480px] h-[280px] md:h-[480px] opacity-[0.08] md:opacity-[0.12]" style={{ position: "absolute", top: "50%", right: "-60px", transform: "translateY(-50%)" }}>
          <RadarSweep size={480} color={LIGHT} className="w-full h-full" />
        </div>

        <div style={{ maxWidth: "680px", margin: "0 auto", padding: "0 28px", position: "relative", zIndex: 1 }}>
          <div className="reveal" style={{ textAlign: "center", marginBottom: "64px" }}>
            <MonoLabel color={WHITE_65}>§ I — The Transformation</MonoLabel>
            <div style={{ marginTop: "24px", marginBottom: "28px" }}>
              <SectionRule light />
            </div>
            <h2
              style={{
                fontFamily: "var(--font-serif), Georgia, serif",
                fontSize: "clamp(1.8rem, 4vw, 2.7rem)",
                fontWeight: 300,
                color: LIGHT,
                lineHeight: 1.2,
                letterSpacing: "-0.01em",
              }}
            >
              Every major information technology<br />
              has <em>transformed the Church.</em>
            </h2>
          </div>

          {/* Timeline */}
          <div style={{ position: "relative" }}>
            {/* Vertical line */}
            <div
              style={{
                position: "absolute",
                left: "3px",
                top: "8px",
                bottom: "8px",
                width: "1px",
                background: `linear-gradient(to bottom, ${BLUE_20}, ${BLUE}, ${BLUE_20})`,
              }}
            />

            {[
              {
                label: "1st Century",
                code: "ORL → SCR",
                title: "Oral to Scribal.",
                body: "The apostles' spoken witness became letters, codices, canon. The Word was fixed. It could travel.",
              },
              {
                label: "15th Century",
                code: "SCR → PRT",
                title: "Scribal to Print.",
                body: "Gutenberg put Scripture in the hands of the people. The Reformation followed. Authority was redistributed.",
              },
              {
                label: "20th Century",
                code: "PRT → BRC",
                title: "Broadcast & Digital.",
                body: "Radio, television, the internet. The Church reached millions. Scale was achieved. Something else was lost.",
              },
              {
                label: "Now",
                code: "BRC → A·I",
                title: "Artificial Intelligence.",
                body: "The most consequential information technology since the written word. This transformation is happening. The question is who builds it.",
                highlight: true,
              },
            ].map((item, i) => (
              <div
                key={i}
                className="reveal"
                style={{
                  display: "flex",
                  gap: "28px",
                  marginBottom: i < 3 ? "48px" : "0",
                  transitionDelay: `${i * 0.09}s`,
                }}
              >
                {/* Dot */}
                <div style={{ flexShrink: 0, paddingTop: "4px" }}>
                  <div
                    style={{
                      width: "7px",
                      height: "7px",
                      borderRadius: "50%",
                      backgroundColor: item.highlight ? RED : BLUE,
                      border: `1px solid ${item.highlight ? RED : BLUE}`,
                      boxShadow: item.highlight ? `0 0 8px ${RED_20}` : `0 0 8px ${BLUE_20}`,
                    }}
                  />
                </div>
                <div>
                  <div style={{ display: "flex", alignItems: "baseline", gap: "14px", marginBottom: "8px", flexWrap: "wrap" }}>
                    <span
                      style={{
                        fontFamily: "var(--font-mono), monospace",
                        fontSize: "10px",
                        letterSpacing: "0.22em",
                        textTransform: "uppercase",
                        color: item.highlight ? RED : BLUE,
                      }}
                    >
                      {item.label}
                    </span>
                    <span
                      style={{
                        fontFamily: "var(--font-mono), monospace",
                        fontSize: "9px",
                        color: WHITE_50,
                        letterSpacing: "0.12em",
                      }}
                    >
                      {item.code}
                    </span>
                  </div>
                  <p
                    style={{
                      fontFamily: "var(--font-body), Georgia, serif",
                      fontSize: "1.05rem",
                      color: item.highlight ? LIGHT : WHITE_80,
                      lineHeight: 1.75,
                    }}
                  >
                    <strong style={{ fontWeight: 500 }}>{item.title}</strong>{" "}
                    <span style={{ color: item.highlight ? WHITE_80 : WHITE_50 }}>{item.body}</span>
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="reveal" style={{ marginTop: "56px", paddingTop: "40px", borderTop: `1px solid ${WHITE_35}` }}>
            <p
              style={{
                fontFamily: "var(--font-body), Georgia, serif",
                fontSize: "1.05rem",
                color: WHITE_80,
                lineHeight: 1.85,
                textAlign: "center",
              }}
            >
              AI will reshape the Body of Christ whether we participate or not.{" "}
              <strong style={{ color: LIGHT, fontWeight: 500 }}>The Way exists to ensure that what gets built serves the Kingdom</strong> rather than replacing it.
            </p>
          </div>
        </div>

        {/* Bottom divider with red dot */}
        <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, display: "flex", alignItems: "center" }}>
          <div style={{ flex: 1, height: "1px", backgroundColor: WHITE_35 }} />
          <div style={{ width: "8px", height: "8px", borderRadius: "50%", backgroundColor: RED, margin: "0 12px" }} />
          <div style={{ flex: 1, height: "1px", backgroundColor: WHITE_35 }} />
        </div>
      </section>

      {/* ══════ II — THE CRISIS — LIGHT ══════ */}
      <section style={{ backgroundColor: LIGHT, padding: "96px 0 108px" }}>
        <div style={{ maxWidth: "620px", margin: "0 auto", padding: "0 28px" }}>
          <div className="reveal" style={{ textAlign: "center", marginBottom: "56px" }}>
            <MonoLabel color={DARK_50}>§ II — The Crisis</MonoLabel>
            <div style={{ marginTop: "24px", marginBottom: "28px" }}>
              <SectionRule />
            </div>
            <h2
              style={{
                fontFamily: "var(--font-serif), Georgia, serif",
                fontSize: "clamp(1.8rem, 4vw, 2.7rem)",
                fontWeight: 300,
                color: DARK,
                lineHeight: 1.2,
                letterSpacing: "-0.01em",
              }}
            >
              As the Church scaled from local to global,{" "}
              <em>discipleship suffered.</em>
            </h2>
          </div>

          <div className="reveal" style={{ display: "flex", flexDirection: "column", gap: "22px" }}>
            <p style={{ fontFamily: "var(--font-body), Georgia, serif", fontSize: "1.05rem", color: DARK_65, lineHeight: 1.85 }}>
              We learned to fill rooms. We built platforms that reach millions. We got remarkably good at gathering. But{" "}
              <strong style={{ color: DARK, fontWeight: 600 }}>gathering is not the same thing as forming.</strong>{" "}
              A stadium full of people who heard a message on Sunday and returned to the same identity patterns on Monday is not a discipleship failure of will. It is a{" "}
              <strong><em>failure of infrastructure.</em></strong>
            </p>
            <p style={{ fontFamily: "var(--font-body), Georgia, serif", fontSize: "1.05rem", color: DARK_65, lineHeight: 1.85 }}>
              The early Church did not scale through content. It scaled through{" "}
              <strong style={{ color: DARK, fontWeight: 600 }}>transformation.</strong>{" "}
              Through walking with people so closely that their identity was rebuilt from the ground up in Christ. Through the kind of sustained, intimate{" "}
              <em>formation</em> that the modern Church has largely outsourced to a weekly service and a devotional app.
            </p>
            <p style={{ fontFamily: "var(--font-body), Georgia, serif", fontSize: "1.05rem", color: DARK_65, lineHeight: 1.85 }}>
              What transforms a human heart?{" "}
              <strong style={{ color: DARK, fontWeight: 600 }}>The Word of God. The Holy Spirit.</strong>{" "}
              Real, lived community operating like the original Church did in Acts. We are here to replace none of those things. We are here to facilitate their reemergence as the Body of Christ transforms again.
            </p>
          </div>

          <div
            className="reveal"
            style={{
              marginTop: "52px",
              paddingLeft: "20px",
              borderLeft: `3px solid ${BLUE}`,
            }}
          >
            <p
              style={{
                fontFamily: "var(--font-serif), Georgia, serif",
                fontSize: "1.3rem",
                fontStyle: "italic",
                color: DARK,
                lineHeight: 1.65,
                marginBottom: "14px",
              }}
            >
              &ldquo;Do not be conformed to this world, but be transformed by the renewing of your mind.&rdquo;
            </p>
            <MonoLabel color={BLUE}>Romans 12:2</MonoLabel>
          </div>
        </div>
      </section>

      {/* ══════ III — THE FOUNDATION — DARK ══════ */}
      <section style={{ backgroundColor: DARK, padding: "96px 0 108px", position: "relative", overflow: "hidden" }}>
        {/* Radar — tech-themed corner accent */}
        <div className="w-[160px] md:w-[280px] h-[160px] md:h-[280px] opacity-[0.07] md:opacity-[0.11]" style={{ position: "absolute", top: "40px", right: "40px" }}>
          <RadarSweep size={280} color={WHITE_25} className="w-full h-full" />
        </div>
        {/* Triangle decorations — larger on desktop */}
        <div className="w-[100px] md:w-[180px] h-[100px] md:h-[180px] opacity-[0.08] md:opacity-[0.12]" style={{ position: "absolute", top: "40px", left: "40px" }}>
          <TriangleMark size={180} color={LIGHT} className="w-full h-full" />
        </div>
        <div className="w-[160px] md:w-[280px] h-[160px] md:h-[280px] opacity-[0.06] md:opacity-[0.1]" style={{ position: "absolute", bottom: "40px", right: "40px" }}>
          <TriangleMark size={280} color={BLUE} className="w-full h-full" />
        </div>

        <div style={{ maxWidth: "620px", margin: "0 auto", padding: "0 28px", position: "relative", zIndex: 1 }}>
          <div className="reveal" style={{ textAlign: "center", marginBottom: "56px" }}>
            <MonoLabel color={WHITE_65}>§ III — The Foundation</MonoLabel>
            <div style={{ marginTop: "24px", marginBottom: "28px" }}>
              <SectionRule light />
            </div>
            <h2
              style={{
                fontFamily: "var(--font-serif), Georgia, serif",
                fontSize: "clamp(1.8rem, 4vw, 2.7rem)",
                fontWeight: 300,
                color: LIGHT,
                lineHeight: 1.2,
                letterSpacing: "-0.01em",
              }}
            >
              Before Jesus did anything,<br />
              the Father declared <em>who he was.</em>
            </h2>
          </div>

          <div
            className="reveal"
            style={{
              textAlign: "center",
              marginBottom: "48px",
              padding: "32px 28px",
              border: `1px solid ${WHITE_35}`,
              borderTop: `3px solid ${BLUE}`,
            }}
          >
            <p
              style={{
                fontFamily: "var(--font-serif), Georgia, serif",
                fontSize: "1.2rem",
                fontStyle: "italic",
                color: LIGHT,
                lineHeight: 1.7,
                marginBottom: "14px",
              }}
            >
              &ldquo;You are my Son, whom I love; with you I am well pleased.&rdquo;
            </p>
            <MonoLabel color={BLUE}>Matthew 3:17</MonoLabel>
          </div>

          <div className="reveal" style={{ marginBottom: "52px", display: "flex", flexDirection: "column", gap: "20px" }}>
            <p style={{ fontFamily: "var(--font-body), Georgia, serif", fontSize: "1.05rem", color: WHITE_80, lineHeight: 1.85 }}>
              Before the ministry. Before the miracles. Before the cross.{" "}
              <strong style={{ color: LIGHT, fontWeight: 600 }}>Identity came first.</strong>{" "}
              Everything Jesus did flowed from a settled understanding of who he was in relationship to the Father.
            </p>
            <p style={{ fontFamily: "var(--font-body), Georgia, serif", fontSize: "1.05rem", color: WHITE_80, lineHeight: 1.85 }}>
              The enemy understands this. Satan&apos;s first move is <em>always</em> against identity. Control who someone believes they are and you control everything that follows. The Way is built on the same sequence the Father used:{" "}
              <strong style={{ color: LIGHT, fontWeight: 600 }}>identity before activity. Formation before information. Becoming before doing.</strong>
            </p>
          </div>

          {/* Manifesto — carved in light */}
          <div style={{ borderTop: `1px solid ${WHITE_35}` }}>
            {[
              {
                n: "01",
                title: "Identity before activity.",
                body: <>Know who you are in Christ <em>before anything you do.</em> The old self was built on performance. The new self is built on <strong style={{ color: LIGHT, fontWeight: 500 }}>sonship.</strong></>,
              },
              {
                n: "02",
                title: "Formation over information.",
                body: <>Deeper than content consumption. The slow, daily work of <strong style={{ color: LIGHT, fontWeight: 500 }}>becoming someone new</strong> in Christ.</>,
              },
              {
                n: "03",
                title: "Renewal as practice.",
                body: <>Romans 12:2 is not a one-time declaration. It is a <strong style={{ color: LIGHT, fontWeight: 500 }}>discipline.</strong> A daily confrontation with the patterns the world wrote into you.</>,
              },
            ].map((item, i) => (
              <div
                key={i}
                className="reveal"
                style={{
                  padding: "32px 0",
                  borderBottom: `1px solid ${WHITE_35}`,
                  display: "grid",
                  gridTemplateColumns: "36px 1fr",
                  gap: "24px",
                  alignItems: "start",
                  transitionDelay: `${i * 0.09}s`,
                }}
              >
                <span
                  style={{
                    fontFamily: "var(--font-mono), monospace",
                    fontSize: "11px",
                    color: RED,
                    letterSpacing: "0.15em",
                    paddingTop: "5px",
                  }}
                >
                  {item.n}
                </span>
                <div>
                  <p
                    style={{
                      fontFamily: "var(--font-serif), Georgia, serif",
                      fontSize: "1.3rem",
                      fontWeight: 500,
                      color: LIGHT,
                      marginBottom: "10px",
                      lineHeight: 1.3,
                    }}
                  >
                    {item.title}
                  </p>
                  <p
                    style={{
                      fontFamily: "var(--font-body), Georgia, serif",
                      fontSize: "1rem",
                      color: WHITE_80,
                      lineHeight: 1.8,
                    }}
                  >
                    {item.body}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, display: "flex", alignItems: "center" }}>
          <div style={{ flex: 1, height: "1px", backgroundColor: WHITE_35 }} />
          <div style={{ width: "8px", height: "8px", borderRadius: "50%", backgroundColor: RED, margin: "0 12px" }} />
          <div style={{ flex: 1, height: "1px", backgroundColor: WHITE_35 }} />
        </div>
      </section>

      {/* ══════ IV — WAYFINDER — LIGHT ══════ */}
      <section style={{ backgroundColor: LIGHT, padding: "96px 0 108px", position: "relative", overflow: "hidden" }}>
        {/* Large compass behind the section — more visible on desktop */}
        <div
          className="opacity-[0.045] md:opacity-[0.08]"
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: "min(520px, 45vw)",
            height: "min(520px, 45vw)",
            pointerEvents: "none",
          }}
        >
          <CompassRose size={520} color={DARK} className="w-full h-full" />
        </div>

        <div style={{ maxWidth: "640px", margin: "0 auto", padding: "0 28px", position: "relative", zIndex: 1 }}>
          <div className="reveal" style={{ textAlign: "center", marginBottom: "64px" }}>
            {/* The red dot — the logo's living element, now pulsing */}
            <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "12px", marginBottom: "20px" }}>
              <div style={{ width: "32px", height: "1px", backgroundColor: DARK_10 }} />
              <MapDot color={RED} size={10} pulse />
              <div style={{ width: "32px", height: "1px", backgroundColor: DARK_10 }} />
            </div>

            <MonoLabel color={DARK_50}>§ IV — Wayfinder</MonoLabel>
            <div style={{ marginTop: "24px", marginBottom: "28px" }}>
              <SectionRule />
            </div>
            <h2
              style={{
                fontFamily: "var(--font-serif), Georgia, serif",
                fontSize: "clamp(1.8rem, 4vw, 2.7rem)",
                fontWeight: 300,
                color: DARK,
                lineHeight: 1.2,
                letterSpacing: "-0.01em",
                marginBottom: "28px",
              }}
            >
              An AI trained on the <em>tradition,</em><br />
              built for <em>formation.</em>
            </h2>
            <p
              style={{
                fontFamily: "var(--font-body), Georgia, serif",
                fontSize: "1.05rem",
                color: DARK_65,
                lineHeight: 1.85,
                maxWidth: "500px",
                margin: "0 auto",
              }}
            >
              Most AI gives you answers.{" "}
              <strong style={{ color: DARK, fontWeight: 600 }}>Wayfinder gives you formation.</strong>{" "}
              It holds the thread of your growth over time, pressing into who you are and who you are becoming in Christ. It does not search the internet.{" "}
              <em>It searches the tradition.</em>
            </p>
          </div>

          {/* Capabilities */}
          <div style={{ borderTop: `1px solid ${DARK_10}` }}>
            {[
              { code: "SCR", label: "Scripture & Doctrine", body: "Walk through a passage with the rigor of a theologian and the patience of a pastor. Original language, historical context, what the fathers said, and what it means for you today.", dot: BLUE },
              { code: "APO", label: "Apologetics", body: "The world will challenge what you believe. Prepare to answer with clarity. The Resurrection. The problem of evil. The arguments you actually encounter, grounded in logic and the tradition.", dot: BLUE },
              { code: "WAR", label: "Spiritual Warfare", body: "The enemy's tactics are ancient and patterned. Fear, accusation, division, confusion. Name what is happening, root it in Scripture, pray with authority. Awareness is the beginning of freedom.", dot: RED },
              { code: "PRA", label: "Prayer & Renewal", body: "A guide into deeper prayer. Intercessory depth, liturgical rhythm, the practiced silence the desert fathers understood. A daily rhythm that displaces the noise rather than competing with it.", dot: BLUE },
              { code: "IDN", label: "Identity Reflection", body: "The old self does not yield to information. It yields to repeated encounter with truth. Daily confrontation with your identity in Christ that slowly rewrites the story you have been living from.", dot: RED },
              { code: "FAT", label: "The Church Fathers", body: "Origen on spiritual warfare. Augustine on sin. Athanasius on the Incarnation. Chrysostom on radical living. Their writings are not relics. They are weapons. Made accessible and actionable.", dot: BLUE },
            ].map((item, i) => (
              <div
                key={i}
                className="reveal"
                style={{
                  padding: "32px 0",
                  borderBottom: `1px solid ${DARK_10}`,
                  display: "grid",
                  gridTemplateColumns: "48px 1fr",
                  gap: "20px",
                  alignItems: "start",
                  transitionDelay: `${(i % 3) * 0.08}s`,
                }}
              >
                <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "8px", paddingTop: "4px" }}>
                  <MapDot color={item.dot} size={6} />
                  <span
                    style={{
                      fontFamily: "var(--font-mono), monospace",
                      fontSize: "10px",
                      letterSpacing: "0.12em",
                      color: item.dot,
                    }}
                  >
                    {item.code}
                  </span>
                </div>
                <div>
                  <h3
                    style={{
                      fontFamily: "var(--font-serif), Georgia, serif",
                      fontSize: "1.2rem",
                      fontWeight: 500,
                      color: DARK,
                      marginBottom: "10px",
                      lineHeight: 1.3,
                    }}
                  >
                    {item.label}
                  </h3>
                  <p
                    style={{
                      fontFamily: "var(--font-body), Georgia, serif",
                      fontSize: "0.97rem",
                      color: DARK_50,
                      lineHeight: 1.8,
                    }}
                  >
                    {item.body}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════ V — THE VISION — DARK ══════ */}
      <section style={{ backgroundColor: DARK, padding: "96px 0 108px", position: "relative", overflow: "hidden" }}>
        {/* Radar — tech-themed, larger on desktop */}
        <div className="w-[180px] md:w-[320px] h-[180px] md:h-[320px] opacity-[0.07] md:opacity-[0.12]" style={{ position: "absolute", bottom: "30px", right: "30px" }}>
          <RadarSweep size={320} color={BLUE} className="w-full h-full" />
        </div>

        <div style={{ maxWidth: "620px", margin: "0 auto", padding: "0 28px", position: "relative", zIndex: 1 }}>
          <div className="reveal" style={{ textAlign: "center", marginBottom: "56px" }}>
            <MonoLabel color={WHITE_65}>§ V — The Vision</MonoLabel>
            <div style={{ marginTop: "24px", marginBottom: "28px" }}>
              <SectionRule light />
            </div>
            <h2
              style={{
                fontFamily: "var(--font-serif), Georgia, serif",
                fontSize: "clamp(1.8rem, 4vw, 2.7rem)",
                fontWeight: 300,
                color: LIGHT,
                lineHeight: 1.2,
                letterSpacing: "-0.01em",
              }}
            >
              The Body of Christ needs<br />
              more than content.<br />
              It needs <em>infrastructure.</em>
            </h2>
          </div>

          <div className="reveal" style={{ display: "flex", flexDirection: "column", gap: "22px" }}>
            <p style={{ fontFamily: "var(--font-body), Georgia, serif", fontSize: "1.05rem", color: WHITE_80, lineHeight: 1.85 }}>
              The early followers of The Way did not have institutions. They had{" "}
              <strong style={{ color: LIGHT, fontWeight: 600 }}>identity, community, and the Spirit.</strong>{" "}
              They also turned the world upside down. What they lacked was scale. What we have lacked is depth. The question now is whether we build the technology that serves both.
            </p>
            <p style={{ fontFamily: "var(--font-body), Georgia, serif", fontSize: "1.05rem", color: WHITE_80, lineHeight: 1.85 }}>
              The Way is <strong><em>the identity layer.</em></strong>{" "}
              The place where someone discovers who they are in Christ, builds the habits of a new self, and carries that self into everything. Their work. Their community. The way they steward what God has placed in their hands.
            </p>
            <p style={{ fontFamily: "var(--font-body), Georgia, serif", fontSize: "1.05rem", color: WHITE_80, lineHeight: 1.85 }}>
              This is the foundation. What gets built on top of it is a question for the Spirit to answer over time. But if the Church is going to anchor something real in a world that is fragmenting, it needs people who{" "}
              <strong style={{ color: LIGHT, fontWeight: 600 }}>actually know who they are.</strong>
            </p>
          </div>
        </div>

        <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, display: "flex", alignItems: "center" }}>
          <div style={{ flex: 1, height: "1px", backgroundColor: WHITE_35 }} />
          <div style={{ width: "8px", height: "8px", borderRadius: "50%", backgroundColor: RED, margin: "0 12px" }} />
          <div style={{ flex: 1, height: "1px", backgroundColor: WHITE_35 }} />
        </div>
      </section>

      {/* ══════ FINAL CTA — LIGHT ══════ */}
      <section id="email-signup" style={{ backgroundColor: LIGHT, padding: "112px 0 128px", position: "relative", overflow: "hidden", scrollMarginTop: "84px" }}>
        <div className="w-[48px] md:w-[90px] h-[48px] md:h-[90px] opacity-20 md:opacity-30" style={{ position: "absolute", top: "50px", left: "50px" }}>
          <TriangleMark size={90} color={DARK_20} className="w-full h-full" />
        </div>
        <div className="w-[90px] md:w-[160px] h-[90px] md:h-[160px] opacity-[0.15] md:opacity-25" style={{ position: "absolute", bottom: "50px", right: "50px" }}>
          <CompassRose size={160} color={DARK_20} className="w-full h-full" />
        </div>
        {[
          { top: 40, left: 20 },
          { top: 40, right: 20 },
          { bottom: 40, left: 20 },
          { bottom: 40, right: 20 },
        ].map((pos, i) => (
          <div
            key={i}
            className="w-3 h-3 md:w-5 md:h-5"
            style={{
              position: "absolute",
              borderTop: i < 2 ? `1px solid ${DARK_10}` : undefined,
              borderBottom: i >= 2 ? `1px solid ${DARK_10}` : undefined,
              borderLeft: i % 2 === 0 ? `1px solid ${DARK_10}` : undefined,
              borderRight: i % 2 === 1 ? `1px solid ${DARK_10}` : undefined,
              ...pos,
            }}
          />
        ))}

        <div style={{ maxWidth: "460px", margin: "0 auto", padding: "0 28px", textAlign: "center", position: "relative", zIndex: 1 }}>
          <div className="reveal">
            <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "10px", marginBottom: "36px" }}>
              <div style={{ width: "24px", height: "1px", backgroundColor: DARK_20 }} />
              <MapDot color={RED} size={7} />
              <div style={{ width: "24px", height: "1px", backgroundColor: DARK_20 }} />
            </div>

            <h2
              style={{
                fontFamily: "var(--font-serif), Georgia, serif",
                fontSize: "clamp(2.4rem, 5.5vw, 3.4rem)",
                fontWeight: 300,
                color: DARK,
                lineHeight: 1.1,
                marginBottom: "20px",
                letterSpacing: "-0.015em",
              }}
            >
              <em>The new has come.</em><br />
              Begin the work.
            </h2>

            <p
              style={{
                fontFamily: "var(--font-body), Georgia, serif",
                fontSize: "1rem",
                color: DARK_50,
                lineHeight: 1.7,
                marginBottom: "44px",
              }}
            >
              We are building with a small group of believers first.
            </p>

            <form
              style={{ display: "flex", flexDirection: "column", gap: "10px", maxWidth: "360px", margin: "0 auto" }}
              onSubmit={(e) => {
                e.preventDefault()
                window.open("https://theway.masterymade.com/", "_blank")
              }}
            >
              <input
                type="email"
                placeholder="Your email address"
                style={{
                  width: "100%",
                  backgroundColor: "transparent",
                  border: `1px solid ${DARK_20}`,
                  padding: "14px 16px",
                  fontSize: "0.95rem",
                  fontFamily: "var(--font-body), Georgia, serif",
                  color: DARK,
                  outline: "none",
                  boxSizing: "border-box",
                }}
                onFocus={e => (e.target.style.borderColor = DARK_50)}
                onBlur={e => (e.target.style.borderColor = DARK_20)}
              />
              <button
                type="submit"
                style={{
                  width: "100%",
                  backgroundColor: DARK,
                  color: LIGHT,
                  padding: "14px 24px",
                  fontFamily: "var(--font-mono), monospace",
                  fontSize: "10px",
                  letterSpacing: "0.25em",
                  textTransform: "uppercase",
                  border: "none",
                  cursor: "pointer",
                }}
              >
                Request Access
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* ══════ FOOTER ══════ */}
      <footer
        style={{
          backgroundColor: DARK,
          padding: "28px 28px",
          borderTop: `1px solid ${WHITE_35}`,
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          flexWrap: "wrap",
          gap: "16px",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
          <Image
            src="/thewaylogo.jpeg"
            alt="The Way"
            width={20}
            height={20}
            style={{ objectFit: "contain", opacity: 0.6 }}
          />
          <span
            style={{
              fontFamily: "var(--font-mono), monospace",
              fontSize: "10px",
              letterSpacing: "0.22em",
              color: WHITE_65,
              textTransform: "uppercase",
            }}
          >
            The Way · 2026
          </span>
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
          <a
            href="https://ascendance.one"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: "flex",
              alignItems: "center",
              gap: "8px",
              textDecoration: "none",
              color: WHITE_65,
              transition: "color 0.2s",
            }}
            onMouseEnter={e => {
              const el = e.currentTarget
              el.style.color = WHITE_90
            }}
            onMouseLeave={e => {
              const el = e.currentTarget
              el.style.color = WHITE_65
            }}
          >
            <Image
              src="/Ascendance White Icon.png"
              alt="Ascendance"
              width={18}
              height={18}
              style={{ objectFit: "contain" }}
            />
            <span
              style={{
                fontFamily: "var(--font-mono), monospace",
                fontSize: "9px",
                letterSpacing: "0.18em",
                textTransform: "uppercase",
              }}
            >
              An Ascendance Company
            </span>
          </a>
          <MapDot color={RED} size={5} />
        </div>
      </footer>
    </main>
  )
}

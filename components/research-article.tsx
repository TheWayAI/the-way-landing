"use client"

import { useState, useEffect, useRef } from "react"
import Link from "next/link"
import Image from "next/image"
import { SiteNav } from "@/components/site-nav"
import { AscendanceFooterLink } from "@/components/ascendance-footer-link"
import { ComingSoonModal } from "@/components/coming-soon-modal"
import type { Publication } from "@/lib/research"
import type { ArticleContent } from "@/lib/research-content"
import { safe } from "@/lib/safe-area"

const LIGHT = "#f7f5f0"
const DARK = "#1c1710"
const BLUE = "#4a7cbf"
const RED = "#d63030"
const DARK_80 = "rgba(28,23,16,0.8)"
const DARK_65 = "rgba(28,23,16,0.65)"
const DARK_50 = "rgba(28,23,16,0.5)"
const DARK_30 = "rgba(28,23,16,0.3)"
const DARK_20 = "rgba(28,23,16,0.2)"
const DARK_15 = "rgba(28,23,16,0.15)"
const DARK_10 = "rgba(28,23,16,0.1)"
const DARK_05 = "rgba(28,23,16,0.05)"
const WHITE_65 = "rgba(247,245,240,0.65)"
const WHITE_35 = "rgba(247,245,240,0.35)"

function CompassRose({ size = 120, color = DARK_15 }: { size?: number; color?: string }) {
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

function CodexMark({ size = 80, color = DARK_15 }: { size?: number; color?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
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

function SectionRule({ light = false }: { light?: boolean }) {
  const lineColor = light ? WHITE_35 : DARK_20
  const dotColor = light ? WHITE_65 : DARK_30
  return (
    <div style={{ display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto", width: "200px" }}>
      <div style={{ flex: 1, height: "1px", backgroundColor: lineColor }} />
      <div style={{ width: "5px", height: "5px", borderRadius: "50%", backgroundColor: dotColor, margin: "0 8px" }} />
      <div style={{ flex: 1, height: "1px", backgroundColor: lineColor }} />
    </div>
  )
}

function useReveal() {
  const ref = useRef<HTMLDivElement>(null)
  useEffect(() => {
    if (!ref.current) return
    const els = ref.current.querySelectorAll(".reveal")
    const obs = new IntersectionObserver(
      entries => entries.forEach(e => { if (e.isIntersecting) e.target.classList.add("visible") }),
      { threshold: 0.1 }
    )
    els.forEach(el => obs.observe(el))
    return () => obs.disconnect()
  }, [])
  return ref
}

function useReadingProgress() {
  const [progress, setProgress] = useState(0)
  useEffect(() => {
    const handler = () => {
      const h = document.documentElement
      const scrolled = h.scrollTop
      const max = h.scrollHeight - h.clientHeight
      setProgress(max > 0 ? Math.min(1, Math.max(0, scrolled / max)) : 0)
    }
    handler()
    window.addEventListener("scroll", handler, { passive: true })
    return () => window.removeEventListener("scroll", handler)
  }, [])
  return progress
}

export function ResearchArticle({ publication, content }: { publication: Publication; content: ArticleContent }) {
  const [productOpen, setProductOpen] = useState(false)
  const mainRef = useReveal()
  const progress = useReadingProgress()

  return (
    <>
      <SiteNav current="research" onProductClick={() => setProductOpen(true)} />

      {/* Reading progress strip */}
      <div
        aria-hidden
        style={{
          position: "fixed",
          top: safe.navStack,
          left: 0,
          right: 0,
          height: "2px",
          backgroundColor: "transparent",
          zIndex: 49,
          pointerEvents: "none",
        }}
      >
        <div
          style={{
            height: "100%",
            width: `${progress * 100}%`,
            background: `linear-gradient(to right, ${BLUE}, ${RED})`,
            transition: "width 0.1s linear",
          }}
        />
      </div>

      <main ref={mainRef} style={{ backgroundColor: LIGHT, color: DARK, minHeight: "100vh", position: "relative", overflow: "hidden" }}>
        {/* ─── HERO / TITLE PLATE ─── */}
        <section
          style={{
            position: "relative",
            padding: "calc(62px + env(safe-area-inset-top, 0px) + clamp(48px, 10vh, 100px)) 0 clamp(44px, 6vh, 80px)",
            borderBottom: `1px solid ${DARK_10}`,
            overflow: "hidden",
          }}
        >
          {/* Decorative compass background */}
          <div
            aria-hidden
            style={{
              position: "absolute",
              top: "50%",
              right: "-180px",
              transform: "translateY(-50%)",
              opacity: 0.08,
              pointerEvents: "none",
            }}
            className="hidden md:block"
          >
            <CompassRose size={520} color={DARK} />
          </div>

          {/* Corner ticks */}
          {[
            { top: "calc(72px + env(safe-area-inset-top, 0px))", left: "calc(18px + env(safe-area-inset-left, 0px))" },
            { top: "calc(72px + env(safe-area-inset-top, 0px))", right: "calc(18px + env(safe-area-inset-right, 0px))" },
          ].map((pos, i) => (
            <div
              key={i}
              className="w-3 h-3 md:w-5 md:h-5"
              style={{
                position: "absolute",
                borderTop: `1px solid ${DARK_20}`,
                borderLeft: i % 2 === 0 ? `1px solid ${DARK_20}` : undefined,
                borderRight: i % 2 === 1 ? `1px solid ${DARK_20}` : undefined,
                ...pos,
              }}
            />
          ))}

          <div style={{ maxWidth: "780px", margin: "0 auto", ...safe.gutter, position: "relative", zIndex: 1 }}>
            {/* Breadcrumb */}
            <div
              className="reveal"
              style={{
                display: "flex",
                alignItems: "center",
                gap: "10px",
                marginBottom: "32px",
                fontFamily: "var(--font-mono), monospace",
                fontSize: "10px",
                letterSpacing: "0.24em",
                textTransform: "uppercase",
                color: DARK_50,
                flexWrap: "wrap",
              }}
            >
              <Link href="/research" style={{ color: DARK_50, textDecoration: "none", transition: "color 0.2s" }}>
                Research
              </Link>
              <span style={{ color: DARK_30 }}>/</span>
              <span style={{ color: BLUE }}>{publication.code}</span>
              <span style={{ color: DARK_30 }}>·</span>
              <span>{publication.category}</span>
            </div>

            {/* Title */}
            <h1
              className="reveal"
              style={{
                fontFamily: "var(--font-serif), Georgia, serif",
                fontSize: "clamp(2.6rem, 6vw, 4.6rem)",
                fontWeight: 300,
                lineHeight: 1.02,
                letterSpacing: "-0.025em",
                color: DARK,
                marginBottom: "26px",
              }}
            >
              {publication.title}
            </h1>

            {/* Dek */}
            <p
              className="reveal"
              style={{
                fontFamily: "var(--font-serif), Georgia, serif",
                fontSize: "clamp(1.2rem, 2.2vw, 1.55rem)",
                fontStyle: "italic",
                fontWeight: 300,
                lineHeight: 1.45,
                color: DARK_65,
                marginBottom: "44px",
                maxWidth: "640px",
              }}
            >
              {publication.dek}
            </p>

            {/* Byline */}
            <div
              className="reveal"
              style={{
                paddingTop: "22px",
                borderTop: `1px solid ${DARK_10}`,
              }}
            >
              <div
                style={{
                  fontFamily: "var(--font-body), Georgia, serif",
                  fontSize: "0.95rem",
                  lineHeight: 1.55,
                  color: DARK_80,
                  display: "flex",
                  flexWrap: "wrap",
                  alignItems: "baseline",
                  gap: "0",
                }}
              >
                <span style={{ color: DARK }}>
                  <span style={{ fontWeight: 600 }}>{publication.authors.join(" · ")}</span>
                  {publication.authorLine ? (
                    <>
                      <span style={{ color: DARK_80, fontWeight: 400 }}> — </span>
                      <span style={{ color: DARK_80, fontWeight: 400 }}>{publication.authorLine}</span>
                    </>
                  ) : null}
                </span>
              </div>
              <div
                style={{
                  marginTop: "10px",
                  fontFamily: "var(--font-mono), monospace",
                  fontSize: "10px",
                  letterSpacing: "0.24em",
                  textTransform: "uppercase",
                  color: DARK_50,
                  display: "flex",
                  flexWrap: "wrap",
                  alignItems: "center",
                  gap: "14px",
                }}
              >
                <span>{publication.dateLabel}</span>
                <span style={{ color: DARK_30 }}>·</span>
                <span>The Way</span>
              </div>
            </div>
          </div>
        </section>

        {/* ─── BODY ─── */}
        <article style={{ position: "relative", padding: "clamp(40px, 7vh, 96px) 0" }}>
          <div style={{ maxWidth: "680px", margin: "0 auto", ...safe.gutter }}>
            {/* Epigraph */}
            {content.epigraph && (
              <aside
                className="reveal"
                style={{
                  marginBottom: "clamp(40px, 6vh, 60px)",
                  textAlign: "center",
                }}
              >
                <p
                  style={{
                    fontFamily: "var(--font-serif), Georgia, serif",
                    fontSize: "clamp(1.15rem, 2.2vw, 1.4rem)",
                    fontStyle: "italic",
                    fontWeight: 300,
                    lineHeight: 1.5,
                    color: DARK_80,
                    marginBottom: "14px",
                  }}
                >
                  &ldquo;{content.epigraph.text}&rdquo;
                </p>
                <cite
                  style={{
                    fontFamily: "var(--font-mono), monospace",
                    fontSize: "10px",
                    letterSpacing: "0.28em",
                    textTransform: "uppercase",
                    color: BLUE,
                    fontStyle: "normal",
                  }}
                >
                  {content.epigraph.attribution}
                </cite>
              </aside>
            )}

            {/* Opening paragraph with drop cap */}
            <div className="reveal article-opening">
              <p
                style={{
                  fontFamily: "var(--font-body), Georgia, serif",
                  fontSize: "clamp(1.22rem, 4.2vw, 1.5rem)",
                  lineHeight: 1.4,
                  color: DARK,
                  marginBottom: "26px",
                  fontWeight: 400,
                }}
              >
                {content.openingParagraph}
              </p>
            </div>

            {/* Intro body */}
            {content.introBody && (
              <div className="reveal section-body" style={{ marginBottom: content.pullQuote ? "0" : "clamp(48px, 7vh, 72px)" }}>
                {content.introBody}
              </div>
            )}

            {/* Optional pull quote */}
            {content.pullQuote && (
              <aside
                className="reveal"
                style={{
                  margin: "clamp(48px, 7vh, 80px) 0",
                  textAlign: "center",
                  position: "relative",
                  padding: "clamp(28px, 4vh, 44px) 0",
                  borderTop: `1px solid ${DARK_20}`,
                  borderBottom: `1px solid ${DARK_20}`,
                }}
              >
                <div
                  aria-hidden
                  style={{
                    position: "absolute",
                    top: "-7px",
                    left: "50%",
                    transform: "translateX(-50%)",
                    width: "14px",
                    height: "14px",
                    backgroundColor: LIGHT,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <MapDot color={RED} size={6} />
                </div>
                <p
                  style={{
                    fontFamily: "var(--font-serif), Georgia, serif",
                    fontSize: "clamp(1.5rem, 3.2vw, 2.1rem)",
                    fontWeight: 300,
                    fontStyle: "italic",
                    lineHeight: 1.3,
                    color: DARK,
                    letterSpacing: "-0.01em",
                    maxWidth: "580px",
                    margin: "0 auto",
                  }}
                >
                  &ldquo;{content.pullQuote.text}&rdquo;
                </p>
                {content.pullQuote.attribution && (
                  <span
                    style={{
                      display: "block",
                      marginTop: "16px",
                      fontFamily: "var(--font-mono), monospace",
                      fontSize: "10px",
                      letterSpacing: "0.24em",
                      textTransform: "uppercase",
                      color: DARK_50,
                    }}
                  >
                    {content.pullQuote.attribution}
                  </span>
                )}
              </aside>
            )}

            {/* Sections */}
            {content.sections.map((section, i) => (
              <div key={i} className="reveal article-section" style={{ marginBottom: "clamp(56px, 8vh, 84px)" }}>
                <header style={{ marginBottom: "32px" }}>
                  {section.marker ? (
                    <span
                      style={{
                        fontFamily: "var(--font-mono), monospace",
                        fontSize: "11px",
                        letterSpacing: "0.3em",
                        color: BLUE,
                        display: "block",
                        marginBottom: "14px",
                      }}
                    >
                      {section.marker}
                    </span>
                  ) : null}
                  <h2
                    style={{
                      fontFamily: "var(--font-serif), Georgia, serif",
                      fontSize: "clamp(1.85rem, 3.6vw, 2.4rem)",
                      fontWeight: 400,
                      lineHeight: 1.12,
                      letterSpacing: "-0.015em",
                      color: DARK,
                    }}
                  >
                    {section.heading}
                  </h2>
                </header>
                <div className="section-body">{section.body}</div>
              </div>
            ))}

            {/* Closing */}
            {content.closing && (
              <div className="reveal">
                <SectionRule />
                <div className="article-closing" style={{ marginTop: "44px", textAlign: "center" }}>
                  {content.closing}
                </div>
              </div>
            )}

            {/* Signoff + Bio */}
            {(content.bio || content.signoff) && (
              <div
                className="reveal"
                style={{
                  marginTop: "clamp(60px, 9vh, 100px)",
                  paddingTop: "clamp(36px, 5vh, 56px)",
                  borderTop: `1px solid ${DARK_20}`,
                }}
              >
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    gap: "14px",
                    marginBottom: "32px",
                  }}
                >
                  <Image src="/thewaylogo.jpeg" alt="The Way" width={44} height={44} style={{ objectFit: "contain", opacity: 0.85 }} />
                  <span
                    style={{
                      fontFamily: "var(--font-mono), monospace",
                      fontSize: "10px",
                      letterSpacing: "0.32em",
                      textTransform: "uppercase",
                      color: DARK_50,
                    }}
                  >
                    — The Way · {publication.dateLabel}
                  </span>
                </div>

                {content.bio && (
                  <p
                    className="article-bio"
                    style={{
                      fontFamily: "var(--font-body), Georgia, serif",
                      fontSize: "0.98rem",
                      lineHeight: 1.75,
                      color: DARK_65,
                      maxWidth: "560px",
                      margin: "0 auto 32px",
                      textAlign: "center",
                    }}
                  >
                    {content.bio}
                  </p>
                )}

                {content.signoff && (
                  <p
                    style={{
                      fontFamily: "var(--font-mono), monospace",
                      fontSize: "11px",
                      letterSpacing: "0.45em",
                      textAlign: "center",
                      color: RED,
                      fontWeight: 600,
                      textTransform: "uppercase",
                      marginTop: "12px",
                    }}
                  >
                    {content.signoff}
                  </p>
                )}
              </div>
            )}
          </div>
        </article>

        {/* ─── ADDENDUM ─── */}
        {content.addendum && (
          <section
            style={{
              position: "relative",
              backgroundColor: DARK_05,
              borderTop: `1px solid ${DARK_20}`,
              padding: "clamp(72px, 11vh, 120px) 0 clamp(72px, 10vh, 110px)",
              overflow: "hidden",
            }}
          >
            <div
              aria-hidden
              className="hidden md:block"
              style={{
                position: "absolute",
                top: "120px",
                left: "8%",
                opacity: 0.12,
                pointerEvents: "none",
              }}
            >
              <CodexMark size={220} color={DARK} />
            </div>

            <div style={{ maxWidth: "780px", margin: "0 auto", ...safe.gutter, position: "relative", zIndex: 1 }}>
              <div className="reveal" style={{ marginBottom: "clamp(48px, 6vh, 70px)" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "20px" }}>
                  <div style={{ width: "28px", height: "1px", backgroundColor: DARK_20 }} />
                  <MapDot color={RED} size={6} pulse />
                  <span
                    style={{
                      fontFamily: "var(--font-mono), monospace",
                      fontSize: "10px",
                      letterSpacing: "0.32em",
                      textTransform: "uppercase",
                      color: DARK_50,
                    }}
                  >
                    {content.addendum.eyebrow}
                  </span>
                </div>
                <h2
                  style={{
                    fontFamily: "var(--font-serif), Georgia, serif",
                    fontSize: "clamp(2.4rem, 5.4vw, 3.6rem)",
                    fontWeight: 300,
                    lineHeight: 1.05,
                    letterSpacing: "-0.02em",
                    color: DARK,
                    marginBottom: "20px",
                  }}
                >
                  {content.addendum.title}
                </h2>
                {content.addendum.intro && (
                  <div
                    className="addendum-intro"
                    style={{
                      fontFamily: "var(--font-body), Georgia, serif",
                      fontSize: "1.05rem",
                      lineHeight: 1.75,
                      color: DARK_65,
                      maxWidth: "600px",
                    }}
                  >
                    {content.addendum.intro}
                  </div>
                )}
              </div>

              {content.addendum.sections.map((section, i) => (
                <div key={i} className="reveal article-section" style={{ marginBottom: "clamp(40px, 6vh, 60px)" }}>
                  <header style={{ marginBottom: "20px" }}>
                    {section.marker ? (
                      <span
                        style={{
                          fontFamily: "var(--font-mono), monospace",
                          fontSize: "10px",
                          letterSpacing: "0.28em",
                          color: BLUE,
                          display: "block",
                          marginBottom: "10px",
                        }}
                      >
                        {section.marker}
                      </span>
                    ) : null}
                    <h3
                      style={{
                        fontFamily: "var(--font-serif), Georgia, serif",
                        fontSize: "clamp(1.4rem, 2.8vw, 1.75rem)",
                        fontWeight: 500,
                        lineHeight: 1.15,
                        letterSpacing: "-0.01em",
                        color: DARK,
                      }}
                    >
                      {section.heading}
                    </h3>
                  </header>
                  <div className="addendum-body">{section.body}</div>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* ─── DARK ENDPAPER — back to research + subscribe ─── */}
        <section
          style={{
            backgroundColor: DARK,
            color: LIGHT,
            padding: "clamp(80px, 12vh, 130px) 0 clamp(60px, 9vh, 100px)",
            position: "relative",
            overflow: "hidden",
          }}
        >
          <div
            aria-hidden
            className="hidden md:block"
            style={{
              position: "absolute",
              top: "50%",
              left: "-160px",
              transform: "translateY(-50%)",
              opacity: 0.08,
              pointerEvents: "none",
            }}
          >
            <CompassRose size={460} color={LIGHT} />
          </div>

          <div style={{ maxWidth: "680px", margin: "0 auto", ...safe.gutter, position: "relative", zIndex: 1, textAlign: "center" }}>
            <div style={{ marginBottom: "28px" }}>
              <SectionRule light />
            </div>

            <h3
              style={{
                fontFamily: "var(--font-serif), Georgia, serif",
                fontSize: "clamp(1.6rem, 3.4vw, 2.3rem)",
                fontWeight: 300,
                lineHeight: 1.2,
                letterSpacing: "-0.015em",
                marginBottom: "40px",
              }}
            >
              Follow <em>The Way.</em>
            </h3>

            <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: "28px", alignItems: "center" }}>
              <Link
                href="/research"
                style={{
                  fontFamily: "var(--font-mono), monospace",
                  fontSize: "11px",
                  letterSpacing: "0.28em",
                  textTransform: "uppercase",
                  color: WHITE_65,
                  fontWeight: 500,
                  textDecoration: "none",
                  borderBottom: `1px solid ${WHITE_35}`,
                  paddingBottom: "4px",
                  transition: "color 0.2s",
                }}
              >
                ← All research
              </Link>
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
                }}
              >
                Request Early Access →
              </Link>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer
          style={{
            backgroundColor: DARK,
            paddingTop: "clamp(16px, 3vh, 24px)",
            paddingBottom: "calc(clamp(16px, 3vh, 28px) + env(safe-area-inset-bottom, 0px))",
            ...safe.gutter,
            borderTop: `1px solid ${WHITE_35}`,
            display: "flex",
            alignItems: "center",
            justifyContent: "flex-start",
            flexWrap: "wrap",
            gap: "16px",
          }}
        >
          <span
            style={{
              fontFamily: "var(--font-mono), monospace",
              fontSize: "10px",
              letterSpacing: "0.22em",
              color: WHITE_65,
              textTransform: "uppercase",
            }}
          >
            The Way · {publication.code} · {publication.dateLabel}
          </span>
          <div style={{ marginLeft: "auto" }}>
            <AscendanceFooterLink theme="onDark" />
          </div>
        </footer>
      </main>

      <ComingSoonModal open={productOpen} onClose={() => setProductOpen(false)} />

      <style jsx>{`
        .article-opening :first-child::first-letter {
          float: left;
          font-family: var(--font-serif), Georgia, serif;
          font-weight: 400;
          font-size: 6rem;
          line-height: 0.82;
          padding-right: 14px;
          padding-top: 6px;
          color: ${DARK};
        }
        @media (max-width: 700px) {
          .article-opening :first-child::first-letter {
            font-size: 3.35rem;
            line-height: 0.9;
            padding-right: 8px;
            padding-top: 4px;
          }
          .section-body :global(p) {
            font-size: 1.05rem;
            line-height: 1.8;
          }
        }
        .section-body :global(p) {
          font-family: var(--font-body), Georgia, serif;
          font-size: 1.12rem;
          line-height: 1.85;
          color: ${DARK_80};
          margin-bottom: 22px;
        }
        .section-body :global(p:last-child) {
          margin-bottom: 0;
        }
        .section-body :global(strong) {
          color: ${DARK};
          font-weight: 600;
        }
        .section-body :global(em) {
          color: ${DARK};
        }
        .section-body :global(a) {
          color: ${BLUE};
          text-decoration: none;
          border-bottom: 1px solid ${BLUE};
          transition: opacity 0.2s;
        }
        .section-body :global(a:hover) {
          opacity: 0.7;
        }
        .addendum-intro :global(p) {
          margin-bottom: 14px;
        }
        .addendum-body :global(p) {
          font-family: var(--font-body), Georgia, serif;
          font-size: 1.02rem;
          line-height: 1.78;
          color: ${DARK_80};
          margin-bottom: 16px;
        }
        .addendum-body :global(p:last-child) {
          margin-bottom: 0;
        }
        .addendum-body :global(strong) {
          color: ${DARK};
          font-weight: 600;
        }
        .addendum-body :global(em) {
          color: ${DARK};
        }
        .addendum-body :global(ul) {
          margin: 0;
          padding: 0;
          list-style: none;
        }
        .article-closing :global(p) {
          font-family: var(--font-serif), Georgia, serif;
          font-size: 1.2rem;
          line-height: 1.65;
          color: ${DARK_80};
          margin-bottom: 14px;
        }
        .article-bio :global(a) {
          color: ${BLUE};
          text-decoration: none;
          border-bottom: 1px solid ${BLUE};
        }
        .article-bio :global(strong) {
          color: ${DARK};
          font-weight: 600;
        }
      `}</style>
    </>
  )
}

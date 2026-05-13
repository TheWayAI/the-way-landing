"use client"

import { useState, useEffect, useRef } from "react"
import Link from "next/link"
import { SiteNav } from "@/components/site-nav"
import { AscendanceFooterLink } from "@/components/ascendance-footer-link"
import { ComingSoonModal } from "@/components/coming-soon-modal"
import { getLatestPublications } from "@/lib/research"
import { safe } from "@/lib/safe-area"

const LIGHT = "#f7f5f0"
const DARK = "#1c1710"
const BLUE = "#4a7cbf"
const RED = "#d63030"
const DARK_65 = "rgba(28,23,16,0.65)"
const DARK_50 = "rgba(28,23,16,0.5)"
const DARK_30 = "rgba(28,23,16,0.3)"
const DARK_20 = "rgba(28,23,16,0.2)"
const DARK_15 = "rgba(28,23,16,0.15)"
const DARK_10 = "rgba(28,23,16,0.1)"
const WHITE_65 = "rgba(247,245,240,0.65)"
const WHITE_35 = "rgba(247,245,240,0.35)"

function CodexMark({ size = 200, color = DARK_15 }: { size?: number; color?: string }) {
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

function MonoLabel({ children, color }: { children: React.ReactNode; color?: string }) {
  return (
    <span
      style={{
        fontFamily: "var(--font-mono), monospace",
        fontSize: "10px",
        letterSpacing: "0.28em",
        textTransform: "uppercase",
        color: color ?? DARK_50,
        display: "block",
      }}
    >
      {children}
    </span>
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

export function ResearchIndex() {
  const [productOpen, setProductOpen] = useState(false)
  const mainRef = useReveal()
  const pubs = getLatestPublications()

  return (
    <>
      <SiteNav current="research" onProductClick={() => setProductOpen(true)} />

      <main ref={mainRef} style={{ backgroundColor: LIGHT, color: DARK, minHeight: "100vh", position: "relative", overflow: "hidden" }}>
        <section
          style={{
            position: "relative",
            padding: "calc(62px + env(safe-area-inset-top, 0px) + clamp(48px, 10vh, 110px)) 0 clamp(44px, 6vh, 80px)",
            overflow: "hidden",
          }}
        >
          <div
            aria-hidden
            className="hidden md:block"
            style={{
              position: "absolute",
              top: "120px",
              right: "8%",
              opacity: 0.18,
              pointerEvents: "none",
            }}
          >
            <CodexMark size={260} color={DARK} />
          </div>

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

          <div style={{ maxWidth: "780px", margin: "0 auto", ...safe.gutter, position: "relative", zIndex: 1, textAlign: "center" }}>
            <div className="reveal" style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "12px", marginBottom: "22px" }}>
              <div style={{ width: "24px", height: "1px", backgroundColor: DARK_20 }} />
              <MapDot color={RED} size={7} pulse />
              <div style={{ width: "24px", height: "1px", backgroundColor: DARK_20 }} />
            </div>

            <div className="reveal">
              <MonoLabel color={DARK_50}>§ III — Research</MonoLabel>
            </div>
            <div className="reveal" style={{ marginTop: "20px", marginBottom: "32px" }}>
              <SectionRule />
            </div>

            <h1
              className="reveal"
              style={{
                fontFamily: "var(--font-serif), Georgia, serif",
                fontSize: "clamp(2.8rem, 6vw, 4.4rem)",
                fontWeight: 300,
                lineHeight: 1.05,
                letterSpacing: "-0.02em",
                color: DARK,
                marginBottom: "26px",
              }}
            >
              Research at<br />
              the <em>frontier.</em>
            </h1>

            <p
              className="reveal"
              style={{
                fontFamily: "var(--font-body), Georgia, serif",
                fontSize: "clamp(1rem, 1.6vw, 1.1rem)",
                fontStyle: "italic",
                lineHeight: 1.75,
                color: DARK_65,
                maxWidth: "560px",
                margin: "0 auto",
              }}
            >
              Publications on artificial intelligence, formation, and the transformation of the Body of Christ. Written as we build.
            </p>
          </div>
        </section>

        <section style={{ padding: "clamp(20px, 4vh, 40px) 0 clamp(56px, 9vh, 120px)" }}>
          <div style={{ maxWidth: "880px", margin: "0 auto", ...safe.gutter }}>
            <div
              className="reveal"
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                paddingBottom: "20px",
                borderBottom: `1px solid ${DARK_20}`,
                marginBottom: "0",
              }}
            >
              <MonoLabel color={DARK_50}>Index · Publications</MonoLabel>
              <span
                style={{
                  fontFamily: "var(--font-mono), monospace",
                  fontSize: "10px",
                  letterSpacing: "0.18em",
                  textTransform: "uppercase",
                  color: DARK_50,
                }}
              >
                {String(pubs.length).padStart(2, "0")} ENTRIES
              </span>
            </div>

            {pubs.map((pub, i) => (
              <Link
                key={pub.slug}
                href={`/research/${pub.slug}`}
                className="research-entry reveal"
                style={{
                  display: "block",
                  textDecoration: "none",
                  color: "inherit",
                  borderBottom: `1px solid ${DARK_10}`,
                  padding: "clamp(28px, 4vh, 44px) 0",
                  transitionDelay: `${i * 0.06}s`,
                  position: "relative",
                }}
              >
                <div
                  className="research-entry-grid"
                  style={{
                    display: "grid",
                    gridTemplateColumns: "auto 1fr auto",
                    gap: "clamp(20px, 4vw, 56px)",
                    alignItems: "start",
                  }}
                >
                  <div style={{ minWidth: "84px" }}>
                    <span
                      style={{
                        fontFamily: "var(--font-mono), monospace",
                        fontSize: "11px",
                        letterSpacing: "0.2em",
                        color: BLUE,
                        display: "block",
                        marginBottom: "8px",
                      }}
                    >
                      {pub.code}
                    </span>
                    <span
                      style={{
                        fontFamily: "var(--font-mono), monospace",
                        fontSize: "9px",
                        letterSpacing: "0.2em",
                        textTransform: "uppercase",
                        color: DARK_50,
                      }}
                    >
                      {pub.dateLabel}
                    </span>
                  </div>

                  <div>
                    <span
                      style={{
                        fontFamily: "var(--font-mono), monospace",
                        fontSize: "9px",
                        letterSpacing: "0.28em",
                        textTransform: "uppercase",
                        color: DARK_50,
                        display: "block",
                        marginBottom: "10px",
                      }}
                    >
                      {pub.category}
                    </span>
                    <h2
                      className="entry-title"
                      style={{
                        fontFamily: "var(--font-serif), Georgia, serif",
                        fontSize: "clamp(1.8rem, 3.4vw, 2.6rem)",
                        fontWeight: 400,
                        lineHeight: 1.1,
                        letterSpacing: "-0.015em",
                        color: DARK,
                        marginBottom: "14px",
                        transition: "color 0.3s ease",
                      }}
                    >
                      {pub.title}
                    </h2>
                    <p
                      style={{
                        fontFamily: "var(--font-body), Georgia, serif",
                        fontSize: "1.02rem",
                        lineHeight: 1.7,
                        color: DARK_65,
                        marginBottom: "18px",
                        maxWidth: "560px",
                      }}
                    >
                      {pub.dek}
                    </p>
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "16px",
                        flexWrap: "wrap",
                        fontFamily: "var(--font-mono), monospace",
                        fontSize: "10px",
                        letterSpacing: "0.18em",
                        textTransform: "uppercase",
                        color: DARK_50,
                      }}
                    >
                      <span>{pub.authors.join(" · ")}</span>
                      <span style={{ width: "3px", height: "3px", borderRadius: "50%", backgroundColor: DARK_30 }} />
                      <span>{pub.readMinutes} min read</span>
                    </div>
                  </div>

                  <div className="entry-arrow hidden md:flex" style={{ alignItems: "center", gap: "8px", paddingTop: "8px" }}>
                    <span
                      style={{
                        fontFamily: "var(--font-mono), monospace",
                        fontSize: "10px",
                        letterSpacing: "0.28em",
                        textTransform: "uppercase",
                        color: DARK,
                        fontWeight: 600,
                        whiteSpace: "nowrap",
                      }}
                    >
                      Read
                    </span>
                    <span
                      className="entry-arrow-glyph"
                      style={{
                        fontFamily: "var(--font-mono), monospace",
                        fontSize: "16px",
                        color: DARK,
                        transition: "transform 0.3s ease",
                        display: "inline-block",
                      }}
                    >
                      →
                    </span>
                  </div>
                </div>
              </Link>
            ))}

            <div
              className="reveal"
              style={{
                padding: "clamp(28px, 4vh, 44px) 0",
                display: "grid",
                gridTemplateColumns: "auto 1fr",
                gap: "clamp(20px, 4vw, 56px)",
                alignItems: "start",
                opacity: 0.55,
              }}
            >
              <div style={{ minWidth: "84px" }}>
                <span
                  style={{
                    fontFamily: "var(--font-mono), monospace",
                    fontSize: "11px",
                    letterSpacing: "0.2em",
                    color: DARK_50,
                    display: "block",
                    marginBottom: "8px",
                  }}
                >
                  ALN-002
                </span>
                <span
                  style={{
                    fontFamily: "var(--font-mono), monospace",
                    fontSize: "9px",
                    letterSpacing: "0.2em",
                    textTransform: "uppercase",
                    color: DARK_50,
                  }}
                >
                  Forthcoming
                </span>
              </div>
              <div>
                <span
                  style={{
                    fontFamily: "var(--font-mono), monospace",
                    fontSize: "9px",
                    letterSpacing: "0.28em",
                    textTransform: "uppercase",
                    color: DARK_50,
                    display: "block",
                    marginBottom: "10px",
                  }}
                >
                  In Development
                </span>
              </div>
            </div>
          </div>
        </section>

        <section
          style={{
            backgroundColor: DARK,
            color: LIGHT,
            padding: "clamp(64px, 10vh, 130px) 0",
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
              right: "-80px",
              transform: "translateY(-50%)",
              opacity: 0.08,
              pointerEvents: "none",
            }}
          >
            <CodexMark size={420} color={LIGHT} />
          </div>

          <div style={{ maxWidth: "640px", margin: "0 auto", ...safe.gutter, position: "relative", zIndex: 1, textAlign: "center" }}>
            <div className="reveal" style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "12px", marginBottom: "20px" }}>
              <div style={{ width: "24px", height: "1px", backgroundColor: WHITE_35 }} />
              <MapDot color={RED} size={7} pulse />
              <div style={{ width: "24px", height: "1px", backgroundColor: WHITE_35 }} />
            </div>

            <div className="reveal">
              <MonoLabel color={WHITE_65}>Subscribe</MonoLabel>
            </div>

            <h2
              className="reveal"
              style={{
                fontFamily: "var(--font-serif), Georgia, serif",
                fontSize: "clamp(2rem, 4vw, 2.8rem)",
                fontWeight: 300,
                lineHeight: 1.15,
                letterSpacing: "-0.015em",
                color: LIGHT,
                margin: "22px 0 18px",
              }}
            >
              Receive new research <em>the morning it publishes.</em>
            </h2>

            <p
              className="reveal"
              style={{
                fontFamily: "var(--font-body), Georgia, serif",
                fontSize: "1.02rem",
                lineHeight: 1.75,
                color: WHITE_65,
                maxWidth: "440px",
                margin: "0 auto 36px",
              }}
            >
              No marketing. No newsletter cadence. Only the research, as it is finished.
            </p>

            <Link
              className="reveal"
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
            >
              Request Early Access →
            </Link>
          </div>
        </section>

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
            The Way · Research · 2026
          </span>
          <div style={{ marginLeft: "auto" }}>
            <AscendanceFooterLink theme="onDark" />
          </div>
        </footer>
      </main>

      <ComingSoonModal open={productOpen} onClose={() => setProductOpen(false)} />

      <style jsx>{`
        .research-entry {
          transition: background-color 0.3s ease;
        }
        .research-entry::before {
          content: "";
          position: absolute;
          left: -16px;
          top: 0;
          bottom: 0;
          width: 2px;
          background-color: transparent;
          transition: background-color 0.3s ease;
        }
        .research-entry:hover {
          background-color: rgba(28,23,16,0.025);
        }
        .research-entry:hover::before {
          background-color: ${BLUE};
        }
        .research-entry:hover .entry-title {
          color: ${BLUE};
        }
        .research-entry:hover .entry-arrow-glyph {
          transform: translateX(6px);
        }
        @media (hover: none) and (pointer: coarse) {
          .research-entry:active {
            background-color: rgba(28, 23, 16, 0.04);
          }
        }
      `}</style>
    </>
  )
}

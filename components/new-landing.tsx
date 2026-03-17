"use client"

import { useState, useEffect, useRef } from "react"
import { Menu, X } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

const INK = "#1a1510"
const INK_60 = "rgba(26,21,16,0.6)"
const INK_40 = "rgba(26,21,16,0.4)"
const INK_15 = "rgba(26,21,16,0.15)"
const INK_08 = "rgba(26,21,16,0.08)"
const SEPIA = "#7a6a52"
const PARCHMENT = "#f0e8d4"
const PARCHMENT_DARK = "#e8ddc4"

function Nav() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 40)
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
        backgroundColor: scrolled ? "rgba(240,232,212,0.97)" : "transparent",
        borderBottom: scrolled ? `1px solid ${INK_08}` : "1px solid transparent",
        backdropFilter: scrolled ? "blur(8px)" : "none",
        transition: "background-color 0.4s ease, border-color 0.4s ease",
      }}
    >
      <div style={{ maxWidth: "1000px", margin: "0 auto", padding: "0 24px" }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", height: "60px" }}>
          <Link href="/" style={{ display: "flex", alignItems: "center", gap: "12px", textDecoration: "none" }}>
            <div style={{ width: "28px", height: "28px", position: "relative" }}>
              <Image
                src="/thewaylogo.jpeg"
                alt="The Way"
                width={28}
                height={28}
                style={{ objectFit: "contain" }}
              />
            </div>
            <span
              style={{
                fontFamily: "var(--font-mono), monospace",
                fontSize: "11px",
                letterSpacing: "0.22em",
                textTransform: "uppercase",
                color: INK,
                fontWeight: 500,
              }}
            >
              The Way
            </span>
          </Link>

          <a
            href="https://theway.masterymade.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:inline-block"
            style={{
              fontFamily: "var(--font-mono), monospace",
              fontSize: "10px",
              letterSpacing: "0.2em",
              textTransform: "uppercase",
              color: INK_60,
              textDecoration: "none",
              borderBottom: `1px solid ${INK_15}`,
              paddingBottom: "2px",
            }}
          >
            Request Access
          </a>

          <button
            className="md:hidden"
            onClick={() => setIsOpen(!isOpen)}
            style={{ color: INK, background: "none", border: "none", cursor: "pointer" }}
          >
            {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>

        {isOpen && (
          <div style={{ paddingBottom: "20px", paddingTop: "16px", borderTop: `1px solid ${INK_08}` }}>
            <a
              href="https://theway.masterymade.com/"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: "block",
                textAlign: "center",
                fontFamily: "var(--font-mono), monospace",
                fontSize: "10px",
                letterSpacing: "0.2em",
                textTransform: "uppercase",
                color: INK,
                textDecoration: "none",
                padding: "12px 0",
              }}
            >
              Request Access
            </a>
          </div>
        )}
      </div>
    </nav>
  )
}

function useReveal() {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!ref.current) return
    const els = ref.current.querySelectorAll(".reveal")
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) e.target.classList.add("visible")
        })
      },
      { threshold: 0.12 }
    )
    els.forEach((el) => obs.observe(el))
    return () => obs.disconnect()
  }, [])

  return ref
}

function MonoLabel({ children, color = SEPIA }: { children: React.ReactNode; color?: string }) {
  return (
    <span
      style={{
        fontFamily: "var(--font-mono), monospace",
        fontSize: "9px",
        letterSpacing: "0.3em",
        textTransform: "uppercase",
        color,
        display: "block",
      }}
    >
      {children}
    </span>
  )
}

function SectionDivider() {
  return (
    <div style={{ width: "40px", height: "1px", backgroundColor: INK_15, margin: "0 auto" }} />
  )
}

export function NewLanding() {
  const mainRef = useReveal()

  return (
    <main ref={mainRef} className="parchment" style={{ minHeight: "100vh", overflow: "hidden" }}>
      <Nav />

      {/* ══════ HERO ══════ */}
      <section
        className="parchment"
        style={{
          minHeight: "100dvh",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          position: "relative",
          paddingTop: "80px",
          paddingBottom: "48px",
        }}
      >
        {/* Faint horizontal rule lines — manuscript paper */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage: `repeating-linear-gradient(0deg, transparent, transparent 47px, ${INK_08} 47px, ${INK_08} 48px)`,
            pointerEvents: "none",
          }}
        />

        <div
          style={{
            position: "relative",
            zIndex: 1,
            maxWidth: "640px",
            margin: "0 auto",
            padding: "0 24px",
            textAlign: "center",
          }}
        >
          <div style={{ marginBottom: "48px" }}>
            <Image
              src="/thewaylogo.jpeg"
              alt="The Way"
              width={64}
              height={64}
              style={{ objectFit: "contain", margin: "0 auto", opacity: 0.85 }}
              priority
            />
          </div>

          <div style={{ marginBottom: "32px" }}>
            <MonoLabel>Frontier Technology for the Body of Christ</MonoLabel>
          </div>

          <h1
            style={{
              fontFamily: "var(--font-serif), Georgia, serif",
              fontSize: "clamp(2.6rem, 6vw, 4.2rem)",
              fontWeight: 300,
              lineHeight: 1.12,
              color: INK,
              letterSpacing: "-0.01em",
              marginBottom: "40px",
            }}
          >
            You are not who<br />
            the world{" "}
            <em>made you.</em>
          </h1>

          <div style={{ marginBottom: "52px" }}>
            <blockquote>
              <p
                style={{
                  fontFamily: "var(--font-body), Georgia, serif",
                  fontSize: "1.05rem",
                  fontStyle: "italic",
                  color: INK_60,
                  lineHeight: 1.75,
                  maxWidth: "460px",
                  margin: "0 auto 12px",
                }}
              >
                &ldquo;If anyone is in Christ, he is a new creation. The old has passed away; behold, the new has come.&rdquo;
              </p>
              <cite
                style={{
                  fontFamily: "var(--font-mono), monospace",
                  fontSize: "9px",
                  letterSpacing: "0.28em",
                  textTransform: "uppercase",
                  color: INK_40,
                  fontStyle: "normal",
                }}
              >
                2 Corinthians 5:17
              </cite>
            </blockquote>
          </div>

          <a
            href="https://theway.masterymade.com/"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              fontFamily: "var(--font-mono), monospace",
              fontSize: "10px",
              letterSpacing: "0.25em",
              textTransform: "uppercase",
              color: INK,
              textDecoration: "none",
              borderBottom: `1px solid ${INK_40}`,
              paddingBottom: "3px",
              display: "inline-block",
            }}
          >
            Request Early Access
          </a>
        </div>

        <div
          style={{
            position: "absolute",
            bottom: 0,
            left: 0,
            right: 0,
            height: "1px",
            backgroundColor: INK_08,
          }}
        />
      </section>

      {/* ══════ I — THE TRANSFORMATION ══════ */}
      <section
        className="parchment-dark"
        style={{ padding: "96px 0 112px" }}
      >
        <div style={{ maxWidth: "680px", margin: "0 auto", padding: "0 24px" }}>
          <div className="reveal" style={{ textAlign: "center", marginBottom: "64px" }}>
            <MonoLabel>§ I</MonoLabel>
            <div style={{ marginTop: "24px", marginBottom: "24px" }}>
              <SectionDivider />
            </div>
            <h2
              style={{
                fontFamily: "var(--font-serif), Georgia, serif",
                fontSize: "clamp(1.7rem, 4vw, 2.5rem)",
                fontWeight: 300,
                color: INK,
                lineHeight: 1.25,
                letterSpacing: "-0.01em",
              }}
            >
              Every major information technology<br />
              has{" "}
              <em>transformed the Church.</em>
            </h2>
          </div>

          {/* Timeline corridor */}
          <div style={{ position: "relative", paddingLeft: "28px", borderLeft: `1px solid ${INK_15}` }}>
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
              },
            ].map((item, i) => (
              <div
                key={i}
                className="reveal"
                style={{
                  marginBottom: i < 3 ? "52px" : "0",
                  position: "relative",
                  transitionDelay: `${i * 0.1}s`,
                }}
              >
                <div
                  style={{
                    position: "absolute",
                    left: "-35px",
                    top: "5px",
                    width: "10px",
                    height: "10px",
                    border: `1px solid ${SEPIA}`,
                    backgroundColor: PARCHMENT_DARK,
                    transform: "rotate(45deg)",
                  }}
                />
                <div style={{ marginBottom: "6px", display: "flex", alignItems: "baseline", gap: "16px", flexWrap: "wrap" }}>
                  <MonoLabel>{item.label}</MonoLabel>
                  <span
                    style={{
                      fontFamily: "var(--font-mono), monospace",
                      fontSize: "8px",
                      color: INK_40,
                      letterSpacing: "0.15em",
                    }}
                  >
                    {item.code}
                  </span>
                </div>
                <p
                  style={{
                    fontFamily: "var(--font-body), Georgia, serif",
                    fontSize: "1.05rem",
                    color: INK,
                    lineHeight: 1.75,
                  }}
                >
                  <strong style={{ fontWeight: 500 }}>{item.title}</strong>{" "}
                  <span style={{ color: INK_60 }}>{item.body}</span>
                </p>
              </div>
            ))}
          </div>

          <div className="reveal" style={{ marginTop: "56px", paddingTop: "40px", borderTop: `1px solid ${INK_08}` }}>
            <p
              style={{
                fontFamily: "var(--font-body), Georgia, serif",
                fontSize: "1.05rem",
                color: INK_60,
                lineHeight: 1.85,
                textAlign: "center",
              }}
            >
              Each transformation reshaped how people encountered God, understood Scripture, and formed as disciples. Each one was built by someone. AI will reshape the Body of Christ whether we participate or not. The Way exists to ensure that what gets built serves the Kingdom rather than replacing it.
            </p>
          </div>
        </div>
      </section>

      {/* ══════ II — THE CRISIS ══════ */}
      <section
        className="parchment"
        style={{ padding: "96px 0 112px" }}
      >
        <div style={{ maxWidth: "640px", margin: "0 auto", padding: "0 24px" }}>
          <div className="reveal" style={{ textAlign: "center", marginBottom: "56px" }}>
            <MonoLabel>§ II</MonoLabel>
            <div style={{ marginTop: "24px", marginBottom: "24px" }}>
              <SectionDivider />
            </div>
            <h2
              style={{
                fontFamily: "var(--font-serif), Georgia, serif",
                fontSize: "clamp(1.7rem, 4vw, 2.5rem)",
                fontWeight: 300,
                color: INK,
                lineHeight: 1.25,
                letterSpacing: "-0.01em",
              }}
            >
              As the Church scaled from local to global,{" "}
              <em>discipleship suffered.</em>
            </h2>
          </div>

          <div className="reveal">
            <p
              style={{
                fontFamily: "var(--font-body), Georgia, serif",
                fontSize: "1.05rem",
                color: INK_60,
                lineHeight: 1.85,
                marginBottom: "24px",
              }}
            >
              We learned to fill rooms. We built platforms that reach millions. We got remarkably good at gathering. But gathering is not the same thing as forming. A stadium full of people who heard a message on Sunday and returned to the same identity patterns on Monday is not a discipleship failure of will. It is a failure of infrastructure.
            </p>
            <p
              style={{
                fontFamily: "var(--font-body), Georgia, serif",
                fontSize: "1.05rem",
                color: INK_60,
                lineHeight: 1.85,
                marginBottom: "24px",
              }}
            >
              The early Church did not scale through content. It scaled through transformation. Through walking with people so closely that their identity was rebuilt from the ground up in Christ. Through the kind of sustained, intimate formation that the modern Church has largely outsourced to a weekly service and a devotional app.
            </p>
            <p
              style={{
                fontFamily: "var(--font-body), Georgia, serif",
                fontSize: "1.05rem",
                color: INK_60,
                lineHeight: 1.85,
              }}
            >
              What transforms a human heart? The Word of God. The Holy Spirit. Real, lived community operating like the original Church did in Acts. We are here to replace none of those things. We are here to facilitate their reemergence as the Body of Christ transforms again.
            </p>
          </div>

          <div
            className="reveal"
            style={{
              margin: "52px 0 0",
              paddingLeft: "24px",
              borderLeft: `2px solid ${INK_15}`,
            }}
          >
            <p
              style={{
                fontFamily: "var(--font-serif), Georgia, serif",
                fontSize: "1.25rem",
                fontStyle: "italic",
                color: INK,
                lineHeight: 1.7,
                marginBottom: "12px",
              }}
            >
              &ldquo;Do not be conformed to this world, but be transformed by the renewing of your mind.&rdquo;
            </p>
            <MonoLabel>Romans 12:2</MonoLabel>
          </div>
        </div>
      </section>

      {/* ══════ III — THE FOUNDATION ══════ */}
      <section
        className="parchment-dark"
        style={{ padding: "96px 0 112px" }}
      >
        <div style={{ maxWidth: "640px", margin: "0 auto", padding: "0 24px" }}>
          <div className="reveal" style={{ textAlign: "center", marginBottom: "56px" }}>
            <MonoLabel>§ III</MonoLabel>
            <div style={{ marginTop: "24px", marginBottom: "24px" }}>
              <SectionDivider />
            </div>
            <h2
              style={{
                fontFamily: "var(--font-serif), Georgia, serif",
                fontSize: "clamp(1.7rem, 4vw, 2.5rem)",
                fontWeight: 300,
                color: INK,
                lineHeight: 1.25,
                letterSpacing: "-0.01em",
              }}
            >
              Before Jesus did anything,<br />
              the Father declared{" "}
              <em>who he was.</em>
            </h2>
          </div>

          <div
            className="reveal"
            style={{
              textAlign: "center",
              marginBottom: "48px",
              padding: "32px",
              border: `1px solid ${INK_08}`,
              backgroundColor: "rgba(240,232,212,0.4)",
            }}
          >
            <p
              style={{
                fontFamily: "var(--font-serif), Georgia, serif",
                fontSize: "1.15rem",
                fontStyle: "italic",
                color: INK,
                lineHeight: 1.7,
                marginBottom: "12px",
              }}
            >
              &ldquo;You are my Son, whom I love; with you I am well pleased.&rdquo;
            </p>
            <MonoLabel>Matthew 3:17</MonoLabel>
          </div>

          <div className="reveal" style={{ marginBottom: "56px" }}>
            <p
              style={{
                fontFamily: "var(--font-body), Georgia, serif",
                fontSize: "1.05rem",
                color: INK_60,
                lineHeight: 1.85,
                marginBottom: "20px",
              }}
            >
              Before the ministry. Before the miracles. Before the cross. Identity came first. Everything Jesus did flowed from a settled understanding of who he was in relationship to the Father.
            </p>
            <p
              style={{
                fontFamily: "var(--font-body), Georgia, serif",
                fontSize: "1.05rem",
                color: INK_60,
                lineHeight: 1.85,
              }}
            >
              The enemy understands this. Satan&apos;s first move is always against identity. Control who someone believes they are and you control everything that follows. The Way is built on the same sequence the Father used: identity before activity. Formation before information. Becoming before doing.
            </p>
          </div>

          {/* Manifesto — carved */}
          <div style={{ borderTop: `1px solid ${INK_15}` }}>
            {[
              {
                n: "01",
                title: "Identity before activity.",
                body: "Know who you are in Christ before anything you do. The old self was built on performance. The new self is built on sonship.",
              },
              {
                n: "02",
                title: "Formation over information.",
                body: "Deeper than content consumption. The slow, daily work of becoming someone new in Christ.",
              },
              {
                n: "03",
                title: "Renewal as practice.",
                body: "Romans 12:2 is not a one-time declaration. It is a discipline. A daily confrontation with the patterns the world wrote into you.",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="reveal"
                style={{
                  padding: "36px 0",
                  borderBottom: `1px solid ${INK_08}`,
                  display: "grid",
                  gridTemplateColumns: "40px 1fr",
                  gap: "24px",
                  alignItems: "start",
                  transitionDelay: `${i * 0.08}s`,
                }}
              >
                <span
                  style={{
                    fontFamily: "var(--font-mono), monospace",
                    fontSize: "9px",
                    color: SEPIA,
                    letterSpacing: "0.15em",
                    paddingTop: "4px",
                  }}
                >
                  {item.n}
                </span>
                <div>
                  <p
                    style={{
                      fontFamily: "var(--font-serif), Georgia, serif",
                      fontSize: "1.2rem",
                      fontWeight: 500,
                      color: INK,
                      marginBottom: "10px",
                      lineHeight: 1.3,
                    }}
                  >
                    {item.title}
                  </p>
                  <p
                    style={{
                      fontFamily: "var(--font-body), Georgia, serif",
                      fontSize: "0.975rem",
                      color: INK_60,
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

      {/* ══════ IV — WAYFINDER ══════ */}
      <section
        className="parchment"
        style={{ padding: "96px 0 112px", position: "relative", overflow: "hidden" }}
      >
        {/* The one animated element — a slow scan line */}
        <div
          style={{
            position: "absolute",
            left: 0,
            right: 0,
            height: "1px",
            backgroundColor: INK_08,
            pointerEvents: "none",
          }}
          className="scan-line"
        />

        <div style={{ maxWidth: "640px", margin: "0 auto", padding: "0 24px", position: "relative", zIndex: 1 }}>
          <div className="reveal" style={{ textAlign: "center", marginBottom: "64px" }}>
            {/* The single pulsing dot — this is alive */}
            <div style={{ display: "flex", justifyContent: "center", marginBottom: "24px" }}>
              <span
                className="pulse-dot"
                style={{
                  display: "inline-block",
                  width: "6px",
                  height: "6px",
                  borderRadius: "50%",
                  backgroundColor: SEPIA,
                }}
              />
            </div>
            <MonoLabel>Wayfinder</MonoLabel>
            <div style={{ marginTop: "24px", marginBottom: "24px" }}>
              <SectionDivider />
            </div>
            <h2
              style={{
                fontFamily: "var(--font-serif), Georgia, serif",
                fontSize: "clamp(1.7rem, 4vw, 2.5rem)",
                fontWeight: 300,
                color: INK,
                lineHeight: 1.25,
                letterSpacing: "-0.01em",
                marginBottom: "32px",
              }}
            >
              An AI trained on the{" "}
              <em>tradition,</em><br />
              built for{" "}
              <em>formation.</em>
            </h2>
            <p
              style={{
                fontFamily: "var(--font-body), Georgia, serif",
                fontSize: "1.05rem",
                color: INK_60,
                lineHeight: 1.85,
                maxWidth: "520px",
                margin: "0 auto",
              }}
            >
              Most AI gives you answers. Wayfinder gives you formation. It holds the thread of your growth over time, pressing into who you are and who you are becoming in Christ. It does not search the internet. It searches the tradition.
            </p>
          </div>

          {/* Capabilities with 3-letter designations */}
          <div style={{ borderTop: `1px solid ${INK_15}` }}>
            {[
              {
                code: "SCR",
                label: "Scripture & Doctrine",
                body: "Walk through a passage with the rigor of a theologian and the patience of a pastor. Original language, historical context, what the fathers said, and what it means for you today.",
              },
              {
                code: "APO",
                label: "Apologetics",
                body: "The world will challenge what you believe. Prepare to answer with clarity. The Resurrection. The problem of evil. The arguments you actually encounter, grounded in logic and the tradition.",
              },
              {
                code: "WAR",
                label: "Spiritual Warfare",
                body: "The enemy's tactics are ancient and patterned. Fear, accusation, division, confusion. Name what is happening, root it in Scripture, pray with authority. Awareness is the beginning of freedom.",
              },
              {
                code: "PRA",
                label: "Prayer & Renewal",
                body: "A guide into deeper prayer. Intercessory depth, liturgical rhythm, the practiced silence the desert fathers understood. A daily rhythm that displaces the noise rather than competing with it.",
              },
              {
                code: "IDN",
                label: "Identity Reflection",
                body: "The old self does not yield to information. It yields to repeated encounter with truth. Daily confrontation with your identity in Christ that slowly rewrites the story you have been living from.",
              },
              {
                code: "FAT",
                label: "The Church Fathers",
                body: "Origen on spiritual warfare. Augustine on sin. Athanasius on the Incarnation. Chrysostom on radical living. Their writings are not relics. They are weapons. Made accessible and actionable.",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="reveal"
                style={{
                  padding: "36px 0",
                  borderBottom: `1px solid ${INK_08}`,
                  display: "grid",
                  gridTemplateColumns: "44px 1fr",
                  gap: "24px",
                  alignItems: "start",
                  transitionDelay: `${(i % 3) * 0.08}s`,
                }}
              >
                <span
                  style={{
                    fontFamily: "var(--font-mono), monospace",
                    fontSize: "8px",
                    letterSpacing: "0.15em",
                    color: SEPIA,
                    paddingTop: "5px",
                    opacity: 0.75,
                  }}
                >
                  {item.code}
                </span>
                <div>
                  <h3
                    style={{
                      fontFamily: "var(--font-serif), Georgia, serif",
                      fontSize: "1.2rem",
                      fontWeight: 500,
                      color: INK,
                      marginBottom: "10px",
                      lineHeight: 1.3,
                    }}
                  >
                    {item.label}
                  </h3>
                  <p
                    style={{
                      fontFamily: "var(--font-body), Georgia, serif",
                      fontSize: "0.975rem",
                      color: INK_60,
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

      {/* ══════ V — THE VISION ══════ */}
      <section
        className="parchment-dark"
        style={{ padding: "96px 0 112px" }}
      >
        <div style={{ maxWidth: "640px", margin: "0 auto", padding: "0 24px" }}>
          <div className="reveal" style={{ textAlign: "center", marginBottom: "56px" }}>
            <MonoLabel>§ V</MonoLabel>
            <div style={{ marginTop: "24px", marginBottom: "24px" }}>
              <SectionDivider />
            </div>
            <h2
              style={{
                fontFamily: "var(--font-serif), Georgia, serif",
                fontSize: "clamp(1.7rem, 4vw, 2.5rem)",
                fontWeight: 300,
                color: INK,
                lineHeight: 1.25,
                letterSpacing: "-0.01em",
              }}
            >
              The Body of Christ needs<br />
              more than content.<br />
              It needs{" "}
              <em>infrastructure.</em>
            </h2>
          </div>

          <div className="reveal">
            <p
              style={{
                fontFamily: "var(--font-body), Georgia, serif",
                fontSize: "1.05rem",
                color: INK_60,
                lineHeight: 1.85,
                marginBottom: "24px",
              }}
            >
              The early followers of The Way did not have institutions. They had identity, community, and the Spirit. They also turned the world upside down. What they lacked was scale. What we have lacked is depth. The question now is whether we build the technology that serves both.
            </p>
            <p
              style={{
                fontFamily: "var(--font-body), Georgia, serif",
                fontSize: "1.05rem",
                color: INK_60,
                lineHeight: 1.85,
                marginBottom: "24px",
              }}
            >
              The Way is the identity layer. The place where someone discovers who they are in Christ, builds the habits of a new self, and carries that self into everything. Their work. Their community. The way they steward what God has placed in their hands.
            </p>
            <p
              style={{
                fontFamily: "var(--font-body), Georgia, serif",
                fontSize: "1.05rem",
                color: INK_60,
                lineHeight: 1.85,
              }}
            >
              This is the foundation. What gets built on top of it is a question for the Spirit to answer over time. But if the Church is going to anchor something real in a world that is fragmenting, it needs people who actually know who they are.
            </p>
          </div>
        </div>
      </section>

      {/* ══════ FINAL CTA ══════ */}
      <section
        className="parchment"
        style={{ padding: "112px 0 128px" }}
      >
        <div style={{ maxWidth: "480px", margin: "0 auto", padding: "0 24px", textAlign: "center" }}>
          <div className="reveal">
            <h2
              style={{
                fontFamily: "var(--font-serif), Georgia, serif",
                fontSize: "clamp(2.2rem, 5vw, 3.2rem)",
                fontWeight: 300,
                color: INK,
                lineHeight: 1.15,
                marginBottom: "24px",
                letterSpacing: "-0.01em",
              }}
            >
              <em>The new has come.</em><br />
              Begin the work.
            </h2>

            <p
              style={{
                fontFamily: "var(--font-body), Georgia, serif",
                fontSize: "0.975rem",
                color: INK_60,
                lineHeight: 1.75,
                marginBottom: "48px",
              }}
            >
              We are building with a small group of believers first.
            </p>

            <form
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "12px",
                maxWidth: "380px",
                margin: "0 auto",
              }}
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
                  backgroundColor: "rgba(26,21,16,0.04)",
                  border: `1px solid ${INK_15}`,
                  padding: "14px 16px",
                  fontSize: "0.925rem",
                  fontFamily: "var(--font-body), Georgia, serif",
                  color: INK,
                  outline: "none",
                  boxSizing: "border-box",
                }}
              />
              <button
                type="submit"
                style={{
                  width: "100%",
                  backgroundColor: INK,
                  color: PARCHMENT,
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
        className="parchment-dark"
        style={{
          padding: "28px 24px",
          borderTop: `1px solid ${INK_08}`,
          textAlign: "center",
        }}
      >
        <span
          style={{
            fontFamily: "var(--font-mono), monospace",
            fontSize: "9px",
            letterSpacing: "0.25em",
            color: INK_40,
            textTransform: "uppercase",
          }}
        >
          The Way · 2026
        </span>
      </footer>
    </main>
  )
}

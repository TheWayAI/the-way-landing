"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { Menu, X } from "lucide-react"
import { safe } from "@/lib/safe-area"

const DARK = "#1c1710"
const DARK_50 = "rgba(28,23,16,0.5)"
const DARK_10 = "rgba(28,23,16,0.1)"

type NavLink = { label: string; href: string }
type NavAction = { label: string; onClick: () => void }
type NavItem = NavLink | NavAction

const VISION: NavLink = { label: "Vision", href: "/vision" }
const RESEARCH: NavLink = { label: "Research", href: "/research" }

function isLink(item: NavItem): item is NavLink {
  return "href" in item
}

export function SiteNav({
  current,
  onProductClick,
}: {
  current?: "vision" | "product" | "research"
  onProductClick: () => void
}) {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 24)
    handler()
    window.addEventListener("scroll", handler)
    return () => window.removeEventListener("scroll", handler)
  }, [])

  const items: { key: "vision" | "product" | "research"; item: NavItem }[] = [
    { key: "vision", item: VISION },
    { key: "product", item: { label: "Product", onClick: onProductClick } },
    { key: "research", item: RESEARCH },
  ]

  return (
    <nav
      style={{
        position: "fixed",
        top: 0,
        width: "100%",
        zIndex: 50,
        paddingTop: safe.navTop,
        backgroundColor: scrolled ? "rgba(247,245,240,0.96)" : "transparent",
        borderBottom: scrolled ? `1px solid ${DARK_10}` : "1px solid transparent",
        backdropFilter: scrolled ? "blur(10px)" : "none",
        transition: "all 0.35s ease",
      }}
    >
      <div style={{ maxWidth: "1180px", margin: "0 auto", ...safe.gutterTight }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", height: "62px" }}>
          <Link href="/" style={{ display: "flex", alignItems: "center", gap: "10px", textDecoration: "none" }}>
            <Image src="/thewaylogo.jpeg" alt="The Way" width={30} height={30} style={{ objectFit: "contain" }} />
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

          <div className="hidden md:flex" style={{ alignItems: "center", gap: "26px" }}>
            {items.map(({ key, item }) => {
              const isCurrent = current === key
              const baseStyle = {
                fontFamily: "var(--font-mono), monospace",
                fontSize: "10px",
                letterSpacing: "0.22em",
                textTransform: "uppercase" as const,
                color: isCurrent ? DARK : DARK_50,
                textDecoration: "none",
                paddingBottom: "3px",
                transition: "color 0.2s, border-color 0.2s",
                background: "none",
                border: "none",
                borderBottomWidth: "1px",
                borderBottomStyle: "solid" as const,
                borderBottomColor: isCurrent ? DARK : "transparent",
                cursor: "pointer",
              }
              if (isLink(item)) {
                return (
                  <Link
                    key={key}
                    href={item.href}
                    style={baseStyle}
                    onMouseEnter={e => {
                      if (!isCurrent) (e.target as HTMLElement).style.color = DARK
                    }}
                    onMouseLeave={e => {
                      if (!isCurrent) (e.target as HTMLElement).style.color = DARK_50
                    }}
                  >
                    {item.label}
                  </Link>
                )
              }
              return (
                <button
                  key={key}
                  type="button"
                  onClick={item.onClick}
                  style={baseStyle}
                  onMouseEnter={e => {
                    if (!isCurrent) (e.currentTarget as HTMLElement).style.color = DARK
                  }}
                  onMouseLeave={e => {
                    if (!isCurrent) (e.currentTarget as HTMLElement).style.color = DARK_50
                  }}
                >
                  {item.label}
                </button>
              )
            })}
          </div>

          <button
            className="md:hidden"
            onClick={() => setOpen(o => !o)}
            aria-label="Menu"
            type="button"
            style={{
              color: DARK,
              background: "none",
              border: "none",
              cursor: "pointer",
              minWidth: 44,
              minHeight: 44,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              marginRight: -6,
            }}
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>

        {open && (
          <div
            style={{
              padding: "10px 0 calc(18px + env(safe-area-inset-bottom, 0px))",
              borderTop: `1px solid ${DARK_10}`,
              display: "flex",
              flexDirection: "column",
              gap: "2px",
            }}
          >
            {items.map(({ key, item }) => {
              const isCurrent = current === key
              const baseStyle = {
                display: "block",
                textAlign: "center" as const,
                fontFamily: "var(--font-mono), monospace",
                fontSize: "11px",
                letterSpacing: "0.22em",
                textTransform: "uppercase" as const,
                color: isCurrent ? DARK : DARK_50,
                textDecoration: "none",
                padding: "14px 12px",
                minHeight: 48,
                background: "none",
                border: "none",
                width: "100%",
                cursor: "pointer",
              }
              if (isLink(item)) {
                return (
                  <Link key={key} href={item.href} style={baseStyle} onClick={() => setOpen(false)}>
                    {item.label}
                  </Link>
                )
              }
              return (
                <button
                  key={key}
                  type="button"
                  onClick={() => {
                    setOpen(false)
                    item.onClick()
                  }}
                  style={baseStyle}
                >
                  {item.label}
                </button>
              )
            })}
          </div>
        )}
      </div>
    </nav>
  )
}

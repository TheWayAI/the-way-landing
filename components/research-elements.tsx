import type { ReactNode } from "react"
import Image from "next/image"

const DARK = "#1c1710"
const BLUE = "#4a7cbf"
const RED = "#d63030"
const DARK_80 = "rgba(28,23,16,0.8)"
const DARK_65 = "rgba(28,23,16,0.65)"
const DARK_50 = "rgba(28,23,16,0.5)"
const DARK_30 = "rgba(28,23,16,0.3)"
const DARK_20 = "rgba(28,23,16,0.2)"
const DARK_10 = "rgba(28,23,16,0.1)"
const DARK_05 = "rgba(28,23,16,0.05)"

/** Indented callout for dated / narrative examples (e.g. § I case studies). */
export function ArticleExample({ children }: { children: ReactNode }) {
  return (
    <aside
      className="article-example"
      style={{
        margin: "clamp(22px, 3.5vh, 34px) 0",
        marginLeft: "clamp(4px, 1.2vw, 12px)",
        padding: "clamp(16px, 2.4vw, 22px) clamp(18px, 3vw, 28px)",
        borderLeft: `3px solid ${BLUE}`,
        backgroundColor: "rgba(74, 124, 191, 0.07)",
        borderTop: `1px solid ${DARK_10}`,
        borderRight: `1px solid ${DARK_10}`,
        borderBottom: `1px solid ${DARK_10}`,
        borderRadius: "0 4px 4px 0",
      }}
    >
      <div
        style={{
          fontFamily: "var(--font-body), Georgia, serif",
          fontSize: "1.04rem",
          lineHeight: 1.78,
          color: DARK_80,
          fontStyle: "italic",
        }}
      >
        {children}
      </div>
    </aside>
  )
}

/* ─── Figure ─── */
export function Figure({
  label,
  caption,
  src,
  alt,
  height = 320,
  placeholder,
}: {
  label?: string
  caption: ReactNode
  src?: string
  alt?: string
  height?: number
  placeholder?: ReactNode
}) {
  return (
    <figure
      style={{
        margin: "clamp(36px, 5vh, 56px) 0",
        padding: 0,
      }}
    >
      <div
        style={{
          position: "relative",
          width: "100%",
          height: src ? "auto" : `${height}px`,
          backgroundColor: DARK_05,
          border: `1px solid ${DARK_20}`,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          overflow: "hidden",
        }}
      >
        {src ? (
          <Image
            src={src}
            alt={alt ?? ""}
            width={1200}
            height={height}
            style={{ width: "100%", height: "auto", display: "block" }}
          />
        ) : (
          <div style={{ textAlign: "center", padding: "32px", color: DARK_50 }}>
            <span
              style={{
                fontFamily: "var(--font-serif), Georgia, serif",
                fontSize: "1.1rem",
                fontStyle: "italic",
                color: DARK_50,
              }}
            >
              {placeholder ?? (
                <>
                  <span
                    style={{
                      fontFamily: "var(--font-mono), monospace",
                      fontSize: "10px",
                      letterSpacing: "0.3em",
                      textTransform: "uppercase",
                      display: "block",
                      marginBottom: "10px",
                      color: DARK_30,
                    }}
                  >
                    Figure
                  </span>
                  <span>Image to be placed</span>
                </>
              )}
            </span>
          </div>
        )}
      </div>
      <figcaption
        style={{
          marginTop: "14px",
          display: "flex",
          gap: "0",
          alignItems: "flex-start",
          borderLeft: `2px solid ${BLUE}`,
        }}
      >
        {label ? (
          <span
            style={{
              paddingLeft: "12px",
              fontFamily: "var(--font-mono), monospace",
              fontSize: "10px",
              letterSpacing: "0.24em",
              textTransform: "uppercase",
              color: BLUE,
              whiteSpace: "nowrap",
              paddingTop: "3px",
            }}
          >
            {label}
          </span>
        ) : null}
        <span
          style={{
            paddingLeft: label ? "12px" : "12px",
            fontFamily: "var(--font-body), Georgia, serif",
            fontSize: "0.92rem",
            fontStyle: "italic",
            color: DARK_65,
            lineHeight: 1.6,
          }}
        >
          {caption}
        </span>
      </figcaption>
    </figure>
  )
}

/* ─── DataTable ─── */
export type DataTableColumn = {
  key: string
  label: string
  align?: "left" | "center" | "right"
  width?: string
  emphasize?: boolean
}

export type DataTableRow = Record<string, ReactNode>

export function DataTable({
  caption,
  columns,
  rows,
  footnote,
}: {
  caption?: string
  columns: DataTableColumn[]
  rows: DataTableRow[]
  footnote?: ReactNode
}) {
  return (
    <div style={{ margin: "clamp(32px, 4vh, 48px) 0" }}>
      {caption && (
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "12px",
            marginBottom: "16px",
          }}
        >
          <span
            style={{
              fontFamily: "var(--font-mono), monospace",
              fontSize: "10px",
              letterSpacing: "0.28em",
              textTransform: "uppercase",
              color: BLUE,
            }}
          >
            Table
          </span>
          <span
            style={{
              fontFamily: "var(--font-serif), Georgia, serif",
              fontSize: "1rem",
              fontStyle: "italic",
              color: DARK_65,
            }}
          >
            {caption}
          </span>
        </div>
      )}
      <div
        className="research-table-wrap"
        style={{
          width: "100%",
          overflowX: "auto",
          border: `1px solid ${DARK_20}`,
        }}
      >
        <table
          style={{
            width: "100%",
            borderCollapse: "collapse",
            fontFamily: "var(--font-mono), monospace",
            fontSize: "12px",
          }}
        >
          <thead>
            <tr>
              {columns.map(col => (
                <th
                  key={col.key}
                  style={{
                    textAlign: col.align ?? "left",
                    padding: "12px 14px",
                    borderBottom: `1px solid ${DARK_20}`,
                    backgroundColor: DARK_05,
                    fontFamily: "var(--font-mono), monospace",
                    fontSize: "10px",
                    fontWeight: 500,
                    letterSpacing: "0.18em",
                    textTransform: "uppercase",
                    color: DARK_65,
                    width: col.width,
                    whiteSpace: "nowrap",
                  }}
                >
                  {col.label}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {rows.map((row, i) => (
              <tr key={i} style={{ borderBottom: i < rows.length - 1 ? `1px solid ${DARK_10}` : undefined }}>
                {columns.map(col => (
                  <td
                    key={col.key}
                    style={{
                      textAlign: col.align ?? "left",
                      padding: "11px 14px",
                      color: col.emphasize ? DARK : DARK_80,
                      fontWeight: col.emphasize ? 500 : 400,
                      whiteSpace: "nowrap",
                    }}
                  >
                    {row[col.key]}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {footnote && (
        <p
          style={{
            marginTop: "14px",
            fontFamily: "var(--font-body), Georgia, serif",
            fontSize: "0.88rem",
            fontStyle: "italic",
            color: DARK_65,
            lineHeight: 1.65,
          }}
        >
          {footnote}
        </p>
      )}
    </div>
  )
}

/* ─── Inline lead-in label (for "Compliance." style intro paragraphs) ─── */
export function Lead({ children }: { children: ReactNode }) {
  return <strong style={{ color: DARK, fontWeight: 600 }}>{children}</strong>
}

/* ─── Numbered enumeration item ─── */
export function NumberedItem({ n, children }: { n: number | string; children: ReactNode }) {
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "32px 1fr",
        gap: "16px",
        alignItems: "start",
        marginBottom: "18px",
      }}
    >
      <span
        style={{
          fontFamily: "var(--font-mono), monospace",
          fontSize: "11px",
          letterSpacing: "0.18em",
          color: RED,
          fontWeight: 500,
          paddingTop: "6px",
        }}
      >
        {typeof n === "number" ? String(n).padStart(2, "0") : n}
      </span>
      <div>{children}</div>
    </div>
  )
}

/* ─── Bullet list item ─── */
export function BulletItem({ children }: { children: ReactNode }) {
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "16px 1fr",
        gap: "12px",
        alignItems: "start",
        marginBottom: "10px",
      }}
    >
      <span
        style={{
          display: "inline-block",
          width: "5px",
          height: "5px",
          borderRadius: "50%",
          backgroundColor: BLUE,
          marginTop: "10px",
        }}
      />
      <div>{children}</div>
    </div>
  )
}

/* ─── Inline scripture quote (for embedded epigraphs) ─── */
export function InlineQuote({ children, attribution }: { children: ReactNode; attribution: string }) {
  return (
    <blockquote
      style={{
        margin: "clamp(28px, 4vh, 40px) 0",
        padding: "0 0 0 20px",
        borderLeft: `3px solid ${BLUE}`,
      }}
    >
      <p
        style={{
          fontFamily: "var(--font-serif), Georgia, serif",
          fontSize: "clamp(1.2rem, 2.4vw, 1.45rem)",
          fontStyle: "italic",
          fontWeight: 300,
          lineHeight: 1.5,
          color: DARK,
          marginBottom: "10px",
        }}
      >
        &ldquo;{children}&rdquo;
      </p>
      <cite
        style={{
          fontFamily: "var(--font-mono), monospace",
          fontSize: "10px",
          letterSpacing: "0.24em",
          textTransform: "uppercase",
          color: BLUE,
          fontStyle: "normal",
        }}
      >
        {attribution}
      </cite>
    </blockquote>
  )
}

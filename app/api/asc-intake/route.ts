import { NextRequest, NextResponse } from "next/server"

export async function POST(request: NextRequest) {
  const intakeBaseUrl = process.env.INTAKE_BASE_URL ?? process.env.INTAKE_URL
  const intakeSlug = process.env.INTAKE_SLUG
  const intakeKey = process.env.INTAKE_KEY

  if (!intakeBaseUrl || !intakeSlug || !intakeKey) {
    return NextResponse.json({ error: "Intake not configured" }, { status: 503 })
  }

  const body = await request.json().catch(() => ({}))
  const payload = {
    email: body.email,
    firstName: body.firstName ?? body.name ?? body.fullName,
    lastName: body.lastName,
    phone: body.phone,
    companyName: body.companyName ?? body.company,
    message: body.message,
    source: "the-way-site",
    formName: body.formName ?? "contact",
    pageUrl: body.pageUrl,
    utm: body.utm,
    extra: body.extra,
  }
  if (!payload.email) return NextResponse.json({ error: "email required" }, { status: 400 })

  try {
    const res = await fetch(`${intakeBaseUrl}/api/intake/${intakeSlug}`, {
      method: "POST",
      headers: { "content-type": "application/json", "x-intake-key": intakeKey },
      body: JSON.stringify(payload),
    })
    const data = await res.json().catch(() => ({}))
    return NextResponse.json(data, { status: res.status })
  } catch {
    return NextResponse.json({ error: "Intake service unavailable" }, { status: 502 })
  }
}

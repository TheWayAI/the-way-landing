import { NextRequest, NextResponse } from "next/server"

export async function POST(req: NextRequest) {
  const url = process.env.ASCENDANCE_INTAKE_URL
  const key = process.env.ASCENDANCE_INTAKE_KEY
  if (!url || !key) {
    return NextResponse.json({ error: "Intake not configured" }, { status: 500 })
  }
  const body = await req.json()
  const res = await fetch(url, {
    method: "POST",
    headers: { "content-type": "application/json", "x-intake-key": key },
    body: JSON.stringify(body),
  })
  const data = await res.json().catch(() => ({}))
  return NextResponse.json(data, { status: res.status })
}

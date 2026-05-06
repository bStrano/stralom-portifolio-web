import {NextResponse} from 'next/server'

const API_GATEWAY_URL = 'https://maz35av5ic.execute-api.us-east-2.amazonaws.com/PRODUCTION/email'

const RATE_LIMIT_WINDOW_MS = 60_000
const RATE_LIMIT_MAX = 5
const MAX_DESCRIPTION_LENGTH = 2000

const rateLimitBuckets = new Map<string, number[]>()

interface ContactPayload {
    firstName?: string
    lastName?: string
    phone?: string
    email?: string
    description?: string
    website?: string
}

function escapeHtml(value: string): string {
    return value
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;')
        .replace(/'/g, '&#39;')
}

function getClientIp(request: Request): string {
    const forwarded = request.headers.get('x-forwarded-for')
    if (forwarded) return forwarded.split(',')[0].trim()
    return request.headers.get('x-real-ip') ?? 'unknown'
}

function checkRateLimit(ip: string): boolean {
    const now = Date.now()
    const recent = (rateLimitBuckets.get(ip) ?? []).filter(t => now - t < RATE_LIMIT_WINDOW_MS)
    if (recent.length >= RATE_LIMIT_MAX) {
        rateLimitBuckets.set(ip, recent)
        return false
    }
    recent.push(now)
    rateLimitBuckets.set(ip, recent)
    return true
}

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

export async function POST(request: Request) {
    const apiKey = process.env.CONTACT_API_KEY
    if (!apiKey) {
        return NextResponse.json({error: 'Server misconfigured'}, {status: 500})
    }

    if (process.env.NODE_ENV === 'production') {
        const ip = getClientIp(request)
        if (!checkRateLimit(ip)) {
            return NextResponse.json({error: 'Rate limit exceeded'}, {status: 429})
        }
    }

    let payload: ContactPayload
    try {
        payload = await request.json()
    } catch {
        return NextResponse.json({error: 'Invalid JSON'}, {status: 400})
    }

    if (payload.website && payload.website.trim().length > 0) {
        return NextResponse.json({MessageId: 'silent'})
    }

    const firstName = (payload.firstName ?? '').trim()
    const lastName = (payload.lastName ?? '').trim()
    const phone = (payload.phone ?? '').trim()
    const email = (payload.email ?? '').trim()
    const description = (payload.description ?? '').trim()

    if (!firstName || !lastName || !phone || !email || !description) {
        return NextResponse.json({error: 'Missing required fields'}, {status: 400})
    }
    if (!EMAIL_RE.test(email)) {
        return NextResponse.json({error: 'Invalid email'}, {status: 400})
    }
    if (description.length > MAX_DESCRIPTION_LENGTH) {
        return NextResponse.json({error: 'Description too long'}, {status: 400})
    }

    const message = `
        <h1>Contato pelo site</h1>
        <p>Nome: ${escapeHtml(firstName)} ${escapeHtml(lastName)}</p>
        <p>Telefone: ${escapeHtml(phone)}</p>
        <p>Email: ${escapeHtml(email)}</p>
        <p>Descrição: ${escapeHtml(description)}</p>
    `

    const upstream = await fetch(API_GATEWAY_URL, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'x-api-key': apiKey,
        },
        body: JSON.stringify({
            destination: 'bruno@stralom.com',
            subject: 'Contato pelo site',
            message,
        }),
    })

    const data = await upstream.json().catch(() => ({}))

    if (!upstream.ok) {
        return NextResponse.json(
            {error: 'Failed to send email'},
            {status: upstream.status},
        )
    }

    return NextResponse.json(data)
}

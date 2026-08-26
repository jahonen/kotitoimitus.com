/**
 * Cloudflare Pages Function: Newsletter signup handler.
 *
 * Receives a JSON POST with an email address, validates it, stores it in KV,
 * and sends a notification email to the site owner via Resend.
 *
 * Required secrets (set in the Cloudflare Pages dashboard or via wrangler):
 *   - RESEND_API_KEY
 *   - OWNER_EMAIL
 *
 * Optional environment variables:
 *   - RESEND_FROM_EMAIL (defaults to newsletter@kotitoimitus.com)
 */

const RESEND_API_URL = 'https://api.resend.com/emails';

function getCorsHeaders(origin) {
  return {
    'Access-Control-Allow-Origin': origin || '*',
    'Access-Control-Allow-Methods': 'POST, OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type',
    'Content-Type': 'application/json',
  };
}

function isValidEmail(email) {
  return typeof email === 'string' && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function escapeHtml(text) {
  return text
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}

async function sendNotificationEmail({ email, env, origin }) {
  const resendApiKey = env.RESEND_API_KEY;
  const ownerEmail = env.OWNER_EMAIL;
  const fromEmail = env.RESEND_FROM_EMAIL || 'newsletter@kotitoimitus.com';

  if (!resendApiKey || !ownerEmail) {
    throw new Error('Missing required secrets: RESEND_API_KEY or OWNER_EMAIL');
  }

  const response = await fetch(RESEND_API_URL, {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${resendApiKey}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      from: `Kotitoimitus.com <${fromEmail}>`,
      to: ownerEmail,
      subject: 'Uusi uutiskirjeen tilaus Kotitoimitus.com-sivustolta',
      text: `Uusi tilaaja: ${email}\nLähteen domain: ${origin || 'ei saatavilla'}`,
      html: `<p>Uusi uutiskirjeen tilaaja: <strong>${escapeHtml(email)}</strong></p><p>Lähteen domain: ${escapeHtml(origin || 'ei saatavilla')}</p>`,
    }),
  });

  if (!response.ok) {
    const body = await response.text();
    throw new Error(`Resend API error ${response.status}: ${body}`);
  }

  return response.json();
}

export async function onRequestOptions(context) {
  const origin = context.request.headers.get('Origin') || '';
  return new Response(null, { status: 204, headers: getCorsHeaders(origin) });
}

export async function onRequestPost(context) {
  const { request, env } = context;
  const origin = request.headers.get('Origin') || '';

  let body;
  try {
    body = await request.json();
  } catch {
    return new Response(JSON.stringify({ error: 'Invalid JSON body' }), {
      status: 400,
      headers: getCorsHeaders(origin),
    });
  }

  const { email } = body;

  if (!isValidEmail(email)) {
    return new Response(JSON.stringify({ error: 'Syötä kelvollinen sähköpostiosoite.' }), {
      status: 400,
      headers: getCorsHeaders(origin),
    });
  }

  try {
    if (env.SUBSCRIBERS) {
      await env.SUBSCRIBERS.put(email, JSON.stringify({ subscribedAt: new Date().toISOString() }));
    }

    await sendNotificationEmail({ email, env, origin });

    return new Response(JSON.stringify({ success: true, message: 'Kiitos! Olemme vastaanottaneet tilauksesi.' }), {
      status: 200,
      headers: getCorsHeaders(origin),
    });
  } catch (error) {
    console.error('Newsletter signup error:', error);
    return new Response(
      JSON.stringify({ error: 'Tilauksen käsittely epäonnistui. Yritä myöhemmin uudelleen.' }),
      { status: 500, headers: getCorsHeaders(origin) },
    );
  }
}

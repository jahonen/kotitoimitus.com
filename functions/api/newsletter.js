/**
 * Cloudflare Pages Function: Newsletter signup handler.
 *
 * Receives a JSON POST with an email address, validates it, stores it in KV,
 * and sends a notification email to the site owner via SendGrid.
 *
 * Required secrets (set in the Cloudflare Pages dashboard or via wrangler):
 *   - SENDGRID_API_KEY
 *   - OWNER_EMAIL
 *
 * Optional environment variables:
 *   - SENDGRID_FROM_EMAIL (defaults to newsletter@kotitoimitus.com)
 */

const SENDGRID_API_URL = 'https://api.sendgrid.com/v3/mail/send';

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
  const sendgridApiKey = env.SENDGRID_API_KEY;
  const ownerEmail = env.OWNER_EMAIL;
  const fromEmail = env.SENDGRID_FROM_EMAIL || 'newsletter@kotitoimitus.com';

  if (!sendgridApiKey || !ownerEmail) {
    throw new Error('Missing required secrets: SENDGRID_API_KEY or OWNER_EMAIL');
  }

  const response = await fetch(SENDGRID_API_URL, {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${sendgridApiKey}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      personalizations: [{ to: [{ email: ownerEmail }] }],
      from: { email: fromEmail, name: 'Kotitoimitus.com' },
      subject: 'Uusi uutiskirjeen tilaus Kotitoimitus.com-sivustolta',
      content: [
        {
          type: 'text/plain',
          value: `Uusi tilaaja: ${email}\nLähteen domain: ${origin || 'ei saatavilla'}`,
        },
        {
          type: 'text/html',
          value: `<p>Uusi uutiskirjeen tilaaja: <strong>${escapeHtml(email)}</strong></p><p>Lähteen domain: ${escapeHtml(origin || 'ei saatavilla')}</p>`,
        },
      ],
    }),
  });

  if (!response.ok) {
    const body = await response.text();
    throw new Error(`SendGrid API error ${response.status}: ${body}`);
  }

  return { sent: true };
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

    return new Response(JSON.stringify({ success: true, message: 'Kiitos! Olemme vastaanottaneet tilauksenne.' }), {
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

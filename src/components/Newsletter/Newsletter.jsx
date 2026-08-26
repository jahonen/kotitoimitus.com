import { useState } from 'react';
import './Newsletter.scss';

const WORKER_ENDPOINT = import.meta.env.VITE_NEWSLETTER_WORKER_URL || '/api/newsletter';

const icons = {
  success: (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
      <polyline points="22 4 12 14.01 9 11.01" />
    </svg>
  ),
  error: (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <circle cx="12" cy="12" r="10" />
      <line x1="12" y1="8" x2="12" y2="12" />
      <line x1="12" y1="16" x2="12.01" y2="16" />
    </svg>
  ),
  send: (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <line x1="22" y1="2" x2="11" y2="13" />
      <polygon points="22 2 15 22 11 13 2 9 22 2" />
    </svg>
  ),
};

function Newsletter() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState('idle');
  const [message, setMessage] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!email || !email.includes('@')) {
      setStatus('error');
      setMessage('Sähköpostiosoite ei ole kelvollinen.');
      return;
    }

    setStatus('loading');
    setMessage('');

    try {
      const response = await fetch(WORKER_ENDPOINT, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      });

      const data = await response.json().catch(() => ({}));

      if (response.ok) {
        setStatus('success');
        setMessage(data.message || 'Kiitos! Olemme vastaanottaneet tilauksenne.');
        setEmail('');
      } else {
        setStatus('error');
        setMessage(data.message || 'Tilauksen lähetys epäonnistui. Yrittäkää uudelleen.');
      }
    } catch (error) {
      setStatus('error');
      setMessage('Yhteys palvelimeen epäonnistui. Yrittäkää uudelleen.');
    }
  };

  return (
    <section id="uutiskirje" className="newsletter">
      <div className="newsletter__content">
        <h2 className="newsletter__title">Tilaa uutiskirje</h2>
        <p className="newsletter__description">
          Haluatteko pysyä ajan tasalla alkoholin kotiintoimituksen säädöksistä ja Kotitoimitus.com-palvelusta?
          Jättäkää sähköpostiosoitteenne, niin ilmoitamme teille tärkeistä päivityksistä.
        </p>
        <form className="newsletter__form" onSubmit={handleSubmit} noValidate>
          <input
            className="newsletter__input"
            type="email"
            name="email"
            placeholder="sähköposti@example.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <button className="newsletter__button" type="submit" disabled={status === 'loading'}>
            {status === 'loading' ? 'Lähetetään...' : 'Tilaa uutiskirje'}
            {status !== 'loading' && icons.send}
          </button>
        </form>
        {message && (
          <p
            className={`newsletter__message ${
              status === 'success' ? 'newsletter__message--success' : 'newsletter__message--error'
            }`}
          >
            {status === 'success' ? icons.success : icons.error}
            {message}
          </p>
        )}
      </div>
    </section>
  );
}

export default Newsletter;

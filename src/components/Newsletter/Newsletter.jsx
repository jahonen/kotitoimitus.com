import { useState } from 'react';
import './Newsletter.scss';

const WORKER_ENDPOINT = import.meta.env.VITE_NEWSLETTER_WORKER_URL || '/api/newsletter';

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
      <h2 className="newsletter__title">Tilaa uutiskirje</h2>
      <p>
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
        </button>
      </form>
      {message && (
        <p
          className={`newsletter__message ${
            status === 'success' ? 'newsletter__message--success' : 'newsletter__message--error'
          }`}
        >
          {message}
        </p>
      )}
    </section>
  );
}

export default Newsletter;

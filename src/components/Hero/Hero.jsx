import './Hero.scss';

function Hero() {
  return (
    <section id="hero" className="hero">
      <div className="hero__decoration" aria-hidden="true">
        <svg viewBox="0 0 800 600" preserveAspectRatio="none">
          <defs>
            <linearGradient id="heroGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#ffffff" stopOpacity="0.25" />
              <stop offset="100%" stopColor="#ffffff" stopOpacity="0" />
            </linearGradient>
          </defs>
          <circle cx="650" cy="400" r="280" fill="url(#heroGrad)" />
          <circle cx="200" cy="150" r="120" fill="url(#heroGrad)" />
          <path
            d="M-50 550 Q200 450 400 520 T850 480"
            fill="none"
            stroke="#ffffff"
            strokeWidth="2"
            strokeOpacity="0.15"
          />
        </svg>
      </div>

      <div className="hero__content">
        <span className="hero__eyebrow">Yritys perustamassa</span>
        <h1 className="hero__title">
          B2B-ratkaisut alkoholin lailliseen kotiintoimitukseen Suomessa
        </h1>
        <p className="hero__lead">
          Laki alkoholilain muuttamisesta (589/2026) tuli voimaan <strong>3.7.2026</strong>. Se mahdollistaa
          alkoholijuomien <strong>kotiintoimituksen</strong> ja <strong>etämyynnin</strong> Suomessa. Me autamme
          yritystäsi valmistautumaan ja toimimaan lakien mukaisesti.
        </p>
        <div className="hero__disclaimer">
          <strong>Huomio:</strong> Kotitoimitus.com on tällä hetkellä perustamisvaiheessa. Yrityksen
          viralliset rekisteröintitiedot ja tarkemmat yhteystiedot julkaistaan tällä sivustolla lähiaikoina.
          Toimintamme käynnistyy marraskuussa 2026 yhdessä alkoholijuomien kotiintoimituslupien
          rekisteröinnin kanssa. Tilaa uutiskirjeemme, niin kerromme, kun rekisteröinti on valmis ja palvelu
          avautuu.
        </div>
        <div className="hero__actions">
          <a className="hero__cta" href="#uutiskirje">
            Tilaa päivitykset
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </a>
          <a className="hero__cta hero__cta--secondary" href="#palvelut">
            Tutustu palveluihin
          </a>
        </div>
        <div className="hero__meta">
          <span className="hero__meta-item">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
              <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
              <line x1="16" y1="2" x2="16" y2="6" />
              <line x1="8" y1="2" x2="8" y2="6" />
              <line x1="3" y1="10" x2="21" y2="10" />
            </svg>
            Yrityksen rekisteröinti ja lupahakemukset marraskuussa 2026
          </span>
          <span className="hero__meta-item">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
              <circle cx="12" cy="12" r="10" />
              <polyline points="12 6 12 12 16 14" />
            </svg>
            Kotiintoimitukset arviolta 3.1.2027
          </span>
        </div>
      </div>
    </section>
  );
}

export default Hero;

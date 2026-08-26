import { useState } from 'react';
import './Header.scss';

const navLinks = [
  { label: 'Palvelut', href: '#palvelut' },
  { label: 'Kenelle', href: '#kohderyhma' },
  { label: 'Laki', href: '#laillisuus' },
  { label: 'Blogi', href: '#blogi' },
  { label: 'Yhteys', href: '#uutiskirje' },
];

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleLinkClick = () => setMenuOpen(false);

  return (
    <header className="header">
      <div className="header__container">
        <a className="header__brand" href="#hero" onClick={handleLinkClick}>
          <img
            className="header__logo"
            src="/apple-touch-icon.png"
            alt="Kotitoimitus.com"
            width="40"
            height="40"
            loading="eager"
          />
          <div className="header__brand-text">
            <span className="header__title">Kotitoimitus.com</span>
            <span className="header__tagline">B2B-ratkaisut alkoholin kotiintoimitukseen</span>
          </div>
        </a>

        <button
          className="header__menu-button"
          type="button"
          aria-label={menuOpen ? 'Sulje valikko' : 'Avaa valikko'}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((open) => !open)}
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
            {menuOpen ? (
              <>
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </>
            ) : (
              <>
                <line x1="3" y1="6" x2="21" y2="6" />
                <line x1="3" y1="12" x2="21" y2="12" />
                <line x1="3" y1="18" x2="21" y2="18" />
              </>
            )}
          </svg>
        </button>

        <nav className={`header__nav ${menuOpen ? 'header__nav--open' : ''}`}>
          {navLinks.map((link) => (
            <a key={link.href} className="header__link" href={link.href} onClick={handleLinkClick}>
              {link.label}
            </a>
          ))}
          <a className="header__cta" href="#uutiskirje" onClick={handleLinkClick}>
            Tilaa uutiskirje
          </a>
        </nav>
      </div>
    </header>
  );
}

export default Header;

import './Footer.scss';

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer__container">
        <div className="footer__brand">
          <h3 className="footer__title">Kotitoimitus.com</h3>
          <p className="footer__tagline">
            B2B-ratkaisut alkoholin kotiintoimitukseen Suomessa. Hoidamme luvat, valvonnan ja
            vaatimustenmukaisuuden puolestasi.
          </p>
        </div>
        <div>
          <h4 className="footer__heading">Sivusto</h4>
          <ul className="footer__list">
            <li>
              <a className="footer__link" href="#palvelut">Palvelut</a>
            </li>
            <li>
              <a className="footer__link" href="#kohderyhma">Kenelle</a>
            </li>
            <li>
              <a className="footer__link" href="#laillisuus">Laki ja vaatimukset</a>
            </li>
            <li>
              <a className="footer__link" href="#blogi">Blogi</a>
            </li>
          </ul>
        </div>
        <div>
          <h4 className="footer__heading">Yhteys</h4>
          <ul className="footer__list">
            <li>
              <a className="footer__link" href="#uutiskirje">Tilaa uutiskirje</a>
            </li>
            <li>
              <a className="footer__link" href="/sitemap.xml">Sitemap</a>
            </li>
          </ul>
        </div>
      </div>
      <div className="footer__bottom">
        <p>
          © {currentYear} Kotitoimitus.com. Kaikki oikeudet pidätetään. Palvelumme noudattavat Suomen
          alkoholilakia (1102/2017) ja alkoholilain muutosta (589/2026) sekä Valviran ohjeistuksia.
        </p>
      </div>
    </footer>
  );
}

export default Footer;

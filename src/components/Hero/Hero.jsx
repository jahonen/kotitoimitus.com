import './Hero.scss';

function Hero() {
  return (
    <section id="hero" className="hero">
      <h2 className="hero__title">Tervetuloa alkoholin kotiintoimituksen tulevaisuuteen</h2>
      <p>
        Laki alkoholilain muuttamisesta (589/2026) tuli voimaan <strong>3.7.2026</strong>. Se mahdollistaa
        alkoholijuomien <strong>kotiintoimituksen</strong> ja <strong>etämyynnin</strong> Suomessa.{" "}
        <strong>Kotitoimitus.com</strong> tarjoaa yrityksille kattavan B2B-palvelun, jolla voitte hyödyntää uusia
        liiketoimintamahdollisuuksia laillisesti ja vaivattomasti.
      </p>
      <p className="hero__updated">
        Voimaantuloa on porrastettu: toimituslupia voi hakea arviolta marraskuusta 2026 lähtien, ja toimitukset
        voivat alkaa arviolta 3.1.2027.
      </p>
    </section>
  );
}

export default Hero;

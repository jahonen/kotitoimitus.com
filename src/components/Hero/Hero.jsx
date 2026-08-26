import './Hero.scss';

function Hero() {
  return (
    <section id="hero" className="hero">
      <h2 className="hero__title">Tervetuloa alkoholin kotiintoimituksen tulevaisuuteen</h2>
      <p>
        Vuoden 2027 alusta voimaan astuva <strong>alkoholilaki</strong> (Laki alkoholilain muuttamisesta, 1102/2017)
        mahdollistaa alkoholijuomien <strong>kotiintoimituksen</strong> ja <strong>etämyynnin</strong> Suomessa.{" "}
        <strong>Kotitoimitus.com</strong> tarjoaa yrityksille kattavan B2B-palvelun, jolla voitte hyödyntää uusia
        liiketoimintamahdollisuuksia laillisesti ja vaivattomasti.
      </p>
      <p className="hero__updated">Päivitetty: Elokuu 2026 | Toiminta alkaa 1.1.2027</p>
    </section>
  );
}

export default Hero;

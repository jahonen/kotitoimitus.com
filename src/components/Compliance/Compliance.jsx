import './Compliance.scss';

const requirements = [
  'Toimitukset suoritetaan ainoastaan toimitusluvan haltijan toimesta.',
  'Luovutus tapahtuu ainoastaan täysi-ikäiselle ja päihtymättömälle vastaanottajalle.',
  'Toimituspassi pidetään aina mukana toimituksia suoritettaessa.',
  'Alkoholijuomien merkitsevä (alkoholipitoisuuden mukaan) on kunnossa.',
  'Kiellettyjen toimituspaikkojen (esim. lastensuojelulaitokset, leikkikentät, ravintolat, anniskelualueet) noudattaminen.',
];

function Compliance() {
  return (
    <section id="laillisuus" className="compliance">
      <h2 className="compliance__title">Laillisuus ja vaatimustenmukaisuus</h2>
      <p>
        Noudatamme tiukasti <strong>alkoholilakia (1102/2017)</strong> ja sen muutoksia, jotka astuvat voimaan{" "}
        <strong>1.1.2027</strong>. Palvelumme varmistavat, että:
      </p>
      <ul className="compliance__list">
        {requirements.map((item) => (
          <li key={item} className="compliance__item">
            {item}
          </li>
        ))}
      </ul>
      <p>
        Yhteistyökumppaneinamme ovat <strong>Valvira</strong>, <strong>THL</strong> ja{' '}
        <strong>Aluehallintovirastot</strong>, jotta palvelumme ovat aina ajantasaa säädösten kanssa.
      </p>
    </section>
  );
}

export default Compliance;

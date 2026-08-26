import './Compliance.scss';

const requirements = [
  'Toimitukset suoritetaan ainoastaan toimitusluvan haltijan toimesta.',
  'Luovutus tapahtuu päihtymättömälle vastaanottajalle, joka on täysi-ikäinen (18 v.) tai väkeviä alkoholijuomia koskien vähintään 20-vuotias.',
  'Toimituspassi pidetään aina mukana toimituksia suoritettaessa.',
  'Alkoholijuomien merkintä ja alkoholipitoisuusilmoitus ovat kunnossa.',
  'Toimitetaan vain sallittuihin osoitteisiin ja noudatetaan toimituspaikkoja koskevia rajoituksia.',
  'Vähittäismyyntiin soveltuvien alkoholijuomien vahvuusrajat huomioidaan: esimerkiksi miedot käymisteitse valmistetut juomat enintään 8,0 % ja muut enintään 5,5 % Alkon ulkopuolisessa jälleenmyynnissä.',
];

function Compliance() {
  return (
    <section id="laillisuus" className="compliance">
      <div className="compliance__header">
        <h2 className="compliance__title">Laillisuus ja vaatimustenmukaisuus</h2>
        <p className="compliance__lead">
          Noudatamme tiukasti alkoholilakia (1102/2017) ja sen muutosta (589/2026), joka tuli voimaan{' '}
          <strong>3.7.2026</strong>. Palvelumme varmistavat, että:
        </p>
      </div>
      <ul className="compliance__list">
        {requirements.map((item) => (
          <li key={item} className="compliance__item">
            <span className="compliance__icon" aria-hidden="true">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="20 6 9 17 4 12" />
              </svg>
            </span>
            <p className="compliance__text">{item}</p>
          </li>
        ))}
      </ul>
      <p className="compliance__note">
        Seuraamme Valviran, THL:n ja aluehallintovirastojen ohjeistuksia ja päivityksiä, jotta
        palvelumme pysyvät ajan tasalla säädösten suhteen.
      </p>
    </section>
  );
}

export default Compliance;

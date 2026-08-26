import './Audience.scss';

const audiences = [
  { label: 'Kotimaiset vähittäismyyjät', note: ', alkoholiluvan haltijat' },
  { label: 'Alko Oy', note: ' ja sen kumppanit' },
  { label: 'Ulkomaiset etämyyjät', note: ', ETA-alueelta' },
  { label: 'Tuottajat ja maahantuojat', note: ', jotka haluavat myydä suoraan kuluttajille' },
  { label: 'Kuljetus- ja logistiikkayritykset', note: ', jotka tarvitsevat toimitusluvan' },
  { label: 'Ravintolat ja anniskeluyritykset', note: ', jotka laajentavat myyntiään kotiinkuljetukseen' },
];

function Audience() {
  return (
    <section id="kohderyhma" className="audience">
      <div className="audience__header">
        <h2 className="audience__title">Kenelle palvelumme sopii?</h2>
        <p className="audience__lead">
          Palvelemme toimijoita, jotka haluavat tarjota alkoholijuomien kotiintoimitusta Suomessa laillisesti
          ja luotettavasti.
        </p>
      </div>
      <ul className="audience__list">
        {audiences.map((item) => (
          <li key={item.label} className="audience__item">
            <span className="audience__bullet" aria-hidden="true">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="20 6 9 17 4 12" />
              </svg>
            </span>
            <p className="audience__text">
              <strong>{item.label}</strong>{item.note}
            </p>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default Audience;

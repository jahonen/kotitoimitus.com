import './Audience.scss';

const audiences = [
  { label: 'Kotimaiset vähittäismyyjät', note: '(alkoholiluvan haltijat)' },
  { label: 'Alko Oy', note: 'ja sen kumppanit' },
  { label: 'Ulkomaiset etämyyjät', note: '(EEA-alueelta)' },
  { label: 'Tuottajat ja maahantuojat', note: 'jotka haluavat myydä suoraan kuluttajille' },
  { label: 'Kuljetus- ja logistiikkayritykset', note: 'jotka tarvitsevat toimitusluvan' },
];

function Audience() {
  return (
    <section id="kohderyhma" className="audience">
      <h2 className="audience__title">Kenelle palvelumme on?</h2>
      <p>Palvelemme seuraavia toimijoita, jotka haluavat tarjota alkoholijuomien kotiintoimitusta Suomessa:</p>
      <ul className="audience__list">
        {audiences.map((item) => (
          <li key={item.label} className="audience__item">
            <strong>{item.label}</strong> {item.note}
          </li>
        ))}
      </ul>
    </section>
  );
}

export default Audience;

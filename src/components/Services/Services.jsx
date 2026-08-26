import './Services.scss';

const services = [
  {
    title: 'Toimituslupa',
    description:
      'Hakemme ja hallinnoimme yrityksellenne vaaditun alkoholijuomien toimitusluvan, jonka turvin voitte toimia laillisesti.',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
        <polyline points="14 2 14 8 20 8" />
        <line x1="16" y1="13" x2="8" y2="13" />
        <line x1="16" y1="17" x2="8" y2="17" />
        <polyline points="10 9 9 9 8 9" />
      </svg>
    ),
  },
  {
    title: 'Toimituspassi',
    description:
      'Varustamme toimitushenkilökunnan vaadituilla toimituspasseilla, jotka on esitettävä toimitusten yhteydessä.',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
        <path d="M7 11V7a5 5 0 0 1 10 0v4" />
      </svg>
    ),
  },
  {
    title: 'Alkoholijuoman toimittaja',
    description:
      'Alkoholijuoman toimittajamme (lisensoidut ja koulutetut) hoitavat toimitukset ja luovutukset vastaanottajille.',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <rect x="1" y="3" width="15" height="13" />
        <polygon points="16 8 20 8 23 11 23 16 16 16 16 8" />
        <circle cx="5.5" cy="18.5" r="2.5" />
        <circle cx="18.5" cy="18.5" r="2.5" />
      </svg>
    ),
  },
  {
    title: 'Ikärajavalvonta',
    description:
      'Toteutamme ikätarkastukset sekä ostovaiheessa että luovutuksen yhteydessä, kuten alkoholilaki ja Valvira vaativat.',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </svg>
    ),
  },
  {
    title: 'Toimitusaikojen ja -paikkojen noudattaminen',
    description:
      'Toimitukset tehdään ainoastaan sallittuina aikoina (klo 9.00–21.00). Kiellettyihin toimituspaikkoihin emme toimita.',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <circle cx="12" cy="12" r="10" />
        <polyline points="12 6 12 12 16 14" />
      </svg>
    ),
  },
  {
    title: 'Rajat ylittävä etämyynti',
    description: 'Tuemme ETA-alueen toimituksia ja avustamme verotuksen hoitamisessa.',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <circle cx="12" cy="12" r="10" />
        <line x1="2" y1="12" x2="22" y2="12" />
        <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
      </svg>
    ),
  },
];

function Services() {
  return (
    <section id="palvelut" className="services">
      <div className="services__header">
        <h2 className="services__title">Palvelumme kattavat kaiken tarvittavan</h2>
        <p className="services__lead">
          Hoidamme toiminnan teknisen ja hallinnollisen puolen puolestasi, jotta voitte keskittyä
          yrityksenne ydinosaamiseen.
        </p>
      </div>
      <div className="services__grid">
        {services.map((service) => (
          <article key={service.title} className="service-card">
            <div className="service-card__icon">{service.icon}</div>
            <h3 className="service-card__title">{service.title}</h3>
            <p className="service-card__description">{service.description}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Services;

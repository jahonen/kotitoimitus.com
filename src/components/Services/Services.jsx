import './Services.scss';

const services = [
  {
    title: 'Toimituslupa',
    description:
      'Hakemme ja hallinnoimme yrityksellenne vaaditun alkoholijuomien toimitusluvan, jonka turvin voitte toimia laillisesti.',
  },
  {
    title: 'Toimituspassi',
    description:
      'Varustamme toimitushenkilökunnan vaadituilla toimituspasseilla, jotka on esitettävä toimitusten yhteydessä.',
  },
  {
    title: 'Alkoholijuoman toimittaja',
    description:
      'Meidän alkoholijuoman toimittajamme (lisensoidut ja koulutetut) hoitavat toimituksen ja luovutuksen asiakkaalle tai vastaanottajalle.',
  },
  {
    title: 'Ikärajavalvonta',
    description:
      'Toteutamme ikätarkastukset sekä ostovaiheessa että luovutuksen yhteydessä, kuten alkoholilaki ja Valvira vaativat.',
  },
  {
    title: 'Toimitusaikojen ja -paikkojen noudattaminen',
    description:
      'Toimitukset tehdään ainoastaan sallittuina aikoina (klo 9.00–21.00). Kiellettyihin toimituspaikkoihin emme toimita.',
  },
  {
    title: 'Rajat ylittävä etämyynti',
    description:
      'Tuemme ETA-alueen toimituksia ja avustamme verotuksen hoitamisessa.',
  },
];

function Services() {
  return (
    <section id="palvelut" className="services">
      <h2 className="services__title">Palvelumme kattavat kaiken tarvittavan</h2>
      <ul className="services__list">
        {services.map((service) => (
          <li key={service.title} className="services__item">
            <strong>{service.title}</strong> – {service.description}
          </li>
        ))}
      </ul>
    </section>
  );
}

export default Services;

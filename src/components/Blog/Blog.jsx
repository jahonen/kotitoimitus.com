import './Blog.scss';

const posts = [
  {
    title: 'Tervetuloa – tästä Kotitoimitus.com sai alkunsa',
    href: '/blog/tervetuloa-tasta-kotitoimitus-sai-alkunsa',
    date: '26. elokuuta 2026',
    description:
      'Kotitoimitus.com auttaa tuottajia, maahantuojia ja muita toimijoita tuomaan laadukkaat juomansa suomalaisten saataville vastuullisesti ja lainmukaisesti.',
  },
];

const calendarIcon = (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
    <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
    <line x1="16" y1="2" x2="16" y2="6" />
    <line x1="8" y1="2" x2="8" y2="6" />
    <line x1="3" y1="10" x2="21" y2="10" />
  </svg>
);

const arrowIcon = (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M5 12h14M12 5l7 7-7 7" />
  </svg>
);

function Blog() {
  return (
    <section id="blogi" className="blog">
      <div className="blog__header">
        <h2 className="blog__title">Blogi</h2>
        <p className="blog__lead">
          Kokoamme tälle sivulle ajankohtaista tietoa alkoholin kotiintoimituksesta, etämyynnistä ja
          vaatimustenmukaisuudesta.
        </p>
      </div>
      <ul className="blog__list">
        {posts.map((post) => (
          <li key={post.href} className="blog-card">
            <a className="blog-card__link" href={post.href}>
              {post.title}
            </a>
            <span className="blog-card__date">
              {calendarIcon}
              {post.date}
            </span>
            <p className="blog-card__description">{post.description}</p>
            <a className="blog-card__cta" href={post.href}>
              Lue lisää {arrowIcon}
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default Blog;

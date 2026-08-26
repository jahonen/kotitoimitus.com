import './Blog.scss';

const posts = [
  {
    title: 'Alkoholin kotiintoimitus Suomessa 2026–2027: mitä yrityksen tietää?',
    href: '/blog/alkoholin-kotiintoimitus-suomi-2027.html',
    date: '26. elokuuta 2026',
    description:
      'Yhteenveto alkoholilain muutoksesta 589/2026: toimituslupa, toimituspassi, ikärajat, vahvuusrajat ja aikataulu yrityksille.',
  },
];

function Blog() {
  return (
    <section id="blogi" className="blog">
      <h2 className="blog__title">Blogi</h2>
      <p>
        Kokoamme tälle sivulle ajankohtaista tietoa alkoholin kotiintoimituksesta, etämyynnistä ja
        vaatimustenmukaisuudesta.
      </p>
      <ul className="blog__list">
        {posts.map((post) => (
          <li key={post.href} className="blog__item">
            <a className="blog__link" href={post.href}>
              {post.title}
            </a>
            <span className="blog__date">{post.date}</span>
            <p>{post.description}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default Blog;

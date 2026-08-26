import './Blog.scss';

const posts = [
  {
    title: 'Tervetuloa – tästä Kotitoimitus.com sai alkunsa',
    href: '/blog/tervetuloa-tasta-kotitoimitus-sai-alkunsa.html',
    date: '26. elokuuta 2026',
    description:
      'Kotitoimitus.com auttaa tuottajia, maahantuojia ja muita toimijoita tuomaan laadukkaat juomansa suomalaisten saataville vastuullisesti ja lainmukaisesti.',
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

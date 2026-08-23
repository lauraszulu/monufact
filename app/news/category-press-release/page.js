export const metadata = {
  title: "Press Releases - Monufact Newsroom",
  description: "Official press releases and announcements from Monufact for the manufacturing and industrial sectors.",
};

export default function Page() {
  return (
    <>
      {/* Category hero */}
        <section className="service-hero">
          <div className="container">
            <span className="eyebrow">/ News</span>
            <h1>Press Release</h1>
            <p className="service-intro">The latest updates, press releases, and product innovation from Monufact.</p>
            <div className="news-filters">
              <a href="/news" className="news-filter">All</a>
              <a href="/news/category-product-innovation" className="news-filter">Product Innovation</a>
              <a href="/news/category-press-release" className="news-filter is-active">Press Release</a>
              <a href="/news/category-news" className="news-filter">News</a>
            </div>
          </div>
        </section>

        {/* News list */}
        <section className="section">
          <div className="container news-list">
            <article className="news-list-item">
              <a href="/news/sustainability-marketing-advantage" className="news-list-media">
                <img loading="lazy" src="/images/blog/marketing-sustainability.jpg" alt="Why Sustainability Is Becoming a Marketing Advantage in Manufacturing"/>
              </a>
              <div>
                <div className="news-list-tags">
                  <span className="tag">Press Release</span>
                </div>
                <a href="/news/sustainability-marketing-advantage" className="news-list-title">
                  <h3>Why Sustainability Is Becoming a Marketing Advantage in Manufacturing</h3>
                </a>
                <p>Sustainability used to be something that lived behind the scenes. Today, it has moved to the forefront of decision-making for manufacturers and the clients they serve.</p>
                <a href="/news/sustainability-marketing-advantage" className="news-list-readmore">Read more
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="14" height="14"><path d="M5 12h14M13 6l6 6-6 6"/></svg>
                </a>
              </div>
            </article>
          </div>
        </section>
    </>
  );
}

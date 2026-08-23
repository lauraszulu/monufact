export const metadata = {
  title: 'Page Not Found - Monufact',
};

export default function NotFound() {
  return (
    <section className="error-hero">
      <div className="container">
        <div>
          <span className="error-code">404</span>
          <h1>Looks Like This Page Took a Detour.</h1>
          <p>We can't find the page you're looking for. Try searching for what you need, or head back to the homepage.</p>
          <form className="error-search" id="errorSearchForm">
            <input type="text" placeholder="Search..." aria-label="Search" />
            <button type="submit" aria-label="Search">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="11" cy="11" r="7" /><path d="m21 21-4.3-4.3" /></svg>
            </button>
          </form>
        </div>
        <div className="error-media">
          <img loading="lazy" src="/images/industrial-innovation.svg" alt="Steel I-beam illustration" className="rotate-img" />
        </div>
      </div>
    </section>
  );
}

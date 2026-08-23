export const metadata = {
  title: "Our People - Monufact",
  description: "Meet the team behind Monufact's digital marketing and industrial communications work.",
};

export default function Page() {
  return (
    <>
      {/* Service hero */}
        <section className="service-hero">
          <div className="container">
            <span className="eyebrow">/ Company</span>
            <h1>People</h1>
            <p className="service-intro">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua ut enim ad minim veniam.</p>
          </div>
        </section>

        {/* Service detail */}
        <section className="section">
          <div className="container">
            <div className="service-features">
              <div>
                <h4>Lorem Ipsum</h4>
                <p>Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore.</p>
              </div>
              <div>
                <h4>Dolor Sit Amet</h4>
                <p>Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore.</p>
              </div>
              <div>
                <h4>Consectetur Elit</h4>
                <p>Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Image banner */}
        <section className="image-banner">
          <img loading="lazy" src="https://picsum.photos/seed/monufact-people/1600/700" alt="People"/>
          <span className="eyebrow overlay-label">/ Lorem Ipsum</span>
          <a href="/#contact" className="btn btn-dark overlay-cta">Contact us
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M13 6l6 6-6 6"/></svg>
          </a>
        </section>

        {/* Split CTA */}
        <section className="split-cta">
          <div className="split-cta-left" style={{backgroundImage: "url('https://picsum.photos/seed/monufact-people-cta/900/900')"}}>
            <div className="split-icon">⬡</div>
            <div className="split-caption">
              <h4>Lorem Ipsum Supports</h4>
              <p>For all types of equipment.</p>
            </div>
          </div>
          <div className="split-cta-right">
            <span className="eyebrow">/ Get to know us</span>
            <div>
              <h2>The Digital Partner for Industrial Business.</h2>
              <p>Monufact is a digital marketing agency based in London, Ontario, specializing in supporting manufacturers and industrial companies as they adapt to a digital-first market.</p>
            </div>
            <a href="/#contact" className="btn btn-dark">Contact us
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M13 6l6 6-6 6"/></svg>
            </a>
          </div>
        </section>
    </>
  );
}

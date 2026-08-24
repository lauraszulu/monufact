import StartForm from '@/components/StartForm';

export const metadata = {
  title: "Become a Customer - Get Started with Monufact",
  description: "Ready to work with Monufact? Tell us about your project, budget, and goals, and our team will follow up to build a plan tailored to your business.",
  openGraph: {
    title: "Become a Customer - Get Started with Monufact",
    description: "Ready to work with Monufact? Tell us about your project, budget, and goals, and our team will follow up to build a plan tailored to your business.",
    url: "/company/become-a-customer",
    siteName: "Monufact",
    images: ["/images/about/monufact-about-hero.jpg"],
    locale: "en_CA",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Become a Customer - Get Started with Monufact",
    description: "Ready to work with Monufact? Tell us about your project, budget, and goals, and our team will follow up to build a plan tailored to your business.",
    images: ["/images/about/monufact-about-hero.jpg"],
  },
};

export default function Page() {
  return (
    <>
      {/* Become a Customer hero */}
        <section className="service-hero">
          <div className="container">
            <span className="eyebrow">/ Company</span>
            <h1>Become a Customer</h1>
            <p className="service-intro">Here's what it looks like to start working with us, from the first conversation to full onboarding.</p>
          </div>
        </section>

        {/* Process steps */}
        <section className="section">
          <div className="container">
            <h3 className="process-heading">How it works</h3>
            <div className="process-steps">
              <div className="process-step">
                <span className="step-number">01</span>
                <h4>Reach Out</h4>
                <p>Tell us where you're stuck: a website that undersells you, a sales team without the materials, a brand that doesn't match the work. We'll tell you honestly if we're the right fit.</p>
              </div>
              <div className="process-step">
                <span className="step-number">02</span>
                <h4>Discovery Call</h4>
                <p>A short call to understand your business, your buyers, and what's actually getting in the way of growth. No pitch deck, no pressure.</p>
              </div>
              <div className="process-step">
                <span className="step-number">03</span>
                <h4>Proposal</h4>
                <p>A clear scope, timeline, and investment built around what you actually need. You'll know exactly what you're getting before you sign anything.</p>
              </div>
              <div className="process-step">
                <span className="step-number">04</span>
                <h4>Onboarding</h4>
                <p>We get access to what we need, meet your team, and start work within the first two weeks. No long ramp-up, no wasted quarter.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Image banner */}
        <section className="image-banner">
          <img loading="lazy" src="/images/services/monufact-about-hero.jpg" alt="The Monufact logo displayed in the office"/>
          <span className="eyebrow overlay-label">/ Get Started</span>
          <div className="overlay-cta-group">
            <a href="/company/contact" className="btn btn-dark overlay-cta">Contact us
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M13 6l6 6-6 6"/></svg>
            </a>
            <div className="overlay-cta-accent"></div>
          </div>
        </section>

        {/* Get started form */}
        <section className="section">
          <div className="container">
            <span className="eyebrow">/ Ready when you are</span>
            <h2>Tell us about your project.</h2>
            <p className="service-intro">The more we know up front, the faster we can put together a plan that fits your budget and timeline.</p>
            <StartForm />
          </div>
        </section>
    </>
  );
}

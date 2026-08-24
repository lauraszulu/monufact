export default function Header() {
  return (
    <header className="site-header">
      <div className="container header-inner">
        <a href="/" className="logo"><img src="/images/monufact-logo.svg" alt="Monufact" className="logo-img" /></a>
        <nav className="main-nav" id="mainNav">
          <div className="nav-item">
            <a href="/">Company</a>
            <div className="mega-menu">
              <div className="container mega-menu-inner">
                <div className="mega-menu-intro">
                  <h3>The Team Behind the Work.</h3>
                </div>
                <div className="mega-menu-links">
                  <ul>
                    <li><a href="/company/about">About</a></li>
                    <li><a href="/company/contact">Contact</a></li>
                    <li><a href="/company/become-a-customer">Become a Customer</a></li>
                  </ul>
                </div>
                <div className="mega-menu-media" style={{ backgroundImage: "url('/images/services/performance-marketing.webp')" }}>
                  <a href="/company/contact" className="btn btn-dark mega-cta">Contact Us
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M13 6l6 6-6 6" /></svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="nav-item">
            <a href="/#solutions">Services</a>
            <div className="mega-menu">
              <div className="container mega-menu-inner">
                <div className="mega-menu-intro">
                  <h3>Everything It Takes to Get Chosen.</h3>
                </div>
                <div className="mega-menu-links">
                  <ul>
                    <li><a href="/services/brand-strategy-positioning">Brand Strategy &amp; Positioning</a></li>
                    <li><a href="/services/performance-marketing">Performance Marketing</a></li>
                    <li><a href="/services/digital-sales-assets">Digital Sales Assets</a></li>
                  </ul>
                  <ul>
                    <li><a href="/services/print-marketing-sales-collateral">Print Marketing &amp; Sales Collateral</a></li>
                    <li><a href="/services/trade-show-event-materials">Trade Show &amp; Event Materials</a></li>
                    <li><a href="/services/content-technical-communication">Content &amp; Technical Communication</a></li>
                  </ul>
                  <ul>
                    <li><a href="/services/digital-marketing">Digital Marketing</a></li>
                    <li><a href="/services/website-design-development">Website Design &amp; Development</a></li>
                  </ul>
                </div>
                <div className="mega-menu-media" style={{ backgroundImage: "url('/images/services/trade-show-event-materials.webp')" }}>
                  <a href="/company/become-a-customer" className="btn btn-dark mega-cta">Become a Customer
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M13 6l6 6-6 6" /></svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <a href="/news">News</a>
          <a href="/company/faq">FAQ</a>
        </nav>
        <div className="header-actions">
          <a href="/company/become-a-customer" className="btn btn-dark">Become a Customer</a>
          <button className="nav-toggle" id="navToggle" aria-label="Toggle menu">
            <span></span><span></span><span></span>
          </button>
        </div>
      </div>
    </header>
  );
}

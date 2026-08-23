export const metadata = {
  title: "Frequently Asked Questions - Monufact",
  description: "Answers to common questions about working with Monufact: our process, payment terms, service breakdowns, and project workflow.",
};

export default function Page() {
  return (
    <>
      {/* FAQ hero */}
        <section className="service-hero">
          <div className="container">
            <span className="eyebrow">/ Company</span>
            <h1>Frequently Asked Questions</h1>
            <p className="service-intro">Answers to the questions we hear most about our process, pricing, and what it's like to work with us. Can't find what you're looking for? <a href="/company/contact">Get in touch</a>.</p>
          </div>
        </section>

        {/* FAQ categories */}
        <section className="section faq-section">
          <div className="container faq-layout">

            <div className="faq-category">
              <h3>Our Process & Getting Started</h3>
              <div className="accordion faq-accordion">
                <div className="accordion-item">
                  <button className="accordion-trigger" type="button">How do I get started working with Monufact?
                    <span className="plus"></span>
                  </button>
                  <div className="accordion-panel">
                    <p>Reach out through our contact form or the Become a Customer page. We'll schedule a discovery call to learn about your business, review your goals, and outline next steps before any work begins.</p>
                  </div>
                </div>
                <div className="accordion-item">
                  <button className="accordion-trigger" type="button">What happens during the discovery call?
                    <span className="plus"></span>
                  </button>
                  <div className="accordion-panel">
                    <p>We ask about your current marketing, target audience, competitors, and goals. This helps us recommend the right services and put together an accurate proposal and timeline.</p>
                  </div>
                </div>
                <div className="accordion-item">
                  <button className="accordion-trigger" type="button">How long does onboarding take?
                    <span className="plus"></span>
                  </button>
                  <div className="accordion-panel">
                    <p>Most projects begin within one to two weeks of signing, depending on scope. Larger engagements, like full website builds, may need additional discovery time before kickoff.</p>
                  </div>
                </div>
                <div className="accordion-item">
                  <button className="accordion-trigger" type="button">Do you work with companies outside of steel and manufacturing?
                    <span className="plus"></span>
                  </button>
                  <div className="accordion-panel">
                    <p>Our core focus is manufacturers, fabricators, and industrial suppliers, but we also work with adjacent industries like construction, architecture, and industrial technology.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="faq-category">
              <h3>Payment & Billing</h3>
              <div className="accordion faq-accordion">
                <div className="accordion-item">
                  <button className="accordion-trigger" type="button">What are your payment terms?
                    <span className="plus"></span>
                  </button>
                  <div className="accordion-panel">
                    <p>Project-based work is typically billed 50% upfront and 50% on completion, as outlined in your signed proposal. Ongoing retainers are billed monthly, in advance.</p>
                  </div>
                </div>
                <div className="accordion-item">
                  <button className="accordion-trigger" type="button">Do you require a long-term contract?
                    <span className="plus"></span>
                  </button>
                  <div className="accordion-panel">
                    <p>Retainer services are structured on a month-to-month basis after an initial three-month minimum, giving both sides room to evaluate fit without a long lock-in.</p>
                  </div>
                </div>
                <div className="accordion-item">
                  <button className="accordion-trigger" type="button">What payment methods do you accept?
                    <span className="plus"></span>
                  </button>
                  <div className="accordion-panel">
                    <p>We accept e-transfer, credit card, and direct bank transfer. Invoices are sent electronically with clear due dates.</p>
                  </div>
                </div>
                <div className="accordion-item">
                  <button className="accordion-trigger" type="button">Are there any hidden fees?
                    <span className="plus"></span>
                  </button>
                  <div className="accordion-panel">
                    <p>No. Every proposal outlines exactly what's included. Any work outside the agreed scope is quoted separately before we proceed, so there are no surprise charges.</p>
                  </div>
                </div>
                <div className="accordion-item">
                  <button className="accordion-trigger" type="button">Can I finance my project instead of paying upfront?
                    <span className="plus"></span>
                  </button>
                  <div className="accordion-panel">
                    <p>Yes, eligible projects can be financed over up to three months. Payment plans are credit card only, and by signing up you're agreeing to be charged automatically on your card every month until the project is paid off.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="faq-category">
              <h3>Service Breakdown</h3>
              <div className="accordion faq-accordion">
                <div className="accordion-item">
                  <button className="accordion-trigger" type="button">What's included in Brand Strategy & Positioning?
                    <span className="plus"></span>
                  </button>
                  <div className="accordion-panel">
                    <p>Market and competitive analysis, brand messaging, visual identity systems, and positioning strategy built to resonate with technical buyers.</p>
                  </div>
                </div>
                <div className="accordion-item">
                  <button className="accordion-trigger" type="button">What's the difference between Performance Marketing and Digital Marketing?
                    <span className="plus"></span>
                  </button>
                  <div className="accordion-panel">
                    <p>Performance Marketing focuses on paid campaign execution and optimization, while Digital Marketing is broader, covering SEO, email, automation, and analytics alongside paid media.</p>
                  </div>
                </div>
                <div className="accordion-item">
                  <button className="accordion-trigger" type="button">Do you build websites, or just market them?
                    <span className="plus"></span>
                  </button>
                  <div className="accordion-panel">
                    <p>Both. Our Website Design & Development service covers everything from UX strategy and design through development, launch, and ongoing support.</p>
                  </div>
                </div>
                <div className="accordion-item">
                  <button className="accordion-trigger" type="button">Can I purchase a single service, or do I need a full package?
                    <span className="plus"></span>
                  </button>
                  <div className="accordion-panel">
                    <p>Either. Many clients start with one service, like Brand Strategy or Digital Sales Assets, and expand into a broader engagement once we've demonstrated results.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="faq-category">
              <h3>Working With Us</h3>
              <div className="accordion faq-accordion">
                <div className="accordion-item">
                  <button className="accordion-trigger" type="button">How involved do I need to be during a project?
                    <span className="plus"></span>
                  </button>
                  <div className="accordion-panel">
                    <p>As involved as you'd like. We typically need input during discovery, milestone reviews, and final approval, but we handle day-to-day execution so your team can stay focused on the business.</p>
                  </div>
                </div>
                <div className="accordion-item">
                  <button className="accordion-trigger" type="button">How do you communicate project updates?
                    <span className="plus"></span>
                  </button>
                  <div className="accordion-panel">
                    <p>Most clients receive regular email updates and scheduled check-in calls. For ongoing retainers, we also provide monthly performance reporting.</p>
                  </div>
                </div>
                <div className="accordion-item">
                  <button className="accordion-trigger" type="button">What if I'm not happy with the work?
                    <span className="plus"></span>
                  </button>
                  <div className="accordion-panel">
                    <p>Every deliverable includes a revision round built into the proposal. We work collaboratively through feedback until the work meets the agreed brief.</p>
                  </div>
                </div>
                <div className="accordion-item">
                  <button className="accordion-trigger" type="button">Can I cancel an ongoing service?
                    <span className="plus"></span>
                  </button>
                  <div className="accordion-panel">
                    <p>Yes. Retainer services can be canceled with 30 days' written notice after the initial minimum term.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="faq-category">
              <h3>Referral Program</h3>
              <div className="accordion faq-accordion">
                <div className="accordion-item">
                  <button className="accordion-trigger" type="button">Do you have a referral program?
                    <span className="plus"></span>
                  </button>
                  <div className="accordion-panel">
                    <p>Yes. If you refer a manufacturer or industrial company that signs on with us, you get paid: up to $1,500 on signed retainers, or 10% on one-time projects. See our <a href="/company/refer-a-client">Referral Partner Program page</a> for full details and to submit a referral.</p>
                  </div>
                </div>
                <div className="accordion-item">
                  <button className="accordion-trigger" type="button">Who's eligible to refer someone?
                    <span className="plus"></span>
                  </button>
                  <div className="accordion-panel">
                    <p>Past and current clients, industry contacts like trade show suppliers, printers, associations, and consultants, and anyone in your personal or professional network. Monufact employees and contractors aren't eligible, and neither are leads already in our pipeline.</p>
                  </div>
                </div>
                <div className="accordion-item">
                  <button className="accordion-trigger" type="button">When and how do I get paid for a referral?
                    <span className="plus"></span>
                  </button>
                  <div className="accordion-panel">
                    <p>Retainer referrals are paid in two installments: when the client signs and pays their first invoice, and again once they've been active for 90 days. One-time project referrals are paid a flat 10% once the work is delivered and paid. Payments go out by e-transfer within 15 business days of each milestone.</p>
                  </div>
                </div>
                <div className="accordion-item">
                  <button className="accordion-trigger" type="button">Is there a limit on how much I can earn?
                    <span className="plus"></span>
                  </button>
                  <div className="accordion-panel">
                    <p>No cap. Refer as many clients as you'd like. If you're also a Monufact client, you can apply your reward as account credit toward your own retainer instead of taking it as cash.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="faq-category">
              <h3>General</h3>
              <div className="accordion faq-accordion">
                <div className="accordion-item">
                  <button className="accordion-trigger" type="button">Where is Monufact located?
                    <span className="plus"></span>
                  </button>
                  <div className="accordion-panel">
                    <p>We're based in London, Ontario, Canada, and work with manufacturers and industrial companies across Canada and the U.S.</p>
                  </div>
                </div>
                <div className="accordion-item">
                  <button className="accordion-trigger" type="button">Do you only work with large companies?
                    <span className="plus"></span>
                  </button>
                  <div className="accordion-panel">
                    <p>No. We work with manufacturers of all sizes, from small fabrication shops to established industrial suppliers, and tailor our approach to fit your budget and goals.</p>
                  </div>
                </div>
                <div className="accordion-item">
                  <button className="accordion-trigger" type="button">How do I reach support after a project is complete?
                    <span className="plus"></span>
                  </button>
                  <div className="accordion-panel">
                    <p>Reach out any time through our Contact page or your project email thread. Ongoing clients also have a direct point of contact for faster turnaround.</p>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </section>

        {/* CTA */}
        <section className="cta-banner">
          <div className="container">
            <span className="eyebrow">/ Still have questions?</span>
            <h2>Let's Talk About Your Project.</h2>
            <p>If you didn't find the answer you were looking for, our team is happy to walk through your specific goals, timeline, and budget.</p>
            <a href="/company/contact" className="btn btn-dark">Contact us
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M13 6l6 6-6 6"/></svg>
            </a>
          </div>
        </section>
    </>
  );
}

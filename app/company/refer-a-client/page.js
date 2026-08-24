import ReferralForm from '@/components/ReferralForm';

export const metadata = {
  title: "Refer a Client, Get Rewarded - Monufact Referral Program",
  description: "Know a manufacturer or industrial company that needs marketing help? Refer them to Monufact and earn up to $1,500 on signed retainers, or 10% on one-time projects.",
  openGraph: {
    title: "Refer a Client, Get Rewarded - Monufact Referral Program",
    description: "Know a manufacturer or industrial company that needs marketing help? Refer them to Monufact and earn up to $1,500 on signed retainers, or 10% on one-time projects.",
    url: "/company/refer-a-client",
    siteName: "Monufact",
    images: ["/images/about/monufact-about-hero.jpg"],
    locale: "en_CA",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Refer a Client, Get Rewarded - Monufact Referral Program",
    description: "Know a manufacturer or industrial company that needs marketing help? Refer them to Monufact and earn up to $1,500 on signed retainers, or 10% on one-time projects.",
    images: ["/images/about/monufact-about-hero.jpg"],
  },
  robots: "noindex, nofollow",
};

export default function Page() {
  return (
    <>
      {/* Hero */}
        <section className="service-hero">
          <div className="container">
            <span className="eyebrow">/ Company</span>
            <h1>Refer a Client, Get Rewarded</h1>
            <p className="service-intro">Know a manufacturer or industrial company that needs help getting found, understood, or chosen? Introduce us. If they sign on, you get paid.</p>
          </div>
        </section>

        {/* Eligibility */}
        <section className="section">
          <div className="container">
            <span className="eyebrow">/ Eligibility</span>
            <h2>Who qualifies</h2>
            <ul className="eligibility-list">
              <li>Past and current Monufact clients.</li>
              <li>Industry contacts: trade show suppliers, printers, associations, consultants, and other non-competing agencies.</li>
              <li>Anyone in your personal or professional network who knows a manufacturer or industrial company that needs marketing help.</li>
            </ul>
            <p className="eligibility-note"><strong>Not eligible:</strong> Monufact employees or contractors (a separate internal spiff can be set up if wanted), and leads already in our active pipeline or that came through our own outbound efforts.</p>
          </div>
        </section>

        {/* How it works */}
        <section className="section">
          <div className="container">
            <h3>How it works</h3>
            <div className="process-steps">
              <div className="process-step">
                <span className="step-number">01</span>
                <h4>Introduce</h4>
                <p>Email us the company name and a contact, or have them mention your name on our intake form.</p>
              </div>
              <div className="process-step">
                <span className="step-number">02</span>
                <h4>We Take It From There</h4>
                <p>We run discovery and send a proposal, the same process as any inbound lead.</p>
              </div>
              <div className="process-step">
                <span className="step-number">03</span>
                <h4>Client Signs</h4>
                <p>If they sign a retainer agreement, your reward is set based on their monthly plan.</p>
              </div>
              <div className="process-step">
                <span className="step-number">04</span>
                <h4>Get Paid</h4>
                <p>Reward is paid in two installments, so it rewards clients who stick, not just signatures.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Reward structure */}
        <section className="section">
          <div className="container">
            <span className="eyebrow">/ Reward Structure</span>
            <h2>What you'll earn</h2>
            <p className="service-intro">Rewards scale with the referred client's monthly retainer, split across two milestones: when the contract is signed and first invoice paid, and again once the client has been active and paying for 90 days. One-time projects are simpler: a flat 10% once the work is delivered and paid.</p>

            <div className="reward-table-wrap">
              <table className="reward-table">
                <thead>
                  <tr>
                    <th>Client's monthly retainer</th>
                    <th>On signed contract</th>
                    <th>At 90 days active</th>
                    <th>Total reward</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>One-time projects</td>
                    <td colSpan="3" className="reward-note-cell"><span className="reward-total">10%</span> of project value, paid in full once the project is complete</td>
                  </tr>
                  <tr>
                    <td>Under $2,500/mo</td>
                    <td>$125</td>
                    <td>$125</td>
                    <td className="reward-total">$250</td>
                  </tr>
                  <tr>
                    <td>$2,500 – $5,000/mo</td>
                    <td>$250</td>
                    <td>$250</td>
                    <td className="reward-total">$500</td>
                  </tr>
                  <tr>
                    <td>$5,000 – $10,000/mo</td>
                    <td>$500</td>
                    <td>$500</td>
                    <td className="reward-total">$1,000</td>
                  </tr>
                  <tr>
                    <td>$10,000+/mo</td>
                    <td>$750</td>
                    <td>$750</td>
                    <td className="reward-total">$1,500</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="reward-note">No cap on how many clients you can refer or how much you can earn. Prefer credit instead of cash? Referrers who are also Monufact clients can apply their reward as account credit toward their own retainer at the same value.</p>
          </div>
        </section>

        {/* Fine print */}
        <section className="dark-section section">
          <div className="container">
            <div className="grid-2">
              <div className="dark-content">
                <span className="eyebrow">/ Fine Print</span>
                <h2>Payout terms</h2>
              </div>
              <ul className="terms-list">
                <li>Payment sent by e-transfer within 15 business days of each milestone.</li>
                <li>If the referred client cancels or pauses before the 90-day mark, only the first installment has been paid. No clawback.</li>
                <li>Referral must be documented (email intro or named on the intake form) before the first discovery call. We can't credit a referral after the fact.</li>
                <li>One reward per referred company, regardless of how many services they sign up for initially.</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Referral form */}
        <section className="section" id="refer-form">
          <div className="container">
            <span className="eyebrow">/ Ready to refer someone?</span>
            <h2>Submit a referral.</h2>
            <p className="service-intro">Tell us about them and we'll take it from there. You'll hear back once we've made contact.</p>
            <ReferralForm />
          </div>
        </section>
    </>
  );
}

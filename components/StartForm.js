'use client';

import { useActionState, useEffect, useRef } from 'react';
import { useFormStatus } from 'react-dom';
import { submitStartForm } from '@/app/company/become-a-customer/actions';
import { useRecaptchaSubmit } from '@/lib/useRecaptchaSubmit';

const initialState = { ok: false, error: null, message: null };

const SERVICES = [
  'Brand Strategy & Positioning',
  'Performance Marketing',
  'Digital Sales Assets',
  'Print Marketing & Sales Collateral',
  'Trade Show & Event Materials',
  'Content & Technical Communication',
];

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <button type="submit" className="btn btn-dark" disabled={pending}>
      {pending ? 'Sending…' : 'Get started'}
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M13 6l6 6-6 6" /></svg>
    </button>
  );
}

export default function StartForm() {
  const [state, formAction] = useActionState(submitStartForm, initialState);
  const formRef = useRef(null);
  const { tokenInputRef } = useRecaptchaSubmit();

  useEffect(() => {
    if (state.ok) formRef.current?.reset();
  }, [state]);

  return (
    <form className="contact-form-fields start-form" id="startForm" ref={formRef} action={formAction}>
      <input type="hidden" name="g-recaptcha-response" ref={tokenInputRef} />
      <input
        type="text"
        name="_hp"
        tabIndex="-1"
        autoComplete="off"
        style={{ position: 'absolute', left: '-9999px', width: '1px', height: '1px', overflow: 'hidden' }}
        aria-hidden="true"
      />
      <div className="form-row">
        <div>
          <label htmlFor="sf-first-name">First name</label>
          <input type="text" id="sf-first-name" name="first_name" required />
        </div>
        <div>
          <label htmlFor="sf-last-name">Last name</label>
          <input type="text" id="sf-last-name" name="last_name" required />
        </div>
      </div>
      <div className="form-row">
        <div>
          <label htmlFor="sf-email">Email address</label>
          <input type="email" id="sf-email" name="email" required />
        </div>
        <div>
          <label htmlFor="sf-phone">Phone number</label>
          <input type="tel" id="sf-phone" name="phone" />
        </div>
      </div>
      <div>
        <label htmlFor="sf-company">Company name</label>
        <input type="text" id="sf-company" name="company_name" required />
      </div>
      <div>
        <label>Which services are you interested in?</label>
        <div className="checkbox-group">
          {SERVICES.map((service) => (
            <label className="checkbox-item" key={service}>
              <input type="checkbox" name="services" value={service} /> {service}
            </label>
          ))}
        </div>
      </div>
      <div className="form-row">
        <div>
          <label htmlFor="sf-budget">Monthly budget</label>
          <select id="sf-budget" name="budget" required defaultValue="">
            <option value="" disabled>Select a range</option>
            <option value="Under $2,500/month">Under $2,500/month</option>
            <option value="$2,500 – $5,000/month">$2,500 – $5,000/month</option>
            <option value="$5,000 – $10,000/month">$5,000 – $10,000/month</option>
            <option value="$10,000+/month">$10,000+/month</option>
          </select>
        </div>
        <div>
          <label htmlFor="sf-timeline">When are you looking to get started?</label>
          <select id="sf-timeline" name="timeline" required defaultValue="">
            <option value="" disabled>Select a timeline</option>
            <option value="Immediately">Immediately</option>
            <option value="Within 1 month">Within 1 month</option>
            <option value="1–3 months">1–3 months</option>
            <option value="Just exploring">Just exploring</option>
          </select>
        </div>
      </div>
      <div>
        <label htmlFor="sf-goals">What are you hoping to achieve?</label>
        <textarea id="sf-goals" name="goals" placeholder="Tell us about your goals and expectations"></textarea>
      </div>
      <SubmitButton />
      <p className="contact-form-note" id="startFormNote">
        {state.ok ? state.message : state.error}
      </p>
    </form>
  );
}

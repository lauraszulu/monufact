'use client';

import { useActionState, useEffect, useRef } from 'react';
import { useFormStatus } from 'react-dom';
import { submitContactForm } from '@/app/company/contact/actions';
import { useRecaptchaSubmit } from '@/lib/useRecaptchaSubmit';

const initialState = { ok: false, error: null, message: null };

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <button type="submit" className="btn btn-dark" disabled={pending}>
      {pending ? 'Sending…' : 'Submit'}
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M13 6l6 6-6 6" /></svg>
    </button>
  );
}

export default function ContactForm() {
  const [state, formAction] = useActionState(submitContactForm, initialState);
  const formRef = useRef(null);
  const { tokenInputRef } = useRecaptchaSubmit();

  useEffect(() => {
    if (state.ok) formRef.current?.reset();
  }, [state]);

  return (
    <form className="contact-form-fields" id="contactForm" ref={formRef} action={formAction}>
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
          <label htmlFor="cf-first-name">First name</label>
          <input type="text" id="cf-first-name" name="first_name" required />
        </div>
        <div>
          <label htmlFor="cf-last-name">Last name</label>
          <input type="text" id="cf-last-name" name="last_name" required />
        </div>
      </div>
      <div className="form-row">
        <div>
          <label htmlFor="cf-email">Email address</label>
          <input type="email" id="cf-email" name="email" required />
        </div>
        <div>
          <label htmlFor="cf-phone">Phone number</label>
          <input type="tel" id="cf-phone" name="phone" required />
        </div>
      </div>
      <div className="form-row">
        <div>
          <label htmlFor="cf-company-name">Company name</label>
          <input type="text" id="cf-company-name" name="company_name" required />
        </div>
        <div>
          <label htmlFor="cf-company-address">Company address</label>
          <input type="text" id="cf-company-address" name="company_address" required />
        </div>
      </div>
      <div>
        <label htmlFor="cf-message">Comments/Questions</label>
        <textarea id="cf-message" name="message" required></textarea>
      </div>
      <SubmitButton />
      <p className="contact-form-note" id="contactFormNote">
        {state.ok ? state.message : state.error}
      </p>
    </form>
  );
}

'use client';

import { useActionState, useEffect, useRef } from 'react';
import { useFormStatus } from 'react-dom';
import { submitReferralForm } from '@/app/company/refer-a-client/actions';

const initialState = { ok: false, error: null, message: null };

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <button type="submit" className="btn btn-dark" disabled={pending}>
      {pending ? 'Sending…' : 'Submit referral'}
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M13 6l6 6-6 6" /></svg>
    </button>
  );
}

export default function ReferralForm() {
  const [state, formAction] = useActionState(submitReferralForm, initialState);
  const formRef = useRef(null);

  useEffect(() => {
    if (state.ok) formRef.current?.reset();
  }, [state]);

  return (
    <form className="contact-form-fields start-form" id="referralForm" ref={formRef} action={formAction}>
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
          <label htmlFor="rf-your-name">Your name</label>
          <input type="text" id="rf-your-name" name="referrer_name" required />
        </div>
        <div>
          <label htmlFor="rf-your-email">Your email</label>
          <input type="email" id="rf-your-email" name="referrer_email" required />
        </div>
      </div>
      <div className="form-row">
        <div>
          <label htmlFor="rf-your-phone">Your phone number</label>
          <input type="tel" id="rf-your-phone" name="referrer_phone" />
        </div>
        <div>
          <label htmlFor="rf-relationship">How do you know them?</label>
          <select id="rf-relationship" name="relationship" required defaultValue="">
            <option value="" disabled>Select one</option>
            <option value="Current or past client">Current or past client</option>
            <option value="Industry contact / supplier">Industry contact / supplier</option>
            <option value="Personal or professional network">Personal or professional network</option>
            <option value="Other">Other</option>
          </select>
        </div>
      </div>
      <div>
        <label htmlFor="rf-company">Company you&apos;re referring</label>
        <input type="text" id="rf-company" name="referred_company" required />
      </div>
      <div className="form-row">
        <div>
          <label htmlFor="rf-contact-name">Contact name</label>
          <input type="text" id="rf-contact-name" name="referred_contact_name" required />
        </div>
        <div>
          <label htmlFor="rf-contact-email">Contact email or phone</label>
          <input type="text" id="rf-contact-email" name="referred_contact_info" required />
        </div>
      </div>
      <div>
        <label htmlFor="rf-notes">Anything else we should know?</label>
        <textarea id="rf-notes" name="notes" placeholder="What do they need help with, and why are they a fit?"></textarea>
      </div>
      <label className="checkbox-item">
        <input type="checkbox" id="rf-terms" name="agree_terms" required /> I agree to the{' '}
        <a href="/company/terms-conditions#referral-program">Terms &amp; Conditions</a>, including the Referral Partner
        Program terms above.
      </label>
      <SubmitButton />
      <p className="contact-form-note" id="referralFormNote">
        {state.ok ? state.message : state.error}
      </p>
    </form>
  );
}

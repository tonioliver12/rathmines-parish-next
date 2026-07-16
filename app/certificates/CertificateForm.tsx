"use client";

import { useActionState } from "react";
import { useFormStatus } from "react-dom";
import { submitCertificateRequest, type CertificateState } from "./actions";
import styles from "../components/RequestForm.module.css";

const initialState: CertificateState = {
  status: "idle",
  message: "",
  errors: {},
};

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <button className={styles.submitBtn} type="submit" disabled={pending}>
      {pending ? "Sending…" : "Send request →"}
    </button>
  );
}

export default function CertificateForm() {
  const [state, formAction] = useActionState(
    submitCertificateRequest,
    initialState,
  );

  if (state.status === "success") {
    return (
      <div className={styles.successBox}>
        <h3>Request received</h3>
        <p>{state.message}</p>
      </div>
    );
  }

  return (
    <form action={formAction} className={styles.form}>
      <div className={styles.field}>
        <label htmlFor="cert-name">Full name (as recorded)</label>
        <input type="text" id="cert-name" name="cert-name" required />
        {state.errors.certName ? (
          <p className={styles.fieldError}>{state.errors.certName}</p>
        ) : null}
      </div>
      <div className={styles.fieldRow}>
        <div className={styles.field}>
          <label htmlFor="cert-type">Certificate needed</label>
          <select id="cert-type" name="cert-type" defaultValue="Baptism">
            <option>Baptism</option>
            <option>First Communion</option>
            <option>Confirmation</option>
            <option>Marriage</option>
          </select>
        </div>
        <div className={styles.field}>
          <label htmlFor="cert-date">Approximate date of sacrament</label>
          <input type="date" id="cert-date" name="cert-date" />
        </div>
      </div>
      <div className={styles.field}>
        <label htmlFor="cert-reason">Reason for request (optional)</label>
        <input
          type="text"
          id="cert-reason"
          name="cert-reason"
          placeholder="e.g. marriage preparation, Confirmation"
        />
      </div>
      <div className={styles.fieldRow}>
        <div className={styles.field}>
          <label htmlFor="cert-email">Email</label>
          <input type="email" id="cert-email" name="cert-email" required />
          {state.errors.certEmail ? (
            <p className={styles.fieldError}>{state.errors.certEmail}</p>
          ) : null}
        </div>
        <div className={styles.field}>
          <label htmlFor="cert-phone">Phone</label>
          <input type="tel" id="cert-phone" name="cert-phone" />
        </div>
      </div>

      {state.status === "error" ? (
        <p className={styles.formError}>{state.message}</p>
      ) : null}

      <SubmitButton />
      <p className={styles.formNote}>
        Your request is sent directly to the parish office — no email app
        required. We&apos;ll confirm collection or postage.
      </p>
    </form>
  );
}

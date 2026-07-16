"use client";

import { useActionState } from "react";
import { useFormStatus } from "react-dom";
import { submitMassIntention, type MassIntentionState } from "./actions";
import styles from "../components/RequestForm.module.css";

const initialState: MassIntentionState = {
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

export default function MassIntentionForm() {
  const [state, formAction] = useActionState(
    submitMassIntention,
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
        <label htmlFor="requestor">Your name</label>
        <input type="text" id="requestor" name="requestor" required />
        {state.errors.requestor ? (
          <p className={styles.fieldError}>{state.errors.requestor}</p>
        ) : null}
      </div>
      <div className={styles.fieldRow}>
        <div className={styles.field}>
          <label htmlFor="email">Email</label>
          <input type="email" id="email" name="email" required />
          {state.errors.email ? (
            <p className={styles.fieldError}>{state.errors.email}</p>
          ) : null}
        </div>
        <div className={styles.field}>
          <label htmlFor="phone">Phone</label>
          <input type="tel" id="phone" name="phone" />
        </div>
      </div>
      <div className={styles.field}>
        <label htmlFor="intention-type">This Mass is offered</label>
        <select id="intention-type" name="intention-type" defaultValue="In memory of a deceased loved one">
          <option>In memory of a deceased loved one</option>
          <option>For the intentions of someone living</option>
          <option>In thanksgiving</option>
          <option>For a special occasion (birthday, anniversary)</option>
        </select>
      </div>
      <div className={styles.field}>
        <label htmlFor="intention-name">Name(s) to be remembered</label>
        <input type="text" id="intention-name" name="intention-name" required />
        {state.errors.intentionName ? (
          <p className={styles.fieldError}>{state.errors.intentionName}</p>
        ) : null}
      </div>
      <div className={styles.field}>
        <label htmlFor="preferred-date">
          Preferred date (we&apos;ll confirm or suggest an alternative)
        </label>
        <input type="date" id="preferred-date" name="preferred-date" />
      </div>
      <div className={styles.field}>
        <label htmlFor="notes">Anything else we should know</label>
        <textarea id="notes" name="notes" />
      </div>

      {state.status === "error" ? (
        <p className={styles.formError}>{state.message}</p>
      ) : null}

      <SubmitButton />
      <p className={styles.formNote}>
        Your request is sent directly to the parish office — no email app
        required. We&apos;ll confirm your date by return.
      </p>
    </form>
  );
}

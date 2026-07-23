"use server";

import { appendSubmission } from "@/lib/submissions";
import { sendNotificationEmail } from "@/lib/email";

export type MassIntentionState = {
  status: "idle" | "success" | "error";
  message: string;
  errors: Partial<Record<"requestor" | "email" | "intentionName", string>>;
};

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function submitMassIntention(
  _prevState: MassIntentionState,
  formData: FormData,
): Promise<MassIntentionState> {
  const requestor = String(formData.get("requestor") ?? "").trim();
  const email = String(formData.get("email") ?? "").trim();
  const phone = String(formData.get("phone") ?? "").trim();
  const intentionType = String(formData.get("intention-type") ?? "").trim();
  const intentionName = String(formData.get("intention-name") ?? "").trim();
  const preferredDate = String(formData.get("preferred-date") ?? "").trim();
  const notes = String(formData.get("notes") ?? "").trim();

  const errors: MassIntentionState["errors"] = {};
  if (!requestor) errors.requestor = "Please enter your name.";
  if (!email || !EMAIL_RE.test(email)) {
    errors.email = "Please enter a valid email address.";
  }
  if (!intentionName) {
    errors.intentionName = "Please enter the name(s) to be remembered.";
  }

  if (Object.keys(errors).length > 0) {
    return {
      status: "error",
      message: "Please check the fields below.",
      errors,
    };
  }

  console.log("[mass-intention-request]", {
    requestor,
    email,
    phone,
    intentionType,
    intentionName,
    preferredDate,
    notes,
  });

  // Save locally first — this is the record of the request. Email is a
  // secondary notification and must not risk losing it.
  await appendSubmission("mass-intention-requests.jsonl", {
    requestor,
    email,
    phone,
    intentionType,
    intentionName,
    preferredDate,
    notes,
  });

  await sendNotificationEmail({
    subject: "New Mass Intention Request",
    text: [
      "A new Mass intention request was submitted on the website.",
      "",
      `Name: ${requestor}`,
      `Email: ${email}`,
      `Phone: ${phone || "—"}`,
      `Offered: ${intentionType || "—"}`,
      `Name(s) to be remembered: ${intentionName}`,
      `Preferred date: ${preferredDate || "—"}`,
      `Notes: ${notes || "—"}`,
    ].join("\n"),
  });

  return {
    status: "success",
    message:
      "Thank you — your request has been received. The parish office will confirm your date by return.",
    errors: {},
  };
}

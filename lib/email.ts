import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

/**
 * Sends a notification email via Resend. Failures are caught and logged
 * here, never thrown — a form submission is already saved locally by the
 * time this runs, so an email problem must not stop the user from seeing a
 * success confirmation or lose the underlying request.
 */
export async function sendNotificationEmail(options: {
  subject: string;
  text: string;
}) {
  const to = process.env.NOTIFICATION_EMAIL;
  if (!to) {
    console.error(
      "[email] NOTIFICATION_EMAIL is not set — skipping email send.",
    );
    return;
  }

  try {
    const { error } = await resend.emails.send({
      from: "onboarding@resend.dev",
      to,
      subject: options.subject,
      text: options.text,
    });

    if (error) {
      console.error("[email] Resend returned an error:", error);
      return;
    }

    console.log("[email] Notification email sent to", to);
  } catch (err) {
    console.error("[email] Failed to send notification email:", err);
  }
}

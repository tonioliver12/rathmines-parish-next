"use server";

import { appendSubmission } from "@/lib/submissions";

export type CertificateState = {
  status: "idle" | "success" | "error";
  message: string;
  errors: Partial<Record<"certName" | "certEmail", string>>;
};

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function submitCertificateRequest(
  _prevState: CertificateState,
  formData: FormData,
): Promise<CertificateState> {
  const certName = String(formData.get("cert-name") ?? "").trim();
  const certType = String(formData.get("cert-type") ?? "").trim();
  const certDate = String(formData.get("cert-date") ?? "").trim();
  const certReason = String(formData.get("cert-reason") ?? "").trim();
  const certEmail = String(formData.get("cert-email") ?? "").trim();
  const certPhone = String(formData.get("cert-phone") ?? "").trim();

  const errors: CertificateState["errors"] = {};
  if (!certName) errors.certName = "Please enter the full name as recorded.";
  if (!certEmail || !EMAIL_RE.test(certEmail)) {
    errors.certEmail = "Please enter a valid email address.";
  }

  if (Object.keys(errors).length > 0) {
    return {
      status: "error",
      message: "Please check the fields below.",
      errors,
    };
  }

  // TODO: wire this up to a real backend (e.g. Resend, or the parish's own
  // system) once that decision is made. For now the request is logged and
  // saved locally so it isn't lost, and can be actioned manually.
  console.log("[certificate-request]", {
    certName,
    certType,
    certDate,
    certReason,
    certEmail,
    certPhone,
  });

  await appendSubmission("certificate-requests.jsonl", {
    certName,
    certType,
    certDate,
    certReason,
    certEmail,
    certPhone,
  });

  return {
    status: "success",
    message:
      "Thank you — your request has been received. The parish office will confirm collection or postage.",
    errors: {},
  };
}

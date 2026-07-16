import { appendFile, mkdir } from "node:fs/promises";
import path from "node:path";

/**
 * Temporary persistence for form submissions until a real backend (email
 * service, CRM, etc.) is wired up. Appends one JSON line per submission to
 * data/<fileName>, creating the directory on first use.
 */
export async function appendSubmission(
  fileName: string,
  entry: Record<string, unknown>,
) {
  const dir = path.join(process.cwd(), "data");
  await mkdir(dir, { recursive: true });
  const line = `${JSON.stringify({ ...entry, submittedAt: new Date().toISOString() })}\n`;
  await appendFile(path.join(dir, fileName), line, "utf8");
}

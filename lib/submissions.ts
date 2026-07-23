import { appendFile, mkdir } from "node:fs/promises";
import path from "node:path";

/**
 * Best-effort local copy of form submissions, for development convenience
 * only. Skipped entirely in production: Vercel's production filesystem is
 * read-only, so mkdir/appendFile there always fails with ENOENT — email
 * (see lib/email.ts) is the real notification mechanism in production.
 *
 * Even when it does run (development), failures are caught and logged,
 * never thrown — a form submission must never be lost or fail just
 * because this local copy couldn't be written.
 */
export async function appendSubmission(
  fileName: string,
  entry: Record<string, unknown>,
) {
  if (process.env.NODE_ENV === "production") {
    return;
  }

  try {
    const dir = path.join(process.cwd(), "data");
    await mkdir(dir, { recursive: true });
    const line = `${JSON.stringify({ ...entry, submittedAt: new Date().toISOString() })}\n`;
    await appendFile(path.join(dir, fileName), line, "utf8");
  } catch (err) {
    console.error(`[submissions] Failed to save ${fileName} locally:`, err);
  }
}

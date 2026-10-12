/**
 * Sanitizes user email by removing accidental copy-paste prefixes
 * like "email-", "email: ", "mail-", or leading hyphens, and trimming spaces.
 */
export function sanitizeEmail(email?: string | null): string {
  if (!email) return "";
  return email
    .trim()
    .toLowerCase()
    .replace(/^(email|mail|e-mail)\s*[:=\-–—\s]+/i, "")
    .replace(/^[-–—\s]+/, "")
    .trim();
}

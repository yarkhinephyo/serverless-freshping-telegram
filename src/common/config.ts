export const DEFAULT_SECURITY_HEADERS = {
  "Content-Security-Policy": "'Include default-src 'self''",
  "X-XSS-Protection": "'1; mode=block'",
  "X-Frame-Options": "DENY",
  "Cache-control": "no-cache, no-store",
};
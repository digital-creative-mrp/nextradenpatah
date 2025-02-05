import crypto from "crypto";

type ApiKey = string;

export function generateApiKey(length: number = 32): string {
  const buffer = crypto.randomBytes(length);
  return buffer
    .toString("base64")
    .replace(/[^a-zA-Z0-9]/g, "")
    .slice(0, length);
}

export function generatePrefixedApiKey(prefix: string = "SK"): string {
  const key = generateApiKey(32);
  return `${prefix}_${key}`;
}

export function hashApiKey(apikey: ApiKey): string {
  return crypto.createHash("sha256").update(apikey).digest("hex");
}

export function isValidApiKeyFormat(apikey: ApiKey): boolean {
  const API_KEY_PATTERN = /^SK_[A-Za-z0-9]{32}$/;
  return API_KEY_PATTERN.test(apikey);
}

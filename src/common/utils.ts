import { WebhookData } from "./types";

export const parseWebhookBody = (webhookBody: string): WebhookData => {
  return JSON.parse(webhookBody);
}
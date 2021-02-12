const NUMERIC = "^[0-9-]*$";

export const WebhookSchema = {
  type: "object",
  properties: {
    pathParameters: {
      type: "object",
      properties: {
        chat_id: {
          type: "string",
          pattern: NUMERIC,
        },
      },
      required: ["chat_id"],
    },
  },
};
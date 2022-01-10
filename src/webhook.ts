import { Handler, Context, Callback } from "aws-lambda";

import httpJsonBodyParser from "@middy/http-json-body-parser";
import httpErrorHandler from "@middy/http-error-handler";
import httpSecurityHeaders from "@middy/http-security-headers";
import validator from "@middy/validator";
import cors from "@middy/http-cors";
import middy from "@middy/core";

import { 
  DEFAULT_SECURITY_HEADERS,
  parseWebhookBody,
  sendMessage,
  WebhookEvent,
  WebhookSchema
} from "./common";

const webhook: Handler = async (
  event: WebhookEvent, _context: Context, callback: Callback
) => {
  console.log(event);
  const {
    body,
    pathParameters: {
      chat_id
    }
  } = event;

  const {
    check_url,
    request_datetime,
    check_name,
    response_summary,
  } = parseWebhookBody(body);

  const time = new Date(request_datetime).toLocaleTimeString();
  const message = `State changed to: ${response_summary}\nName: ${check_name}\nURL: ${check_url}\nUTC Test time: ${time}`;
  await sendMessage(chat_id, message);

  callback(null, {
    statusCode: 200,
    body: JSON.stringify({ message: "success" }),
    headers: DEFAULT_SECURITY_HEADERS,
  });
};

export const handler = middy(webhook)
  .use(httpJsonBodyParser())
  .use(validator({ inputSchema: WebhookSchema }))
  .use(httpErrorHandler())
  .use(httpSecurityHeaders())
  .use(cors({ origin: "*" }));
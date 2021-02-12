import { Handler, Context, Callback } from "aws-lambda";

import httpJsonBodyParser from "@middy/http-json-body-parser";
import httpErrorHandler from "@middy/http-error-handler";
import httpSecurityHeaders from "@middy/http-security-headers";
import cors from "@middy/http-cors";
import middy from "@middy/core";

import { 
  DEFAULT_SECURITY_HEADERS,
  parseWebhookBody,
  sendMessage,
  WebhookEvent
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
    webhook_event_data: {
      check_state_name,
      request_start_time,
      request_url,
      check_name
    }
  } = parseWebhookBody(body);

  const time = new Date(request_start_time).toLocaleTimeString();
  const message = `State changed to: ${check_state_name}\nName: ${check_name}\nURL:${request_url}\nTest time: ${time}`;
  await sendMessage(chat_id, message);

  callback(null, {
    statusCode: 200,
    body: JSON.stringify({ message: "success" }),
    headers: DEFAULT_SECURITY_HEADERS,
  });
};

export const handler = middy(webhook)
  .use(httpJsonBodyParser())
  .use(httpErrorHandler())
  .use(httpSecurityHeaders())
  .use(cors({ origin: "*" }));
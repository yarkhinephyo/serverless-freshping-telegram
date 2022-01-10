export interface WebhookEvent {
  pathParameters: {
    chat_id: string;
  },
  body: string;
}

export interface WebhookData {
  check_url: string;
  request_datetime: string;
  check_name: string,
  response_summary: string,
}
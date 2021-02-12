export interface WebhookEvent {
  pathParameters: {
    chat_id: string;
  },
  body: string;
}

export interface WebhookData {
  organization_name: string;
  webhook_type: string;
  webhook_event_data: {
    check_state_name: "Available" | "Not Responding";
    check_target_response_time: number;
    check_id: number;
    http_status_code: number;
    request_start_time: string;
    check_name: string;
    application_name: string;
    request_url: string;
    check_computed_target_response_time: number;
    response_time: number;
  },
  webhook_id:23162,
}

serverless-freshping-telegram
======
![GitHub](https://img.shields.io/github/license/yarkhinephyo/serverless-freshping-telegram?style=flat-square)

Serverless solution for freshping-telegram integration. Creates a telegram bot that notifies a group when the server status changes (Available/ Not Responding) that is hosted with AWS Lambda.

![Alt desc](https://raw.githubusercontent.com/yarkhinephyo/serverless-freshping-telegram/main/docs/Screenshot_1.jpg)
  
### Integrate In Four Steps
1. Add `@esm_wonderful_bot` to the telegram group
2. Add `@getidsbot` to the telegram group to get group chat ID
3. Go to Freshping Dashboard > Setting > Integrations > Webhook > Create Integration
4. Paste `https://irrb74more.execute-api.ap-southeast-1.amazonaws.com/dev/{group_chat_id}` into "Trigger the webhook" field
5. Save and click on "Test" to see if the integration works

Example: If group chat ID is -100123456, paste 
`https://irrb74more.execute-api.ap-southeast-1.amazonaws.com/dev/-100123456`

<hr/>

### Custom Setup

1. Ensure you have a [Freshping account](https://www.freshworks.com/website-monitoring/)
2.  [Create a Telegram Bot](https://core.telegram.org/bots#6-botfather) with @BotFather and save the bot token
3. Ensure [AWS credentials](https://docs.aws.amazon.com/cli/latest/userguide/cli-configure-files.html) are set up on your computer for Serverless to work
4. Clone this repo: `git clone https://github.com/yarkhinephyo/serverless-freshping-telegram.git`
5. Install Dependencies: `npm ci`
6. Deploy the webhook and receive a URL: `sls deploy --botToken <Telegram bot token>`
7. Refer to the integration guide above
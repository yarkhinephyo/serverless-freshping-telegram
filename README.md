# serverless-freshping-telegram
Serverless solution for freshping-telegram integration. Creates a telegram bot that notifies a group when the server status changes (Available/ Not Responding) that is hosted with AWS Lambda.

### Working Telegram Bot
1. Add @esm_wonderful_bot to the telegram group
2. Get group chat ID by adding @getidsbot
3. Go to Freshping > Setting > Integrations > Webhook
4. Paste `https://irrb74more.execute-api.ap-southeast-1.amazonaws.com/dev/{chat_id}`
(Example: If group chat ID is -100123456, paste `https://irrb74more.execute-api.ap-southeast-1.amazonaws.com/dev/-100123456`)

### Custom Deployment
1. Ensure you have a [Freshping account](https://www.freshworks.com/website-monitoring/)
2. [Create a Telegram Bot](https://core.telegram.org/bots#6-botfather) with @BotFather and save the bot token
3. Ensure [AWS credentials](https://docs.aws.amazon.com/cli/latest/userguide/cli-configure-files.html) are set up on your computer for Serverless to work
4. Clone this repo: `git clone https://github.com/yarkhinephyo/serverless-freshping-telegram.git`
5. Install Dependencies: `npm i`
6. Deploy the webhook: `sls deploy --botToken <Telegram bot token>`
(URL will look like: https://xxxxxxxxxx.execute-api.ap-southeast-1.amazonaws.com/dev/{chat_id})
7. Add webhook URL on Freshping
Freshping > Setting > Integrations > Webhook
Paste the URL while replacing {chat_id} with telegram group's chat id
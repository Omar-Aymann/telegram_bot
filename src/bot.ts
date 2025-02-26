import { Bot } from "grammy";
import dotenv from "dotenv";

dotenv.config();

try {
  const bot = new Bot(process.env.BOT_TOKEN || ""); // <-- put your bot token between the ""
  console.log("Bot is up and running");

  // Handle the /start command.
  bot.command("start", (ctx) => ctx.reply("Welcome! Up and running."));
  // Handle other messages.

  bot.hears("ping", async (ctx) => {
    // `reply` is an alias for `sendMessage` in the same chat (see next section).
    await ctx.reply("pong", {
      // `reply_parameters` specifies the actual reply feature.
      reply_parameters: { message_id: ctx.msg.message_id },
    });
  });
  bot.start();
} catch (error) {
  console.error("Error starting bot", error);
}
// You can now register listeners on your bot object `bot`.
// grammY will call the listeners when users send messages to your bot.

// Now that you specified how to handle messages, you can start your bot.
// This will connect to the Telegram servers and wait for messages.

// Start the bot.

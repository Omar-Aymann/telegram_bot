import { Bot } from "grammy";
import dotenv from "dotenv";

dotenv.config();

const bot = new Bot(process.env.BOT_TOKEN || ""); // <-- put your bot token between the ""

export default bot;

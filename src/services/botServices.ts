import bot from "../bot";

export const botSendMessage = async (
  message: string,
  chat_id: string,
  user_id: string
) => {
  bot.api.sendMessage(chat_id, message);
  return "Message sent!";
};

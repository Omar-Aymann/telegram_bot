import { Request, Response } from "express";
export const sendMessage = async (req: Request, res: Response) => {
  const { message, chat_id, user_id } = req.body;
  console.log(message);
  res.send("Message sent!");
};

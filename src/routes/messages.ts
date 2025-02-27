import { Router } from "express";
import { sendMessage } from "../controllers/messagesController";

const router = Router();

router.get("/", (req, res) => {
  res.send("Hello World!");
});

router.post("/", sendMessage);

export default router;

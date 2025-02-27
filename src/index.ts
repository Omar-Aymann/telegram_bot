import { configDotenv } from "dotenv";
import express from "express";
import router from "./routes/router";
import bot from "./bot";
const app = express();

configDotenv();
app.use(express.json());
app.use("/api", router);
try {
  app.listen(process.env.PORT, () => {
    bot.start();
    console.log(`Server is up and running on port ${process.env.PORT}`);
  });
} catch (error) {
  console.error("Error starting server", error);
}

import express from "express";

const router = express.Router();

router.post("/bot", async (req, res) => {
  const { message } = req.body;

  let reply = "Sorry, I didn't understand that.";
  if (message.toLowerCase().includes("hello")) reply = "Hello! How can I help you?";
  if (message.toLowerCase().includes("how are you")) reply = "I'm just a bot, but I'm fine!";

  res.json({ reply });
});

export default router;

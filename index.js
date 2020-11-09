require("dotenv").config();
const { Client } = require("discord.js");
const client = new Client();

const prefix = `+`;
client.once("ready", () => {
  console.log("BEEP BOOP ! Ready!");
});

client.login(process.env.BOT_TOKEN);

client.on("message", async (msg) => {
  if (!msg.content.startsWith(prefix) || msg.author.bot) return;
  if (msg.content == "+ping") msg.channel.send("PONG! 🏓");
});

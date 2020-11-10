require("dotenv").config();
const { Client } = require("discord.js");
const client = new Client();

const prefix = `h+`;
client.once("ready", () => {
  console.log("BEEP BOOP ! Ready!");
  client.user.setActivity("h+help", { type: "LISTENING" });
});

client.login(process.env.BOT_TOKEN);

client.on("message", async (msg) => {
  // TODO: BRING IN A COMMAND HANDLER TO HANDLE THE COMMANDS
  msg.content = msg.content.toLowerCase();
  if (!msg.content.startsWith(prefix) || msg.author.bot) return;
  if (msg.content == "h+ping") {
    await msg.react("🏓");
    await msg.channel.send("PONG! 🏓");
  }
  if (msg.content == "h+help") {
    await msg.react("💡");
    await msg.channel.send(
      "***Hey this bot is currently in development, current commands available are -*** \n `h+help` and `h+ping`"
    );
  }
});

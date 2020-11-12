require("dotenv").config();

const { Client } = require("discord.js");
const commandHandler = require("./commands");
const client = new Client();

client.once("ready", () => {
  console.log("BEEP BOOP ! Ready!");
  client.user.setActivity("$help", { type: "LISTENING" });
});

client.on("message", commandHandler);

client.login(process.env.BOT_TOKEN);

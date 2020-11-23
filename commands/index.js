const fs = require("fs");
const prefix = `$`;
const guildIDs = ["720175341217513524", "723994197002289242"];
const channelIDs = ["775249679017443348", "768017812844970014"];

// Dynamic imports for all files and turn into valid commands
const commands = Object.fromEntries(
  fs
    .readdirSync("commands/main")
    .map((v) => [v.replace(".js", ""), require(`./main/${v}`)])
);

module.exports = async (msg) => {
  // check channel id and server id
  if (!channelIDs.includes(msg.channel.id) || !guildIDs.includes(msg.guild.id))
    return;
  msg.content = msg.content.toLowerCase();
  // check non bot valid command message
  if (!msg.content.startsWith(prefix) || msg.author.bot) return;
  const args = msg.content.split(" ");
  const command = args.shift().substring(prefix.length);
  if (command in commands) {
    commands[command](msg, args);
  }
};

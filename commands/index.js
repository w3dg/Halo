const fs = require("fs");
const prefix = `$`;
const guildID = "720175341217513524";
const channelID = "775249679017443348";

// Dynamic imports for all files and turn into valid commands
const commands = Object.fromEntries(
  fs
    .readdirSync("commands/main")
    .map((v) => [v.replace(".js", ""), require(`./main/${v}`)])
);

module.exports = async (msg) => {
  // check channel id and server id
  if (msg.channel.id !== channelID || msg.guild.id !== guildID) return;
  msg.content = msg.content.toLowerCase();
  // check non bot valid command message
  if (!msg.content.startsWith(prefix) || msg.author.bot) return;
  const args = msg.content.split(" ");
  const command = args.shift().substring(prefix.length);
  if (command in commands) {
    console.log(commands[command]);
    commands[command](msg, args);
  }
};

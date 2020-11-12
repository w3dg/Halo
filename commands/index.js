const ping = require("./ping");
const help = require("./help");

const prefix = `$`;
const guildID = "720175341217513524";
const channelID = "775249679017443348";
const commands = {
  ping,
  help,
};

module.exports = async (msg) => {
  // check channel id and server id
  if (msg.channel.id !== channelID || msg.guild.id !== guildID) return;
  msg.content = msg.content.toLowerCase();
  // chck non bot valid command message
  if (!msg.content.startsWith(prefix) || msg.author.bot) return;
  const args = msg.content.split(" ");
  const command = args.shift().substring(prefix.length);
  if (command in commands) {
    commands[command](msg);
  }
};

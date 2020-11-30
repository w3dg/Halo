const glob = require("glob");
const { parse } = require("path");
const prefix = `$`;
const guildIDs = ["720175341217513524", "723994197002289242"];
const channelIDs = ["775249679017443348", "768017812844970014"];

function requireCommands() {
  const files = glob.sync("cmdHandler/commands/**/*.js");
  const entries = files.map((filepath) => {
    const { name, dir } = parse(filepath);
    const requiredPath =
      "./" +
      dir.substring("cmdHandler/".length) +
      "/" +
      name.replace(".js", "");

    return [name, require(requiredPath)];
  });

  return Object.fromEntries(entries);
}

module.exports = (msg) => {
  const commands = requireCommands();
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

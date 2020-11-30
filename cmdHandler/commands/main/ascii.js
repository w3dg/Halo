const figlet = require("figlet");

module.exports = async (msg, args) => {
  if (args.length === 0)
    return msg.reply("Provide some text to convert to ASCII");
  let string = args.join(" ");
  figlet(string, async (err, data) => {
    if (err) {
      console.error(err);
      return;
    }
    await msg.channel.send("```" + data + "```");
  });
};

const figlet = require("figlet");

module.exports = async (msg, args) => {
  if (args.length === 0)
    return msg.reply("Provide some text to convert to ASCII");
  let string = args.join(" ");
  figlet(string, { width: 40 }, async (err, data) => {
    if (err) {
      console.error(err);
      await msg.channel.reply("An error occured while running that command!");
      return;
    }
    await msg.channel.send("```" + data + "```");
  });
};

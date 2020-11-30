module.exports = async (msg, args) => {
  await msg.react("🏓");
  await msg.channel.send("PONG! 🏓");
};

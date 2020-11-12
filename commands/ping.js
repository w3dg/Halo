module.exports = async (msg) => {
  await msg.react("🏓");
  await msg.channel.send("PONG! 🏓");
};

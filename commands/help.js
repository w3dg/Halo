module.exports = async (msg) => {
  await msg.react("💡");
  await msg.channel.send(
    "***Hey this bot is currently in development, current commands available are -*** \n `$help` and `$ping`"
  );
};

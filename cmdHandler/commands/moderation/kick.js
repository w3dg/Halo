// test acc user id 784118216367669249 to kick out

// KICK_MEMBERS

module.exports = async (msg, args) => {
  if (args.length === 0) return await msg.reply("Tag a user to kick!");
  if (
    !msg.member.hasPermission("KICK_MEMBERS") ||
    !msg.member.hasPermission("ADMINISTRATOR")
  ) {
    await msg.reply("Insufficient permissions");
  } else {
    const taggedUser = msg.mentions.users.first();
  }
};

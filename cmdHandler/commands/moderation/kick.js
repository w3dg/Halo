module.exports = async (msg, args) => {
  if (!msg.member.hasPermission("KICK_MEMBERS")) {
    return msg.reply(
      "You have no permission to do so! Don't go beyond your limits!"
    );
  }

  const target = msg.mentions.users.first();

  try {
    if (target) {
      const targetMember = msg.guild.members.cache.get(target.id);
      await targetMember.kick();
      msg.reply("That user has been kicked!");
    } else {
      msg.reply(
        "Mention someone to kick! Or the member is likely nowhere to be found!"
      );
    }
  } catch (error) {
    msg.reply(
      "I dont have permissions to kick that user! Please check my permissions or put me higher than the member's role whom you wish to be kicked."
    );
  }
};

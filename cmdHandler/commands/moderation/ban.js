module.exports = async (msg, args) => {
  if (!msg.member.hasPermission("BAN_MEMBERS")) {
    return await msg.reply(
      "You have no permission to do so! Don't go beyond your limits!"
    );
  }

  try {
    const target = msg.mentions.users.first();

    if (target) {
      const targetMember = msg.guild.members.cache.get(target.id);
      await targetMember.ban();
      msg.reply("That user has been banned!");
    } else {
      msg.reply(
        "Mention someone to ban! Or the member is likely nowhere to be found!"
      );
    }
  } catch (error) {
    msg.reply(
      "I dont have permissions to ban that user! Please check my permissions or put me higher than the member's role whom you wish to be banned."
    );
  }
};

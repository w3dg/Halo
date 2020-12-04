module.exports = async (msg, args) => {
  if (!msg.member.hasPermission("BAN_MEMBERS")) {
    return await msg.reply(
      "You have no permission to do so! Don't go beyond your limits!"
    );
  }

  const targetID = args[0].substring(3, args[0].length - 1);

  try {
    if (targetID) {
      await msg.guild.members.unban(targetID);
      msg.reply("That user has been unbanned!");
    } else {
      msg.reply("Mention someone to ban!");
    }
  } catch (error) {
    msg.reply(
      "I dont have permissions to ban that user! Please check my permissions or put me higher than the member's role whom you wish to be banned."
    );
  }
};

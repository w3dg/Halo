const { MessageEmbed } = require("discord.js");

module.exports = async (msg, args) => {
  let avatarURL = "";
  if (!args.length) {
    avatarURL = msg.author.avatarURL({
      format: "png",
      dynamic: true,
      size: 512,
    });
  } else {
    const taggedUser = msg.mentions.users.first();
    avatarURL = taggedUser.avatarURL({
      format: "png",
      dynamic: true,
      size: 512,
    });
  }

  const AvatarEmbed = new MessageEmbed().setImage(avatarURL);
  msg.channel.send(AvatarEmbed);
};

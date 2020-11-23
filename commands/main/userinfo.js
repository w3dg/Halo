const { MessageEmbed } = require("discord.js");

const status = {
  online: "🟢 User is online!",
  idle: "🟡 User is idle, probably drinking a cup of tea",
  offline: "⚫ User is offline, probably sleeping ",
  dnd: "🔴 User doesn't want to be disturbed right now",
};

module.exports = async (msg, args) => {
  await msg.react("😎");

  if (!args.length) {
    const userInfoEmbed = new MessageEmbed()
      .setColor("#ff9966")
      .setTitle("User Info")
      .setAuthor(msg.author.username)
      .setThumbnail(msg.author.avatarURL("PNG"))
      .addFields(
        {
          name: "👤 Username:",
          value: msg.author.username,
        },
        {
          name: "#️⃣ Tag:",
          value: msg.author.tag,
        },
        {
          name: "💳 ID:",
          value: msg.author.id,
        },
        {
          name: "🤖 Is a Bot? ",
          value: msg.author.bot ? "Yes" : "No",
        },
        {
          name: "🔰 Presence: ",
          value: status[msg.author.presence.status],
        },
        {
          name: "🎮 Activity: ",
          value:
            msg.author.presence.activities.length !== 0
              ? msg.author.presence.activities[0].type +
                " " +
                msg.author.presence.activities[0].name
              : "Nothing -_-",
        }
      );
    await msg.channel.send(userInfoEmbed);
  } else {
    const taggedUser = msg.mentions.users.first();
    const userInfoEmbed = new MessageEmbed()
      .setColor("#ff9966")
      .setTitle("User Info")
      .setAuthor(taggedUser.username)
      .setThumbnail(taggedUser.avatarURL("PNG"))
      .addFields(
        {
          name: "👤 Username:",
          value: taggedUser.username,
        },
        {
          name: "#️⃣ Tag:",
          value: taggedUser.tag,
        },
        {
          name: "💳 ID:",
          value: taggedUser.id,
        },
        {
          name: "🤖 Is a Bot? ",
          value: taggedUser.bot ? "Yes" : "No",
        },
        {
          name: "🔰 Presence: ",
          value: status[taggedUser.presence.status],
        },
        {
          name: "🎮 Activity: ",
          value:
            taggedUser.presence.activities.length !== 0
              ? taggedUser.presence.activities[0].type +
                " " +
                taggedUser.presence.activities[0].name
              : "Nothing -_-",
        }
      );

    await msg.channel.send(userInfoEmbed);
  }
};

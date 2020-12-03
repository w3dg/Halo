const { MessageEmbed } = require("discord.js");

const status = {
  online: "🟢 User is online!",
  idle: "🟡 User is idle, probably drinking a cup of tea",
  offline: "⚫ User is offline, probably sleeping ",
  dnd: "🔴 User doesn't want to be disturbed right now",
};

function createEmbed(user) {
  const userInfoEmbed = new MessageEmbed()
    .setColor("#ff9966")
    .setTitle("User Info")
    .setAuthor(user.username)
    .setThumbnail(user.avatarURL("PNG"))
    .addFields(
      {
        name: "👤 Username:",
        value: user.username,
      },
      {
        name: "#️⃣ Tag:",
        value: user.tag,
      },
      {
        name: "💳 ID:",
        value: user.id,
      },
      {
        name: "🤖 Is a Bot? ",
        value: user.bot ? "Yes" : "No",
      },
      {
        name: "🔰 Presence: ",
        value: status[user.presence.status],
      },
      {
        name: "🎮 Activity: ",
        value:
          user.presence.activities.length !== 0
            ? user.presence.activities[0].type +
              " " +
              user.presence.activities[0].name
            : "Nothing -_-",
      }
    );
  return userInfoEmbed;
}

module.exports = async (msg, args) => {
  await msg.react("😎");

  if (!args.length) {
    const userInfoEmbed = createEmbed(msg.author);
    await msg.channel.send(userInfoEmbed);
  } else {
    const taggedUser = msg.mentions.users.first();
    const userInfoEmbed = createEmbed(taggedUser);
    await msg.channel.send(userInfoEmbed);
  }
};

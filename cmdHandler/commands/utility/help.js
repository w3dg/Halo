const { MessageEmbed } = require("discord.js");

const randomColors = [
  "#eb4934",
  "#34e2eb",
  "#8f68fc",
  "#6886fc",
  "#6edb90",
  "#b2e37b",
  "#ebb16a",
  "#ed61d3",
];
function createHelpEmbed() {
  const helpEmbed = new MessageEmbed()
    .setColor(randomColors[Math.floor(Math.random() * randomColors.length)])
    .setTitle("Halo Commands Help")
    .addFields(
      {
        name: "$help",
        value: "Sends this help message!",
      },
      {
        name: "$ping",
        value: "Replies with pong along with the latency info.",
      },
      {
        name: "$pizza",
        value: "Orders Pizza for you 🍕😜",
      },
      {
        name: "$fortune",
        value: "Get your fortune message!",
      },
      {
        name: "$eightball",
        value: "Ask a question to the mighty 8ball!",
      },
      {
        name: "$joke",
        value: "Read a funny joke!",
      },
      {
        name: "$ascii",
        value: "Converts text given after the command as ASCII art.",
      },
      {
        name: "$avatar",
        value:
          "Get the avatar image of your user or someone else by mentioning them.",
      },
      {
        name: "$userinfo",
        value:
          "Get some user info about yourself or someone by mentioning them.",
      },
      {
        name: "$meme",
        value: "Get a random meme!",
      },
      {
        name: "$kick",
        value: "Kicks a user from the server!",
      },
      {
        name: "$ban",
        value: "Bans a user from the server!",
      },
      {
        name: "$unban",
        value: "Unbans a user from the server!",
      },
      {
        name: "$source",
        value:
          "Have a look at the source code for the bot or send an issue if needed!",
      }
    );
  return helpEmbed;
}

module.exports = async (msg, args) => {
  await msg.react("💡");
  await msg.channel.send(createHelpEmbed());
};

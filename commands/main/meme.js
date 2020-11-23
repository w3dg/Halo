const fetch = require("node-fetch");
const { MessageEmbed } = require("discord.js");

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
}

module.exports = async (msg, args) => {
  await msg.react("🤣");
  const response = await fetch("https://www.reddit.com/r/memes/.json");
  const json = await response.json();
  const memeIndex = getRandomInt(1, json.data.dist);
  const memeUrl = json.data.children[memeIndex].data.url;
  const memeTitle = json.data.children[memeIndex].data.title;

  const MemeEmbed = new MessageEmbed()
    .setTitle("Meme")
    .setColor("#ff9966")
    .addField("Title", memeTitle, true)
    .setImage(memeUrl);

  await msg.channel.send(MemeEmbed);
};

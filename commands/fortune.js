const FortuneTweetable = require("fortune-tweetable");

module.exports = async (message) => {
  await message.channel.send(FortuneTweetable.fortune());
};

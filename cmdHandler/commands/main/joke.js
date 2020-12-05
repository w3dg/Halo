const fetch = require("node-fetch");

module.exports = async (msg) => {
  const data = await fetch(
    "https://official-joke-api.appspot.com/jokes/random"
  );
  const json = await data.json();
  await msg.channel.send(json.setup);
  await msg.channel.send(json.punchline);
};

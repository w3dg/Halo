const fetch = require("node-fetch");

module.exports = async (msg) => {
  fetch("https://official-joke-api.appspot.com/jokes/random")
    .then((res) => res.json())
    .then((json) => {
      msg.channel.send(json.setup);
      msg.channel.send(json.punchline);
    });
};

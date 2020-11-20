const answers = [
  "It is certain",
  "It is decidedly so",
  "Without a doubt",
  "Yes definitely",
  "You may rely on it",
  "As I see it, yes",
  "Most likely",
  "Outlook good",
  "Yes",
  "Signs point to yes",
  "Reply hazy try again",
  "Ask again later",
  "Better not tell you now",
  "Cannot predict now",
  "Concentrate and ask again",
  "Don't count on it",
  "My reply is no",
  "My sources say no",
  "Outlook not so good",
  "Very doubtful",
];

module.exports = async (msg, args) => {
  if (args.length == 0) return await msg.reply("Please provide a question.");
  const answer = answers[Math.floor(Math.random() * answers.length)];
  await msg.channel.send(`${msg.author} ${answer} 🎱`);
};

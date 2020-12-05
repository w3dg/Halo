const githubUrl = "https://github.com/debopamgupta/Halo";
const issueUrl = "https://github.com/debopamgupta/Halo/issues/new";

module.exports = (msg, args) => {
  msg.react("💻");
  msg.channel.send(
    `This bot is completely open source! Check out ${githubUrl}. If you find an issue, please let us know here ${issueUrl} `
  );
};

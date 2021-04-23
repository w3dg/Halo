# Halo

### A Discord Bot set out to explore the true potential of Bots on Discord.

This is a bot that i will be using for testing and exploring all sorts of things that the developer api has to offer at least most of them.

Invite URL format - https://discord.com/oauth2/authorize/?permissions=51278&scope=bot&client_id=CLIENT_ID

Use the above link template to invite your bot to a server where the user bringing it in has `Manage Server` permission.

### So... How to go about making a bot ?

For firsts, there are many languages and libraries to choose from while making a Discord bot and talking to the Discord API. The most popular are python and javascript with the `discord.py` and `discord.js` libraries respectively.
Here the Javascript library for discord `discord.js` is used.

###### Documentation

discord.js http://discord.js.org/  
discord.py https://discordpy.readthedocs.io/en/latest/

#### Make an application.

1. Head over to https://discord.com/developers/applications/ and log in if you haven't and then click on **New Application** on the top right.
2. Give the application a name for future reference and a picuture(optional).
3. On the left, select Bot from the Menu. A discord application can do many things such as Oauth2 and Bots and Rich Presence and games and stuff. Here we only focus on Bot.
4. Give your Bot a name and a picture. This will co-relate with the bot user in Discord.
5. On that page there are some options and settings. Correspondingly enable them if needed. ( Server Member intents and Member Presence intents.)
6. Keep the `Client ID` on the first home page and the `Bot TOKEN` handy as we will be needing it. ( **_NOTE_** DON'T REVEAL OR LEAK THE BOT TOKEN ANYWHERE, OTHERWISE PEOPLE MAY DO BAD THINGS LIKE DELETING THE SERVER CHANNELS, BANNING ALL MEMBERS ETC. IF LEAKED, REGENERATE IT FROM THE DEVELOPER PORTAL IMMEDIATELY).

### Custom Bot Permissions

For this bot, it needs the permission to kick/ban/unban members and do some admin stuff. We can achieve the following priveleges by calculating permissions ( check out [this calculator](https://finitereality.github.io/permissions-calculator/?v=0) ). The permissions when calculated will give you a number which we can put as a url param in the invite link.

For eg. for the following permissions, `Administrator, Kick Members, Ban Members`, and do message stuff, the permissions is 51278 and that goes in the invite url. `/authorize/?permissions=51278`

![](https://i.imgur.com/tnidoK3.png)

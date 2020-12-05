# Halo

### A Discord Bot set out to explore the true potential of Bots on Discord.

This is a bot that i will be using for testing and exploring all sorts of things that the developer api has to offer at least most of them.

Invite URL format - https://discord.com/oauth2/authorize/?permissions=51278&scope=bot&client_id=CLIENT_ID

Use the above link template to invite your bot to a server where the user bringing it in has `Manage Server` permission.

### Custom Bot Permissions

For this bot, it needs the permission to kick/ban/unban members and do some admin stuff. We can achieve the following priveleges by calculating permissions ( check out [this calculator](https://finitereality.github.io/permissions-calculator/?v=0) ). The permissions when calculated will give you a number which we can put as a url param in the invite link.

For eg. for the following permissions, `Administrator, Kick Members, Ban Members`, and do message stuff, the permissions is 51278 and that goes in the invite url. `/authorize/?permissions=51278`

![](https://i.imgur.com/tnidoK3.png)

### So... How to go about making a bot ?

For firsts, there are many languages and libraries to choose from while making a Discord bot and talking to the Discord API. The most popular are python and javascript with the `discord.py` and `discord.js` libraries respectively.
Here the Javascript library for discord `discord.js` is used.

###### Documentation

discord.js http://discord.js.org/
discord.py https://discordpy.readthedocs.io/en/latest/

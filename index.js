const aoijs = require("aoi.js")

const bot = new aoijs.Bot({
token: process.env.TOKEN, //Discord Bot Token
prefix: "PREFIX", //Discord Bot Prefix
intents: ["GUILDS", "GUILD_MESSAGES"] //Discord Intents, you can change it at "all"
})

//Events

bot.onMessage()

//Command Example

bot.command({
name: "hi",
code: `hello bby <3`
})

// You can aslo add variables :D

//Ready Event

bot.readyCommand({
    channel: "",
    code: `$log[Ready on $userTag[$clientID]]`
 
})

console.log("Main index.js file by https://github.com/FyberMods")

//Command Handler loader

/*
const loader = new aoijs.LoadCommands(bot);
loader.load(bot.cmd,'./commands/') 
*/

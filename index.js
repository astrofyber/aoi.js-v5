const aoijs = require("aoi.js")

const bot = new aoijs.Bot({
token: "ΤΟΚΕΝ", //Discord Bot Token - Repl.it --> process.env.TOKEN
prefix: "PREFIX", //Discord Bot Prefix
intents: ["GUILDS", "GUILD_MESSAGES"] //Discord Intents, you can change it at "all"
})

//Events

bot.onMessage()

//Command Example

bot.command({
name: "ping",
code: `$ping ms`
})

// You can aslo add variables if you want.

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

// Template with command handler loader - FyberDev ( v5 version! )

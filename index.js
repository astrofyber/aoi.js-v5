// ---- AOI.JS VERSION 5 - @ CallMeFyber
const aoijs = require("aoi.js") // npm i aoi.js@5

const bot = new aoijs.Bot({
token: "ΤΟΚΕΝ", //Discord Bot Token - [ If you use Repl.it --> process.env.TOKEN ]
prefix: "PREFIX", //Discord Bot Prefix
intents: ["GUILDS", "GUILD_MESSAGES"] //Discord Intents, you can change it at "all"
})

//Events

bot.onLeave();
bot.onJoin();
bot.onMessage();
bot.onUserUpdate();
bot.onChannelDelete();
bot.onChannelCreate();
bot.onChannelUpdate();
bot.onRoleCreate();
bot.onRoleDelete();
bot.onMessageUpdate();
bot.onMessageDelete();
bot.onInteractionCreate();


//Variables

bot.variables({
  site: "yoursite.com",
})


// Bot Status

bot.status({
    text: 'Github @CallMeFyber',
    type: 'PLAYING',
    status: 'online',
    time: 15
});


//Ready Event

bot.readyCommand({
    channel: "",
    code: `$log[Ready on $userTag[$clientID]]`
 
})


// Credits Log

console.log("Main index.js file by https://github.com/FyberMods")


// Welcome System 

bot.joinCommand({ 
 channel:"ChannelID", 
 code: `<@$authorID> Welcome!`

})

// Command Example


//Command Example

bot.command({
name: "ping",
code: `$ping ms`

})


//Command Handler loader - Default Option: OFF

/*
const loader = new aoijs.LoadCommands(bot);
loader.load(bot.cmd,'./commands/') 
*/

// Template with command handler loader - CallMeFyber ( v5 version! )




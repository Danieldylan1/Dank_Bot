//Import Reqs.
const Discord = require('discord.js');
const bot = new Discord.Client();
const token = 'MjY0MTIwNDYyMjQwNTE0MDUw.C0b82w.Dlcjk52uyiKmBLXlCpucxEToFdI';

//Variables
let pf = "%";
let info = "**INFO > **";
let version = 'v0.0.3'

//Bot Initiation
bot.login(token);

//Functions
function randNum (min, max) {
    return Math.floor(Math.random * (max - min ) + min)
}
function rps (userInput) {
    let botChoice = randNum(1,3)
    user = user.toUpperCase

    switch (bot) {
    case 1:
        bot = "ROCK"
        break
    case 2:
        bot = "PAPER"
        break
    case 3:
        bot = "SCISSORS"
        break
    }
    let rpsSay = "You played: " + user + " , the bot played " + bot + "."
    if (user === "ROCK") {
        if (bot === "ROCK") return ["LOLOL IT WAS A TIE XD," + rpsSay]
        if (bot === "PAPER") return ["WTF HOW DID YOU WIN" + rpsSay]
        if (bot === "SCISSORS") return ["LMAO YOU GOT BEAT BY A BOT" + rpsSay]
    }
    if (user === "PAPER") {
        if (bot === "ROCK") return ["WTF HOW DID YOU WIN" + rpsSay]
        if (bot === "PAPER") return ["LOLOL IT WAS A TIE XD" + rpsSay]
        if (bot === "SCISSORS") return ["LMAO YOU GOT BEAT BY A BOT" + rpsSay]
    }
    if (user === "SCISSORS") {
        if (bot === "ROCK") return ["LMAO YOU GOT BEAT BY A BOT" + rpsSay]
        if (bot === "PAPER") return ["WTF HOW DID YOU WIN" + rpsSay]
        if (bot === "SCISSORS") return ["LOLOL IT WAS A TIE XD" + rpsSay]
    }
}

//Message Interactions
bot.on('ready', () => {
    console.log('Bot is online!');
    bot.user.setGame(version + " - By Jason L.")
});

bot.on('message', message => {
    if(message.content.startsWith(pf + 'ding')) {
        message.channel.sendMessage(info + 'Dong!');
    }
    if(message.content.includes('roblox' || 'Roblox' || 'ROBLOX')) {
        message.channel.sendMessage(info + 'Ew, are you six years old?');
    }
});

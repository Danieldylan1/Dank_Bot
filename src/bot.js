//Import Reqs.
const Discord = require('discord.js');
const bot = new Discord.Client();
const token = 'MjY0MTIwNDYyMjQwNTE0MDUw.C0b82w.Dlcjk52uyiKmBLXlCpucxEToFdI';

//Variables
let pf = "%"
let info = "**INFO > **"
let rpsSay = "You played: " + user + " , the bot played " + bot + "."

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
    if (user === "ROCK") {
        if (bot === "ROCK") return ["LOLOL IT WAS A TIE XD," + rpsSay]
        if (bot === "PAPER") return ["WTF HOW DID YOU WIN" + rpsSay]
        if (bot === "SCISSORS") return ["LMAO YOU GOT BEAT BY A BOT" + rpsSay]
    }
}

//Message Interactions
bot.on('ready', () => {
    console.log('Bot is online!');
    bot.user.setGame("v0.0.1 - By Jason L.")
});

bot.on('message', message => {
    if(message.content.startsWith(pf + 'ding')) {
        message.channel.sendMessage(info + 'Dong!');
    }
});

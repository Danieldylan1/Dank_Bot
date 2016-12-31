//Import Reqs.
const Discord = require('discord.js');
const bot = new Discord.Client();
const token = 'MjY0MTIwNDYyMjQwNTE0MDUw.C0b82w.Dlcjk52uyiKmBLXlCpucxEToFdI';

//Variables
let pf = "%";
let info = "**:exclamation: INFO > **";
let timer = "**:alarm_clock: TIMER > **"
let version = 'v0.0.4'

//Bot Initiation
bot.login(token);

//Functions
//Random number generator, generates number between two numbers, inclusive
function randNum (min, max) {
    return Math.floor(Math.random * (max - min ) + min)
}
//Rock Paper Scissors function, works as you would expect a rock paper scissors game to work
function rps (userInput) {
    let botChoice = randNum(1,3)
    user = userInput.toUpperCase

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
//Timer function, takes time in seconds and something to remind the user of
function timer (time, toRemind) {
    setTimeout(function() {
        message.channel.sendMessage(timer + "You have to " + toRemind + message.member.user + "!");
    }, (time * 1000));
}
//Message Interactions
bot.on('ready', () => {
    console.log('Bot is online!');
    bot.user.setGame(version + " - By Jason L.")
});

bot.on('message', message => {
    //Ding dong message to test
    if(message.content.startsWith(pf + 'ding')) {
        message.channel.sendMessage(info + 'Dong!');
    }
    if(message.content.startsWith(pf + 'rps')) {
        let userChoice = message.content.split(' ')
        if (userChoice[1].toUpperCase === "ROCK" || userChoice[1].toUpperCase === "PAPER" || userChoice[1].toUpperCase === "SCISSORS") {
            let results = rps(userChoice[1]);
            message.channel.sendMessage(results);
        }
    }
    //Kills the bot
    if(message.content.startsWith(pf + 'kill')) {
        message.channel.sendMessage(info + 'Drinking Bleach...');
        bot.destroy()
    }
    //If roblox is in a message, bot replies accordingly
    if(message.content.toUpperCase.includes('ROBLOX')) {
        message.channel.sendMessage(info + 'Ew, are you six years old?');
    }
});

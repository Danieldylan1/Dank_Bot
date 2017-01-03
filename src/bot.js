//Stuff
const Discord = require('discord.js');
const token = 'MjY0MTIwNDYyMjQwNTE0MDUw.C0w7_Q.jljSppixn_q1eIOSbvhkHcm5kgo';

//Variables
let pf = "!"
let info = "**INFO > **"
let alert = "**:alarm_clock: TIMER > **"
let warning = "**:warning: WARN > **"
let version = "v0.1.2"

//Create Objects
const bot = new Discord.Client()

//Bot Initiation
bot.login(token);

//Functions
//Random integer function for rps
function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
}
//Rock Paper Scissors function, works as you would expect a rock paper scissors game to work
//userInput must be a string
function rps(userInput) {
    let botNum = getRndInteger(1,3)
    user = userInput.toUpperCase()

    switch (botNum) {
    case 1:
        botRpsChoice = "ROCK"
        break
    case 2:
        botRpsChoice = "PAPER"
        break
    case 3:
        botRpsChoice = "SCISSORS"
        break
    }
    let rpsSay = "You played: " + user.toLowerCase() + ", the bot played " + botRpsChoice.toLowerCase() + "."
    if (user === "ROCK") {
        if (botRpsChoice === "ROCK") return ["LOLOL IT WAS A TIE XD, " + rpsSay]
        if (botRpsChoice === "PAPER") return ["LMAO YOU GOT BEAT BY A BOT, " + rpsSay]
        if (botRpsChoice === "SCISSORS") return ["WTF HOW DID YOU WIN, " + rpsSay]
    }
    if (user === "PAPER") {
        if (botRpsChoice === "ROCK") return ["WTF HOW DID YOU WIN, " + rpsSay]
        if (botRpsChoice === "PAPER") return ["LOLOL IT WAS A TIE XD, " + rpsSay]
        if (botRpsChoice === "SCISSORS") return ["LMAO YOU GOT BEAT BY A BOT, " + rpsSay]
    }
    if (user === "SCISSORS") {
        if (botRpsChoice === "ROCK") return ["LMAO YOU GOT BEAT BY A BOT, " + rpsSay]
        if (botRpsChoice === "PAPER") return ["WTF HOW DID YOU WIN, " + rpsSay]
        if (botRpsChoice === "SCISSORS") return ["LOLOL IT WAS A TIE XD, " + rpsSay]
    }
}

//Message Interactions
bot.on('ready', () => {
    console.log('Awaiting your orders!');
    bot.user.setGame(version + " - By Jason L. Hello why this not werk")
});

bot.on('message', message => {
    console.log("Hi there!")
    //Ding dong message to test
    if(message.content.startsWith(pf + 'ding')) {
        console.log("Hola!")
        message.channel.sendMessage(info + 'Dong!');
    }
    //RPS command, currently nonfunctional
    if(message.content.startsWith(pf + 'rps')) {
        let userChoice = message.content.split(' ')
        let rpsUser = userChoice[1].toUpperCase()
        if (rpsUser === 'ROCK' || rpsUser === 'PAPER' || rpsUser === 'SCISSORS') {
            let results = rps(rpsUser);
            message.channel.sendMessage(results);
        }    else {
            message.channel.sendMessage(warning + "Did you use the format !rps rock, paper, or scissors?");
        }
    }
    //Timer command, takes input like so: !timer 6 walk the dog
    if(message.content.startsWith(pf + 'timer')) {
        let timerChoice = message.content.split(' ')
        let time = timerChoice[1]
        let reminder = timerChoice.slice(2, timerChoice.length)
        let timerMessage = message.author
        function remindMe (time, toRemind) {
            setTimeout(function() {
                message.channel.sendMessage(alert + "You have to " + toRemind.join(' ') + ", " + timerMessage + "!")
            }, (time * 1000));
        };
        remindMe(time, reminder)
        message.channel.sendMessage(info + 'Timer Set!')
    }
    //Kills the bot
    if(message.content.startsWith(pf + 'kill')) {
        message.channel.sendMessage(info + 'Shutting down...');
        bot.destroy()
    }
    //If roblox is in a message, bot replies accordingly
    if(message.content.toUpperCase().includes('ROBLOX')) {
        message.channel.sendMessage(info + 'Ew, are you six years old?');
    }
});

//Import Requirements
const Discord = require('discord.js');
const fs = require('fs');
const path = require('path')
const moment = require('moment')


//Variables
let pf = "d!"
let info = "**:notepad_spiral: INFO > **"
let alert = "**:alarm_clock: TIMER > **"
let warning = "**:warning: WARNING > **"

//Load Files
let cfg = JSON.parse(fs.readFileSync(path.join(__dirname, '..', 'config', 'config.json')), 'utf8')
let helpFile = JSON.parse(fs.readFileSync(path.join(__dirname, '..', 'src', 'help.json')), 'utf8')

//Create Objects
const bot = new Discord.Client()

//Bot Initiation
bot.login(cfg.bot_token);

//Functions
//Random integer function for rps
function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
}
//Rock Paper Scissors function, works as you would expect a rock paper scissors game to work
//userInput must be a string
function rps(userInput) {
    let botRpsChoice = ''
    let botNum = getRndInteger(1,3)
    user = userInput.toUpperCase();

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
    let rpsSay = "You played: " + user.toLowerCase() + ", the bot played " + botRpsChoice.toLowerCase() + ".";
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

//Start the bot!
bot.on('ready', () => {
    console.log('Awaiting your orders!');
    bot.user.setGame(cfg.version + " - By Jason L.")
});

//Message Interactions
bot.on('message', message => {
    //Make sure bot does not break itself
    if (message.author.bot) return

    //Ding dong message to test
    if(message.content.startsWith(pf + 'ding')) {
        message.channel.sendMessage(info + 'Dong!');
    }

    //RPS command
    if(message.content.startsWith(pf + 'rps')) {
        let userChoice = message.content.split(' ')
        let rpsUser = userChoice[1]
        if (rpsUser === undefined) {
            message.channel.sendMessage(warning + "There is no argument given!")
        }
        else {
        rpsUser = rpsUser.toUpperCase()
        if (rpsUser === 'ROCK' || rpsUser === 'PAPER' || rpsUser === 'SCISSORS') {
            let results = rps(rpsUser);
            message.channel.sendMessage(info + results);
        }    else {
            message.channel.sendMessage(warning + "Did you use the format !rps [rock, paper, or scissors]?");
            }
        }
    }

    //Timer command, takes input like so: !timer 6 walk the dog
    if(message.content.startsWith(pf + 'timer')) {
        let timerChoice = message.content.split(' ')
        let time = timerChoice[1]
        let reminder = timerChoice.slice(2, timerChoice.length)
        let timerMessage = message.author
        if (time >= 120 || time.isInteger() === false) {
            message.channel.sendMessage(info + "Wrong input! *yes daddy*")

        }
        else {
        function remindMe (time, toRemind) {
            setTimeout(function() {
                message.channel.sendMessage(alert + "You have to " + toRemind.join(' ') + ", " + timerMessage + "!")
            }, (time * 1000));
        };
        remindMe(time, reminder)
        message.channel.sendMessage(info + 'Timer Set!')
        }
    }

    //Help command
    if(message.content.startsWith(pf + 'help')) {
        let helpMsg = "Help for: **Commands**" + "\n"
        for(let key in helpFile) {
            helpMsg += '**' + pf + key + '** ' + '> ' + helpFile[key].info.desc + '\n'
        }
        message.channel.sendMessage(helpMsg)
    }

    //Limited Chinese New Year Commmand
    if(message.content.startsWith(pf + 'china')) {
        let msg = ":flag_cn::flag_cn::flag_cn::flag_cn::flag_cn::flag_cn::flag_cn::flag_cn::flag_cn::flag_cn::flag_cn::flag_cn::flag_cn::flag_cn:" + "\n" + "\n" + "**                   Happy Chinese New Year Kids**" + "\n" + "\n" + ":flag_cn::flag_cn::flag_cn::flag_cn::flag_cn::flag_cn::flag_cn::flag_cn::flag_cn::flag_cn::flag_cn::flag_cn::flag_cn::flag_cn:"
        message.channel.sendMessage(msg)
    }

    //

    //Kills the bot
    if(message.content.startsWith(pf + 'kill')) {
        if(message.member.hasPermission("ADMINISTRATOR", true)) {
            message.channel.sendMessage(info + 'Сука Блять Losers!');
            bot.destroy()
        }
        else if(message.author.id === '170144638017994752' || message.author.id === '119495663506554880') {
            message.channel.sendMessage(info + 'Woohoo! ' + message.author + " used ADMIN OVERRIDE! It's super effective! Dank Bot fainted!")
            bot.destroy()
        }
        else {
            if (message.author.id === '97798583402631168' || message.author.id === '200709999738093568') {
                message.channel.sendMessage(info + 'Nice try aidan')
            }
            else {
            message.channel.sendMessage(info + 'You do not have the required permissions, ' + message.author + '! *nice try*');
            }
        }
    }
    //If roblox is in a message, bot replies accordingly
    if(message.content.toUpperCase().includes('ROBLOX')) {
        message.channel.sendMessage(info + 'Ew, are you six years old?');
    }
});

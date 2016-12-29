//Import Reqs.
const Discord = require('discord.js');
const bot = new Discord.Client();
const token = 'MjY0MTIwNDYyMjQwNTE0MDUw.C0b82w.Dlcjk52uyiKmBLXlCpucxEToFdI';

//Variables
let pf = "#"
//Bot Initiation
bot.login(token);

bot.on('ready', () => {
    console.log('I am ready!');
    bot.user.setGame("v0.0.1 - By Jason L.")
});

bot.on('message', message => {
    if(message.content.startsWith(pf + 'ding')) {
        message.channel.sendMessage('dong');
    }
    if(message.content.startsWith(pf + 'rps') {
        
    })
});

//Import Reqs.
const Discord = require('discord.js');
const bot = new Discord.Client();
const token = 'MjY0MTIwNDYyMjQwNTE0MDUw.C0b82w.Dlcjk52uyiKmBLXlCpucxEToFdI';

//Config Loader
try {
    var cfg = JSON.parse()
}

bot.on('ready', () => {
    console.log('I am ready!');
    bot.user.setGame("v0.0.1 - By Jason L.")
});

bot.on('message', message => {
    if(message.content === 'ding') {
        message.channel.sendMessage('dong');
    }
    if(message.content.)
});

bot.login(token);

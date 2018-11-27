const Commando = require('discord.js-commando');
const bot = new Commando.Client();
const TOKEN = '' // Insert Discord Token

bot.registry.registerGroup('supreme', 'Supreme');
bot.registry.registerDefaults();
bot.registry.registerCommandsIn(__dirname + '/commands');

bot.on('ready', function(){
    console.log("Ready");
});

bot.login(TOKEN);
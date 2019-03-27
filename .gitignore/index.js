const Discord = require('discord.js')
const bot = new Discord.Client

//instance
bot.on('ready', function () {
    bot.user.setGame('help').catch(console.error)
})
bot.login('xQyvVwyawVxqAWAzkiwcDvcsMnec9_w2').catch(console.error)

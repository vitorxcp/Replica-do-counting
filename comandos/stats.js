exports.ir = async (bot, message, args) => {
const Discord = require("discord.js")
const firebase = require("firebase")
const database = firebase.database()
embed = new Discord.MessageEmbed()
.setColor("BLUE")
.setTimestamp()
.setThumbnail(bot.user.avatarURL())
.setTitle("Minhas informações:")
.addField("Servers:", "***`"+bot.guilds.cache.size.toLocaleString()+"`***.", true)
.addField("Users:", "***`"+bot.users.cache.size.toLocaleString()+"`***.", true)
.addField("Channels:", "***`"+bot.channels.cache.size.toLocaleString()+"`***.",true)
.addField("Shard:", "***`0/1` "+(message.guild.shard?"(`shard localizada`)": "(`shard não localizada neste servidor`)")+"***.")
.addField("Uptime:", "***`"+require("pretty-ms")(bot.uptime)+"`***.", true)
.addField("Latencia:", "***`"+bot.ws.ping+"ms`***.",true)
.addField("Versão:", "***`1.5.9`***",true)
message.reply(" ", embed)
}
exports.info = {
    nome: "stats",
    aliases: ["about", "botinfo"]
}

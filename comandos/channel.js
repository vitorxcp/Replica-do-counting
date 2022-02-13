exports.ir = async (bot, message, args) => {
    const firebase = require("firebase")
      const database = firebase.database();
    let chat = message.mentions.channels.first() || bot.channels.cache.get(args[0]) || message.channel
    id = chat.id
    database.ref("Servidores/"+message.guild.id+"/channel").update({id: id})
    message.channel.send("<@"+message.author+"> O canal de contagem foi atualizado para o canal <#"+id+">!")
}
exports.info = {
    nome: "canal", 
    aliases: ["channel"]
}
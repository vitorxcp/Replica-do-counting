exports.ir = async (bot, message, args) => {
    const firebase = require("firebase")
      const database = firebase.database();
      if (!message.member.hasPermission('ADMINISTRATOR')) return message.reply("Você não permissão de `Administrador` para executar este comando!")
    let chat = message.mentions.channels.first() || bot.channels.cache.get(args[0]) || message.channel
    id = chat.id
    database.ref("Servidores/"+message.guild.id+"/channel").update({id: id})
    message.channel.send("<@"+message.author+"> O canal de contagem foi atualizado para o canal <#"+id+">!")
}
exports.info = {
    nome: "canal", 
    aliases: ["channel"]
}
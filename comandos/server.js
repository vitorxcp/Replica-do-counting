exports.ir = async (bot, message, args) => {
const Discord = require("discord.js")
const firebase = require("firebase")
      const database = firebase.database();
      atnum = await database.ref("Servidores/"+message.guild.id+"/number").once("value")
      if(atnum.val()) atnum = atnum.val().number 
      if(!atnum.val()) atnum = "0"
      atuser = await database.ref("Servidores/"+message.guild.id+"/user").once("value")
      if(atuser.val()) atuser = "<@"+atuser.val().user+">" 
      if(!atuser.val()) atuser = "**Nenhum**"
      modnum = await database.ref("Servidores/"+message.guild.id+"/modo").once("value")
      if(modnum.val()) modnum = "ativado" 
      if(!modnum.val()) modnum = "**desativado**"
      chat = await database.ref("Servidores/"+message.guild.id+"/channel").once("value")
      if(chat.val()) chat = "<#"+chat.val().id+">" 
      if(!chat) chat = "**Nenhum**"
      embed = new Discord.MessageEmbed()
      .setColor("")
      .setTitle("Informações do `"+message.guild.name+"`:")
      .setDescription("Número atual **"+atnum+"**.\nÚltimo número contado por "+atuser+".\nModo apenas para números: **"+modnum+"**.\n Canal : "+chat+".")
      message.channel.send(embed)
}
exports.info = {
    nome: "server", 
    aliases: ["sv"]
}
exports.ir = async (bot, message, args) => {
const Discord = require("discord.js")
const firebase = require("firebase")
      const database = firebase.database();
      atnum1 = await database.ref("Servidores/"+message.guild.id+"/number").once("value")
      atnum = atnum1.val()?atnum1.val().number:"1"
      atuser1 = await database.ref("Servidores/"+message.guild.id+"/user").once("value")
      atuser = atuser1.val()?"<@"+atuser1.val().user+">":"**Ainda Ninguem**" 
      modnum1 = await database.ref("Servidores/"+message.guild.id+"/modo").once("value")
      modnum3 = modnum1.val()?modnum1.val().modo:"n"
      if(modnum3 === "s") modnum = "Ativado"
      if(modnum3 === "n") modnum = "Desativado"
      chat1 = await database.ref("Servidores/"+message.guild.id+"/channel").once("value")
      chat = chat1.val()?"<#"+chat1.val().id+">":"Ainda Nenhum"
     // if(!chat === "Nenhum") chat ="<#"+Number(chat)+">"
      embed = new Discord.MessageEmbed()
      .setColor("")
      .setThumbnail(message.guild.iconURL())
      .setTitle("Informações do `"+message.guild.name+"`:")
      .setDescription("Número atual **"+(Number(atnum)-1)+"**.\nÚltimo número contado por "+atuser+".\nModo apenas números **"+modnum+"**.\n Canal de contagens é "+chat+".")
      message.channel.send(embed)
}
exports.info = {
    nome: "server", 
    aliases: ["sv", "info"]
}
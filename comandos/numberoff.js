exports.ir = async ( bot, message, args) => {
    const firebase = require("firebase")
      const database = firebase.database();
      if (!message.member.hasPermission('ADMINISTRATOR')) return message.reply("Você não permissão de `Administrador` para executar este comando!")
    if(!args[0]) return message.reply("Erro, ultilize `c.numberon < on | off >`.")
 if(args[0] === "s"|args[0] === "on"){
   database.ref("Servidores/"+message.guild.id+"/modo").update({modo: "s"})
   message.reply("Pronto, agora a contagem será arruinada caso enviem qualquer mensagem que não seja um número válido!")
 }
 if(args[0] === "n"|args[0] === "off") {
    database.ref("Servidores/"+message.guild.id+"/modo").update({modo: "n"})
    message.reply("Pronto, agora a contagem não será arruinada caso enviem qualquer mensagem que não seja um número válido!")

 }
 if(args[0]==="s"|args[0]==="on"|args[0]==="n"|args[0]==="off"){}else{return message.reply("Erro, ultilize `c.numberon < on | off >`.")}
}
exports.info = {
    nome: "numberchat",
    aliases: ["numerochat", "numberon"]
}
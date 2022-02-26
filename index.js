
     const Discord = require("discord.js") 
     const bot = new Discord.Client()
     const fs = require("fs")
     const butt = require("discord.js-buttons")(bot)//usaremos mais para frente
     const {token, prefix, apiKey, authDomain, databaseURL, projectId, storageBucket, messagingSenderId, appId} = require("./config.json")
const colors = require('colors')
const firebase = require('firebase');
const { number } = require("yargs")
var Configf = {
	apiKey: apiKey,
	authDomain: authDomain,
	databaseURL: databaseURL,
	projectId: projectId,
	storageBucket: storageBucket,
	messagingSenderId: messagingSenderId,
	appId: appId
}
firebase.initializeApp(Configf);
const database = firebase.database();
     bot.comandos = new Discord.Collection();
     bot.aliases = new Discord.Collection();
     fs.readdir('./comandos', (err, files, message) => {
         if (err) console.error(err);
         let arquivojs = files.filter(f => f.split('.').pop() == 'js');
         arquivojs.forEach((f, i) => {
             let props = require(`./comandos/${f}`);
             console.log(`${colors.cyan(f.split(".")[0])} Carregado (${colors.green("comandos/"+f)}).`);
             bot.comandos.set(props.info.nome, props);
             props.info.aliases.forEach(alias => {
                 bot.aliases.set(alias, props.info.nome);
             });
         });
     });

             bot.on("ready", () => {
           console.log("Yep!")
          setInterval(() => {
            bot.user.setActivity({name: "c.help | "+bot.guilds.cache.size.toLocaleString()+" Servers"})
             }, 10000)
          })

          bot.on("message", async message => {   
            const active = new Map();
            let prefix2 = prefix
               let messageArray = message.content.split(' ');
               let command = messageArray[0];
               if (!message.content.toLowerCase().startsWith(prefix2.toLowerCase())) return;
               const args = message.content.slice(prefix2.length).trim().split(/ +/g);
               const comando = args.shift().toLowerCase();
               let ops = {active: active};
               let arquivocmd =
                   bot.comandos.get(command.slice(prefix2.length)) ||
                   bot.comandos.get(bot.aliases.get(command.slice(prefix2.length)));
             if(arquivocmd) {
               arquivocmd.ir(bot, message, args, prefix, database)
             }

          })
          
          bot.on("message", async message => {
            if (message.channel.type === 'dm') return;
            if (message.author.bot) return;
             chatID1 = await database.ref("Servidores/"+message.guild.id+"/channel").once("value")
             chatID = chatID1.val()
            if(!chatID) chatID = "n"
            if(chatID === "n"){}else{
              if(message.channel.id === chatID.id){
                svnumber1 = await database.ref("Servidores/"+message.guild.id+"/number").once("value")
                svnumber = svnumber1.val()
                if(!svnumber) svnumber = "1"
                if(!svnumber === "1") svnumber = svnumber1.val().number
                chatnumber2 = message.content
                chatnumber = chatnumber2
                number5 = svnumber
                modnum1 = await database.ref("Servidores/"+message.guild.id+"/modo").once("value")
                modnum3 = modnum1.val()?modnum1.val().modo:"n"

                //console.log(number5+" - "+chatnumber2+" - "+svnumber)
                let viriuser = await database.ref("Servidores/"+message.guild.id+"/user").once("value")
                let verifuser = viriuser.val()?viriuser.val().user:"n"
                if(chatnumber2 === ""+(svnumber1.val()?svnumber1.val().number:"1")+"") {
                  if(verifuser === message.author.id) {
                    database.ref("Servidores/"+message.guild.id+"/number").update({number: "1"})
                    database.ref("Servidores/"+message.guild.id+"/user").update({user: "a"})
                      message.react("❌")
                        return  message.channel.send("<@"+message.author+"> você acabou de ferrar com tudo em **"+(svnumber1.val()?(svnumber1.val().number-1):"1")+"**! (Você não pode contar 2 números em sequencias)\n> O proximo Número e **1**.")      
                  }
                  database.ref("Servidores/"+message.guild.id+"/number").update({number: ""+(Number((svnumber1.val()?svnumber1.val().number:"1"))+1)+""})
                  message.react("✅")
                  database.ref("Servidores/"+message.guild.id+"/user").update({user: message.author.id})
                }else{
                  if(modnum3 === "n") {
                    if(Number(message.content)){
                    database.ref("Servidores/"+message.guild.id+"/number").update({number: "1"})
                    database.ref("Servidores/"+message.guild.id+"/user").update({user: "a"})
                    message.react("❌")
                      return  message.channel.send("<@"+message.author+"> você acabou de ferrar com tudo em **"+(svnumber1.val()?(svnumber1.val().number-1):"1")+"**!\n> O proximo Número e **1**.")      
                  }
                } 
                  if(modnum3 === "s") {
                    database.ref("Servidores/"+message.guild.id+"/number").update({number: "1"})
                    database.ref("Servidores/"+message.guild.id+"/user").update({user: "a"})
                    message.react("❌")
                      return  message.channel.send("<@"+message.author+"> você acabou de ferrar com tudo em **"+(svnumber1.val()?(svnumber1.val().number-1):"1")+"**!\n> O proximo Número e **1**.")
      
                  }
                  }
                }
              }  
          })

          bot.login(token)
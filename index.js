
     const Discord = require("discord.js") 
     const bot = new Discord.Client()
     const fs = require("fs")
     const butt = require("discord.js-buttons")(bot)//usaremos mais para frente
     const {token, prefix, apiKey, authDomain, databaseURL, projectId, storageBucket, messagingSenderId, appId} = require("./config.json")
const colors = require('colors')
const firebase = require('firebase');
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
             chatID = await database.ref("Servidores/"+message.guild.id+"/channel").once("value").val()
            if(!chatID) chatID = "n"
            console.log(chatID)
            if(chatID === "n"){console.log("a")}else{
              if(bot.guilds.cache.get(message.guild.id).channels.cache.get(chatID.id)){
                console.log("a")
                svnumber = await database.ref("Servidores/"+message.guild.id+"/number").val()
                if(!svnumber) svnumber = 0
                chatnumber = message.content+svnumber
                number = svnumber+1
                if(chatnumber === svnumber) {}else{message.channel.send("<@"+message.author+"> você acabou de ferrar com tudo em **"+svnumber+"**!")}
              }
            }
          })

          bot.login(token)
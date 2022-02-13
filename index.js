
     const Discord = require("discord.js") 
     const bot = new Discord.Client()
     const fs = require("fs")
     const butt = require("discord.js-buttons")(bot)//usaremos mais para frente
     const {token, prefix} = require("./config.json") //pasta onde tara o token e o prefix do bot!

             bot.on("ready", () => {
           console.log("Yep!")
          })

          bot.on("message", async message => {   
            const active = new Map();
            let prefix2 = "t."
               let messageArray = message.content.split(' ');
               let command = messageArray[0];
               if (!message.content.toLowerCase().startsWith(prefix2.toLowerCase())) return;
               const args = message.content.slice(prefix2.length).trim().split(/ +/g);
               const comando = args.shift().toLowerCase();
               let ops = {active: active};
               let arquivocmd =
                   bot.commands.get(command.slice(prefix2.length)) ||
                   bot.commands.get(bot.aliases.get(command.slice(prefix2.length)));
             if(arquivocmd) {
               arquivocmd.run(bot, message, args, prefix2)
             }
          })
          
          bot.login(token)
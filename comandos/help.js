exports.ir = async (bot, message, args) => {
    const Discord = require("discord.js")
    const ms = require("pretty-ms")
    embed = new Discord.MessageEmbed()
    .setColor("#8765D2")
    .setDescription("**Configurações:**\n1. Crie um canal que você gostaria de contar infinitamente.\n2. Digite `c.canal` neste canal que você escolheu. (Você deve ter permissão de `Administrador` para executar)\n3. Comece a contar no canal, começando com o número `1`.\n\n **Regras de Contagem:**\n• Uma só pessoa não pode contar dois números em sequencia. (É necessário ao menos duas pessoas).\n• Não use bots para contar automaticamente (mesmo se usar os pontos não seram contados).")
message.channel.send(embed)
embed2 = new Discord.MessageEmbed()
.setColor("#8765D2")
.setDescription("**Comandos de Usuários:** *Os campos após o prefixo `?` são opcionais*\n• `c.server` - Veja as estastísticas atuais do servidor\n • `c.stats` - Mostra as estatísticas do bot\n\n**Comandos de Admin:**\n• `c.canal` - Define o canal de contagens para o mencionado.\n• `c.numberon < on | off >` - A contagem será arruinada caso enviem qualquer mensagem que não seja um *número* válido\n\n[Codigo Fonte.](https://github.com/vitorxcp/Replica-do-counting)\n[Vote em Mim.](https://top.gg/bot/942470767399022712/vote)\n[Convite o Bot para seu Servidor.](https://discordapp.com/oauth2/authorize?client_id=942470767399022712&permissions=193140321527&scope=bot)\n")
.setFooter("Feito por vitor_xp#1958, mantido por vitor_xp#1958 | Servidores: "+bot.guilds.cache.size.toLocaleString()+" | Uptime: "+ms(bot.uptime)+"")
message.channel.send(embed2)
}//• `c.user ?[ @Menção | ID | Nome]` -  Veja as estatísticas de um usuário\n • `c.stats` - Mostra as estatísticas do bot
exports.info = {
    nome: "help",
    aliases: ["ajuda"]
}
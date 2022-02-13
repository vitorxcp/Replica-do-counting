exports.ir = async (bot, message, args) => {
    const Discord = require("discord.js")
    const ms = require("pretty-ms")
    embed = new Discord.MessageEmbed()
    .setColor("#8765D2")
    .setDescription("**Configurações:**\n1. Crie um canal que você gostaria de contar.\n2. Digite `c.canal` neste canal. (Você deve ter permissões de `Administrador`)\n3. Comece a contar no canal, começando com o número 1.\n\n **Regras de Contagem:**\n• Uma só pessoa não pode contar dois números em sequencia. (É necessário ao menos duas pessoas).\n• Não use bots para contar automaticamente.")
message.channel.send(embed)
embed2 = new Discord.MessageEmbed()
.setColor("#8765D2")
.setDescription("**Comandos de Usuários:** *Os campos após o prefixo `?` são opcionais*\n• `c.slb ?[Pagina]` - Veja o top 10 usuários de seu servidor\n• `c.user ?[@Menção/ID/Nome]` -  Veja as estatísticas de um usuário\n• `c.server` - Veja as estastísticas atuais do servidor\n• `c.stats` - Mostra as estatísticas do bot\n\n**Comandos de Admin:**\n• `c.canal` - Define o canal de contagens para o canal que foi executado, em vez do canal padrão.\n• `c.numberon [on/off]` - A contagem será arruinada caso enviem qualquer mensagem que não seja um *número* válido ou um *comando do bot*\n\n[Codigo Fonte.](https://github.com/vitorxcp/Replica-do-counting)\n[Convite o Bot para seu Servidor.](https://discordapp.com/oauth2/authorize?client_id=942470767399022712&permissions=193140321527&scope=bot)\n")
.setFooter("Feito por vitor_xp#1958, mantido por vitor_xp#1958 | Servidores: "+bot.guilds.cache.size.toLocaleString()+" | Uptime: "+ms(bot.uptime)+"")
message.channel.send(embed2)
}
exports.info = {
    nome: "help",
    aliases: ["ajuda"]
}
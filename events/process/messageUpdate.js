const { Client, Message, Permissions } = require("discord.js")
const { prefix } = require("../../storage/config.json");

/**
 * Fired when a message is send by a user, in a channel that the bot can see.
 * @param {Client} client The DiscordJS Client
 * @param {Message} OldMessage The oldmessage
 * @param {Message} NewMessage The newmessage
 */
module.exports = async (client, OldMessage, NewMessage) => {
    const { author, content, channel, guild } = NewMessage

    if (!content.startsWith(prefix) || author.bot || !guild) return;
    if (OldMessage.content == content) return;

    const args = content.slice(prefix.length).trim().split(/ +/g);
    const commandName = args.shift().toLowerCase();

    const command = client.commands.get(commandName) || client.commands.find(cmd => cmd.help.aliases && cmd.help.aliases.includes(commandName));
    if (!command) return

    if (command.help.args && !args.length) {
        let noArgsReply = `Il faut des arguments pour utiliser cette commande ${author}`
        if (command.help.usage) noArgsReply += `\nVoici comment utiliser la commande ${prefix}${command.help.name} ${command.help.usage}`;

        return channel.send(noArgsReply).then(m => {
            m.delete({ timeout: 5000 });
            message.delete({ timeout: 5000 });
        })

    }
    if (!OldMessage.member.hasPermission(command.help.permission)) {
        const memperms = new Permissions(OldMessage.member.permissions.bitfield);
        const reqperms = new Permissions(command.help.permission);
        let perms = "";
        memperms.missing(reqperms).forEach(perm => {
            perms += perm + ",\n"
        })
        return await channel.send(`Vous n'avez pas la permissions d'effectuer cette commande.\n\nIl te faut les permissions : ${perms}`).then(m => m.delete({ timeout: 5000 }));
    }

    client.emit("command", NewMessage, command.help.name)
    command.run(client, NewMessage, args);
}
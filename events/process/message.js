const { Client, Message } = require("discord.js")
const { prefix } = require("../../storage/config.json");

/**
 * Fired when a message is send by a user, in a channel that the bot can see.
 * @param {Client} client The DiscordJS Client
 * @param {Message} message The message received
 */
module.exports = async (client, message) => {
    const { author, content, channel, guild } = message

    if (channel.id == "826924112735109231") {
        await message.react("✅")
        await message.react("❌")
    }
    if (!content.startsWith(prefix) || author.bot || !guild) return;

    const args = content.slice(prefix.length).trim().split(/ +/g);
    const commandName = args.shift().toLowerCase();

    const command = client.commands.get(commandName) || client.commands.find(cmd => cmd.help.aliases && cmd.help.aliases.includes(commandName));
    if (!command) return

    if (command.help.args && !args.length) {
        let noArgsReply = `Il faut des arguments pour cette commande ${author}`
        if (command.help.usage) noArgsReply += `\nVoici comment utiliser la commande \`${prefix}${command.help.name} ${command.help.usage}\``;

        return channel.send(noArgsReply).then(m => {
            m.delete({ timeout: 5000 });
            message.delete({ timeout: 5000 });
        })

    }
    if (!message.member.hasPermission(command.help.permission)) {
        return message.channel.send(`Vous n'avez pas la permissions d'effectuer cette commande.`).then(m => m.delete({ timeout: 5000 }));
    }

    client.emit("command", message, command.help.name)
    command.run(client, message, args);
}
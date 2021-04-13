const { MessageEmbed, Permissions, Client, Message } = require("discord.js");
const { prefix } = require("../../storage/config.json");
const categorylist = require("fs").readdirSync("./commands/").filter(s => s !== "private");

/**
 * @param {Client} client 
 * @param {Message} message 
 * @param {String[]} args 
 */
module.exports.run = async (client, message, args) => {
    if (!args.length) {
        const helpEmbed = new MessageEmbed()
            .setTitle('Liste des commandes')
            .setColor("ORANGE")
            .setDescription(`Une liste de toutes les sous-catégories disponibles et leur commandes.\nPour plus d'informations sur une commande, tapez \`${prefix}help (command_name)\``)
            .setFooter(client.user.tag, client.user.displayAvatarURL())

        for (const category of categorylist) {
            helpEmbed.addField(`${category}`, `${client.commands.filter(cat => cat.help.category === category.toLowerCase()).map(cmd => cmd.help.name).join(", ")}`)
        }
        return message.channel.send({ embed: helpEmbed }).then(m => {
            m.delete({ timeout: 30000 })
            message.delete({ timeout: 30000 })
        })
    } else {
        const command = client.commands.get(args[0].toLowerCase()) || client.commands.find(cmd => cmd.help.aliases && cmd.help.aliases.includes(args[0].toLowerCase()));
        if (!command || command.help.category === "private") return //private command
        let perms = "";
        new Permissions(command.help.permission).toArray().forEach(perm => {
            perms += perm + ",\n"
        })

        const helpEmbedzoom = new MessageEmbed()
            .setTitle(`Commande ${command.help.name}`)
            .setFooter(client.user.tag, client.user.displayAvatarURL())
            .setColor("ORANGE")
            .addField("Description", `${command.help.description}`,)
            .addField("Utilisation", command.help.usage ? `${prefix}${command.help.name} ${command.help.usage}` : `${prefix}${command.help.name}`, true)
        if (command.help.aliases.length > 1) helpEmbedzoom.addField("Alias", `${command.help.aliases.join(", ")}`, true)
            helpEmbedzoom.addField("Permission name", command.help.permission ? `${perms}` : `Aucune`);


        return message.channel.send({ embed: helpEmbedzoom }).then(m => {
            m.delete({ timeout: 30000 })
            message.delete({ timeout: 30000 })
        })
    }
}

module.exports.help = {
    name: "help",
    aliases: ["help", "h","aled"],
    description: "L'aide",
    usage: "(command_name)",
    permission: 0,
    args: false,
    category: "misc",
    untracked: false
}
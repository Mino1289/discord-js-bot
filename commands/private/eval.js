const { Client, Message } = require("discord.js")

/**
 * @param {Client} client 
 * @param {Message} message 
 * @param {String[]} args 
 */
module.exports.run = async (client, message, args) => {
    const { content, author, channel, guild, member } = message
    let app = await client.fetchApplication() // We assume that you are not in a team,
    let owner = app.owner                     // If it's the case, replace the owner.id by your ID
    if (author.id === owner.id) {

        function clean(text) {
            if (typeof (text) === "string")
                return text.replace(/`/g, "`" + String.fromCharCode(8203)).replace(/@/g, "@" + String.fromCharCode(8203));
            else
                return text;
        }

        try {
            const code = content.replace("?eval", "");
            let evaled = eval(code);

            if (typeof evaled !== "string")
                evaled = require("util").inspect(evaled);

            await channel.send(clean(evaled), { code: "js" });
        } catch (err) {
            await channel.send(`\`ERROR\` \`\`\`xl\n${clean(err)}\n\`\`\``);
        }
    }
}

module.exports.help = {
    name: "eval",
    aliases: ["eval"],
    description: "Eval DiscordJS and javascript code.",
    usage: "[javascript code]",
    permission: 0,
    args: true,
    category: "private",
    untracked: false
}
const { Client, Message } = require("discord.js");
/**
 * This command is a template
 * @param {Client} client 
 * @param {Message} message 
 * @param {String[]} args 
 */
module.exports.run = async (client, message, args) => {
    await message.reply("Pong !")
}

module.exports.help = {
    name: "ping", 
    aliases: ["ping"], 
    description: "A simple ping command", 
    usage: "", 
    permission: 0, 
    args: false, 
    category: "misc", 
    untracked: false 
}
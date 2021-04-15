const { Client, Message } = require("discord.js");

/**
 * Fire when a command is executed
 * @param {Client} client The DiscordJS Client
 * @param {Message} message The message sent by a user for a command
 * @param {String} commandName The name of command the user type for
 */
module.exports = async (client, message, commandName) => {
    const {guild, author} = message
    console.log(`Command ${commandName} was executed in the server ${guild.name}, by ${author.tag}.`) // You can do whatever you want when a command is executed (logging into file/console/discord)
}
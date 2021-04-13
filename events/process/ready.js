const { Client } = require("discord.js");

/**
 * @param {Client} client The client DiscordJS
 */
module.exports = async (client) => {
    console.log(`Bot connected as ${client.user.tag}`);
}
const { Client } = require("discord.js");

/**
 * Fired when we start the bot
 * @param {Client} client The DiscordJS Client
 */
module.exports = async (client) => {
    console.log(`Bot connected as ${client.user.tag}`);
}
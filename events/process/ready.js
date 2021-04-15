const { Client } = require("discord.js");

/**
 * Fired when we start the bot
 * @param {Client} client The DiscordJS Client
 */
module.exports = async (client) => {
    await client.user.setActivity({ name: `${client.guilds.cache.size} servers`, type: "WATCHING" });
    console.log(`Bot connected as ${client.user.tag}`);
}
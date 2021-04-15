const { Client, Guild } = require("discord.js");

/**
 * Fired when the bot leave a new discord server
 * @param {Client} client The DiscordJS Client
 * @param {Guild} guild The guild that the bot leaved
 */
module.exports = async (client, guild) => {
    await client.user.setActivity({ name: `${client.guilds.cache.size} servers`, type: "WATCHING" });
}
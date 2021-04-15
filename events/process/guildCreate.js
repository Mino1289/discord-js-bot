const { Client, Guild } = require("discord.js");

/**
 * Fired when the bot join a new discord server
 * @param {Client} client The DiscordJS Client
 * @param {Guild} guild The guild that the bot joined
 */
module.exports = async (client, guild) => {
    await client.user.setActivity({ name: `${client.guilds.cache.size} servers`, type: "WATCHING" });
}
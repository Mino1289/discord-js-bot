const { readdirSync } = require("fs");
const { Client } = require("discord.js")

/**
 * Charge toutes les commandes
 * @param {Client} client Le client DiscordJS
 */
const loadCommands = (client, dir = "./commands/") => {
    console.log("\nLoading Commands :\n")
    readdirSync(dir).forEach(dirs => {
        const commands = readdirSync(`${dir}/${dirs}/`).filter(files => files.endsWith(".js"));

        for (const file of commands) {
            const getFileName = require(`../${dir}/${dirs}/${file}`);
            client.commands.set(getFileName.help.name, getFileName);
            console.log(`Command : ${getFileName.help.name}`);
        }
    });
};


/**
 * Charge tous les events
 * @param {Client} client Le client DiscordJS
 */
const loadEvents = (client, dir = "./events/") => {
    console.log("Loading Events :\n")
    readdirSync(dir).forEach(dirs => {
        const events = readdirSync(`${dir}/${dirs}/`).filter(files => files.endsWith(".js"));

        for (const event of events) {
            const evt = require(`../${dir}/${dirs}/${event}`);
            const evtName = event.split(".")[0];
            client.on(evtName, evt.bind(null, client));
            console.log(`Event : ${evtName}`);
        }
    });
};

module.exports = {
    loadCommands,
    loadEvents
};
const { readdirSync } = require("fs");
const { Client } = require("discord.js")

/**
 * Load all the commands
 * @param {Client} client The DiscordJS Client
 */
const loadCommands = (client, dir = "./commands/") => {
    console.log("\nLoading Commands :\n")
    readdirSync(dir).forEach(dirs => {
        const commands = readdirSync(`${dir}/${dirs}/`).filter(files => files.endsWith(".js"));

        for (const file of commands) {
            const getFileName = require(`../${dir}/${dirs}/${file}`); 
            client.commands.set(getFileName.help.name, getFileName);
            console.log(`Command : ${getFileName.help.name}`);
            if (getFileName.help.untracked) {
                client.commands.delete(getFileName.help.name)
                console.log(`Command untracked : ${getFileName.help.name}`)
            }
        }
    });
};


/**
 * Load all the events
 * @param {Client} client The DiscordJS Client
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
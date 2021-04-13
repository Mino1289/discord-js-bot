const { Client, Intents } = require("discord.js");
const { loadCommands, loadEvents } = require("./storage/functions")
const { token, prefix } = require("./storage/config.json");

const client = new Client({
    disableMentions: "everyone",
    ws:{
        intents: Intents.ALL
    },
    presence:{
        activity: {
            name: `${prefix}help`,
            type: "WATCHING"
        }
    }
});

loadCommands(client)
loadEvents(client)

client.login(token)
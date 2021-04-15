const { Client, Message } = require("discord.js");
/**
 * This command is a template
 * @param {Client} client 
 * @param {Message} message 
 * @param {String[]} args 
 */
module.exports.run = async (client, message, args) => {
    //code to execute, see https://discord.js.org/#/
}

module.exports.help = {
    name: "template", // name of the command
    aliases: ["template"], // aliases of the command
    description: "template command", // description 
    usage: "", // usage of the command
    permission: 0, // permission bit
    args: false, // yes or not, if args are required 
    category: "misc", // should match the subfolder name
    untracked: true // set to true when the command will not be usable
}
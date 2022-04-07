const { Client } = require('discord.js')
const { Message } = require('discord.js')

module.exports = {
    name: "messageCreate",
    once: false,
    /**
     * @param {Message} message 
     * @param {Client} client 
     */
    async execute(message, client) {
        if(message.author.bot) return;
        if(message.content.startsWith("Say the line, Reich!")) {
            message.reply("Anschluss Time")
        }
    }
}
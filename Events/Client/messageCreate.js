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
        if(message.content.toLowerCase().startsWith("Say the line, Reich!".toLowerCase())) {
            message.channel.send("Anschluss Time")
        }
        if(message.content.toLowerCase().startsWith("Hey".toLowerCase())) {
            message.channel.send(`Hello! ${message.member.user.username}`)
        }
        if(message.content.toLowerCase().startsWith("Hello".toLowerCase())) {
            message.channel.send(`Hi ${message.member.user.username}`)
        }
    }
}
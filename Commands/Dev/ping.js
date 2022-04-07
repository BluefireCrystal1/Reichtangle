const { CommandInteraction } = require('discord.js')

module.exports = {
    name: 'ping',
    description: "Bot latency",
    /**
     * @param {CommandInteraction} interaction 
     */
    async execute(interaction) {
        interaction.reply("Pong!")
    }
}
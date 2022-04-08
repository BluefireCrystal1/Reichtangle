const { CommandInteraction, MessageEmbed } = require('discord.js')
const { SlashCommandBuilder } = require('@discordjs/builders')

module.exports = {
    data: new SlashCommandBuilder()
        .setName('ping')
        .setDescription("Bot latency"),
    /**
     * @param {CommandInteraction} interaction 
     */
    async execute(interaction) {
        const ping = Date.now() - interaction.createdTimestamp
        const embed = new MessageEmbed()
            .setTitle('Pong 🏓')
            .setDescription(`🟢 \`${ping}\` ms `)
            .setColor('GREEN')
        const embed2 = new MessageEmbed()
            .setTitle('Pong 🏓')
            .setDescription(`🔴 \`${ping}\` ms `)
            .setColor('RED')
        if (ping > 50) {
            interaction.reply({ content: 'Pong! 🏓', embeds: [embed2] })
        }
        if (ping < 50) {
            interaction.reply({ content: 'Pong! 🏓', embeds: [embed] })
        }
    }
}
const { MessageEmbed } = require('discord.js');
const { SlashCommandBuilder } = require('@discordjs/builders')
const { CommandInteraction } = require('discord.js')

module.exports = {
    data: new SlashCommandBuilder()
        .setName('say')
        .setDescription("Says input string")
        .addStringOption(option =>
            option.setName("input")
                .setDescription("String to send")
                .setRequired(true)),
    /**
     * @param {CommandInteraction} interaction 
     */
    async execute(interaction) {
        const input = interaction.options.getString("input");
        const embed = new MessageEmbed()
            .setAuthor({ name: interaction.user.username, iconURL: interaction.member.displayAvatarURL({ format: 'png' }) })
            .setDescription(input)
            .setColor("LUMINOUS_VIVID_PINK")
            .setFooter({ text: `/say` })
            .setTimestamp()
        interaction.reply({ embeds: [embed] })
    }
}
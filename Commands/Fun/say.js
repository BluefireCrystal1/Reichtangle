const { MessageEmbed } = require('discord.js');
const { CommandInteraction } = require('discord.js')

module.exports = {
    name: 'say',
    description: 'Says something for you',
    options: [
        {
            name: "input",
            description: "The string to say.",
            type: "3",
            required: true
        }
    ],
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
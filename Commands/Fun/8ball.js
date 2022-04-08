const { MessageEmbed } = require('discord.js');
const { CommandInteraction } = require('discord.js');
const { SlashCommandBuilder } = require('@discordjs/builders')


module.exports = {
    data: new SlashCommandBuilder()
        .setName('8ball')
        .setDescription("8ball command!")
        .addStringOption(option =>
            option.setName("question")
                .setDescription("Ask a question")
                .setRequired(true)),
    /**
     * @param {CommandInteraction} interaction 
     */
    async execute(interaction) {
        const question = interaction.options.getString("question")
        const responses = [
            "As I see it, yes.",
            "Ask again later.",
            "Better not tell you now.",
            "Cannot predict now.",
            "Concentrate and ask again.",
            "Don't count on it.",
            "It is certain.",
            "It is decidedly so.",
            "Most likely.",
            "My reply is no.",
            "My sources say no.",
            "Outlook not so good.",
            "Outlook good.",
            "Reply hazy, try again.",
            "Signs point to yes.",
            "Very doubtful.",
            "Without a doubt.",
            "Yes.",
            "Yes - definitely.",
            "You may rely on it."
        ]

        let rand = Math.floor((Math.random() * responses.length) + 1)
        let result = responses[rand - 1]
        const embed = new MessageEmbed()
            .setTitle("8ball says...")
            .setDescription(`Question: ${question}\nAnswer: ${result}`)
            .setColor("LUMINOUS_VIVID_PINK")
        interaction.reply({ embeds: [embed] })
    }
}
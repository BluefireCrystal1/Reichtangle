const { Client, CommandInteraction, MessageEmbed } = require("discord.js")

module.exports = {
    name: 'interactionCreate',
    once: false,
    /**
     * @param {CommandInteraction} interaction 
     * @param {Client} client 
     */
    async execute(interaction, client) {
        if(interaction.isCommand()) {
            const command = client.commands.get(interaction.commandName);
            if(!command) return interaction.reply({ embed: [
                new MessageEmbed()
                .setColor("RED")
                .setDescription("⛔ An error occurred while running this command.")
            ] }) && client.commands.delete(interaction.commandName)

            try {
            command.execute(interaction, client)
            } catch (error) {
                console.error(error)
                await interaction.reply({ content: '⛔ There was an error while executing this command!', ephemeral: true });
            }
        }
    }
}
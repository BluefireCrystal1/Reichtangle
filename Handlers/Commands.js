const { Client } = require('discord.js');
const { promisify } = require('util');
const { glob } = require('glob');
const PG = promisify(glob)
const Ascii = require('ascii-table');
const { REST } = require('@discordjs/rest');
const { Routes } = require('discord-api-types/v9');
require('dotenv').config()

/**
 * @param {Client} client
 */
module.exports = async (client) => {
    const Table = new Ascii("Commands Loaded");

    CommandsArray = [];


    const clientId = '951351401349521488';
    const guildId = '932477320458010664';

    (await PG(`${process.cwd()}/Commands/*/*.js`)).map(async (file) => {
        const command = require(file);

        if (!command.name) return Table.addRow(file.split("/")[7], "❌ FAILED", "Missing a name.")
        if (!command.description) return Table.addRow(command.name, "❌ FAILED", "Missing a description.")

        client.commands.set(command.name, command);
        CommandsArray.push(command);

        const rest = new REST({ version: '9' }).setToken(process.env.TOKEN);

        (async () => {
            try {
                console.log('Started refreshing application (/) commands.');

                await rest.put(
                    Routes.applicationGuildCommands(clientId, guildId),
                    { body: CommandsArray },
                );
                await rest.put(
                    Routes.applicationCommands(clientId),
                    { body: CommandsArray },
                );

                console.log('Successfully reloaded application (/) commands.');
            } catch (error) {
                console.error(error);
            }
        })();

        await Table.addRow(command.name, "✅ SUCCESSFUL")

    });

    console.log(Table.toString())
}
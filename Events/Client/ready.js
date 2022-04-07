const { Client } = require("discord.js");
const mongoose = require('mongoose');
require('dotenv').config()

module.exports = {
    name: 'ready',
    once: true,
    /**
     * @param {Client} client
     */
    execute(client) {
        console.log("Connected!");
        client.user.setActivity({ name: `${client.guilds.cache.size} SERVERS`, type: "WATCHING" });
        mongoose.connect(process.env.mongoUrl,
            {
                keepAlive: true
            }).then(console.log("DB connected!!"));
    }
}
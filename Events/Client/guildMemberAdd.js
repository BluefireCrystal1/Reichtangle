const Canvas = require('canvas')
Canvas.registerFont('./Insanibc.ttf', { family: 'customFont' })
const { Client } = require("discord.js");
const { GuildMember } = require('discord.js')
const { MessageAttachment, MessageEmbed } = require('discord.js')

module.exports = {
    name: 'guildMemberAdd',
    once: false,
    /**
     * @param {Client} client
     * @param {GuildMember} member 
     */
    async execute(member, client) {
        const welcomeEmbed = new MessageEmbed()
            .setTitle('Welcome!')
            .setDescription(`**${member.displayName}**! Reichtangle welcomes you, to our server ${member.guild.name}.`)
            .setColor("LUMINOUS_VIVID_PINK")
        const userRole = member.guild.roles.cache.find(role => role.name === 'Members')
        const chnl = await member.guild.channels.cache.get('947339016787861545')
        await member.roles.add(userRole)
        const applyText = (canvas, text) => {
            const context = canvas.getContext('2d');
            let fontSize = 70;

            do {
                context.font = `${fontSize -= 10}px "customFont"`;
            } while (context.measureText(text).width > canvas.width - 300);

            return context.font;
        };
        // Image
        const canvas = Canvas.createCanvas(700, 250);
        const context = canvas.getContext('2d');

        await Canvas.loadImage('https://i.imgur.com/5Gg20ZZ.png').then(async (background) => {
            context.drawImage(background, 0, 0, canvas.width, canvas.height);

            context.font = applyText(canvas, member.displayName);
            context.fillStyle = '#ffffff';
            context.fillText(member.displayName, canvas.width / 2.5, canvas.height / 1.8);

            context.font = '26px "customFont"';
            context.fillStyle = '#26C9F9';
            context.fillText(`Welcome to ${member.guild.name}!`, canvas.width / 2.5, canvas.height / 3.2);

            context.font = '80px "customFont"';
            context.fillStyle = '#26C9F9';
            context.fillText(`#${member.guild.memberCount}`, canvas.width / 2.5, canvas.height / 1.15);

            context.beginPath();
            context.arc(125, 125, 100, 0, Math.PI * 2, true);
            context.closePath();
            context.clip();

            const avatar = await Canvas.loadImage(member.displayAvatarURL({ format: 'png' }));
            context.drawImage(avatar, 25, 25, 200, 200);
            const attachment = new MessageAttachment(canvas.toBuffer(), 'image.png');

            chnl.send({ files: [attachment], embeds: [welcomeEmbed] })
        })
        // Image
    }
}
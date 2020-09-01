// const { prefix, token } = require('./config.json');
const fetch = require('node-fetch');
const Discord = require('discord.js');
const client = new Discord.Client();
var PORT = process.env.PORT || 5000;
var prefix = ("t!")


client.once('ready', () => {
	console.log('Ready!');
	client.user.setActivity('bot poggers')
});

client.on('message', async message => 
	
	{if (!message.content.startsWith(prefix) || message.author.bot) return;

	const args = message.content.slice(prefix.length).trim().split(/ +/);
	const command = args.shift().toLowerCase();
	if (message.content.startsWith(`${prefix}ping`)) {
		message.channel.send('Pong.');
	
	} else if (message.content === `${prefix}server`) {
		message.channel.send(`Server name: ${message.guild.name}\nTotal members: ${message.guild.memberCount}`);

	} else if (message.content === `${prefix}toad`) {
		var toadRandom = Math.floor(Math.random() *5);
		console.log(toadRandom);
		if (toadRandom === 0) {
			const toadEmbed1 = new Discord.MessageEmbed()
                .setColor('#F47FFF')
			    .setTitle('who doesnt love a good toad')
			    .attachFiles(['../discordbot/assets/toad1.jpg'])
			    .setImage('attachment://toad1.jpg')
			message.channel.send(toadEmbed1)
		} else if (toadRandom === 1) {
			const toadEmbed2 = new Discord.MessageEmbed()
                .setColor('#F47FFF')
			    .setTitle('who doesnt love a good toad')
			    .attachFiles(['../discordbot/assets/toad2.jpg'])
			    .setImage('attachment://toad2.jpg')
			message.channel.send(toadEmbed2)
		} else if (toadRandom === 2) {
			const toadEmbed3 = new Discord.MessageEmbed()
                .setColor('#F47FFF')
			    .setTitle('who doesnt love a good toad')
			    .attachFiles(['../discordbot/assets/toad3.jpg'])
			    .setImage('attachment://toad3.jpg')
			message.channel.send(toadEmbed2)
		} else if (toadRandom === 3) {
			const toadEmbed4 = new Discord.MessageEmbed()
                .setColor('#F47FFF')
			    .setTitle('who doesnt love a good toad')
			    .attachFiles(['../discordbot/assets/toad4.jpg'])
			    .setImage('attachment://toad4.jpg')
			message.channel.send(toadEmbed4)
		} else if (toadRandom === 4) {
			const toadEmbed5 = new Discord.MessageEmbed()
                .setColor('#F47FFF')
			    .setTitle('who doesnt love a good toad')
			    .attachFiles(['../discordbot/assets/toad5.jpg'])
			    .setImage('attachment://toad5.jpg')
			message.channel.send(toadEmbed5)
		} else if (toadRandom === 5) {
			const toadEmbed6 = new Discord.MessageEmbed()
                .setColor('#F47FFF')
			    .setTitle('who doesnt love a good toad')
			    .attachFiles(['../discordbot/assets/toad6.jpg'])
			    .setImage('attachment://toad6.jpg')
			message.channel.send(toadEmbed6)
		} else if (toadRandom === 6) {
			const toadEmbed7 = new Discord.MessageEmbed()
                .setColor('#F47FFF')
			    .setTitle('who doesnt love a good toad')
			    .attachFiles(['../discordbot/assets/toad7.jpg'])
			    .setImage('attachment://toad7.jpg')
			message.channel.send(toadEmbed7)
		}

	} else if (message.content === `${prefix}bot`) {
		const botEmbed = new Discord.MessageEmbed()
			.setColor('#F47FFF')
			.setTitle('Bot Status')
			.setDescription('Active and Online')
			.attachFiles(['../discordbot/assets/linusface.jpg'])
			.setThumbnail('attachment://linusface.jpg')
			.setFooter('i was made by @toad#9999')
		message.channel.send(botEmbed);
    
	} else if (message.content === `${prefix}bobberto`) {
		message.channel.send('bobberto? more like lamerto')

	} else if (message.content === `${prefix}help`) {
		const helpEmbed = new Discord.MessageEmbed()
			.setColor('#F47FFF')
			.setTitle('toadbot Commands')
			.setDescription('t!bot - bot status \n !toad - random toad pic (dm me more) \n t!bot - bot status \n t!server - server info \n t!bobberto - epik funny \n t!say - bot repeats what you said and deletes your message')
			.attachFiles(['../discordbot/assets/linusface.jpg'])
			.setThumbnail('attachment://linusface.jpg')
			.setFooter('i was made by @toad#9999') 
		message.channel.send(helpEmbed)


	} else if (command === 'cruise') {
		message.channel.send('toadbot is a fan of tom cruise confirmed!!!11!!!!!')
	} else if (command === 'say') {
		if (!args.length) {
			return message.channel.send(`say something smh ${message.author}!`);
		}
	
		message.channel.send(`${args.join(' ')}`);
		message.delete(args)
	}




});

client.login(process.env.BOT_TOKEN);


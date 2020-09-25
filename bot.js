

const Discord = require('discord.js');
const Ping = require('ping.js');

const bot = new Discord.Client;
const p = new Ping();


// token
const token = 'NzU4NjAxMjY1Mzc4NDkyNDM2.X2xUew.x1clD1FZwJFVMvgY6HH9kvtgdoc';


// test online
bot.on('ready', () => {
	console.log('Bot is online');
})

// prefix
const prefix = '.';

// messaging
bot.on('message', msg => {
	let args = msg.content.substring(prefix.length).split(' ');
	// message list
	switch (args[0]){
		case 'bot':
			msg.reply('Saya selalu siap menerima perintah anda!');
			break;
		case 'info':
			const embed = new Discord.MessageEmbed();

		    embed.setColor('f0f0f0')
			embed.setTitle(`Fdev_bot`)
			embed.setAuthor('AlFathir', 'https://images2.imgbox.com/56/9b/9xkf7hCA_o.png')
			embed.setDescription('Sebuah bot Discord yang dibuat oleh AlFathir menggunakan Node.js dan Discord.js.')
			embed.setThumbnail('https://www.freepnglogos.com/uploads/discord-logo-png/discord-logo-vector-download-0.png')
			embed.addFields(
				{ name: 'Author', value: 'AlFathir' },
				{ name: 'Version', value: 'Alpha' },
				{ name: 'Dependencies', value: 'Node.js , Discord.js' },
				{ name: 'Created date', value: '24/09/2020' }
				)
			embed.setTimestamp()
			embed.setFooter('Salam hangat, AlFathir', 'https://images2.imgbox.com/56/9b/9xkf7hCA_o.png');

			msg.channel.send(embed);

			break;
		case 'ping':
			msg.reply('pong!!')
			break;

	}
});






// onlining
bot.login(token);


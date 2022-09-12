const bot = require('../lib/events')
const {
	ctt,
	addSpace,
	textToStylist,
	PREFIX,
	getUptime,
	PLUGINS,
	getRam,
} = require('../lib/')
const { VERSION } = require('../config')
bot.addCommand(
	{
		pattern: 'help ?(.*)',
		fromMe: true,
		dontAddCommandList: true,
	},
	async (message, match) => {
		const date = new Date()
		let CMD_HELP = `╭────────────────╮
						ʟᴇᴠᴀɴᴛᴇʀ
╰────────────────╯

╭────────────────
│ . ___________________

▕╮╭┻┻╮╭┻┻╮╭▕╮╲

▕╯┃╭╮┃┃╭╮┃╰▕╯╭▏

▕╭┻┻┻┛┗┻┻┛   ▕  ╰▏

▕╰━━━┓┈┈┈╭╮▕╭╮▏

▕╭╮╰┳┳┳┳╯╰╯▕╰╯▏

▕╰╯┈┗┛┗┛┈╭╮▕╮┈▏
🧸̶⃮⃖🤍̶⃮⃖🦋||KIᑎG ᗪIᗪᗪᗩ  ̶⃮⃖|🍓Bot̶⃮⃖✨̶⃮⃖🌸
╰────────────────
╭────────────────
`
		const commands = []
		bot.commands.map(async (command, index) => {
			if (
				command.dontAddCommandList === false &&
				command.pattern !== undefined
			) {
				commands.push(ctt(command.pattern))
			}
		})
		commands.forEach((command, i) => {
			CMD_HELP += `│ ${i + 1} ${addSpace(
				i + 1,
				commands.length
			)}${textToStylist(command.toUpperCase(), 'mono')}\n`
		})
		CMD_HELP += `╰────────────────`
		return await message.send('```' + CMD_HELP + '```')
	}
)

bot.addCommand(
	{
		pattern: 'list ?(.*)',
		fromMe: true,
		dontAddCommandList: true,
	},
	async (message, match) => {
		let msg = ''
		bot.commands.map(async (command, index) => {
			if (
				command.dontAddCommandList === false &&
				command.pattern !== undefined
			) {
				msg += `${index} ${ctt(command.pattern)}\n${command.desc}\n\n`
			}
		})
		await message.send('```' + msg.trim() + '```')
	}
)
bot.addCommand(
	{
		pattern: 'menu ?(.*)',
		fromMe: true,
		dontAddCommandList: true,
	},
	async (message, match) => {
		const commands = {}
		bot.commands.map(async (command, index) => {
			if (
				command.dontAddCommandList === false &&
				command.pattern !== undefined
			) {
				if (!commands[command.type]) commands[command.type] = []
				commands[command.type].push(ctt(command.pattern).trim())
			}
		})
		const date = new Date()

		let msg =
			'```' +
			`. ___________________

▕╮╭┻┻╮╭┻┻╮╭▕╮╲

▕╯┃╭╮┃┃╭╮┃╰▕╯╭▏

▕╭┻┻┻┛┗┻┻┛   ▕  ╰▏

▕╰━━━┓┈┈┈╭╮▕╭╮▏

▕╭╮╰┳┳┳┳╯╰╯▕╰╯▏

▕╰╯┈┗┛┗┛┈╭╮▕╮┈▏

╭➤ 𝐈𝐀𝐌 𝐒𝐓𝐈𝐋𝐋 𝐀𝐋𝐈𝐕𝐄 𝐁𝐑𝐎*»

│❖ Oᴡɴᴇʀ :ī.am/ꪶ⇾🪀☻᳡94741671668🇱🇰ꫂ⁩⁩⁩

│❖ Wᴏʀᴋ ᴛʏᴘᴇ : ᴘᴜʙʟɪᴄ

│❖ ᴅᴏɴᴛ ᴜsᴇ ʙᴀᴅ ᴡᴏʀᴅs

│❖ ᴛʏᴘᴇ .menu ᴄᴏᴍᴍᴀɴᴅs

│❖ ᴀᴅᴍɪɴ ʙᴏᴛ

╭◪ ᴄᴏᴅᴇᴅ ʙʏ : ī.am/ꪶDidulaꫂ⁩⁩⁩

╰─────────────────☘︎
` +
			'```'
		for (const command in commands) {
			msg += ` ╭─❏ ${textToStylist(
				command.toLowerCase(),
				'smallcaps'
			)} ❏
`
			for (const plugin of commands[command])
				msg += ` │ ${textToStylist(plugin.toUpperCase(), 'mono')}\n`
			msg += ` ╰─────────────────
`
		}
		await message.send(msg.trim())
	}
)

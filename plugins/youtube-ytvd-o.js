import fetch from 'node-fetch'
let handler = async (m, { conn, groupMetadata, usedPrefix, text, args, command }) => {
 let capt = `*${htki} YOUTUBE ${htka}*
 _Please select the type below_
 `
let buttons = [{ buttonText: { displayText: 'Video' }, buttonId: `${usedPrefix}ytv ${text} ` }, { buttonText: { displayText: 'Document' }, buttonId: `${usedPrefix}vdoc ${text} ` }]
							 
let msg = await conn.sendMessage(m.chat, { image: { url: 'https://ibb.co/qC68wW6' }, caption: capt, footer: '_*Sohan WhatsApp Bot V2 BY SOHAN*_', buttons }, { quoted: m })
}

handler.command = /^optv?$/i


export default handler
import fetch from 'node-fetch'
let handler = async (m, { conn }) => {
  let caption = `
  ╭────═[Sohan WhatsApp Bot V2]═────⋆
 ▕  █▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀█
 ▕  █-----╦─╦╔╗╦─╔╗╔╗╔╦╗╔╗-----█
 ▕  █-----║║║╠─║─║─║║║║║╠─-----█
 ▕  █-----╚╩╝╚╝╚╝╚╝╚╝╩─╩╚╝-----█
 ▕  █▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄█
│╭───────────────···
┴│☂︎    HEY ${conn.getName(m.sender)}
⬡│☂︎ 🤪I\'m alive now..🥰
┬╰────────────────···
┠─────═[ INFO BOT ]═─────⋆
│╭────────────────···
┴│     *Sohan WhatsApp Bot V2*
⬡│☂︎ *WHATSAPP BOT CODED BY*
⬡│☂︎     *😍Sohan Matheesha😍*
⬡│☂︎  *Developer:*wa.me/94757962326
│╰────────────────···
┠─────═[ GUIDE ]═─────⋆
│╭────────────────···
┴│☂︎ _*😇Litle Guide to use bot😇*_
⬡│☂︎ .sohan *All menu of bot*🌹⃝✥⃟☺️᭄ꦿ
⬡│☂︎ .sticker *Image to sticker*🌹⃝✥⃟☺️᭄ꦿ
⬡│☂︎ .sohanplayyt *Youtube video/audio*🌹⃝✥⃟☺️᭄ꦿ
┬│☂︎ .gimage *Google image downloader*🌹⃝✥⃟☺️᭄ꦿ
│╰···*╚═══❖•ೋ° °ೋ•❖═══╝*
╰──────────═┅═───────
*Thanks For Using Sohan WhatsApp Bot V2✍🏽🌿🥰*
`.trim()
  m.reply(caption)
}
handler.help = ['sohanbot']
handler.tags = ['bot check']
handler.command = /^(sohanbot|Hi)$/i


export default handler
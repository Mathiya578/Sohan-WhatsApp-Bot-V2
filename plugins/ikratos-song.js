import { youtubeSearch } from '@bochilteam/scraper'

let handler = async(m, { conn, usedPrefix, text, args, command }) => {
let name = await conn.getName(m.sender)

  if (!text) throw 'Example:\n.song believer'
  let cari = await youtubeSearch(`${text}`)
    let dapet = cari.video
    let listSections = []
	Object.values(dapet).map((v, index) => {
	listSections.push([index + ' ' + cmenub + ' ' + v.title, [
          ['Audio 🎧', usedPrefix + 'opta ' + v.url + ' yes', '\n⌚ *Duration:* ' + v.durationH + '\n⏲️ *Uploaded:* ' + v.publishedTime + '\n👁️ *Views:* ' + v.view + '\n📎 *Url:* ' + v.url]
        ]])
	})
	return conn.sendList(m.chat, '*───「 Song Result 」───*', `Please select the type below...\n*The text you requested:* ${text}\n\nRetype *${usedPrefix + command}* your text, to change the text again\n •--Sohan WhatsApp Bot V2--• `, author, `Song list 🔎`, listSections, m)
}
handler.help = ['sohanytsearch <query>']
handler.tags = ['tools']
handler.command = /^sohansong?$/i
handler.premium = false


export default handler
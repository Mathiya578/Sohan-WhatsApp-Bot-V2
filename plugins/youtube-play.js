import fetch from 'node-fetch'
import { youtubeSearch } from '@bochilteam/scraper'
import yts from "yt-search";
let handler = async (m, { conn, groupMetadata, usedPrefix, text, args, command }) => {
try {
  if (!text) throw `Use example ${usedPrefix}${command} base boosted song`
  let vid = (await youtubeSearch(text)).video[0]
  if (!vid) throw 'Video/Audio downlaod'
  let { title, description, thumbnail, videoId, durationH, viewH, publishedTime } = vid
  const url = 'https://www.youtube.com/watch?v=' + videoId
  let whmodsdev = `*${htki} PLAY ${htka}*
  📌 *Title:* ${title}
🔗 *Url:* ${url}
📔 *Description:* ${description}
⏲️ *Published:* ${publishedTime}
⌚ *Duration:* ${durationH}
👀 *Views:* ${viewH}
  `
  await conn.sendButton(m.chat, whmodsdev, wm, botdate, [
    ['🎶 Audio', `${usedPrefix}yta ${url} yes`],
    ['🎥 Video', `${usedPrefix}ytv ${url} yes`],
    ['🔎 Youtube Search', `${usedPrefix}yts ${text}`]
], m, fdoc)
} catch {
if (!text) throw `Use example ${usedPrefix}${command} base boosted song`
  let vid = (await youtubeSearch(text)).video[0]
  if (!vid) throw 'Video/Audio Downloader'
  let { title, description, thumbnail, videoId, durationH, durationS, viewH, publishedTime } = vid
  let url = 'https://www.youtube.com/watch?v=' + videoId
  let ytLink = `https://yt-downloader.akkun3704.repl.co/?url=${url}&filter=audioonly&quality=highestaudio&contenttype=audio/mpeg`
  let capt = `*${htki} PLAY ${htka}*
  📌 *Title:* ${title}
🔗 *Url:* ${url}
📔 *Description:* ${description}
⏲️ *Published:* ${publishedTime}
⌚ *Duration:* ${durationH}
👀 *Views:* ${viewH}
  `
  let buttons = [{ buttonText: { displayText: '🎶 Audio' }, buttonId: `${usedPrefix}opta ${url}` }, { buttonText: { displayText: '🎥 Video' }, buttonId: `${usedPrefix}optv ${url}` }]
  let msg = await conn.sendMessage(m.chat, { image: { url: thumbnail }, caption: capt, footer: 'Contact Me On:\n\twhatsapp.com/+94757962326', buttons }, { quoted: m })
  // if (durationS > 4000) return conn.sendMessage(m.chat, { text: `*Download:* ${await shortUrl(ytLink)}\n\n_Duration too long..._` }, { quoted: msg })
} 
}
handler.help = ['play', 'play2'].map(v => v + ' <pencarian>')
handler.tags = ['downloader', 'limitmenu']
handler.command = /^play|sohanyt?$/i


export default handler

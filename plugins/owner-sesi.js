import fs from 'fs'
let handler = async (m, { conn, text }) => {
    m.reply('Please wait, Downloading the bot session file')
    let sesi = await fs.readFileSync('./sessions/creds.json')
    return await conn.sendMessage(m.chat, { document: sesi, mimetype: 'application/json', fileName: 'session.data.json' }, { quoted: m })
}
handler.help = ['getsessi']
handler.tags = ['owner']
handler.command = /^(g(et)?ses?si(on)?(data.json)?)$/i

handler.rowner = true

export default handler

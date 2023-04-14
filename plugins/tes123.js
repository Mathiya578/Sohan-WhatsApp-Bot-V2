import fs from 'fs'

import fetch from 'node-fetch'

let handler  = async (m, { conn, usedPrefix: _p }) => {

let info = `Sohan WhatsApp Bot V2 is here (｡>_<｡)`



let td = 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'


conn.reply(m.chat, info, fakes,{ contextInfo: { externalAdReply: { showAdAttribution: true,
      mediaUrl: "https://api.whatsapp.com/send?phone=+94757962326",
      mediaType: 2,
      description: "https://api.whatsapp.com/send?phone=+94757962326", 
      title: global.titlebot,
      body: wm,
      thumbnail: thumb,
      sourceUrl: sig  }}})

}

handler.customPrefix = /^(tes|bot|contactdeveloper|test)$/i

handler.command = new RegExp



export default handler

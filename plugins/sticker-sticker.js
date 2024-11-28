import { sticker } from '../lib/sticker.js'
import uploadFile from '../lib/uploadFile.js'
import uploadImage from '../lib/uploadImage.js'
import { webp2png } from '../lib/webp2mp4.js'

conn.sendMessage(m.chat, { image: { url: videoInfo.thumbnail }, caption: body,
contextInfo: {
mentionedJid: [m.sender],
isForwarded: true,
forwardingScore: 1, 
forwardedNewsletterMessageInfo: {
newsletterJid: '120363350628883149@newsletter',
newsletterName: '【✫𝚃𝙴𝙰𝙼  乂 𝚂𝚃𝙰𝚁𝙲𝙾𝚁𝙴✫】',
serverMessageId: -1
}}}, { quoted: fkontak})
let handler = async (m, { conn, args, usedPrefix, command }) => {
  let stiker = false
const usser = conn.getName(m.sender)
const h = ` ㌹ ${usser}`;
const i = ``
  try {         
    let q = m.quoted ? m.quoted : m
    let mime = (q.msg || q).mimetype || q.mediaType || ''
    if (/webp|image|video/g.test(mime)) {
      if (/video/g.test(mime)) if ((q.msg || q).seconds > 11) return m.reply('Máximo 10 segundos')
      let img = await q.download?.()
      if (!img) throw `✳️ Responde a una imagen o video con*${usedPrefix + command}*`
     if (stiker) conn.sendFile(m.chat, stiker, 'sticker.webp', '',m, true, { contextInfo: { 'forwardingScore': 200, 'isForwarded': false, externalAdReply:{ showAdAttribution: false, title: packname, body: `StarCore-Bot - MD 🧑‍💻`, mediaType: 2, sourceUrl: redes, thumbnail: icons}}}, { quoted: m }) 
      let out
      try {
        stiker = await sticker(img, false, h, i)
      } catch (e) {
        console.error(e)
      } finally {
        if (!stiker) {
          if (/webp/g.test(mime)) out = await webp2png(img)
          else if (/image/g.test(mime)) out = await uploadImage(img)
          else if (/video/g.test(mime)) out = await uploadFile(img)
          if (typeof out !== 'string') out = await uploadImage(img)
          stiker = await sticker(false, out, h, i)
        }
      }
    } else if (args[0]) {
      if (isUrl(args[0])) stiker = await sticker(false, args[0], global.packname, global.author)
      else return m.reply('URL invalido')
    }
  } catch (e) {
    console.error(e)
    if (!stiker) stiker = e
  } finally {
    if (stiker) conn.sendFile(m.chat, stiker, 'sticker.webp', '', m, null, rpl)
    else throw `${mssg.stickError}`
  }
}
handler.help = ['sticker']
handler.tags = ['tools']
handler.command = ['s', 'sticker'] 

export default handler

const isUrl = (text) => {
  return text.match(new RegExp(/https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_+.~#?&/=]*)(jpe?g|gif|png)/, 'gi'))
}
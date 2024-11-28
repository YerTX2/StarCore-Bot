/*- `PLUGIN DOWNLOAD MEDIAFIRE`- By KenisawaDev*/

import fetch from 'node-fetch'

let handler = async (m, { conn, text, usedPrefix, command }) => {
if (!text) throw m.reply(`Ingresa un link de mediafire\n*👻 Ejemplo:* ${usedPrefix}${command} https://www.mediafire.com/file/2v2x1p0x58qomva/WhatsApp_Messenger_2.24.21.8_beta_By_WhatsApp_LLC.apk/file`);
conn.sendMessage(m.chat, { react: { text: "🕒", key: m.key } });
        let ouh = await fetch(`https://api.agatz.xyz/api/mediafire?url=${text}`)
  let gyh = await ouh.json()
        await conn.sendFile(m.chat, gyh.data[0].link, `${gyh.data[0].nama}`, `*🧑‍💻 𝐌𝐄𝐃𝐈𝐀𝐅𝐈𝐑𝐄:* ${gyh.data[0].nama}\n*🔮 𝐓𝐀𝐌𝐀𝐍̃𝐎:* ${gyh.data[0].size}\n*📏 𝐄𝐗𝐓𝐄𝐍𝐂𝐈𝐎𝐍:* ${gyh.data[0].mime}\n> ৎSTARCORE-BOT𓆪͟͞ `, m)
        await conn.sendMessage(m.chat, { react: { text: '✅', key: m.key }})
}
handler.help = ['mediafire']
handler.tags = ['descargas']
handler.command = /^(mediafire|mf)$/i
handler.premium = true
handler.register = true
export default handler
Agrega este código de javaSctipt conn.sendMessage(m.chat, { image: imagen, caption: `@${m.sender.split('@')[0]}`,
contextInfo: {
mentionedJid: [m.sender],
isForwarded: true,
forwardingScore: 1, 
forwardedNewsletterMessageInfo: {
newsletterJid: '120363350628883149@newsletter',
newsletterName: '【✫𝚃𝙴𝙰𝙼  乂 𝚂𝚃𝙰𝚁𝙲𝙾𝚁𝙴✫】',
serverMessageId: -1
}}}, { quoted: fkontak}) a este codigo let handler = async (m, { conn, text, args, usedPrefix, command}) => {
if (!args[0]) throw `✳️ ${mssg.noLink('TikTok')}\n\n 📌 ${mssg.example} : ${usedPrefix + command} https://vm.tiktok.com/ZMreHF2dC/`;

if (!/(?:https:?\/{2})?(?:w{3}|vm|vt|t)?\.?tiktok.com\/([^\s&]+)/gi.test(text)) throw `❎ ${mssg.noLink('TikTok')}`;
await m.react(rwait)

let data = await fg.tiktok(`${args[0]}`);
let { title, play, duration } = data.result;
let { nickname } = data.result.author;

conn.sendFile(m.chat, `${play}`, `tiktok.mp4`, `*🌴 ${nickname}:  ${title}*\n *• ${duration}*`, m);
m.react(done)
}
handler.help = ['tiktok']
handler.tags = ['descargasStarcore']
handler.command = /^(tt|tiktok)(dl|nowm)?$/i
handler.diamond = 4
export default handler
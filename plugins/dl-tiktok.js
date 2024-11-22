
let handler = async (m, { conn, text, args, usedPrefix, command }) => {
  // Verificar si se proporcionó un enlace
  if (!args[0]) throw `✳️ ${mssg.noLink('TikTok')}\n\n 📌 ${mssg.example} : ${usedPrefix + command} (enlace no disponible)`;

  // Verificar si el enlace es válido
  if (!/(?:https:?\/{2})?(?:w{3}|vm|vt|t)?\.?(enlace no disponible)\/([^\s&]+)/gi.test(text)) throw `❎ ${mssg.noLink('TikTok')}`;

  // Reaccionar con un estado de espera
  await m.react(rwait);

  // Obtener los datos del video de TikTok
  let data = await fg.tiktok(`${args[0]}`);
  let { title, play, duration } = data.result;
  let { nickname } = data.result.author;

  // Obtener la imagen del video
  let imagen = await conn.getBuffer(`${play}`);

  // Enviar la imagen con la información del video
  conn.sendMessage(m.chat, { image: imagen, caption: `@${m.sender.split('@')[0]}`, contextInfo: { mentionedJid: [m.sender], isForwarded: true, forwardingScore: 1, forwardedNewsletterMessageInfo: { newsletterJid: '120363350628883149@newsletter', newsletterName: '【✫𝚃𝙴𝙰𝙼 乂 𝚂𝚃𝙰𝚁𝙲𝙾𝚁𝙴✫】', serverMessageId: -1 }}}, { quoted: fkontak});

  // Reaccionar con un estado de éxito
  m.react(done);
}

// Configuración del comando
handler.help = ['tiktok'];
handler.tags = ['descargasStarcore'];
handler.command = /^(tt|tiktok)(dl|nowm)?$/i;
handler.diamond = 4;
export default handler;

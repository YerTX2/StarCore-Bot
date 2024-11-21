import fetch from 'node-fetch';
const handler = async (m, {conn, usedPrefix, usedPrefix: _p, __dirname, text, isPrems}) => {
  if (usedPrefix == 'a' || usedPrefix == 'A') return;
  try {
    const pp = imagen4;
    const img = './menu_logo.jpg';
    const d = new Date(new Date + 3600000);
    const locale = 'es';
    const week = d.toLocaleDateString(locale, {weekday: 'long'});
    const date = d.toLocaleDateString(locale, {day: 'numeric', month: 'long', year: 'numeric'});
    const _uptime = process.uptime() * 1000;
    const uptime = clockString(_uptime);
    const user = global.db.data.users[m.sender];
    const {money, joincount} = global.db.data.users[m.sender];
    const {exp, limit, level, role} = global.db.data.users[m.sender];
    const rtotalreg = Object.values(global.db.data.users).filter((user) => user.registered == true).length;
    const more = String.fromCharCode(8206);
    const readMore = more.repeat(850);
    const taguser = '@' + m.sender.split('@s.whatsapp.net')[0];
    const doc = ['pdf', 'zip', 'vnd.openxmlformats-officedocument.presentationml.presentation', 'vnd.openxmlformats-officedocument.spreadsheetml.sheet', 'vnd.openxmlformats-officedocument.wordprocessingml.document'];
    const document = doc[Math.floor(Math.random() * doc.length)];
    const str = `┏┅┅┓ł  ☬ㅤㅤㅤ✦∮✦ㅤㅤㅤ☬ ł ┏┅┅┓
┣┱  🝃ɞ *StarCore ł 𝙱𝚘𝚝* ʚ🝃  ┲┫
┗┅┅┚ł  ☬ㅤㅤㅤ✦∮✦ㅤㅤㅤ☬ ł ┗┅┅┛

╔═══❖•ೋ°ㅤ✚ㅤ°ೋ•❖═══╗
╟⊰ ❦ *𝙷𝚘𝚕𝚊, ${taguser}*
╟⊰ ✘ *𝙽𝚒𝚟𝚎𝚕:* ${level}
╟⊰ ✙ *𝙴𝚡𝚙𝚎𝚛𝚒𝚎𝚗𝚌𝚒𝚊:* ${exp}
╟⊰ ☉︎ *𝙳𝚒𝚊𝚖𝚊𝚗𝚝𝚎𝚜:* ${limit}
╟⊰ ღ *𝚁𝚊𝚗𝚐𝚘:* ${role}
╟⊰ ✞ *𝙿𝚛𝚎𝚖𝚒𝚞𝚖:* ${user.premiumTime > 0 ? '√' : (isPrems ? '√' : '✘') || ''}
╟⊰ ✐ *𝙵𝚎𝚌𝚑𝚊:* ${date}
╟⊰ ⚅︎ *𝚃𝚒𝚎𝚖𝚙𝚘 𝙰𝚌𝚝𝚒𝚟𝚘:* ${uptime}
╚═══❖•ೋ°ㅤ✚ㅤ°ೋ•❖═══╝
${readMore}
┍⊰᯽⊱┈──╌❊ㅤ⇑ㅤ❊╌──┈⊰᯽⊱
│『 *𝙻 𝙸 𝚂 𝚃 𝙰  𝙳 𝙴  𝙼 𝙴 𝙽 𝚄 𝚂* 』
┝⊰᯽⊱┈┈┈┈───────────┴┈─┐
├ ♛︎ _${usedPrefix}menuh *(+18)*_
├ ♛︎ _${usedPrefix}menurandomi_
├ ♛︎ _${usedPrefix}menuinfobot_
├ ♛︎ _${usedPrefix}menustickers_
├ ♛︎ _${usedPrefix}menujuegos_
├ ♛︎ _${usedPrefix}menufrases_
├ ♛︎ _${usedPrefix}menugrupos_
├ ♛︎ _${usedPrefix}menued_
├ ♛︎ _${usedPrefix}menudl_
├ ♛︎ _${usedPrefix}menubs_
├ ♛︎ _${usedPrefix}menucv_
├ ♛︎ _${usedPrefix}menuefectosl_
├ ♛︎ _${usedPrefix}menuefectosa_
├ ♛︎ _${usedPrefix}menutools_
├ ♛︎ _${usedPrefix}menurpg_
├ ♛︎ _${usedPrefix}menuowner_
┕⊰᯽⊱┈──╌❊ㅤ⇓ㅤ❊╌──┈⊰᯽⊱ 

┍✶⊶⊷⊶⊷❍ㅤ✪ㅤ❍⊶⊷⊶⊷✶
│『 *𝙱 𝙾 𝚃,  𝙾  𝚂 𝚄 𝙱 - 𝙱 𝙾 𝚃* 』
┝✶⊶⊷⊶┈┈┈┈┈───────┴┈─┐
├ ✑ ${(conn.user.jid == global.conn.user.jid ? '' : `Jadibot de: https://wa.me/${global.conn.user.jid.split`@`[0]}`) || '*[ ⚕️ ] _Este es el bot oficial._*'}
┕✶⊶⊷⊶⊷❍ㅤ✪ㅤ❍⊶⊷⊶⊷✶ 

┍|I•------»ㅤ∆ㅤ«------•I|
│『 *𝙰𝙶𝚁𝙴𝙶𝙰 𝙴𝙻 𝙱𝙾𝚃 𝙰 𝚃𝚄 𝙶𝚁𝚄𝙿𝙾* 』
┝|I•------------------------------------】
├ ☉︎ _${usedPrefix}join *<enlace / link / url>*_
┕|I•------»ㅤ∆ㅤ«------•I|

┏━━━━°❀•°:⊹⊱ㅤ☃︎ㅤ⊰⊹:°•❀°━━━━┓
┃『 *𝚁 𝙴 𝙿 𝙾 𝚁 𝚃 𝙴 𝚂* 』
┣━━━━━━━━━━━━━━━┷━┑
┣ ⚃︎ _${usedPrefix}reporte *<texto>*_
┗━━━━°❀•°:⊹⊱ㅤ☃︎ㅤ⊰⊹:°•❀°━━━━┙

╔═══❖•ೋ°ㅤ✚ㅤ°ೋ•❖═══╕
║『 *𝙰 𝚅 𝙰 𝙽 𝚉 𝙰 𝙳 𝙾* 』
╠═══════════════╧══╕
╟⊰ 🝕 > *<funcion>*
╟⊰ 🝕 => *<función>*
╟⊰ 🝕 $ *<funcion>*
╚═══❖•ೋ°ㅤ✚ㅤ°ೋ•❖═══╛`.trim();
    if (m.isGroup) {
      // await conn.sendFile(m.chat, vn, 'menu.mp3', null, m, true, { type: 'audioMessage', ptt: true})
      const fkontak2 = {'key': {'participants': '0@s.whatsapp.net', 'remoteJid': 'status@broadcast', 'fromMe': false, 'id': 'Halo'}, 'message': {'contactMessage': {'vcard': `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`}}, 'participant': '0@s.whatsapp.net'};
      conn.sendMessage(m.chat, {image: pp, caption: str.trim(), mentions: [...str.matchAll(/@([0-9]{5,16}|0)/g)].map((v) => v[1] + '@s.whatsapp.net')}, {quoted: fkontak2});
    } else {
      // await conn.sendFile(m.chat, vn, 'menu.mp3', null, m, true, { type: 'audioMessage', ptt: true})
      const fkontak2 = {'key': {'participants': '0@s.whatsapp.net', 'remoteJid': 'status@broadcast', 'fromMe': false, 'id': 'Halo'}, 'message': {'contactMessage': {'vcard': `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`}}, 'participant': '0@s.whatsapp.net'};
      conn.sendMessage(m.chat, {image: pp, caption: str.trim(), mentions: [...str.matchAll(/@([0-9]{5,16}|0)/g)].map((v) => v[1] + '@s.whatsapp.net')}, {quoted: fkontak2});
    }
  } catch {
    conn.reply(m.chat, '*[❗𝐈𝐍𝐅𝐎❗] 𝙴𝙻 𝙼𝙴𝙽𝚄 𝚃𝙸𝙴𝙽𝙴 𝚄𝙽 𝙴𝚁𝚁𝙾𝚁 𝚈 𝙽𝙾 𝙵𝚄𝙴 𝙿𝙾𝚂𝙸𝙱𝙻𝙴 𝙴𝙽𝚅𝙸𝙰𝚁𝙻𝙾, 𝚁𝙴𝙿𝙾𝚁𝚃𝙴𝙻𝙾 𝙰𝙻 𝙿𝚁𝙾𝙿𝙸𝙴𝚃𝙰𝚁𝙸𝙾 𝙳𝙴𝙻 𝙱𝙾𝚃*', m);
  }
};
handler.command = /^(menu|menú|memu|memú|help|info|comandos|ayuda|commands|commandos|cmd)$/i;
handler.exp = 50;
handler.fail = null;
export default handler;
function clockString(ms) {
  const h = isNaN(ms) ? '--' : Math.floor(ms / 3600000);
  const m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60;
  const s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60;
  return [h, m, s].map((v) => v.toString().padStart(2, 0)).join(':');
}
import axios from 'axios';
import fetch from 'node-fetch';
import * as cheerio from 'cheerio';
import { mediafiredl } from '@bochilteam/scraper';
const handler = async (m, { conn, args, usedPrefix, command }) => {
if (!args[0]) throw `\`\`\`[🌺] Ingresa un link de mediafire junto al comando. Ejemplo: \n${usedPrefix + command} https://www.mediafire.com/file/r0lrc9ir5j3e2fs/DOOM_v13_UNCLONE\`\`\``;
// Definir rwait como un emoji, por ejemplo
const rwait = '⏳'; // Puedes cambiarlo a cualquier emoji que desees
m.react(rwait);
try {
const resEX = await mediafiredl(args[0]);
let text = `╭━━━⊜ ⌊ \`\`\`Mediafire Downloader\`\`\` ⌉⊜━━━\n`;
text += `│  ≡ Nombre: ${resEX.filename}\n`;
text += `│  ≡ Peso: ${resEX.filesizeH}\n`;
text += `│  ≡ Tipo: ${resEX.ext}\n`;
text += `╰━━━━━━━━━━━━━━⊜\n`;
text += `  _• Enviando archivo . . . ._`;
await conn.reply(m.chat, text, m, {
contextInfo: {
externalAdReply: {
showAdAttribution: true,
sourceUrl: 'https://youtube.com/watch?v=TMT9MNM-NHg',
mediaType: 2,
description: `🍁 This bot is still in development.`,
title: `🌺 Thank you for using StarCore, the best WhatsApp bot.`,
body: `⚘ Developed by I\`m Fz ~`,
previewType: 0,
thumbnail: await (await fetch('https://telegra.ph/file/11c0098b4f55b2e548b90.png')).buffer(),
mediaUrl: 'https://www.instagram.com/' // Cambia esto por la URL que desees
}
}
});
await conn.sendFile(m.chat, resEX.url, resEX.filename, '', m, null, { mimetype: resEX.ext, asDocument: true });
} catch (error) {
console.error(error); // Imprimir el error para depuración
try {
const res = await mediafireDl(args[0]);
const { name, size, date, mime, link } = res;
let text2 = `╭━━━⊜ ⌊ \`\`\`Mediafire Downloader - 2\`\`\` ⌉⊜━━━\n`;
text2 += `│  ≡ Nombre: ${name}\n`;
text2 += `│  ≡ Peso: ${size}\n`;
text2 += `│  ≡ Tipo: ${mime}\n`;
text2 += `╰━━━━━━━━━━━━━━⊜\n`;
text2 += `  _• Enviando archivo . . . ._`;
await conn.reply(m.chat, text2, m, {
contextInfo: {
externalAdReply: {
showAdAttribution: true,
sourceUrl: 'https://youtube.com/watch?v=TMT9MNM-NHg',
mediaType: 2,
description: `🍁 This bot is still in development.`,
title: `🌺 Thank you for using StarCore, the best WhatsApp bot.`,
body: `⚘ Developed by I\`m Fz ~`,
previewType: 0,
thumbnail: await (await fetch('https://telegra.ph/file/11c0098b4f55b2e548b90.png')).buffer(),
mediaUrl: 'https://www.instagram.com/' // Cambia esto por la URL que desees
}
}
});
await conn.sendFile(m.chat, link, name, '', m, null, { mimetype: mime, asDocument: true });
} catch (error) {
console.error(error); // Imprimir el error para depuración
await m.reply(`\`\`\`[🌺] Ocurrió un error al procesar el link. Asegúrate de que sea un link válido de Mediafire.\`\`\``);
}
}
};
handler.help = ['mediafire'].map((v) => v + ' <url>');
handler.tags = ['dl'];
handler.command = /^(mediafire|mediafiredl
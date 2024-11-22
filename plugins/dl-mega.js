
import { File } from "megajs";
import path from "path";

let handler = async (m, { conn, args, usedPrefix, text, command }) => {
    try {
        if (!text) return conn.reply(m.chat, `\`\`\`[ 🌴 ] Uso correcto del comando:\`\`\` ${usedPrefix + command} https://mega.nz/file/ovJTHaQZ#yAbkrvQgykcH_NDKQ8eIc0zvsN7jonBbHZ_HTQL6lZ8`, null, { quoted: fkontak });

        const file = File.fromURL(text);
        await file.loadAttributes();

        if (file.size >= 300000000) return m.reply('Error: El archivo es demasiado pesado (Peso máximo: 300MB ( Premium: 800MB )');

        m.react(rwait);

        const caption = `   *--- ${botName} ---*\nFile: ${file.name}\nSize: ${formatBytes(file.size)}`;
        await conn.sendFile(m.chat, data, file.name, caption, m, null, {
            mimetype,
            asDocument: true,
            forwardedNewsletterMessageInfo: {
                newsletterJid: '120363350628883149@newsletter',
                newsletterName: '【✫𝚃𝙴𝙰𝙼  乂 𝚂𝚃𝙰𝚁𝙲𝙾𝚁𝙴✫】',
                serverMessageId: -1
            }
        }); 

        const data = await file.downloadBuffer();

        const fileExtension = path.extname(file.name).toLowerCase();
        const mimeTypes = {
            ".mp4": "video/mp4",
            ".pdf": "application/pdf",
            ".zip": "application/zip",
            ".rar": "application/x-rar-compressed",
            ".7z": "application/x-7z-compressed",
            ".jpg": "image/jpeg",
            ".jpeg": "image/jpeg",
            ".png": "image/png",
        };

        let mimetype = mimeTypes[fileExtension] || "application/octet-stream";


    } catch (error) {
        return m.reply(`Error: ${error.message}`);
    }
}

handler.help = ["mega"]
handler.tags = ["descargasStarcore"]
handler.command = /^(mega)$/i
export default handler

function formatBytes(bytes) {
    if (bytes === 0) return '0 Bytes';

    const k = 1024;
    const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));

    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
}
```

Recuerda que este código debe ser compatible con la versión de la biblioteca `megajs` que estás utilizando. Si no funciona, es posible que debas adaptarlo a tus necesidades específicas.
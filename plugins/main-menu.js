const handler = async (m, { conn, command, args, text, usedPrefix }) => {
  let txt = `
  \`🌱 ¡Hola! @${m.sender.split('@')[0]}, por favor ingresa una de las siguientes opciones para poder ver los menús:\`
  
 *[📥 \`Downloads\` 📥]*
 - \`dl\`
 - \`download\` 
 - \`1\`
 
 \`📦 Ejemplo de uso: ${usedPrefix + command} dl / download / 1\`
  `
  
  switch (command) {
    case 'test':
      if (!args[0]) {
        await conn.sendMessage(m.chat, {
          image: { url: 'https://i.ibb.co/FsPfB8f/Sylph.jpg' },
          caption: txt,
          mimetype: 'image/jpeg',
          contextInfo: {
            mentionedJid: [m.sender],
            externalAdReply: {
              showAdAttribution: true,
              title: '',
              body: `¡Gracias por usar el bot!`,
              thumbnailUrl: 'https://i.ibb.co/9TspDnc/Sylph.jpg',
              sourceUrl: 'https://github.com/FzTeis/Sylphiette',
              mediaType: 1,
            }
          }
        });
      } else {
        switch (args[0].toLowerCase()) {
          case 'dl':
          case '1':
          case 'download':
            m.reply(`en desarrollo`)
            break;

          default:
            await conn.sendMessage(m.chat, {
              image: { url: 'https://i.ibb.co/FsPfB8f/Sylph.jpg' },
              caption: txt,
              mimetype: 'image/jpeg',
              contextInfo: {
                mentionedJid: [m.sender],
                externalAdReply: {
                  showAdAttribution: true,
                  title: '',
                  body: `¡Gracias por usar el bot!`,
                  thumbnailUrl: 'https://i.ibb.co/9TspDnc/Sylph.jpg',
                  sourceUrl: 'https://github.com/FzTeis/Sylphiette',
                  mediaType: 1,
                }
              }
            });
        }
      }
      break;
  }
};
handler.command = ['menu', '?', 'help', 'menú'];
export default handler;
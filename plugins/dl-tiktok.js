let handler = async (m, { conn, text, args, usedPrefix, command }) => {
  // Verificar si se proporcionó un enlace
  if (!args[0]) throw `✳️ Por favor, proporciona un enlace de TikTok.\n\n📌 Ejemplo: ${usedPrefix + command} https://www.tiktok.com/@usuario/video/1234567890`;

  // Verificar si el enlace es válido
  if (!/(https?:\/\/)?(www\.)?(tiktok\.com\/(@\w+\/video\/\d+|v\/\w+))/.test(args[0])) 
    throw `❎ El enlace proporcionado no es válido.`;

  // Reaccionar con un estado de espera
  await m.react(rwait);

  try {
    // Obtener los datos del video de TikTok
    let data = await fg.tiktok(args[0]);
    if (!data || !data.result) throw "❌ No se pudo obtener información del video.";

    let { title, play, duration, author } = data.result;
    let { nickname } = author;

    // Imagen opcional
    let imagen = 'https://example.com/imagen-placeholder.jpg'; // Reemplaza con una URL válida

    // Enviar la imagen junto con la información del video
    await conn.sendMessage(m.chat, {
      image: { url: imagen },
      caption: `@${m.sender.split('@')[0]}\n\n*Información del video obtenida correctamente.*`,
      contextInfo: {
        mentionedJid: [m.sender],
      }
    }, { quoted: m });

    // Enviar el video con la información del video
    await conn.sendMessage(m.chat, {
      video: { url: play },
      caption: `@${m.sender.split('@')[0]}\n\n*Autor:* ${nickname}\n*Título:* ${title}\n*Duración:* ${duration} segundos`,
      contextInfo: {
        mentionedJid: [m.sender],
      }
    }, { quoted: m });

    // Reaccionar con un estado de éxito
    m.react(done);

  } catch (error) {
    // Manejar errores
    console.error(error);
    throw "❌ Hubo un error al intentar descargar o enviar el video. Por favor, verifica el enlace y vuelve a intentarlo.";
  }
}

// Configuración del comando
handler.help = ['tiktok'];
handler.tags = ['descargas'];
handler.command = /^(tt|tiktok)(dl|nowm)?$/i;
handler.diamond = 4;

export default handler;

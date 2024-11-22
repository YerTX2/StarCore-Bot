import fetch from 'node-fetch';
export async function before(m, { conn }) {
   let pp = await this.profilePictureUrl(m.sender, 'image').catch(_ => 'https://i.ibb.co/1ZxrXKJ/avatar-contact.jpg');

  // Respuesta con enlace de WhatsApp
  global.rpl = {
    contextInfo: {
      externalAdReply: {
        mediaUrl: link_,
        mediaType: 'VIDEO',
        description: 'support group',
        title: packname,
        body: 'grupo de soporte',
        thumbnailUrl: pp,
        sourceUrl: link_
      }
    }
  };

  // Respuesta con enlace de Canal de WhatsApp
  global.rcanal = {
    contextInfo: {
            isForwarded: true,
    forwardedNewsletterMessageInfo: {
      newsletterJid: id_canal,
      serverMessageId: 100,
      newsletterName: nam,
    }, 
      externalAdReply: {
        mediaUrl: link_,
        mediaType: 'VIDEO',
        description: 'canal del grupo',
        title: packname,
        body: 'Canal de FG98',
        thumbnailUrl: pp,
        sourceUrl: link_
      }
    }
  }


 global.fkontak = {
        key: {
            participant: '0@s.whatsapp.net',
            remoteJid: 'status@broadcast'
        },
        message: {
            contactMessage: {
                displayName: `${global.db.data.users[m.sender].name}`,
                vcard: `BEGIN:VCARD\nVERSION:3.0\nN:XL;${botName},;;;\nFN:${botName},\nitem1.TEL;waid=${m.sender.split("@")[0]}:${m.sender.split("@")[0]}\nitem1.X-ABLabell:Ponsel\nEND:VCARD`,
                jpegThumbnail: imagen0,
                thumbnail: imagen0,
                sendEphemeral: true
            }
        }
    }

}
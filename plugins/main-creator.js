function handler(m) {
let name = conn.getName('50557865603@s.whatsapp.net')
let ownerN = '51907376960'
conn.sendContact(m.chat, [[`${ownerN}@s.whatsapp.net`, `${name}`]], m, {
 contextInfo: { 
 forwardingScore: 2023,
isForwarded: false, 
 externalAdReply: {  
 title: `¡Hl! Este Es El Número De Mi Creador`, 
 body: botName, 
 sourceUrl: 'https://whatsapp.com/channel/0029VankMyeBadmR9Ou0So3t',
 thumbnail: imagen,
 thumbnailUrl: 'https://telegra.ph/file/c96db6f7b43e28d45d8dc.jpg', 
 mediaType: 1,
 showAdAttribution: true, 
 renderLargerThumbnail: true 
 }
   }
     },
       {
         quoted: fkontak
           }
             );

}

handler.help = ['owner']
handler.tags = ['main']
handler.command = ['owner', 'creator', 'creador', 'dueño', 'fgowner'] 

export default handler
function handler(m) {
let name = conn.getName('51907376960@s.whatsapp.net')
let ownerN = '50557865603'
conn.sendContact(m.chat, [[`${ownerN}@s.whatsapp.net`, `${name}`]], m, {
 contextInfo: { 
 forwardingScore: 2023,
isForwarded: false, 
 externalAdReply: {  
 title: `¡Hi! This is my developer's number, just shoot me a message if you have any questions or want to chat about a potential collab.`, 
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
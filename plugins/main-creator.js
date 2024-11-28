let handler = async (m, { conn, usedPrefix, isOwner }) => {
let txt_owner = "> _*`¡𝙷𝙾𝙻𝙰! 𝙵𝚞𝚒 𝙲𝚛𝚎𝚊𝚍𝚘 𝙿𝚘𝚛 𝚄𝚗 𝚂𝚝𝚊𝚏𝚏 𝙳𝚎 𝙿𝚛𝚘𝚐𝚛𝚊𝚖𝚊𝚍𝚘𝚛𝚎𝚜 𝙳𝚎 𝙱𝚘𝚝𝚜 𝙿𝚊𝚛𝚊 𝚆𝚑𝚊𝚝𝚜𝙰𝚙𝚙`*_\n\n *STAFF STARCORE*
https://whatsapp.com/channel/0029Vaj67qQJUM2Wa5Ey3y1v"
await conn.sendFile(m.chat, "https://i.ibb.co/3vjb36W/StarCore.jpg", 'thumbnail.jpg', txt_owner, m, null, canal)
}
handler.help = ['owner']
handler.tags = ['main']
handler.command = ['owner', 'creator', 'creador', 'dueño'] 

export default handler
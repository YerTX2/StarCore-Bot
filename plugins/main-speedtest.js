
import cp from 'child_process'
import { promisify } from 'util'
let exec = promisify(cp.exec).bind(cp)
let handler = async (m, { conn, usedPrefix, command }) => {
	m.react(rwait) 
    let o
    try {
        o = await exec('python3 speed.py --share --secure')
    } catch (e) {
        o = e
    } finally {
        let { stdout, stderr } = o
        if (stdout.trim()) m.reply(`*≡ SPEEDTEST.NET*\n\n${stdout}`)  //conn.sendButton(m.chat, `*≡ SPEEDTEST.NET*`, stdout, null, [['BIEN', 'khajs']], m)
        if (stderr.trim()) m.reply(stderr)
        m.react(done) 
    }
}
handler.help = ['speedtest']
handler.tags = ['owner']
handler.command = /^(speedtest|testspeed)$/i

export default handler



```
import { promises } from 'fs';
import fs from 'fs';
import moment from 'moment-timezone';
import { join } from 'path';
import fetch from 'node-fetch';
import os from 'os';
import { getDevice } from '@whiskeysockets/baileys';
import { xpRange } from '../lib/levelling.js';

let handler = async (m, { conn, usedPrefix, __dirname }) => {
  let user = global.db.data.users[m.sender];
  let ucpn = ucapan();
  let tags = {
    'main': 'Acerca de',
    'bebot': 'Sub-Bots',
    'game': 'Juegos',
    'econ': 'Level y Economía',
    'rg': 'Registro',
    'sticker': 'Stickers',
    'img': 'Imagen',
    'maker': 'Maker',
    'prem': 'Premium',
    'group': 'Gestión de grupos',
    'nable': 'Activar/Desactivar opciones',
    'nime': 'Anime',
    'rnime': 'Anime React',
    'dl': 'Descargas',
    'tools': 'Herramientas',
    'fun': 'Diversión/Aleatorio',
    'cmd': 'Base de datos',
    'nsfw': 'NSFW +18',
    'ansfw': 'NSFW Anime',
    'owner': 'Desarrollador',
    'advanced': 'Avanzado'
  };

  const defaultMenu = {
    before: `「 ${ucpn} 」\n\n`,
    header: `╭──ꕥ *%category* ꕥ──`,
    body: `│✾ *%cmd*\n`,
    footer: `╰─❑\n`,
    after: ` ╭───❑ 「 INFORMACIÓN 」 ❑─── \n\n`
  };

  try {
    let _package = JSON.parse(await promises.readFile(join(__dirname, '../package.json')).catch(_ => ({}))) || {};
    let d = new Date(new Date + 3600000);
    let locale = 'es';
    let weton = ['Pahing', 'Pon', 'Wage', 'Kliwon', 'Legi'][Math.floor(d / 84600000) % 5];
    let week = d.toLocaleDateString(locale, { weekday: 'long' });
    let date = d.toLocaleDateString(locale, { day: 'numeric', month: 'long', year: 'numeric' });
    let dateIslamic = Intl.DateTimeFormat(locale + '-TN-u-ca-islamic', { day: 'numeric', month: 'long', year: 'numeric' }).format(d);
    let time = d.toLocaleTimeString(locale, { hour: 'numeric', minute: 'numeric', second: 'numeric' });
    let _uptime = process.uptime() * 1000;
    let _muptime;
    if (process.send) {
      process.send('uptime');
      _muptime = await new Promise(resolve => {
        process.once('message', resolve);
        setTimeout(resolve, 1000);
      }) * 1000;
    }
    let glb = global.db.data.users;
    let usrs = glb[m.sender];
    let mode = global.opts["self"] ? "Privado" : "Público";
    let { age, exp, diamond, level, role, registered, coin } = glb[m.sender];
    let { min, xp, max } = xpRange(level, global.multiplier);
    let name = await conn.getName(m.sender);
    let premium = glb[m.sender].premiumTime;
    let prems = `${premium > 0 ? "Premium" : "Gratis"}`;
    let platform = os.platform();
    let muptime = clockString(_muptime);
    let uptime = clockString(_uptime);
    let totalfeatures = Object.values(global.plugins).filter((v) => v.help && v.tags).length;
    let totalreg = Object.keys(global.db.data.users).length;
    let rtotalreg = Object.values(global.db.data.users).filter(user => user.registered == true).length;
    let help = Object.values(global.plugins).filter(plugin => !plugin.disabled).map(plugin => {
      return {
        help: Array.isArray(plugin.tags) ? plugin.help : [plugin.help],
        tags: Array.isArray(plugin.tags) ? plugin.tags : [plugin.tags],
        prefix: 'customPrefix' in plugin,
        diamond: plugin.diamond,
        premium: plugin.premium,
        enabled: !plugin.disabled,
      };
    });

    conn.menu = conn.menu ? conn.menu : {};
    let before = conn.menu.before || defaultMenu.before;
    let header = conn.menu.header || defaultMenu.header;
```
const { Client, GatewayIntentBits, Partials, EmbedBuilder } = require('discord.js');
const config = require('./config.json');
const { RAZAS, CLANES, TALENTOS, ESPECIALIDADES } = require('./data/gachaData');
const {
  loadDB, saveDB, getProfile,
  ocuparCupo, liberarCupo, spinPonderado,
} = require('./utils/gacha');

const prefix = config.prefix || '-';

console.log('Iniciando bot...');
console.log('Token encontrado:', config.token ? 'SÍ' : 'NO → revisá config.json');

const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent,
  ],
  partials: [Partials.Channel],
});

let db = loadDB();

// ══════════════════════════════════════════
// 🗂️ Mapeo de categorías → listas de datos
// ══════════════════════════════════════════
const CATEGORIAS = {
  raza: { lista: RAZAS, label: 'Raza' },
  clan: { lista: CLANES, label: 'Clan/Linaje' },
  talento: { lista: TALENTOS, label: 'Talento' },
  especial: { lista: ESPECIALIDADES, label: 'Especialidad' },
};

// ══════════════════════════════════════════
// 🎨 Helpers de embeds
// ══════════════════════════════════════════
function embedResultadoSpin(categoriaLabel, item) {
  const embed = new EmbedBuilder()
    .setTitle(`🎲 ${categoriaLabel}: ${item.nombre}`)
    .setColor(item.color || 0x5865F2)
    .setDescription(item.descripcion)
    .addFields(
      { name: '✅ Ventajas', value: item.ventajas.join('\n') || '—', inline: false },
      { name: '⚠️ Desventajas', value: item.desventajas.join('\n') || '—', inline: false },
      { name: '✨ Rareza', value: item.rareza, inline: true },
    )
    .setTimestamp();
  if (item.cupoMax) {
    embed.addFields({ name: '🎟️ Cupos', value: `Límite: ${item.cupoMax}`, inline: true });
  }
  return embed;
}

function nombrePorId(lista, id) {
  return lista.find((i) => i.id === id)?.nombre ?? '—';
}

function embedPerfil(user, perfil) {
  const embed = new EmbedBuilder()
    .setTitle(`📜 Ficha de ${user.username}`)
    .setColor(0x5865F2)
    .addFields(
      { name: 'Raza', value: perfil.raza ? nombrePorId(RAZAS, perfil.raza) : 'Sin tirar', inline: true },
      { name: 'Clan/Linaje', value: perfil.clan ? nombrePorId(CLANES, perfil.clan) : 'Sin tirar', inline: true },
      { name: 'Talento', value: perfil.talento ? nombrePorId(TALENTOS, perfil.talento) : 'Sin tirar', inline: true },
      { name: 'Especialidad', value: perfil.especial ? nombrePorId(ESPECIALIDADES, perfil.especial) : 'Sin tirar', inline: true },
      { name: 'Rerolls disponibles', value: String(perfil.rerolls), inline: true },
    )
    .setTimestamp();
  return embed;
}

// ══════════════════════════════════════════
// 💬 Comandos
// ══════════════════════════════════════════
client.on('messageCreate', async (message) => {
  if (message.author.bot) return;
  if (!message.content.startsWith(prefix)) return;

  const args = message.content.slice(prefix.length).trim().split(/\s+/);
  const cmd = args.shift().toLowerCase();
  const userId = message.author.id;
  const perfil = getProfile(db, userId);

  try {
    // ── -raza / -clan / -talento / -especial: tira y guarda esa categoría ──
    if (CATEGORIAS[cmd]) {
      const { lista, label } = CATEGORIAS[cmd];

      if (perfil[cmd]) {
        return message.reply(`❌ Ya tenés **${label}** asignada. Usá \`${prefix}rr ${cmd}\` si querés volver a tirarla (gasta 1 reroll).`);
      }

      const item = spinPonderado(db, cmd, lista);
      if (item.cupoMax) ocuparCupo(db, cmd, item.id);
      perfil[cmd] = item.id;
      saveDB(db);

      return message.reply({ embeds: [embedResultadoSpin(label, item)] });
    }

    // ── -rr raza|clan|talento|especial: gasta un reroll y vuelve a tirar esa categoría ──
    if (cmd === 'rr') {
      const categoria = (args[0] || '').toLowerCase();
      if (!CATEGORIAS[categoria]) {
        return message.reply(`❌ Usá \`${prefix}rr raza\`, \`${prefix}rr clan\`, \`${prefix}rr talento\` o \`${prefix}rr especial\`.`);
      }
      if (!perfil[categoria]) {
        return message.reply(`❌ Todavía no tiraste **${CATEGORIAS[categoria].label}**. Usá \`${prefix}${categoria}\` primero.`);
      }
      if (perfil.rerolls <= 0) {
        return message.reply('❌ No te quedan rerolls disponibles.');
      }

      const { lista, label } = CATEGORIAS[categoria];
      const idActual = perfil[categoria];
      const itemActual = lista.find((i) => i.id === idActual);
      if (itemActual?.cupoMax) liberarCupo(db, categoria, itemActual.id);

      const nuevo = spinPonderado(db, categoria, lista);
      if (nuevo.cupoMax) ocuparCupo(db, categoria, nuevo.id);

      perfil[categoria] = nuevo.id;
      perfil.rerolls -= 1;
      saveDB(db);

      await message.reply(`🔄 Reroll usado en **${label}** (te quedan **${perfil.rerolls}**).`);
      return message.channel.send({ embeds: [embedResultadoSpin(label, nuevo)] });
    }

    // ── -perfil [@usuario]: muestra la ficha ──
    if (cmd === 'perfil' || cmd === 'profile') {
      const target = message.mentions.users.first() || message.author;
      const perfilObjetivo = getProfile(db, target.id);
      saveDB(db);
      return message.reply({ embeds: [embedPerfil(target, perfilObjetivo)] });
    }

    // ── -ayuda ──
    if (cmd === 'ayuda' || cmd === 'help') {
      const embed = new EmbedBuilder()
        .setTitle('📖 Comandos disponibles')
        .setColor(0x5865F2)
        .setDescription(
          `\`${prefix}raza\` — Tira y guarda tu Raza.\n` +
          `\`${prefix}clan\` — Tira y guarda tu Clan/Linaje.\n` +
          `\`${prefix}talento\` — Tira y guarda tu Talento.\n` +
          `\`${prefix}especial\` — Tira y guarda tu Especialidad.\n` +
          `\`${prefix}rr raza|clan|talento|especial\` — Vuelve a tirar esa categoría (gasta 1 reroll).\n` +
          `\`${prefix}perfil [@usuario]\` — Muestra la ficha de personaje.\n`
        );
      return message.reply({ embeds: [embed] });
    }
  } catch (err) {
    console.error('[ERROR comando]', err);
    message.reply('❌ Ocurrió un error ejecutando el comando.');
  }
});

client.once('ready', () => {
  console.log(`✅ Bot conectado como ${client.user.tag}`);
});

client.login(config.token);

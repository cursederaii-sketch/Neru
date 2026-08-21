const fs = require('fs');
const path = require('path');

const DB_PATH = path.join(__dirname, '..', 'db.json');

function loadDB() {
  if (!fs.existsSync(DB_PATH)) {
    const inicial = { users: {}, cupos: {} };
    fs.writeFileSync(DB_PATH, JSON.stringify(inicial, null, 2));
    return inicial;
  }
  try {
    return JSON.parse(fs.readFileSync(DB_PATH, 'utf8'));
  } catch (err) {
    console.error('⚠️ db.json corrupto, iniciando vacío:', err.message);
    return { users: {}, cupos: {} };
  }
}

function saveDB(db) {
  fs.writeFileSync(DB_PATH, JSON.stringify(db, null, 2));
}

function getProfile(db, userId) {
  if (!db.users[userId]) {
    db.users[userId] = {
      raza: null,
      clan: null,
      talento: null,
      especial: null,
      rerolls: 3,
      fecha: Date.now(),
    };
  }
  return db.users[userId];
}

// Cuenta cuántos personajes activos hay ya asignados a un id con cupo limitado
function contarCupoUsado(db, categoria, id) {
  if (!db.cupos) db.cupos = {};
  if (!db.cupos[categoria]) db.cupos[categoria] = {};
  return db.cupos[categoria][id] || 0;
}

function ocuparCupo(db, categoria, id) {
  if (!db.cupos) db.cupos = {};
  if (!db.cupos[categoria]) db.cupos[categoria] = {};
  db.cupos[categoria][id] = (db.cupos[categoria][id] || 0) + 1;
}

function liberarCupo(db, categoria, id) {
  if (!db.cupos?.[categoria]?.[id]) return;
  db.cupos[categoria][id] = Math.max(0, db.cupos[categoria][id] - 1);
}

// Elige un ítem de la lista respetando pesos y cupos máximos (si aplica)
function spinPonderado(db, categoria, lista) {
  const disponibles = lista.filter((item) => {
    if (!item.cupoMax) return true;
    return contarCupoUsado(db, categoria, item.id) < item.cupoMax;
  });

  const pool = disponibles.length > 0 ? disponibles : lista.filter((i) => !i.cupoMax);
  if (pool.length === 0) return lista[0]; // fallback extremo

  const pesoTotal = pool.reduce((sum, item) => sum + item.peso, 0);
  let roll = Math.random() * pesoTotal;

  for (const item of pool) {
    roll -= item.peso;
    if (roll <= 0) return item;
  }
  return pool[pool.length - 1];
}

module.exports = {
  loadDB,
  saveDB,
  getProfile,
  contarCupoUsado,
  ocuparCupo,
  liberarCupo,
  spinPonderado,
};


// Datos: casos reales de salud mental en el fútbol y el deporte en general
const placesData = [
  {
    id: "espana-bojan",
    lat: 41.3851,
    lng: 2.1734, // Barcelona
    type: "danger",
    year: "2007",
    title: "España",
    subtitle: "El caso de Bojan Krkic",
    desc: "Con apenas 17 años, la presión de ser señalado como 'el nuevo Messi' le provocó ataques de pánico en el vestuario antes de debutar con el primer equipo. El estigma hizo que el club justificara sus ausencias como una gastroenteritis en lugar de nombrar el problema real.",
    source: "Testimonios recogidos por FIFPRO y prensa deportiva",
    color: "#e04f35"
  },
  {
    id: "alemania-enke",
    lat: 52.3759,
    lng: 9.7320, // Hannover
    type: "danger",
    year: "2009",
    title: "Alemania",
    subtitle: "El caso de Robert Enke",
    desc: "El arquero de la selección alemana ocultó durante años una depresión, por miedo a que afectara su carrera y el proceso de adopción de su hija. Murió en noviembre de 2009, a los 32 años. Su historia cambió para siempre la manera en que el fútbol alemán habla de salud mental.",
    source: "Fundación Robert Enke · Bundesliga",
    color: "#e04f35"
  },
  {
    id: "alemania-deisler",
    lat: 48.1351,
    lng: 11.5820, // Múnich
    type: "turf",
    year: "2007",
    title: "Alemania",
    subtitle: "La recuperación de Sebastian Deisler",
    desc: "Considerado la gran promesa del fútbol alemán, fue internado por depresión en 2003 en pleno auge de su carrera en el Bayern Múnich. Las lesiones y la presión mediática agravaron su cuadro. En 2007 decidió retirarse a los 27 años para priorizar su salud, y hoy su testimonio es referencia sobre pedir ayuda a tiempo.",
    source: "Bayern Múnich · autobiografía 'Volver a la vida'",
    color: "#349662"
  },
  {
    id: "espana-iniesta",
    lat: 39.2833,
    lng: -1.7667, // Fuentealbilla, Albacete
    type: "turf",
    year: "2009",
    title: "España",
    subtitle: "Andrés Iniesta y la ayuda profesional",
    desc: "Meses después de ganar la Champions League 2009, la muerte repentina de su amigo Dani Jarque lo sumió en una depresión profunda. Consultó a una psicóloga y contó con el respaldo de Pep Guardiola. Volvió a rendir al máximo nivel y hoy sigue en terapia como parte de su cuidado diario.",
    source: "Documental 'El héroe inesperado' · libro 'La mente también juega'",
    color: "#349662"
  },
  {
    id: "argentina-donatti",
    lat: -34.6037,
    lng: -58.3816, // Buenos Aires
    type: "turf",
    year: "2025",
    title: "Argentina",
    subtitle: "Alejandro Donatti rompe el silencio",
    desc: "Durante su etapa en San Lorenzo, el defensor sufría taquicardias y ataques de pánico camino a los entrenamientos. Fue diagnosticado con depresión avanzada y comenzó tratamiento con psiquiatra y psicólogo del club. Ya retirado, cuenta su historia públicamente para visibilizar el tema entre excompañeros.",
    source: "TNT Sports · entrevista 2025",
    color: "#349662"
  },
  {
    id: "canada",
    lat: 43.6532,
    lng: -79.3832, // Toronto
    type: "danger",
    year: "2021",
    title: "Canadá",
    subtitle: "Estudio U. de Toronto",
    desc: "Un estudio sobre deportistas de alto rendimiento rumbo a Tokio 2020 encontró que el 41% cumplía criterios de depresión o ansiedad, operando por debajo del radar clínico del cuerpo técnico.",
    source: "Universidad de Toronto",
    color: "#e04f35"
  },
  {
    id: "espana-futpro",
    lat: 40.4168,
    lng: -3.7038, // Madrid
    type: "danger",
    year: "2024",
    title: "España",
    subtitle: "Salud mental en el fútbol femenino",
    desc: "Un estudio del sindicato FUTPRO reveló que el 80% de las futbolistas españolas de élite sufrió síntomas de depresión, estrés o ansiedad por la exigencia del deporte profesional, y que 6 de cada 10 no se sintieron apoyadas por su club.",
    source: "FUTPRO, II Estudio de Salud Mental 2024",
    color: "#e04f35"
  },
  {
    id: "taiwan",
    lat: 23.6978,
    lng: 120.9605, // Taiwán
    type: "turf",
    year: "2019",
    title: "Taiwán",
    subtitle: "Estudio JAMA Pediatrics",
    desc: "Una investigación con casi dos millones de chicos demostró que el ejercicio físico regular actúa como factor de protección frente a la ansiedad, la depresión y el TDAH.",
    source: "JAMA Pediatrics",
    color: "#349662"
  },
  {
    id: "colombia",
    lat: 6.2442,
    lng: -75.5812, // Medellín
    type: "turf",
    year: "1994",
    title: "Colombia",
    subtitle: "Origen de la tarjeta verde",
    desc: "Mucho antes que en Europa, la tarjeta verde nació en un potrero de Medellín, impulsada por Roosevelt Castro para premiar el juego limpio y el buen comportamiento en la cancha.",
    source: "Prensa deportiva colombiana",
    color: "#349662"
  },
  {
    id: "global-fifpro",
    lat: 52.3676,
    lng: 4.9041, // Países Bajos, sede de FIFPRO
    type: "info",
    year: "2015",
    title: "Global",
    subtitle: "Lo que dice FIFPRO",
    desc: "Un estudio del sindicato mundial de futbolistas reveló que el 38% de los jugadores profesionales en actividad presentó síntomas de depresión. Encuestas posteriores mostraron que la cifra es aún mayor entre las futbolistas mujeres, con menos apoyo institucional disponible.",
    source: "FIFPRO, estudio global 2015",
    color: "#C98A1E"
  }
];

// Estado de filtros
let activeFilter = "all";
let searchTerm = "";
let tourActive = false;
let tourIndex = 0;
let tourTimer = null;

function getFilteredData() {
  return placesData.filter(d => {
    const matchesFilter = activeFilter === "all" || d.type === activeFilter;
    const term = searchTerm.trim().toLowerCase();
    const matchesSearch = !term ||
      d.title.toLowerCase().includes(term) ||
      d.subtitle.toLowerCase().includes(term) ||
      d.desc.toLowerCase().includes(term);
    return matchesFilter && matchesSearch;
  });
}

// Arcos: conectan los casos secuencialmente, coloreados por tipo
function buildArcsData(data) {
  const arcs = [];
  for (let i = 0; i < data.length - 1; i++) {
    arcs.push({
      startLat: data[i].lat,
      startLng: data[i].lng,
      endLat: data[i + 1].lat,
      endLng: data[i + 1].lng,
      color: [data[i].color, data[i + 1].color]
    });
  }
  return arcs;
}

// Inicialización del Globo
const elem = document.getElementById('globe-container');
const world = Globe()
  (elem)
  .globeImageUrl('https://unpkg.com/three-globe/example/img/earth-dark.jpg')
  .backgroundColor('#0D1512')
  .pointOfView({ lat: 20, lng: -40, altitude: 2.2 })

  .labelsData(placesData)
  .labelLat(d => d.lat)
  .labelLng(d => d.lng)
  .labelText(d => d.title)
  .labelSize(1.5)
  .labelDotRadius(0.8)
  .labelColor(d => d.color)
  .labelResolution(2)
  .onLabelClick(d => showInfo(d))

  .arcsData(buildArcsData(placesData))
  .arcColor('color')
  .arcDashLength(0.4)
  .arcDashGap(0.2)
  .arcDashAnimateTime(2000)
  .arcStroke(0.5);

world.controls().autoRotate = true;
world.controls().autoRotateSpeed = 0.5;

// --- Lógica de la interfaz ---
const infoCard = document.getElementById('info-card');
const closeBtn = document.getElementById('close-card');
const statsBar = document.getElementById('stats-bar');

const tagLabels = { danger: 'Área de Riesgo', turf: 'Recuperación / Protección', info: 'Dato Global' };

function showInfo(data) {
  world.controls().autoRotate = false;

  document.getElementById('card-tag').textContent = tagLabels[data.type] || data.type;
  document.getElementById('card-tag').className = `tag ${data.type}`;
  document.getElementById('card-year').textContent = data.year || '';
  document.getElementById('card-title').textContent = data.title;
  document.getElementById('card-subtitle').textContent = data.subtitle;
  document.getElementById('card-desc').textContent = data.desc;
  document.getElementById('card-source').textContent = data.source ? `Fuente: ${data.source}` : '';

  infoCard.classList.remove('hidden');
  world.pointOfView({ lat: data.lat, lng: data.lng, altitude: 1.5 }, 1000);
}

closeBtn.addEventListener('click', () => {
  infoCard.classList.add('hidden');
  if (!tourActive) world.controls().autoRotate = true;
});

// Pantalla Completa
const fullscreenBtn = document.getElementById('fullscreen-btn');
fullscreenBtn.addEventListener('click', () => {
  if (!document.fullscreenElement) {
    document.documentElement.requestFullscreen().catch(err => {
      console.log(`Error intentando activar pantalla completa: ${err.message}`);
    });
    fullscreenBtn.textContent = 'Salir de Pantalla Completa';
  } else {
    document.exitFullscreen();
    fullscreenBtn.textContent = 'Pantalla Completa';
  }
});

window.addEventListener('resize', () => {
  world.width(window.innerWidth);
  world.height(window.innerHeight);
});

// --- Controles del panel de ajustes ---
const speedSlider = document.getElementById('speed-slider');
speedSlider.addEventListener('input', (e) => {
  world.controls().autoRotateSpeed = parseFloat(e.target.value);
  world.controls().autoRotate = parseFloat(e.target.value) > 0 && !tourActive;
});

const arcToggle = document.getElementById('arc-toggle');
arcToggle.addEventListener('change', (e) => {
  world.arcsData(e.target.checked ? buildArcsData(getFilteredData()) : []);
});

const atmosphereToggle = document.getElementById('atmosphere-toggle');
atmosphereToggle.addEventListener('change', (e) => {
  world.showAtmosphere(e.target.checked);
});

// --- Filtros y búsqueda ---
const filterButtons = document.querySelectorAll('.filter-btn');
const searchInput = document.getElementById('search-input');

function refreshGlobe() {
  const filtered = getFilteredData();
  world.labelsData(filtered);
  if (arcToggle.checked) {
    world.arcsData(buildArcsData(filtered));
  }
  statsBar.textContent = `Mostrando ${filtered.length} de ${placesData.length} casos`;
}

filterButtons.forEach(btn => {
  btn.addEventListener('click', () => {
    filterButtons.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    activeFilter = btn.dataset.filter;
    refreshGlobe();
  });
});

searchInput.addEventListener('input', (e) => {
  searchTerm = e.target.value;
  refreshGlobe();
});

// --- Recorrido guiado (tour automático) ---
const tourBtn = document.getElementById('tour-btn');

function stopTour() {
  tourActive = false;
  clearInterval(tourTimer);
  tourBtn.textContent = '▶ Recorrido guiado';
  tourBtn.classList.remove('playing');
}

function startTour() {
  const data = getFilteredData();
  if (data.length === 0) return;
  tourActive = true;
  tourIndex = 0;
  tourBtn.textContent = '⏸ Detener recorrido';
  tourBtn.classList.add('playing');
  world.controls().autoRotate = false;

  showInfo(data[tourIndex]);
  tourTimer = setInterval(() => {
    tourIndex = (tourIndex + 1) % data.length;
    showInfo(data[tourIndex]);
  }, 5000);
}

tourBtn.addEventListener('click', () => {
  if (tourActive) {
    stopTour();
  } else {
    startTour();
  }
});

// Si el usuario cierra la tarjeta manualmente durante el tour, lo detenemos
closeBtn.addEventListener('click', () => {
  if (tourActive) stopTour();
});

// Inicializar barra de estadísticas
statsBar.textContent = `Mostrando ${placesData.length} de ${placesData.length} casos`;

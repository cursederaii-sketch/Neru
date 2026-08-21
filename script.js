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
    id: "uruguay-araujo",
    lat: -34.9011,
    lng: -56.1645, // Montevideo
    type: "turf",
    year: "2025",
    title: "Uruguay",
    subtitle: "Ronald Araujo pide ayuda",
    desc: "El defensor charrúa del Barcelona sintió que algo 'no funcionaba' en pleno rendimiento deportivo: se notaba cada vez más apagado, aunque su nivel en la cancha no lo mostrara. Habló públicamente sobre haber buscado ayuda para tratar su ansiedad y depresión, un paso que él mismo describió como decisivo.",
    source: "Universo Valdano, Movistar+",
    color: "#349662"
  },
  {
    id: "francia-varane",
    lat: 40.4530,
    lng: -3.6883, // Santiago Bernabéu, Madrid
    type: "turf",
    year: "2021",
    title: "Francia",
    subtitle: "Raphael Varane, campeón del mundo con depresión",
    desc: "El defensor francés, campeón del mundo en 2018, reveló que atravesó una depresión apenas llegó al Real Madrid a los 18 años, lejos de su familia y bajo una presión desconocida hasta entonces. Su testimonio forma parte de un documental que busca romper el silencio en el vestuario.",
    source: "Documental 'Têtes plongeantes' (2021)",
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

// Utilidad para convertir un color hex a rgba con alpha variable (para los anillos)
function hexToRgba(hex, alpha) {
  const h = hex.replace('#', '');
  const r = parseInt(h.substring(0, 2), 16);
  const g = parseInt(h.substring(2, 4), 16);
  const b = parseInt(h.substring(4, 6), 16);
  return `rgba(${r},${g},${b},${alpha})`;
}

// Inicialización del Globo — texturas de mayor detalle: relieve, nubes, cielo estrellado
const elem = document.getElementById('globe-container');
const world = Globe()
  (elem)
  .globeImageUrl('https://unpkg.com/three-globe/example/img/earth-night.jpg')
  .bumpImageUrl('https://unpkg.com/three-globe/example/img/earth-topology.png')
  .backgroundImageUrl('https://unpkg.com/three-globe/example/img/night-sky.png')
  .backgroundColor('#0D1512')
  .atmosphereColor('#349662')
  .atmosphereAltitude('0.28')
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
  .arcStroke(0.5)

  // Anillos que laten sobre cada punto, coloreados según su categoría
  .ringsData(placesData)
  .ringLat(d => d.lat)
  .ringLng(d => d.lng)
  .ringColor(d => t => hexToRgba(d.color, 1 - t))
  .ringMaxRadius(3.2)
  .ringPropagationSpeed(1.8)
  .ringRepeatPeriod(1400);

world.controls().autoRotate = true;
world.controls().autoRotateSpeed = 0.5;

// Capa de nubes semitransparente girando por encima del globo
(function addClouds() {
  const CLOUDS_ALT = 0.006;
  const CLOUDS_ROTATION_SPEED = -0.006; // grados por frame
  new THREE.TextureLoader().load(
    'https://unpkg.com/three-globe/example/img/clouds.png',
    cloudsTexture => {
      const clouds = new THREE.Mesh(
        new THREE.SphereGeometry(world.getGlobeRadius() * (1 + CLOUDS_ALT), 75, 75),
        new THREE.MeshPhongMaterial({ map: cloudsTexture, transparent: true, opacity: 0.55 })
      );
      world.scene().add(clouds);
      (function rotateClouds() {
        clouds.rotation.y += CLOUDS_ROTATION_SPEED * Math.PI / 180;
        requestAnimationFrame(rotateClouds);
      })();
    },
    undefined,
    () => { /* si la textura falla, el globo sigue funcionando sin nubes */ }
  );
})();

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

// =====================================================================
// CINEMÁTICA: secuencia animada que explica los beneficios del deporte
// para la salud mental y cierra con el mensaje de pedir ayuda.
// =====================================================================

const cinemaSlides = [
  {
    kicker: 'Antes de seguir explorando',
    title: 'En cada cancha pasa\nalgo más que un partido',
    body: 'Diez mil millones de personas juegan, miran o sienten el fútbol cada semana. Detrás de cada jugada hay una cabeza trabajando tanto como el cuerpo.',
    theme: 'neutral',
    icon: 'ball'
  },
  {
    kicker: 'Lo que el deporte sí nos da',
    title: 'Libera, ordena\ny hace bien',
    body: 'La actividad física regular reduce los niveles de estrés y ansiedad, mejora el sueño y libera endorfinas que actúan como un antidepresivo natural.',
    theme: 'turf',
    icon: 'pulse'
  },
  {
    kicker: 'Lo que el deporte sí nos da',
    title: 'Un equipo\nes una red',
    body: 'Pertenecer a un grupo, tener una rutina y un objetivo compartido protege la salud mental, sobre todo en la adolescencia. Por eso el ejercicio funciona como factor protector frente a la ansiedad y la depresión.',
    theme: 'turf',
    icon: 'team'
  },
  {
    kicker: 'Pero también',
    title: 'Los futbolistas\ntambién son personas',
    body: 'La presión, la exposición pública y el miedo a mostrarse vulnerable pueden pasar factura. Cerca del 38% de los futbolistas profesionales reportó síntomas de depresión en algún momento de su carrera.',
    theme: 'danger',
    icon: 'weight'
  },
  {
    kicker: 'La otra mitad de la cancha',
    title: 'Como cualquier lesión,\nhablar es el primer paso',
    body: 'Nadie se avergüenza de pedir un fisioterapeuta por un esguince. La cabeza también se lesiona, y también se trata: con ayuda profesional, con tiempo y con gente de confianza cerca.',
    theme: 'caution',
    icon: 'talk'
  },
  {
    kicker: 'Si algo te pasa',
    title: 'Contalo.\nPedir ayuda no es debilidad',
    body: 'Si algo no anda bien, hablalo con alguien de confianza o con un profesional de la salud mental. No hace falta esperar a tocar fondo para pedir una mano: es la jugada más valiente que existe.',
    theme: 'turf',
    icon: 'heart'
  }
];

const cinemaIcons = {
  ball: `<circle cx="150" cy="150" r="34" fill="none" stroke="currentColor" stroke-width="3"/>
         <path d="M150 122 L172 138 L163 164 L137 164 L128 138 Z" fill="currentColor" opacity="0.85"/>`,
  pulse: `<path d="M90 150 H120 L135 110 L165 190 L180 150 H210" fill="none" stroke="currentColor" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>`,
  team: `<circle cx="120" cy="130" r="16" fill="currentColor" opacity="0.9"/>
         <circle cx="180" cy="130" r="16" fill="currentColor" opacity="0.9"/>
         <circle cx="150" cy="100" r="16" fill="currentColor" opacity="0.9"/>
         <path d="M100 190 Q150 160 200 190" fill="none" stroke="currentColor" stroke-width="4" stroke-linecap="round"/>`,
  weight: `<path d="M110 110 L190 190 M190 110 L110 190" stroke="currentColor" stroke-width="4" stroke-linecap="round" opacity="0.4"/>
           <circle cx="150" cy="150" r="45" fill="none" stroke="currentColor" stroke-width="3"/>`,
  talk: `<path d="M105 115 h90 a10 10 0 0 1 10 10 v45 a10 10 0 0 1 -10 10 h-55 l-25 22 v-22 h-10 a10 10 0 0 1 -10 -10 v-45 a10 10 0 0 1 10 -10 z" fill="none" stroke="currentColor" stroke-width="3.5"/>`,
  heart: `<path d="M150 195 C110 165 90 140 90 115 C90 95 105 82 122 82 C135 82 145 90 150 100 C155 90 165 82 178 82 C195 82 210 95 210 115 C210 140 190 165 150 195 Z" fill="currentColor" opacity="0.85"/>`
};

const cinemaThemeBg = {
  neutral: 'radial-gradient(circle at 50% 40%, rgba(140,154,135,0.22), var(--night) 70%)',
  turf: 'radial-gradient(circle at 50% 40%, rgba(52,150,98,0.28), var(--night) 70%)',
  danger: 'radial-gradient(circle at 50% 40%, rgba(224,79,53,0.22), var(--night) 70%)',
  caution: 'radial-gradient(circle at 50% 40%, rgba(201,138,30,0.25), var(--night) 70%)'
};

const cinemaThemeStroke = {
  neutral: '#8C9A87',
  turf: '#349662',
  danger: '#e04f35',
  caution: '#C98A1E'
};

let cinemaIndex = 0;
let cinemaAutoTimer = null;
const CINEMA_SLIDE_MS = 4500;

const cinematicEl = document.getElementById('cinematic');
const cinemaBg = document.querySelector('.cinematic-bg');
const cinemaKicker = document.getElementById('cinema-kicker');
const cinemaTitle = document.getElementById('cinema-title');
const cinemaBody = document.getElementById('cinema-body');
const cinemaIconGroup = document.getElementById('cinema-icon');
const cinemaRing = document.getElementById('cinema-ring');
const cinemaProgress = document.getElementById('cinema-progress');

// Construir segmentos de progreso
cinemaSlides.forEach((_, i) => {
  const seg = document.createElement('div');
  seg.className = 'seg';
  seg.innerHTML = '<div class="fill"></div>';
  seg.addEventListener('click', () => goToCinemaSlide(i));
  cinemaProgress.appendChild(seg);
});

function renderCinemaSlide(i) {
  const slide = cinemaSlides[i];

  // Reiniciar animaciones de texto (forzar reflow)
  [cinemaKicker, cinemaTitle, cinemaBody].forEach(el => {
    el.style.animation = 'none';
    void el.offsetWidth;
    el.style.animation = '';
  });

  cinemaKicker.textContent = slide.kicker;
  cinemaTitle.innerHTML = slide.title.replace(/\n/g, '<br>');
  cinemaBody.textContent = slide.body;

  cinemaIconGroup.innerHTML = cinemaIcons[slide.icon];
  const stroke = cinemaThemeStroke[slide.theme];
  cinemaIconGroup.style.color = stroke;
  cinemaRing.style.stroke = stroke;
  cinemaBg.style.background = cinemaThemeBg[slide.theme];

  // Progreso
  const segs = cinemaProgress.querySelectorAll('.seg');
  segs.forEach((seg, idx) => {
    seg.classList.remove('active', 'done');
    if (idx < i) seg.classList.add('done');
    if (idx === i) seg.classList.add('active');
  });
}

function goToCinemaSlide(i) {
  clearTimeout(cinemaAutoTimer);
  cinemaIndex = (i + cinemaSlides.length) % cinemaSlides.length;
  renderCinemaSlide(cinemaIndex);
  scheduleCinemaAdvance();
}

function scheduleCinemaAdvance() {
  clearTimeout(cinemaAutoTimer);
  if (cinemaIndex === cinemaSlides.length - 1) return; // se detiene en el mensaje final
  cinemaAutoTimer = setTimeout(() => goToCinemaSlide(cinemaIndex + 1), CINEMA_SLIDE_MS);
}

function openCinematic() {
  if (tourActive) stopTour();
  world.controls().autoRotate = false;
  cinemaIndex = 0;
  renderCinemaSlide(0);
  scheduleCinemaAdvance();
  cinematicEl.classList.remove('hidden');
}

function closeCinematic() {
  clearTimeout(cinemaAutoTimer);
  cinematicEl.classList.add('hidden');
  world.controls().autoRotate = true;
}

document.getElementById('cinematic-btn').addEventListener('click', openCinematic);
document.getElementById('cinematic-close').addEventListener('click', closeCinematic);
document.getElementById('cinema-skip').addEventListener('click', closeCinematic);
document.getElementById('cinema-next').addEventListener('click', () => goToCinemaSlide(cinemaIndex + 1));
document.getElementById('cinema-prev').addEventListener('click', () => goToCinemaSlide(cinemaIndex - 1));

document.addEventListener('keydown', (e) => {
  if (cinematicEl.classList.contains('hidden')) return;
  if (e.key === 'ArrowRight') goToCinemaSlide(cinemaIndex + 1);
  if (e.key === 'ArrowLeft') goToCinemaSlide(cinemaIndex - 1);
  if (e.key === 'Escape') closeCinematic();
});

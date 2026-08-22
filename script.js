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
//
// TODO ESTO VA ENVUELTO EN try/catch A PROPÓSITO: si el WebGL falla por
// cualquier motivo (GPU, drivers, contexto perdido, etc.), el resto del
// sitio —filtros, buscador, panel de resultados, sonido ambiente— tiene
// que seguir funcionando igual. Un "stub" con métodos que no hacen nada
// evita que el resto del script se rompa si algo intenta llamar a world.*
function createNoopGlobeStub() {
  const stub = {};
  const chainable = () => stub;
  ['controls', 'scene', 'width', 'height', 'pointOfView', 'arcsData',
   'showAtmosphere', 'labelsData', 'getGlobeRadius'].forEach(name => {
    stub[name] = name === 'controls'
      ? () => ({ autoRotate: false, autoRotateSpeed: 0 })
      : chainable;
  });
  return stub;
}

const elem = document.getElementById('globe-container');
let world;
try {
  world = Globe()
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
} catch (err) {
  console.error('No se pudo inicializar el globo 3D. El resto del sitio sigue funcionando.', err);
  world = createNoopGlobeStub();
}

// Capa de nubes semitransparente girando por encima del globo.
// Envuelta en try/catch: si three.js o la textura fallan, el resto del sitio
// (tarjetas, filtros, cinemática) debe seguir funcionando igual.
function addClouds() {
  try {
    if (typeof THREE === 'undefined') {
      console.warn('THREE no está disponible: se omite la capa de nubes.');
      return;
    }
    const CLOUDS_ALT = 0.006;
    const CLOUDS_ROTATION_SPEED = -0.006; // grados por frame
    new THREE.TextureLoader().load(
      'https://cdn.jsdelivr.net/npm/three-globe/example/clouds/clouds.png',
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
  } catch (err) {
    console.warn('No se pudo cargar la capa de nubes:', err);
  }
}
addClouds();

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
  try {
    world.width(window.innerWidth);
    world.height(window.innerHeight);
  } catch (err) { /* si el globo no inicializó, no hay nada que redimensionar */ }
});

// --- Panel de controles: colapsado por defecto, se abre con el botón ---
const tweaksToggleBtn = document.getElementById('tweaks-toggle');
const tweaksPanel = document.getElementById('tweaks-panel');
const tweaksCloseBtn = document.getElementById('tweaks-close');

function openTweaksPanel() {
  tweaksPanel.classList.add('open');
  tweaksToggleBtn.classList.add('active', 'hidden-btn');
  tweaksToggleBtn.setAttribute('aria-expanded', 'true');
}

function closeTweaksPanel() {
  tweaksPanel.classList.remove('open');
  tweaksToggleBtn.classList.remove('active', 'hidden-btn');
  tweaksToggleBtn.setAttribute('aria-expanded', 'false');
}

tweaksToggleBtn.addEventListener('click', () => {
  if (tweaksPanel.classList.contains('open')) {
    closeTweaksPanel();
  } else {
    openTweaksPanel();
  }
});

tweaksCloseBtn.addEventListener('click', closeTweaksPanel);

// Cerrar el panel con Escape, o al hacer click fuera de él
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape' && tweaksPanel.classList.contains('open')) closeTweaksPanel();
});

document.addEventListener('click', (e) => {
  if (!tweaksPanel.classList.contains('open')) return;
  if (tweaksPanel.contains(e.target) || tweaksToggleBtn.contains(e.target)) return;
  closeTweaksPanel();
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

// Cada ilustración es un pequeño conjunto de formas (círculos, arcos y
// siluetas) en distintas opacidades de "currentColor" — un estilo duotono
// con más cuerpo que un simple ícono de línea. Todas comparten la clase
// cinema-part, que entra escalonada (ver renderCinemaSlide) para que la
// escena se sienta dibujada por partes en vez de pegada de golpe.
const cinemaIcons = {
  ball: `
    <g class="cinema-part">
      <ellipse class="ball-shadow" cx="150" cy="205" rx="42" ry="10" fill="currentColor" fill-opacity="0.2"/>
      <g class="ball-bounce">
        <g class="ball-spin">
          <circle cx="150" cy="150" r="46" fill="currentColor" fill-opacity="0.14"/>
          <circle cx="150" cy="150" r="34" fill="currentColor"/>
          <path d="M150 122 L163 132 L158 148 L142 148 L137 132 Z" fill="var(--night)" fill-opacity="0.55"/>
          <path d="M150 148 L163 158 L158 174 L142 174 L137 158 Z" fill="var(--night)" fill-opacity="0.35"/>
          <ellipse cx="138" cy="136" rx="7" ry="4" fill="#ffffff" fill-opacity="0.35"/>
        </g>
      </g>
    </g>`,
  pulse: `
    <g class="cinema-part">
      <circle cx="150" cy="150" r="80" fill="currentColor" fill-opacity="0.1"/>
      <circle cx="150" cy="150" r="58" fill="currentColor" fill-opacity="0.16"/>
      <clipPath id="ecgClip"><rect x="70" y="105" width="160" height="90"/></clipPath>
      <g clip-path="url(#ecgClip)">
        <path class="ecg-line" d="M-40 150 H0 L14 108 L34 192 L50 130 L64 150 H120 L134 108 L154 192 L170 130 L184 150 H240 L254 108 L274 192 L290 130 L304 150 H360" fill="none" stroke="currentColor" stroke-width="6" stroke-linecap="round" stroke-linejoin="round"/>
      </g>
      <circle class="ecg-dot" cx="212" cy="150" r="6" fill="currentColor"/>
    </g>`,
  team: `
    <g class="cinema-part">
      <circle cx="150" cy="150" r="84" fill="currentColor" fill-opacity="0.1"/>
      <path class="team-arc" d="M96 198 Q150 162 204 198" fill="none" stroke="currentColor" stroke-width="6" stroke-linecap="round" stroke-opacity="0.5"/>
      <circle class="team-fig team-fig-a" cx="112" cy="142" r="21" fill="currentColor" fill-opacity="0.5"/>
      <circle class="team-fig team-fig-b" cx="188" cy="142" r="21" fill="currentColor" fill-opacity="0.5"/>
      <circle class="team-fig team-fig-c" cx="150" cy="112" r="24" fill="currentColor"/>
    </g>`,
  weight: `
    <g class="cinema-part">
      <circle cx="150" cy="150" r="80" fill="currentColor" fill-opacity="0.1"/>
      <path d="M90 176 A64 64 0 0 1 210 176" fill="none" stroke="currentColor" stroke-width="10" stroke-linecap="round" stroke-opacity="0.3"/>
      <path class="weight-fill" d="M90 176 A64 64 0 0 1 178 98" fill="none" stroke="currentColor" stroke-width="10" stroke-linecap="round"/>
      <g class="weight-needle">
        <path d="M150 150 L150 100" stroke="currentColor" stroke-width="6" stroke-linecap="round"/>
      </g>
      <circle cx="150" cy="150" r="10" fill="currentColor"/>
    </g>`,
  talk: `
    <g class="cinema-part">
      <circle cx="150" cy="150" r="84" fill="currentColor" fill-opacity="0.1"/>
      <g class="talk-bubble talk-bubble-b">
        <path d="M178 168 h48 a10 10 0 0 1 10 10 v26 a10 10 0 0 1 -10 10 h-28 l-16 14 v-14 h-4 a10 10 0 0 1 -10 -10 v-26 a10 10 0 0 1 10 -10 z" fill="currentColor" fill-opacity="0.4"/>
      </g>
      <g class="talk-bubble talk-bubble-a">
        <path d="M92 104 h88 a14 14 0 0 1 14 14 v44 a14 14 0 0 1 -14 14 h-48 l-24 20 v-20 h-16 a14 14 0 0 1 -14 -14 v-44 a14 14 0 0 1 14 -14 z" fill="currentColor" fill-opacity="0.85"/>
        <circle class="talk-dot" cx="120" cy="148" r="5.5" fill="var(--night)"/>
        <circle class="talk-dot" cx="150" cy="148" r="5.5" fill="var(--night)"/>
        <circle class="talk-dot" cx="180" cy="148" r="5.5" fill="var(--night)"/>
      </g>
    </g>`,
  heart: `
    <g class="cinema-part">
      <circle class="heart-ring" cx="150" cy="150" r="82" fill="none" stroke="currentColor" stroke-width="2"/>
      <circle class="heart-ring heart-ring-2" cx="150" cy="150" r="82" fill="none" stroke="currentColor" stroke-width="2"/>
      <g class="heart-beat">
        <path d="M150 195 C110 165 90 140 90 115 C90 95 105 82 122 82 C135 82 145 90 150 100 C155 90 165 82 178 82 C195 82 210 95 210 115 C210 140 190 165 150 195 Z" fill="currentColor"/>
        <ellipse cx="127" cy="105" rx="12" ry="7" fill="#ffffff" fill-opacity="0.3"/>
      </g>
    </g>`
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
const cinemaBlobA = document.getElementById('cinema-blob-a');
const cinemaBlobB = document.getElementById('cinema-blob-b');
const cinemaGlow = document.getElementById('cinema-glow');
const cinemaTextEl = document.querySelector('.cinematic-text');
const cinemaKicker = document.getElementById('cinema-kicker');
const cinemaTitle = document.getElementById('cinema-title');
const cinemaBody = document.getElementById('cinema-body');
const cinemaIconGroup = document.getElementById('cinema-icon');
const cinemaProgress = document.getElementById('cinema-progress');
const cinemaParticlesEl = document.getElementById('cinematic-particles');

// Construir segmentos de progreso
cinemaSlides.forEach((_, i) => {
  const seg = document.createElement('div');
  seg.className = 'seg';
  seg.innerHTML = '<div class="fill"></div>';
  seg.addEventListener('click', () => goToCinemaSlide(i));
  cinemaProgress.appendChild(seg);
});

// Partículas de ambientación: puntitos que flotan hacia arriba durante
// toda la cinemática, con tamaños, velocidades y demoras al azar para
// que no se sientan sincronizadas ni mecánicas.
function initCinemaParticles(count = 26) {
  const colors = ['#349662', '#C98A1E', '#8C9A87'];
  for (let i = 0; i < count; i++) {
    const p = document.createElement('span');
    const size = 2 + Math.random() * 3;
    p.style.left = `${Math.random() * 100}%`;
    p.style.width = `${size}px`;
    p.style.height = `${size}px`;
    p.style.animationDuration = `${10 + Math.random() * 14}s`;
    p.style.animationDelay = `${Math.random() * -18}s`;
    p.style.setProperty('--particle-color', colors[i % colors.length]);
    cinemaParticlesEl.appendChild(p);
  }
}
initCinemaParticles();

function renderCinemaSlide(i, direction = 'next') {
  const slide = cinemaSlides[i];

  // Reiniciar animaciones de texto (forzar reflow), aplicando la dirección
  // (adelante/atrás) para que la entrada del texto refleje hacia dónde
  // se está navegando en la historia.
  cinemaTextEl.classList.remove('dir-next', 'dir-prev');
  void cinemaTextEl.offsetWidth;
  cinemaTextEl.classList.add(direction === 'prev' ? 'dir-prev' : 'dir-next');

  [cinemaKicker, cinemaTitle, cinemaBody].forEach(el => {
    el.style.animation = 'none';
    void el.offsetWidth;
    el.style.animation = '';
  });

  cinemaKicker.textContent = slide.kicker;
  cinemaTitle.innerHTML = slide.title.replace(/\n/g, '<br>');
  cinemaBody.textContent = slide.body;

  cinemaIconGroup.innerHTML = cinemaIcons[slide.icon];

  // Cada forma (.cinema-part) entra escalonada en el tiempo, como si la
  // escena se fuera dibujando de a partes en vez de aparecer de golpe.
  const parts = cinemaIconGroup.querySelectorAll('.cinema-part');
  parts.forEach((el, idx) => {
    el.style.animation = 'none';
    el.style.animationDelay = `${(idx * 0.07).toFixed(2)}s`;
    void el.offsetWidth;
    el.style.animation = '';
  });

  const stroke = cinemaThemeStroke[slide.theme];
  cinemaIconGroup.style.color = stroke;
  cinemaGlow.style.setProperty('--glow-color', hexToRgba(stroke, 0.55));
  cinemaBlobA.style.setProperty('--blob-color', hexToRgba(stroke, 1));
  cinemaBlobB.style.setProperty('--blob-color', hexToRgba(stroke, 1));

  // Reiniciar la animación de entrada del ícono/anillo
  const visual = document.getElementById('cinematic-visual');
  visual.style.animation = 'none';
  void visual.offsetWidth;
  visual.style.animation = '';

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
  const direction = i < cinemaIndex ? 'prev' : 'next';
  cinemaIndex = (i + cinemaSlides.length) % cinemaSlides.length;
  renderCinemaSlide(cinemaIndex, direction);
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

// =====================================================================
// PANEL DE RESULTADOS: gráficos en vivo con las respuestas del formulario,
// leídas directamente de la Google Sheet publicada.
//
// Nota técnica: Google Sheets NO habilita CORS en sus endpoints de CSV/JSON
// (ni el "publicado como CSV" ni /gviz/tq), así que un fetch() común falla
// en el navegador. La forma confiable de leerlos desde un sitio estático es
// JSONP: se inyecta un <script> que carga la respuesta y ejecuta una
// función de callback nuestra, sin pasar por la política de CORS.
// =====================================================================

const SURVEY_SHEET_ID = '1pxGsgWGJFvTc6pmnCGZel-nn_cDDIA2NsrH19EN-rb8';
const SURVEY_GID = '277764764';

// Qué hacer con cada columna de la planilla (0 = "Marca temporal").
// 'single' = una opción por respuesta · 'multi' = varias opciones separadas
// por coma (checkboxes) · el resto de las columnas (texto libre) no se grafica.
const surveyQuestions = [
  { col: 1, type: 'single', label: 'Edad' },
  { col: 2, type: 'single', label: 'Deporte que practica' },
  { col: 3, type: 'single', label: 'Frecuencia con la que practica deporte' },
  { col: 4, type: 'single', label: 'Cómo influye el deporte en su salud mental' },
  { col: 5, type: 'single', label: 'Frecuencia de presión por obtener resultados' },
  { col: 6, type: 'single', label: '¿Sintió ansiedad o estrés antes de competir?' },
  { col: 7, type: 'multi', label: 'Qué situaciones le generan más presión' },
  { col: 8, type: 'single', label: 'Cómo afecta una derrota su estado de ánimo' },
  { col: 9, type: 'single', label: '¿Le preocupa cometer errores en competición?' },
  { col: 10, type: 'single', label: '¿Su entrenador le brinda apoyo emocional?' },
  { col: 11, type: 'single', label: '¿Le resulta fácil hablar de sus emociones en el equipo?' },
  { col: 12, type: 'single', label: '¿Reciben los deportistas suficiente apoyo psicológico?' },
  { col: 13, type: 'multi', label: 'Aspectos positivos que aporta el deporte' },
  { col: 14, type: 'single', label: 'Importancia de la salud mental (1 a 5)' }
];

const chartPalette = ['#349662', '#C98A1E', '#e04f35', '#8C9A87', '#5B9BD5'];

let surveyLoading = false;

// Pide los datos de la planilla vía JSONP. callback(err, json)
function loadSurveyResponses(callback) {
  const callbackName = '__surveyGvizCallback_' + Date.now();
  let settled = false;

  const cleanup = (scriptEl) => {
    delete window[callbackName];
    if (scriptEl && scriptEl.parentNode) scriptEl.remove();
  };

  window[callbackName] = (json) => {
    if (settled) return;
    settled = true;
    cleanup(scriptEl);
    callback(null, json);
  };

  const scriptEl = document.createElement('script');
  scriptEl.src = `https://docs.google.com/spreadsheets/d/${SURVEY_SHEET_ID}/gviz/tq?tqx=out:json;responseHandler:${callbackName}&gid=${SURVEY_GID}&_=${Date.now()}`;
  scriptEl.onerror = () => {
    if (settled) return;
    settled = true;
    cleanup(scriptEl);
    console.error('[encuesta] Falló la carga del script JSONP de Google Sheets.');
    callback(new Error('network'));
  };
  document.body.appendChild(scriptEl);

  // Si Google tarda demasiado (por ejemplo porque la hoja no es pública y
  // devuelve una página de login en vez de ejecutar nuestro callback), no
  // dejamos al usuario esperando para siempre.
  setTimeout(() => {
    if (settled) return;
    settled = true;
    cleanup(scriptEl);
    console.error('[encuesta] Tiempo de espera agotado esperando la respuesta de Google Sheets. La causa más común: la hoja no está compartida como "Cualquier persona con el enlace puede ver".');
    callback(new Error('timeout'));
  }, 9000);
}

// La tabla de Google viene como table.rows[].c[].{v,f} — usamos el valor
// formateado (f), que ya llega como texto legible.
function gvizToRows(json) {
  const rows = json.table && json.table.rows ? json.table.rows : [];
  return rows.map(r => (r.c || []).map(cell => (cell && (cell.f !== undefined && cell.f !== null ? cell.f : cell.v)) || ''));
}

// Encabezados de columna tal como los definió la planilla (fila de títulos),
// para poder nombrar las preguntas de texto libre que no están en
// surveyQuestions sin tener que hardcodearlas.
function gvizToHeaders(json) {
  const cols = json.table && json.table.cols ? json.table.cols : [];
  return cols.map(c => (c && c.label) || '');
}

function tallyAnswers(rows, question) {
  const counts = {};
  let total = 0;
  rows.forEach(row => {
    const raw = row[question.col];
    if (raw === undefined || raw === null || String(raw).trim() === '') return;
    if (question.type === 'multi') {
      String(raw).split(',').map(s => s.trim()).filter(Boolean).forEach(v => {
        counts[v] = (counts[v] || 0) + 1;
      });
    } else {
      const v = String(raw).trim();
      counts[v] = (counts[v] || 0) + 1;
    }
    total++;
  });
  const entries = Object.entries(counts).sort((a, b) => b[1] - a[1]);
  return { entries, total };
}

// Geometría fija del anillo (donut): radio 48, grosor de trazo 16.
const DONUT_R = 48;
const DONUT_CIRC = 2 * Math.PI * DONUT_R;

function renderChartCard(question, rows, colorIndex, delayIndex) {
  const { entries, total } = tallyAnswers(rows, question);
  const card = document.createElement('div');
  card.className = 'chart-card';
  card.style.animationDelay = `${Math.min(delayIndex * 0.05, 0.5)}s`;

  if (entries.length === 0) {
    card.innerHTML = `<h4>${question.label}</h4><p class="chart-empty">Todavía no hay respuestas.</p>`;
    return card;
  }

  const TOP_N = 7;
  let shown = entries.slice(0, TOP_N);
  const restCount = entries.slice(TOP_N).reduce((sum, [, c]) => sum + c, 0);
  if (restCount > 0) shown = [...shown, [`Otras respuestas (${entries.length - TOP_N})`, restCount]];

  // Cada porción del anillo es un <circle> con stroke-dasharray recortado a
  // su tramo y un stroke-dashoffset que lo corre hasta el punto donde
  // terminó la porción anterior. rotate(-90deg) (definido en CSS) hace que
  // el recorrido arranque arriba (las 12) en vez de a la derecha (las 3).
  let cumulative = 0;
  const segmentsHtml = shown.map(([, count], i) => {
    const frac = total ? count / total : 0;
    const len = frac * DONUT_CIRC;
    const offset = -cumulative;
    cumulative += len;
    const color = chartPalette[i % chartPalette.length];
    return `<circle class="donut-segment" cx="60" cy="60" r="${DONUT_R}"
      stroke="${color}"
      stroke-dasharray="${len.toFixed(2)} ${(DONUT_CIRC - len).toFixed(2)}"
      stroke-dashoffset="${offset.toFixed(2)}"
      style="animation-delay:${(i * 0.08).toFixed(2)}s"></circle>`;
  }).join('');

  const legendHtml = shown.map(([label, count], i) => {
    const pct = total ? Math.round((count / total) * 100) : 0;
    const color = chartPalette[i % chartPalette.length];
    return `
      <div class="legend-item">
        <span class="legend-dot" style="background:${color}"></span>
        <span class="legend-label" title="${label}">${label}</span>
        <span class="legend-value">${pct}%</span>
      </div>`;
  }).join('');

  card.innerHTML = `
    <h4>${question.label}</h4>
    <div class="donut-chart">
      <svg viewBox="0 0 120 120" class="donut-svg">
        <circle class="donut-track" cx="60" cy="60" r="${DONUT_R}"></circle>
        ${segmentsHtml}
      </svg>
      <div class="donut-legend">${legendHtml}</div>
    </div>
    <p class="chart-meta">${total} respuesta${total === 1 ? '' : 's'}</p>`;
  return card;
}

function renderSurveyCharts(rows) {
  const grid = document.getElementById('results-grid');
  grid.innerHTML = '';
  surveyQuestions.forEach((q, i) => {
    grid.appendChild(renderChartCard(q, rows, i, i));
  });
}

// --- Respuestas de texto libre ---
// Cualquier columna que no sea la marca temporal (0) ni esté mapeada en
// surveyQuestions se trata como texto libre: en vez de graficarla, se
// listan las respuestas tal cual las escribió cada persona.
const chartedCols = new Set(surveyQuestions.map(q => q.col));

function getFreeTextColumns(headers, rows) {
  const maxCol = Math.max(headers.length, ...rows.map(r => r.length), 0);
  const cols = [];
  for (let c = 1; c < maxCol; c++) {
    if (chartedCols.has(c)) continue;
    cols.push({ col: c, label: headers[c] || `Pregunta ${c}` });
  }
  return cols;
}

function renderFreeTextCard(question, rows, delayIndex) {
  const answers = rows
    .map(r => (r[question.col] || '').toString().trim())
    .filter(Boolean);

  const card = document.createElement('div');
  card.className = 'chart-card freetext-card';
  card.style.animationDelay = `${Math.min(delayIndex * 0.05, 0.5)}s`;

  if (answers.length === 0) {
    card.innerHTML = `<h4>${question.label}</h4><p class="chart-empty">Todavía no hay respuestas.</p>`;
    return card;
  }

  const answersHtml = answers.map(a => `<p class="freetext-answer">“${a}”</p>`).join('');

  card.innerHTML = `
    <h4>${question.label}</h4>
    <div class="freetext-list">${answersHtml}</div>
    <p class="chart-meta">${answers.length} respuesta${answers.length === 1 ? '' : 's'}</p>`;
  return card;
}

function renderFreeTextSection(headers, rows) {
  const section = document.getElementById('freetext-section');
  section.innerHTML = '';
  const freeCols = getFreeTextColumns(headers, rows);
  if (freeCols.length === 0) return;

  const heading = document.createElement('h3');
  heading.className = 'freetext-heading';
  heading.textContent = 'Respuestas en sus propias palabras';
  section.appendChild(heading);

  const grid = document.createElement('div');
  grid.className = 'results-grid freetext-grid';
  freeCols.forEach((q, i) => {
    grid.appendChild(renderFreeTextCard(q, rows, i));
  });
  section.appendChild(grid);
}

function refreshSurveyPanel() {
  if (surveyLoading) return;
  surveyLoading = true;
  const statusEl = document.getElementById('results-status');
  const updatedEl = document.getElementById('results-updated');
  statusEl.textContent = 'Cargando respuestas…';
  statusEl.classList.remove('error');

  loadSurveyResponses((err, json) => {
    surveyLoading = false;
    if (err) {
      const sheetUrl = `https://docs.google.com/spreadsheets/d/${SURVEY_SHEET_ID}/edit`;
      statusEl.innerHTML = `No se pudo cargar la planilla. Lo más probable es que no esté compartida como
        <strong>"Cualquier persona con el enlace puede ver"</strong>.
        <a href="${sheetUrl}" target="_blank" rel="noopener" class="results-status-link">Abrir la planilla y revisar el acceso ↗</a>`;
      statusEl.classList.add('error');
      return;
    }
    try {
      const rows = gvizToRows(json);
      const headers = gvizToHeaders(json);
      renderSurveyCharts(rows);
      renderFreeTextSection(headers, rows);
      statusEl.textContent = '';
      updatedEl.textContent = `Actualizado ${new Date().toLocaleTimeString('es-AR', { hour: '2-digit', minute: '2-digit' })}`;
    } catch (e) {
      console.warn('Error interpretando la respuesta de la planilla:', e);
      statusEl.textContent = 'La planilla respondió, pero no se pudo interpretar el formato.';
      statusEl.classList.add('error');
    }
  });
}

// --- Apertura / cierre del panel de resultados ---
const resultsToggleBtn = document.getElementById('results-toggle');
const resultsPanel = document.getElementById('results-panel');
const resultsCloseBtn = document.getElementById('results-close');
const resultsRefreshBtn = document.getElementById('results-refresh');

// NOTA: además de sacar/poner la clase "hidden", forzamos estos estilos por
// JS directamente (inline). Es un respaldo por si el navegador, por el motivo
// que sea, no está aplicando la regla ".results-panel" de style.css — así el
// panel se muestra igual, sin depender pura y exclusivamente del CSS externo.
const RESULTS_PANEL_VISIBLE_STYLES = {
  position: 'fixed',
  top: '0',
  left: '0',
  right: '0',
  bottom: '0',
  zIndex: '90',
  background: 'rgba(13, 21, 18, 0.97)',
  backdropFilter: 'blur(6px)',
  overflowY: 'auto',
  padding: '40px 30px 60px',
  opacity: '1',
  visibility: 'visible',
  pointerEvents: 'auto'
};

function openResultsPanel() {
  resultsPanel.classList.remove('hidden');
  Object.assign(resultsPanel.style, RESULTS_PANEL_VISIBLE_STYLES);
  refreshSurveyPanel();
}

function closeResultsPanel() {
  resultsPanel.classList.add('hidden');
  resultsPanel.style.opacity = '0';
  resultsPanel.style.visibility = 'hidden';
  resultsPanel.style.pointerEvents = 'none';
}

resultsToggleBtn.addEventListener('click', openResultsPanel);
resultsCloseBtn.addEventListener('click', closeResultsPanel);
resultsRefreshBtn.addEventListener('click', refreshSurveyPanel);

document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape' && !resultsPanel.classList.contains('hidden')) closeResultsPanel();
});

// =====================================================================
// SONIDO AMBIENTE: pad calmo + "aire" filtrado, generados con Web Audio
// API (sin archivos externos). Se arranca/para con un botón, ya que los
// navegadores no permiten reproducir audio sin un gesto del usuario.
// =====================================================================

let audioCtx = null;
let ambientNodes = null;
let ambientPlaying = false;

function buildAmbientSound() {
  const ctx = audioCtx;
  const master = ctx.createGain();
  master.gain.value = 0;
  master.connect(ctx.destination);

  // --- Capa 1: pad de acordes suaves (varias ondas sinusoidales/triangulares) ---
  const padFreqs = [110, 164.81, 220, 277.18]; // A2, E3, A3, C#4 — acorde cálido
  const padGain = ctx.createGain();
  padGain.gain.value = 0.05;
  padGain.connect(master);

  const padFilter = ctx.createBiquadFilter();
  padFilter.type = 'lowpass';
  padFilter.frequency.value = 900;
  padFilter.connect(padGain);

  const oscillators = padFreqs.map((freq, i) => {
    const osc = ctx.createOscillator();
    osc.type = i % 2 === 0 ? 'sine' : 'triangle';
    osc.frequency.value = freq;

    // Un leve vibrato lento en cada voz para que el pad "respire"
    const lfo = ctx.createOscillator();
    lfo.frequency.value = 0.05 + i * 0.015;
    const lfoGain = ctx.createGain();
    lfoGain.gain.value = 1.2;
    lfo.connect(lfoGain);
    lfoGain.connect(osc.frequency);
    lfo.start();

    osc.connect(padFilter);
    osc.start();
    return osc;
  });

  // --- Capa 2: "aire" — ruido filtrado tipo viento/olas suaves ---
  const noiseBufferSize = ctx.sampleRate * 2;
  const noiseBuffer = ctx.createBuffer(1, noiseBufferSize, ctx.sampleRate);
  const noiseData = noiseBuffer.getChannelData(0);
  let lastOut = 0;
  for (let i = 0; i < noiseBufferSize; i++) {
    const white = Math.random() * 2 - 1;
    // Filtro simple para volver el ruido blanco en ruido "marrón" (más suave)
    lastOut = (lastOut + 0.02 * white) / 1.02;
    noiseData[i] = lastOut * 3.5;
  }
  const noiseSource = ctx.createBufferSource();
  noiseSource.buffer = noiseBuffer;
  noiseSource.loop = true;

  const noiseFilter = ctx.createBiquadFilter();
  noiseFilter.type = 'lowpass';
  noiseFilter.frequency.value = 500;

  const noiseGain = ctx.createGain();
  noiseGain.gain.value = 0.35;

  // El "aire" sube y baja de volumen muy lentamente, como olas
  const swellLfo = ctx.createOscillator();
  swellLfo.frequency.value = 0.04;
  const swellGain = ctx.createGain();
  swellGain.gain.value = 0.15;
  swellLfo.connect(swellGain);
  swellGain.connect(noiseGain.gain);
  swellLfo.start();

  noiseSource.connect(noiseFilter);
  noiseFilter.connect(noiseGain);
  noiseGain.connect(master);
  noiseSource.start();

  return { master, oscillators, noiseSource, swellLfo, lfoRefs: oscillators };
}

function startAmbientSound() {
  if (!audioCtx) {
    audioCtx = new (window.AudioContext || window.webkitAudioContext)();
  }
  if (audioCtx.state === 'suspended') {
    audioCtx.resume();
  }
  if (!ambientNodes) {
    ambientNodes = buildAmbientSound();
  }
  const now = audioCtx.currentTime;
  ambientNodes.master.gain.cancelScheduledValues(now);
  ambientNodes.master.gain.setValueAtTime(ambientNodes.master.gain.value, now);
  ambientNodes.master.gain.linearRampToValueAtTime(0.6, now + 2.5);
  ambientPlaying = true;
}

function stopAmbientSound() {
  if (!ambientNodes || !audioCtx) return;
  const now = audioCtx.currentTime;
  ambientNodes.master.gain.cancelScheduledValues(now);
  ambientNodes.master.gain.setValueAtTime(ambientNodes.master.gain.value, now);
  ambientNodes.master.gain.linearRampToValueAtTime(0, now + 1.5);
  ambientPlaying = false;
}

const ambientToggleBtn = document.getElementById('ambient-toggle');
ambientToggleBtn.addEventListener('click', () => {
  if (ambientPlaying) {
    stopAmbientSound();
    ambientToggleBtn.classList.remove('playing');
    ambientToggleBtn.setAttribute('aria-pressed', 'false');
    ambientToggleBtn.textContent = '🎧 Sonido ambiente';
  } else {
    startAmbientSound();
    ambientToggleBtn.classList.add('playing');
    ambientToggleBtn.setAttribute('aria-pressed', 'true');
    ambientToggleBtn.textContent = '🔊 Sonido ambiente';
  }
});

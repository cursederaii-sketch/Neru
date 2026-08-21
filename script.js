// Datos extraídos de tu texto, geolocalizados
const placesData = [
  {
    id: "espana",
    lat: 41.3851, 
    lng: 2.1734, // Barcelona
    type: "danger",
    title: "España",
    subtitle: "El caso Bojan Krkic",
    desc: "Con apenas 17 años, las presiones y expectativas desencadenaron ataques de pánico en el vestuario antes de debutar. El estigma hizo que el club lo justificara como una gastroenteritis.",
    color: "#e04f35" // --danger-glow
  },
  {
    id: "canada",
    lat: 43.6532, 
    lng: -79.3832, // Toronto
    type: "danger",
    title: "Canadá",
    subtitle: "Estudio U. de Toronto",
    desc: "Un estudio sobre el equipo canadiense rumbo a Tokio 2020 encontró que el 41% cumplía criterios de depresión o ansiedad, operando por debajo del radar clínico.",
    color: "#e04f35"
  },
  {
    id: "taiwan",
    lat: 23.6978, 
    lng: 120.9605, // Taiwán
    type: "turf",
    title: "Taiwán",
    subtitle: "Estudio JAMA Pediatrics",
    desc: "Una investigación con casi dos millones de chicos demostró que el ejercicio físico regular actúa como factor de protección frente a la ansiedad, la depresión y el TDAH.",
    color: "#349662" // --turf-glow
  },
  {
    id: "colombia",
    lat: 6.2442, 
    lng: -75.5812, // Medellín
    type: "turf",
    title: "Colombia",
    subtitle: "Origen de la tarjeta verde",
    desc: "Mucho antes que en Europa, la tarjeta verde nació en un potrero de Medellín impulsada por Roosevelt Castro para premiar el juego limpio y el buen comportamiento en la cancha.",
    color: "#349662"
  }
];

// Arcos para conectar los puntos (representando flujos globales)
const arcsData = [
  { startLat: 41.3851, startLng: 2.1734, endLat: 43.6532, endLng: -79.3832, color: ['#e04f35', '#e04f35'] },
  { startLat: 43.6532, startLng: -79.3832, endLat: 6.2442, endLng: -75.5812, color: ['#e04f35', '#349662'] },
  { startLat: 6.2442, startLng: -75.5812, endLat: 23.6978, endLng: 120.9605, color: ['#349662', '#349662'] },
  { startLat: 23.6978, startLng: 120.9605, endLat: 41.3851, endLng: 2.1734, color: ['#349662', '#e04f35'] }
];

// Inicialización del Globo
const elem = document.getElementById('globe-container');
const world = Globe()
  (elem)
  .globeImageUrl('https://unpkg.com/three-globe/example/img/earth-dark.jpg') // Textura oscura
  .backgroundColor('#0D1512') // Coincide con --night
  .pointOfView({ lat: 20, lng: -40, altitude: 2 }) // Vista inicial

  // Configuración de los puntos brillantes
  .labelsData(placesData)
  .labelLat(d => d.lat)
  .labelLng(d => d.lng)
  .labelText(d => d.title)
  .labelSize(1.5)
  .labelDotRadius(0.8)
  .labelColor(d => d.color)
  .labelResolution(2)
  .onLabelClick(d => showInfo(d))
  
  // Configuración de los arcos
  .arcsData(arcsData)
  .arcColor('color')
  .arcDashLength(0.4)
  .arcDashGap(0.2)
  .arcDashAnimateTime(2000)
  .arcStroke(0.5);

// Hacer que el mundo gire lentamente
world.controls().autoRotate = true;
world.controls().autoRotateSpeed = 0.5;

// Lógica de la interfaz
const infoCard = document.getElementById('info-card');
const closeBtn = document.getElementById('close-card');

function showInfo(data) {
  // Pausar rotación al clickear
  world.controls().autoRotate = false;
  
  // Rellenar datos
  document.getElementById('card-tag').textContent = data.type === 'danger' ? 'Área de Riesgo' : 'Área Protegida';
  document.getElementById('card-tag').className = `tag ${data.type}`;
  document.getElementById('card-title').textContent = data.title;
  document.getElementById('card-subtitle').textContent = data.subtitle;
  document.getElementById('card-desc').textContent = data.desc;
  
  // Mostrar tarjeta
  infoCard.classList.remove('hidden');
  
  // Centrar cámara en el punto clickeado
  world.pointOfView({ lat: data.lat, lng: data.lng, altitude: 1.5 }, 1000);
}

closeBtn.addEventListener('click', () => {
  infoCard.classList.add('hidden');
  world.controls().autoRotate = true;
});

// Función de Pantalla Completa
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

// Ajustar tamaño del globo al redimensionar la ventana
window.addEventListener('resize', () => {
  world.width(window.innerWidth);
  world.height(window.innerHeight);
});
// --- INTERACTIVIDAD DEL PANEL DE CONTROLES (TWEAKS) ---

// 1. Control de Velocidad de Rotación
const speedSlider = document.getElementById('speed-slider');
speedSlider.addEventListener('input', (e) => {
  world.controls().autoRotateSpeed = parseFloat(e.target.value);
  // Si la velocidad es mayor a 0, asegurarnos de que la rotación esté activa
  world.controls().autoRotate = parseFloat(e.target.value) > 0;
});

// 2. Control para Mostrar/Ocultar Arcos de Conexión
const arcToggle = document.getElementById('arc-toggle');
arcToggle.addEventListener('change', (e) => {
  if (e.target.checked) {
    world.arcsData(arcsData); // Restaura los datos
  } else {
    world.arcsData([]); // Vacía los arcos para ocultarlos
  }
});

// 3. Control de Atmósfera y Brillo
const atmosphereToggle = document.getElementById('atmosphere-toggle');
atmosphereToggle.addEventListener('change', (e) => {
  world.showAtmosphere(e.target.checked);
});
import { Game, Category } from '../types';

// Import generated images
import imgCyberOverdrive from '../assets/images/game_cyber_overdrive_1790728585242.jpg';
import imgFnfFunk from '../assets/images/game_fnf_neon_funk_1790728594365.jpg';
import imgShadowStrike from '../assets/images/game_shadow_strike_1790728603500.jpg';
import imgAndroidMech from '../assets/images/game_android_mech_1790728612914.jpg';
import imgNeonDrift from '../assets/images/game_neon_drift_1790728660816.jpg';
import imgCyberHorror from '../assets/images/game_cyber_horror_1790728670217.jpg';
import imgCyberShooter from '../assets/images/game_cyber_shooter_1790728679010.jpg';

export const GAMES_DATA: Game[] = [
  {
    id: 'cyber-overdrive-2077',
    title: 'Cyber Overdrive: Neo Night City',
    slug: 'cyber-overdrive-neo-night-city',
    platform: 'PC',
    category: 'Mundo Abierto',
    image: imgCyberOverdrive,
    rating: 4.9,
    votesCount: 28450,
    downloadsCount: 512400,
    likesCount: 38450,
    fileSize: '48.5 GB',
    version: 'v2.2.0 Complete Edition',
    developer: 'Neon Syndicate Games',
    releaseYear: '2026',
    shortDescription: 'Explora una megalópolis futurista dominada por corporaciones con gráficos trazado de rayos y vehículos cibernéticos.',
    description: 'Cyber Overdrive es la experiencia definitiva de rol de acción en primera y tercera persona. Sumérgete en las calles iluminadas por neones de Neo-Shinjuku, personaliza implantes cibernéticos, pilota superdeportivos con velocidad hipersónica y enfréntate a bandas criminales en combates viscerales. Incluye todos los DLCs de expansión y doblaje latino neutro.',
    features: [
      'Gráficos Unreal Engine 5 con Ray Tracing activado',
      'Incluye todas las expansiones y packs de autos neón',
      'Voces y textos 100% en Español',
      'Sin DRM - Instalación limpia en 1 clic',
      'Optimizado para 60 y 120 FPS'
    ],
    pcRequirements: {
      os: 'Windows 10 / 11 (64-bit)',
      processor: 'Intel Core i5-10400 / AMD Ryzen 5 3600',
      ram: '16 GB RAM DDR4',
      graphics: 'NVIDIA GeForce RTX 2060 / AMD Radeon RX 5700 (6GB VRAM)',
      storage: '55 GB SSD disponible'
    },
    downloadLinks: [
      { server: 'MediaFire', url: '#download-mediafire', speed: 'Ultra Rápida', size: '48.5 GB', isRecommended: true },
      { server: 'Mega.nz', url: '#download-mega', speed: 'Alta', size: '48.5 GB' },
      { server: 'Google Drive', url: '#download-gdrive', speed: 'Ultra Rápida', size: '48.5 GB' },
      { server: 'Torrent', url: '#download-torrent', speed: 'Ilimitada', size: '48.5 GB' }
    ],
    installSteps: [
      'Descarga todas las partes desde tu servidor preferido.',
      'Descomprime el archivo principal con WinRAR o 7-Zip.',
      'Ejecuta el archivo "Setup.exe" como Administrador.',
      'Selecciona la carpeta de destino e inicia la instalación.',
      '¡Listo! El juego ya viene pre-activado con todos los DLCs.'
    ],
    isFeatured: true,
    isTrending: true,
    neonColor: 'cyan'
  },
  {
    id: 'fnf-neon-funk-deluxe',
    title: 'Friday Night Funkin: Neon Beat Edition',
    slug: 'friday-night-funkin-neon-beat-edition',
    platform: 'Ambos',
    category: 'Música / FNF',
    image: imgFnfFunk,
    rating: 4.95,
    votesCount: 42100,
    downloadsCount: 890300,
    likesCount: 65200,
    fileSize: '1.4 GB (PC) / 450 MB (APK)',
    version: 'v4.5 Mega Modpack',
    developer: 'Funkin Crew & PortalxD Team',
    releaseYear: '2026',
    shortDescription: 'El modpack definitivo de FNF con más de 120 canciones remasterizadas con pistas de audio neón y soporte completo para Android.',
    description: 'La versión definitiva de ritmo musical inspirada en el legendario chico de gorra roja. Incluye más de 30 semanas completas, remixes synthwave exclusivos, efectos de flechas neón dinámicas, soporte para mandos y touch screen de baja latencia para celulares Android.',
    features: [
      'Más de 120 canciones y 30 semanas completas',
      'Versión compatible con PC (Windows) y Android APK',
      'Menú con temas neón personalizables y calibración de audio',
      'Modo multijugador online 1v1 integrado',
      '60 / 120 FPS sin lag en celulares gama media y baja'
    ],
    pcRequirements: {
      os: 'Windows 7 / 8 / 10 / 11',
      processor: 'Cualquier Dual Core a 2.0 GHz',
      ram: '4 GB RAM',
      graphics: 'Intel HD Graphics 4000 o superior',
      storage: '2 GB disponibles'
    },
    androidRequirements: {
      androidVersion: 'Android 6.0 o superior',
      ram: '2 GB RAM mínimo',
      storage: '800 MB libres',
      rootRequired: false
    },
    downloadLinks: [
      { server: 'APK Direct', url: '#download-apk', speed: 'Ultra Rápida', size: '450 MB (Android)', isRecommended: true },
      { server: 'MediaFire', url: '#download-mediafire-pc', speed: 'Ultra Rápida', size: '1.4 GB (PC Windows)', isRecommended: true },
      { server: 'Mega.nz', url: '#download-mega-fnf', speed: 'Alta', size: '1.4 GB' },
      { server: 'Google Drive', url: '#download-gdrive-fnf', speed: 'Ultra Rápida', size: '1.4 GB' }
    ],
    installSteps: [
      'Para PC: Descomprime el archivo ZIP y ejecuta "Funkin.exe".',
      'Para Android: Descarga el archivo APK, habilita "Instalar fuentes desconocidas" en ajustes y toca Instalar.',
      'Disfruta de las canciones sin necesidad de emulador ni configuraciones extra.'
    ],
    isFeatured: true,
    isTrending: true,
    neonColor: 'blue'
  },
  {
    id: 'shadow-strike-neo-tokyo',
    title: 'Shadow Strike: Cyber Katana',
    slug: 'shadow-strike-cyber-katana',
    platform: 'PC',
    category: 'Acción',
    image: imgShadowStrike,
    rating: 4.8,
    votesCount: 15400,
    downloadsCount: 340200,
    likesCount: 24100,
    fileSize: '18.2 GB',
    version: 'v1.3.4 Ultimate Cut',
    developer: 'Kuroshio Interactive',
    releaseYear: '2026',
    shortDescription: 'Combate frenético de hack & slash ninja en rascacielos lluviosos con espadas de plasma y habilidades de ralentización temporal.',
    description: 'Enfréntate a legiones de mercenarios cibernéticos y mechas titánicos armados con una katana de energía modulable. Cada corte produce destellos de neón y desmembramientos hiper-estilizados en 120 FPS. Incluye modo Nueva Partida+ y banda sonora synthwave completa.',
    features: [
      'Sistema de desvíos (parry) milimétrico al estilo Sekiro',
      'Gráficos ultrarrealistas con físicas de fluidos y lluvia neón',
      'Soporte completo para mandos Xbox, PlayStation y teclado',
      'Repack ultra comprimido sin pérdida de audio ni texturas'
    ],
    pcRequirements: {
      os: 'Windows 10 / 11 (64-bit)',
      processor: 'Intel Core i5-8400 / AMD Ryzen 5 2600',
      ram: '12 GB RAM',
      graphics: 'GTX 1660 Super / RX 5600 XT',
      storage: '22 GB SSD'
    },
    downloadLinks: [
      { server: 'MediaFire', url: '#download-mediafire-ss', speed: 'Ultra Rápida', size: '18.2 GB', isRecommended: true },
      { server: 'Mega.nz', url: '#download-mega-ss', speed: 'Alta', size: '18.2 GB' },
      { server: 'Torrent', url: '#download-torrent-ss', speed: 'Ilimitada', size: '18.2 GB' }
    ],
    installSteps: [
      'Descomprime el archivo ISO o carpeta de instalación.',
      'Monta la imagen y ejecuta el instalador automatizado.',
      'Aplica el parche de traducción si no se autodetecta.',
      'Inicia el juego desde el acceso directo del escritorio.'
    ],
    isFeatured: false,
    isTrending: true,
    neonColor: 'cyan'
  },
  {
    id: 'mech-arena-prime-mobile',
    title: 'Mech Arena Prime: Sci-Fi War',
    slug: 'mech-arena-prime-scifi-war',
    platform: 'Android',
    category: 'Shooters',
    image: imgAndroidMech,
    rating: 4.75,
    votesCount: 63200,
    downloadsCount: 1250000,
    likesCount: 78900,
    fileSize: '890 MB (APK + OBB)',
    version: 'v3.8.1 MOD Dinero Infinito',
    developer: 'Plarium Mobile Lab',
    releaseYear: '2026',
    shortDescription: 'Combates 5v5 de robots gigantes con cañones de plasma y escudos de energía. Versión APK MOD con todo desbloqueado.',
    description: 'Comanda mechas hiper-pesados en arenas futuristas con gráficos de consola en tu celular. Esta edición especial exclusiva de PortalxD viene con recursos ilimitados, todas las armas láser desbloqueadas y compatibilidad con procesadores Snapdragon, Mediatek y Exynos.',
    features: [
      'Versión MOD con Créditos y A-Coins infinitos para mejoras',
      'Partidas rápidas 5v5 y combate a muerte por equipos',
      'Controles táctiles intuitivos o compatibilidad con gamepad Bluetooth',
      'Instalador directo APK con datos OBB integrados (Zero Error)'
    ],
    androidRequirements: {
      androidVersion: 'Android 7.0 o posterior',
      ram: '3 GB RAM recomendados',
      storage: '1.5 GB de espacio libre',
      rootRequired: false
    },
    downloadLinks: [
      { server: 'APK Direct', url: '#download-apk-mech', speed: 'Ultra Rápida', size: '890 MB', isRecommended: true },
      { server: 'MediaFire', url: '#download-mediafire-mech', speed: 'Ultra Rápida', size: '890 MB' },
      { server: 'Google Drive', url: '#download-gdrive-mech', speed: 'Alta', size: '890 MB' }
    ],
    installSteps: [
      'Descarga el archivo APK + OBB desde PortalxD.',
      'Si viene en formato XAPK o ZIP, usa ZArchiver para descomprimir.',
      'Copia la carpeta "com.plarium.mecharena" a Android/obb.',
      'Instala el APK y abre el juego con conexión a internet.'
    ],
    isFeatured: true,
    isTrending: true,
    neonColor: 'green'
  },
  {
    id: 'neon-velocity-drift-racer',
    title: 'Neon Velocity: Midnight Drift',
    slug: 'neon-velocity-midnight-drift',
    platform: 'Ambos',
    category: 'Carreras',
    image: imgNeonDrift,
    rating: 4.88,
    votesCount: 31200,
    downloadsCount: 678000,
    likesCount: 42300,
    fileSize: '12.4 GB (PC) / 1.8 GB (Android)',
    version: 'v1.6.0 Turbo Neon',
    developer: 'Apex Horizon Studios',
    releaseYear: '2026',
    shortDescription: 'Carreras arcade ilegales con luces de neón en los bajos, personalización extrema de carrocería y derrapes a 300 km/h.',
    description: 'Inspirado en los mejores clásicos como Need for Speed Underground pero reimaginado con estética retrofuturista. Más de 60 bólidos modificables con kits de ensanche, alerones de carbono y luces de neón RGB programables. Disponible tanto para PC con soporte para volantes como para teléfonos Android.',
    features: [
      '60 coches deportivos licenciados con tuning ilimitado',
      'Física de derrapes arcade pura y ultra satisfactoria',
      'Banda sonora electrónica y synthwave con más de 80 canciones',
      'Modo historia con jefes de distrito y carreras de aceleración'
    ],
    pcRequirements: {
      os: 'Windows 10 / 11 64-bit',
      processor: 'Intel Core i5-6600K / AMD Ryzen 3 1200',
      ram: '8 GB RAM',
      graphics: 'GTX 1060 6GB / RX 580',
      storage: '15 GB libres'
    },
    androidRequirements: {
      androidVersion: 'Android 8.0+',
      ram: '4 GB RAM',
      storage: '2.5 GB libres',
      rootRequired: false
    },
    downloadLinks: [
      { server: 'MediaFire', url: '#download-nv-mediafire', speed: 'Ultra Rápida', size: '12.4 GB (PC)', isRecommended: true },
      { server: 'APK Direct', url: '#download-nv-apk', speed: 'Ultra Rápida', size: '1.8 GB (Android)', isRecommended: true },
      { server: 'Mega.nz', url: '#download-nv-mega', speed: 'Alta', size: '12.4 GB' },
      { server: 'Torrent', url: '#download-nv-torrent', speed: 'Ilimitada', size: '12.4 GB' }
    ],
    installSteps: [
      'PC: Extrae el archivo comprimido y ejecuta Setup_NeonVelocity.exe.',
      'Android: Instala el APK y coloca el archivo OBB en la carpeta correspondiente.',
      'Inicia y ajusta la calidad gráfica a tus preferencias.'
    ],
    isFeatured: true,
    isTrending: false,
    neonColor: 'green'
  },
  {
    id: 'cyber-abyss-biohazard',
    title: 'BioHazard: Cyber Abyss',
    slug: 'biohazard-cyber-abyss',
    platform: 'PC',
    category: 'Terror',
    image: imgCyberHorror,
    rating: 4.82,
    votesCount: 19800,
    downloadsCount: 420100,
    likesCount: 21800,
    fileSize: '24.6 GB',
    version: 'v1.2.1 Deluxe Edition',
    developer: 'Sinister Voltage Games',
    releaseYear: '2026',
    shortDescription: 'Terror psicológico de supervivencia en un complejo biotecnológico abandonado bajo luces de emergencia de neón carmesí.',
    description: 'Sobrevive a monstruosidades mecánicas y aberraciones biológicas con recursos limitados. Usa tu escáner electromagnético para resolver puzles ambientales y defenderte con armas modificadas. Iluminación volumétrica inmersiva y sonido 3D binaural aterrador.',
    features: [
      'Atmósfera opresiva con sonido espacial 3D surround',
      'Gestión de inventario táctico y munición escasa',
      'Historia ramificada con 4 finales alternativos',
      'Voces en español con subtítulos completos'
    ],
    pcRequirements: {
      os: 'Windows 10 (64-bit)',
      processor: 'Intel Core i7-8700 / AMD Ryzen 5 3600X',
      ram: '16 GB RAM',
      graphics: 'RTX 2070 / RX 6600 XT',
      storage: '28 GB SSD'
    },
    downloadLinks: [
      { server: 'MediaFire', url: '#download-bio-mf', speed: 'Ultra Rápida', size: '24.6 GB', isRecommended: true },
      { server: 'Mega.nz', url: '#download-bio-mega', speed: 'Alta', size: '24.6 GB' },
      { server: 'Google Drive', url: '#download-bio-gdrive', speed: 'Ultra Rápida', size: '24.6 GB' }
    ],
    installSteps: [
      'Descarga todas las partes numeradas del juego.',
      'Haz clic derecho en la Parte 1 y selecciona "Extraer aquí".',
      'Ejecuta el archivo instalador y espera que finalice.',
      'Inicia el juego desde el acceso directo generado.'
    ],
    isFeatured: false,
    isTrending: false,
    neonColor: 'pink'
  },
  {
    id: 'neon-vanguard-protocol',
    title: 'Neon Vanguard: Tactical Protocol',
    slug: 'neon-vanguard-tactical-protocol',
    platform: 'PC',
    category: 'Shooters',
    image: imgCyberShooter,
    rating: 4.91,
    votesCount: 38700,
    downloadsCount: 789400,
    likesCount: 51600,
    fileSize: '32.1 GB',
    version: 'v2.0.4 Online Ready',
    developer: 'Vanguard Cyber Studios',
    releaseYear: '2026',
    shortDescription: 'Shooter táctico en primera persona en escenarios de guerra cibernética con armas de energía y drones de asalto.',
    description: 'Equípate con exoesqueletos militares que aumentan tu velocidad, salto y estabilidad de disparo. Disputa combates de alta precisión en mapas nocturnos iluminados por láseres y balizas de neón. Servidores dedicados para jugar con amigos sin lag.',
    features: [
      'Modo campaña para un jugador con historia cinemática',
      'Fijador de servidores comunitarios sin bloqueo de región',
      'Físicas de balística balizada con trazas láser de colores',
      'Sin programas anti-cheat invasivos ni ralentización de CPU'
    ],
    pcRequirements: {
      os: 'Windows 10 / 11 64-bit',
      processor: 'Intel Core i5-11400F / Ryzen 5 5600',
      ram: '16 GB RAM DDR4',
      graphics: 'GTX 1660 Ti / RTX 3050 (6GB)',
      storage: '35 GB SSD'
    },
    downloadLinks: [
      { server: 'MediaFire', url: '#download-nvp-mf', speed: 'Ultra Rápida', size: '32.1 GB', isRecommended: true },
      { server: 'Mega.nz', url: '#download-nvp-mega', speed: 'Alta', size: '32.1 GB' },
      { server: 'Torrent', url: '#download-nvp-torrent', speed: 'Ilimitada', size: '32.1 GB', isRecommended: true }
    ],
    installSteps: [
      'Descomprime el juego con 7-Zip.',
      'Ejecuta VanguardInstaller.exe como Administrador.',
      'Sigue las instrucciones en pantalla e instala DirectX si se solicita.',
      '¡Listo para jugar la campaña o multijugador LAN/Online!'
    ],
    isFeatured: true,
    isTrending: true,
    neonColor: 'pink'
  },
  {
    id: 'gta-san-andreas-neon-edition',
    title: 'GTA: San Andreas Definitive Neon Mod',
    slug: 'gta-san-andreas-definitive-neon-mod',
    platform: 'Android',
    category: 'Mundo Abierto',
    image: imgCyberOverdrive,
    rating: 4.96,
    votesCount: 88400,
    downloadsCount: 2150000,
    likesCount: 112000,
    fileSize: '2.1 GB (APK + Datos OBB)',
    version: 'v2.10 Remasterizado en Español',
    developer: 'Rockstar Games / Modders PortalxD',
    releaseYear: '2026',
    shortDescription: 'El legendario San Andreas con texturas 4K, luces de neón en Los Santos, cleo mods y menú de trucos táctil en español.',
    description: 'La versión más aclamada para celulares Android de Grand Theft Auto: San Andreas. Incluye gráficos mejorados con reflejos en tiempo real, coches reales con luces de neón personalizadas, radio completa en alta fidelidad y selector de trucos sin necesidad de root.',
    features: [
      'Menú Cleo en Español con trucos de armas, dinero y autos',
      'Texturas HD de carreteras, vegetación y edificios',
      'Compatible con Android 11, 12, 13, 14 y 15',
      'Audio y voces originales con subtítulos mejorados'
    ],
    androidRequirements: {
      androidVersion: 'Android 7.0 o superior',
      ram: '3 GB RAM',
      storage: '3 GB libres',
      rootRequired: false
    },
    downloadLinks: [
      { server: 'APK Direct', url: '#download-gta-apk', speed: 'Ultra Rápida', size: '2.1 GB', isRecommended: true },
      { server: 'MediaFire', url: '#download-gta-mf', speed: 'Ultra Rápida', size: '2.1 GB' },
      { server: 'Google Drive', url: '#download-gta-drive', speed: 'Alta', size: '2.1 GB' }
    ],
    installSteps: [
      'Descarga el archivo ZIP que contiene el APK y los datos OBB.',
      'Usa ZArchiver para descomprimir el archivo.',
      'Mueve la carpeta "com.rockstargames.gtasa" a Android/obb.',
      'Instala el APK y pulsa Offline para comenzar la partida.'
    ],
    isFeatured: false,
    isTrending: true,
    neonColor: 'blue'
  },
  {
    id: 'geometry-dash-neon-deluxe',
    title: 'Geometry Dash Neon: All Icons Unlocked',
    slug: 'geometry-dash-neon-deluxe',
    platform: 'Android',
    category: 'Música / FNF',
    image: imgFnfFunk,
    rating: 4.89,
    votesCount: 54100,
    downloadsCount: 1670000,
    likesCount: 68400,
    fileSize: '120 MB',
    version: 'v2.2.142 Full Unlocked',
    developer: 'RobTop Games',
    releaseYear: '2026',
    shortDescription: 'Versión completa de la actualización 2.2 con todos los iconos neón, colores secretos y niveles de la comunidad desbloqueados.',
    description: 'Salta, vuela y ábrete camino a través del peligro en este frenético juego de plataformas de ritmo. Esta versión exclusiva incluye todas las estrellas, orbes y llaves para personalizar tu nave y personaje con efectos de neón.',
    features: [
      'Todos los iconos, naves, ondas y robots desbloqueados',
      'Acceso a todos los niveles oficiales y millones de niveles online',
      'Editor de niveles con música personalizada habilitado',
      'Modo práctica con puntos de guardado ilimitados'
    ],
    androidRequirements: {
      androidVersion: 'Android 5.0+',
      ram: '1.5 GB RAM',
      storage: '200 MB',
      rootRequired: false
    },
    downloadLinks: [
      { server: 'APK Direct', url: '#download-gd-apk', speed: 'Ultra Rápida', size: '120 MB', isRecommended: true },
      { server: 'MediaFire', url: '#download-gd-mf', speed: 'Ultra Rápida', size: '120 MB' }
    ],
    installSteps: [
      'Descarga el archivo APK directamente a tu celular.',
      'Ábrelo y confirma la instalación.',
      '¡Listo para saltar con la mejor música de fondo!'
    ],
    isFeatured: false,
    isTrending: false,
    neonColor: 'green'
  }
];

import { PROGRAMS_DATA } from './programs';

export const ALL_ITEMS_DATA: Game[] = [...GAMES_DATA, ...PROGRAMS_DATA];

export const CATEGORIES: Category[] = [
  'Todos',
  'Sistemas Operativos (Win 10/11)',
  'Antivirus & Seguridad',
  'Librerías Gamer',
  'Utilidades & Sistema',
  'Edición & Diseño',
  'Acción',
  'Mundo Abierto',
  'Música / FNF',
  'Shooters',
  'Carreras',
  'Terror'
];

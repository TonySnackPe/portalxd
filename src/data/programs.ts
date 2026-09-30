import { Game } from '../types';

export const PROGRAMS_DATA: Game[] = [
  {
    id: 'prog-win11-pro',
    title: 'Windows 11 Pro 24H2 / 23H2 Gamer Edition (ISO Oficial)',
    slug: 'windows-11-pro-gamer-edition-iso',
    platform: 'Programas PC',
    category: 'Sistemas Operativos (Win 10/11)',
    image: 'https://images.unsplash.com/photo-1629654297299-c8506221ca97?w=600&auto=format&fit=crop&q=80',
    banner: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=1200&auto=format&fit=crop&q=80',
    rating: 4.9,
    votesCount: 3840,
    downloadsCount: 185000,
    likesCount: 5240,
    fileSize: '4.85 GB',
    version: '24H2 Build 26100 Final',
    developer: 'Microsoft Corporation / Optimizada por PortalxD',
    releaseYear: '2024 - 2026',
    itemType: 'programa',
    architecture: '64 Bits',
    license: 'Pre-activado',
    shortDescription: 'ISO oficial de Windows 11 Pro optimizada para gaming: sin bloatware, con baja latencia y bypass de requisitos TPM/RAM.',
    description: 'Windows 11 Pro Gamer Edition es la versión definitiva para gamers y creadores de contenido. Incluye la última actualización con soporte para DirectStorage, Auto HDR, mejoras de programación de núcleos de CPU para procesadores Intel híbridos y AMD Ryzen. Se eliminaron aplicaciones basura de fábrica (telemetría pesada, Cortana, juegos preinstalados) reduciendo el consumo de memoria RAM y latencia en juegos competitivos.',
    features: [
      'Bypass automático de requisitos TPM 2.0 y SecureBoot para PCs de cualquier generación',
      'Pre-activado con licencia digital permanente vinculada a la placa madre',
      'Optimización de latencia en juegos (Timer resolution a 0.5ms)',
      'DirectX 12 Ultimate y DirectStorage listos para cargar juegos al instante',
      'Idioma Español nativo (Latinoamérica y España) + Multiidioma',
      'Instalador limpio compatible con Rufus y Ventoy'
    ],
    pcRequirements: {
      os: 'Cualquier PC o Laptop compatible con arquitectura x64',
      processor: 'Intel Core 2 Duo / AMD Athlon 64 o superior (1 GHz+)',
      ram: '2 GB mínimo (4 GB o más recomendado para juegos)',
      graphics: 'Tarjeta gráfica compatible con DirectX 9 con controlador WDDM',
      storage: '25 GB de espacio libre en disco SSD o HDD'
    },
    downloadLinks: [
      {
        server: 'MediaFire',
        url: 'https://mediafire.com/file/portalxd_win11_pro_gamer_iso.rar',
        speed: 'Ultra Rápida',
        size: '4.85 GB',
        isRecommended: true
      },
      {
        server: 'Mega.nz',
        url: 'https://mega.nz/file/portalxd_win11_pro_24h2',
        speed: 'Alta',
        size: '4.85 GB'
      },
      {
        server: 'Google Drive',
        url: 'https://drive.google.com/file/d/portalxd_win11_pro_iso',
        speed: 'Ultra Rápida',
        size: '4.85 GB'
      },
      {
        server: 'Torrent',
        url: 'magnet:?xt=urn:btih:portalxdwin11proiso2026',
        speed: 'Ilimitada',
        size: '4.85 GB'
      }
    ],
    installSteps: [
      'Descarga la imagen ISO de Windows 11 Pro desde cualquiera de los servidores rápidos.',
      'Descomprime el archivo RAR usando la contraseña oficial: PortalxD.com',
      'Descarga el programa gratuito Rufus desde la sección de programas.',
      'Conecta una memoria USB de al menos 8 GB y selecciónala en Rufus.',
      'Elige la ISO descargada y haz clic en "Empezar" para crear tu USB booteable.',
      'Reinicia tu computadora, entra al menú de arranque (F12, F11 o F9 según tu placa) e instala Windows en pocos minutos.'
    ],
    isFeatured: true,
    isTrending: true,
    isNew: true,
    neonColor: 'cyan'
  },
  {
    id: 'prog-win10-pro',
    title: 'Windows 10 Pro 22H2 SuperLite Gamer (Bajos Recursos)',
    slug: 'windows-10-pro-superlite-gamer-iso',
    platform: 'Programas PC',
    category: 'Sistemas Operativos (Win 10/11)',
    image: 'https://images.unsplash.com/photo-1544652478-6653e09f18a2?w=600&auto=format&fit=crop&q=80',
    banner: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=1200&auto=format&fit=crop&q=80',
    rating: 4.95,
    votesCount: 4210,
    downloadsCount: 240000,
    likesCount: 6890,
    fileSize: '3.10 GB',
    version: '22H2 Build 19045 Final',
    developer: 'Microsoft Corporation / PortalxD Tweaks',
    releaseYear: '2024 - 2026',
    itemType: 'programa',
    architecture: 'Ambos',
    license: 'Pre-activado',
    shortDescription: 'La versión más ligera y rápida de Windows 10 para computadoras gamer y laptops lentas. Solo 800 MB de RAM en reposo.',
    description: 'Windows 10 Pro SuperLite es el sistema operativo favorito de los jugadores competitivos de Valorant, Fortnite, GTA V, CS:GO y emuladores. Elimina servicios innecesarios en segundo plano, maximizando los FPS y eliminando tirones de lag en PCs con 2GB o 4GB de memoria RAM.',
    features: [
      'Consumo mínimo de memoria RAM (menos de 900 MB al iniciar el sistema)',
      'Máximo rendimiento en FPS para tarjetas gráficas de gama baja y media',
      'Modo de energía "Máximo Rendimiento" preconfigurado de fábrica',
      'Incluye menú clásico y buscador rápido sin publicidad',
      'Pre-activación digital permanente de por vida',
      'Compatibilidad total con tiendas de juegos (Steam, Epic Games, Riot Client)'
    ],
    pcRequirements: {
      os: 'Cualquier PC de escritorio o Laptop',
      processor: '1 GHz o más rápido (Intel o AMD)',
      ram: '1 GB mínimo (2 GB o 4 GB recomendado)',
      graphics: 'Cualquier tarjeta gráfica integrada o dedicada',
      storage: '15 GB de espacio libre'
    },
    downloadLinks: [
      {
        server: 'MediaFire',
        url: 'https://mediafire.com/file/portalxd_win10_pro_superlite.rar',
        speed: 'Ultra Rápida',
        size: '3.10 GB',
        isRecommended: true
      },
      {
        server: 'Google Drive',
        url: 'https://drive.google.com/file/d/portalxd_win10_superlite',
        speed: 'Ultra Rápida',
        size: '3.10 GB'
      },
      {
        server: 'Mega.nz',
        url: 'https://mega.nz/file/portalxd_win10_lite',
        speed: 'Alta',
        size: '3.10 GB'
      }
    ],
    installSteps: [
      'Descarga la ISO de Windows 10 SuperLite desde los enlaces directos.',
      'Contraseña de extracción: PortalxD.com',
      'Graba la imagen en una memoria USB con Rufus.',
      'Arranca tu PC desde la USB e instala en tu disco duro o SSD.',
      'Al finalizar la instalación ya estará activado y listo con los drivers básicos.'
    ],
    isFeatured: true,
    isTrending: true,
    neonColor: 'blue'
  },
  {
    id: 'prog-malwarebytes',
    title: 'Malwarebytes Premium 5.1 Full Español + Anti-Exploit',
    slug: 'malwarebytes-premium-full-espanol',
    platform: 'Programas PC',
    category: 'Antivirus & Seguridad',
    image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?w=600&auto=format&fit=crop&q=80',
    banner: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=1200&auto=format&fit=crop&q=80',
    rating: 4.85,
    votesCount: 2950,
    downloadsCount: 162000,
    likesCount: 4320,
    fileSize: '298 MB',
    version: '5.1.4.112 Full Repack',
    developer: 'Malwarebytes Inc.',
    releaseYear: '2025 - 2026',
    itemType: 'programa',
    architecture: 'Ambos',
    license: 'Full Activado',
    shortDescription: 'La mejor herramienta de seguridad contra virus, troyanos, ransomware y mineros ocultos de criptomonedas en PC.',
    description: 'Malwarebytes Premium es el complemento de seguridad perfecto para usuarios que descargan juegos, mods, emuladores y parches en PC. Su motor heurístico detecta amenazas avanzadas de día cero, scripts maliciosos en navegadores y troyanos que los antivirus convencionales pasan por alto.',
    features: [
      'Protección en tiempo real contra Ransomware y secuestro de archivos',
      'Módulo Anti-Exploit para navegación web segura y descargas protegidas',
      'Limpieza profunda de publicidad engañosa (Adware y Spyware)',
      'No consume recursos mientras juegas en pantalla completa',
      'Instalador Full en Español pre-activado con licencia de por vida'
    ],
    pcRequirements: {
      os: 'Windows 11, Windows 10, Windows 8.1, Windows 7 SP1 (32 o 64 bits)',
      processor: '1 GHz o superior',
      ram: '1 GB de RAM (2 GB recomendado)',
      graphics: 'Cualquiera',
      storage: '500 MB libres'
    },
    downloadLinks: [
      {
        server: 'MediaFire',
        url: 'https://mediafire.com/file/portalxd_malwarebytes_premium_full.rar',
        speed: 'Ultra Rápida',
        size: '298 MB',
        isRecommended: true
      },
      {
        server: 'Mega.nz',
        url: 'https://mega.nz/file/portalxd_malwarebytes_v5',
        speed: 'Alta',
        size: '298 MB'
      },
      {
        server: 'Servidor Rápido',
        url: 'https://descargas.portalxd.com/soft/malwarebytes.rar',
        speed: 'Ultra Rápida',
        size: '298 MB'
      }
    ],
    installSteps: [
      'Desactiva temporalmente el antivirus integrado antes de descomprimir.',
      'Descomprime el archivo con WinRAR usando la contraseña: PortalxD.com',
      'Ejecuta el archivo "Instalador Silencioso.cmd" como Administrador.',
      'Espera 30 segundos a que aparezca la confirmación en pantalla.',
      'Abre Malwarebytes Premium y disfruta de la protección total permanente.'
    ],
    isFeatured: true,
    neonColor: 'green'
  },
  {
    id: 'prog-eset-nod32',
    title: 'ESET Internet Security & NOD32 Antivirus 2026 (Modo Gamer)',
    slug: 'eset-internet-security-nod32-espanol',
    platform: 'Programas PC',
    category: 'Antivirus & Seguridad',
    image: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=600&auto=format&fit=crop&q=80',
    banner: 'https://images.unsplash.com/photo-1504639725590-34d0984388bd?w=1200&auto=format&fit=crop&q=80',
    rating: 4.88,
    votesCount: 2410,
    downloadsCount: 135000,
    likesCount: 3890,
    fileSize: '412 MB',
    version: '18.0.12 Final Español',
    developer: 'ESET, spol. s r.o.',
    releaseYear: '2025 - 2026',
    itemType: 'programa',
    architecture: 'Ambos',
    license: 'Full Activado',
    shortDescription: 'El antivirus más liviano del mundo con Modo Gamer integrado. Cero bajas de FPS mientras juegas en línea.',
    description: 'ESET Internet Security es reconocido internacionalmente por su bajísimo consumo de procesador y memoria RAM. Su motor patentado ThreatSense neutraliza amenazas en milisegundos y activa el "Modo Gamer" cuando detecta cualquier juego o aplicación en pantalla completa.',
    features: [
      'Modo Gamer automático: suspende ventanas emergentes y actualizaciones al jugar',
      'Firewall inteligente para proteger tus partidas multijugador y conexiones P2P',
      'Protección bancaria y de contraseñas integrada',
      'Escudo contra ataques de red y protección de cámara web',
      'Licencias activas actualizables automáticamente'
    ],
    pcRequirements: {
      os: 'Windows 11 / Windows 10 / Windows 8.1',
      processor: 'Intel o AMD a 1 GHz',
      ram: '512 MB de memoria RAM',
      graphics: 'Cualquiera',
      storage: '600 MB libres'
    },
    downloadLinks: [
      {
        server: 'MediaFire',
        url: 'https://mediafire.com/file/portalxd_eset_internet_security.rar',
        speed: 'Ultra Rápida',
        size: '412 MB',
        isRecommended: true
      },
      {
        server: 'Mega.nz',
        url: 'https://mega.nz/file/portalxd_eset_2026',
        speed: 'Alta',
        size: '412 MB'
      }
    ],
    installSteps: [
      'Descomprime el archivo con contraseña: PortalxD.com',
      'Ejecuta el asistente de instalación.',
      'Sigue los sencillos pasos en pantalla con la configuración recomendada.',
      '¡Listo! La protección en tiempo real y el Modo Gamer quedarán activos.'
    ],
    neonColor: 'cyan'
  },
  {
    id: 'prog-librerias-gamer',
    title: 'Pack Librerías Gamer PC (Visual C++ 2005-2024 + DirectX All-in-One)',
    slug: 'pack-librerias-gamer-visual-cpp-directx',
    platform: 'Programas PC',
    category: 'Librerías Gamer',
    image: 'https://images.unsplash.com/photo-1587202372775-e229f172b9d7?w=600&auto=format&fit=crop&q=80',
    banner: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=1200&auto=format&fit=crop&q=80',
    rating: 4.98,
    votesCount: 5620,
    downloadsCount: 310000,
    likesCount: 8450,
    fileSize: '185 MB',
    version: '2026 AIO Ultimate Installer',
    developer: 'Microsoft Corporation / Recopilado por PortalxD',
    releaseYear: '2026',
    itemType: 'programa',
    architecture: 'Ambos',
    license: 'Freeware',
    shortDescription: 'Soluciona el 100% de errores al abrir juegos: MSVCP140.dll, VCRUNTIME140.dll, d3dx9_43.dll y 0xc000007b.',
    description: '¿Tu juego descargado no abre o tira un error de archivo .DLL faltante? Este paquete todo-en-uno instala en 1 solo clic todas las versiones de Microsoft Visual C++ Redistributable (desde 2005 hasta 2024 en versiones x86 y x64) junto a los componentes finales de DirectX 9, 10, 11 y XAudio. Imprescindible para cualquier PC gamer nueva o recién formateada.',
    features: [
      'Instala en un solo clic Visual C++ 2005, 2008, 2010, 2012, 2013, 2015, 2017, 2019, 2022 y 2024',
      'Incluye DirectX End-User Runtimes completo de Junio 2010 con todas las DLLs',
      'Corrige el famoso error "La aplicación no se pudo iniciar correctamente (0xc000007b)"',
      'Detecta e instala automáticamente la arquitectura correspondiente (32 y 64 bits)',
      '100% oficial de Microsoft empaquetado para ahorrar horas de descargas manuales'
    ],
    pcRequirements: {
      os: 'Windows 11, 10, 8, 7 (Cualquier versión)',
      processor: 'Cualquier procesador',
      ram: '512 MB de RAM',
      graphics: 'Cualquiera',
      storage: '350 MB en disco C:'
    },
    downloadLinks: [
      {
        server: 'MediaFire',
        url: 'https://mediafire.com/file/portalxd_librerias_gamer_aio.rar',
        speed: 'Ultra Rápida',
        size: '185 MB',
        isRecommended: true
      },
      {
        server: 'Google Drive',
        url: 'https://drive.google.com/file/d/portalxd_librerias_vcpp_dx',
        speed: 'Ultra Rápida',
        size: '185 MB'
      },
      {
        server: 'Servidor Rápido',
        url: 'https://descargas.portalxd.com/librerias_gamer.rar',
        speed: 'Ultra Rápida',
        size: '185 MB'
      }
    ],
    installSteps: [
      'Descarga el archivo comprimido.',
      'Contraseña de descompresión: PortalxD.com',
      'Haz clic derecho en "Instalar_Librerias_Gamer_PortalxD.bat" y elige "Ejecutar como Administrador".',
      'El instalador se ejecutará automáticamente en modo silencioso.',
      'Reinicia tu computadora y abre tus juegos favoritos sin ningún tipo de error.'
    ],
    isFeatured: true,
    isTrending: true,
    neonColor: 'pink'
  },
  {
    id: 'prog-winrar-pro',
    title: 'WinRAR 7.01 Pro Full Español (32 & 64 Bits) + Licencia de por Vida',
    slug: 'winrar-7-pro-full-espanol',
    platform: 'Programas PC',
    category: 'Utilidades & Sistema',
    image: 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=600&auto=format&fit=crop&q=80',
    banner: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=1200&auto=format&fit=crop&q=80',
    rating: 4.99,
    votesCount: 6100,
    downloadsCount: 420000,
    likesCount: 9200,
    fileSize: '7.8 MB',
    version: '7.01 Final Registrado',
    developer: 'RARLAB / Eugene Roshal',
    releaseYear: '2025 - 2026',
    itemType: 'programa',
    architecture: 'Ambos',
    license: 'Full Activado',
    shortDescription: 'El descompresor más potente y rápido. Imprescindible para descomprimir juegos divididos en partes RAR con contraseña.',
    description: 'WinRAR es la herramienta básica obligatoria para todos los gamers. Permite descomprimir archivos .RAR, .ZIP, .7Z, .ISO y formatos divididos en partes (.part1.rar, .part2.rar) a máxima velocidad. Esta versión viene pre-activada con licencia corporativa ilimitada sin avisos de 40 días.',
    features: [
      'Versión 7.01 con nuevo algoritmo de compresión y descompresión multinúcleo',
      'Licencia permanente ilimitada sin ventanas de prueba ni expiración',
      'Integración total al menú contextual de Windows 10 y Windows 11',
      'Reparación integrada de archivos RAR dañados durante la descarga',
      'Soporte completo de contraseñas de alta seguridad'
    ],
    pcRequirements: {
      os: 'Windows 11, 10, 8.1, 7, XP',
      processor: 'Cualquier procesador',
      ram: '256 MB',
      graphics: 'Cualquiera',
      storage: '25 MB'
    },
    downloadLinks: [
      {
        server: 'MediaFire',
        url: 'https://mediafire.com/file/portalxd_winrar_701_pro_espanol.rar',
        speed: 'Ultra Rápida',
        size: '7.8 MB',
        isRecommended: true
      },
      {
        server: 'Servidor Rápido',
        url: 'https://descargas.portalxd.com/soft/winrar_pro.rar',
        speed: 'Ultra Rápida',
        size: '7.8 MB'
      },
      {
        server: 'Mega.nz',
        url: 'https://mega.nz/file/portalxd_winrar_7',
        speed: 'Alta',
        size: '7.8 MB'
      }
    ],
    installSteps: [
      'Descarga e instala WinRAR 7.01.',
      'Contraseña de descompresión: PortalxD.com',
      'Ejecuta el instalador y presiona "Instalar".',
      'Al finalizar la instalación se registrará automáticamente de por vida.'
    ],
    isFeatured: true,
    neonColor: 'blue'
  },
  {
    id: 'prog-driver-booster',
    title: 'Driver Booster 11 Pro Gamer Edition (Actualizador de Controladores)',
    slug: 'driver-booster-pro-gamer-edition',
    platform: 'Programas PC',
    category: 'Utilidades & Sistema',
    image: 'https://images.unsplash.com/photo-1591488320449-011701bb6704?w=600&auto=format&fit=crop&q=80',
    banner: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=1200&auto=format&fit=crop&q=80',
    rating: 4.82,
    votesCount: 1980,
    downloadsCount: 98000,
    likesCount: 2950,
    fileSize: '48 MB',
    version: '11.5 Pro Full',
    developer: 'IObit Information Technology',
    releaseYear: '2025 - 2026',
    itemType: 'programa',
    architecture: 'Ambos',
    license: 'Full Activado',
    shortDescription: 'Actualiza automáticamente los drivers de tarjetas gráficas NVIDIA, AMD, Intel y componentes de juegos para ganar FPS.',
    description: 'Driver Booster Pro analiza con un solo clic todos los dispositivos de tu PC y busca los controladores más recientes y estables en su base de datos de más de 9.5 millones de drivers certificados por WHQL de Microsoft. Especialmente útil para actualizar drivers de GPU y componentes de juegos obsoletos.',
    features: [
      'Base de datos con más de 9.500.000 de controladores certificados por Microsoft',
      'Modo "Game Boost" que detiene procesos en segundo plano para liberar RAM',
      'Actualización prioritaria de componentes de juegos (DirectX, PhysX, OpenAL)',
      'Copia de seguridad automática antes de actualizar cualquier driver'
    ],
    pcRequirements: {
      os: 'Windows 11, 10, 8.1, 8, 7',
      processor: '1 GHz o superior',
      ram: '512 MB de RAM',
      graphics: 'Cualquiera',
      storage: '200 MB'
    },
    downloadLinks: [
      {
        server: 'MediaFire',
        url: 'https://mediafire.com/file/portalxd_driver_booster_pro.rar',
        speed: 'Ultra Rápida',
        size: '48 MB',
        isRecommended: true
      },
      {
        server: 'Mega.nz',
        url: 'https://mega.nz/file/portalxd_driver_booster',
        speed: 'Alta',
        size: '48 MB'
      }
    ],
    installSteps: [
      'Descomprime con contraseña: PortalxD.com',
      'Ejecuta el instalador en modo Administrador.',
      'Abre el programa y pulsa "Analizar" para detectar controladores desactualizados.',
      'Haz clic en "Actualizar Ahora" y reinicia tu PC al finalizar.'
    ],
    neonColor: 'cyan'
  },
  {
    id: 'prog-rufus-portable',
    title: 'Rufus 4.5 Portable (Creador de USBs Booteables Windows)',
    slug: 'rufus-portable-usb-booteable',
    platform: 'Programas PC',
    category: 'Utilidades & Sistema',
    image: 'https://images.unsplash.com/photo-1597872200969-2b65d56bd16b?w=600&auto=format&fit=crop&q=80',
    banner: 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=1200&auto=format&fit=crop&q=80',
    rating: 4.97,
    votesCount: 3870,
    downloadsCount: 290000,
    likesCount: 7120,
    fileSize: '1.4 MB',
    version: '4.5 Final Portable',
    developer: 'Pete Batard / Akeo Consulting',
    releaseYear: '2025 - 2026',
    itemType: 'programa',
    architecture: 'Ambos',
    license: 'Open Source',
    shortDescription: 'Crea memorias USB booteables para instalar Windows 11 y 10. Quita requisitos de TPM 2.0 y cuenta obligatoria.',
    description: 'Rufus es la utilidad más rápida y confiable del mundo para crear unidades USB de arranque a partir de imágenes ISO. Permite formatear y crear pendrives con esquemas de partición GPT (UEFI) y MBR (Legacy BIOS) en cuestión de minutos, con opciones avanzadas para saltar los bloqueos de hardware de Windows 11.',
    features: [
      'Versión Portable: no requiere instalación en el sistema',
      'Opción automática para remover el requisito de TPM 2.0 y Secure Boot en Windows 11',
      'Permite saltar la creación obligatoria de cuenta Microsoft para usar cuenta local',
      'Soporta tanto UEFI como BIOS tradicional (MBR)',
      '2 veces más rápido que la herramienta oficial Media Creation Tool'
    ],
    pcRequirements: {
      os: 'Windows 11, 10, 8, 7 (32 y 64 bits)',
      processor: 'Cualquiera',
      ram: '256 MB',
      graphics: 'Cualquiera',
      storage: '10 MB'
    },
    downloadLinks: [
      {
        server: 'MediaFire',
        url: 'https://mediafire.com/file/portalxd_rufus_portable.rar',
        speed: 'Ultra Rápida',
        size: '1.4 MB',
        isRecommended: true
      },
      {
        server: 'Servidor Rápido',
        url: 'https://descargas.portalxd.com/soft/rufus.rar',
        speed: 'Ultra Rápida',
        size: '1.4 MB'
      }
    ],
    installSteps: [
      'Descomprime el archivo con contraseña: PortalxD.com',
      'Ejecuta "Rufus.exe" directamente sin instalar nada.',
      'Conecta tu memoria USB y selecciona la ISO de Windows 10 o Windows 11.',
      'Presiona "Empezar" y espera a que la barra verde llegue al 100%.'
    ],
    neonColor: 'green'
  },
  {
    id: 'prog-photoshop',
    title: 'Adobe Photoshop 2024 Full Español Pre-Activado',
    slug: 'adobe-photoshop-2024-full-espanol',
    platform: 'Programas PC',
    category: 'Edición & Diseño',
    image: 'https://images.unsplash.com/photo-1572044162444-ad60f128bdea?w=600&auto=format&fit=crop&q=80',
    banner: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=1200&auto=format&fit=crop&q=80',
    rating: 4.86,
    votesCount: 3120,
    downloadsCount: 175000,
    likesCount: 5120,
    fileSize: '3.40 GB',
    version: 'v25.9.1 Multilingüe',
    developer: 'Adobe Systems Inc.',
    releaseYear: '2024 - 2026',
    itemType: 'programa',
    architecture: '64 Bits',
    license: 'Full Activado',
    shortDescription: 'El editor gráfico y fotográfico estándar de la industria. Crea miniaturas para YouTube, banners y arte gamer.',
    description: 'Adobe Photoshop 2024 incluye herramientas avanzadas de edición y retoque fotográfico con aceleración por GPU. Permite crear miniaturas gaming de alto impacto, texturas para videojuegos, logotipos y composiciones digitales con filtros neurales y capas ilimitadas.',
    features: [
      'Pre-activado de fábrica: instala y úsalo de inmediato sin cracks manuales',
      'Soporte completo de aceleración por tarjeta gráfica (NVIDIA CUDA / AMD OpenCL)',
      'Herramientas avanzadas de selección por IA y máscaras de precisión',
      'Totalmente en Español y compatible con plugins de terceros'
    ],
    pcRequirements: {
      os: 'Windows 11 o Windows 10 versión 21H2 o superior (64 bits)',
      processor: 'Procesador Intel o AMD con soporte de 64 bits a 2 GHz o más',
      ram: '8 GB de RAM (16 GB recomendado)',
      graphics: 'GPU con soporte para DirectX 12 y 1.5 GB de VRAM',
      storage: '8 GB de espacio en disco SSD'
    },
    downloadLinks: [
      {
        server: 'MediaFire',
        url: 'https://mediafire.com/file/portalxd_photoshop_2024_full.rar',
        speed: 'Ultra Rápida',
        size: '3.40 GB',
        isRecommended: true
      },
      {
        server: 'Mega.nz',
        url: 'https://mega.nz/file/portalxd_photoshop_2024',
        speed: 'Alta',
        size: '3.40 GB'
      },
      {
        server: 'Google Drive',
        url: 'https://drive.google.com/file/d/portalxd_photoshop_full',
        speed: 'Ultra Rápida',
        size: '3.40 GB'
      }
    ],
    installSteps: [
      'Descomprime el archivo con contraseña: PortalxD.com',
      'Ejecuta "Set-up.exe" en modo Administrador.',
      'Selecciona el idioma deseado (Español) y continúa.',
      'El programa se instalará y activará automáticamente de por vida.'
    ],
    neonColor: 'pink'
  },
  {
    id: 'prog-obs-studio',
    title: 'OBS Studio 30 Pro Gamer & Streamer Pack',
    slug: 'obs-studio-pro-streamer-pack',
    platform: 'Programas PC',
    category: 'Edición & Diseño',
    image: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?w=600&auto=format&fit=crop&q=80',
    banner: 'https://images.unsplash.com/photo-1511512578047-dfb367046420?w=1200&auto=format&fit=crop&q=80',
    rating: 4.93,
    votesCount: 2210,
    downloadsCount: 142000,
    likesCount: 4680,
    fileSize: '135 MB',
    version: 'v30.2 Final 64 Bits',
    developer: 'OBS Project',
    releaseYear: '2025 - 2026',
    itemType: 'programa',
    architecture: '64 Bits',
    license: 'Open Source',
    shortDescription: 'Graba tus partidas a 60/120 FPS y transmite en vivo en Twitch, YouTube y Kick con baja latencia y codificación NVENC.',
    description: 'OBS Studio es el software de grabación y transmisión en vivo más utilizado en el mundo por streamers y jugadores profesionales. Permite capturar videojuegos en pantalla completa con audio multicanal, cámaras web, micrófonos con supresión de ruido e integración con codecs de video NVIDIA NVENC, AMD AMF e Intel QuickSync.',
    features: [
      'Grabación a 1080p y 4K a 60 o 120 FPS sin caída de rendimiento',
      'Codificación por hardware NVENC AV1 / H.264 para máximo desempeño',
      'Filtros de audio con cancelación de ruido de fondo por IA',
      'Perfiles optimizados de fábrica para YouTube, Twitch y TikTok'
    ],
    pcRequirements: {
      os: 'Windows 11 o Windows 10 (64 bits)',
      processor: 'Intel i3 / AMD Ryzen o superior',
      ram: '4 GB de RAM',
      graphics: 'GPU compatible con DirectX 11',
      storage: '500 MB libres'
    },
    downloadLinks: [
      {
        server: 'MediaFire',
        url: 'https://mediafire.com/file/portalxd_obs_studio_pro.rar',
        speed: 'Ultra Rápida',
        size: '135 MB',
        isRecommended: true
      },
      {
        server: 'Servidor Rápido',
        url: 'https://descargas.portalxd.com/soft/obs_studio.rar',
        speed: 'Ultra Rápida',
        size: '135 MB'
      }
    ],
    installSteps: [
      'Descomprime con contraseña: PortalxD.com',
      'Ejecuta el instalador.',
      'Sigue el asistente de configuración rápida para optimizar según tu tarjeta gráfica.'
    ],
    neonColor: 'blue'
  }
];

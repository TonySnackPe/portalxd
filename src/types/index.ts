export type Platform = 'PC' | 'Android' | 'Programas PC' | 'Ambos';

export type Theme = 'neon-dark' | 'neon-light';

export type Category = 
  | 'Todos'
  | 'Acción'
  | 'Carreras'
  | 'Shooters'
  | 'Aventura'
  | 'Música / FNF'
  | 'RPG'
  | 'Terror'
  | 'Simulación'
  | 'Mundo Abierto'
  | 'Sistemas Operativos (Win 10/11)'
  | 'Antivirus & Seguridad'
  | 'Utilidades & Sistema'
  | 'Librerías Gamer'
  | 'Edición & Diseño';

export interface DownloadLink {
  server: 'MediaFire' | 'Mega.nz' | 'Google Drive' | 'Torrent' | 'APK Direct' | 'Servidor Rápido';
  url: string;
  speed: 'Ultra Rápida' | 'Alta' | 'Ilimitada';
  size: string;
  isRecommended?: boolean;
}

export interface GameRequirements {
  os: string;
  processor: string;
  ram: string;
  graphics: string;
  storage: string;
}

export interface FacebookComment {
  id: string;
  author: string;
  avatar: string;
  timeAgo: string;
  content: string;
  likes: number;
  userLiked?: boolean;
}

export interface Game {
  id: string;
  title: string;
  slug: string;
  platform: Platform;
  category: Category;
  image: string;
  banner?: string;
  rating: number;
  votesCount: number;
  downloadsCount: number;
  likesCount?: number;
  fileSize: string;
  version: string;
  developer: string;
  releaseYear: string;
  shortDescription: string;
  description: string;
  features: string[];
  pcRequirements?: GameRequirements;
  androidRequirements?: {
    androidVersion: string;
    ram: string;
    storage: string;
    rootRequired: boolean;
  };
  downloadLinks: DownloadLink[];
  installSteps: string[];
  isFeatured?: boolean;
  isTrending?: boolean;
  isNew?: boolean;
  neonColor?: 'cyan' | 'blue' | 'pink' | 'green';
  itemType?: 'juego' | 'programa';
  architecture?: '64 Bits' | '32 Bits' | 'Ambos';
  license?: 'Full Activado' | 'Pre-activado' | 'Freeware' | 'Open Source';
}

export interface TopPoster {
  id: string;
  rank: number;
  username: string;
  avatar: string;
  role: 'Uploader Leyenda' | 'Master Releaser' | 'Gamer Élite' | 'VIP Contributor' | 'Verified Uploader';
  gamesCount: number;
  totalDownloads: string;
  reputation: number;
  specialty: string;
  badges: string[];
  recentGame: string;
  isVerified: boolean;
  neonAura: 'gold' | 'silver' | 'bronze' | 'cyan' | 'pink' | 'emerald';
}

export interface UserProfile {
  id: string;
  username: string;
  email: string;
  avatar: string;
  country: string;
  countryFlag: string;
  age: number;
  bio: string;
  favoritePlatform: 'PC Gamer' | 'Android' | 'Ambas';
  role: 'Miembro PortalxD' | 'Gamer VIP' | 'Uploader Activo';
  reputationPoints: number;
  registeredDate: string;
  gamesUploadedCount: number;
  commentsCount: number;
  discordTag?: string;
}



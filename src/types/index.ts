export type Platform = 'PC' | 'Android' | 'Ambos';

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
  | 'Mundo Abierto';

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
}

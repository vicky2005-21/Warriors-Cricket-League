export interface Player {
  id: string;
  name: string;
  team: 'VAFA' | 'WAFA';
  imageUrl: string;
  role: string;
  battingStyle?: string;
  bowlingStyle?: string;
  socialLinks: {
    twitter?: string;
    instagram?: string;
    facebook?: string;
  };
  stats: {
    matches: number;
    runs: number;
    wickets: number;
    average: number;
    strikeRate?: number;
    economyRate?: number;
    highestScore?: number;
    bestBowling?: string;
  };
}

export interface Match {
  id: string;
  date: string;
  time: string;
  venue: string;
  team1: 'VAFA' | 'WAFA';
  team2: 'VAFA' | 'WAFA';
  status: 'upcoming' | 'live' | 'completed';
  result?: string;
  highlights?: string[];
}

export interface News {
  id: string;
  title: string;
  content: string;
  imageUrl: string;
  date: string;
  author: string;
  category: string;
  tags: string[];
}

export interface User {
  id: string;
  email: string;
  isAdmin: boolean;
  name?: string;
  avatar?: string;
}

export interface TeamStats {
  team: 'VAFA' | 'WAFA';
  matches: number;
  wins: number;
  losses: number;
  draws: number;
  points: number;
  netRunRate: number;
}
import { create } from 'zustand';
import { Match } from '../types';

interface MatchState {
  matches: Match[];
  setMatches: (matches: Match[]) => void;
  addMatch: (match: Match) => void;
  updateMatch: (id: string, match: Partial<Match>) => void;
  deleteMatch: (id: string) => void;
}

export const useMatchStore = create<MatchState>((set) => ({
  matches: [],
  setMatches: (matches) => set({ matches }),
  addMatch: (match) =>
    set((state) => ({ matches: [...state.matches, match] })),
  updateMatch: (id, updatedMatch) =>
    set((state) => ({
      matches: state.matches.map((match) =>
        match.id === id ? { ...match, ...updatedMatch } : match
      ),
    })),
  deleteMatch: (id) =>
    set((state) => ({
      matches: state.matches.filter((match) => match.id !== id),
    })),
}));
import { create } from 'zustand';
import { News } from '../types';

interface NewsState {
  news: News[];
  setNews: (news: News[]) => void;
  addNews: (news: News) => void;
  updateNews: (id: string, news: Partial<News>) => void;
  deleteNews: (id: string) => void;
}

export const useNewsStore = create<NewsState>((set) => ({
  news: [],
  setNews: (news) => set({ news }),
  addNews: (news) =>
    set((state) => ({ news: [...state.news, news] })),
  updateNews: (id, updatedNews) =>
    set((state) => ({
      news: state.news.map((news) =>
        news.id === id ? { ...news, ...updatedNews } : news
      ),
    })),
  deleteNews: (id) =>
    set((state) => ({
      news: state.news.filter((news) => news.id !== id),
    })),
}));
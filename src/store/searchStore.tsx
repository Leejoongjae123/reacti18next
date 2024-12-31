import { create } from 'zustand'

interface SearchState {
  searchKeyword: string
  setSearchKeyword: (keyword: string) => void
}

export const useSearchStore = create<SearchState>((set: any) => ({
  searchKeyword: "",
  setSearchKeyword: (keyword: any) => set({ searchKeyword: keyword }),
}));

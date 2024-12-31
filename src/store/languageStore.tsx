import { create } from 'zustand'

interface LanguageState {
  selectedLanguage: string
  setSelectedLanguage: (language: string) => void
}

export const useLanguageStore = create<LanguageState>((set: any) => ({
  selectedLanguage: "kr",
  setSelectedLanguage: (language: any) => set({ selectedLanguage: language }),
}));

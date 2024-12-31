import { create } from 'zustand'

interface ContentsState {
  selectedContents: string
  setSelectedContents: (contents: string) => void
}

export const useContentsStore = create<ContentsState>((set: any) => ({
  selectedContents: "contents",
  setSelectedContents: (contents: any) => set({ selectedContents: contents }),
}));

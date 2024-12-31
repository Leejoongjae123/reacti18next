import { create } from 'zustand'

interface MenuState {
  selectedMenu: string
  setSelectedMenu: (menu: string) => void
}

export const useMenuStore = create<MenuState>((set: any) => ({
  selectedMenu: "menu1_1",
  setSelectedMenu: (menu: any) => set({ selectedMenu: menu }),
}));

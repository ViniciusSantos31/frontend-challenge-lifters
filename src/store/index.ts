import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";
import { iProduct } from "../types/product";

type ShoppingCartState = {
  items: iProduct[];
  addItem: (item: iProduct) => void;
  removeItem: (slug: iProduct["slug"]) => void;
  clearItems: () => void;
};

export const useShoppingCartStore = create<ShoppingCartState>()(
  devtools(
    persist(
      (set, get) => ({
        items: [],
        addItem: (product: iProduct) =>
          set({ items: [...get().items, product] }),
        removeItem: (slug: string) =>
          set({ items: get().items.filter((item) => item.slug !== slug) }),
        clearItems: () => set({ items: [] }),
      }),
      {
        name: "@lifters/persist",
      }
    )
  )
);

import { create } from "zustand";
import { Product } from "@/types/ProductType";

type CartState = {
    items: Product[];
    addItem: (item: Product) => void;
    removeItem: (id: string) => void;
    clearCart: () => void;
    totalItems: number;
}

export const useCartStore = create<CartState>((set, get) => ({
    items: [],
    addItem: (item) => {
        const items = get().items;
        const existing = items.find((i) => i.id === item.id);

        if (existing) {
            set({
                items: items.map((i) =>
                    i.id === item.id ? { ...i, quantity: i.quantity + 1 } : i
                ),
            });
        } else {
            set({ items: [...items, { ...item, quantity: 1 }] });
        }
    },
    removeItem: (id) =>
        set({
            items: get().items.filter((i) => i.id !== id),
        }),
    clearCart: () => set({ items: [] }),
    get totalItems() {
        return get().items.reduce((acc, item) => acc + item.quantity, 0);
    },
}));
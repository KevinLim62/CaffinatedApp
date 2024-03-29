import { CartItem } from '@/types/CartItem';
import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';

type CartStore = {
  items: CartItem[];
  addItem: (item: CartItem) => void;
  removeItem: (itemId: string) => void;
  removeAll: () => void;
};

const useCart = create(
  persist<CartStore>(
    (set, get) => ({
      items: [],
      addItem: (data: CartItem) => {
        const currentItem = get().items;
        const existingItemIndex = currentItem.findIndex((item) => item.product.id === data.product.id);

        if (existingItemIndex === -1) {
          set({ items: [...currentItem, data] });
        } else {
          const updatedItems: CartItem[] = [...currentItem];
          updatedItems[existingItemIndex] = {
            ...updatedItems[existingItemIndex],
            quantity: data.quantity,
          };

          set({ items: updatedItems });
        }
      },
      removeItem: (itemId: string) => {
        set({ items: [...get().items.filter((item) => item.product.id !== +itemId)] });
      },
      removeAll: () => {
        set({ items: [] });
      },
    }),
    {
      name: 'cart-storage',
      storage: createJSONStorage(() => localStorage),
    },
  ),
);

export default useCart;

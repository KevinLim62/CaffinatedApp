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
        const existingItemIndex = currentItem.findIndex((item) => item.product.productId === data.product.productId);

        if (existingItemIndex === -1) {
          set({ items: [...currentItem, data] });
        } else {
          const updatedItems: CartItem[] = [...currentItem];
          updatedItems[existingItemIndex] = {
            ...updatedItems[existingItemIndex],
            quantity: updatedItems[existingItemIndex].quantity + data.quantity,
          };

          console.log('Updated items: ', updatedItems);
          set({ items: updatedItems });
        }
      },
      removeItem: (itemId: string) => {
        set({ items: [...get().items.filter((item) => item.product.productId !== itemId)] });
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

import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface CartItem {
  id: string;
  name: string;
  price: number;
  quantity: number;
  image: string;
}

interface CartState {
  items: CartItem[];
}

const initialState: CartState = {
  items: [],
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItemToCart: (state, action: PayloadAction<CartItem>) => {
        const itemIndex = state.items.findIndex(item => item.id === action.payload.id);
        if (itemIndex >= 0) {
          state.items[itemIndex].quantity += action.payload.quantity;
        } else {
          state.items.push(action.payload);
        }
      },
      updateItemQuantity: (state, action: PayloadAction<{ id: string; quantity: number }>) => {
        const itemIndex = state.items.findIndex(item => item.id === action.payload.id);
        if (itemIndex >= 0) {
          state.items[itemIndex].quantity = action.payload.quantity;
        }
      },
      removeItemFromCart: (state, action: PayloadAction<string>) => {
        state.items = state.items.filter(item => item.id !== action.payload);
    },
  },
});

export const { addItemToCart, removeItemFromCart, updateItemQuantity} = cartSlice.actions;
export default cartSlice.reducer;

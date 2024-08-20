import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface Product {
  id: string;
  name: string;
  price: number;
  image: string;
}

interface FavoritesState {
  items: Product[];
}

const initialState: FavoritesState = {
  items: [],
};

const favoritesSlice = createSlice({
  name: 'favorites',
  initialState,
  reducers: {
    addItemToFavorites: (state, action: PayloadAction<Product>) => {
      const itemExists = state.items.find(item => item.id === action.payload.id);
      if (!itemExists) {
        state.items.push(action.payload);
      }
    },
    removeItemFromFavorites: (state, action: PayloadAction<string>) => {
      state.items = state.items.filter(item => item.id !== action.payload);
    },
  },
});

export const { addItemToFavorites, removeItemFromFavorites } = favoritesSlice.actions;
export default favoritesSlice.reducer;

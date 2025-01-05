import { createSlice } from '@reduxjs/toolkit';

const wishlistSlice = createSlice({
  name: 'wishlist',
  initialState: [],  
  reducers: {
    toggleWishlist: (state, action) => {
      const productIndex = state.findIndex((item) => item.id === action.payload.id);
      if (productIndex !== -1) {
   
        state.splice(productIndex, 1);
      } else {
      
        state.push(action.payload);
      }
    },
    removeFromWishlist: (state, action) => {
    
      return state.filter((item) => item.id !== action.payload);
    },
  },
});

export const { toggleWishlist, removeFromWishlist } = wishlistSlice.actions;
export default wishlistSlice.reducer;

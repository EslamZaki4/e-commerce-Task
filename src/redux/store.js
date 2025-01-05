import { configureStore } from '@reduxjs/toolkit';
import wishlistReducer from './wishlistSlice';
import productsReducer from './products';


const store = configureStore({
  reducer: {
    wishlist: wishlistReducer,
    products: productsReducer
  },
});

export default store;

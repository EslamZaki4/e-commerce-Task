import { createSlice } from "@reduxjs/toolkit";
import { filterProducts } from "../helpers/productHelpers";

const productSlice = createSlice({
  name: 'products',
  initialState: {
    products: [],
    filteredProducts: [],
    categories: [],
    filteredCategories: [],
    searchTerm: '',
    selectedCategory: '',
    loading: false,
    error: null,
  },
  reducers: {
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
    setProducts: (state, action) => {
      state.products = action.payload;
    },
    setFilteredProducts: (state, action) => {
      state.filteredProducts = action.payload;
    },
    setCategories: (state, action) => {
      state.categories = action.payload;
    },
    setFilteredCategories: (state, action) => {
      state.filteredCategories = action.payload;
    },
    setError: (state, action) => {
      state.error = action.payload;
    },
    setSearchTerm: (state, action) => {
      state.searchTerm = action.payload;
      const filtered = filterProducts(
        state.products,
        state.categories,
        state.searchTerm,
        state.selectedCategory
      );
      state.filteredProducts = filtered.filtered;
      state.filteredCategories = filtered.updatedCategories;
    },
    setSelectedCategory: (state, action) => {
      state.selectedCategory = action.payload;
      const filtered = filterProducts(
        state.products,
        state.categories,
        state.searchTerm,
        state.selectedCategory
      );
      state.filteredProducts = filtered.filtered;
      state.filteredCategories = filtered.updatedCategories;
    },
  },
});

export const {
  setLoading,
  setProducts,
  setFilteredProducts,
  setCategories,
  setFilteredCategories,
  setError,
  setSearchTerm,
  setSelectedCategory,
} = productSlice.actions;
export default productSlice.reducer;
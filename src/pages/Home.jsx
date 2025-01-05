import React, { useEffect, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Input from '../components/atoms/Input';
import ProductList from '../components/organisms/ProductList';
import { debounce, fetchProductsAndCategories } from '../helpers/productHelpers';
import CategoryFilter from '../components/organisms/CategoryFilter';
import { setSearchTerm, setSelectedCategory } from '../redux/products';


const HomePage = () => {
  const dispatch = useDispatch();
  const {
    filteredProducts,
    filteredCategories,
    loading,
    error,
  } = useSelector((state) => state.products);

  
  useEffect(() => {
    dispatch(fetchProductsAndCategories());
  }, [dispatch]);


  const debouncedSearch = useCallback(
    debounce((value) => {
      dispatch(setSearchTerm(value));
    }, 300),
    [dispatch]
  );

  const handleCategorySelect = (category) => {
    dispatch(setSelectedCategory(category));
  };

  return (
    <div className="container py-4">
      <div className="flex flex-col md:flex-row items-center mb-4 gap-4">
        <CategoryFilter
          categories={filteredCategories}
          onSelectCategory={handleCategorySelect}
        />
        <Input
          type="text"
          placeholder="Search products..."
          onChange={(e) => debouncedSearch(e.target.value)}
          className="w-full"
        />
      </div>

     
      {loading ? (
        <div className="flex justify-center items-center h-48">
          <span className="animate-spin rounded-full h-10 w-10 border-t-4 border-b-4 border-primary"></span>
          <span className="ml-3 text-lg">Loading...</span>
        </div>
      ) : error ? (
        <div className="text-center text-red-500">
          {error || 'Failed to load products'}
        </div>
      ) : (
        <ProductList products={filteredProducts} />
      )}
    </div>
  );
};

export default HomePage;

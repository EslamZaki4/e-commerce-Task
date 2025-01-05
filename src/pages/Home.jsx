import { useState, useEffect, useCallback, useMemo } from 'react';
import Input from '../components/atoms/Input';
import ProductList from '../components/organisms/ProductList';
import { fetchData, filterProducts, debounce } from '../helpers/productHelpers';
import CategoryFilter from '../components/organisms/CategoryFilter';

const HomePage = () => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [filteredCategories, setFilteredCategories] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');

  
  useEffect(() => {
    const loadProducts = async () => {
      try {
        await fetchData(setProducts, setFilteredProducts, setCategories, setFilteredCategories );
      } catch (error) {
        console.error("Failed to fetch products", error);
      }
    };
    loadProducts();
  }, []);

 
  useEffect(() => {
    const { filtered, updatedCategories } = filterProducts(
      products,
      categories,
      searchTerm,
      selectedCategory
    );
    setFilteredProducts(filtered);
    setFilteredCategories(updatedCategories);
  }, [products, categories, searchTerm, selectedCategory]);

 
  const debouncedSearch = useCallback(
    debounce((value) => {
      setSearchTerm(value);
    }, 300),
    [setSearchTerm]
  );

  

  return (
    <div className="container py-4">
      <div className="flex flex-col md:flex-row  items-center mb-4 gap-4">
        <CategoryFilter
          categories={filteredCategories}
          onSelectCategory={setSelectedCategory}
        />
        <Input
          type="text"
          placeholder="Search products..."
          onChange={(e) => debouncedSearch(e.target.value)}
          className="w-full"
        />
      </div>
      <ProductList products={filteredProducts} />
    </div>
  );
};

export default HomePage;

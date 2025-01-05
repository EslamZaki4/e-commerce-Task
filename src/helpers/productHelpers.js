import { setCategories, setError, setFilteredCategories, setFilteredProducts, setLoading, setProducts } from "../redux/products";
import { api } from "./apiInstance";

// Fetch Data from API
export const fetchProductsAndCategories = () => async (dispatch) => {
 
  dispatch(setLoading(true));
  try {
    const [productsRes, categoriesRes] = await Promise.all([
      api.get('/products'),
      api.get('/categories'),
    ]);

    dispatch(setProducts(productsRes.data));
    dispatch(setCategories(categoriesRes.data));
    dispatch(setFilteredProducts(productsRes.data));
    dispatch(setFilteredCategories(categoriesRes.data));
  } catch (error) {
    dispatch(setError(error.response?.data || 'Failed to fetch data'));
  } finally {
    dispatch(setLoading(false)); 
  }
};

// Show More Handler
export const handleShowMore = (setVisibleCount, increment, setLoading) => {
    setLoading(true); 
    setTimeout(() => {
      setVisibleCount((prevCount) => prevCount + increment);
      setLoading(false); 
    }, 2000); 
  };

// Filter Products by Category and Search 
export const filterProducts = (products, categories, searchTerm, selectedCategory) => {
  const filtered = products.filter((product) =>
    (!selectedCategory || product.category === selectedCategory) &&
    (!searchTerm || product.name.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  const updatedCategories = categories.filter((category) =>
    filtered.some((product) => product.category === category.id)
  );

  return { filtered, updatedCategories };
};

// Debounce Function to Optimize Search
export const debounce = (func, delay) => {
  let timeout;
  return (...args) => {
    clearTimeout(timeout);
    timeout = setTimeout(() => func(...args), delay);
  };
};

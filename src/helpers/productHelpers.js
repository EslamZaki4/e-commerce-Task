import { api } from "./apiInstance";

// Fetch Data from API
export const fetchData = async (setProducts, setFilteredProducts, setCategories, setFilteredCategories) => {
  try {
    const [productsRes, categoriesRes] = await Promise.all([
      api.get('/products').catch(() => ({ data: [] })),
      api.get('/categories').catch(() => ({ data: [] }))
    ]);

    const productsData = productsRes.data || [];
    const categoriesData = categoriesRes.data || [];

    setProducts(productsData);
    setFilteredProducts(productsData);
    setCategories(categoriesData);
    setFilteredCategories(categoriesData);
  } catch (error) {
    console.error('Unexpected error fetching data:', error);
    setFilteredProducts([]);
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

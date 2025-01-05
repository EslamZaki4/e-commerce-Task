import { useCallback, useMemo, useState } from "react";
import { useDispatch } from "react-redux";
import {  toggleWishlist } from "../../redux/wishlistSlice";
import ProductCard from "../molecules/ProductCard";
import { handleShowMore } from "../../helpers/productHelpers";
import Button from "../atoms/Button";

const INITIAL_VISIBLE_COUNT = 8;
const LOAD_MORE_COUNT = 8;

const ProductList = ({ products = [] }) => {
  const dispatch = useDispatch();
  const [visibleCount, setVisibleCount] = useState(INITIAL_VISIBLE_COUNT);
  const [loading, setLoading] = useState(false);
  const handleAddToWishlist = useCallback(
    (product) => dispatch(toggleWishlist(product)),
    [dispatch]
  );

  const visibleProducts = useMemo(
    () => products.slice(0, visibleCount),
    [products, visibleCount]
  );

  const productCards = useMemo(
    () =>
      visibleProducts.map((product) => (
        <ProductCard
          key={product.id}
          product={product}
          onAddToWishlist={handleAddToWishlist}
        />
      )),
    [visibleProducts, handleAddToWishlist]
  );

  const loadMore = () => {
    handleShowMore(setVisibleCount, LOAD_MORE_COUNT, setLoading);
  };
  return (
    <div className="p-4">
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {productCards.length > 0 ? (
          productCards
        ) : (
          <p className="text-gray-500 col-span-full text-center font-bold">No products found.</p>
        )}
      </div>
      {visibleCount < products.length && (
  loading ? (
    <div className="flex items-center justify-center mt-4">
      <span className="animate-spin rounded-full h-6 w-6 border-t-2 border-b-2 border-primary"></span>
      <span className="ml-2">Loading...</span>
    </div>
  ) : (
    <div className="text-center mt-4">
      <Button
        onClick={loadMore}
        className="px-4 py-2 bg-primary text-white rounded hover:scale-110 transition"
      >
        Show More
      </Button>
    </div>
  )
)}

    </div>
  );
};

export default ProductList;
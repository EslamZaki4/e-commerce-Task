import { useState } from "react";
import HeartOutline from "../../assets/icons/HeartOutline";
import HeartFill from "../../assets/icons/HeartFill";
import Button from "../atoms/Button";

const ProductCard = ({ product, onAddToWishlist, className = "" }) => {
  const [isWishlisted, setIsWishlisted] = useState(false);

  const handleWishlistToggle = (event) => {
    event.preventDefault();
    setIsWishlisted(!isWishlisted);
    onAddToWishlist(product);
  };

  return (
    <div className={`relative rounded-lg overflow-hidden shadow-lg md:shadow-none hover:shadow-lg transition-shadow duration-300 bg-white ${className}`}>
      <card
        className="group block"
      >
        <div className="relative w-full aspect-square xl:aspect-[7/8]">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-cover rounded-t-lg bg-gray-100 group-hover:opacity-90 transition-opacity duration-200"
            loading="lazy"
          />

      
          <Button
            onClick={handleWishlistToggle}
            aria-label={isWishlisted ? "Remove from wishlist" : "Add to wishlist"}
            className="absolute top-2 right-2 bg-white rounded-full p-1 hover:scale-110 transition-transform duration-200"
          >
            {isWishlisted ? (
              <HeartFill width={24} height={24} fill="#1F2937" />
            ) : (
              <HeartOutline width={24} height={24} stroke="#1F2937" />
            )}
          </Button>
        </div>

        {/* Product Details */}
        <div className="p-4">
          <h3 className="text-md font-semibold text-gray-800 truncate" title={product.name}>
            {product.name}
          </h3>
          <p className="font-medium text-primary"> category : {product.category}</p>
          <p className="text-lg font-bold text-primary mt-2">${product.price}</p>
        </div>
      </card>
    </div>
  )
};

export default ProductCard;

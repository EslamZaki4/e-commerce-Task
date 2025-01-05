import React from "react";
import { useDispatch } from "react-redux";
import { removeFromWishlist } from "../../redux/wishlistSlice";
import Button from "../atoms/Button";
import RemoveIcon from "../../assets/icons/RemoveIcon";

const WishlistCard = ({ product }) => {
  const dispatch = useDispatch();

  const handleRemoveFromWishlist = () => {
    dispatch(removeFromWishlist(product.id));
  };

  return (
    <card className="flex flex-col md:flex-row items-center justify-between border p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 bg-white">
      
     
      <button
        onClick={handleRemoveFromWishlist}
        aria-label="Remove from wishlist"
        className="self-start md:self-auto md:mr-4 mb-2 md:mb-0 hover:text-red-500 transition-colors duration-200"
      >
        <RemoveIcon size={24} />
      </button>
      <img
        src={product.image}
        alt={product.name}
        className="w-32 h-32 md:w-24 md:h-24 object-cover rounded-md"
      />

     
      <div className="flex-1 mt-4 md:mt-0 md:ml-4 text-center md:text-left">
        <h3 className="text-lg font-semibold">{product.name}</h3>
        {product.category && (
          <p className="text-sm text-gray-500">
            <span className="font-medium">category:</span> {product.category}
          </p>
        )}
       
      </div>

  
      <div className="text-center md:text-right mt-4 md:mt-0">
        <p className="text-lg font-semibold text-gray-900 mb-2">
          ${product.price.toFixed(2)}
        </p>
       
      </div>
    </card>
  );
};

export default WishlistCard;

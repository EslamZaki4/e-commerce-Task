import { useSelector } from "react-redux";
import WishlistCard from "../components/molecules/WishListCard";


const Wishlist = () => {
  const wishlist = useSelector((state) => state.wishlist);
console.log(wishlist)
  return (
    <div className="container py-4">
      <h2 className="text-2xl font-bold mb-4 text-primary">Wishlist</h2>
      {wishlist?.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {wishlist.map((product) => (
            <WishlistCard key={product.id} product={product} />
          ))}
        </div>
      ) : (
        <p className="text-gray-500 text-center">Your wishlist is currently empty.</p>
      )}
    </div>
  );
};

export default Wishlist;

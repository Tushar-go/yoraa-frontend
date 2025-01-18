import React from 'react';
import { useSelector } from 'react-redux';
import ProductCard from "../components/ProductCard";

const Wishlist = () => {
  const wishlistItems = useSelector(state => state.wishlist.items);
  
  return (
    <div className="max-h-full w-full">
      <h1 className="w-full text-center font-light text-3xl my-3">
        Wishlist
      </h1>
      <div className="grid gap-3 grid-cols-4 mx-6 my-4">
        {wishlistItems.map((item) => (
          <div key={item.id} className="col-span-1">
            <ProductCard
              imgUrl={[item.image]}
              name={item.name}
              price={item.price}
              id={item.id}
              size={item.size}
            />
          </div>
        ))}
      </div>
      {wishlistItems.length === 0 && (
        <p className="text-center text-gray-500 my-8">Your wishlist is empty</p>
      )}
    </div>
  );
};

export default Wishlist;
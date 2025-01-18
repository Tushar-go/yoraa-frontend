import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteFromCart, updateQuantity } from "../store/slices/cartSlice";
import CartItem from "../components/CartItem";

const Cart = () => {
  const cartItems = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();

  const handleIncrement = (item) => {
    dispatch(updateQuantity({
      id: item.id,
      size: item.size,
      quantity: item.quantity + 1
    }));
  };

  const handleDecrement = (item) => {
    if (item.quantity > 1) {
      dispatch(updateQuantity({
        id: item.id,
        size: item.size,
        quantity: item.quantity - 1
      }));
    } else {
      dispatch(deleteFromCart({ id: item.id, size: item.size }));
    }
  };

  const handleDelete = (item) => {
    dispatch(deleteFromCart({ id: item.id, size: item.size }));
  };

  const subtotal = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );


  return (
    <div className="max-h-full w-full">
      <h1 className="w-full text-center font-light text-3xl my-3 mb-6">
        Your Cart
      </h1>
      <div className="grid grid-cols-3 gap-5 mx-6">
        <div className="min-h-44 col-span-2">
          <table className="min-w-full text-sm text-gray-700 border">
            <thead className="border-gray-300 border-2">
              <tr>
                <th className="px-4 py-2 text-left border-gray-300 border-2" colSpan="2">
                  Product
                </th>
                <th
                  className="hidden lg:table-cell px-4 py-2 text-left border-gray-300 border-2"
                  colSpan="1"
                >
                  Quantity
                </th>
                <th
                  className="hidden lg:table-cell px-4 py-2 text-left border-gray-300 border-2"
                  colSpan="1"
                >
                  Total
                </th>
                <th className="hidden lg:table-cell px-4 py-2"></th>
              </tr>
            </thead>
            <tbody>
              {cartItems.map((item) => (
                <CartItem
                  key={item.id}
                  item={item}
                  onIncrement={handleIncrement}
                  onDecrement={handleDecrement}
                  onDelete={handleDelete}
                />
              ))}
            </tbody>
          </table>
        </div>
        <div className="min-h-44 col-span-1 bg-slate-200 rounded-md">
          <div className="flex flex-col gap-4 w-full px-10 py-8">
            <div className="flex justify-between">
              <h2 className="text-xl">Subtotal</h2>
              <p>Rs. {subtotal.toFixed(2)}</p>
            </div>
            <div className="w-full flex justify-center">
              <button className="px-36 py-4 mt-6 text-xs rounded-3xl shadow-md text-white bg-black">
                CHECK OUT
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
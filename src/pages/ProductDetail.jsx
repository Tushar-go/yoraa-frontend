import React, { useState } from "react";
import { useParams } from "react-router";
import whatsapp from "../assets/WhatsAppImg.png";
import { productlist } from "../ProductList";
import Carousel from "../components/Carousel";
import { useDispatch } from "react-redux";
import { addToCart, onOpen } from "../store/slices/cartSlice";

const ProductDetail = () => {
  const { productId } = useParams();

  const dispatch = useDispatch();

  const { product_name, price, sizes, product_images } = productlist.find( (el) => el.id == productId  );

  const [activeSize, setActiveSize] = useState(sizes[0]);

  const addToCartHandler = () => {
    dispatch(
       addToCart({
        id: productId,
        name: product_name,
        price: price,
        image: product_images[0],
        size: activeSize,
      })
    );
    dispatch(onOpen())
  };

  return (
    <div className=" grid grid-cols-2 gap-3 px-3   bg-gray-50">
      <div className=" col-span-1 min-h-64 ">
        {/* "Carausel" */}

        <Carousel data={product_images} />
      </div>
      <div className=" col-span-1  ">
        <div className=" flex flex-col mx-6">
          <h2 className=" font-bold text-sm mb-1">{product_name}</h2>
          <p className=" text-xs text-gray-500">
            Rs. {price}.00 <span>(ALL TAXES INCLUDED)</span>
          </p>
          <hr className="h-[0.5px] mt-4 bg-gray-300 border-0" />

          {/* "Sizes & Size Guide" */}
          <div className=" flex flex-col">
            <div className=" flex justify-between mx-1 mt-2 items-center">
              <p className=" text-sm text-gray-500">
                Size:<span className=" text-black ml-1 ">{activeSize}</span>
              </p>
              <p className=" underline text-sm ">SIZE GUIDE</p>
            </div>
            <div className=" flex gap-1 text-gray-500 mt-1 text-sm">
              {sizes.map((size) => (
                <button
                  key={size}
                  className={`px-4 py-2 rounded ${
                    activeSize === size
                      ? "text-black font-medium underline"
                      : "text-gray-500"
                  }`}
                  onClick={() => setActiveSize(size)}
                >
                  {size}
                </button>
              ))}
            </div>
          </div>
          <hr className="h-px mt-4 bg-gray-300 border-0 " />
          <div className="w-full flex items-center ml-3 mt-3 space-x-4">
            <button
            onClick={addToCartHandler}
            className="inline-flex px-56 border text-sm h-12 items-center justify-center rounded-md text-black hover:bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] hover:text-white transition-all duration-300 ease-in-out hover:animate-shimmer">
              ADD TO CART
            </button>

            <button className="flex items-center justify-center text-black hover:text-white bg-white rounded-full w-11 h-11 hover:bg-black">
              <svg
                width="22"
                height="17"
                viewBox="0 0 22 17"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M16.8305 2.96814C17.1642 3.30188 17.4146 3.68329 17.5815 4.11237C17.7484 4.52955 17.8318 4.95863 17.8318 5.39964C17.8318 5.84064 17.7484 6.27569 17.5815 6.70478C17.4146 7.12195 17.1642 7.4974 16.8305 7.83114L10.6267 14.035L4.4228 7.83114C4.08906 7.4974 3.83875 7.12195 3.67189 6.70478C3.50503 6.27569 3.42159 5.84064 3.42159 5.39964C3.42159 4.95863 3.50503 4.52955 3.67189 4.11237C3.83875 3.68329 4.08906 3.30188 4.4228 2.96814C4.75653 2.63442 5.13198 2.38411 5.54915 2.21725C5.97823 2.05038 6.41327 1.96695 6.85428 1.96695C7.29529 1.96695 7.72438 2.05038 8.14155 2.21725C8.55871 2.38411 8.94013 2.63442 9.28578 2.96814L10.0903 3.77269C10.2333 3.92764 10.4121 4.0051 10.6267 4.0051C10.8412 4.0051 11.02 3.92764 11.163 3.77269L11.9676 2.96814C12.3132 2.63442 12.6946 2.38411 13.1118 2.21725C13.529 2.05038 13.9581 1.96695 14.3991 1.96695C14.8401 1.96695 15.2691 2.05038 15.6863 2.21725C16.1154 2.38411 16.4968 2.63442 16.8305 2.96814ZM17.9033 1.89543C17.4265 1.40674 16.8782 1.04322 16.2584 0.804837C15.6506 0.566455 15.0307 0.447266 14.3991 0.447266C13.7673 0.447266 13.1475 0.566455 12.5397 0.804837C11.9318 1.04322 11.3835 1.40674 10.8949 1.89543L10.6267 2.16361L10.3585 1.89543C9.8698 1.40674 9.32153 1.04322 8.71366 0.804837C8.10579 0.566455 7.486 0.447266 6.85428 0.447266C6.22257 0.447266 5.59683 0.566455 4.97703 0.804837C4.36915 1.04322 3.82684 1.40674 3.35008 1.89543C2.8614 2.3722 2.49191 2.92048 2.24161 3.54026C2.00322 4.14814 1.88403 4.76793 1.88403 5.39964C1.88403 6.03135 2.00322 6.6571 2.24161 7.2769C2.49191 7.88476 2.8614 8.42708 3.35008 8.90385L10.0903 15.6441C10.2333 15.7991 10.4121 15.8765 10.6267 15.8765C10.8412 15.8765 11.02 15.7991 11.163 15.6441L17.9033 8.90385C18.392 8.42708 18.7554 7.88476 18.9938 7.2769C19.2441 6.6571 19.3692 6.03135 19.3692 5.39964C19.3692 4.76793 19.2441 4.14814 18.9938 3.54026C18.7554 2.93239 18.392 2.38411 17.9033 1.89543Z" />
              </svg>
            </button>
          </div>
          <div className=" w-full flex ml-3 mt-4 justify-start">
            <button className="inline-flex px-60 hover:border text-sm h-12 items-center justify-center rounded-md bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] text-white transition-all duration-300 ease-in-out animate-shimmer hover:bg-white hover:bg-none hover:text-black">
              BUY IT NOW
            </button>
          </div>

          <div className=" flex flex-col gap-1 mt-4 ml-2">
            <h3 className=" text-xs font-light">GET IN TOUCH</h3>
            <div className="flex justify-between">
              <p className=" text-xs font-light text-gray-500">
                For more details about this product
              </p>
              <div className=" flex items-center">
                <div>
                  <img
                    className=" object-cover"
                    src={whatsapp}
                    alt="whatsapp"
                  />
                </div>
                <p className=" text-xs font-bold pl-1">CHAT WITH US</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;

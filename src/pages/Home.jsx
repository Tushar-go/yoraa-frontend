import React from "react";
import Banner from "../assets/banner.jpg";
import VideoCard from "../components/VideoCard";
import TransitionCard from "../components/TransitionCard";
import ProductSlider from "../components/ProductSlider";
import onlineMeeting from "../assets/online-meeting.png";
import fastDelivery from "../assets/fast-delivery.png";
import transfer from "../assets/transfer.png";
import customerSupport from "../assets/customer-support.png";

const Home = () => {
  return (
    <div className="max-h-full w-full relative z-0 bg-gray-50	">
      <div className=" flex justify-center py-4 relative w-full">
        <img className=" rounded-2xl h-4/5 object-cover" src={Banner} alt="" />
        <div className="absolute flex flex-col items-end bottom-28 right-28 text-white gap-3">
          <p className="text-sm text-right font-bold">
            LUXURY RE-IMAGINED, JUST FOR YOU. USE CODE: OFFSET10
          </p>
          <h3 className="text-xl text-right leading-relaxed">
            Be the first to own OFFSET-RTW 2025 Collection. Avail 10% off
            <br />
            on your first purchase.
          </h3>
          <button className="px-14 py-4 mt-6 text-black text-xs bg-white rounded-3xl shadow-md hover:text-white hover:bg-black">
            NEW ARRIVALS
          </button>
        </div>
      </div>
      <div className=" flex flex-col w-full mt-3 ">
        {/* "Filter Categories Buttons" */}
        <div className=" w-full flex justify-center items-center gap-2">
          <button className="px-10 py-3  text-black text-xs bg-white rounded-3xl shadow-md">
            CATEGORY1
          </button>
          <button className="px-10 py-3  text-black text-xs bg-white rounded-3xl shadow-md">
            CATEGORY2
          </button>
          <button className="px-10 py-3  text-black text-xs bg-white rounded-3xl shadow-md">
            CATEGORY3
          </button>
        </div>
        {/* "Cards with" */}
        <div className=" flex mx-7 gap-5 mt-10">
          <ProductSlider />
        </div>
      </div>

      {/* "Video Cards" */}
      <div className="flex flex-col mx-7 mt-16">
        <h3 className="font-light text-lg">YOU X CILVR</h3>
        <div className="flex flex-row gap-5 mt-5">
          <VideoCard />
          <VideoCard />
          <VideoCard />
          <VideoCard />
        </div>
      </div>

      {/* "Products Categories" */}

      <div className="flex flex-col mx-7 mt-16">
        <h3 className="font-light text-lg">EXPLORE NEW COLLECTIONS</h3>
        <div className="flex flex-row gap-5 mt-5">
          <TransitionCard
            btnName={"OUTWEAR"}
            source={
              "https://cilvrstudio.com/cdn/shop/files/1_fa326770-106b-4f8b-bfaf-685d5dad372f.jpg?v=1727245320&width=535"
            }
          />

          <TransitionCard
            btnName={"DRESSES"}
            source={
              "https://cilvrstudio.com/cdn/shop/files/2_8d76fc90-51fa-4e7b-b236-61e17cd952af.jpg?v=1727182189&width=535"
            }
          />
          <TransitionCard
            btnName={"TOPS"}
            source={
              "https://cilvrstudio.com/cdn/shop/files/4_ca8ed1d0-8633-44fb-bc86-b474875bd171.jpg?v=1727240934&width=535"
            }
          />
        </div>
      </div>

      <div className="flex justify-center gap-3 mt-16">
        <div className=" flex flex-col w-80 gap-2">
          <div className=" flex justify-center mb-1">
            <img
              className=" object-cover"
              src={onlineMeeting}
              alt="onlineMeeting"
            />
          </div>
          <h2 className=" text-center text-lg font-light">
            VIRTUAL APPOINTMENT
          </h2>
          <p className=" text-center text-sm  font-light text-gray-500">
            Book your personal styling session with <br /> our head stylist. Set
            up a one-on-one <br /> appointment for fashion advice.
          </p>
        </div>

        <div className=" flex flex-col w-80 gap-2">
          <div className=" flex justify-center mb-1">
            <img
              className=" object-cover"
              src={fastDelivery}
              alt="fastDelivery"
            />
          </div>
          <h2 className=" text-center text-lg font-light">GLOBAL SHIPPING</h2>
          <p className=" text-center text-sm  font-light text-gray-500">
            We offer fast and reliable free shipping <br />
            options both within India, ensuring your <br />
            order reaches you in a timely manner.
          </p>
        </div>
        <div className=" flex flex-col w-80 gap-2">
          <div className=" flex justify-center mb-1">
            <img className=" object-cover" src={transfer} alt="transfer" />
          </div>
          <h2 className=" text-center text-lg font-light">
            RISK-FREE PURCHASE
          </h2>
          <p className=" text-center text-sm  font-light text-gray-500">
            We offer 4 days to exchange or return <br />
            your product, ensuring a seamless <br />
            shopping experience for our valued <br />
            customers.
          </p>
        </div>
        <div className=" flex flex-col w-80 gap-2">
          <div className=" flex justify-center mb-1">
            <img
              className=" object-cover"
              src={onlineMeeting}
              alt="onlineMeeting"
            />
          </div>
          <h2 className=" text-center text-lg font-light">ONLINE ASSISTANCE</h2>
          <p className=" text-center text-sm  font-light text-gray-500">
            Our friendly and knowledgeable customer <br />
            support team is available to assist you <br />
            with any queries.
          </p>
        </div>
      </div>

      <div className="flex flex-col mx-7 mt-16">
        <div className="flex flex-row gap-5 mt-5 w-full mb-3">
          <div className="relative flex-1">
            <div className="mb-2 w-full h-full object-cover rounded-xl overflow-hidden bg-no-repeat">
              <img
                className="w-full h-full object-cover transition duration-500 ease-in-out hover:scale-110"
                src="https://cilvrstudio.com/cdn/shop/files/category_luxe.jpg?v=1727984868&width=1000"
                alt=""
              />
            </div>

            <button className="absolute bottom-8 left-1/2 transform -translate-x-1/2 px-16 py-4 text-black text-xs bg-white rounded-3xl shadow-md">
              LUXE
            </button>
          </div>

          <div className="relative flex-1">
            <div className="mb-2 w-full h-full object-cover rounded-xl overflow-hidden bg-no-repeat">
              <img
                className="w-full h-full object-cover transition duration-500 ease-in-out hover:scale-110"
                src="https://cilvrstudio.com/cdn/shop/files/category_minimals.jpg?v=1727984869&width=1000"
                alt=""
              />
            </div>

            <button className="absolute bottom-8 left-1/2 transform -translate-x-1/2 px-16 py-4 text-black text-xs bg-white rounded-3xl shadow-md">
              MINIMALS
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;

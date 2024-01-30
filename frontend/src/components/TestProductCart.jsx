import React, { useState, useRef } from "react";
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";

const StarRating = ({ rating }) => {
  const stars = Array.from({ length: 5 }, (_, index) =>
    index + 1 <= rating ? (
      <span key={index} className="text-yellow-500">
        ★
      </span>
    ) : (
      <span key={index} className="text-gray-500">
        ☆
      </span>
    )
  );

  return <div className="flex">{stars}</div>;
};

const ProductCard = ({ title, image, description, price }) => {
  const [quantity, setQuantity] = useState(1);
  const payNowButtonRef = useRef(null);

  const handleIncrement = () => {
    setQuantity(quantity + 1);
  };

  const handleDecrement = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const handlePayNowClick = () => {
    // Redirect to http://localhost:3000/
    window.location.href = "http://localhost:3000/";
  };

  return (
    <div className="container w-[500px] h-[500px] bg-blue-50 rounded-lg px-6 py-4 hover:scale-105  transition-all delay-0">
      <div className="container w-full h-full flex flex-col items-center rounded-md">
        <div className="w-[26rem] h-[15rem] my-2 hover:scale-95 transition-all delay-0 ease-in cursor-pointer border-4 rounded-md border-white ">
          <img
            src={image}
            alt={`Product Image for ₹{title}`}
            className="h-full w-full aspect-[3/4] object-cover rounded-md"
          />
        </div>
        <div className="flex flex-col text-center gap-1">
          <h2 className="text-lg font-bold text-center cursor-pointer">
            {title}
          </h2>
          <p className="text-sm text-gray-600">{description}</p>
        </div>
        <div className="flex flex-col items-center my-3">
          <StarRating rating={4} />

          <p className="text-xl font-bold">₹{price}</p>
        </div>

        <div className="flex items-center gap-3">
          <div className="flex items-center gap-2">
            <button onClick={handleDecrement} className="text-xl border-2 border-black rounded-md p-1 hover:border-white hover:bg-black hover:text-white">
              <AiOutlineMinus />
            </button>
            <span className="text-xl">{quantity}</span>
            <button onClick={handleIncrement} className="text-xl border-2 border-black rounded-md p-1 hover:border-white hover:bg-black hover:text-white">
              <AiOutlinePlus />
            </button>
          </div>

          <button ref={payNowButtonRef} onClick={handlePayNowClick} className="bg-pink-600 text-white px-4 py-2 rounded-full">
            Pay now
          </button>
        </div>
      </div>
    </div>
  );
};

const InterviewProductCart = () => {
  return (
    <div className="product-list flex flex-col items-center gap-5 w-[100vw] h-[100vh] container mx-auto">
      <h1 className="text-6xl font-semibold">Mock Test</h1>
      <div className="flex items-center gap-20 ml-[6rem] grid grid-cols-2 ">
      <ProductCard
        title="Mock Test for College Entrance"
        image="../../public/images/Mock Test1.jpeg"
        description=""
        price={99}
      />
       <ProductCard
        title="Mock Test for Job"
        image="../../public/images/Mock Test2.jpeg"
        description=""
        price={99}
      />
      <ProductCard
        title="Mock test for College Entrance"
        image="../../public/images/Mock Test4.jpg"
        description=" "
        price={99}
      />
      <ProductCard
        title="Mock test for PES University Entrance"
        image="../../public/images/MockTest.png"
        description=""
        price={99}
      />
      <ProductCard
        title="Mock test for CUET Entrance"
        image="../../public/images/InterviewProductCart111.png"
        description=""
        price={99}
      />
      <ProductCard
        title="Mock interview for Job"
        image="../../public/images/InterviewProductCart222.png"
        description=""
        price={99}
      />
      </div>
      
    </div>
  );
};

export default InterviewProductCart;

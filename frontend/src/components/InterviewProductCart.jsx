import React, { useState } from "react";
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";
import { Link } from "react-router-dom";

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

const ProductCard = ({ title, image, description, price, addToCartHandler }) => {
  const [quantity, setQuantity] = useState(1);

  const handleIncrement = () => {
    setQuantity(quantity + 1);
  };

  const handleDecrement = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const handlePayNowClick = () => {
    window.location.href = "http://localhost:3000/";
  };

  return (
    <div className="container w-[500px] h-[500px] bg-blue-50 rounded-lg px-6 py-4 hover:scale-105  transition-all delay-0">
      <div className="container w-full h-full flex flex-col items-center rounded-md">
        <div className="w-[26rem] h-[15rem] my-2 hover:scale-95 transition-all delay-0 ease-in cursor-pointer border-4 rounded-md border-white ">
          <img
            src={image}
            alt={`Product Image for ₹${title}`}
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

          <button
            className="bg-pink-600 text-white px-4 py-2 rounded-full"
            onClick={handlePayNowClick}
          >
            Pay Now
          </button>
          
        </div>
      </div>
    </div>
  );
};


const InterviewProductCart = () => {
  return (
    <div className="product-list flex flex-col items-center justify-center gap-8 w-[100vw] h-[100vh] container mx-auto">
    <h1 className="text-6xl font-semibold">Mock Interview</h1>
    <div className="flex items-center gap-14">
      {/* Pass the addToCartHandler function to ProductCard */}
      <ProductCard
        title="Mock Interview for College Entrance"
        image="../../public/images/InterviewProductCart111.png"
        description="Many colleges and universities require applicants to participate in an interview as part of the admissions process."
        price={99}
        addToCartHandler={(quantity) => {
          // Handle adding to cart logic here
          console.log(`Added to cart: Mock Interview for College Entrance - Quantity: ${quantity}`);
        }}
      />
      <ProductCard
        title="Mock interview for Job"
        image="../../public/images/InterviewProductCart222.png"
        description="Job interviews are a standard part of the hiring process."
        price={99}
        addToCartHandler={(quantity) => {
          // Handle adding to cart logic here
          console.log(`Added to cart: Mock interview for Job - Quantity: ${quantity}`);
        }}
      />
    </div>
  </div>
  );
};

export default InterviewProductCart;

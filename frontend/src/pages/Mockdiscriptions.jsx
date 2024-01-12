import React from 'react';
import Offer from '../components/Offer';
import Footer from '../components/Footer';
import ProductCard from "../components/productCard/ProductCard";

const Mockdiscriptions = () => {
  const products = [
    {
      title: "Mock Interview for college Entrance Interview",
      img: "../../public/images/First.jpg",
      category: "interview"
    },
    {
      title: "Mock Interview for Job Interview",
      img: "../../public/images/MockTest.png",
      category: "test"
    },
  
  ];

  return (
    <div>
      <Offer />

      <div className="w-[1200px]" >
              <div  className="container mx-auto w-full flex flex-col items-center">
                <h1 className="text-5xl font-bold text-center mt-6">
                  Our Featured Mock Interview
                </h1>
                {/* Card */}
                <div className="grid grid-cols-2 gap-32 mt-10 bg-gray-300 p-5 rounded-sm" id="#course">

                {products.map((product)=>(
                 <ProductCard key={product.title} product={product}/>
                ))}
                </div>
                
              </div>
            </div>

      <div className='scroll-mx-100 scroll-ms-px-100 bg-blue-600 '>
        {/* Elevate your college entrance and job interview skills with our online mock interview platform.
        Participate in realistic mock interviews conducted on Google Meet and Zoom for an authentic experience.
        Enjoy flexibility with a personalized schedule option, allowing you to choose a date and time that suits your convenience.
        Receive expert feedback to refine your performance and boost your confidence for success.
        Take control of your academic and professional journey by preparing comprehensively with our specialized mock interview sessions.
      lorem500 */}
      </div>
     <div className='flex flex-cal '>
      <div className='w-full flex-grow fixed bottom-4'>
      <Footer />
      </div>
      </div>
    </div>
  );
}

export default Mockdiscriptions;

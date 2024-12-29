import { Button } from '@/components/ui/button';
import React from 'react';

const NewsLetter = () => {
  return (
    <div className="pt-20 pb-20 bg-[#4D2C5E]">
      <div className="text-center">
        {/* Heading */}
        <h1
          className="text-[28px] 
                     sm:text-[38px] 
                     md:text-[50px] 
                     text-white 
                     font-bold 
                     uppercase"
        >
          Subscribe To Our NewsLetter
        </h1>

        {/* Description */}
        <p
          className="text-white 
                       text-opacity-70 
                       w-[90%] 
                       sm:w-[80%] 
                       md:w-[60%] lg:w-[50%] mx-auto mt-4"
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. A
        </p>

        {/* Input Section */}
        <div
          className="flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-2 mt-8 w-[90%] sm:w-[70%] md:w-[60%] lg:w-[50%] mx-auto"
        >
          {/* Input */}
          <input
            type="email"
            placeholder="Email Address"
            className="px-5 py-4 w-full sm:w-[70%] bg-white text-black placeholder:text-gray-500 outline-none rounded-md focus:ring-2 focus:ring-[#FF7426] transition-all duration-200"
          />

          {/* Subscribe Button */}
          <Button
            className="px-6 py-4 w-full sm:w-auto bg-[#FF7426] hover:bg-[#6b4129] transition-all duration-200 rounded-md text-white font-bold"
          >
            Subscribe
          </Button>
        </div>
      </div>
    </div>
  );
};

export default NewsLetter;

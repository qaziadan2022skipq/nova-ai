"use client";

import React from "react";

const AICallLine = () => {
  return (
    <div className="relative w-full flex flex-col items-center text-center px-6 py-16 bg-black text-white">
      {/* Icon Section */}
      <div className="mb-4">
        <img src="/landing/call.png" alt="AI Call Icon" className="w-12 h-12" />
      </div>
      
      {/* Title */}
      <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
        24/7 AI Call Line option
      </h2>
      
      {/* Description */}
      <p className="text-gray-400 text-base sm:text-lg max-w-2xl mb-6">
        24/7 AI Call Line that can be customized for your business. This way employees and their families can 
        get critical information 24/7. This is customizable to the customer and can be set up with a local or 
        toll-free number.
      </p>
      
      {/* Contact Button */}
      <a href="/#contact" className="bg-[#01E0FF] text-black font-semibold py-2 px-6 rounded-lg hover:bg-[#00c4e4]">
        Contact Us
      </a>
    </div>
  );
};

export default AICallLine;

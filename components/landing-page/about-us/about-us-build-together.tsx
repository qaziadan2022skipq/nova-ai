"use client";

import React from "react";

const BuildTogetherSection = () => {
  return (
    <div className="bg-black">
      <div className="relative w-full flex flex-col items-center text-center px-6 sm:px-12 lg:px-32 py-16 bg-black text-white">
        <h3 className="text-sm text-[#01E0FF] uppercase font-semibold mb-2 border-l-4 border-[#01E0FF] pl-2">
          Innovative Solutions for Your Business
        </h3>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight mb-6">
          Let's Build Together
        </h2>
        <p className="text-gray-400 text-sm sm:text-base max-w-3xl">
          Iron Halo AI isn’t just software—it’s a strategic training partner. Whether
          you’re in real estate, manufacturing, or education, training isn’t a
          checkbox—it’s a growth strategy. Let Iron Halo AI help you design a
          smarter, faster, and more engaging way to prepare your people for
          success.
        </p>
        <p className="text-gray-400 text-sm sm:text-base max-w-3xl mt-4">
          Ready to experience what intelligent training can do for your team?
          Contact Us Now to get your personalized demo and pricing breakdown. We
          build intelligent learning systems that grow with you. Our clients use
          Iron Halo AI to:
        </p>
        <button className="mt-6 px-6 py-3 bg-[#01E0FF] text-black font-semibold rounded-lg shadow-md hover:bg-[#00C4E5]">
          Contact Us
        </button>
      </div>
      <div className="flex items-center justify-center mx-2 sm:mx-4 md:mx-6 lg:mx-12 border-t border-gray-500">
        <p className="text-center font-extralight text-[#FFFFFF] py-4 text-xs sm:text-sm">
          &copy;2025 Iron Halo AI. All rights reserved.
        </p>
      </div>
    </div>
  );
};

export default BuildTogetherSection;

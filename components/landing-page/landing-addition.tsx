"use client";

import Image from "next/image";
import React from "react";

const LandingAddition = () => {
  return (
    <div className="relative w-full flex flex-col md:flex-row items-center justify-between px-4 sm:px-8 md:px-16 lg:px-32 py-16 bg-[#000000] text-white">
      {/* Left Section - Text */}
      <div className="w-full md:w-1/2 text-left">
        <h3 className="text-sm text-[#01E0FF] uppercase font-semibold mb-2 border-l-4 border-[#01E0FF] pl-2">
          Educate Employees with On-Demand Content
        </h3>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight">
          Interactive Video Library for Employee Education
        </h2>
        <ul className="mt-6 space-y-3 text-gray-400 text-sm sm:text-base">
          <li className="flex items-start">
            <span className="text-[#01E0FF] text-lg mr-2">●</span> Clear & Engaging: Employees easily understand their benefits.
          </li>
          <li className="flex items-start">
            <span className="text-[#01E0FF] text-lg mr-2">●</span> Fewer Repeated HR Inquiries: Saves HR time by proactively educating staff.
          </li>
          <li className="flex items-center">
            <span className="text-[#01E0FF] text-lg mr-2">●</span> Custom-Branded: Tailored to your company’s benefits offerings.
          </li>
        </ul>
      </div>
      
      {/* Right Section - Image */}
      <div className="w-full md:w-1/2 flex justify-center mt-10 md:mt-0">
        <Image 
          src="/landing-addition.png" 
          width={500} 
          height={300} 
          alt="Interactive Video Library"
          className="w-full max-w-md lg:max-w-lg object-contain"
        />
      </div>
    </div>
  );
};

export default LandingAddition;

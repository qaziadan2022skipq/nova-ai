"use client";

import Image from "next/image";
import React from "react";
import { FaCircle } from "react-icons/fa";

const AboutUsChooseNova = () => {
  return (
    <div className="relative w-full flex flex-col lg:flex-row items-center justify-between px-6 sm:px-12 lg:px-32 py-16 bg-black text-white">
      {/* Left Section - Text Content */}
      <div className="w-full lg:w-1/2 space-y-6">
        <h3 className="text-sm text-[#01E0FF] uppercase font-semibold mb-2 border-l-4 border-[#01E0FF] pl-2">
          Smarter Training, Stronger Teams
        </h3>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight">
          Interactive Video Library for Employee Education
        </h2>
        <p className="text-gray-400 text-sm sm:text-base">
          Nova AI isn’t just software—it’s a strategic training partner. Whether you’re in real estate, manufacturing, education, healthcare, or retail—we build intelligent learning systems that grow with you. Our clients use Nova AI to:
        </p>
        <ul className="space-y-3 text-gray-400 text-sm sm:text-base">
          <li className="flex items-center">
            <FaCircle className="text-[#01E0FF] text-xs mr-2" /> Standardize training across departments and locations
          </li>
          <li className="flex items-center">
            <FaCircle className="text-[#01E0FF] text-xs mr-2" /> Empower employees with 24/7 support and knowledge access
          </li>
          <li className="flex items-center">
            <FaCircle className="text-[#01E0FF] text-xs mr-2" /> Reduce HR inquiries by up to 60%
          </li>
          <li className="flex items-center">
            <FaCircle className="text-[#01E0FF] text-xs mr-2" /> Create lifelong learning cultures that fuel performance
          </li>
        </ul>
        <button className="mt-6 px-6 py-2 bg-[#01E0FF] text-black font-bold rounded-md hover:bg-[#00bcd4]">
          Contact Us
        </button>
      </div>
      
      {/* Right Section - Image */}
      <div className="w-full lg:w-1/2 flex justify-center mt-10 lg:mt-0">
        <Image 
          src="/landing/keybenefit.png" // Update with correct image path
          width={500} 
          height={300} 
          alt="Nova AI Logo"
          className="w-full max-w-md lg:max-w-lg object-contain border-4 border-[#01E0FF] rounded-3xl"
        />
      </div>
    </div>
  );
};

export default AboutUsChooseNova;
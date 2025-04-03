"use client";

import Image from "next/image";
import React from "react";
import { FaCircle } from "react-icons/fa";

const benefits = [
  "Faster, More Consistent Training",
  "Fewer Support Requests & HR Inquiries",
  "On-Demand Learning & Walkthroughs",
  "Improved Employee Performance & Retention",
  "Average savings of 15 hours per week of HR Support",
];

const KeyBenefits = () => {
  return (
    <div className="relative w-full flex flex-col md:flex-row items-center justify-between px-4 sm:px-8 md:px-16 lg:px-32 py-16 bg-black text-white">
      {/* Left Section - Benefits */}
      <div className="w-full md:w-1/2 text-left">
        <h3 className="text-sm text-[#01E0FF] uppercase font-semibold mb-2 border-l-4 border-[#01E0FF] pl-2">
          One-time setup + low per-user cost = Maximum ROI
        </h3>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight mb-6">
          Key Benefits
        </h2>
        <ul className="space-y-3 text-gray-400 text-sm sm:text-base">
          {benefits.map((benefit, index) => (
            <li key={index} className="flex items-center">
              <FaCircle className="text-[#01E0FF] text-xs mr-2" />
              {benefit}
            </li>
          ))}
        </ul>
      </div>
      
      {/* Right Section - Image */}
      <div className="w-full md:w-1/2 flex justify-center mt-10 md:mt-0">
        <Image 
          src="/nav-logo.png" // Update with correct image path
          width={400} 
          height={400} 
          alt="Nova AI Logo"
          className="object-contain border-4 border-[#01E0FF] rounded-3xl"
        />
      </div>
    </div>
  );
};

export default KeyBenefits;

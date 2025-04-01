"use client";

import React from "react";

const AboutUsTitle = () => {
  return (
    <div className="relative w-full flex items-center justify-center py-16 bg-[#01151A] text-[#01E0FF] text-center">
      {/* Background Graphics */}
      <div className="absolute top-0 left-0 w-full h-full flex justify-between items-center pointer-events-none">
        <img src="/landing/about1.png" alt="Left Circuit" className="w-1/6" />
        <img src="/landing/about2.png" alt="Right Circuit" className="w-1/4" />
      </div>
      
      {/* Title */}
      <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold relative z-10">
        About Us
      </h2>
    </div>
  );
};

export default AboutUsTitle;

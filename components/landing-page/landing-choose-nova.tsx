"use client";

import React from "react";
import { FaCog, FaTags, FaThLarge } from "react-icons/fa";

const features = [
  {
    icon: <FaThLarge className="text-[#01E0FF] text-4xl" />, // Grid icon
    title: "Real-Time AI Interactions",
    description: "Simulates human conversations for immersive learning.",
  },
  {
    icon: <FaCog className="text-[#01E0FF] text-4xl" />, // Gear icon
    title: "Fully Customizable",
    description: "Tailor training content, avatars, and tools to your needs.",
  },
  {
    icon: <FaTags className="text-[#01E0FF] text-4xl" />, // Price tag icon
    title: "Scalable & Cost-Effective",
    description: "Train teams across locations with minimal effort.",
  },
];

const WhyChooseNova = () => {
  return (
    <div className="relative w-full flex flex-col items-center text-center px-4 sm:px-8 md:px-16 lg:px-32 py-16 bg-black text-white">
      <h3 className="text-sm text-[#01E0FF] uppercase font-semibold mb-2">
        innovative solution
      </h3>
      <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight mb-12">
        Why Choose Nova AI?
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-6xl">
        {features.map((feature, index) => (
          <div
            key={index}
            className="bg-gray-900 p-6 rounded-2xl flex flex-col items-center text-center shadow-lg"
          >
            <div className="mb-4">{feature.icon}</div>
            <h3 className="text-lg font-semibold text-white mb-2">
              {feature.title}
            </h3>
            <p className="text-gray-400 text-sm">{feature.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WhyChooseNova;
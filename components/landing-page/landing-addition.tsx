"use client";

import Image from "next/image";
import React from "react";

const industries = [
  {
    title: "Real Estate & Sales",
    description:
      "Train agents with interactive objection handling, lead nurturing, and real-time negotiation simulations.",
    image: "/landing/add1.png",
  },
  {
    title: "Education",
    description:
      "Provide AI-powered tutoring, scenario-based learning, and teacher training with virtual classrooms.",
    image: "/landing/add2.png",
  },
  {
    title: "HR & Compliance",
    description:
      "Automate benefits training, onboarding, and policy education while reducing repetitive HR inquiries.",
    image: "/landing/add3.png",
  },
  {
    title: "Auditor & Manufacturing",
    description:
      "Simulate safety protocols, compliance audits, and equipment handling to ensure accuracy and reduce risks.",
    image: "/landing/add4.png",
  },
];

const NovaAIIndustries = () => {
  return (
    <div className="relative w-full flex flex-col items-center text-center px-4 sm:px-8 md:px-16 lg:px-32 py-16 bg-black text-white">
      <h3 className="text-sm text-[#01E0FF] uppercase font-semibold mb-2">
        Iron Halo AI – Smarter Training, Real Results.
      </h3>
      <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight mb-12">
        How Iron Halo AI Works for Your Industry
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 w-full">
        {industries.map((industry, index) => (
          <div
            key={index}
            className="bg-gray-900 p-6 rounded-2xl flex flex-col items-center text-center shadow-lg"
          >
            <Image
              src={industry.image}
              width={250}
              height={150}
              alt={industry.title}
              className="w-full h-auto rounded-lg mb-4"
            />
            <h3 className="text-lg font-semibold text-[#01E0FF]">
              {industry.title}
            </h3>
            <p className="text-gray-400 mt-2 text-sm">{industry.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NovaAIIndustries;

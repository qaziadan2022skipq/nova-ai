"use client";

import Image from "next/image";
import React from "react";

const LandingNarrative = () => {
  return (
    <div className="relative w-full flex flex-col items-center justify-center px-4 sm:px-8 md:px-16 lg:px-32 py-16 bg-black text-white">
      {/* Header Section */}
      <h3 className="text-sm text-center text-[#01E0FF] uppercase font-semibold mb-2">
        Introduction to the Novamind AI Avatar
      </h3>
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center">
        AI Benefits Agent for 24/7 Support
      </h2>
      <p className="text-[#B9B9B9] text-sm sm:text-base text-center max-w-2xl mt-2">
        Stay ahead of the curve and outpace your competition with our advanced AI solutions. In today’s fast-paced business landscape, gaining a competitive edge is crucial for success.
      </p>

      {/* Features Section */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12 w-full max-w-5xl">
        <div className="bg-[#1e1e1e] rounded-lg p-6 text-center border border-gray-700">
          <div className="flex justify-center mb-3">
            <Image src="/narrative1.png" width={40} height={40} alt="Instant Answers" />
          </div>
          <h3 className="text-lg font-semibold">Instant Answers</h3>
          <p className="text-gray-400 text-sm mt-2">
            Employees get real-time responses to benefits-related questions.
          </p>
        </div>

        <div className="bg-[#1e1e1e] rounded-lg p-6 text-center border border-gray-700">
          <div className="flex justify-center mb-3">
            <Image src="/narrative2.png" width={40} height={40} alt="Reduced HR Workload" />
          </div>
          <h3 className="text-lg font-semibold">Reduced HR Workload</h3>
          <p className="text-gray-400 text-sm mt-2">
            Eliminates repetitive inquiries, freeing up HR for strategic tasks.
          </p>
        </div>

        <div className="bg-[#1e1e1e] rounded-lg p-6 text-center border border-gray-700">
          <div className="flex justify-center mb-3">
            <Image src="/narrative3.png" width={40} height={40} alt="Compliance & Accuracy" />
          </div>
          <h3 className="text-lg font-semibold">Compliance & Accuracy</h3>
          <p className="text-gray-400 text-sm mt-2">
            Ensures up-to-date, policy-compliant answers.
          </p>
        </div>
      </div>
    </div>
  );
};

export default LandingNarrative;

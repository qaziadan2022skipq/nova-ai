"use client";
import Image from "next/image";
import React from "react";
import Link from "next/link";

const LandingHero = () => {
  return (
    <div className="min-h-screen w-full flex flex-col md:flex-row items-center justify-center md:justify-between px-6 sm:px-12 lg:px-24 xl:px-32 gap-y-8 md:gap-x-12 text-center md:text-left bg-black text-white">
      {/* Text Content Section */}
      <div className="flex flex-col max-w-lg animate-[flyInleft_0.6s_ease-in-out_0.25s_1]">
        <p className="text-sm sm:text-base font-semibold border-l-4 border-l-[#01E0FF] pl-2 text-[#01E0FF]">Discover AI</p>
        <h1 className="text-xl sm:text-3xl md:text-4xl font-extrabold leading-tight">
          Revolutionizing Employee <br className="hidden sm:block" /> Benefits with AI
        </h1>
        <p className="mt-4 text-sm sm:text-lg font-light text-gray-300">
          Automate HR benefits management with AI-driven support, reducing workload and improving employee satisfaction.
        </p>
        {/* CTA Button */}
        <div className="mt-6 flex justify-center md:justify-start">
          <Link
            href={"#get-started"}
            className="flex items-center gap-2 bg-transparent border border-[#01E0FF] text-[#01E0FF] text-sm sm:text-base px-4 py-2 rounded-full shadow-lg hover:bg-[#00AEEF] hover:text-black transition-transform duration-300 ease-in-out"
          >
            + Get Started
          </Link>
        </div>
      </div>
      {/* Icon Section */}
      <div className="flex-shrink-0 flex justify-center md:justify-end w-full md:w-auto animate-[flyInright_0.6s_ease-in-out_0.25s_1]">
        <div className="relative w-48 h-48 sm:w-72 sm:h-72 md:w-96 md:h-96">
          <Image
            src="/landing-hero.png"
            alt="AI Icon"
            fill
            className="object-contain"
          />
        </div>
      </div>
    </div>
  );
};

export default LandingHero;

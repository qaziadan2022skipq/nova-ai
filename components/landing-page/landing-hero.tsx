"use client";
import Image from "next/image";
import React from "react";
import Link from "next/link";

const LandingHero = () => {
  return (
    <div id="home" className="min-h-screen w-full flex flex-col md:flex-row items-center justify-center md:justify-between px-6 sm:px-12 lg:px-24 xl:px-32 gap-y-4 md:gap-x-12 text-center md:text-left bg-black text-white">
      {/* Text Content Section */}
      <div className="flex flex-col max-w-lg animate-[flyInleft_0.6s_ease-in-out_0.25s_1]">
        <h1 className="text-xl sm:text-3xl md:text-4xl font-extrabold leading-tight">
          Iron Halo AI – Smarter Training <br className="hidden sm:block" /> with
          Real-World Simulation
        </h1>
        <p className="mt-4 text-sm sm:text-lg font-light text-gray-300">
          Revolutionizing training for businesses, schools, and professionals
          with AI-driven avatars, interactive simulations, and fully
          customizable learning platforms.
        </p>
        <ul className="mt-4 text-left text-sm sm:text-lg text-gray-300 space-y-2">
          <li className="flex items-center gap-2">
            <span className="text-[#01E0FF]">●</span> Interactive, real-time
            simulations
          </li>
          <li className="flex items-center gap-2">
            <span className="text-[#01E0FF]">●</span> Personalized learning
            paths
          </li>
          <li className="flex items-center gap-2">
            <span className="text-[#01E0FF]">●</span> Instant coaching &
            feedback
          </li>
        </ul>
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
      {/* AI Avatar Section */}
      <div className="flex-shrink-0 flex justify-center md:justify-end w-full md:w-auto animate-[flyInright_0.6s_ease-in-out_0.25s_1]">
        <div className="relative p-4 border border-[#01E0FF] rounded-lg w-64 h-64 sm:w-72 sm:h-96 md:w-96 md:h-96">
          <Image
            src="/landing/hero.png"
            alt="AI Avatar"
            fill
            className="object-cover rounded-md"
          />
        </div>
      </div>
    </div>
  );
};

export default LandingHero;

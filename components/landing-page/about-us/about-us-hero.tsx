"use client";

import Image from "next/image";
import React from "react";

const AboutUsHero = () => {
  return (
    <div className="relative w-full flex flex-col lg:flex-row items-center justify-between px-6 sm:px-12 lg:px-32 py-16 bg-black text-white">
      {/* Left Section - Text Content */}
      <div className="w-full lg:w-1/2 space-y-8">
        <div>
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">
            Where Intelligent Training Meets <br /> Real-World Simulation
          </h2>
          <p className="text-gray-400 text-sm sm:text-base">
            At Iron Halo AI, we believe the future of training is not just
            digital—it's intelligent. Founded by veterans and built on the
            values of service, precision, and adaptability, Iron Halo AI is
            transforming how businesses, schools, and professionals train and
            grow. Our cutting-edge platform blends AI-powered avatars, immersive
            simulations, and personalized learning to create unforgettable
            training experiences.
          </p>
        </div>
        <hr className="border-gray-700" />
        <div>
          <h3 className="text-xl font-semibold text-white mb-2">Our Mission</h3>
          <p className="text-gray-400 text-sm sm:text-base">
            To revolutionize the way people learn by creating intelligent,
            real-time training experiences that are as dynamic and unique as the
            individuals using them.
          </p>
        </div>
      </div>

      {/* Right Section - AI Avatar Image and Additional Content */}
      <div className="w-full lg:w-1/2 flex flex-col items-center mt-10 lg:mt-0">
        <Image
          src="/landing/hero.png"
          width={400}
          height={400}
          alt="AI Avatar"
          className="border-2 border-[#01E0FF] rounded-lg object-cover"
        />
        <div className="mt-6 text-start max-w-lg">
          <h3 className="text-xl font-semibold text-white mb-2">
            Veteran-Owned and Operated
          </h3>
          <p className="text-gray-400 text-sm sm:text-base">
            As a Veteran-Owned business, discipline, commitment, and excellence
            are in our DNA. We bring military-grade standards to corporate and
            educational training—ensuring consistency, structure, and real-world
            results across every learning environment.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutUsHero;

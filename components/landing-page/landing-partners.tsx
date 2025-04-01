"use client";
import Image from "next/image";
import React from "react";

const PartnersSection = () => {
  return (
    <div className="w-full bg-black text-white py-12 flex flex-col items-center">
      <h2 className="text-2xl sm:text-4xl font-extrabold mb-8">Our Partners</h2>
      <div className="flex flex-wrap justify-center items-center gap-8 sm:gap-12">
        <Image src="/landing/p1.png" alt="Artnet" width={100} height={40} className="object-contain" />
        <Image src="/landing/p2.png" alt="Rapid7" width={100} height={40} className="object-contain" />
        <Image src="/landing/p3.png" alt="Bitly" width={100} height={40} className="object-contain" />
        <Image src="/landing/p4.png" alt="Intuit" width={100} height={40} className="object-contain" />
        <Image src="/landing/p5.png" alt="WTW" width={100} height={40} className="object-contain" />
      </div>
    </div>
  );
};

export default PartnersSection;

"use client";

import React from "react";
import { FaBuilding, FaGraduationCap, FaThLarge, FaUserCog } from "react-icons/fa";

const IndustriesSection = () => {
  return (
    <div className="w-full bg-black text-white py-16 flex flex-col items-center text-center px-6 sm:px-12 lg:px-24">
      {/* Header */}
      <p className="text-sm text-[#01E0FF] font-semibold uppercase mb-2">Industries</p>
      <h2 className="text-2xl sm:text-5xl font-extrabold mb-8">Industries We Empower</h2>

      {/* Industry Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 w-full max-w-5xl">
        <div className="bg-[#012B39] p-6 rounded-lg flex flex-col items-center">
          <FaBuilding className="text-[#01E0FF] text-3xl mb-3" />
          <p className="text-lg font-semibold">Real Estate & Sales</p>
        </div>
        <div className="bg-[#012B39] p-6 rounded-lg flex flex-col items-center">
          <FaGraduationCap className="text-[#01E0FF] text-3xl mb-3" />
          <p className="text-lg font-semibold">Education</p>
        </div>
        <div className="bg-[#012B39] p-6 rounded-lg flex flex-col items-center">
          <FaThLarge className="text-[#01E0FF] text-3xl mb-3" />
          <p className="text-lg font-semibold">HR & Compliance</p>
        </div>
        <div className="bg-[#012B39] p-6 rounded-lg flex flex-col items-center">
          <FaUserCog className="text-[#01E0FF] text-3xl mb-3" />
          <p className="text-lg font-semibold">Auditor & Manufacturing</p>
        </div>
      </div>
    </div>
  );
};

export default IndustriesSection;
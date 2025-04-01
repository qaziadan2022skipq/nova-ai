"use client";

import { Menu, X } from "lucide-react";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { navItems } from "@/constants/landing/landing-constants";

const LandingNavbar = () => {
  const [mobileDrawerOpen, setMobileDrawerOpen] = useState(false);

  const toggleNavbar = () => {
    setMobileDrawerOpen(!mobileDrawerOpen);
  };

  return (
    <nav className="top-0 z-50 py-4 px-6 md:px-12 lg:px-24 xl:px-32 bg-black text-white">
      <div className="flex justify-between items-center">
        {/* Logo */}
        <Link href={"/"}>
          <div className="flex items-center">
            <Image src="/nav-logo.jpg" width={100} height={40} alt="HR Nova AI Logo" />
          </div>
        </Link>

        <ul className="hidden lg:flex ml-14 space-x-8 text-gray-600 tracking-wider text-sm font-bold mx-12">
            {navItems.map((item, index) => (
              <li key={index}>
                <a href={item.href}>{item.label}</a>
              </li>
            ))}
          </ul>
        
        {/* Desktop Menu */}
        <div className="hidden lg:flex items-center space-x-8">
          <Link href="/sign-up" className="text-white text-sm font-light px-4 py-2 border border-[#01E0FF]">
            Create An Account
          </Link>
          <Link
            href="/sign-in"
            className="bg-[#01E0FF] text-black px-4 py-2 text-sm font-medium rounded-none shadow-md hover:opacity-80 transition"
          >
            Sign In
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <div className="lg:hidden">
          <button onClick={toggleNavbar} className="text-white">
            {mobileDrawerOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileDrawerOpen && (
        <div className="absolute top-0 left-0 w-full h-screen bg-black flex flex-col items-center justify-center space-y-6 text-white">
          <Link href="/sign-up" className="text-lg" onClick={toggleNavbar}>
            Create An Account
          </Link>
          <Link
            href="/sign-in"
            className="bg-[#00AEEF] text-black px-6 py-3 text-lg font-medium rounded-md shadow-md hover:opacity-80 transition"
            onClick={toggleNavbar}
          >
            Sign In
          </Link>
          <button onClick={toggleNavbar} className="absolute top-6 right-6">
            <X size={32} />
          </button>
        </div>
      )}
    </nav>
  );
};

export default LandingNavbar;

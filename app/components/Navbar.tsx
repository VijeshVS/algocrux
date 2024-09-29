'use client'

import React, { useState } from "react";
import Link from "next/link";
import { Transition } from "react-transition-group";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false); // State for mobile menu

  const toggleMenu = () => {
    setIsOpen(!isOpen); // Toggle the dropdown menu
  };

  return (
    <>
      <div className="flex justify-between bg-black shadow-sm shadow-gray-900 h-[7vh] py-2 w-screen">
        <div className="font-mono text-2xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r items-center justify-center flex from-yellow-400 to-orange-400 px-4">
          algoCRUX
        </div>

        {/* Links for desktop */}
        <div className="hidden md:flex flex-row space-x-2 md:space-x-6 font-mono px-4 items-center">
          <Link
            href={"/"}
            className="px-2 py-1 rounded-lg border-b-[1px] border-gray-800 hover:scale-x-110 duration-300"
          >
            Tutorials
          </Link>
          <Link
            href={"/"}
            className="px-2 py-1 rounded-lg border-b-[1px] border-gray-800 hover:scale-x-110 duration-300"
          >
            Contest
          </Link>
          <Link
            href={"/"}
            className="bg-gradient-to-br from-white to-white hover:from-yellow-300 hover:to-orange-400 duration-300 text-black px-2 py-1 rounded-md font-bold"
          >
            Login
          </Link>
        </div>
        <div className="md:hidden flex items-center px-4">
          <button onClick={toggleMenu} className="focus:outline-none">
            {/* Hamburger icon */}
            <span className="text-white text-2xl">☰</span>
          </button>
        </div>
      </div>
      <div
        className={`md:hidden flex flex-col items-center justify-around bg-black space-y-2 overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen ? "max-h-[300px]" : "max-h-0"
        }`}
      >
        <Link
          href={"/"}
          className="text-white px-2 py-1 border-b-[1px] border-gray-900 duration-300 hover:bg-gray-700"
          onClick={() => setIsOpen(false)}
        >
          Tutorials
        </Link>
        <Link
          href={"/"}
          className="text-white px-2 py-1 duration-300 border-b-[1px] border-gray-900 hover:bg-gray-700"
          onClick={() => setIsOpen(false)} // Close the menu on click
        >
          Contest
        </Link>
        <Link
          href={"/"}
          className="hover:bg-gray-700 text-white px-2 py-1 rounded-lg font-bold"
          onClick={() => setIsOpen(false)}
        >
          Login
        </Link>
      </div>
    </>
  );
};

export default Navbar;

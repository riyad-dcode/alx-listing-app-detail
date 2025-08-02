import React from "react";
import Link from "next/link";

const Header: React.FC = () => {
  const accommodationTypes = [
    "Rooms",
    "Mansion",
    "Countryside",
    "Apartment",
    "Villa",
    "Cabin"
  ];

  return (
    <header className="bg-white shadow-md p-4">
      <div className="max-w-7xl mx-auto flex items-center justify-between flex-wrap gap-4">
        {/* Logo */}
        <div className="text-2xl font-bold text-blue-600">
          <Link href="/">StayFinder</Link>
        </div>

        {/* Accommodation Types */}
        <nav className="flex gap-4 flex-wrap text-sm md:text-base">
          {accommodationTypes.map((type) => (
            <Link key={type} href={`/#${type.toLowerCase()}`} className="text-gray-700 hover:text-blue-500">
              {type}
            </Link>
          ))}
        </nav>

        {/* Search Bar */}
        <div className="flex flex-1 justify-center">
          <input
            type="text"
            placeholder="Search accommodations..."
            className="w-full max-w-md px-4 py-2 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Auth Buttons */}
        <div className="flex gap-2">
          <Link href="/signin" className="text-gray-700 hover:text-blue-500">Sign In</Link>
          <Link
            href="/signup"
            className="bg-blue-600 text-white px-4 py-2 rounded-full hover:bg-blue-700 transition"
          >
            Sign Up
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
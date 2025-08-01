import React from 'react';

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between px-6 sm:px-12 lg:px-24 xl:px-48 py-4 border-b border-gray-200 bg-white">
      
      {/* Logo and Title */}
      <div className="flex items-center text-lg space-x-2">
        {/* Replace icon with image */}
        <img 
          src="/logos/logo.png" 
          alt="Logo" 
          className="w-8 h-8" // adjust size as needed
        />
        <a href="/" className="text-base font-semibold text-black">
          HackaTrack
        </a>
      </div>

      {/* Navigation Links */}
      <div>
        <a
          href="/about"
          className="text-base text-gray-600 hover:text-black transition-colors"
        >
          About
        </a>
      </div>
    </nav>
  );
};

export default Navbar;

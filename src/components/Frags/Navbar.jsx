import React from 'react'
import { FaGraduationCap } from "react-icons/fa6";


const Navbar = () => {
  return (
    <>
     <nav className="flex items-center justify-between px-50 py-3 border-b border-gray-200 bg-white">
        <div className="flex items-center text-lg space-x-2">
       <FaGraduationCap  className="text-2xl text-black" />
          <span className="text-base font-semibold text-black">Build for You</span>
        </div>
        <div>
          <a
            href="/about"
            className="text-base text-gray-600 hover:text-black transition-colors"
          >
            About
          </a>
        </div>
      </nav>
    </>
  )
}

export default Navbar
import React from 'react';
import { FaLinkedin, FaEnvelope, FaTimes } from 'react-icons/fa';

const About = () => {
  return (
    <div className="min-h-screen  flex items-center justify-center px-4">
      <div className="bg-white rounded-xl shadow-md flex flex-col md:flex-row max-w-4xl w-full overflow-hidden border border-gray-200">
        {/* Left Image */}
        <div className="md:w-[45%] w-full">
          <img
            src="./logos/ava.jpg" 
            alt="arijit"
            className="w-full h-full object-cover rounded-t-xl md:rounded-l-xl md:rounded-tr-none"
          />
        </div>

        {/* Right Content */}
        <div className="p-6 md:w-[55%] w-full text-[14px] text-gray-800 leading-relaxed">
          <p className="text-[15px] font-medium mb-3">about the guy who made this</p>
          <p>what's up, i'm mason. i'm 19 years old and a student at berkeley.</p>
          <p className="mt-3">
            i learned to code during my first semester in college, and since then i've been building nonstop.
          </p>
          <p className="mt-3">
            some of my projects include a{' '}
            <a href="#" className="text-blue-500 underline">library tracking app</a>{' '}
            acquired by uc berkeley, a{' '}
            <a href="#" className="text-blue-500 underline">club ranking website</a>{' '}
            that got 40k users in 3 hours (until someone deleted our db with a sql injection xD), and{' '}
            <a href="#" className="text-blue-500 underline">blackjack meta glasses</a>{' '}
            that count cards for you.
          </p>
          <p className="mt-3">
            i also like to <a href="#" className="text-blue-500 underline">skateboard</a>
          </p>
          <p className="mt-3">
            i started <span className="font-semibold">Build in College</span> because i want to meet other students who are building cool stuff in college (or high school).
          </p>
          <p className="mt-3">
            so, if you have suggestions or just wanna chat, feel free to reach out!
          </p>

          {/* Icons + Button */}
          <div className="flex justify-between items-center mt-6">
            <div className="flex gap-3 text-gray-700 text-[16px]">
              <FaLinkedin className="cursor-pointer hover:text-blue-600" />
              <FaEnvelope className="cursor-pointer hover:text-gray-600" />
              <FaTimes className="cursor-pointer hover:text-red-500" />
            </div>
            <button className="bg-white border border-gray-300 px-4 py-2 rounded-md text-sm text-gray-800 hover:bg-gray-100 transition">
              submit an idea →
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;

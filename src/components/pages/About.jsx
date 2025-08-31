import React from 'react';
import { FaLinkedin, FaEnvelope, FaTimes } from 'react-icons/fa';

const About = () => {
  return (
    <div className="min-h-screen  flex items-center justify-center px-4">
      <div className="bg-white rounded-xl shadow-md flex flex-col md:flex-row max-w-4xl w-full overflow-hidden border border-gray-200">
        <div className="md:w-[45%] w-full">
          <img
            src="./logos/ava.jpg" 
            alt="arijit"
            className="w-full h-full object-cover rounded-t-xl md:rounded-l-xl md:rounded-tr-none"
          />
        </div>

        <div className="p-6 md:w-[55%] w-full text-[14px] text-gray-800 leading-relaxed">
          <p className="text-[15px] font-medium mb-3">about the guy who made this</p>
          <p>what's up, i'm arijit. i'm 21 years old and a student at india.</p>
          <p className="mt-3">
            i learned to code during my first semester in college, and since then i've been building nonstop.
          </p>
          <p className="mt-3">
            some of my projects include a{' '}
            <a href="https://goaltracker-iota.vercel.app/" target='_blank' className="text-blue-500 underline">todo app</a>{' '}
            which landed me an intership offer ,{' '}
            <a href="https://suno-buddy.vercel.app/" target='blank_' className="text-blue-500 underline"> a learning app </a>{' '}
            through visualizing to describe images, extracts embedded text, and reads it aloud using customizable speech synthesis which helped a lot of users to study {' '}
          </p>
          <p className="mt-3">
            i also like to do <a href="#" className="text-blue-500 underline">sketching</a>
          </p>
          <p className="mt-3">
            i started <span className="font-semibold">Build in College</span> because i want to meet other students who are building cool stuff in college (or high school).
          </p>
          <p className="mt-3">
            so, if you have suggestions or just wanna chat, feel free to reach out!
          </p>
          <div className="flex justify-between items-center mt-6">
            <div className="flex gap-3 text-gray-700 text-[16px]">
              <a href='https://www.linkedin.com/in/realarijiiiitttt/' target='_blank' className="cursor-pointer hover:text-blue-600">
                <FaLinkedin />
              </a>
              <a href='' className="cursor-pointer hover:text-gray-600">
                <FaEnvelope />
              </a>
              <a href='https://x.com/arijiiiitttt' target='_blank' className="cursor-pointer hover:text-red-500">
                <FaTimes />
              </a>
            </div>
            <a className="bg-white border border-gray-300 px-4 py-2 rounded-md text-sm text-gray-800 hover:bg-gray-100 transition"
           href='https://forms.gle/aSbmtEYGt86GRkJq8' target='blank_' 
            >
              submit an idea →
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;

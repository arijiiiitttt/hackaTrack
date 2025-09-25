import React from 'react';

const Fooder = () => {
  return (
    <div className="bg-blue-100/50 shadow-md text-black px-6 py-16 md:px-20">
      {/* Top Section */}
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6">
          {/* Left - Avatar + Heading */}
          <div className="flex items-start gap-4">
            <img
              src="/logos/ava.jpg" // Replace this path with your profile image
              alt="Avatar"
              className="w-12 h-12 rounded-full  object-cover"
            />
            <h1 className="text-[2.2rem] md:text-[2.8rem] lg:text-[3rem] Galter leading-tight font-medium">
              Let’s talk about a <br />
              project, collaboration or <br />
              an idea you may have
            </h1>
          </div>

          {/* Right - Button */}
          <div className="pt-4 lg:pt-0">
            <a href='https://forms.gle/aSbmtEYGt86GRkJq8' target='blank_' className="bg-black text-white px-6 py-2 rounded-full  text-sm md:text-lg hover:bg-gray-800 transition">
              Drop me a line
            </a>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-16 border-t pt-6 border-gray-300 text-sm text-gray-700">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 flex-wrap">
            {/* Left */}
            <p className="text-center md:text-left w-full md:w-auto">
              © 2025 Design & Coded with ❤️ by @arijiiiitttt 
            </p>

            {/* Center */}
            <div className="flex justify-center flex-wrap gap-4 w-full md:w-auto text-center">
              <a href="#" className="hover:underline">LinkedIn</a>
              <a href="#" className="hover:underline">Github</a>
              <a href="https://www.instagram.com/thearijiiiitttt_/" target='blank_' className="hover:underline">Instagram</a>
              <a href="#" className="hover:underline">Email</a>
            </div>

            {/* Right */}
            <div className="text-center md:text-right w-full md:w-auto">
              <a href="#top" className="hover:underline">Back to top ↑</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Fooder;

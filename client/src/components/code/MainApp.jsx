import React, { useEffect, useState, useRef } from 'react';
import { FaStar } from 'react-icons/fa';
import { motion, useInView } from 'framer-motion'; // Import motion and useInView

const avatars = [
  'https://i.pravatar.cc/40?img=1',
  'https://i.pravatar.cc/40?img=2',
  'https://i.pravatar.cc/40?img=3',
  'https://i.pravatar.cc/40?img=4',
  'https://i.pravatar.cc/40?img=5',
];

const dynamicWords = ['builders', 'hackers', 'developers', 'designers', 'founders'];

const MainApp = () => {
  const [index, setIndex] = useState(0);
  const ref = useRef(null); // Create a ref for the component
  const isInView = useInView(ref, { once: true }); // Check if the component is in view

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % dynamicWords.length);
    }, 2000); // Change every 2 seconds
    return () => clearInterval(timer);
  }, []);

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        delayChildren: 0.3,
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <motion.div
      ref={ref}
      className="min-h-screen flex items-center justify-center bg-white px-4"
      variants={containerVariants}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
    >
      <motion.div className="text-center max-w-2xl" variants={itemVariants}>
        {/* Avatar and stars */}
        <motion.div
          className="flex flex-col sm:flex-row items-center justify-center gap-3 mb-4"
          variants={itemVariants}
        >
          <div className="flex items-center -space-x-2">
            {avatars.map((src, idx) => (
              <img
                key={idx}
                src={src}
                alt="avatar"
                className="w-8 h-8 rounded-full border-2 border-white"
              />
            ))}
          </div>
          <div className="flex items-center text-yellow-500 text-sm mt-2 sm:mt-0 sm:ml-4">
            {[...Array(5)].map((_, i) => (
              <FaStar key={i} />
            ))}
            <span className="text-gray-700 ml-2">
              Trusted by 500+ college Students
            </span>
          </div>
        </motion.div>

        {/* Heading */}
        <motion.h1
          className="text-4xl sm:text-5xl lg:text-6xl pt-2 tracking-tight"
          variants={itemVariants}
        >
          Find Your Next Hackathon<br />
          <span className="font-extrabold text-black transition-opacity duration-500">
            {dynamicWords[index]}
          </span>
        </motion.h1>

        {/* Subtext */}
        <motion.p
          className="text-gray-600 mt-4 pt-1 text-base sm:text-lg"
          variants={itemVariants}
        >
          Curated free tools, software credits, and fellowships for college builders.<br />
          Everything you need to build without breaking the bank.
        </motion.p>

        {/* Button */}
        <motion.button
          className="mt-6 px-6 py-3 bg-black text-white rounded-md text-sm font-medium hover:bg-gray-800 transition"
          variants={itemVariants}
        >
          View Dashboard →
        </motion.button>
      </motion.div>
    </motion.div>
  );
};

export default MainApp;

import React from "react";
import { motion } from "framer-motion";
import { Typewriter } from 'react-simple-typewriter';
import { useNavigate } from "react-router-dom";

import myImage from "../assest/images/IMG-20241024-WA0025.jpg";

const Home = () => {
  const navigate  = useNavigate();

   const handleContactClick = ()=>{
     navigate('/about#contact-section');
   }

  return (
    <div className="h-screen w-full flex flex-col items-center justify-center bg-gradient-to-br from-gray-900 via-gray-800 to text-white">
      
      {/* Profile Picture with Floating Animation */}
      <motion.div
        initial={{ y: -10 }}
        animate={{ y: 10 }}
        transition={{
          repeat: Infinity,
          repeatType: "reverse",
          duration: 2,
          ease: "easeInOut",
        }}
        className="w-44 h-44 rounded-full overflow-hidden shadow-lg border-4 border-gray-600"
      >
        <img src={myImage} alt="Profile" className="w-full h-full object-cover" />
      </motion.div>

      {/* Welcome Text with Slide & Fade Effect */}
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-4xl font-bold mt-6 text-center"
      >
        Hi, I'm <span className="text-teal-400">Ankush</span> ✌️
      </motion.h1>

      {/* Typing Animation for Role */}
      <motion.h2
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1.2, delay: 0.5 }}
        className="text-2xl mt-4 text-gray-300"
      >
       <Typewriter
  words={['Web Developer', 'Full Stack Developer', 'Tech Enthusiast']}
  loop={0} // Infinite loop
  cursor
  cursorStyle='_'
  typeSpeed={70}
  deleteSpeed={50}
  delaySpeed={1000}
/>
      </motion.h2>

      {/* Subtext */}
      <motion.p
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 1 }}
        className="text-lg mt-4 text-gray-400 text-center px-4"
      >
        Passionate about creating modern web applications with <br />
        <span className="text-teal-300 font-semibold">React, Node.js, Express & MongoDB</span>.
      </motion.p>

      {/* CTA Buttons */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: 1.5 }}
        className="mt-6 flex space-x-4"
      >
        <a
          href="https://github.com/Ankushsv"
          className="bg-teal-500 hover:bg-teal-600 text-white px-6 py-2 rounded-full font-semibold text-lg transition"
        >
          See My Work
        </a>
        <button
           className="border border-gray-300 text-gray-300 px-6 py-2 rounded-full font-semibold text-lg hover:bg-gray-700 transition"
           onClick={handleContactClick}
        >
          Contact Me
        </button>
      </motion.div>
    </div>
  );
};

export default Home;

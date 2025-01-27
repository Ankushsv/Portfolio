import React from "react";
import myImage from "../assest/images/IMG-20241024-WA0025.jpg";
import { motion } from "framer-motion";

const Home = () => {
  return (
    <div className="text-white bg-gradient-to-br from-gray-900 via-gray-800 to- w-full min-h-screen flex items-center justify-center">
      <div className="flex flex-col items-center p-8 md:p-16 space-y-8 max-w-3xl">
        {/* Profile Picture */}
        <motion.div
          className="flex justify-center"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <img src={myImage} alt="Profile" className="h-52 w-52 rounded-full shadow-lg" />
        </motion.div>

        {/* Welcome Text */}
        <motion.div
          className="text-center"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <h1 className="text-4xl font-bold">Welcome to my Portfolio ✌️</h1>
          <p className="text-2xl mt-2">I am a Full-Stack Developer</p>
        </motion.div>

        {/* About Section */}
        <motion.div
          className="text-center text-lg leading-relaxed space-y-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <p>
            I am a full-stack developer with experience in building web applications using
            <span className="font-semibold text-teal-400"> React</span>,
            <span className="font-semibold text-green-400"> Node.js</span>,
            <span className="font-semibold text-gray-300"> Express</span>, and
            <span className="font-semibold text-green-600"> MongoDB</span>.
          </p>
          <p>
            I have a passion for learning new technologies and sharing my knowledge with others.
          </p>
          <p>
            I am currently seeking new opportunities to work on exciting projects and collaborate with talented individuals.
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default Home;

import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  // Animation Variants
  const sectionVariant = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  }; 

  return (
    <div className="bg-gradient-to-br from-gray-900 via-gray-800 to- text-gray-300 min-h-screen py-10 px-4">
      <div className="max-w-4xl mx-auto rounded-lg shadow-lg p-6 text-center">
        <h1 className="text-5xl font-extrabold text-white mb-10">
          About Me
        </h1>

        {/* Introduction */}
        <motion.div
          className="mb-16"
          variants={sectionVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <h2 className="text-3xl font-semibold text-teal-400 mb-4">
            Introduction
          </h2>
          <p className="text-lg leading-8">
            Hello! 👋 My name is <span className="text-white font-bold">Ankush Singh</span>. I am a 
            <span className="text-teal-400 font-semibold"> Web Developer</span> with a passion for creating 
            engaging and impactful web experiences. I’m currently in my 
            <span className="text-teal-400 font-semibold"> 1st year of B.Tech</span> at DTU, pursuing 
            <span className="text-teal-400 font-semibold"> Computer Science</span>. My current focus is on DSA in 
            <span className="text-teal-400 font-semibold"> C++</span>, with a goal to become a 
            <span className="text-teal-400 font-semibold"> Full Stack Developer</span>.
          </p>
        </motion.div>

        {/* Skills */}
        <motion.div
          className="mb-16"
          variants={sectionVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <h2 className="text-3xl font-semibold text-teal-400 mb-4">Skills</h2>
          <p className="text-lg leading-8">
            I am proficient in <span className="text-white font-bold">HTML</span>, 
            <span className="text-white font-bold"> CSS</span>, 
            <span className="text-white font-bold"> JavaScript</span>, 
            <span className="text-white font-bold"> React.js</span>, 
            <span className="text-white font-bold"> Node.js</span>, 
            <span className="text-white font-bold"> C++</span>, and 
            <span className="text-white font-bold"> Python</span>.
          </p>
        </motion.div>

        {/* Experience */}
        <motion.div
          className="mb-16"
          variants={sectionVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <h2 className="text-3xl font-semibold text-teal-400 mb-4">
            Experience
          </h2>
          <p className="text-lg leading-8">
            I’m actively building projects to enhance my portfolio, gaining hands-on 
            experience with web development technologies and collaborating with peers 
            on innovative ideas.
          </p>
        </motion.div>

        {/* Hobbies */}
        <motion.div
          className="mb-16"
          variants={sectionVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <h2 className="text-3xl font-semibold text-teal-400 mb-4">Hobbies</h2>
          <p className="text-lg leading-8">
            In my free time, I enjoy listening to music 🎵 and playing video games 🎮. 
            These activities help me recharge and spark creativity in my work.
          </p>
        </motion.div>

        {/* Contact */}
        <motion.div
          variants={sectionVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <h2 className="text-3xl font-semibold text-teal-400 mb-4">
            Contact
          </h2>
          <p className="text-lg leading-8">
            Feel free to reach out at <a href="mailto:ankushsinghv77@gmail.com" className="text-teal-400 font-semibold underline">ankushsinghv77@gmail.com</a>.
            Connect with me on 
            <a href="https://www.instagram.com/_ankushsingh_v" target="_blank" rel="noopener noreferrer" className="text-teal-400 font-semibold underline mx-2">
              Instagram
            </a> 
            and 
            <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" className="text-teal-400 font-semibold underline ml-2">
              LinkedIn
            </a>.
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default About;

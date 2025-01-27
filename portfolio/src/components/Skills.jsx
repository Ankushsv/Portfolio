import React from "react";
import { FaHtml5, FaCss3Alt, FaJsSquare, FaReact, FaNodeJs } from "react-icons/fa";
import { SiMongodb, SiExpress, SiTailwindcss, SiGit } from "react-icons/si";
import { motion } from "framer-motion";

const Skills = () => {
  const skills = [
    { name: "HTML5", icon: <FaHtml5 className="text-orange-500 text-5xl" /> },
    { name: "CSS3", icon: <FaCss3Alt className="text-blue-500 text-5xl" /> },
    { name: "JavaScript", icon: <FaJsSquare className="text-yellow-400 text-5xl" /> },
    { name: "React", icon: <FaReact className="text-blue-400 text-5xl" /> },
    { name: "Node.js", icon: <FaNodeJs className="text-green-500 text-5xl" /> },
    { name: "MongoDB", icon: <SiMongodb className="text-green-600 text-5xl" /> },
    { name: "Express.js", icon: <SiExpress className="text-gray-500 text-5xl" /> },
    { name: "Tailwind CSS", icon: <SiTailwindcss className="text-teal-400 text-5xl" /> },
    { name: "Git", icon: <SiGit className="text-orange-400 text-5xl" /> },
  ];

  return (
    <div className="bg-gradient-to-br from-gray-900 via-gray-800 to- py-16">
      <h2 className="text-center text-4xl  mb-10 text-white font-extrabold">My Skills</h2>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 px-8 max-w-5xl mx-auto">
        {skills.map((skill, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0 , y: 60}}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: index * 0.1 }}
            className="flex flex-col items-center bg-white p-6 rounded-2xl shadow-lg hover:shadow-2xl "
          >
            {skill.icon}
            <h3 className="mt-4 text-lg font-semibold text-gray-700">{skill.name}</h3>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Skills;

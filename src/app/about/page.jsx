"use client";

import Navbar from "@/components/Navbar";
import { motion } from "framer-motion";
import { 
  FaBook, FaLaptopCode, FaStar, FaRocket, 
  FaLightbulb, FaCode, FaRobot, 
  FaSpaceShuttle, FaCameraRetro 
} from "react-icons/fa";

const fadeVariants = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -20 },
};

export default function About() {
  return (
    <div className="bg-black min-h-screen text-white overflow-x-hidden">
      <Navbar />
      
      <div className="m-10 sm:m-20">
        <motion.h1
          className="text-2xl font-light border-b border-purple-800 pb-3 mb-10 inline-block"
          variants={fadeVariants}
          initial="initial"
          animate="animate"
          exit="exit"
          transition={{ duration: 0.6 }}
        >
          About
        </motion.h1>

        {/* About Me + Interests */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {[
            {
              title: "About Me",
              icon: <FaLightbulb className="text-purple-400" />,
              content: (
                <p className="mt-4 text-gray-300 font-light leading-relaxed">
                  I'm a passionate Full Stack Developer who thrives at the intersection of technology and innovation. 
                  With a background in computer science and a deep curiosity for emerging technologies, I create elegant 
                  solutions that blend functionality with intuitive design. My journey in tech has been driven by a 
                  desire to build tools that make a meaningful impact.
                </p>
              ),
            },
            {
              title: "Interests & Hobbies",
              icon: <FaStar className="text-purple-400" />,
              content: (
                <div className="mt-4 grid grid-cols-2 gap-4 text-gray-300 font-light">
                  {[
                    { icon: <FaCode className="text-purple-400" />, label: "Coding Challenges" },
                    { icon: <FaCameraRetro className="text-purple-400" />, label: "Photography" },
                    { icon: <FaSpaceShuttle className="text-purple-400" />, label: "Astronomy" },
                    { icon: <FaBook className="text-purple-400" />, label: "Sci-Fi Literature" },
                  ].map((item, idx) => (
                    <div key={idx} className="flex items-center gap-2">
                      {item.icon} {item.label}
                    </div>
                  ))}
                </div>
              ),
            },
          ].map((section, idx) => (
            <motion.div
              key={idx}
              className="border border-purple-800/30 rounded p-6 hover:border-purple-400 transition-colors duration-300"
              variants={fadeVariants}
              initial="initial"
              animate="animate"
              exit="exit"
              transition={{ duration: 0.6, delay: idx * 0.2 }}
            >
              <h2 className="text-lg font-light pb-3 flex items-center gap-2 border-b border-purple-800/30">
                {section.icon} {section.title}
              </h2>
              {section.content}
            </motion.div>
          ))}
        </div>

        {/* Learning + Views + Fields */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
          {[
            {
              title: "Current Learning",
              icon: <FaBook className="text-purple-400" />,
              content: (
                <ul className="mt-4 space-y-2 text-gray-300 font-light">
                  <li className="flex items-center gap-2">
                    <span className="text-purple-400">•</span> TypeScript
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-purple-400">•</span> Japanese
                  </li>
                </ul>
              ),
            },
            {
              title: "Views",
              icon: <FaLaptopCode className="text-purple-400" />,
              content: (
                <p className="mt-4 text-gray-300 font-light leading-relaxed">
                  I believe technology should be accessible, ethical, and forward-thinking. 
                  Great software balances innovation with sustainability, and prioritizes
                  user experience without compromising security or performance.
                </p>
              ),
            },
            {
              title: "Fields",
              icon: <FaRocket className="text-purple-400" />,
              content: (
                <ul className="mt-4 space-y-2 text-gray-300 font-light">
                  <li className="flex items-center gap-2">
                    <FaRobot className="text-purple-400" /> Artificial Intelligence
                  </li>
                  <li className="flex items-center gap-2">
                    <FaLaptopCode className="text-purple-400" /> Web Development
                  </li>
                  <li className="flex items-center gap-2">
                    <FaSpaceShuttle className="text-purple-400" /> Space Tech
                  </li>
                </ul>
              ),
            },
          ].map((section, idx) => (
            <motion.div
              key={idx}
              className="border border-purple-800/30 rounded p-6 hover:border-purple-400 transition-colors duration-300"
              variants={fadeVariants}
              initial="initial"
              animate="animate"
              exit="exit"
              transition={{ duration: 0.6, delay: idx * 0.2 }}
            >
              <h2 className="text-lg font-light pb-3 flex items-center gap-2 border-b border-purple-800/30">
                {section.icon} {section.title}
              </h2>
              {section.content}
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}

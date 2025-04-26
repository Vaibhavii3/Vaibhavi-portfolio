"use client";

import { FaLaptopCode, FaTools, FaMapMarkerAlt, FaGlobe, FaCalendarAlt } from "react-icons/fa";
import Navbar from "@/components/Navbar";
import { experiences } from "@/data/experienceData";
import { motion, AnimatePresence } from "framer-motion";

const fadeVariants = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -20 },
};

export default function Experience() {
  return (
    <div className="bg-black min-h-screen text-white overflow-x-hidden">      
      <Navbar />
      
      <div className="m-10 sm:m-20">
        <h1 className="text-2xl font-light border-b border-purple-800 pb-3 mb-10 inline-block">
          Experience
        </h1>

        {/* 🟰 Grid outside AnimatePresence */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence mode="wait">
            {experiences.map((exp, index) => (
              <motion.div
                key={index} 
                variants={fadeVariants}
                initial="initial"
                animate="animate"
                exit="exit"
                transition={{ duration: 0.5, delay: index * 0.1 }} // small delay for each card
                className="border border-purple-800/30 rounded p-5 hover:border-purple-400 transition-colors duration-300"
              >
                <h2 className="text-lg font-light pb-3 border-b border-purple-800/30">
                  {exp.company}
                </h2>

                <div className="mt-4 space-y-3 text-gray-300 font-light">
                  <p className="flex items-center gap-2">
                    <FaLaptopCode className="text-purple-400" /> {exp.role}
                  </p>

                  <p className="flex items-center gap-2">
                    <FaCalendarAlt className="text-purple-400" /> {exp.period}
                  </p>

                  <div>
                    <p className="flex items-start gap-2">
                      <FaTools className="text-purple-400 mt-1" />
                      <span className="flex flex-wrap gap-2">
                        {exp.skills.map((skill, idx) => (
                          <span key={skill + idx} className="text-purple-300">
                            {skill}{idx < exp.skills.length - 1 ? " · " : ""}
                          </span>
                        ))}
                      </span>
                    </p>
                  </div>

                  <p className="flex items-center gap-2">
                    <FaMapMarkerAlt className="text-purple-400" /> {exp.location}
                  </p>

                  <p className="flex items-center gap-2">
                    <FaGlobe className="text-purple-400" /> {exp.type}
                  </p>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}

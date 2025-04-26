"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Navbar from "@/components/Navbar";
import { FaGithub, FaExternalLinkAlt, FaRocket } from "react-icons/fa";
import { projects, skillCategories } from "@/data/projectsData";

const tabs = ["Projects", "Skills", "Technology"];

const fadeVariants = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -20 },
};

export default function Projects() {
  const [activeTab, setActiveTab] = useState("Projects");
  const [selectedTech, setSelectedTech] = useState(null);

  const handleTabClick = (tab) => {
    setActiveTab(tab);
    setSelectedTech(null); // Reset technology filter when switching tabs
  };

  const filteredProjects = selectedTech
    ? projects.filter((p) => p.technologies.includes(selectedTech))
    : projects;

  return (
    <div className="bg-black min-h-screen text-white overflow-x-hidden">
      <Navbar />

      <div className="m-10 sm:m-20">
        {/* Tabs */}
        <div className="flex gap-4 mb-10">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => handleTabClick(tab)}
              aria-pressed={activeTab === tab}
              className={`px-4 py-2 rounded-full ${
                activeTab === tab
                  ? "bg-purple-600 text-white"
                  : "bg-purple-900 text-purple-300"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Content */}
        <AnimatePresence mode="wait">
          {activeTab === "Projects" && (
            <motion.div
              key="projects"
              variants={fadeVariants}
              initial="initial"
              animate="animate"
              exit="exit"
              className="grid grid-cols-1 md:grid-cols-2 gap-6"
            >
              {projects.map((project, index) => (
                <ProjectCard key={index} project={project} />
              ))}
            </motion.div>
          )}

          {activeTab === "Skills" && (
            <motion.div
              key="skills"
              variants={fadeVariants}
              initial="initial"
              animate="animate"
              exit="exit"
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              {skillCategories.map((category, index) => (
                <SkillCard key={index} category={category} />
              ))}
            </motion.div>
          )}

          {activeTab === "Technology" && (
            <motion.div
              key="technology"
              variants={fadeVariants}
              initial="initial"
              animate="animate"
              exit="exit"
            >
              {/* Technology Buttons */}
              <div className="flex flex-wrap justify-center gap-3 mb-10">
                {Array.from(new Set(projects.flatMap((p) => p.technologies))).map((tech) => (
                  <button
                    key={tech}
                    onClick={() => setSelectedTech(tech)}
                    className={`px-4 py-2 rounded-full border ${
                      selectedTech === tech
                        ? "border-purple-400 bg-purple-900/30"
                        : "border-purple-800"
                    } hover:border-purple-400 transition-all duration-300 text-sm`}
                  >
                    {tech}
                  </button>
                ))}
                <button
                  onClick={() => setSelectedTech(null)}
                  className={`px-4 py-2 rounded-full border ${
                    selectedTech === null
                      ? "border-purple-400 bg-purple-900/30"
                      : "border-purple-800"
                  } hover:border-purple-400 transition-all duration-300 text-sm`}
                >
                  All
                </button>
              </div>

              {/* Filtered Projects */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {filteredProjects.map((project, index) => (
                  <ProjectCard key={index} project={project} />
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}

// Reusable components
const ProjectCard = ({ project }) => (
  <div className="border border-purple-800/30 rounded p-6 hover:border-purple-400 transition-colors duration-300">
    <h2 className="text-lg font-light pb-3 flex items-center gap-2 border-b border-purple-800/30">
      <FaRocket className="text-purple-400" /> {project.title}
    </h2>
    <p className="mt-4 text-gray-300 font-light leading-relaxed">{project.description}</p>
    <div className="mt-4 flex flex-wrap gap-2">
      {project.technologies.map((tech, idx) => (
        <span
          key={idx}
          className="text-xs bg-purple-900/30 text-purple-300 px-2 py-1 rounded"
        >
          {tech}
        </span>
      ))}
    </div>
    <div className="mt-6 flex gap-4">
      <a
        href={project.githubLink}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-1 text-purple-400 hover:text-purple-300 transition-colors"
      >
        <FaGithub /> Code
      </a>
      {project.liveLink && (
        <a
          href={project.liveLink}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-1 text-purple-400 hover:text-purple-300 transition-colors"
        >
          <FaExternalLinkAlt /> Live Demo
        </a>
      )}
    </div>
  </div>
);

const SkillCard = ({ category }) => (
  <div className="border border-purple-800/30 rounded p-6 hover:border-purple-400 transition-colors duration-300">
    <h2 className="text-lg font-light pb-3 flex items-center gap-2 border-b border-purple-800/30">
      {category.icon} {category.name}
    </h2>
    <div className="mt-4 flex flex-wrap gap-2">
      {category.skills.map((skill, idx) => (
        <span
          key={idx}
          className="bg-purple-900/20 text-purple-300 px-3 py-1 rounded-full text-sm mb-2"
        >
          {skill}
        </span>
      ))}
    </div>
  </div>
);


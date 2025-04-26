"use client";

import Navbar from "@/components/Navbar";
import { FaGithub, FaExternalLinkAlt, FaCode, FaServer, FaDatabase, FaTools, FaRocket, FaBrain, FaLaptopCode, FaMobile } from "react-icons/fa";
import { useState } from "react";
import { projects, skillCategories } from "@/data/projectsData"
import { motion, AnimatePresence } from "framer-motion"

export default function Projects() {

  const [activeTab, setActiveTab] = useState("Projects");
  const [selectedTech, setSelectedTech] = useState(null);

  const tabs = ["Projects", "Skills", "Technology"];

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

//   return (
    
//     <div className="bg-black min-h-screen text-white overflow-x-hidden">
//       <Navbar />
      
//       <div className="m-10 sm:m-20">
//         {/* Projects Section */}
//         <section>
//           <h1 className="text-2xl font-light border-b border-purple-800 pb-3 mb-10 inline-block">
//             Projects
//           </h1>
          
//           <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
//             {projects.map((project, index) => (
//               <div 
//                 key={index} 
//                 className="border border-purple-800/30 rounded p-6 hover:border-purple-400 transition-colors duration-300"
//               >
//                 <h2 className="text-lg font-light pb-3 flex items-center gap-2 border-b border-purple-800/30">
//                   <FaRocket className="text-purple-400" /> {project.title}
//                 </h2>
                
//                 <p className="mt-4 text-gray-300 font-light leading-relaxed">
//                   {project.description}
//                 </p>
                
//                 <div className="mt-4 flex flex-wrap gap-2">
//                   {project.technologies.map((tech, idx) => (
//                     <span key={idx} className="text-xs bg-purple-900/30 text-purple-300 px-2 py-1 rounded">
//                       {tech}
//                     </span>
//                   ))}
//                 </div>
                
//                 <div className="mt-6 flex gap-4">
//                   <a 
//                     href={project.githubLink} 
//                     target="_blank" 
//                     rel="noopener noreferrer"
//                     className="flex items-center gap-1 text-purple-400 hover:text-purple-300 transition-colors"
//                   >
//                     <FaGithub /> Code
//                   </a>
//                   <a 
//                     href={project.liveLink} 
//                     target="_blank" 
//                     rel="noopener noreferrer"
//                     className="flex items-center gap-1 text-purple-400 hover:text-purple-300 transition-colors"
//                   >
//                     <FaExternalLinkAlt /> Live Demo
//                   </a>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </section>
        
//         {/* Skills Section */}
//         <section>
//           <h1 className="text-2xl font-light border-b border-purple-800 pb-3 mb-10 inline-block">
//             Skills
//           </h1>
          
//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//             {skillCategories.map((category, index) => (
//               <div 
//                 key={index} 
//                 className="border border-purple-800/30 rounded p-6 hover:border-purple-400 transition-colors duration-300"
//               >
//                 <h2 className="text-lg font-light pb-3 flex items-center gap-2 border-b border-purple-800/30">
//                   {category.icon} {category.name}
//                 </h2>
                
//                 <div className="mt-4 flex flex-wrap gap-2">
//                   {category.skills.map((skill, idx) => (
//                     <span key={idx} className="bg-purple-900/20 text-purple-300 px-3 py-1 rounded-full text-sm mb-2">
//                       {skill}
//                     </span>
//                   ))}
//                 </div>
//               </div>
//             ))}
//           </div>
//         </section>
//       </div>
//     </div>
//   );
// }

return (
  <div className="bg-black min-h-screen text-white overflow-x-hidden">
    <Navbar />

    <div className="m-10 sm:m-20">
      {/* Toggle Buttons */}
      <div className="flex gap-4 mb-10">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => handleTabClick(tab)}
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

      {/* Content based on selected tab */}
      <AnimatePresence mode="wait">
      {activeTab === "Projects" && (

        <section>
          <h1 className="text-2xl font-light border-b border-purple-800 pb-3 mb-10 inline-block">
            Projects
          </h1>

          <motion.div
              key="projects"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="grid grid-cols-1 md:grid-cols-1 gap-6"
            >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
            {projects.map((project, index) => (
              <div
                key={index}
                className="border border-purple-800/30 rounded p-6 hover:border-purple-400 transition-colors duration-300"
              >
                <h2 className="text-lg font-light pb-3 flex items-center gap-2 border-b border-purple-800/30">
                  <FaRocket className="text-purple-400" /> {project.title}
                </h2>
                <p className="mt-4 text-gray-300 font-light leading-relaxed">
                  {project.description}
                </p>
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
            ))}
          </div>
            </motion.div>
        </section>
      )}

      {activeTab === "Skills" && (
        <section>
          <h1 className="text-2xl font-light border-b border-purple-800 pb-3 mb-10 inline-block">
            Skills
          </h1>

          <motion.div
              key="skills"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 gap-6"
            >
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skillCategories.map((category, index) => (
              <div
                key={index}
                className="border border-purple-800/30 rounded p-6 hover:border-purple-400 transition-colors duration-300"
              >
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
            ))}
          </div>
            </motion.div>
        </section>
      )}

      {activeTab === "Technology" && (
        <section>
          <h1 className="text-2xl font-light border-b border-purple-800 pb-3 mb-10 inline-block">
            Technology wise Projects
          </h1>

          <motion.div
              key="technology"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
            >

            {/* select Technology  */}
            
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
            {/* Show all technologies available */}
            {Array.from(
              new Set(projects.flatMap((project) => project.technologies))
            ).map((tech, index) => (
              <div
                key={index}
                className="border border-purple-800/30 rounded p-6 hover:border-purple-400 transition-colors duration-300"
              >
                <h2 className="text-lg font-light pb-3 flex items-center gap-2 border-b border-purple-800/30">
                  {tech}
                </h2>
                <div className="mt-4 flex flex-col gap-2">
                  {projects
                    .filter((project) => project.technologies.includes(tech))
                    .map((filteredProject, idx) => (
                      <div key={idx} className="flex flex-col gap-1">
                        <span className="text-purple-300">{filteredProject.title}</span>
                        <a
                          href={filteredProject.liveLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-xs text-purple-400 underline"
                        >
                          {filteredProject.liveLink ? "Live" : ""}
                        </a>
                      </div>
                    ))}
                </div>
              </div>
            ))}
          </div>
            </motion.div>
        </section>
      )}
      </AnimatePresence>
    </div>
  </div>
);
}
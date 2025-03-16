import Navbar from "@/components/Navbar";
import { FaBook, FaLaptopCode, FaStar, FaRocket, FaLightbulb, FaCode, FaRobot, FaSpaceShuttle, FaCameraRetro } from "react-icons/fa";

export default function About() {
  return (
    <div className="bg-black min-h-screen text-white overflow-x-hidden">
      <Navbar />
      
      <div className="m-10 sm:m-20">
        <h1 className="text-2xl font-light border-b border-purple-800 pb-3 mb-10 inline-block">
          About
        </h1>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* About Me */}
          <div className="border border-purple-800/30 rounded p-6 hover:border-purple-400 transition-colors duration-300">
            <h2 className="text-lg font-light pb-3 flex items-center gap-2 border-b border-purple-800/30">
              <FaLightbulb className="text-purple-400" /> About Me
            </h2>
            <p className="mt-4 text-gray-300 font-light leading-relaxed">
              I'm a passionate Full Stack Developer who thrives at the intersection of technology and innovation. With 
              a background in computer science and a deep curiosity for emerging technologies, I create elegant 
              solutions that blend functionality with intuitive design. My journey in tech has been driven by a 
              desire to build tools that make a meaningful impact.
            </p>
          </div>
          
          {/* Interests & Hobbies */}
          <div className="border border-purple-800/30 rounded p-6 hover:border-purple-400 transition-colors duration-300">
            <h2 className="text-lg font-light pb-3 flex items-center gap-2 border-b border-purple-800/30">
              <FaStar className="text-purple-400" /> Interests & Hobbies
            </h2>
            <div className="mt-4 grid grid-cols-2 gap-4 text-gray-300 font-light">
              <div className="flex items-center gap-2">
                <FaCode className="text-purple-400" /> Coding Challenges
              </div>
              <div className="flex items-center gap-2">
                <FaCameraRetro className="text-purple-400" /> 
                Photography
              </div>
              <div className="flex items-center gap-2">
                <FaSpaceShuttle className="text-purple-400" /> Astronomy
              </div>
              <div className="flex items-center gap-2">
                <FaBook className="text-purple-400" /> Sci-Fi Literature
              </div>
            </div>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
          {/* Current Learning */}
          <div className="border border-purple-800/30 rounded p-6 hover:border-purple-400 transition-colors duration-300">
            <h2 className="text-lg font-light pb-3 flex items-center gap-2 border-b border-purple-800/30">
              <FaBook className="text-purple-400" /> Current Learning
            </h2>
            <ul className="mt-4 space-y-2 text-gray-300 font-light">
              <li className="flex items-center gap-2">
                <span className="text-purple-400">•</span> TypeScript
              </li>
              <li className="flex items-center gap-2">
                <span className="text-purple-400">•</span> DevOps
              </li>
              {/* <li className="flex items-center gap-2">
                <span className="text-purple-400">•</span> 
              </li> */}
            </ul>
          </div>
          
          {/* Views */}
          <div className="border border-purple-800/30 rounded p-6 hover:border-purple-400 transition-colors duration-300">
            <h2 className="text-lg font-light pb-3 flex items-center gap-2 border-b border-purple-800/30">
              <FaLaptopCode className="text-purple-400" /> Views
            </h2>
            <p className="mt-4 text-gray-300 font-light leading-relaxed">
              I believe technology should be accessible, ethical, and forward-thinking. 
              Great software balances innovation with sustainability, and prioritizes
              user experience without compromising security or performance.
            </p>
          </div>
          
          {/* Fields */}
          <div className="border border-purple-800/30 rounded p-6 hover:border-purple-400 transition-colors duration-300">
            <h2 className="text-lg font-light pb-3 flex items-center gap-2 border-b border-purple-800/30">
              <FaRocket className="text-purple-400" /> Fields
            </h2>
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
          </div>
        </div>
      </div>
    </div>
  );
}
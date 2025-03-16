import Image from "next/image";
import Navbar from "@/components/Navbar";
import profile from "@/image/v.jpg";
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope } from "react-icons/fa";

export default function Home() {
  return (
    <div className="bg-black min-h-screen text-white overflow-x-hidden">
      <Navbar />
      
      <div className="max-w-7xl mx-auto px-4 py-16 md:py-24 flex flex-col lg:flex-row items-center justify-between gap-12">
        {/* Left Column - Text Content */}
        <div className="lg:w-3/5 space-y-6">
          <h1 className="text-3xl md:text-4xl lg:text-4xl font-light leading-tight">
            <span className="text-white">Code. </span>
            <span className="text-purple-400">AI. </span>
            <span className="text-white">Space. </span>
            <span className="text-purple-400">Shaping the Future.</span>
          </h1>
          
          <div className="space-y-4 text-gray-300 text-lg font-light">
            <p>Hey, I&apos;m Vaibhavi — a Full Stack Developer, AI Enthusiast, and Space Dreamer.</p>
            <p>I love creating sleek, intelligent, and futuristic digital experiences.</p>
            <p>My goal? Innovate. Create. Shape tomorrow, and bring the future to life.</p>
          </div>
          
          <div className="pt-6">
            <p className="text-purple-400 text-xl font-light pb-6">
              Let&apos;s collaborate and build something amazing!
            </p>
            
            <div className="flex flex-wrap gap-4">
              <a 
                href="mailto:vaibhavichaudhari304@gmail.com" 
                className="px-6 py-3 bg-black border border-purple-500 rounded-md text-white hover:bg-purple-900/30 transition-colors duration-300 shadow-md shadow-purple-800/20 flex items-center gap-2"
              >
                <FaEnvelope className="text-purple-400" /> Say Hello 👋
              </a>
              
              <div className="flex items-center gap-4 ml-2">
                <a 
                  href="https://github.com/vaibhavii3" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-gray-400 hover:text-purple-400 transition-colors"
                >
                  <FaGithub size={22} />
                </a>
                <a 
                  href="https://linkedin.com/in/vaibhavi-chaudhari-1b003120b" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-gray-400 hover:text-purple-400 transition-colors"
                >
                  <FaLinkedin size={22} />
                </a>
                {/* <a 
                  href="https://twitter.com/" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-gray-400 hover:text-purple-400 transition-colors"
                >
                  <FaTwitter size={22} />
                </a> */}
              </div>
            </div>
          </div>
        </div>
        
        {/* Right Column - Profile Image */}
        <div className="lg:w-2/5 flex justify-center lg:justify-end">
          <div className="relative rounded-md  p-1 bg-black/50 ">
            <div className="absolute inset-0 border border-purple-500/20 rounded-md blur-md"></div>
            <Image 
              src={profile}
              alt="Profile"
              width={300}
              height={350}
              className="rounded-md object-cover"
              priority
            />
            <div className="p-4 border-t border-purple-800/30">
              <h3 className="text-lg font-light text-white">Vaibhavi Chaudhari</h3>
              <p className="text-purple-400 font-light">Gujarat, India</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
import Navbar from "@/components/Navbar";
import { FaGithub, FaExternalLinkAlt, FaCode, FaServer, FaDatabase, FaTools, FaRocket, FaBrain, FaLaptopCode, FaMobile } from "react-icons/fa";

export default function Projects() {
  const projects = [
    {
      title: "My Porfolio Website",
      description: "A modern, multi-page portfolio built with Next.js showcasing my journey as a developer. It includes sections like About Me, Experience, Projects, Skills, Services, and Contact. Designed to reflect my personality, interests, and current learning path — all wrapped in a clean, responsive UI.",
      technologies: ["Next.js", "CSS/Tailwind"],
      githubLink: "https://github.com/Vaibhavii3/Vaibhavi-portfolio.git",
      liveLink: "https://vaibhavi-porfolio.vercel.app/"
    },
    {
      title: "Weather Map",
      description: "An interactive weather visualization tool that displays real-time weather conditions for various locations. Users can explore temperature, wind speed, humidity, and other meteorological data on a dynamic map.",
      technologies: ["JavaScript"],
      githubLink: "https://github.com/Vaibhavii3/weather-map.git",
      liveLink: "https://weather-map-rose-sigma.vercel.app/"
    },
    {
      title: "Customer churm Analysis and Classification",
      description: "A data-driven project that analyzes customer behavior to predict and classify potential churn. Uses Python for data processing and machine learning, with Power BI for visualizing insights and trends.",
      technologies: ["Python", "Power BI"],
      githubLink: "https://github.com/Vaibhavii3/Customer-Churn-Analysis-and-Classification.git",
      // liveLink: "https://vaibhavi-portfolio.vercel.app"
    },
    {
      title: "Personal Intelligent Voice Assistance",
      description: "A Python-powered AI assistant capable of voice recognition, task automation, and real-time responses.",
      technologies: ["Python"],
      githubLink: "https://github.com/Vaibhavii3/Personal-Intelligence-voice-assistance.git",
      // liveLink: "https://modern-ecommerce.vercel.app"
    },
    {
      title: "Slot Machine Game",
      description: "A fun and interactive slot machine game built with HTML, CSS, and JavaScript. Includes both a web-based GUI version and a terminal-based CLI version. Features balance management, real-time feedback, and a retro-themed UI. Spin the reels and test your luck!",
      technologies: ["JavaScript","HTML", "CSS"],
      githubLink: "https://github.com/Vaibhavii3/Slot-Machine-Game.git",
      liveLink: "https://slot-machine-game-orpin.vercel.app/"
    },
    {
      title: "My Blog Website",
      description: "A dynamic and visually engaging blog platform built using React and Sanity.io. This project showcases articles with rich text, categorized content, and a clean UI. Includes social sharing features and a responsive layout.",
      technologies: ["React","Sanity.io", "CSS"],
      githubLink: "https://github.com/Vaibhavii3/My-Blog-Website.git",
      liveLink: "https://my-blog-website-iota.vercel.app/"
    },
    {
      title: "Sanatan API",
      description: "A minimalist Node.js-powered REST API serving quotes from the Bhagavad Gita in Sanskrit, Hindi, and English. Includes spiritual lessons and real-life applications. Built with a JSON dataset and file-based logic, it's ideal for spiritual apps, extensions, or bots.",
      technologies: ["Nodejs","JSON", "REST"],
      githubLink: "https://github.com/Vaibhavii3/sanatan-api.git",
      liveLink: "https://sanatan-api-sepia.vercel.app/"
    }

  ];

  const skillCategories = [
    {
      name: "Frontend",
      icon: <FaLaptopCode className="text-purple-400" />,
      skills: ["React", "Next.js", "JavaScript", "TypeScript", "HTML5", "CSS3", "Tailwind CSS", "BootStrap", "Framer Motion"]
    },
    {
      name: "Backend",
      icon: <FaServer className="text-purple-400" />,
      skills: ["Node.js", "Express", "REST API"]
    },
    {
      name: "Database & CMS",
      icon: <FaDatabase className="text-purple-400" />,
      skills: ["MongoDB", "Sanity.io"]
    },
    {
      name: "Development Tools",
      icon: <FaTools className="text-purple-400" />,
      skills: ["Git", "GitHub", "VS Code", "Postman", "JSON"]
    },
    {
      name: "Design Tools",
      icon: <FaTools className="text-purple-400" />,
      skills: ["Figma", "Canva"]
    },
    {
      name: "3D Tools",
      icon: <FaTools className="text-purple-400" />,
      skills: ["Blender"]
    },
    // {
    //   name: "AI & Machine Learning",
    //   icon: <FaBrain className="text-purple-400" />,
    //   skills: ["TensorFlow", "PyTorch", "NLP", "OpenAI APIs", "Computer Vision", "Data Analysis"]
    // },
    // {
    //   name: "Mobile & Other",
    //   icon: <FaMobile className="text-purple-400" />,
    //   skills: ["React Native", "Progressive Web Apps", "Responsive Design", "Accessibility", "SEO"]
    // }
  ];

  return (
    
    <div className="bg-black min-h-screen text-white overflow-x-hidden">
      <Navbar />
      
      <div className="m-10 sm:m-20">
        {/* Projects Section */}
        <section>
          <h1 className="text-2xl font-light border-b border-purple-800 pb-3 mb-10 inline-block">
            Projects
          </h1>
          
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
                    <span key={idx} className="text-xs bg-purple-900/30 text-purple-300 px-2 py-1 rounded">
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
                  <a 
                    href={project.liveLink} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center gap-1 text-purple-400 hover:text-purple-300 transition-colors"
                  >
                    <FaExternalLinkAlt /> Live Demo
                  </a>
                </div>
              </div>
            ))}
          </div>
        </section>
        
        {/* Skills Section */}
        <section>
          <h1 className="text-2xl font-light border-b border-purple-800 pb-3 mb-10 inline-block">
            Skills
          </h1>
          
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
                    <span key={idx} className="bg-purple-900/20 text-purple-300 px-3 py-1 rounded-full text-sm mb-2">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
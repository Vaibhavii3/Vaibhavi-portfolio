import Navbar from "@/components/Navbar";
import { FaGithub, FaExternalLinkAlt, FaCode, FaServer, FaDatabase, FaTools, FaRocket, FaBrain, FaLaptopCode, FaMobile } from "react-icons/fa";

export default function Projects() {
  const projects = [
    // {
    //   title: "AI Content Generator",
    //   description: "An application that uses GPT-4 to generate creative content for various purposes.",
    //   technologies: ["React", "Next.js", "OpenAI API", "Tailwind CSS"],
    //   githubLink: "https://github.com/yourusername/ai-content-generator",
    //   liveLink: "https://ai-content-generator.vercel.app"
    // },
    {
      title: "Weather Map",
      description: "An interactive weather visualization tool that displays real-time weather conditions for various locations. Users can explore temperature, wind speed, humidity, and other meteorological data on a dynamic map.",
      technologies: ["JavaScript"],
      githubLink: "https://github.com/yourusername/space-dashboard",
      liveLink: "https://space-dashboard.vercel.app"
    },
    {
      title: "Customer churm Analysis and Classification",
      description: "A data-driven project that analyzes customer behavior to predict and classify potential churn. Uses Python for data processing and machine learning, with Power BI for visualizing insights and trends.",
      technologies: ["Python", "Power BI"],
      githubLink: "https://github.com/yourusername/dev-portfolio",
      liveLink: "https://vaibhavi-portfolio.vercel.app"
    },
    {
      title: "Personal Intelligent Voice Assistance",
      description: "A Python-powered AI assistant capable of voice recognition, task automation, and real-time responses.",
      technologies: ["Python"],
      githubLink: "https://github.com/yourusername/ecommerce-platform",
      liveLink: "https://modern-ecommerce.vercel.app"
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
      skills: ["Node.js", "Express"]
    },
    {
      name: "Database",
      icon: <FaDatabase className="text-purple-400" />,
      skills: ["MongoDB"]
    },
    {
      name: "Development Tools",
      icon: <FaTools className="text-purple-400" />,
      skills: ["Git", "GitHub", "VS Code", "Postman"]
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
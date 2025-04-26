import { FaGithub, FaExternalLinkAlt, FaCode, FaServer, FaDatabase, FaTools, FaRocket, FaBrain, FaLaptopCode, FaMobile } from "react-icons/fa";

export const projects = [
    {
      title: "My Portfolio Website",
      description: "A modern, multi-page portfolio built with Next.js showcasing my journey as a developer. It includes sections like About Me, Experience, Projects, Skills, Services, and Contact. Designed to reflect my personality, interests, and current learning path — all wrapped in a clean, responsive UI.",
      technologies: ["Next.js", "CSS/Tailwind"],
      githubLink: "https://github.com/Vaibhavii3/Vaibhavi-portfolio.git",
      liveLink: "https://vaibhavi-porfolio.vercel.app/",
      category: "Web Development"
    },
    {
      title: "Weather Map",
      description: "An interactive weather visualization tool that displays real-time weather conditions for various locations. Users can explore temperature, wind speed, humidity, and other meteorological data on a dynamic map.",
      technologies: ["JavaScript"],
      githubLink: "https://github.com/Vaibhavii3/weather-map.git",
      liveLink: "https://weather-map-rose-sigma.vercel.app/",
      category: "Web Development"
    },
    {
      title: "Customer Churn Analysis and Classification",
      description: "A data-driven project that analyzes customer behavior to predict and classify potential churn. Uses Python for data processing and machine learning, with Power BI for visualizing insights and trends.",
      technologies: ["Python", "Power BI"],
      githubLink: "https://github.com/Vaibhavii3/Customer-Churn-Analysis-and-Classification.git",
      category: "Data Analysis & Visualization"
    },
    {
      title: "Personal Intelligent Voice Assistant",
      description: "A Python-powered AI assistant capable of voice recognition, task automation, and real-time responses.",
      technologies: ["Python"],
      githubLink: "https://github.com/Vaibhavii3/Personal-Intelligence-voice-assistance.git",
      category: "AI/ML"
    },
    {
      title: "Slot Machine Game",
      description: "A fun and interactive slot machine game built with HTML, CSS, and JavaScript. Includes both a web-based GUI version and a terminal-based CLI version. Features balance management, real-time feedback, and a retro-themed UI. Spin the reels and test your luck!",
      technologies: ["JavaScript", "HTML", "CSS"],
      githubLink: "https://github.com/Vaibhavii3/Slot-Machine-Game.git",
      liveLink: "https://slot-machine-game-orpin.vercel.app/",
      category: "Game Development"
    },
    {
      title: "My Blog Website",
      description: "A dynamic and visually engaging blog platform built using React and Sanity.io. This project showcases articles with rich text, categorized content, and a clean UI. Includes social sharing features and a responsive layout.",
      technologies: ["React", "Sanity.io", "CSS"],
      githubLink: "https://github.com/Vaibhavii3/My-Blog-Website.git",
      liveLink: "https://my-blog-website-iota.vercel.app/",
      category: "Web Development"
    },
    {
      title: "Sanatan API",
      description: "A minimalist Node.js-powered REST API serving quotes from the Bhagavad Gita in Sanskrit, Hindi, and English. Includes spiritual lessons and real-life applications. Built with a JSON dataset and file-based logic, it's ideal for spiritual apps, extensions, or bots.",
      technologies: ["Node.js", "JSON", "REST"],
      githubLink: "https://github.com/Vaibhavii3/sanatan-api.git",
      liveLink: "https://sanatan-api-sepia.vercel.app/",
      category: "API Development"
    }
  ];
  

export const skillCategories = [
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
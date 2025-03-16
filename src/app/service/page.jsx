import Navbar from "@/components/Navbar";
import { FaCode, FaLaptop, FaMobileAlt, FaDatabase, FaRobot, FaRocket, FaTools, FaUsers } from "react-icons/fa";

export default function Services() {
  const services = [
    {
      title: "Web Development",
      icon: <FaLaptop className="text-purple-400" />,
      description: "Custom websites built with modern technologies and frameworks. Responsive, fast, and accessible for all devices.",
      offerings: [
        "Static & Dynamic Websites",
        "Progressive Web Apps (PWA)",
        "Single Page Applications (SPA)",
        "E-commerce Platforms"
      ]
    },
    {
      title: "Full Stack Development",
      icon: <FaCode className="text-purple-400" />,
      description: "End-to-end development solutions covering both frontend and backend, with seamless integration and robust architecture.",
      offerings: [
        "API Development & Integration",
        "Database Design & Management",
        "Authentication & Security",
        "Performance Optimization"
      ]
    },
    // {
    //   title: "Mobile App Development",
    //   icon: <FaMobileAlt className="text-purple-400" />,
    //   description: "Cross-platform mobile applications built with React Native for iOS and Android with native-like performance.",
    //   offerings: [
    //     "iOS & Android Applications",
    //     "Cross-platform Solutions",
    //     "App Maintenance & Updates",
    //     "Mobile UI/UX Design"
    //   ]
    // },
    // {
    //   title: "AI Integration",
    //   icon: <FaRobot className="text-purple-400" />,
    //   description: "Implementing AI capabilities into your applications, from basic automation to complex machine learning solutions.",
    //   offerings: [
    //     "NLP & Chatbot Implementation",
    //     "Data Analysis & Visualization",
    //     "ML Model Integration",
    //     "AI-powered Features"
    //   ]
    // },
    // {
    //   title: "Database Solutions",
    //   icon: <FaDatabase className="text-purple-400" />,
    //   description: "Designing and implementing efficient database architectures for optimal performance and scalability.",
    //   offerings: [
    //     "SQL & NoSQL Databases",
    //     "Data Migration & Transformation",
    //     "Query Optimization",
    //     "Database Security"
    //   ]
    // },
    // {
    //   title: "Technical Consultation",
    //   icon: <FaUsers className="text-purple-400" />,
    //   description: "Expert guidance on technical decisions, architecture planning, and technology stack selection.",
    //   offerings: [
    //     "Architecture Review",
    //     "Technology Stack Recommendations",
    //     "Project Planning & Estimation",
    //     "Code Review & Optimization"
    //   ]
    // }
  ];
  
  const processSteps = [
    {
      number: "01",
      title: "Discovery",
      description: "We start with a comprehensive discussion about your project goals, requirements, and vision."
    },
    {
      number: "02",
      title: "Planning",
      description: "Creating a detailed project roadmap, defining milestones, and selecting the right technologies."
    },
    {
      number: "03",
      title: "Development",
      description: "Building your solution with regular updates and transparent communication throughout."
    },
    {
      number: "04",
      title: "Testing",
      description: "Rigorous quality assurance to ensure your project is robust, secure, and performs optimally."
    },
    {
      number: "05",
      title: "Deployment",
      description: "Smooth transition to production with minimal downtime and maximum reliability."
    },
    {
      number: "06",
      title: "Support",
      description: "Ongoing maintenance and support to keep your project running smoothly and evolving as needed."
    }
  ];

  return (
    <div className="bg-black min-h-screen text-white overflow-x-hidden">
      <Navbar />
      
      <div className="max-w-7xl mx-auto px-4 py-16">
        {/* Header */}
        <h1 className="text-2xl font-light border-b border-purple-800 pb-3 mb-10 inline-block">
          Services
        </h1>
        
        {/* Services Introduction */}
        <div className="mb-16">
          <h2 className="text-xl font-light mb-4">Transforming Ideas into Digital Reality</h2>
          <p className="text-gray-300 max-w-3xl">
            I offer a complete range of services to bring your digital projects to life. From concept to deployment, 
            I combine technical expertise with creative problem-solving to deliver solutions that meet your needs and exceed expectations.
          </p>
        </div>
        
        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="border border-purple-800/30 rounded-md p-6 hover:border-purple-400 transition-colors duration-300"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="text-xl">
                  {service.icon}
                </div>
                <h3 className="text-lg font-light">{service.title}</h3>
              </div>
              
              <p className="text-gray-300 mb-4 font-light">
                {service.description}
              </p>
              
              <ul className="space-y-2">
                {service.offerings.map((item, idx) => (
                  <li key={idx} className="flex items-center gap-2 text-gray-300 font-light">
                    <span className="text-purple-400">•</span> {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        
        {/* Process Section */}
        <div className="mb-16">
          <h2 className="text-xl font-light mb-10">My Process</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {processSteps.map((step, index) => (
              <div 
                key={index} 
                className="border border-purple-800/30 rounded-md p-6 hover:border-purple-400 transition-colors duration-300"
              >
                <div className="text-3xl font-light text-purple-400 mb-3">
                  {step.number}
                </div>
                <h3 className="text-lg font-light mb-2">{step.title}</h3>
                <p className="text-gray-300 font-light">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
        
        {/* CTA Section */}
        <div className="border border-purple-800/30 rounded-md p-8 hover:border-purple-400 transition-colors duration-300 text-center">
          <h2 className="text-xl font-light mb-4">Ready to Transform Your Idea?</h2>
          <p className="text-gray-300 max-w-2xl mx-auto mb-6">
            Let's discuss how I can help bring your project to life with customized solutions tailored to your specific needs.
          </p>
          <a 
            href="/contact" 
            className="inline-block px-6 py-3 bg-black border border-purple-500 rounded-md text-white hover:bg-purple-900/30 transition-colors duration-300 shadow-md shadow-purple-800/20"
          >
            Get in Touch
          </a>
        </div>
      </div>
    </div>
  );
}
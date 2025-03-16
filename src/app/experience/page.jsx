import { FaLaptopCode, FaTools, FaMapMarkerAlt, FaGlobe, FaCalendarAlt } from "react-icons/fa";
import Navbar from "@/components/Navbar";

export default function Experience() {
  const experiences = [
    {
      company: "Business Web-Solution",
      role: "Full Stack Developer",
      skills: ["React", "Node.js", "MongoDB", "Tailwind"],
      location: "New Delhi",
      type: "Remote",
      period: "May 2024 - Aug 2024"
    },
    {
      company: "Toshal Infotech Pvt. Ltd.",
      role: "Web Designer",
      skills: ["HTML5", "JavaScript", "CSS", "Bootstrap", "SASS"],
      location: "Surat",
      type: "On-site",
      period: "Jan 2024 - Apr 2024"
    },
    {
      company: "Edunet Foundation",
      role: "Internship",
      skills: ["Internet of Things (IOT)", "Kali Linux", "SAP Analytics Cloud", "Cybersecurity", "Sensors", "Data Visualisation", "Microsoft Power BI"],
      location: "Bardoli",
      type: "Onsite",
      period: "Jul 2023 - Aug 2023"
    },
    {
      company: "Sparks To Ideas",
      role: "Python Intern",
      skills: ["Python"],
      location: "Ahmedabad",
      type: "Remote",
      period: "Jun 2023 - Jun 2023"
    }
  ];

  return (
    <div className="bg-black min-h-screen text-white overflow-x-hidden">      
        <Navbar/>
      
      <div className="m-10 sm:m-20">
        <h1 className="text-2xl font-light border-b border-purple-800 pb-3 mb-10 inline-block">
          Experience
        </h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {experiences.map((exp, index) => (
            <div 
              key={index} 
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
                        <span key={idx} className="text-purple-300">
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
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
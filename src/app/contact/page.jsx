"use client";

import { useRef, useState } from "react";
import { FaEnvelope, FaGithub, FaLinkedin, FaDiscord } from "react-icons/fa";
import Navbar from "@/components/Navbar";

export default function Contact() {
  const form = useRef();
  const [isSending, setIsSending] = useState(false);
  const [message, setMessage] = useState("");

  const sendEmail = async (e) => {
    e.preventDefault();
    setIsSending(true);
    setMessage("");

  // Ensure form contains the user's email for reply_to
  const formData = new FormData(form.current);
  const data = Object.fromEntries(formData.entries());
  // emailData.reply_to = emailData.user_email;

  // console.log("Email Data Sent:", emailData);

    try {

      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });

      const result = await res.json();
      setMessage(result.message);

      if (res.ok) form.current.reset();
    } catch (err) {
      console.error(err);
      setMessage('Something went wrong. Please try again later.');
    }
    setIsSending(false);
  };

  return (
    <div className="bg-black min-h-screen text-white overflow-x-hidden">
      <Navbar />
      
      <div className="max-w-4xl mx-auto px-4 py-16">
        <h1 className="text-2xl font-light border-b border-purple-800 pb-3 mb-10 inline-block">
          Contact
        </h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* Contact Form */}
          <div className="border border-purple-800/30 rounded-md p-6 hover:border-purple-400 transition-colors duration-300">
            <h2 className="text-lg font-light mb-6">Get in touch</h2>
            
            <form ref={form} onSubmit={sendEmail} className="space-y-5">
              <div>
                <input 
                  name="from_name"
                  type="text" 
                  className="w-full p-3 border border-purple-800/30 rounded-md text-white bg-black/50 focus:outline-none focus:border-purple-400 transition-colors" 
                  placeholder="Name" 
                  required 
                />
              </div>
              
              <div>
                <input 
                  name="reply_to"
                  type="email" 
                  className="w-full p-3 border border-purple-800/30 rounded-md text-white bg-black/50 focus:outline-none focus:border-purple-400 transition-colors" 
                  placeholder="Email" 
                  required 
                />
              </div>

              {/* Hidden Input to Ensure Reply-To Works */}
              {/* <input type="hidden" name="reply_to" value="" /> */}
              
              <div>
                <input 
                  name="title"
                  type="text" 
                  className="w-full p-3 border border-purple-800/30 rounded-md text-white bg-black/50 focus:outline-none focus:border-purple-400 transition-colors" 
                  placeholder="Subject" 
                />
              </div>
              
              <div>
                <textarea 
                  name="message"
                  rows="5" 
                  className="w-full p-3 border border-purple-800/30 rounded-md text-white bg-black/50 focus:outline-none focus:border-purple-400 transition-colors" 
                  placeholder="Your message" 
                  required 
                />
              </div>
              
              <button 
                type="submit" 
                className="w-full bg-black border border-purple-500 rounded-md py-3 px-4 text-white hover:bg-purple-900/30 transition-colors duration-300 shadow-md shadow-purple-800/20"
                disabled={isSending}
              >
                {isSending ? "Sending..." : "Send Message" }
              </button>
              {message && <p className="text-sm text-center mt-2 text-purple-400"> {message} </p>}
            </form>
          </div>
          
          {/* Connect Section */}
          <div className="space-y-6">
            <div className="border border-purple-800/30 rounded-md p-6 hover:border-purple-400 transition-colors duration-300">
              <h2 className="text-lg font-light mb-6">Let's connect</h2>
              
              <div className="flex justify-center gap-6">
                <a 
                  href="https://github.com/vaibhavii3" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-purple-400 transition-colors transform hover:scale-110 duration-300"
                >
                  <FaGithub size={24} />
                </a>
                <a 
                  href="https://linkedin.com/in/vaibhavi-chaudhari-1b003120b" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-purple-400 transition-colors transform hover:scale-110 duration-300"
                >
                  <FaLinkedin size={24} />
                </a>
                <a 
                  href="mailto:vaibhavichaudhari304@gmail.com"
                  className="text-gray-400 hover:text-purple-400 transition-colors transform hover:scale-110 duration-300"
                >
                  <FaEnvelope size={24} />
                </a>
              </div>
            </div>
            
            <div className="border border-purple-800/30 rounded-md p-6 hover:border-purple-400 transition-colors duration-300">
              <h2 className="text-lg font-light mb-6">Contact info</h2>
              
              <div className="space-y-4 text-gray-300">
                <p className="flex items-center gap-3">
                  <FaEnvelope className="text-purple-400" />
                  <a href="mailto:vaibhavichaudhari304@gmail.com" className="hover:text-purple-400 transition-colors">
                    vaibhavichaudhari304@gmail.com
                  </a>
                </p>
                <p className="flex items-center gap-3">
                  <FaDiscord className="text-purple-400" />
                  <span></span>
                </p>
              </div>
            </div>
            
            <div className="border border-purple-800/30 rounded-md p-6 hover:border-purple-400 transition-colors duration-300">
              <h2 className="text-lg font-light mb-2">Currently available for</h2>
              <ul className="list-disc pl-5 text-gray-300 space-y-1">
                <li>Full-time opportunities</li>
                <li>Freelance projects</li>
                <li>Collaborative research</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
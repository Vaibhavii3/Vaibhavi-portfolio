'use client';

import Link from 'next/link';
import { useState } from 'react';
import { FiMenu, FiX } from 'react-icons/fi';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="w-screen flex justify-center">
      {/* Wrapper */}
      <div className="border-none shadow-md shadow-purple-800 rounded-full px-4 py-3 max-w-6xl flex items-center justify-center">
    

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-10 p-4 items-center">
          <NavItem href="/" className="p-2">Home</NavItem>
          <NavItem href="/about" className="p-2">About</NavItem>
          <NavItem href="/experience" className="p-2">Experience</NavItem>
          <NavItem href="/projects" className="p-2">Projects</NavItem>
          <NavItem href="/service" className="p-2">Service</NavItem>
          <NavItem href="/contact" className="p-2">Let’s Connect</NavItem>
        </ul>

        {/* Mobile Toggle */}
        <button onClick={toggleMenu} className="md:hidden p-2 focus:outline-none">
          {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-lg flex flex-col items-center justify-center space-y-6 text-white text-lg">
          <NavItem href="/" onClick={toggleMenu}>Home</NavItem>
          <NavItem href="/about" onClick={toggleMenu}>About</NavItem>
          <NavItem href="/experience" onClick={toggleMenu}>Experience</NavItem>
          <NavItem href="/projects" onClick={toggleMenu}>Projects</NavItem>
          <NavItem href="/service" onClick={toggleMenu}>Service</NavItem>
          <NavItem href="/contact" onClick={toggleMenu}>Let’s Connect</NavItem>
        </div>
      )}
    </nav>
  );
}

function NavItem({ href, children, onClick }) {
  return (
      <Link
        href={href}
        onClick={onClick}
        className="hover:text-purple-400 transition duration-300"
      >
        {children}
      </Link>
    
  );
}

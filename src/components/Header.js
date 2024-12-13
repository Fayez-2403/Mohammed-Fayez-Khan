import React from 'react';
import { Link } from 'react-scroll';

const Header = () => {
  return (
    <header className="bg-gray-900 text-white py-4 shadow-lg fixed w-full z-10">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold">
          <Link to="about" smooth={true} duration={500} className="cursor-pointer">
            Mohammad Fayez Khan
          </Link>
        </h1>
        <nav className="flex space-x-6">
          <Link to="about" smooth={true} duration={500} className="hover:text-blue-400 cursor-pointer">
            About
          </Link>
          <Link to="education" smooth={true} duration={500} className="hover:text-blue-400 cursor-pointer">
            Education
          </Link>
          <Link to="skills" smooth={true} duration={500} className="hover:text-blue-400 cursor-pointer">
            Skills
          </Link>
          <Link to="experience" smooth={true} duration={500} className="hover:text-blue-400 cursor-pointer">
            Experience
          </Link>
          <Link to="projects" smooth={true} duration={500} className="hover:text-blue-400 cursor-pointer">
            Projects
          </Link>
          <Link to="hire-me" smooth={true} duration={500} className="hover:text-blue-400 cursor-pointer">
            HireMe
          </Link>
          <Link to="contact" smooth={true} duration={500} className="hover:text-blue-400 cursor-pointer">
            Contact
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;

import { useState } from "react";
import { HiMenu, HiX } from "react-icons/hi";
import { Link } from "react-scroll";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-black text-white sticky top-0 z-50 shadow-md">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">

        {/* Logo */}
        <h1 className="text-2xl font-bold tracking-wide">
          Agrawal Jay<span className="text-blue-500"></span>
        </h1>

        {/* Desktop Menu */}
        <nav className="hidden md:flex space-x-8 text-sm font-medium">
          <Link to="/" smooth={true} duration={500}className="hover:text-blue-400 transition">Home</Link>  
          <Link to="about" smooth={true} duration={500} className="hover:text-blue-400 transition">About</Link>
          <Link to="project" smooth={true} duration={500} className="hover:text-blue-400 transition">Project</Link>
          <Link to="skills"  smooth={true} duration={500} className="hover:text-blue-400 transition">Technical skills</Link>  
        </nav>

        {/* Mobile Icon */}
        <div className="md:hidden text-2xl">
          <button onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <HiX /> : <HiMenu />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-gray-800 px-6 pb-4 space-y-3 text-sm font-medium">
          <Link to="/" smooth={true} duration={500} className="hover:text-blue-400 transition">Home</Link>  
          <Link to="about" smooth={true} duration={500} className="hover:text-blue-400 transition">About</Link>
          <Link to="project"  smooth={true} duration={500} className="hover:text-blue-400 transition">Project</Link>
          <Link to="contact"  smooth={true} duration={500} className="hover:text-blue-400 transition">Contact</Link>
          <Link to="skills"  smooth={true} duration={500} className="hover:text-blue-400 transition">Technical skills</Link>  
        </div>
      )}
    </header>
  );
};

export {Header};

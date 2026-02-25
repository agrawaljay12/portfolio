import { useState } from "react";
import { HiMenu, HiX } from "react-icons/hi";
import { Link } from "react-scroll";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-black text-white sticky top-0 z-50 shadow-md">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        
        {/* Logo */}
        <h1 className="text-2xl font-bold tracking-wide cursor-pointer">
          Agrawal Jay
        </h1>

        {/* Desktop Menu */}
        <nav className="hidden md:flex space-x-8 text-sm font-medium">
          <Link to="home" smooth duration={500} className="cursor-pointer hover:text-blue-400 transition">
            Home
          </Link>
          <Link to="about" smooth duration={500} className="cursor-pointer hover:text-blue-400 transition">
            About
          </Link>
          <Link to="project" smooth duration={500} className="cursor-pointer hover:text-blue-400 transition">
            Project
          </Link>
          <Link to="skills" smooth duration={500} className="cursor-pointer hover:text-blue-400 transition">
            Technical Skills
          </Link>
        </nav>

        {/* Mobile Toggle Button */}
        <div className="md:hidden text-2xl">
          <button onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <HiX /> : <HiMenu />}
          </button>
        </div>
      </div>

      {/* Mobile Vertical Menu */}
      {isOpen && (
        <div className="md:hidden bg-black border-t border-gray-700">
          <div className="flex flex-col space-y-4 px-6 py-6 text-base font-medium">
            
            <Link
              to="home"
              smooth
              duration={500}
              onClick={() => setIsOpen(false)}
              className="cursor-pointer hover:text-blue-400 transition"
            >
              Home
            </Link>

            <Link
              to="about"
              smooth
              duration={500}
              onClick={() => setIsOpen(false)}
              className="cursor-pointer hover:text-blue-400 transition"
            >
              About
            </Link>

            <Link
              to="project"
              smooth
              duration={500}
              onClick={() => setIsOpen(false)}
              className="cursor-pointer hover:text-blue-400 transition"
            >
              Project
            </Link>

            <Link
              to="skills"
              smooth
              duration={500}
              onClick={() => setIsOpen(false)}
              className="cursor-pointer hover:text-blue-400 transition"
            >
              Technical Skills
            </Link>

            <Link
              to="contact"
              smooth
              duration={500}
              onClick={() => setIsOpen(false)}
              className="cursor-pointer hover:text-blue-400 transition"
            >
              Contact
            </Link>

          </div>
        </div>
      )}
    </header>
  );
};

export { Header };
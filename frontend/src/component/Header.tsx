import { useState } from "react";
import { HiMenu, HiX } from "react-icons/hi";

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
          <a href="#home" className="hover:text-blue-400 transition">Home</a>
          <a href="#about" className="hover:text-blue-400 transition">About</a>
          <a href="#projects" className="hover:text-blue-400 transition">Projects</a>
          <a href="#contact" className="hover:text-blue-400 transition">Contact</a>
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
          <a href="#home" className="block hover:text-blue-400">Home</a>
          <a href="#about" className="block hover:text-blue-400">About</a>
          <a href="#projects" className="block hover:text-blue-400">Projects</a>
          <a href="#contact" className="block hover:text-blue-400">Contact</a>
        </div>
      )}
    </header>
  );
};

export {Header};

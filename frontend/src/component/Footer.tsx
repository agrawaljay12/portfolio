import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";
import {Link } from "react-scroll";

const Footer = () => {
  return (
    <footer className="bg-black text-gray-300">
      <div className="max-w-7xl mx-auto px-6 py-12">
        
        {/* Grid Container */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

          {/* About Section */}
          <div>
            <h2 className="text-2xl font-bold text-white mb-4">
              Agrawal Jay
            </h2>
            <p className="text-sm leading-6">
              Full Stack Developer specializing in React, FastAPI, and modern web technologies.
              Building scalable and user-friendly web applications.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-semibold text-white mb-4">
              Quick Links
            </h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/" smooth={true} duration={500}>
                  Home
                </Link>
              </li>
               <li>
                <Link to="about" smooth={true} duration={500}>
                    About
                </Link>
              </li>
               <li>
                <Link to="project" smooth={true} duration={500}>
                  Project
                </Link>
              </li>
              <li>
                <Link to="contact" smooth={true} duration={500}>
                  Contact
                </Link>
              </li>
              <li>
                <Link to="skills" smooth={true} duration={500}>
                  Technical Skills
                </Link>
              </li>
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h3 className="text-xl font-semibold text-white mb-4">
              Connect Us
            </h3>
            <div className="flex space-x-4 text-xl">
                <Link to="https://github.com/agrawaljay12" className="hover:text-white transition">
                    <FaGithub />
                </Link>
    
                <Link to="https://www.instagram.com/agrawal_jay_98?igsh=bmZxYjV1cGJybjN2" className="hover:text-white transition">
                    <FaInstagram />
                </Link>

              <Link to="https://www.linkedin.com/in/jay-agrawal-a29654260?utm_source=share_via&utm_content=profile&utm_medium=member_android" className="hover:text-white transition">
                <FaLinkedin />
              </Link>

            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700 mt-10 pt-6 text-center text-sm">
          &copy; {new Date().getFullYear()} Jay Agrawal. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export {Footer};

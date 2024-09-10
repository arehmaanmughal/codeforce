import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa"; // Importing icons for the drawer toggle

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDrawer = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-white shadow-md py-4 px-4">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-xl font-bold text-gray-800">CodeForce</h1>

        {/* Drawer toggle button, visible only on small screens */}
        <div className="sm:hidden">
          <button onClick={toggleDrawer} className="flex items-center">
            <FaBars size={24} />
          </button>
        </div>

        {/* Links for large screens */}
        <ul className="hidden sm:flex space-x-6 text-gray-800">
          <li>
            <Link to="">Services</Link>
          </li>
          <li>
            <Link to="">Portfolio</Link>
          </li>
          <li>
            <Link to="">About</Link>
          </li>
          <li>
            <Link to="">Contact</Link>
          </li>
        </ul>
      </div>

      {/* Drawer menu for small screens */}
      <div
        className={`fixed top-0 right-0 h-screen w-3/4 bg-white shadow-md transition-transform duration-300 ease-in-out ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex justify-end p-4">
          <button onClick={toggleDrawer}>
            <FaTimes size={24} />
          </button>
        </div>
        <ul className="flex flex-col items-center space-y-4 py-6 text-gray-800">
          <li>
            <Link to="" onClick={toggleDrawer}>
              Services
            </Link>
          </li>
          <li>
            <Link to="" onClick={toggleDrawer}>
              Portfolio
            </Link>
          </li>
          <li>
            <Link to="" onClick={toggleDrawer}>
              About
            </Link>
          </li>
          <li>
            <Link to="" onClick={toggleDrawer}>
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Header;

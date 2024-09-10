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
          <button onClick={toggleDrawer}>
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
        className={`sm:hidden flex flex-col items-center py-6 bg-white absolute h-screen w-1/2 top-0 right-0 shadow-md transition-transform ${
          isOpen ? "transform translate-y-0" : "transform -translate-y-full"
        }`}
      >
        <button onClick={toggleDrawer}>
          <FaTimes size={24} />
        </button>
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

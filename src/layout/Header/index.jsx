import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa"; // Importing icons for the drawer toggle

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDrawer = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="shadow-md py-4 px-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link className="text-xl font-bold tracking-wider text-slate-50">
          Code<span className="text-orange-600">Force</span>
        </Link>

        {/* Drawer toggle button, visible only on small screens */}
        <div className="sm:hidden">
          <button onClick={toggleDrawer} className="flex items-center">
            <FaBars size={24} color="rgb(248 250 252)"/>
          </button>
        </div>

        {/* Links for large screens */}
        <ul className="hidden sm:flex space-x-6 text-slate-50 ">
          <li>
            <Link to="" className="hover:border-b-2 border-orange-600 pb-2">Services</Link>
          </li>
          <li>
            <Link to="" className="hover:border-b-2 border-orange-600 pb-2">Portfolio</Link>
          </li>
          <li>
            <Link to="" className="hover:border-b-2 border-orange-600 pb-2">About</Link>
          </li>
          <li>
            <Link to="" className="hover:border-b-2 border-orange-600 pb-2">Contact</Link>
          </li>
        </ul>
      </div>

      {/* Drawer menu for small screens */}
      <div
        className={`bg-slate-800 fixed top-0 right-0 h-screen w-3/4 shadow-md transition-transform duration-300 ease-in-out ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex justify-end p-4">
          <button onClick={toggleDrawer}>
            <FaTimes size={24} color="rgb(248 250 252)" />
          </button>
        </div>
        <ul className="flex flex-col items-center space-y-4 py-6 text-slate-50 text-3xl">
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

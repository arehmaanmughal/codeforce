import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa"; // Importing icons for the drawer toggle

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrollPosition, setScrollPosition] = useState(0);
  const location = useLocation();
  const toggleDrawer = () => {
    setIsOpen(!isOpen);
  };

  const handleScroll = () => {
    setScrollPosition(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50  transition-colors duration-300 py-4 px-4 ${
        scrollPosition > 50 && location.pathname === "/" ? "bg-slate-800 shadow-2xl" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-xl font-bold tracking-wider text-slate-50">
          Code<span className="text-orange-600">Force</span>
        </Link>

        {/* Drawer toggle button, visible only on small screens */}
        <div className="sm:hidden">
          <button onClick={toggleDrawer} className="flex items-center">
            <FaBars size={24} color="rgb(248 250 252)" />
          </button>
        </div>

        {/* Links for large screens */}
        <ul className="hidden sm:flex space-x-6 text-slate-50">
          <li>
            <Link
              to="/"
              className={` ${
                location.pathname === "/" ? "border-b-2 border-orange-600" : ""
              } hover:border-b-2 border-orange-600 pb-1`}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/services"
              className={` ${
                location.pathname === "/services" ? "border-b-2 border-orange-600" : ""
              } hover:border-b-2 border-orange-600 pb-1`}
            >
              Services
            </Link>
          </li>
          <li>
            <Link
              to="/projects"
              className={` ${
                location.pathname === "/projects" ? "border-b-2 border-orange-600" : ""
              } hover:border-b-2 border-orange-600 pb-1`}
            >
              Projects
            </Link>
          </li>
          <li>
            <Link
              to="/about"
              className={` ${
                location.pathname === "/about" ? "border-b-2 border-orange-600" : ""
              } hover:border-b-2 border-orange-600 pb-1`}
            >
              About
            </Link>
          </li>
          <li>
            <Link
              to="/contact"
              className={` ${
                location.pathname === "/contact" ? "border-b-2 border-orange-600" : ""
              } hover:border-b-2 border-orange-600 pb-1`}
            >
              Contact
            </Link>
          </li>
        </ul>
      </div>

      {/* Drawer menu for small screens */}
      <div
        className={`bg-slate-700 fixed top-0 right-0 h-screen w-3/4 shadow-md transition-transform duration-300 ease-in-out ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex justify-end p-4">
          <button onClick={toggleDrawer}>
            <FaTimes size={24} color="rgb(248 250 252)" />
          </button>
        </div>
        <ul className="flex flex-col items-center space-y-6 py-6 text-slate-50 text-3xl">
          <li>
            <Link to="/" className={` ${
                location.pathname === "/" ? "border-b-2 border-orange-600" : ""
              } hover:border-b-2 border-orange-600 pb-1`} onClick={toggleDrawer}>
              Home
            </Link>
          </li>
          <li>
            <Link to="/services" className={` ${
                location.pathname === "/services" ? "border-b-2 border-orange-600" : ""
              } hover:border-b-2 border-orange-600 pb-1`} onClick={toggleDrawer}>
              Services
            </Link>
          </li>
          <li>
            <Link to="/projects" className={` ${
                location.pathname === "/projects" ? "border-b-2 border-orange-600" : ""
              } hover:border-b-2 border-orange-600 pb-1`} onClick={toggleDrawer}>
              Projects
            </Link>
          </li>
          <li>
            <Link to="/about" className={` ${
                location.pathname === "/about" ? "border-b-2 border-orange-600" : ""
              } hover:border-b-2 border-orange-600 pb-1`} onClick={toggleDrawer}>
              About
            </Link>
          </li>
          <li>
            <Link to="/contact" className={` ${
                location.pathname === "/contact" ? "border-b-2 border-orange-600" : ""
              } hover:border-b-2 border-orange-600 pb-1`} onClick={toggleDrawer}>
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Header;

import React from "react";

import {
  FaFacebookF,
  FaLinkedinIn,
  FaInstagram,
} from "react-icons/fa";
import { FaX, FaXTwitter } from "react-icons/fa6";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="shadow-2xl shadow-slate-400 py-8 text-slate-300">
      <div className="container mx-auto text-center">
        <div className="flex justify-center space-x-6 mb-4">
          {/* Social Media Icons using React Icons */}
          <Link
            to="https://facebook.com"
            className="hover:text-slate-300 text-orange-500"
          >
            <FaFacebookF size={20} />
          </Link>
          <Link
            to="https://twitter.com"
            className="hover:text-slate-300 text-orange-500"
          >
            <FaXTwitter size={20}/>
          </Link>
          <Link
            to="https://linkedin.com"
            className="hover:text-slate-300 text-orange-500"
          >
            <FaLinkedinIn size={20} />
          </Link>
          <Link
            to="https://instagram.com"
            className="hover:text-slate-300 text-orange-500"
          >
            <FaInstagram size={20} />
          </Link>
        </div>
        <p className="text-slate-300">
          &copy; 2024 CodeForce. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;

// src/components/Navbar.js
import React, { useState } from "react";
import { Link, matchPath, useLocation } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  const pathMatch = (route) => {
    return matchPath({ path: route }, location.pathname);
  };
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <nav className="bg-white text-black fixed w-full z-10 text-sm">
        <div className="max-w-6xl mx-auto px-4 flex justify-between items-center">
          <div>
            <Link
              to="/"
              className="flex items-center py-5 px-2 hover:text-gray-300 transition duration-300"
            >
              <div className=" w-[70px] h-[70px] lg:w-16 lg:h-16 ">
                <img
                  src="https://i.ibb.co/W0v3fWm/Team-LOGO-page-0001.jpg"
                  alt=""
                  className=" object-cover rounded-full"
                />
              </div>
            </Link>
          </div>

          <div className="hidden md:flex items-center space-x-4">
            <Link
              to="/"
              className={` py-5 px-2 ${
                pathMatch("/") ? "text-red-600 font-bold" : "text-black"
              }`}
            >
              Home
            </Link>
            <Link
              to="/about"
              className={` py-5 px-2 ${
                pathMatch("/about") ? "text-red-600 font-bold" : "text-black"
              }`}
            >
              About
            </Link>
            <Link
              to="/gallery"
              className={` py-5 px-2 ${
                pathMatch("/gallery") ? "text-red-600 font-bold" : "text-black"
              }`}
            >
              Gallery
            </Link>
            <Link
              to="/services"
              className={` py-5 px-2 ${
                pathMatch("/services") ? "text-red-600 font-bold" : "text-black"
              }`}
            >
              Services
            </Link>
            <Link
              to="/events"
              className={` py-5 px-2 ${
                pathMatch("/events") ? "text-red-600 font-bold" : "text-black"
              }`}
            >
              Events
            </Link>
            <Link
              to="/contact"
              className={` py-5 px-2 ${
                pathMatch("/contact") ? "text-red-600 font-bold" : "text-black"
              }`}
            >
              Contact
            </Link>
          </div>
          <div className="md:hidden flex items-center">
            <button onClick={toggleMenu}>
              {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
            </button>
          </div>
        </div>
        {/* Sidebar for mobile */}
        <div
          className={`fixed inset-y-0 left-0 w-64 bg-white text-black transform ${
            isOpen ? "translate-x-0" : "-translate-x-full"
          } transition-transform duration-300 ease-in-out md:hidden z-50`}
        >
          <div className="flex flex-col p-4 space-y-4">
            <Link
              to="/"
              className={` px-2 ${
                pathMatch("/") ? "text-red-600 font-bold" : "text-black"
              }`}
              onClick={toggleMenu}
            >
              Home
            </Link>
            <Link
              to="/about"
              className={`px-2 ${
                pathMatch("/about") ? "text-red-600 font-bold " : "text-black"
              }`}
              onClick={toggleMenu}
            >
              About
            </Link>
            <Link
              to="/gallery"
              className={`  px-2 ${
                pathMatch("/gallery") ? "text-red-600 font-bold" : "text-black"
              }`}
              onClick={toggleMenu}
            >
              Gallery
            </Link>
            <Link
              to="/services"
              className={` px-2 ${
                pathMatch("/services") ? "text-red-600 font-bold" : "text-black"
              }`}
              onClick={toggleMenu}
            >
              Services
            </Link>
            <Link
              to="/events"
              className={` px-2 ${
                pathMatch("/events") ? "text-red-600 font-bold" : "text-black"
              }`}
              onClick={toggleMenu}
            >
              Events
            </Link>
            <Link
              to="/contact"
              className={`  px-2 ${
                pathMatch("/contact") ? "text-red-600 font-bold" : "text-black"
              }`}
              onClick={toggleMenu}
            >
              Contact
            </Link>
          </div>
        </div>
        {/* Overlay */}
        {isOpen && (
          <div
            className="fixed inset-0 bg-black opacity-50 z-0"
            onClick={toggleMenu}
          ></div>
        )}
      </nav>
    </>
  );
};

export default Navbar;

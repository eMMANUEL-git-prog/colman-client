import React, { useState } from "react";
import { Terminal } from "lucide-react";
import {
  FaLaptopCode,
  FaMobileAlt,
  FaPaintBrush,
  FaCloud,
} from "react-icons/fa";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <nav className="bg-gradient-to-r from-gray-700 via-blue-900 to-indigo-900 text-white shadow-lg fixed w-full z-50 top-0">
      <div className="container mx-auto flex items-center justify-between w-full px-6 py-4 md:px-8 lg:px-12 md:flex-row md:justify-between">
        {/* Logo */}
        <div className="flex items-center">
          <img src="/logo-light.png" alt="Logo" className="h-10 md:h-12" />
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-6 lg:space-x-8 text-base lg:text-lg">
          {[
            { label: "Home", href: "/" },
            { label: "Services", href: "/services" },
            {
              label: "Mobile App Dev",
              href: "/services#mobile-dev",
              icon: <FaMobileAlt className="ml-2" />,
            },
            {
              label: "Web Development",
              href: "/services#web-dev",
              icon: <FaLaptopCode className="ml-2" />,
            },
            { label: "Contact", href: "/contact" },
          ].map(({ label, href, icon }, index) => (
            <li
              key={index}
              className="hover:text-blue-400 transition duration-300 uppercase font-semibold"
            >
              <a href={href} className="flex items-center">
                {label} {icon}
              </a>
            </li>
          ))}
        </ul>

        {/* Code Icon for Large Screens */}
        <Terminal className="w-6 h-6 md:w-8 md:h-8 text-blue-300 hidden lg:block" />

        {/* Hamburger Menu for Mobile & Small Tablets Only */}
        <div
          className="md:hidden cursor-pointer"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <svg
            className="w-7 h-7"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </div>
      </div>

      {/* Mobile Overlay */}
      {menuOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40"
          onClick={closeMenu}
        />
      )}

      {/* Mobile Menu */}
      <div
        className={`fixed top-0 right-0 h-full w-72 bg-gray-900 text-white transform ${
          menuOpen ? "translate-x-0" : "translate-x-full"
        } z-50 transition-transform duration-500 ease-in-out overflow-y-auto md:hidden`}
      >
        {/* Close Button */}
        <div className="p-4 flex justify-end">
          <button className="text-white" onClick={closeMenu}>
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>

        {/* Mobile Menu Links */}
        <ul className="flex flex-col space-y-4 p-6 text-lg">
          {[
            { label: "Home", href: "/" },
            {
              label: "Web Development",
              href: "/services#web-dev",
              icon: <FaLaptopCode className="ml-2 text-blue-400" />,
            },
            {
              label: "Mobile App Dev",
              href: "/services#mobile-dev",
              icon: <FaMobileAlt className="ml-2 text-blue-400" />,
            },
            {
              label: "UI/UX Design",
              href: "/services#uiux",
              icon: <FaPaintBrush className="ml-2 text-blue-400" />,
            },
            {
              label: "Cloud Hosting",
              href: "/services#cloudhosting",
              icon: <FaCloud className="ml-2 text-blue-400" />,
            },
            { label: "Contact", href: "/contact" },
          ].map(({ label, href, icon }, index) => (
            <li
              key={index}
              className="cursor-pointer hover:bg-blue-700 transition duration-300 p-3 rounded-lg font-semibold"
            >
              <a href={href} onClick={closeMenu} className="flex items-center">
                {label} {icon}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;

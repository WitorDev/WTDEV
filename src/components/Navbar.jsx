import React, { useState } from "react";
import { Link } from "react-scroll";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
    { to: "home", label: "Home", offset: -200 },
    { to: "about", label: "About", offset: -50 },
    { to: "tech", label: "Dev Tools", offset: -50 },
    { to: "projects", label: "Projects", offset: -50 },
    { to: "contact", label: "Contact", offset: -50 },
  ];

  const handleLinkClick = () => setMenuOpen(false);

  return (
    <nav className="z-10 fixed bg-black/60 backdrop-blur-xl top-0 w-full text-2xl sm:text-lg border-b border-white">
      <div className="max-w-screen-xl mx-auto flex justify-between items-center px-4">
        <div className="font-bold text-white py-2">WTDEV</div>
        {/* Hamburger */}
        <button
          className="sm:hidden text-white focus:outline-none"
          onClick={() => setMenuOpen((open) => !open)}
          aria-label="Toggle menu"
        >
          <svg
            className="w-8 h-8"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            {menuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 8h16M4 16h16 M4 12h16"
              />
            )}
          </svg>
        </button>
        {/* Desktop Nav */}
        <ul className="hidden sm:flex justify-center sm:justify-start sm:pl-5">
          {navLinks.map(({ to, label, offset }) => (
            <Link
              key={to}
              to={to}
              offset={offset || 0}
              smooth={true}
              duration={700}
            >
              <li className="p-2 px-5 cursor-pointer transition-all duration-300 hover:bg-white hover:text-black">
                {label}
              </li>
            </Link>
          ))}
        </ul>
      </div>
      {/* Mobile Menu */}
      {menuOpen && (
        <ul className="sm:hidden bg-black/90 backdrop-blur-xl absolute top-full left-0 w-full flex flex-col items-center border-b border-white z-20">
          {navLinks.map(({ to, label, offset }) => (
            <Link
              key={to}
              to={to}
              offset={offset || 0}
              smooth={true}
              duration={700}
              onClick={handleLinkClick}
            >
              <li className="w-full text-center p-4 cursor-pointer transition-all duration-300 hover:bg-white hover:text-black border-t border-white">
                {label}
              </li>
            </Link>
          ))}
        </ul>
      )}
    </nav>
  );
}

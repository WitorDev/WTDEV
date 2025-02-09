import React from "react";
import { Link } from "react-scroll";

export default function Navbar() {
  return (
    <nav className="z-10 fixed bg-black/60 backdrop-blur-xl top-0 w-full text-2xl sm:text-lg border-b border-white">
      <ul className="flex justify-center sm:justify-start sm:pl-5 max-w-screen-xl mx-auto">
        {[
          { to: "home", label: "Home", offset: -200 },
          { to: "about", label: "About", offset: -50 },
          { to: "tech", label: "Dev Tools", offset: -50 },
          { to: "projects", label: "Projects", offset: -50 },
          { to: "contact", label: "Contact", offset: -50 },
        ].map(({ to, label, offset }) => (
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
    </nav>
  );
}

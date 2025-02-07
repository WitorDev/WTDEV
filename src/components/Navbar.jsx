import React from "react";
import { Link } from 'https://cdn.skypack.dev/react-scroll';

export default function Navbar() {
  return (
    <nav className="z-1 fixed bg-black/60 backdrop-blur-xl top-0 w-full text-2xl sm:text-lg border-b border-white">
      <ul className="flex justify-center sm:justify-start sm:pl-5 max-w-screen-xl mx-auto">
        <Link to="home" offset={-200} smooth={true} duration={700}>
          <li className="p-2 px-5 cursor-pointer hover:bg-white hover:text-black active:bg-white active:text-black">
            Home
          </li>
        </Link>
        <Link to="about" offset={-50} smooth={true} duration={700}>
          <li className="p-2 px-5 cursor-pointer hover:bg-white hover:text-black active:bg-white active:text-black">
            About
          </li>
        </Link>
        <Link to="tech" offset={-50} smooth={true} duration={700}>
          <li className="p-2 px-5 cursor-pointer hover:bg-white hover:text-black active:bg-white active:text-black">
            Dev Tools
          </li>
        </Link>
        <Link to="projects" smooth={true} duration={700}>
          <li className="p-2 px-5 cursor-pointer hover:bg-white hover:text-black active:bg-white active:text-black">
            Projects
          </li>
        </Link>
      </ul>
    </nav>
  );
}

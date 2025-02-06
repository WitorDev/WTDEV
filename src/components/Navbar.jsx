import React from 'react'
import { Link } from 'react-scroll'

export default function Navbar() {
  return (
    <nav className='z-1 fixed bg-black/60 backdrop-blur-xl top-0 w-full text-2xl sm:text-lg border-b border-white'>
      <ul className='flex justify-center sm:justify-start sm:pl-5 max-w-screen-xl mx-auto'>
        <Link 
          to='hero' 
          offset={-1000} 
          smooth={true} 
          spy={true} 
          activeClass="active"
          className="p-2 px-5 cursor-pointer hover:bg-white hover:text-black active:bg-white active:text-black"
        >
          <li>Home</li>
        </Link>
        <Link 
          to='about' 
          offset={-120} 
          smooth={true} 
          spy={true} 
          activeClass="active"
          className="p-2 px-5 cursor-pointer hover:bg-white hover:text-black active:bg-white active:text-black"
        >
          <li>About</li>
        </Link>
        <Link 
          to='tech' 
          offset={-120} 
          smooth={true} 
          spy={true} 
          activeClass="active"
          className="p-2 px-5 cursor-pointer hover:bg-white hover:text-black active:bg-white active:text-black"
        >
          <li>Dev Tools</li>
        </Link>
        <Link 
          to='projects' 
          offset={-120} 
          smooth={true} 
          spy={true} 
          activeClass="active"
          className="p-2 px-5 cursor-pointer hover:bg-white hover:text-black active:bg-white active:text-black"
        >
          <li>Projects</li>
        </Link>
      </ul>
    </nav>
  )
}

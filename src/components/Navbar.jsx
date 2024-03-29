import React from "react";
import { NavLink } from "react-router-dom";
import cv from "../assets/MonaMagdyResume.pdf"

const Navbar = () => {
  return (
    <header className="header">
      <NavLink
        to="/"
        className="w-[7rem] h-10 rounded-lg bg-white items-center justify-center flex font-bold shadow-md"
      >
        <p className="blue-gradient_text">Magic Mona</p>
      </NavLink>

      <nav className="flex sm:text-lg sm:gap-7 font-medium gap-2 text-sm">
        <NavLink
          to="/about"
          className={({ isActive }) =>
            isActive ? "text-blue-500" : "text-black"
          }
        >
          About
        </NavLink>
        <NavLink
          to="/projects"
          className={({ isActive }) =>
            isActive ? "text-blue-500" : "text-black"
          }
        >
          Projects
        </NavLink>
        <NavLink
          to={cv}
          className={({ isActive }) =>
            isActive ? "text-blue-500" : "text-black"
          }
          target="_blank" 
          
        >
          CV
        </NavLink>
      </nav>
    </header>
  );
};

export default Navbar;

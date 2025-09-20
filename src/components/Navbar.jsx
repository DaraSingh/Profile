import { useEffect, useState } from "react";
import React from "react";

function Navbar() {
  // An array of navigation items to make the component easily scalable
  const [isMenuOpen,setIsMenuOpen]=useState(false)
  const navItems = [
    { name: "Home", href: "/" },
    { name: "Projects", href: "/Projects" },
    {name:"Achievments",href:"/Achievments"}
  ];
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  return (
    <nav className="bg-black shadow-lg text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo/Brand Name */}
        <a href="/" className="text-2xl font-bold tracking-tight">
          
        </a>

        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-4">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="hover:text-gray-300 py-2"
            >
              {item.name}
            </a>
          ))}
        </div>

        {/* Mobile menu button */}
        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            className="text-center rounded-md text-2xl"
          >
            {isMenuOpen ? "X" : " ⠇ "}
          </button>
        </div>
      </div>

      {/* Mobile Navigation (toggled by state) */}
      {isMenuOpen && (
        <div className="md:hidden mt-4 bg-black">
          <div className="flex flex-col space-y-2">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="block px-3 py-2 text-base font-medium rounded-md hover:bg-gray-700 transition-colors duration-200"
                onClick={toggleMenu} // Close menu on item click
              >
                {item.name}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
export default Navbar;

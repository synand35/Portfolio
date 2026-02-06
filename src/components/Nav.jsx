import React, { useState } from "react";
// import CV from asserts/Her

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white fixed w-full top-0 left-0 shadow-md z-50">
      <div className="max-w-7xl mx-auto px-6 md:px-16 flex justify-between items-center h-16">
        {/* Logo */}
        <div className="text-2xl font-bold text-techGreen">Andoniaina</div>

        {/* Menu Desktop */}
        <div className="hidden md:flex items-center text-gray-700 font-medium space-x-8 pt-16">
          <a href="#hero" className="hover:text-techGreen transition">Home</a>
          <a href="#about" className="hover:text-techGreen transition">About</a>
          <a href="#skills" className="hover:text-techGreen transition">Skills</a>
          <a href="#projects" className="hover:text-techGreen transition">Projects</a>
          <a href="#contact" className="hover:text-techGreen transition">Contact</a>
          <a
            href="/assets/Herilanto Synand Mario ANDONIAINA-3.pdf"
            download
            className="bg-techGreen text-white px-4 py-2 rounded-lg hover:bg-green-700 transition"
          >
            Télécharger CV
          </a>
        </div>

        {/* Menu Mobile */}
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-gray-700 focus:outline-none text-2xl"
          >
            {isOpen ? "×" : "☰"}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-md flex flex-col">
          <a href="#hero" className="block px-6 py-3 text-gray-700 hover:text-techGreen">Home</a>
          <a href="#about" className="block px-6 py-3 text-gray-700 hover:text-techGreen">About</a>
          <a href="#skills" className="block px-6 py-3 text-gray-700 hover:text-techGreen">Skills</a>
          <a href="#projects" className="block px-6 py-3 text-gray-700 hover:text-techGreen">Projects</a>
          <a href="#contact" className="block px-6 py-3 text-gray-700 hover:text-techGreen">Contact</a>
          <a
            href="/assets/Andoniaina_CV.pdf"
            download
            className="block px-6 py-3 text-white bg-techGreen text-center rounded-b-lg hover:bg-green-700 transition"
          >
            Télécharger CV
          </a>
        </div>
      )}
    </nav>
  );
}

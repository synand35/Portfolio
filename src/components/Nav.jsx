import { useState } from "react";
import reactLogo from "../assets/react.svg";
import cv from "../assets/ANDONIAINA.pdf";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full bg-white shadow z-50">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        
        {/* Logo */}
        <div className="flex items-center gap-x-3 ml-6">
        
        <span className="bg-green-500/20 p-2 rounded-full">
            <img
            src={reactLogo}
            alt="React logo"
            className="w-6 h-6"
            />
        </span>

        <span className="text-2xl font-bold text-techGreen">
            Andoniaina
        </span>

        </div>


        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-x-8 text-gray-700 font-medium">
          <a href="#hero" className="hover:text-techGreen">Acceuil</a>
          <a href="#about" className="hover:text-techGreen">À propos</a>
          <a href="#skills" className="hover:text-techGreen">Compétences</a>
          <a href="#projects" className="hover:text-techGreen">Projets</a>
          <a href="#contact" className="hover:text-techGreen">Contact</a>

          {/* CV Button */}
        <a
        href={cv}
        download="ANDONIAINA-CV.pdf"
        className="
            bg-green-500/50
            min-w-[12.5rem]
            text-center
            border border-techGreen text-techGreen
            px-12 py-6 rounded-lg font-medium
            transition hover:bg-green-50 hover:-translate-y-0.5
        "
>
        Télécharger mon CV
        </a>


        </div>

        {/* Mobile Button */}
        <button
          className="md:hidden text-2xl"
          onClick={() => setIsOpen(!isOpen)}
        >
          ☰
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white shadow flex flex-col">
          {["Home","About","Skills","Projects","Contact"].map(item => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="px-6 py-3 hover:text-techGreen"
            >
              {item}
            </a>
          ))}
          <a
            href={cv}
            download="ANDONIAINA-CV.pdf"
            className="bg-techGreen text-white text-center py-10"
          >
            Télécharger CV
          </a>
        </div>
      )}
    </nav>
  );
}

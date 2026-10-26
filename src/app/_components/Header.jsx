"use client";

import { useState } from "react";
import Link from "next/link";
import { FiMenu } from "react-icons/fi";
import { IoClose } from "react-icons/io5";
import { GrFavorite } from "react-icons/gr";
import { MdOutlineShoppingCartCheckout } from "react-icons/md";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  function toggleMenu() {
    setIsOpen((prev) => !prev);
  }

  return (
    <header className="w-full">
      <section className="w-full mx-auto backdrop-blur-sm fixed top-0 left-0 right-0 z-50 border-b border-black/5">
        <div className="container mx-auto py-2 px-4 flex items-center justify-between">
          <div className="flex items-center justify-between w-full md:w-auto">
            <img src="/logo.png" alt="Logo" className="w-auto h-14 md:h-20" />

            <button
              onClick={toggleMenu}
              aria-label={isOpen ? "Fechar menu" : "Abrir menu"}
              className="p-1 md:hidden text-black/80 hover:text-[#558c36] transition-colors focus:outline-none"
            >
              {isOpen ? (
                <IoClose className="h-8 w-8" />
              ) : (
                <FiMenu className="h-8 w-8" />
              )}
            </button>
          </div>

          {/* Navegação Desktop com Link */}
          <nav className="hidden lg:flex gap-4 text-black/70 font-medium border border-black/20 rounded-full py-2 px-4">
            <a
              href="#home"
              className="hover:text-[#558c36] transition-colors duration-300"
            >
              Home
            </a>
            <a
              href="#about"
              className="hover:text-[#558c36] transition-colors duration-300"
            >
              About
            </a>
            <a
              href="#drinks"
              className="hover:text-[#558c36] transition-colors duration-300"
            >
              Our Drinks
            </a>
            <a
              href="#energy"
              className="hover:text-[#558c36] transition-colors duration-300"
            >
              Energy
            </a>
            <a
              href="#flavours"
              className="hover:text-[#558c36] transition-colors duration-300"
            >
              Flavours
            </a>
            <a
              href="#contact"
              className="hover:text-[#558c36] transition-colors duration-300"
            >
              Contact
            </a>
          </nav>

          <div className="hidden md:flex gap-4 justify-center items-center cursor-pointer">
            <div className="bg-[#61A73F] hover:bg-[#558c36] rounded-full p-2 text-white/70 flex justify-center items-center transition-colors duration-300">
              <GrFavorite className="h-6 w-6" />
            </div>
            <div className="flex gap-2 justify-center items-center uppercase font-semibold text-black/80 hover:text-[#558c36] transition-colors duration-300">
              <MdOutlineShoppingCartCheckout className="h-6 w-6" />
              <span>Cart (0)</span>
            </div>
            <button
                onClick={toggleMenu}
                aria-label={isOpen ? "Fechar menu" : "Abrir menu"}
                className="p-1 lg:hidden text-black/80 hover:text-[#558c36] transition-colors focus:outline-none"
              >
                {isOpen ? (
                  <IoClose className="h-8 w-8" />
                ) : (
                  <FiMenu className="h-8 w-8" />
                )}
              </button>
          </div>
        </div>

        {/* Menu Mobile */}
        {isOpen && (
          <div className="lg:hidden bg-white/95 backdrop-blur-md border-t border-black/10 px-6 py-6 shadow-xl">
            <nav className="flex flex-col gap-4 text-lg font-medium text-black/80">
              <a
                href="#home"
                onClick={() => setIsOpen(false)}
                className="hover:text-[#558c36]"
              >
                Home
              </a>
              <a
                href="#about"
                onClick={() => setIsOpen(false)}
                className="hover:text-[#558c36]"
              >
                About
              </a>
              <a
                href="#drinks"
                onClick={() => setIsOpen(false)}
                className="hover:text-[#558c36]"
              >
                Our Drinks
              </a>
              <a
                href="#energy"
                onClick={() => setIsOpen(false)}
                className="hover:text-[#558c36]"
              >
                Energy
              </a>
              <a
                href="#flavours"
                onClick={() => setIsOpen(false)}
                className="hover:text-[#558c36]"
              >
                Flavours
              </a>
              <a
                href="#contact"
                onClick={() => setIsOpen(false)}
                className="hover:text-[#558c36]"
              >
                Contact
              </a>
            </nav>

            <div className="mt-6 pt-4 border-t border-black/10 flex items-center justify-between">
              <div className="flex items-center gap-2 font-semibold text-black/80">
                <MdOutlineShoppingCartCheckout className="h-6 w-6" />
                <span>Cart (0)</span>
              </div>
              <div className="bg-[#61A73F] rounded-full p-2 text-white">
                <GrFavorite className="h-5 w-5 cursor-pointer" />
              </div>
            </div>
          </div>
        )}
      </section>
    </header>
  );
}

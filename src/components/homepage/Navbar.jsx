// src/components/Navbar.jsx
import React, { useState } from 'react';
import { useTheme } from '../../themes/ThemeProvider';
import ThemeSwitcher from './ThemeSwitcher';
import { FaBars, FaTimes } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const { theme } = useTheme();
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { label: 'Features', href: '#features' },
    { label: 'Pricing', href: '#pricing' },
   { label: 'How It Works', href: '#how-it-works' },
    { label: 'FAQ', href: '#faq' },
  ];

  const handleNavClick = () => {
    setIsOpen(false);
  };

  return (
    <nav
      className={`
        fixed top-0 left-0 w-full z-50
        backdrop-blur-md
        border-b
        ${theme.colors.card}
        ${theme.colors.border}
        bg-opacity-90
      `}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Navbar Main */}
        <div className="flex justify-between items-center h-16">

          {/* Logo */}
          <Link
            to="/"
            onClick={() => setIsOpen(false)}
            className="flex items-center"
          >
            <span
              className={`
                text-2xl
                font-bold
                ${theme.colors.text}
                hover:opacity-80
                transition-opacity
              `}
            >
              InvoiceHub
              <span className="text-blue-500">.</span>
            </span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-7">

            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className={`
                  text-sm
                  font-medium
                  ${theme.colors.text}
                  opacity-80
                  hover:opacity-100
                  transition-all
                `}
              >
                {link.label}
              </a>
            ))}

            {/* Theme */}
            <ThemeSwitcher />

            {/* Get Started */}
            <Link
              to="/login"
              className={`
                ${theme.colors.button}
                text-white
                px-5
                py-2
                rounded-lg
                font-semibold
                text-sm
                transition-all
                hover:scale-105
                shadow-md
              `}
            >
              Get Started
            </Link>
          </div>

          {/* Mobile Controls */}
          <div className="md:hidden flex items-center gap-4">

            <ThemeSwitcher />

            <button
              type="button"
              onClick={() => setIsOpen(!isOpen)}
              className={`
                ${theme.colors.text}
                p-2
                rounded-lg
                hover:bg-black/5
                dark:hover:bg-white/5
                transition-colors
              `}
              aria-label={isOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={isOpen}
            >
              {isOpen ? (
                <FaTimes size={22} />
              ) : (
                <FaBars size={22} />
              )}
            </button>

          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div
            className={`
              md:hidden
              py-5
              border-t
              ${theme.colors.border}
            `}
          >
            <div className="flex flex-col gap-2">

              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={handleNavClick}
                  className={`
                    ${theme.colors.text}
                    opacity-80
                    hover:opacity-100
                    px-3
                    py-3
                    rounded-lg
                    transition-all
                  `}
                >
                  {link.label}
                </a>
              ))}

              {/* Mobile Get Started */}
              <Link
                to="/login"
                onClick={handleNavClick}
                className={`
                  ${theme.colors.button}
                  text-white
                  px-4
                  py-3
                  rounded-lg
                  font-semibold
                  text-center
                  mt-2
                  transition-all
                `}
              >
                Get Started
              </Link>

            </div>
          </div>
        )}

      </div>
    </nav>
  );
};

export default Navbar;
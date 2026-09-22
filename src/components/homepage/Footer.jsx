// src/components/Footer.jsx

import React from 'react';

import {
  FaLinkedin,
  FaInstagram,
  FaHeart,
  FaEnvelope,
  FaPhone,
} from 'react-icons/fa';
import { BsTwitterX } from 'react-icons/bs';
import { SiThreads } from 'react-icons/si';
import { Link } from 'react-router-dom';
import { useTheme } from '../../themes/ThemeProvider';

const Footer = () => {
  const { theme } = useTheme();

  return (
    <footer
      className={`
        ${theme.colors.background}
        border-t
        ${theme.colors.primary}
        border-opacity-20
      `}
    >
      <div className="max-w-7xl mx-auto px-4 py-12">

        {/* Main Footer */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">

          {/* Brand */}
          <div>
            <div
              className={`text-2xl font-bold ${theme.colors.text}`}
            >
              InvoiceHub
              <span className="text-blue-500">.</span>
            </div>

            <p
              className={`
                mt-3
                text-sm
                ${theme.colors.text}
                opacity-70
                max-w-sm
              `}
            >
              Simple invoicing and payment tracking tools
              for businesses, freelancers, and professionals.
            </p>
          </div>

          {/* Contact */}
          <div>
            <h3
              className={`font-semibold ${theme.colors.text} mb-4`}
            >
              Contact
            </h3>

            <div className="space-y-3">

              <a
                href="mailto:missionk935@gmail.com"
                className={`
                  flex items-center gap-2
                  text-sm
                  ${theme.colors.text}
                  opacity-70
                  hover:opacity-100
                `}
              >
                <FaEnvelope />
                missionk935@gmail.com
              </a>

              <a
                href="mailto:missionk408@gmail.com"
                className={`
                  flex items-center gap-2
                  text-sm
                  ${theme.colors.text}
                  opacity-70
                  hover:opacity-100
                `}
              >
                <FaEnvelope />
                missionk408@gmail.com
              </a>

              <a
                href="tel:+919354689368"
                className={`
                  flex items-center gap-2
                  text-sm
                  ${theme.colors.text}
                  opacity-70
                  hover:opacity-100
                `}
              >
                <FaPhone />
                +91 93546 89368
              </a>

              <a
                href="tel:+919341072315"
                className={`
                  flex items-center gap-2
                  text-sm
                  ${theme.colors.text}
                  opacity-70
                  hover:opacity-100
                `}
              >
                <FaPhone />
                +91 93410 72315
              </a>

            </div>
          </div>

          {/* Legal */}
          <div>
            <h3
              className={`font-semibold ${theme.colors.text} mb-4`}
            >
              Legal
            </h3>

            <div className="flex flex-col gap-3">

              <Link
                to="/privacy-policy"
                className={`text-sm ${theme.colors.text} opacity-70 hover:opacity-100`}
              >
                Privacy Policy
              </Link>

              <Link
                to="/terms"
                className={`text-sm ${theme.colors.text} opacity-70 hover:opacity-100`}
              >
                Terms & Conditions
              </Link>

              <Link
                to="/refund-policy"
                className={`text-sm ${theme.colors.text} opacity-70 hover:opacity-100`}
              >
                Refund Policy
              </Link>

            </div>
          </div>

        </div>

        {/* Bottom */}
        <div
          className={`
            mt-12
            pt-8
            border-t
            ${theme.colors.primary}
            border-opacity-20
          `}
        >
          <div
            className="
              flex flex-col
              md:flex-row
              justify-between
              items-center
              gap-5
            "
          >

            {/* Copyright */}
            <div
              className={`
                flex
                items-center
                gap-2
                text-sm
                ${theme.colors.text}
                opacity-60
              `}
            >
              <span>
                © {new Date().getFullYear()} InvoiceHub.
                All rights reserved.
              </span>

              <span className="hidden md:inline">
                Made with
                <FaHeart className="inline text-red-500 mx-1" />
                in India
              </span>
            </div>

            {/* Social */}
            <div className="flex items-center gap-5">

              {/* X */}
              <a
                href="https://x.com/MissionKumar15"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="X"
              >
                <BsTwitterX
                  className={`
                    ${theme.colors.text}
                    opacity-60
                    hover:opacity-100
                    text-xl
                    transition-opacity
                  `}
                />
              </a>

              {/* LinkedIn */}
              <a
                href="https://www.linkedin.com/in/mission-kumar-03b0742b4/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
              >
                <FaLinkedin
                  className={`
                    ${theme.colors.text}
                    opacity-60
                    hover:opacity-100
                    text-xl
                    transition-opacity
                  `}
                />
              </a>

              {/* Threads */}
              <a
                href="https://www.threads.com/@codewithmission_official"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Threads"
              >
                <SiThreads
                  className={`
                    ${theme.colors.text}
                    opacity-60
                    hover:opacity-100
                    text-xl
                    transition-opacity
                  `}
                />
              </a>

              {/* Instagram */}
              <a
                href="https://www.instagram.com/codewithmission_official/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
              >
                <FaInstagram
                  className={`
                    ${theme.colors.text}
                    opacity-60
                    hover:opacity-100
                    text-xl
                    transition-opacity
                  `}
                />
              </a>

            </div>

          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
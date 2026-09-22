// src/components/sections/CTA.jsx

import React from 'react';
import { useTheme } from '../../../themes/ThemeProvider';
import { FaRocket, FaEnvelope, FaPhone } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const CTA = () => {
  const { theme } = useTheme();

  return (
    <section className="py-20 px-4">
      <div
        className={`
          max-w-4xl mx-auto text-center
          ${theme.colors.card}
          p-12 rounded-3xl
          border ${theme.colors.primary}
          border-opacity-30
          relative overflow-hidden
        `}
      >
        <div className="relative z-10">

          <h2
            className={`text-4xl font-bold ${theme.colors.text} mb-4`}
          >
            Ready to Get Started?
          </h2>

          <p
            className={`${theme.colors.text} opacity-70 mb-8 max-w-2xl mx-auto`}
          >
            Create professional invoices, manage clients, track payments,
            and simplify your invoicing process with InvoiceHub.
          </p>

          <div className="flex flex-wrap justify-center gap-4">

            {/* Start Free */}
            <Link to="/login">
              <button
                className={`
                  ${theme.colors.button}
                  text-white
                  px-8 py-3
                  rounded-lg
                  flex items-center gap-2
                  hover:scale-105
                  transition-all
                `}
              >
                Start Free
                <FaRocket />
              </button>
            </Link>

            {/* Contact */}
            <a
              href="mailto:missionk935@gmail.com"
              className={`
                border-2
                ${theme.colors.primary}
                ${theme.colors.text}
                px-8 py-3
                rounded-lg
                flex items-center gap-2
                hover:bg-opacity-10
                transition-all
              `}
            >
              <FaEnvelope />
              Contact Us
            </a>

          </div>

          {/* Contact Information */}
          <div
            className={`
              mt-8
              pt-6
              border-t
              ${theme.colors.border}
            `}
          >
            <p
              className={`text-sm font-semibold ${theme.colors.text} mb-4`}
            >
              Contact Information
            </p>

            <div className="flex flex-col md:flex-row justify-center gap-4 md:gap-8">

              {/* Emails */}
              <div className="flex flex-col gap-2">
                <a
                  href="mailto:missionk935@gmail.com"
                  className={`
                    flex items-center justify-center gap-2
                    text-sm
                    ${theme.colors.text}
                    hover:underline
                  `}
                >
                  <FaEnvelope />
                  missionk935@gmail.com
                </a>

                <a
                  href="mailto:missionk408@gmail.com"
                  className={`
                    flex items-center justify-center gap-2
                    text-sm
                    ${theme.colors.text}
                    hover:underline
                  `}
                >
                  <FaEnvelope />
                  missionk408@gmail.com
                </a>
              </div>

              {/* Phone Numbers */}
              <div className="flex flex-col gap-2">
                <a
                  href="tel:+919354689368"
                  className={`
                    flex items-center justify-center gap-2
                    text-sm
                    ${theme.colors.text}
                    hover:underline
                  `}
                >
                  <FaPhone />
                  +91 93546 89368
                </a>

                <a
                  href="tel:+919341072315"
                  className={`
                    flex items-center justify-center gap-2
                    text-sm
                    ${theme.colors.text}
                    hover:underline
                  `}
                >
                  <FaPhone />
                  +91 93410 72315
                </a>
              </div>

            </div>
          </div>

          <p
            className={`text-sm ${theme.colors.text} opacity-60 mt-6`}
          >
            Start with our free plan and upgrade whenever you need more.
          </p>

        </div>

        {/* Background decoration */}
        <div
          className={`
            absolute -top-20 -right-20
            w-64 h-64 rounded-full
            ${theme.colors.primary}
            opacity-5
          `}
        />

        <div
          className={`
            absolute -bottom-20 -left-20
            w-64 h-64 rounded-full
            ${theme.colors.primary}
            opacity-5
          `}
        />

      </div>
    </section>
  );
};

export default CTA;
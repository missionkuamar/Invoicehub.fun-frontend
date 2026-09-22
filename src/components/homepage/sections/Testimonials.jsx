// src/components/sections/Testimonials.jsx

import React from 'react';
import { useTheme } from '../../../themes/ThemeProvider';
import {
  FaFileInvoice,
  FaClock,
  FaUsers,
  FaCheckCircle,
} from 'react-icons/fa';

const Testimonials = () => {
  const { theme } = useTheme();

  const benefits = [
    {
      icon: FaFileInvoice,
      title: 'Simple Invoicing',
      content:
        'Create professional invoices quickly without complicated steps.',
    },
    {
      icon: FaUsers,
      title: 'Manage Clients',
      content:
        'Keep your client information organized in one convenient place.',
    },
    {
      icon: FaClock,
      title: 'Save Time',
      content:
        'Automate invoice reminders and reduce manual follow-ups.',
    },
    {
      icon: FaCheckCircle,
      title: 'Track Payments',
      content:
        'Keep track of invoice and payment status from your dashboard.',
    },
  ];

  return (
    <section
     id="how-it-works"
      className={`py-20 px-4 ${theme.colors.background}`}
    >
      <div className="max-w-7xl mx-auto">

        {/* Heading */}
        <div className="text-center mb-12">
          <h2
            className={`text-4xl font-bold ${theme.colors.text} mb-4`}
          >
            Simple Tools for
            <span
              className={`bg-gradient-to-r ${theme.colors.gradient} text-transparent bg-clip-text`}
            >
              {' '}Better Invoicing
            </span>
          </h2>

          <p
            className={`${theme.colors.text} opacity-70 max-w-2xl mx-auto`}
          >
            Everything you need to create invoices, manage clients,
            and keep track of payments.
          </p>
        </div>

        {/* Benefits */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;

            return (
              <div
                key={index}
                className={`
                  ${theme.colors.card}
                  p-6
                  rounded-2xl
                  border
                  ${theme.colors.border}
                  hover:shadow-xl
                  transition-all
                  duration-300
                `}
              >
                <div
                  className={`
                    w-12
                    h-12
                    rounded-xl
                    ${theme.colors.primary}
                    bg-opacity-10
                    flex
                    items-center
                    justify-center
                    mb-4
                  `}
                >
                  <Icon
                    className={`text-xl ${theme.colors.primary}`}
                  />
                </div>

                <h3
                  className={`text-lg font-semibold ${theme.colors.text} mb-2`}
                >
                  {benefit.title}
                </h3>

                <p
                  className={`text-sm ${theme.colors.text} opacity-70`}
                >
                  {benefit.content}
                </p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default Testimonials;
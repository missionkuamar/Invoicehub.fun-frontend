// src/components/sections/Features.jsx

import React from 'react';
import { useTheme } from '../../../themes/ThemeProvider';
import {
  FaFileInvoice,
  FaEnvelope,
  FaUsers,
  FaClock,
  FaChartLine,
  FaMobileAlt,
} from 'react-icons/fa';
import { motion } from 'framer-motion';

const Features = () => {
  const { theme } = useTheme();

  const features = [
    {
      icon: FaFileInvoice,
      title: 'Create Invoices',
      desc: 'Create professional invoices quickly and easily.',
      color: 'from-blue-500 to-cyan-500',
    },
    {
      icon: FaUsers,
      title: 'Client Management',
      desc: 'Add and manage all your clients in one place.',
      color: 'from-cyan-500 to-blue-500',
    },
    {
      icon: FaEnvelope,
      title: 'Email Invoices',
      desc: 'Send invoices directly to your clients by email.',
      color: 'from-rose-500 to-pink-500',
    },
    {
      icon: FaClock,
      title: 'Payment Reminders',
      desc: 'Send reminders for upcoming and overdue payments.',
      color: 'from-yellow-500 to-orange-500',
    },
    {
      icon: FaChartLine,
      title: 'Payment Tracking',
      desc: 'Track invoice and payment status easily.',
      color: 'from-orange-500 to-red-500',
    },
    {
      icon: FaMobileAlt,
      title: 'Responsive Design',
      desc: 'Use the platform comfortably on desktop and mobile.',
      color: 'from-pink-500 to-rose-500',
    },
  ];

  return (
    <section
      id="features"
      className={`py-20 px-4 ${theme.colors.background}`}
    >
      <div className="max-w-7xl mx-auto">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2
            className={`text-4xl md:text-5xl font-bold ${theme.colors.text} mb-4`}
          >
            Everything You Need for
            <span
              className={`bg-gradient-to-r ${theme.colors.gradient} text-transparent bg-clip-text`}
            >
              {' '}Easy Invoicing
            </span>
          </h2>

          <p
            className={`${theme.colors.text} opacity-70 max-w-2xl mx-auto text-lg`}
          >
            Create invoices, manage clients, track payments, and send reminders
            from one simple platform.
          </p>
        </motion.div>

        {/* Features */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => {
            const Icon = feature.icon;

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.05,
                }}
                viewport={{ once: true }}
                whileHover={{
                  y: -8,
                  scale: 1.02,
                }}
                className={`
                  ${theme.colors.card}
                  p-6
                  rounded-2xl
                  border
                  ${theme.colors.border}
                  shadow-lg
                  hover:shadow-xl
                  transition-all
                  duration-300
                `}
              >
                <div
                  className={`
                    w-14
                    h-14
                    rounded-xl
                    bg-gradient-to-r
                    ${feature.color}
                    p-3
                    flex
                    items-center
                    justify-center
                    mb-4
                    shadow-lg
                  `}
                >
                  <Icon className="text-white text-2xl" />
                </div>

                <h3
                  className={`text-lg font-semibold ${theme.colors.text} mb-2`}
                >
                  {feature.title}
                </h3>

                <p
                  className={`text-sm ${theme.colors.text} opacity-70`}
                >
                  {feature.desc}
                </p>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default Features;
import React from 'react';
import { useTheme } from '../../../themes/ThemeProvider';
import { FaRocket, FaShieldAlt, FaUsers } from 'react-icons/fa';
import { FaPlay, FaArrowRight } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const Hero = () => {
  const { theme } = useTheme();

  return (
    <section
      className={`min-h-screen pt-32 pb-20 px-4 relative overflow-hidden ${theme.colors.background}`}
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div
          className={`absolute -top-40 -right-40 w-96 h-96 rounded-full ${theme.colors.primary} opacity-10 blur-3xl animate-pulse`}
        />

        <div
          className={`absolute -bottom-40 -left-40 w-96 h-96 rounded-full ${theme.colors.secondary} opacity-10 blur-3xl animate-pulse delay-1000`}
        />

        <div
          className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full ${theme.colors.accent} opacity-5 blur-3xl animate-spin-slow`}
        />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">

          {/* LEFT CONTENT */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="mb-6">
              <span
                className={`inline-block px-4 py-2 rounded-full text-sm font-semibold ${theme.colors.card} ${theme.colors.text} border ${theme.colors.border} shadow-lg`}
              >
                🚀 Simple & Professional Invoicing
              </span>
            </div>

            <h1
              className={`text-5xl md:text-7xl font-bold ${theme.colors.text} leading-tight mb-6`}
            >
              Create Professional{' '}
              <span
                className={`bg-gradient-to-r ${theme.colors.gradient} text-transparent bg-clip-text`}
              >
                Invoices
              </span>{' '}
              in Minutes
            </h1>

            <p
              className={`text-lg ${theme.colors.text} opacity-70 mb-8 max-w-lg`}
            >
              Create professional invoices, manage clients, track payments,
              and automate payment reminders — all from one simple platform.
            </p>

            <div className="flex flex-wrap gap-4">

              <Link to="/login">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`${theme.colors.button} text-white px-8 py-4 rounded-full flex items-center gap-2 font-semibold shadow-xl`}
                >
                  Start Free
                  <FaRocket />
                </motion.button>
              </Link>

              <a
                href="https://youtu.be/8vMZrIlOMY0"
                target="_blank"
                rel="noopener noreferrer"
              >
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`border-2 ${theme.colors.primary} ${theme.colors.text} px-8 py-4 rounded-full flex items-center gap-2 font-semibold hover:bg-opacity-10 transition-all`}
                >
                  <FaPlay />
                  Watch Demo
                </motion.button>
              </a>

            </div>

            {/* TRUST FEATURES */}
            <div className="flex flex-wrap items-center gap-6 mt-8">

              <div className="flex items-center gap-2">
                <div
                  className={`p-2 rounded-full ${theme.colors.primary} bg-opacity-10`}
                >
                  <FaShieldAlt className={theme.colors.primary} />
                </div>

                <span className={`text-sm ${theme.colors.text}`}>
                  Secure & Reliable
                </span>
              </div>

              <div className="flex items-center gap-2">
                <div
                  className={`p-2 rounded-full ${theme.colors.primary} bg-opacity-10`}
                >
                  <FaUsers className={theme.colors.primary} />
                </div>

                <span className={`text-sm ${theme.colors.text}`}>
                  Built for Businesses
                </span>
              </div>

            </div>
          </motion.div>

          {/* RIGHT SIDE - DEMO INVOICE */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div
              className={`${theme.colors.card} rounded-3xl border ${theme.colors.border} p-8 shadow-2xl ${theme.colors.glow}`}
            >

              <div className="flex justify-between items-start mb-6">
                <div>
                  <h3
                    className={`text-sm font-semibold ${theme.colors.text}`}
                  >
                    INVOICE #INV-2026-001
                  </h3>

                  <p
                    className={`text-xs ${theme.colors.text} opacity-60`}
                  >
                    Due: 25 Sep, 2026
                  </p>
                </div>

                <span className="bg-green-500 text-white text-xs px-3 py-1 rounded-full">
                  Paid
                </span>
              </div>

              <div className="space-y-3">

                {[
                  {
                    label: 'Web Design Services',
                    amount: '₹12,000',
                  },
                  {
                    label: 'Development',
                    amount: '₹25,000',
                  },
                  {
                    label: 'Consulting',
                    amount: '₹8,000',
                  },
                ].map((item, idx) => (
                  <div
                    key={idx}
                    className="flex justify-between py-2 border-b border-gray-200 dark:border-gray-700"
                  >
                    <span
                      className={`text-sm ${theme.colors.text}`}
                    >
                      {item.label}
                    </span>

                    <span
                      className={`text-sm font-semibold ${theme.colors.text}`}
                    >
                      {item.amount}
                    </span>
                  </div>
                ))}

                <div className="flex justify-between pt-3">
                  <span
                    className={`text-lg font-bold ${theme.colors.text}`}
                  >
                    Total
                  </span>

                  <span
                    className={`text-lg font-bold bg-gradient-to-r ${theme.colors.gradient} text-transparent bg-clip-text`}
                  >
                    ₹45,000
                  </span>
                </div>

              </div>

              <div className="mt-6 p-4 rounded-xl bg-gradient-to-r from-green-500/10 to-emerald-500/10 border border-green-500/20">
                <div className="flex items-center justify-between">

                  <span
                    className={`text-sm ${theme.colors.text}`}
                  >
                    Payment Status
                  </span>

                  <span className="text-green-500 font-semibold flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                    Completed
                  </span>

                </div>
              </div>

            </div>

            {/* Floating Badge */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{
                duration: 2,
                repeat: Infinity,
              }}
              className="absolute -top-4 -right-4 bg-green-500 text-white px-4 py-2 rounded-full text-sm font-bold shadow-2xl"
            >
              Professional Invoices
            </motion.div>

            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{
                duration: 2.5,
                repeat: Infinity,
                delay: 0.5,
              }}
              className="absolute -bottom-4 -left-4 bg-gradient-to-r from-blue-500 to-purple-500 text-white px-4 py-2 rounded-full text-sm font-bold shadow-2xl flex items-center gap-1"
            >
              Easy to Use
            </motion.div>

            <motion.div
              animate={{ scale: [1, 1.1, 1] }}
              transition={{
                duration: 3,
                repeat: Infinity,
              }}
              className="absolute top-1/2 -right-6 transform -translate-y-1/2 bg-green-500 text-white p-3 rounded-full shadow-2xl"
            >
              <FaArrowRight />
            </motion.div>

          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Hero;
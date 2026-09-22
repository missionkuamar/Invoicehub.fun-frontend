// src/components/sections/Stats.jsx

import React from 'react';
import { useTheme } from '../../../themes/ThemeProvider';
import {
  FaUsers,
  FaFileInvoice,
  FaMoneyBillWave,
  FaGlobe,
} from 'react-icons/fa';

const Stats = () => {
  const { theme } = useTheme();

  const stats = [
    {
      icon: FaUsers,
      label: 'Client Management',
      value: 'Unlimited',
    },
    {
      icon: FaFileInvoice,
      label: 'Invoice Creation',
      value: 'Fast',
    },
    {
      icon: FaMoneyBillWave,
      label: 'Payment Tracking',
      value: 'Easy',
    },
    {
      icon: FaGlobe,
      label: 'Access',
      value: 'Online',
    },
  ];

  return (
    <section
      className={`py-16 px-4 ${theme.colors.background}`}
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">

          {stats.map((stat, index) => {
            const Icon = stat.icon;

            return (
              <div
                key={index}
                className={`
                  text-center
                  ${theme.colors.card}
                  p-6
                  rounded-2xl
                  border
                  ${theme.colors.primary}
                  border-opacity-20
                `}
              >
                <Icon
                  className={`
                    text-4xl
                    mx-auto
                    mb-3
                    ${theme.colors.primary}
                  `}
                />

                <div
                  className={`
                    text-2xl
                    md:text-3xl
                    font-bold
                    ${theme.colors.text}
                  `}
                >
                  {stat.value}
                </div>

                <div
                  className={`
                    text-sm
                    ${theme.colors.text}
                    opacity-70
                  `}
                >
                  {stat.label}
                </div>
              </div>
            );
          })}

        </div>
      </div>
    </section>
  );
};

export default Stats;
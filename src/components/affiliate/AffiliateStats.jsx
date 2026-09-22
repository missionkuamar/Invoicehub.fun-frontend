// frontend/src/components/affiliate/AffiliateStats.jsx

import React from 'react';
import {
  FaLink,
  FaUsers,
  FaChartLine,
  FaMoneyBill,
} from 'react-icons/fa';
import { useTheme } from '../../themes/ThemeProvider';

const AffiliateStats = ({ stats, earnings }) => {
  const { theme } = useTheme();

  const statsData = [
    {
      label: 'Total Clicks',
      value: stats?.totalClicks ?? 0,
      icon: FaLink,
      iconColor: theme.colors.primary,
      iconBg: theme.colors.background,
    },
    {
      label: 'Referrals',
      value: stats?.totalReferrals ?? 0,
      icon: FaUsers,
      iconColor: 'text-green-500',
      iconBg: 'bg-green-500/10',
    },
    {
      label: 'Conversion Rate',
      value: `${stats?.conversionRate ?? 0}%`,
      icon: FaChartLine,
      iconColor: 'text-orange-500',
      iconBg: 'bg-orange-500/10',
    },
    {
      label: 'Total Earnings',
      value: `₹${Number(earnings ?? 0).toFixed(2)}`,
      icon: FaMoneyBill,
      iconColor: 'text-white',
      iconBg: 'bg-gradient-to-r from-purple-500 to-pink-500',
      highlight: true,
    },
  ];

  return (
    <div
      className="
        w-full
        grid
        grid-cols-1
        min-[360px]:grid-cols-2
        lg:grid-cols-4
        gap-3
        sm:gap-4
        lg:gap-5
      "
    >
      {statsData.map((stat, index) => {
        const Icon = stat.icon;

        return (
          <div
            key={index}
            className={`
              w-full
              min-w-0
              ${theme.colors.card}
              rounded-xl
              sm:rounded-2xl
              border
              ${theme.colors.border}
              p-3
              xs:p-4
              sm:p-5
              transition-all
              duration-200
              hover:shadow-md
              ${
                stat.highlight
                  ? `border-2 ${theme.colors.primary} border-opacity-30`
                  : ''
              }
            `}
          >
            <div
              className="
                flex
                items-center
                gap-2.5
                sm:gap-3
                lg:gap-4
                min-w-0
              "
            >
              {/* ICON */}
              <div
                className={`
                  shrink-0
                  flex
                  items-center
                  justify-center
                  w-10
                  h-10
                  sm:w-11
                  sm:h-11
                  lg:w-12
                  lg:h-12
                  rounded-xl
                  ${stat.iconBg}
                `}
              >
                <Icon
                  className={`
                    ${stat.iconColor}
                    text-base
                    sm:text-lg
                    lg:text-xl
                  `}
                />
              </div>

              {/* CONTENT */}
              <div className="min-w-0 flex-1">
                <p
                  className={`
                    ${theme.colors.text}
                    opacity-70
                    text-[11px]
                    sm:text-xs
                    lg:text-sm
                    leading-tight
                    truncate
                  `}
                >
                  {stat.label}
                </p>

                <p
                  className={`
                    mt-1
                    font-bold
                    leading-tight
                    truncate
                    text-base
                    min-[360px]:text-lg
                    sm:text-xl
                    lg:text-2xl
                    ${
                      stat.highlight
                        ? theme.colors.primary
                        : theme.colors.text
                    }
                  `}
                >
                  {stat.value}
                </p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default AffiliateStats;
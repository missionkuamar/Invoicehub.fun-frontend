// frontend/src/components/affiliate/WithdrawalStats.jsx

import React from 'react';
import {
  FaChartLine,
  FaWallet,
  FaDownload,
  FaClock,
} from 'react-icons/fa';
import { useTheme } from '../../themes/ThemeProvider';

const WithdrawalStats = ({ withdrawStats, withdrawals = [] }) => {
  const { theme } = useTheme();

  // ============================================================
  // SAFE VALUES
  // ============================================================

  const totalEarnings = Number(withdrawStats?.totalEarnings) || 0;
  const availableBalance = Number(withdrawStats?.availableBalance) || 0;
  const totalWithdrawn = Number(withdrawStats?.totalWithdrawn) || 0;
  const pendingWithdrawals =
    Number(withdrawStats?.pendingWithdrawals) || 0;

  // ============================================================
  // MAIN STATS
  // ============================================================

  const statsData = [
    {
      label: 'Total Earnings',
      value: `₹${totalEarnings.toFixed(2)}`,
      icon: FaChartLine,
      iconBg: 'bg-gradient-to-r from-purple-500 to-pink-500',
      iconColor: 'text-white',
      textColor: theme.colors.primary,
    },
    {
      label: 'Available Balance',
      value: `₹${availableBalance.toFixed(2)}`,
      icon: FaWallet,
      iconBg: 'bg-green-500/20',
      iconColor: 'text-green-600 dark:text-green-400',
      textColor: 'text-green-600 dark:text-green-400',
    },
    {
      label: 'Total Withdrawn',
      value: `₹${totalWithdrawn.toFixed(2)}`,
      icon: FaDownload,
      iconBg: 'bg-blue-500/20',
      iconColor: 'text-blue-600 dark:text-blue-400',
      textColor: 'text-blue-600 dark:text-blue-400',
    },
    {
      label: 'Pending Withdrawals',
      value: `₹${pendingWithdrawals.toFixed(2)}`,
      icon: FaClock,
      iconBg: 'bg-yellow-500/20',
      iconColor: 'text-yellow-600 dark:text-yellow-400',
      textColor: 'text-yellow-600 dark:text-yellow-400',
      highlight: true,
    },
  ];

  // ============================================================
  // STATUS COUNTS
  // ============================================================

  const statusCounts = [
    {
      label: 'Total',
      value: withdrawals.length,
      color: theme.colors.text,
    },
    {
      label: 'Pending',
      value: withdrawals.filter(
        (w) => w.status === 'pending'
      ).length,
      color: 'text-yellow-600 dark:text-yellow-400',
    },
    {
      label: 'Processing',
      value: withdrawals.filter(
        (w) => w.status === 'processing'
      ).length,
      color: 'text-purple-600 dark:text-purple-400',
    },
    {
      label: 'Completed',
      value: withdrawals.filter(
        (w) => w.status === 'completed'
      ).length,
      color: 'text-green-600 dark:text-green-400',
    },
    {
      label: 'Failed',
      value: withdrawals.filter(
        (w) => w.status === 'failed'
      ).length,
      color: 'text-red-600 dark:text-red-400',
    },
    {
      label: 'Cancelled',
      value: withdrawals.filter(
        (w) => w.status === 'cancelled'
      ).length,
      color: 'text-gray-600 dark:text-gray-400',
    },
  ];

  // ============================================================
  // UI
  // ============================================================

  return (
    <div className="w-full min-w-0 space-y-3 sm:space-y-4">

      {/* ======================================================
          MAIN STATS CARDS
      ====================================================== */}

      <div
        className="
          grid
          grid-cols-1
          min-[420px]:grid-cols-2
          lg:grid-cols-4
          gap-3
          sm:gap-4
          w-full
        "
      >
        {statsData.map((stat, index) => {
          const Icon = stat.icon;

          return (
            <div
              key={index}
              className={`
                ${theme.colors.card}
                w-full
                min-w-0
                p-3
                sm:p-4
                md:p-5
                rounded-xl
                sm:rounded-2xl
                border
                ${theme.colors.border}
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
                  justify-between
                  gap-3
                  min-w-0
                "
              >
                {/* TEXT */}

                <div className="min-w-0 flex-1">
                  <p
                    className={`
                      text-[11px]
                      sm:text-xs
                      md:text-sm
                      ${theme.colors.text}
                      opacity-70
                      truncate
                    `}
                    title={stat.label}
                  >
                    {stat.label}
                  </p>

                  <p
                    className={`
                      mt-1
                      text-base
                      sm:text-lg
                      md:text-2xl
                      font-bold
                      ${stat.textColor}
                      truncate
                    `}
                    title={stat.value}
                  >
                    {stat.value}
                  </p>
                </div>

                {/* ICON */}

                <div
                  className={`
                    shrink-0
                    w-9
                    h-9
                    sm:w-10
                    sm:h-10
                    md:w-12
                    md:h-12
                    rounded-lg
                    sm:rounded-xl
                    ${stat.iconBg}
                    flex
                    items-center
                    justify-center
                  `}
                >
                  <Icon
                    className={`
                      text-sm
                      sm:text-base
                      md:text-xl
                      ${stat.iconColor}
                    `}
                  />
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* ======================================================
          QUICK STATUS SUMMARY
      ====================================================== */}

      <div
        className={`
          w-full
          min-w-0
          ${theme.colors.background}
          rounded-xl
          sm:rounded-2xl
          p-3
          sm:p-4
          border
          ${theme.colors.border}
          overflow-hidden
        `}
      >
        <div
          className="
            grid
            grid-cols-2
            sm:grid-cols-3
            lg:grid-cols-6
            gap-2
            sm:gap-3
            md:gap-4
          "
        >
          {statusCounts.map((status, index) => (
            <div
              key={index}
              className={`
                min-w-0
                text-center
                rounded-lg
                sm:rounded-xl
                px-2
                py-2
                sm:py-3
                ${theme.colors.card}
                border
                ${theme.colors.border}
              `}
            >
              <p
                className={`
                  text-[10px]
                  sm:text-xs
                  ${theme.colors.text}
                  opacity-60
                  truncate
                `}
                title={status.label}
              >
                {status.label}
              </p>

              <p
                className={`
                  mt-0.5
                  text-sm
                  sm:text-base
                  md:text-lg
                  font-bold
                  ${status.color}
                `}
              >
                {status.value}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WithdrawalStats;
// frontend/src/components/admin/AdminStats.jsx

import React from 'react';
import {
  FaUsers,
  FaFileInvoice,
  FaMoneyBill,
  FaCreditCard,
  FaBuilding,
  FaWallet,
  FaServer,
} from 'react-icons/fa';
import { useTheme } from '../../themes/ThemeProvider';

const AdminStats = ({ stats = {} }) => {
  const { theme } = useTheme();

  //console.log(stats)
  const statCards = [
    {
      title: 'Total Users',
      value: stats.totalUsers || 0,
      icon: FaUsers,
      iconBg: 'bg-blue-500/10',
      iconColor: 'text-blue-500',
      change: '+12%',
      positive: true,
    },
    {
      title: 'Total Invoices',
      value: stats.totalInvoices || 0,
      icon: FaFileInvoice,
      iconBg: 'bg-green-500/10',
      iconColor: 'text-green-500',
      change: '+8%',
      positive: true,
    },
    {
      title: 'Revenue',
      value: `₹${Number(stats.totalRevenue || 0).toLocaleString('en-IN')}`,
      icon: FaMoneyBill,
      iconBg: 'bg-purple-500/10',
      iconColor: 'text-purple-500',
      change: '+15%',
      positive: true,
    },
    {
      title: 'Active Subscriptions',
      value: stats.activeSubscriptions || 0,
      icon: FaCreditCard,
      iconBg: 'bg-orange-500/10',
      iconColor: 'text-orange-500',
      change: '+5%',
      positive: true,
    },
    {
      title: 'Total Companies',
      value: stats.totalCompanies || 0,
      icon: FaBuilding,
      iconBg: 'bg-cyan-500/10',
      iconColor: 'text-cyan-500',
      change: '+10%',
      positive: true,
    },
    {
      title: 'Pending Withdrawals',
      value: stats.pendingWithdrawals || 0,
      icon: FaWallet,
      iconBg:
        stats.pendingWithdrawals > 0
          ? 'bg-yellow-500/10'
          : 'bg-green-500/10',
      iconColor:
        stats.pendingWithdrawals > 0
          ? 'text-yellow-500'
          : 'text-green-500',
      change:
        stats.pendingWithdrawals > 0
          ? 'Needs attention'
          : 'All clear',
      warning: stats.pendingWithdrawals > 0,
    },
    {
      title: 'Total Withdrawals',
      value: `₹${Number(stats.totalWithdrawals || 0).toLocaleString(
        'en-IN'
      )}`,
      icon: FaWallet,
      iconBg: 'bg-pink-500/10',
      iconColor: 'text-pink-500',
      change: '+7%',
      positive: true,
    },
    {
      title: 'System Status',
      value: 'Online',
      icon: FaServer,
      iconBg: 'bg-emerald-500/10',
      iconColor: 'text-emerald-500',
      change: 'All systems operational',
      positive: true,
    },
  ];

  return (
    <div className="w-full">
      <div
        className="
          grid
          grid-cols-1
          xs:grid-cols-2
          md:grid-cols-2
          lg:grid-cols-3
          xl:grid-cols-4
          gap-3
          sm:gap-4
          lg:gap-5
        "
      >
        {statCards.map((stat, index) => {
          const Icon = stat.icon;

          return (
            <div
              key={index}
              className={`
                ${theme.colors.card}
                border
                ${theme.colors.border}
                rounded-2xl
                p-4
                sm:p-5
                transition-all
                duration-200
                hover:shadow-md
                hover:-translate-y-0.5
                min-w-0
                ${
                  stat.warning
                    ? 'border-yellow-500/40'
                    : ''
                }
              `}
            >
              {/* Top */}
              <div className="flex items-start justify-between gap-3">
                {/* Icon */}
                <div
                  className={`
                    ${stat.iconBg}
                    w-10
                    h-10
                    sm:w-11
                    sm:h-11
                    rounded-xl
                    flex
                    items-center
                    justify-center
                    flex-shrink-0
                  `}
                >
                  <Icon
                    className={`${stat.iconColor} text-lg sm:text-xl`}
                  />
                </div>

                {/* Change */}
                <span
                  className={`
                    text-[10px]
                    sm:text-xs
                    font-medium
                    text-right
                    leading-tight
                    ${
                      stat.warning
                        ? 'text-yellow-600 dark:text-yellow-400'
                        : stat.positive
                        ? 'text-green-600 dark:text-green-400'
                        : 'text-gray-500'
                    }
                  `}
                >
                  {stat.change}
                </span>
              </div>

              {/* Value */}
              <div className="mt-4 min-w-0">
                <p
                  className={`
                    ${theme.colors.text}
                    font-bold
                    text-xl
                    sm:text-2xl
                    lg:text-3xl
                    leading-tight
                    break-words
                  `}
                >
                  {stat.value}
                </p>

                {/* Label */}
                <p
                  className={`
                    ${theme.colors.text}
                    opacity-65
                    text-xs
                    sm:text-sm
                    mt-1
                    truncate
                  `}
                  title={stat.title}
                >
                  {stat.title}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default AdminStats;
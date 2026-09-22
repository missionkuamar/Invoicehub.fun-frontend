// frontend/src/components/admin/AdminHeader.jsx
import React from 'react';
import { FaCheckCircle, FaCalendarAlt, FaChartLine } from 'react-icons/fa';
import { useTheme } from '../../themes/ThemeProvider';

const AdminHeader = ({ stats }) => {
  const { theme } = useTheme();

  const formattedDate = new Date().toLocaleDateString('en-IN', {
    day: 'numeric',
    month: 'short',
    year: 'numeric',
  });

  return (
    <div
      className={`
        ${theme.colors.card}
        rounded-2xl
        border ${theme.colors.border}
        p-4 sm:p-5 lg:p-6
        overflow-hidden
      `}
    >
      <div
        className="
          flex
          flex-col
          lg:flex-row
          lg:items-center
          lg:justify-between
          gap-4
        "
      >
        {/* Left Section */}
        <div className="flex items-start gap-3 min-w-0">
          <div
            className="
              hidden sm:flex
              items-center justify-center
              w-11 h-11
              rounded-xl
              bg-blue-500/10
              flex-shrink-0
            "
          >
            <FaChartLine className="text-blue-500 text-lg" />
          </div>

          <div className="min-w-0">
            <h1
              className={`
                text-xl
                sm:text-2xl
                lg:text-3xl
                font-bold
                ${theme.colors.text}
                leading-tight
                break-words
              `}
            >
              📊 Admin Dashboard
            </h1>

            <p
              className={`
                text-xs
                sm:text-sm
                lg:text-base
                ${theme.colors.text}
                opacity-70
                mt-1
                max-w-2xl
              `}
            >
              Overview of your platform's performance and analytics
            </p>
          </div>
        </div>

        {/* Right Section */}
        <div
          className="
            flex
            flex-wrap
            items-center
            gap-2
            w-full
            lg:w-auto
          "
        >
          {/* System Status */}
          <div
            className="
              flex
              items-center
              gap-1.5
              bg-green-100
              dark:bg-green-900/30
              text-green-700
              dark:text-green-400
              px-3
              py-2
              rounded-xl
              text-xs
              sm:text-sm
              font-medium
              whitespace-nowrap
            "
          >
            <FaCheckCircle className="text-green-500 flex-shrink-0" />
            <span>System Online</span>
          </div>

          {/* Date */}
          <div
            className={`
              flex
              items-center
              gap-1.5
              ${theme.colors.background}
              border ${theme.colors.border}
              px-3
              py-2
              rounded-xl
              text-xs
              sm:text-sm
              ${theme.colors.text}
              opacity-80
              whitespace-nowrap
            `}
          >
            <FaCalendarAlt
              className={`${theme.colors.primary} flex-shrink-0`}
            />

            <span>{formattedDate}</span>
          </div>
        </div>
      </div>

      {/* Mobile Divider */}
      <div
        className={`
          lg:hidden
          mt-4
          pt-3
          border-t
          ${theme.colors.border}
          flex
          items-center
          justify-between
          text-xs
          ${theme.colors.text}
          opacity-60
        `}
      >
        <span>Platform Overview</span>

        <span>
          {stats?.totalUsers || 0} users
        </span>
      </div>
    </div>
  );
};

export default AdminHeader;
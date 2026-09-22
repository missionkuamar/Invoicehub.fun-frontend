// frontend/src/components/admin/users/AdminUsersHeader.jsx

import React from 'react';
import {
  FaUserPlus,
  FaSync,
  FaSpinner,
  FaUsers,
} from 'react-icons/fa';
import { useTheme } from '../../../themes/ThemeProvider';

const AdminUsersHeader = ({
  totalUsers = 0,
  onRefresh,
  onAddUser,
  loading = false,
}) => {
  const { theme } = useTheme();

  return (
    <div
      className={`
        ${theme.colors.card}
        rounded-2xl
        border ${theme.colors.border}
        p-4 md:p-6
        shadow-sm
      `}
    >
      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-5">

        {/* Left Section */}
        <div className="min-w-0">
          <div className="flex items-center gap-3">

            {/* Icon */}
            <div
              className="
                w-11 h-11
                md:w-12 md:h-12
                rounded-xl
                bg-blue-500/10
                dark:bg-blue-500/15
                flex items-center justify-center
                flex-shrink-0
              "
            >
              <FaUsers className="text-blue-500 text-lg md:text-xl" />
            </div>

            {/* Title */}
            <div className="min-w-0">
              <h1
                className={`
                  text-xl md:text-2xl
                  font-bold
                  ${theme.colors.text}
                  truncate
                `}
              >
                User Management
              </h1>

              <p
                className={`
                  text-xs md:text-sm
                  ${theme.colors.text}
                  opacity-60
                  mt-0.5
                `}
              >
                Manage and monitor platform users
              </p>
            </div>

          </div>

          {/* User Count */}
          <div className="mt-4 flex items-center gap-2">
            <span
              className={`
                text-xs md:text-sm
                ${theme.colors.text}
                opacity-60
              `}
            >
              Total Users
            </span>

            <span
              className={`
                inline-flex items-center
                px-2.5 py-1
                rounded-lg
                text-xs md:text-sm
                font-semibold
                bg-blue-500/10
                text-blue-600
                dark:text-blue-400
              `}
            >
              {totalUsers.toLocaleString()}
            </span>
          </div>
        </div>

        {/* Right Section */}
        <div className="flex flex-col sm:flex-row gap-2 w-full lg:w-auto">

          {/* Refresh Button */}
          <button
            type="button"
            onClick={onRefresh}
            disabled={loading}
            className={`
              inline-flex
              items-center
              justify-center
              gap-2
              px-4
              py-2.5
              rounded-xl
              border
              ${theme.colors.border}
              ${theme.colors.text}
              bg-transparent
              hover:bg-gray-100
              dark:hover:bg-gray-800
              transition-all
              duration-200
              text-sm
              font-medium
              disabled:opacity-50
              disabled:cursor-not-allowed
              active:scale-[0.98]
            `}
          >
            {loading ? (
              <FaSpinner className="animate-spin" />
            ) : (
              <FaSync />
            )}

            {loading ? 'Refreshing...' : 'Refresh'}
          </button>

          {/* Add User Button */}
          {onAddUser && (
            <button
              type="button"
              onClick={onAddUser}
              className={`
                inline-flex
                items-center
                justify-center
                gap-2
                px-4
                py-2.5
                rounded-xl
                ${theme.colors.button}
                text-white
                text-sm
                font-medium
                shadow-sm
                hover:shadow-md
                hover:-translate-y-0.5
                transition-all
                duration-200
                active:scale-[0.98]
              `}
            >
              <FaUserPlus />
              Add User
            </button>
          )}

        </div>
      </div>
    </div>
  );
};

export default AdminUsersHeader;
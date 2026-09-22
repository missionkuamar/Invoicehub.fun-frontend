// frontend/src/components/admin/users/AdminUsersTable.jsx

import React from 'react';
import {
  FaEye,
  FaEdit,
  FaTrash,
  FaUserCheck,
  FaUserSlash,
  FaUsers,
  FaChevronLeft,
  FaChevronRight,
} from 'react-icons/fa';
import { useTheme } from '../../../themes/ThemeProvider';

const AdminUsersTable = ({
  users,
  pagination,
  onPageChange,
  onViewDetails,
  onLimitChange,
  onEditUser,
  onToggleStatus,
  onDeleteUser,
}) => {
  const { theme } = useTheme();


  //console.log("user.picture", users)
  // ---------------------------------------------------------
  // Status Badge
  // ---------------------------------------------------------
  const getStatusBadge = (isActive) => {
    return (
      <span
        className={`
          inline-flex
          items-center
          gap-1.5
          px-2.5
          py-1
          rounded-full
          text-[11px]
          sm:text-xs
          font-semibold
          whitespace-nowrap
          ${isActive
            ? 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400'
            : 'bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400'
          }
        `}
      >
        <span
          className={`w-1.5 h-1.5 rounded-full ${isActive ? 'bg-green-500' : 'bg-red-500'
            }`}
        />

        {isActive ? 'Active' : 'Inactive'}
      </span>
    );
  };

  // ---------------------------------------------------------
  // Role Badge
  // ---------------------------------------------------------
  const getRoleBadge = (role) => {
    const config = {
      user: {
        color:
          'bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400',
        label: 'User',
      },
      admin: {
        color:
          'bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-400',
        label: 'Admin',
      },
      super_admin: {
        color:
          'bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400',
        label: 'Super Admin',
      },
    };

    const style = config[role] || config.user;

    return (
      <span
        className={`
          inline-flex
          items-center
          px-2.5
          py-1
          rounded-full
          text-[11px]
          sm:text-xs
          font-semibold
          whitespace-nowrap
          ${style.color}
        `}
      >
        {style.label}
      </span>
    );
  };

  // ---------------------------------------------------------
  // Plan Badge
  // ---------------------------------------------------------
  const getPlanBadge = (plan) => {
    const config = {
      free: {
        color:
          'bg-gray-100 text-gray-600 dark:bg-gray-700 dark:text-gray-300',
        label: 'Free',
      },
      basic: {
        color:
          'bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400',
        label: 'Basic',
      },
      pro: {
        color:
          'bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-400',
        label: 'Pro',
      },
      enterprise: {
        color:
          'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400',
        label: 'Enterprise',
      },
    };

    const style = config[plan] || config.free;

    return (
      <span
        className={`
          inline-flex
          items-center
          px-2.5
          py-1
          rounded-full
          text-[11px]
          sm:text-xs
          font-semibold
          whitespace-nowrap
          ${style.color}
        `}
      >
        {style.label}
      </span>
    );
  };

  // ---------------------------------------------------------
  // Empty State
  // ---------------------------------------------------------
  if (!users || users.length === 0) {
    return (
      <div
        className={`
          ${theme.colors.card}
          rounded-2xl
          border
          ${theme.colors.border}
          overflow-hidden
        `}
      >
        <div className="flex flex-col items-center justify-center text-center px-4 py-14 sm:py-16">
          <div
            className={`
              w-16
              h-16
              rounded-2xl
              ${theme.colors.background}
              flex
              items-center
              justify-center
              mb-4
            `}
          >
            <FaUsers
              className={`
                text-2xl
                ${theme.colors.text}
                opacity-30
              `}
            />
          </div>

          <h3
            className={`
              text-base
              sm:text-lg
              font-semibold
              ${theme.colors.text}
            `}
          >
            No users found
          </h3>

          <p
            className={`
              text-xs
              sm:text-sm
              ${theme.colors.text}
              opacity-60
              mt-1
              max-w-sm
            `}
          >
            No users match your current filters. Try changing or clearing the
            filters.
          </p>
        </div>
      </div>
    );
  }

  // ---------------------------------------------------------
  // Main Table
  // ---------------------------------------------------------
  return (
    <div
      className={`
        ${theme.colors.card}
        rounded-2xl
        border
        ${theme.colors.border}
        overflow-hidden
      `}
    >
      {/* Table Header */}
      <div
        className={`
          px-4
          sm:px-5
          py-3
          border-b
          ${theme.colors.border}
          flex
          flex-col
          sm:flex-row
          sm:items-center
          sm:justify-between
          gap-2
        `}
      >
        <div>
          <h3
            className={`
              text-sm
              sm:text-base
              font-semibold
              ${theme.colors.text}
            `}
          >
            All Users
          </h3>

          <p
            className={`
              text-xs
              ${theme.colors.text}
              opacity-50
              mt-0.5
            `}
          >
            Manage user accounts and permissions
          </p>
        </div>

        <span
          className={`
            text-xs
            ${theme.colors.text}
            opacity-60
          `}
        >
          {pagination?.total || users.length} total
        </span>
      </div>

      {/* Horizontal Scroll */}
      <div className="overflow-x-auto scrollbar-thin">
        <table className="w-full min-w-[760px]">
          {/* Head */}
          <thead className={theme.colors.background}>
            <tr>
              <th
                className={`
                  px-4
                  sm:px-5
                  py-3
                  text-left
                  text-[10px]
                  sm:text-xs
                  font-semibold
                  ${theme.colors.text}
                  opacity-60
                  uppercase
                  tracking-wider
                `}
              >
                User
              </th>

              <th
                className={`
                  px-4
                  sm:px-5
                  py-3
                  text-left
                  text-[10px]
                  sm:text-xs
                  font-semibold
                  ${theme.colors.text}
                  opacity-60
                  uppercase
                  tracking-wider
                `}
              >
                Role
              </th>

              <th
                className={`
                  px-4
                  sm:px-5
                  py-3
                  text-left
                  text-[10px]
                  sm:text-xs
                  font-semibold
                  ${theme.colors.text}
                  opacity-60
                  uppercase
                  tracking-wider
                `}
              >
                Plan
              </th>

              <th
                className={`
                  px-4
                  sm:px-5
                  py-3
                  text-left
                  text-[10px]
                  sm:text-xs
                  font-semibold
                  ${theme.colors.text}
                  opacity-60
                  uppercase
                  tracking-wider
                `}
              >
                Status
              </th>

              <th
                className={`
                  px-4
                  sm:px-5
                  py-3
                  text-left
                  text-[10px]
                  sm:text-xs
                  font-semibold
                  ${theme.colors.text}
                  opacity-60
                  uppercase
                  tracking-wider
                `}
              >
                Joined
              </th>

              <th
                className={`
                  px-4
                  sm:px-5
                  py-3
                  text-right
                  text-[10px]
                  sm:text-xs
                  font-semibold
                  ${theme.colors.text}
                  opacity-60
                  uppercase
                  tracking-wider
                `}
              >
                Actions
              </th>
            </tr>
          </thead>

          {/* Body */}
          <tbody>
            {users.map((user) => (
              <tr
                key={user._id}
                className={`
        border-t
        ${theme.colors.border}
        ${theme.colors.hover}
        transition-colors
      `}
              >
                {/* User */}
                <td className="px-4 sm:px-5 py-3.5">
                  <div className="flex items-center gap-3 min-w-[190px]">

                    {/* Avatar */}
                    <div
                      className={`
              w-9 h-9
              sm:w-10 sm:h-10
              rounded-xl
              ${theme.colors.background}
              flex items-center justify-center
              flex-shrink-0
              overflow-hidden
              border
              ${theme.colors.border}
            `}
                    >
                      {user?.picture ? (
                        <img
                          src={user.picture}
                          alt={user?.name || 'User'}
                          className="w-full h-full object-cover"
                          onError={(e) => {
                            e.currentTarget.style.display = 'none';
                          }}
                        />
                      ) : (
                        <span
                          className={`
                  text-sm
                  font-bold
                  ${theme.colors.primary}
                `}
                        >
                          {user?.name?.charAt(0)?.toUpperCase() || 'U'}
                        </span>
                      )}
                    </div>

                    {/* User Info */}
                    <div className="min-w-0">
                      <p
                        className={`
                text-sm
                font-semibold
                ${theme.colors.text}
                truncate
                max-w-[180px]
              `}
                      >
                        {user?.name || 'Unnamed User'}
                      </p>

                      <p
                        className={`
                text-xs
                ${theme.colors.text}
                opacity-50
                truncate
                max-w-[180px]
              `}
                      >
                        {user?.email || 'No email'}
                      </p>
                    </div>
                  </div>
                </td>

                {/* Role */}
                <td className="px-4 sm:px-5 py-3.5">
                  {getRoleBadge(user?.role)}
                </td>

                {/* Plan */}
                <td className="px-4 sm:px-5 py-3.5">
                  {getPlanBadge(user?.subscription?.plan || 'free')}
                </td>

                {/* Status */}
                <td className="px-4 sm:px-5 py-3.5">
                  {getStatusBadge(user?.isActive)}
                </td>

                {/* Joined */}
                <td className="px-4 sm:px-5 py-3.5">
                  <div
                    className={`
            text-xs
            sm:text-sm
            ${theme.colors.text}
            opacity-60
            whitespace-nowrap
          `}
                  >
                    {user?.createdAt
                      ? new Date(user.createdAt).toLocaleDateString('en-IN', {
                        day: 'numeric',
                        month: 'short',
                        year: 'numeric',
                      })
                      : 'N/A'}
                  </div>
                </td>

                {/* Actions */}
                <td className="px-4 sm:px-5 py-3.5">
                  <div className="flex items-center justify-end gap-1.5">

                    {/* View */}
                    <button
                      type="button"
                      onClick={() => onViewDetails(user._id)}
                      className={`
              w-8 h-8
              rounded-lg
              ${theme.colors.hover}
              ${theme.colors.text}
              flex items-center justify-center
              transition-all
              hover:scale-105
            `}
                      title="View Details"
                      aria-label="View user details"
                    >
                      <FaEye className="text-xs opacity-70" />
                    </button>

                    {/* Edit */}
                    <button
                      type="button"
                      onClick={() => onEditUser(user)}
                      className={`
              w-8 h-8
              rounded-lg
              ${theme.colors.hover}
              ${theme.colors.text}
              flex items-center justify-center
              transition-all
              hover:scale-105
            `}
                      title="Edit User"
                      aria-label="Edit user"
                    >
                      <FaEdit className="text-xs opacity-70" />
                    </button>

                    {/* Toggle Status */}
                    <button
                      type="button"
                      onClick={() =>
                        onToggleStatus(user._id, user.isActive)
                      }
                      className={`
              w-8 h-8
              rounded-lg
              flex items-center justify-center
              transition-all
              hover:scale-105
              ${user.isActive
                          ? 'hover:bg-red-50 dark:hover:bg-red-900/20'
                          : 'hover:bg-green-50 dark:hover:bg-green-900/20'
                        }
            `}
                      title={
                        user.isActive
                          ? 'Deactivate User'
                          : 'Activate User'
                      }
                      aria-label={
                        user.isActive
                          ? 'Deactivate user'
                          : 'Activate user'
                      }
                    >
                      {user.isActive ? (
                        <FaUserSlash className="text-xs text-red-500" />
                      ) : (
                        <FaUserCheck className="text-xs text-green-500" />
                      )}
                    </button>

                    {/* Delete */}
                    <button
                      type="button"
                      onClick={() => onDeleteUser(user._id)}
                      className="
              w-8 h-8
              rounded-lg
              flex items-center justify-center
              transition-all
              hover:scale-105
              hover:bg-red-50
              dark:hover:bg-red-900/20
            "
                      title="Delete User"
                      aria-label="Delete user"
                    >
                      <FaTrash className="text-xs text-red-500" />
                    </button>

                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Pagination */}
      <div
        className={`
    flex flex-col lg:flex-row
    items-center justify-between
    gap-4
    px-4 sm:px-5
    py-4
    border-t
    ${theme.colors.border}
  `}
      >
        {/* Left - Showing + Limit */}
        <div className="flex flex-col sm:flex-row items-center gap-3">
          <div
            className={`
        text-sm
        ${theme.colors.text}
        opacity-70
        whitespace-nowrap
      `}
          >
            {pagination.total > 0 ? (
              <>
                Showing{' '}
                <span className="font-semibold opacity-100">
                  {(pagination.page - 1) * pagination.limit + 1}
                </span>
                {' - '}
                <span className="font-semibold opacity-100">
                  {Math.min(
                    pagination.page * pagination.limit,
                    pagination.total
                  )}
                </span>
                {' of '}
                <span className="font-semibold opacity-100">
                  {pagination.total}
                </span>
              </>
            ) : (
              'No users found'
            )}
          </div>

          {/* Page Size */}
          <div className="flex items-center gap-2">
            <span
              className={`
          text-sm
          ${theme.colors.text}
          opacity-70
        `}
            >
              Rows:
            </span>

            <select
              value={pagination.limit}
              onChange={(e) => onLimitChange(Number(e.target.value))}
              className={`
          px-3
          py-1.5
          rounded-lg
          border
          ${theme.colors.border}
          ${theme.colors.background}
          ${theme.colors.text}
          text-sm
          outline-none
          cursor-pointer
        `}
            >
              {[5, 10, 20, 50, 100, 200].map((size) => (
                <option key={size} value={size}>
                  {size}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Right - Pagination */}
        {pagination.pages > 1 && (
          <div className="flex items-center gap-1.5">

            {/* First */}
            <button
              type="button"
              disabled={pagination.page === 1}
              onClick={() => onPageChange(1)}
              className={`
          px-3
          py-1.5
          rounded-lg
          text-sm
          border
          ${theme.colors.border}
          ${theme.colors.text}
          transition-all
          ${pagination.page === 1
                  ? 'opacity-40 cursor-not-allowed'
                  : `${theme.colors.hover} hover:scale-105`
                }
        `}
            >
              First
            </button>

            {/* Previous */}
            <button
              type="button"
              disabled={pagination.page === 1}
              onClick={() => onPageChange(pagination.page - 1)}
              className={`
          px-3
          py-1.5
          rounded-lg
          text-sm
          border
          ${theme.colors.border}
          ${theme.colors.text}
          transition-all
          ${pagination.page === 1
                  ? 'opacity-40 cursor-not-allowed'
                  : `${theme.colors.hover} hover:scale-105`
                }
        `}
            >
              Previous
            </button>

            {/* Page Numbers */}
            {(() => {
              const current = pagination.page;
              const totalPages = pagination.pages;

              let pages = [];

              if (totalPages <= 7) {
                pages = Array.from(
                  { length: totalPages },
                  (_, i) => i + 1
                );
              } else if (current <= 4) {
                pages = [1, 2, 3, 4, 5, '...', totalPages];
              } else if (current >= totalPages - 3) {
                pages = [
                  1,
                  '...',
                  totalPages - 4,
                  totalPages - 3,
                  totalPages - 2,
                  totalPages - 1,
                  totalPages,
                ];
              } else {
                pages = [
                  1,
                  '...',
                  current - 1,
                  current,
                  current + 1,
                  '...',
                  totalPages,
                ];
              }

              return pages.map((page, index) =>
                page === '...' ? (
                  <span
                    key={`dots-${index}`}
                    className={`
                px-2
                py-1.5
                text-sm
                ${theme.colors.text}
                opacity-50
              `}
                  >
                    ...
                  </span>
                ) : (
                  <button
                    key={page}
                    type="button"
                    onClick={() => onPageChange(page)}
                    className={`
                min-w-[36px]
                h-[36px]
                px-2
                rounded-lg
                text-sm
                font-medium
                transition-all
                ${current === page
                        ? `${theme.colors.button} text-white`
                        : `
                      ${theme.colors.text}
                      ${theme.colors.hover}
                      border
                      ${theme.colors.border}
                    `
                      }
              `}
                  >
                    {page}
                  </button>
                )
              );
            })()}

            {/* Next */}
            <button
              type="button"
              disabled={pagination.page === pagination.pages}
              onClick={() => onPageChange(pagination.page + 1)}
              className={`
          px-3
          py-1.5
          rounded-lg
          text-sm
          border
          ${theme.colors.border}
          ${theme.colors.text}
          transition-all
          ${pagination.page === pagination.pages
                  ? 'opacity-40 cursor-not-allowed'
                  : `${theme.colors.hover} hover:scale-105`
                }
        `}
            >
              Next
            </button>

            {/* Last */}
            <button
              type="button"
              disabled={pagination.page === pagination.pages}
              onClick={() => onPageChange(pagination.pages)}
              className={`
          px-3
          py-1.5
          rounded-lg
          text-sm
          border
          ${theme.colors.border}
          ${theme.colors.text}
          transition-all
          ${pagination.page === pagination.pages
                  ? 'opacity-40 cursor-not-allowed'
                  : `${theme.colors.hover} hover:scale-105`
                }
        `}
            >
              Last
            </button>

          </div>
        )}
      </div>
    </div>
  );
};

export default AdminUsersTable;
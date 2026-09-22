// frontend/src/components/admin/users/AdminUsersFilters.jsx

import React from 'react';
import {
  FaSearch,
  FaTimes,
  FaFilter,
  FaUsers,
} from 'react-icons/fa';
import { useTheme } from '../../../themes/ThemeProvider';

const AdminUsersFilters = ({
  filters,
  onFilterChange,
  onClearFilters,
  usersCount = 0,
}) => {
  const { theme } = useTheme();

  const handleChange = (e) => {
    const { name, value } = e.target;
    onFilterChange(name, value);
  };

  const hasActiveFilters = Object.values(filters).some(
    (value) => value && value !== ''
  );

  return (
    <div
      className={`
        ${theme.colors.card}
        rounded-2xl
        border ${theme.colors.border}
        p-4
        md:p-5
        shadow-sm
      `}
    >
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 mb-4">

        <div className="flex items-center gap-2">
          <div
            className="
              w-9 h-9
              rounded-lg
              bg-blue-500/10
              dark:bg-blue-500/15
              flex items-center justify-center
            "
          >
            <FaFilter className="text-blue-500 text-sm" />
          </div>

          <div>
            <h3
              className={`
                text-sm md:text-base
                font-semibold
                ${theme.colors.text}
              `}
            >
              Filters
            </h3>

            <p
              className={`
                text-xs
                ${theme.colors.text}
                opacity-50
              `}
            >
              Search and filter users
            </p>
          </div>
        </div>

        {/* Result Count */}
        <div className="flex items-center gap-2">
          <FaUsers
            className={`
              text-xs
              ${theme.colors.text}
              opacity-50
            `}
          />

          <span
            className={`
              text-xs
              ${theme.colors.text}
              opacity-60
            `}
          >
            {usersCount.toLocaleString()} users
          </span>
        </div>
      </div>

      {/* Filters */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-3">

        {/* Search */}
        <div className="sm:col-span-2 lg:col-span-5">
          <label
            className={`
              block
              text-xs
              font-medium
              ${theme.colors.text}
              opacity-60
              mb-1.5
            `}
          >
            Search Users
          </label>

          <div className="relative">
            <FaSearch
              className={`
                absolute
                left-3
                top-1/2
                -translate-y-1/2
                ${theme.colors.text}
                opacity-40
                pointer-events-none
              `}
            />

            <input
              type="text"
              name="search"
              placeholder="Search by name or email..."
              value={filters.search}
              onChange={handleChange}
              className={`
                w-full
                pl-9
                pr-9
                py-2.5
                rounded-xl
                border
                ${theme.colors.border}
                ${theme.colors.text}
                bg-transparent
                placeholder:opacity-40
                focus:outline-none
                focus:ring-2
                focus:ring-blue-500/30
                focus:border-blue-500
                transition-all
                text-sm
              `}
            />

            {/* Clear Search */}
            {filters.search && (
              <button
                type="button"
                onClick={() => onFilterChange('search', '')}
                className="
                  absolute
                  right-3
                  top-1/2
                  -translate-y-1/2
                  text-gray-400
                  hover:text-gray-600
                  dark:hover:text-gray-200
                  transition-colors
                "
                aria-label="Clear search"
              >
                <FaTimes size={12} />
              </button>
            )}
          </div>
        </div>

        {/* Role */}
        <div className="lg:col-span-2">
          <label
            className={`
              block
              text-xs
              font-medium
              ${theme.colors.text}
              opacity-60
              mb-1.5
            `}
          >
            Role
          </label>

          <select
            name="role"
            value={filters.role}
            onChange={handleChange}
            className={`
              w-full
              px-3
              py-2.5
              rounded-xl
              border
              ${theme.colors.border}
              ${theme.colors.text}
              bg-transparent
              focus:outline-none
              focus:ring-2
              focus:ring-blue-500/30
              focus:border-blue-500
              transition-all
              text-sm
              cursor-pointer
            `}
          >
            <option value="">All Roles</option>
            <option value="user">User</option>
            <option value="admin">Admin</option>
            <option value="super_admin">Super Admin</option>
          </select>
        </div>

        {/* Subscription */}
        <div className="lg:col-span-2">
          <label
            className={`
              block
              text-xs
              font-medium
              ${theme.colors.text}
              opacity-60
              mb-1.5
            `}
          >
            Subscription
          </label>

          <select
            name="subscription"
            value={filters.subscription}
            onChange={handleChange}
            className={`
              w-full
              px-3
              py-2.5
              rounded-xl
              border
              ${theme.colors.border}
              ${theme.colors.text}
              bg-transparent
              focus:outline-none
              focus:ring-2
              focus:ring-blue-500/30
              focus:border-blue-500
              transition-all
              text-sm
              cursor-pointer
            `}
          >
            <option value="">All Plans</option>
            <option value="free">Free</option>
            <option value="basic">Basic</option>
            <option value="pro">Pro</option>
            <option value="enterprise">Enterprise</option>
          </select>
        </div>

        {/* Status */}
        <div className="lg:col-span-2">
          <label
            className={`
              block
              text-xs
              font-medium
              ${theme.colors.text}
              opacity-60
              mb-1.5
            `}
          >
            Status
          </label>

          <select
            name="status"
            value={filters.status}
            onChange={handleChange}
            className={`
              w-full
              px-3
              py-2.5
              rounded-xl
              border
              ${theme.colors.border}
              ${theme.colors.text}
              bg-transparent
              focus:outline-none
              focus:ring-2
              focus:ring-blue-500/30
              focus:border-blue-500
              transition-all
              text-sm
              cursor-pointer
            `}
          >
            <option value="">All Status</option>
            <option value="true">Active</option>
            <option value="false">Inactive</option>
          </select>
        </div>

        {/* Clear Button */}
        <div className="sm:col-span-2 lg:col-span-1 flex items-end">
          <button
            type="button"
            onClick={onClearFilters}
            disabled={!hasActiveFilters}
            className={`
              w-full
              inline-flex
              items-center
              justify-center
              gap-2
              px-3
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
              disabled:opacity-40
              disabled:cursor-not-allowed
              active:scale-[0.98]
            `}
          >
            <FaTimes />
            <span className="lg:hidden">Clear Filters</span>
            <span className="hidden lg:inline">Clear</span>
          </button>
        </div>
      </div>

      {/* Active Filter Summary */}
      {hasActiveFilters && (
        <div
          className={`
            mt-4
            pt-3
            border-t
            ${theme.colors.border}
            flex
            flex-col
            sm:flex-row
            sm:items-center
            sm:justify-between
            gap-2
          `}
        >
          <div className="flex items-center gap-2">
            <span
              className="
                w-2
                h-2
                rounded-full
                bg-blue-500
                animate-pulse
              "
            />

            <span
              className={`
                text-xs
                ${theme.colors.text}
                opacity-60
              `}
            >
              Active filters applied
            </span>
          </div>

          <span
            className="
              text-xs
              font-semibold
              text-blue-600
              dark:text-blue-400
            "
          >
            {usersCount.toLocaleString()} users found
          </span>
        </div>
      )}
    </div>
  );
};

export default AdminUsersFilters;
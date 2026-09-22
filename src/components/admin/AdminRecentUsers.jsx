// frontend/src/components/admin/AdminRecentUsers.jsx

import React from 'react';
import {
  FaUserPlus,
  FaUserCheck,
  FaUserClock,
  FaBuilding,
  FaChevronRight,
} from 'react-icons/fa';
import { useTheme } from '../../themes/ThemeProvider';
import { Link } from 'react-router-dom';

const AdminRecentUsers = ({ users = [] }) => {
  const { theme } = useTheme();

  const getPlanBadge = (plan) => {
    const normalizedPlan = plan?.toLowerCase() || 'free';

    const config = {
      free: {
        color:
          'bg-gray-100 text-gray-600 dark:bg-gray-700/60 dark:text-gray-300',
        icon: FaUserClock,
        label: 'Free',
      },
      basic: {
        color:
          'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400',
        icon: FaUserCheck,
        label: 'Basic',
      },
      pro: {
        color:
          'bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400',
        icon: FaUserCheck,
        label: 'Pro',
      },
      enterprise: {
        color:
          'bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-400',
        icon: FaUserCheck,
        label: 'Enterprise',
      },
    };

    const style = config[normalizedPlan] || config.free;
    const Icon = style.icon;

    return (
      <span
        className={`
          inline-flex
          items-center
          gap-1.5
          px-2.5
          py-1
          rounded-full
          text-[10px]
          sm:text-xs
          font-semibold
          whitespace-nowrap
          ${style.color}
        `}
      >
        <Icon size={10} />
        {style.label}
      </span>
    );
  };

  const formatDate = (date) => {
    if (!date) return '—';

    const parsedDate = new Date(date);

    if (Number.isNaN(parsedDate.getTime())) {
      return '—';
    }

    return parsedDate.toLocaleDateString('en-IN', {
      day: 'numeric',
      month: 'short',
      year: 'numeric',
    });
  };

  const getInitials = (name = '') => {
    const words = name.trim().split(/\s+/);

    if (!words.length || !words[0]) {
      return 'U';
    }

    if (words.length === 1) {
      return words[0].charAt(0).toUpperCase();
    }

    return (
      words[0].charAt(0) + words[words.length - 1].charAt(0)
    ).toUpperCase();
  };

  return (
    <div
      className={`
        ${theme.colors.card}
        rounded-2xl
        border
        ${theme.colors.border}
        p-4
        sm:p-5
        lg:p-6
        w-full
        min-w-0
      `}
    >
      {/* Header */}
      <div className="flex items-center justify-between gap-3 mb-4 sm:mb-5">
        <div className="flex items-center gap-2.5 min-w-0">
          <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-blue-500/10 flex items-center justify-center flex-shrink-0">
            <FaUserPlus className="text-blue-500 text-sm sm:text-base" />
          </div>

          <div className="min-w-0">
            <h3
              className={`
                text-base
                sm:text-lg
                font-semibold
                ${theme.colors.text}
                truncate
              `}
            >
              Recent Users
            </h3>

            <p
              className={`
                hidden
                sm:block
                text-xs
                ${theme.colors.text}
                opacity-50
                mt-0.5
              `}
            >
              Latest registered users
            </p>
          </div>
        </div>

        <Link
          to="/admin/users"
          className={`
            inline-flex
            items-center
            gap-1
            text-xs
            sm:text-sm
            font-medium
            ${theme.colors.primary}
            hover:opacity-80
            transition-opacity
            whitespace-nowrap
          `}
        >
          View All
          <FaChevronRight size={10} />
        </Link>
      </div>

      {/* Users */}
      {users.length === 0 ? (
        <div
          className={`
            flex
            flex-col
            items-center
            justify-center
            py-10
            sm:py-12
            text-center
            ${theme.colors.text}
          `}
        >
          <div className="w-12 h-12 rounded-full bg-blue-500/10 flex items-center justify-center mb-3">
            <FaUsersFallback />
          </div>

          <p className="text-sm font-medium opacity-70">
            No recent users
          </p>

          <p className="text-xs opacity-40 mt-1">
            New registrations will appear here
          </p>
        </div>
      ) : (
        <div className="space-y-2.5 sm:space-y-3">
          {users.slice(0, 5).map((user) => (
            <div
              key={user._id}
              className={`
                group
                flex
                items-center
                gap-3
                p-3
                sm:p-3.5
                rounded-xl
                ${theme.colors.background}
                border
                ${theme.colors.border}
                hover:shadow-sm
                transition-all
                duration-200
                min-w-0
              `}
            >
              {/* Avatar */}
              <div
                className="
                  w-9
                  h-9
                  sm:w-10
                  sm:h-10
                  rounded-full
                  bg-blue-500/10
                  flex
                  items-center
                  justify-center
                  flex-shrink-0
                  text-blue-500
                  text-xs
                  sm:text-sm
                  font-bold
                  overflow-hidden
                "
              >
                {user.picture ? (
                  <img
                    src={user.picture}
                    alt={user.name || 'User'}
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      e.currentTarget.style.display = 'none';
                    }}
                  />
                ) : (
                  getInitials(user.name)
                )}
              </div>

              {/* User Info */}
              <div className="flex-1 min-w-0">
                <p
                  className={`
                    text-sm
                    font-semibold
                    ${theme.colors.text}
                    truncate
                  `}
                  title={user.name}
                >
                  {user.name || 'Unknown User'}
                </p>

                <p
                  className={`
                    text-xs
                    sm:text-sm
                    ${theme.colors.text}
                    opacity-50
                    truncate
                    mt-0.5
                  `}
                  title={user.email}
                >
                  {user.email || 'No email'}
                </p>
              </div>

              {/* Plan + Date */}
              <div
                className="
                  flex
                  flex-col
                  items-end
                  gap-1.5
                  flex-shrink-0
                "
              >
                {getPlanBadge(user.subscription?.plan)}

                <span
                  className={`
                    text-[10px]
                    sm:text-xs
                    ${theme.colors.text}
                    opacity-40
                    whitespace-nowrap
                  `}
                >
                  {formatDate(user.createdAt)}
                </span>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

/**
 * Small fallback icon for empty state.
 */
const FaUsersFallback = () => (
  <FaBuilding className="text-blue-500 text-lg" />
);

export default AdminRecentUsers;
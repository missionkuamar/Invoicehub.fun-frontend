// frontend/src/components/admin/AdminSubscriptionDistribution.jsx
import React from 'react';
import { FaChartPie, FaUsers } from 'react-icons/fa';
import { useTheme } from '../../themes/ThemeProvider';

const AdminSubscriptionDistribution = ({ distribution = [] }) => {
  const { theme } = useTheme();

  const planConfig = {
    free: {
      label: 'Free',
      bar: 'bg-gray-400 dark:bg-gray-500',
      icon: '🆓',
    },
    basic: {
      label: 'Basic',
      bar: 'bg-green-500',
      icon: '⚡',
    },
    pro: {
      label: 'Pro',
      bar: 'bg-blue-500',
      icon: '🚀',
    },
    enterprise: {
      label: 'Enterprise',
      bar: 'bg-purple-500',
      icon: '🏢',
    },
  };

  const total =
    distribution?.reduce(
      (sum, item) => sum + Number(item?.count || 0),
      0
    ) || 0;

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
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 mb-5">
        <div className="flex items-center gap-3 min-w-0">
          <div
            className={`
              p-2.5
              rounded-xl
              bg-purple-500/10
              flex-shrink-0
            `}
          >
            <FaChartPie className="text-purple-500 text-lg" />
          </div>

          <div className="min-w-0">
            <h3
              className={`
                text-base sm:text-lg
                font-semibold
                ${theme.colors.text}
                truncate
              `}
            >
              Subscription Distribution
            </h3>

            <p
              className={`
                text-xs sm:text-sm
                ${theme.colors.text}
                opacity-60
              `}
            >
              Overview of user subscription plans
            </p>
          </div>
        </div>

        <div
          className={`
            flex items-center gap-2
            px-3 py-2
            rounded-xl
            ${theme.colors.background}
            border ${theme.colors.border}
            w-fit
          `}
        >
          <FaUsers
            className={`${theme.colors.primary} text-sm`}
          />

          <span
            className={`
              text-xs sm:text-sm
              font-medium
              ${theme.colors.text}
              whitespace-nowrap
            `}
          >
            {total} Users
          </span>
        </div>
      </div>

      {/* Empty State */}
      {distribution.length === 0 ? (
        <div
          className={`
            text-center
            py-10 sm:py-12
            ${theme.colors.text}
            opacity-60
          `}
        >
          <FaChartPie className="text-4xl mx-auto mb-3 opacity-30" />

          <p className="text-sm font-medium">
            No subscription data available
          </p>

          <p className="text-xs mt-1 opacity-70">
            Subscription statistics will appear here.
          </p>
        </div>
      ) : (
        <>
          {/* Subscription Cards */}
          <div
            className="
              grid
              grid-cols-1
              sm:grid-cols-2
              lg:grid-cols-3
              xl:grid-cols-4
              gap-3
              sm:gap-4
            "
          >
            {distribution.map((item) => {
              const plan = String(item?._id || 'free').toLowerCase();
              const count = Number(item?.count || 0);

              const config = planConfig[plan] || {
                label:
                  plan.charAt(0).toUpperCase() +
                  plan.slice(1),
                bar: 'bg-gray-500',
                icon: '📦',
              };

              const percentage =
                total > 0
                  ? ((count / total) * 100).toFixed(1)
                  : '0.0';

              return (
                <div
                  key={plan}
                  className={`
                    ${theme.colors.background}
                    rounded-xl
                    border ${theme.colors.border}
                    p-4
                    transition-all
                    duration-200
                    hover:shadow-md
                    hover:-translate-y-0.5
                    min-w-0
                  `}
                >
                  {/* Card Header */}
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <div className="flex items-center gap-2 min-w-0">
                      <span className="text-base flex-shrink-0">
                        {config.icon}
                      </span>

                      <span
                        className={`
                          text-sm
                          font-semibold
                          ${theme.colors.text}
                          truncate
                        `}
                      >
                        {config.label}
                      </span>
                    </div>

                    <span
                      className={`
                        text-xs
                        font-bold
                        ${theme.colors.text}
                        whitespace-nowrap
                      `}
                    >
                      {percentage}%
                    </span>
                  </div>

                  {/* Progress */}
                  <div
                    className="
                      w-full
                      h-2
                      bg-gray-200
                      dark:bg-gray-700
                      rounded-full
                      overflow-hidden
                    "
                  >
                    <div
                      className={`
                        h-full
                        ${config.bar}
                        rounded-full
                        transition-all
                        duration-700
                      `}
                      style={{
                        width: `${Math.min(
                          Number(percentage),
                          100
                        )}%`,
                      }}
                    />
                  </div>

                  {/* Count */}
                  <div className="mt-3 flex items-end justify-between gap-2">
                    <div>
                      <p
                        className={`
                          text-xl sm:text-2xl
                          font-bold
                          ${theme.colors.text}
                        `}
                      >
                        {count.toLocaleString()}
                      </p>

                      <p
                        className={`
                          text-xs
                          ${theme.colors.text}
                          opacity-60
                        `}
                      >
                        {count === 1 ? 'user' : 'users'}
                      </p>
                    </div>

                    <span
                      className={`
                        text-xs
                        ${theme.colors.text}
                        opacity-50
                      `}
                    >
                      {percentage}%
                    </span>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Footer */}
          <div
            className={`
              mt-5
              pt-4
              border-t ${theme.colors.border}
              flex
              flex-col
              sm:flex-row
              sm:items-center
              sm:justify-between
              gap-2
            `}
          >
            <span
              className={`
                text-xs
                ${theme.colors.text}
                opacity-60
              `}
            >
              Total Subscriptions:{' '}
              <strong className="font-semibold opacity-100">
                {total.toLocaleString()}
              </strong>
            </span>

            <span
              className={`
                text-xs
                ${theme.colors.text}
                opacity-50
              `}
            >
              Updated: {new Date().toLocaleDateString('en-IN')}
            </span>
          </div>
        </>
      )}
    </div>
  );
};

export default AdminSubscriptionDistribution;
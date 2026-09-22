// frontend/src/pages/admin/AdminDashboard.jsx

import React, { useCallback, useEffect, useState } from 'react';
import {
  FaSpinner,
  FaSyncAlt,
  FaExclamationTriangle,
} from 'react-icons/fa';

import { useTheme } from '../../themes/ThemeProvider';
import api from '../../services/api';
import toast from 'react-hot-toast';

// Components
import AdminStats from '../../components/admin/AdminStats';
import AdminRecentUsers from '../../components/admin/AdminRecentUsers';
import AdminRecentInvoices from '../../components/admin/AdminRecentInvoices';
import AdminSubscriptionDistribution from '../../components/admin/AdminSubscriptionDistribution';
import AdminHeader from '../../components/admin/AdminHeader';

const defaultStats = {
  totalUsers: 0,
  totalInvoices: 0,
  totalRevenue: 0,
  activeSubscriptions: 0,
  totalCompanies: 0,
  recentUsers: [],
  recentInvoices: [],
  subscriptionDistribution: [],
  monthlyStats: [],
  pendingWithdrawals: 0,
  totalWithdrawals: 0,
};

const AdminDashboard = () => {
  const { theme } = useTheme();

  const [loading, setLoading] = useState(true);
  const [refreshing, setRefreshing] = useState(false);
  const [error, setError] = useState('');

  const [stats, setStats] = useState(defaultStats);

  // ============================================================
  // FETCH DASHBOARD
  // ============================================================

  const fetchDashboardStats = useCallback(async (isRefresh = false) => {
    try {
      if (isRefresh) {
        setRefreshing(true);
      } else {
        setLoading(true);
      }

      setError('');

      const response = await api.get('/admin/stats');
///console.log("state wala hia ", response)
      if (!response.data?.success) {
        throw new Error(
          response.data?.message ||
            'Failed to load dashboard statistics'
        );
      }

      const data = response.data?.data || {};

      setStats({
        ...defaultStats,
        ...data,

        // Make sure arrays always remain arrays
        recentUsers: Array.isArray(data.recentUsers)
          ? data.recentUsers
          : [],

        recentInvoices: Array.isArray(data.recentInvoices)
          ? data.recentInvoices
          : [],

        subscriptionDistribution: Array.isArray(
          data.subscriptionDistribution
        )
          ? data.subscriptionDistribution
          : [],

        monthlyStats: Array.isArray(data.monthlyStats)
          ? data.monthlyStats
          : [],
      });
    } catch (error) {
      console.error('Admin dashboard error:', error);

      const message =
        error.response?.data?.message ||
        error.message ||
        'Failed to load dashboard';

      setError(message);

      toast.error(message);
    } finally {
      setLoading(false);
      setRefreshing(false);
    }
  }, []);

  // ============================================================
  // INITIAL LOAD
  // ============================================================

  useEffect(() => {
    fetchDashboardStats();
  }, [fetchDashboardStats]);

  // ============================================================
  // LOADING STATE
  // ============================================================

  if (loading) {
    return (
      <div
        className={`
          min-h-screen
          ${theme.colors.background}
          flex
          items-center
          justify-center
          px-4
        `}
      >
        <div
          className={`
            w-full
            max-w-sm
            ${theme.colors.card}
            border
            ${theme.colors.border}
            rounded-2xl
            p-6
            sm:p-8
            text-center
            shadow-sm
          `}
        >
          <FaSpinner
            className={`
              animate-spin
              text-4xl
              ${theme.colors.primary}
              mx-auto
              mb-4
            `}
          />

          <h2
            className={`
              text-base
              sm:text-lg
              font-semibold
              ${theme.colors.text}
            `}
          >
            Loading dashboard
          </h2>

          <p
            className={`
              text-xs
              sm:text-sm
              ${theme.colors.text}
              opacity-60
              mt-1
            `}
          >
            Please wait while we fetch the latest statistics...
          </p>
        </div>
      </div>
    );
  }

  // ============================================================
  // ERROR STATE
  // ============================================================

  if (error && !stats) {
    return (
      <div
        className={`
          min-h-screen
          ${theme.colors.background}
          flex
          items-center
          justify-center
          px-4
        `}
      >
        <div
          className={`
            w-full
            max-w-md
            ${theme.colors.card}
            border
            ${theme.colors.border}
            rounded-2xl
            p-6
            text-center
          `}
        >
          <FaExclamationTriangle
            className="
              text-4xl
              text-red-500
              mx-auto
              mb-4
            "
          />

          <h2
            className={`
              text-lg
              font-semibold
              ${theme.colors.text}
            `}
          >
            Unable to load dashboard
          </h2>

          <p
            className={`
              text-sm
              ${theme.colors.text}
              opacity-60
              mt-2
            `}
          >
            {error}
          </p>

          <button
            onClick={() => fetchDashboardStats()}
            className={`
              mt-5
              ${theme.colors.button}
              text-white
              px-5
              py-2.5
              rounded-xl
              text-sm
              font-medium
              inline-flex
              items-center
              gap-2
              transition-all
              hover:scale-[1.02]
            `}
          >
            <FaSyncAlt />
            Try Again
          </button>
        </div>
      </div>
    );
  }

  // ============================================================
  // DASHBOARD
  // ============================================================

  return (
    <div
      className={`
        min-h-screen
        w-full
        ${theme.colors.background}
        px-3
        py-4
        sm:px-4
        sm:py-5
        md:px-6
        md:py-6
        lg:px-8
      `}
    >
      <div
        className="
          w-full
          max-w-[1600px]
          mx-auto
        "
      >
        {/* ====================================================
            TOP HEADER
        ==================================================== */}

        <div className="space-y-4 md:space-y-6">

          <div
            className="
              flex
              flex-col
              gap-3
              sm:flex-row
              sm:items-center
              sm:justify-between
            "
          >
            <div className="min-w-0">
              <h1
                className={`
                  text-xl
                  sm:text-2xl
                  lg:text-3xl
                  font-bold
                  ${theme.colors.text}
                  truncate
                `}
              >
                Admin Dashboard
              </h1>

              <p
                className={`
                  text-xs
                  sm:text-sm
                  ${theme.colors.text}
                  opacity-60
                  mt-1
                `}
              >
                Monitor your InvoicePro platform
              </p>
            </div>

            <button
              type="button"
              onClick={() => fetchDashboardStats(true)}
              disabled={refreshing}
              className={`
                self-start
                sm:self-auto
                flex
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
                text-sm
                font-medium
                disabled:opacity-50
                disabled:cursor-not-allowed
              `}
            >
              <FaSyncAlt
                className={
                  refreshing
                    ? 'animate-spin'
                    : ''
                }
              />

              <span>
                {refreshing
                  ? 'Refreshing...'
                  : 'Refresh'}
              </span>
            </button>
          </div>

          {/* ==================================================
              EXISTING ADMIN HEADER
          ================================================== */}

          <AdminHeader stats={stats} />

          {/* ==================================================
              MAIN STATS
          ================================================== */}

          <AdminStats stats={stats} />

          {/* ==================================================
              USERS + INVOICES
          ================================================== */}

          <div
            className="
              grid
              grid-cols-1
              xl:grid-cols-2
              gap-4
              md:gap-6
            "
          >
            <div className="min-w-0">
              <AdminRecentUsers
                users={stats.recentUsers}
              />
            </div>

            <div className="min-w-0">
              <AdminRecentInvoices
                invoices={stats.recentInvoices}
              />
            </div>
          </div>

          {/* ==================================================
              SUBSCRIPTION DISTRIBUTION
          ================================================== */}

          <div className="min-w-0">
            <AdminSubscriptionDistribution
              distribution={
                stats.subscriptionDistribution
              }
            />
          </div>

        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
// frontend/src/components/admin/users/AdminUserDetailsModal.jsx

import React, { useEffect } from 'react';
import {
  FaTimes,
  FaUser,
  FaEnvelope,
  FaShieldAlt,
  FaFileInvoice,
  FaCalendarAlt,
  FaCreditCard,
  FaCheckCircle,
  FaTimesCircle,
  FaReceipt,
} from 'react-icons/fa';
import { useTheme } from '../../../themes/ThemeProvider';

const AdminUserDetailsModal = ({
  isOpen,
  onClose,
  userDetails,
}) => {
  const { theme } = useTheme();

  // Lock background scroll while modal is open
  useEffect(() => {
    if (!isOpen) return;

    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    return () => {
      document.body.style.overflow = originalOverflow;
    };
  }, [isOpen]);

  if (!isOpen || !userDetails) return null;

  const user = userDetails.user || {};
  const stats = userDetails.stats || {};
  const invoices = userDetails.invoices || [];

  // ============================================================
  // HELPERS
  // ============================================================

  const formatDate = (date, options = {}) => {
    if (!date) return 'N/A';

    const parsedDate = new Date(date);

    if (Number.isNaN(parsedDate.getTime())) {
      return 'N/A';
    }

    return parsedDate.toLocaleDateString('en-IN', {
      day: 'numeric',
      month: 'short',
      year: 'numeric',
      ...options,
    });
  };

  const formatAmount = (amount) => {
    const value = Number(amount || 0);

    return `₹${value.toLocaleString('en-IN', {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    })}`;
  };

  // ============================================================
  // STATUS BADGE
  // ============================================================

  const getStatusBadge = (isActive) => {
    if (isActive) {
      return (
        <span
          className="
            inline-flex
            items-center
            gap-1.5
            px-2.5
            py-1
            rounded-full
            text-xs
            font-semibold
            bg-green-100
            text-green-700
            dark:bg-green-900/30
            dark:text-green-400
          "
        >
          <span className="w-1.5 h-1.5 rounded-full bg-green-500" />
          Active
        </span>
      );
    }

    return (
      <span
        className="
          inline-flex
          items-center
          gap-1.5
          px-2.5
          py-1
          rounded-full
          text-xs
          font-semibold
          bg-red-100
          text-red-700
          dark:bg-red-900/30
          dark:text-red-400
        "
      >
        <span className="w-1.5 h-1.5 rounded-full bg-red-500" />
        Inactive
      </span>
    );
  };

  // ============================================================
  // ROLE BADGE
  // ============================================================

  const getRoleBadge = (role) => {
    const config = {
      user: {
        color:
          'bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400',
        icon: FaUser,
        label: 'User',
      },

      admin: {
        color:
          'bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-400',
        icon: FaShieldAlt,
        label: 'Admin',
      },

      super_admin: {
        color:
          'bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400',
        icon: FaShieldAlt,
        label: 'Super Admin',
      },
    };

    const style = config[role] || config.user;
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
          text-xs
          font-semibold
          ${style.color}
        `}
      >
        <Icon size={10} />
        {style.label}
      </span>
    );
  };

  // ============================================================
  // PLAN BADGE
  // ============================================================

  const getPlanBadge = (plan) => {
    const config = {
      free: {
        color:
          'bg-gray-100 text-gray-700 dark:bg-gray-700 dark:text-gray-300',
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
          text-xs
          font-semibold
          ${style.color}
        `}
      >
        {style.label}
      </span>
    );
  };

  // ============================================================
  // SUBSCRIPTION STATUS
  // ============================================================

  const getSubscriptionStatus = (status) => {
    const normalizedStatus = status || 'inactive';

    const config = {
      active: {
        color:
          'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400',
        icon: FaCheckCircle,
        label: 'Active',
      },

      inactive: {
        color:
          'bg-gray-100 text-gray-700 dark:bg-gray-700 dark:text-gray-300',
        icon: FaTimesCircle,
        label: 'Inactive',
      },

      expired: {
        color:
          'bg-orange-100 text-orange-700 dark:bg-orange-900/30 dark:text-orange-400',
        icon: FaTimesCircle,
        label: 'Expired',
      },

      cancelled: {
        color:
          'bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400',
        icon: FaTimesCircle,
        label: 'Cancelled',
      },
    };

    const style = config[normalizedStatus] || config.inactive;
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
          text-xs
          font-semibold
          ${style.color}
        `}
      >
        <Icon size={10} />
        {style.label}
      </span>
    );
  };

  // ============================================================
  // INVOICE STATUS
  // ============================================================

  const getInvoiceStatus = (status) => {
    const config = {
      paid: {
        color:
          'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400',
        label: 'Paid',
      },

      pending: {
        color:
          'bg-yellow-100 text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-400',
        label: 'Pending',
      },

      overdue: {
        color:
          'bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400',
        label: 'Overdue',
      },

      draft: {
        color:
          'bg-gray-100 text-gray-700 dark:bg-gray-700 dark:text-gray-300',
        label: 'Draft',
      },

      sent: {
        color:
          'bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400',
        label: 'Sent',
      },
    };

    const style = config[status] || config.draft;

    return (
      <span
        className={`
          inline-flex
          px-2
          py-1
          rounded-full
          text-[10px]
          sm:text-xs
          font-semibold
          ${style.color}
        `}
      >
        {style.label}
      </span>
    );
  };

  // ============================================================
  // STAT CARD
  // ============================================================

  const StatCard = ({
    icon: Icon,
    label,
    value,
    iconClass,
  }) => (
    <div
      className={`
        ${theme.colors.card}
        border
        ${theme.colors.border}
        rounded-xl
        p-3
        sm:p-4
      `}
    >
      <div className="flex items-center gap-3">
        <div
          className={`
            w-9
            h-9
            sm:w-10
            sm:h-10
            rounded-xl
            ${theme.colors.background}
            flex
            items-center
            justify-center
            shrink-0
          `}
        >
          <Icon className={`${iconClass} text-sm sm:text-base`} />
        </div>

        <div className="min-w-0">
          <p
            className={`
              text-[10px]
              sm:text-xs
              ${theme.colors.text}
              opacity-50
              truncate
            `}
          >
            {label}
          </p>

          <p
            className={`
              text-base
              sm:text-lg
              font-bold
              ${theme.colors.text}
            `}
          >
            {value}
          </p>
        </div>
      </div>
    </div>
  );

  // ============================================================
  // RENDER
  // ============================================================

  return (
    <div
      className="
        fixed
        inset-0
        z-[100]
        flex
        items-center
        justify-center
        p-3
        sm:p-4
      "
      role="dialog"
      aria-modal="true"
      aria-labelledby="user-details-title"
    >
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* Modal */}
      <div
        className={`
          relative
          w-full
          max-w-3xl
          max-h-[92vh]
          sm:max-h-[90vh]
          ${theme.colors.card}
          rounded-2xl
          sm:rounded-3xl
          border
          ${theme.colors.border}
          shadow-2xl
          overflow-hidden
          flex
          flex-col
        `}
      >
        {/* =====================================================
            HEADER
        ===================================================== */}
        <div
          className={`
            shrink-0
            px-4
            sm:px-6
            py-4
            border-b
            ${theme.colors.border}
            flex
            items-center
            justify-between
            gap-3
          `}
        >
          <div className="flex items-center gap-3 min-w-0">
            {/* Avatar */}
            <div
              className="
                w-10
                h-10
                sm:w-12
                sm:h-12
                rounded-full
                bg-gradient-to-br
                from-blue-500
                to-purple-600
                text-white
                flex
                items-center
                justify-center
                font-bold
                text-base
                sm:text-lg
                shrink-0
              "
            >
              {user.name?.charAt(0)?.toUpperCase() || 'U'}
            </div>

            <div className="min-w-0">
              <h2
                id="user-details-title"
                className={`
                  text-base
                  sm:text-lg
                  font-bold
                  ${theme.colors.text}
                  truncate
                `}
              >
                {user.name || 'User Details'}
              </h2>

              <p
                className={`
                  text-xs
                  sm:text-sm
                  ${theme.colors.text}
                  opacity-50
                  truncate
                  max-w-[220px]
                  sm:max-w-md
                `}
              >
                {user.email || 'No email available'}
              </p>
            </div>
          </div>

          <button
            type="button"
            onClick={onClose}
            aria-label="Close user details"
            className={`
              w-9
              h-9
              rounded-xl
              flex
              items-center
              justify-center
              ${theme.colors.text}
              opacity-60
              hover:opacity-100
              hover:bg-red-50
              dark:hover:bg-red-900/20
              transition-all
              shrink-0
            `}
          >
            <FaTimes />
          </button>
        </div>

        {/* =====================================================
            BODY
        ===================================================== */}
        <div className="flex-1 overflow-y-auto px-4 sm:px-6 py-5">
          <div className="space-y-5">

            {/* =================================================
                USER OVERVIEW
            ================================================= */}
            <section>
              <div className="flex items-center justify-between mb-3">
                <h3
                  className={`
                    text-sm
                    sm:text-base
                    font-semibold
                    ${theme.colors.text}
                  `}
                >
                  Account Overview
                </h3>

                {getStatusBadge(user.isActive)}
              </div>

              <div
                className={`
                  ${theme.colors.background}
                  rounded-2xl
                  border
                  ${theme.colors.border}
                  p-4
                `}
              >
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">

                  {/* Name */}
                  <div className="min-w-0">
                    <p
                      className={`
                        text-xs
                        ${theme.colors.text}
                        opacity-50
                        mb-1
                      `}
                    >
                      Name
                    </p>

                    <div className="flex items-center gap-2 min-w-0">
                      <FaUser
                        className={`
                          text-xs
                          ${theme.colors.primary}
                          shrink-0
                        `}
                      />

                      <p
                        className={`
                          text-sm
                          font-medium
                          ${theme.colors.text}
                          truncate
                        `}
                      >
                        {user.name || 'N/A'}
                      </p>
                    </div>
                  </div>

                  {/* Email */}
                  <div className="min-w-0">
                    <p
                      className={`
                        text-xs
                        ${theme.colors.text}
                        opacity-50
                        mb-1
                      `}
                    >
                      Email
                    </p>

                    <div className="flex items-center gap-2 min-w-0">
                      <FaEnvelope
                        className="
                          text-xs
                          text-blue-500
                          shrink-0
                        "
                      />

                      <p
                        className={`
                          text-sm
                          font-medium
                          ${theme.colors.text}
                          truncate
                        `}
                        title={user.email}
                      >
                        {user.email || 'N/A'}
                      </p>
                    </div>
                  </div>

                  {/* Role */}
                  <div>
                    <p
                      className={`
                        text-xs
                        ${theme.colors.text}
                        opacity-50
                        mb-1
                      `}
                    >
                      Role
                    </p>

                    {getRoleBadge(user.role)}
                  </div>

                  {/* Plan */}
                  <div>
                    <p
                      className={`
                        text-xs
                        ${theme.colors.text}
                        opacity-50
                        mb-1
                      `}
                    >
                      Subscription Plan
                    </p>

                    {getPlanBadge(
                      user.subscription?.plan || 'free'
                    )}
                  </div>

                  {/* Subscription Status */}
                  <div>
                    <p
                      className={`
                        text-xs
                        ${theme.colors.text}
                        opacity-50
                        mb-1
                      `}
                    >
                      Subscription Status
                    </p>

                    {getSubscriptionStatus(
                      user.subscription?.status
                    )}
                  </div>

                  {/* Joined */}
                  <div>
                    <p
                      className={`
                        text-xs
                        ${theme.colors.text}
                        opacity-50
                        mb-1
                      `}
                    >
                      Joined
                    </p>

                    <div className="flex items-center gap-2">
                      <FaCalendarAlt
                        className="
                          text-xs
                          text-purple-500
                        "
                      />

                      <p
                        className={`
                          text-sm
                          font-medium
                          ${theme.colors.text}
                        `}
                      >
                        {formatDate(user.createdAt, {
                          month: 'long',
                        })}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* =================================================
                STATS
            ================================================= */}
            <section>
              <h3
                className={`
                  text-sm
                  sm:text-base
                  font-semibold
                  ${theme.colors.text}
                  mb-3
                `}
              >
                Account Statistics
              </h3>

              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                <StatCard
                  icon={FaFileInvoice}
                  label="Total Invoices"
                  value={stats.totalInvoices || 0}
                  iconClass="text-blue-500"
                />

                <StatCard
                  icon={FaReceipt}
                  label="Recent Invoices"
                  value={invoices.length}
                  iconClass="text-green-500"
                />

                <StatCard
                  icon={FaCreditCard}
                  label="Plan"
                  value={
                    user.subscription?.plan
                      ? user.subscription.plan
                          .charAt(0)
                          .toUpperCase() +
                        user.subscription.plan.slice(1)
                      : 'Free'
                  }
                  iconClass="text-purple-500"
                />
              </div>
            </section>

            {/* =================================================
                RECENT INVOICES
            ================================================= */}
            <section>
              <div className="flex items-center justify-between mb-3">
                <div>
                  <h3
                    className={`
                      text-sm
                      sm:text-base
                      font-semibold
                      ${theme.colors.text}
                    `}
                  >
                    Recent Invoices
                  </h3>

                  <p
                    className={`
                      text-xs
                      ${theme.colors.text}
                      opacity-50
                      mt-0.5
                    `}
                  >
                    Latest invoice activity
                  </p>
                </div>

                <span
                  className={`
                    text-xs
                    ${theme.colors.text}
                    opacity-50
                  `}
                >
                  {invoices.length} shown
                </span>
              </div>

              {invoices.length > 0 ? (
                <div className="space-y-2.5">
                  {invoices.slice(0, 5).map((invoice) => (
                    <div
                      key={invoice._id}
                      className={`
                        ${theme.colors.background}
                        border
                        ${theme.colors.border}
                        rounded-xl
                        p-3
                        sm:p-4
                        flex
                        flex-col
                        sm:flex-row
                        sm:items-center
                        justify-between
                        gap-3
                        hover:shadow-sm
                        transition-shadow
                      `}
                    >
                      <div className="flex items-center gap-3 min-w-0">
                        <div
                          className="
                            w-9
                            h-9
                            rounded-lg
                            bg-blue-100
                            dark:bg-blue-900/30
                            flex
                            items-center
                            justify-center
                            shrink-0
                          "
                        >
                          <FaFileInvoice className="text-blue-500 text-sm" />
                        </div>

                        <div className="min-w-0">
                          <p
                            className={`
                              text-sm
                              font-semibold
                              ${theme.colors.text}
                              truncate
                            `}
                          >
                            {invoice.invoiceNumber || 'N/A'}
                          </p>

                          <p
                            className={`
                              text-xs
                              ${theme.colors.text}
                              opacity-50
                            `}
                          >
                            {formatDate(invoice.createdAt)}
                          </p>
                        </div>
                      </div>

                      <div
                        className="
                          flex
                          items-center
                          justify-between
                          sm:justify-end
                          gap-3
                        "
                      >
                        <span
                          className={`
                            text-sm
                            font-bold
                            ${theme.colors.text}
                          `}
                        >
                          {formatAmount(invoice.total)}
                        </span>

                        {getInvoiceStatus(invoice.status)}
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div
                  className={`
                    ${theme.colors.background}
                    border
                    ${theme.colors.border}
                    rounded-2xl
                    py-10
                    px-4
                    text-center
                  `}
                >
                  <FaFileInvoice
                    className={`
                      mx-auto
                      text-3xl
                      ${theme.colors.text}
                      opacity-20
                      mb-3
                    `}
                  />

                  <p
                    className={`
                      text-sm
                      font-medium
                      ${theme.colors.text}
                    `}
                  >
                    No invoices found
                  </p>

                  <p
                    className={`
                      text-xs
                      ${theme.colors.text}
                      opacity-50
                      mt-1
                    `}
                  >
                    This user hasn't created any invoices yet.
                  </p>
                </div>
              )}
            </section>
          </div>
        </div>

        {/* =====================================================
            FOOTER
        ===================================================== */}
        <div
          className={`
            shrink-0
            px-4
            sm:px-6
            py-3.5
            border-t
            ${theme.colors.border}
            flex
            justify-end
          `}
        >
          <button
            type="button"
            onClick={onClose}
            className={`
              w-full
              sm:w-auto
              px-5
              py-2.5
              rounded-xl
              border
              ${theme.colors.border}
              ${theme.colors.text}
              hover:${theme.colors.hover}
              transition-all
              text-sm
              font-medium
            `}
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default AdminUserDetailsModal;
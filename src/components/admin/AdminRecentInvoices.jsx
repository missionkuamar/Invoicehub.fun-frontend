// frontend/src/components/admin/AdminRecentInvoices.jsx

import React from 'react';
import {
  FaFileInvoice,
  FaChevronRight,
  FaClock,
  FaCheckCircle,
  FaExclamationTriangle,
  FaFileAlt,
  FaPaperPlane,
} from 'react-icons/fa';
import { useTheme } from '../../themes/ThemeProvider';
import { Link } from 'react-router-dom';

const AdminRecentInvoices = ({ invoices = [] }) => {
  const { theme } = useTheme();

  const getStatusBadge = (status) => {
    const normalizedStatus = status?.toLowerCase() || 'draft';

    const config = {
      paid: {
        color:
          'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400',
        icon: FaCheckCircle,
        label: 'Paid',
      },

      pending: {
        color:
          'bg-yellow-100 text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-400',
        icon: FaClock,
        label: 'Pending',
      },

      overdue: {
        color:
          'bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400',
        icon: FaExclamationTriangle,
        label: 'Overdue',
      },

      draft: {
        color:
          'bg-gray-100 text-gray-700 dark:bg-gray-700/60 dark:text-gray-300',
        icon: FaFileAlt,
        label: 'Draft',
      },

      sent: {
        color:
          'bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400',
        icon: FaPaperPlane,
        label: 'Sent',
      },
    };

    const style = config[normalizedStatus] || config.draft;
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

  const formatAmount = (amount) => {
    const value = Number(amount || 0);

    return value.toLocaleString('en-IN', {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    });
  };

  const formatDate = (date) => {
    if (!date) return null;

    const parsedDate = new Date(date);

    if (Number.isNaN(parsedDate.getTime())) {
      return null;
    }

    return parsedDate.toLocaleDateString('en-IN', {
      day: 'numeric',
      month: 'short',
    });
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
          {/* Icon */}
          <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-green-500/10 flex items-center justify-center flex-shrink-0">
            <FaFileInvoice className="text-green-500 text-sm sm:text-base" />
          </div>

          {/* Title */}
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
              Recent Invoices
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
              Latest invoice activity
            </p>
          </div>
        </div>

        {/* View All */}
        <Link
          to="/invoices"
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

      {/* Invoice List */}
      {invoices.length === 0 ? (
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
          <div className="w-12 h-12 rounded-full bg-green-500/10 flex items-center justify-center mb-3">
            <FaFileInvoice className="text-green-500 text-lg" />
          </div>

          <p className="text-sm font-medium opacity-70">
            No recent invoices
          </p>

          <p className="text-xs opacity-40 mt-1">
            New invoices will appear here
          </p>
        </div>
      ) : (
        <div className="space-y-2.5 sm:space-y-3">
          {invoices.slice(0, 5).map((invoice) => (
            <div
              key={invoice._id}
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
              {/* Invoice Icon */}
              <div
                className="
                  w-9
                  h-9
                  sm:w-10
                  sm:h-10
                  rounded-xl
                  bg-green-500/10
                  flex
                  items-center
                  justify-center
                  flex-shrink-0
                "
              >
                <FaFileInvoice className="text-green-500 text-sm sm:text-base" />
              </div>

              {/* Invoice Info */}
              <div className="flex-1 min-w-0">
                <p
                  className={`
                    text-sm
                    font-semibold
                    ${theme.colors.text}
                    truncate
                  `}
                  title={invoice.invoiceNumber}
                >
                  {invoice.invoiceNumber || 'Invoice'}
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
                  title={invoice.client?.name}
                >
                  {invoice.client?.name || 'Unknown Client'}
                </p>

                {/* Date on mobile */}
                {formatDate(invoice.createdAt || invoice.issueDate) && (
                  <p
                    className={`
                      text-[10px]
                      sm:hidden
                      ${theme.colors.text}
                      opacity-40
                      mt-1
                    `}
                  >
                    {formatDate(invoice.createdAt || invoice.issueDate)}
                  </p>
                )}
              </div>

              {/* Amount + Status */}
              <div
                className="
                  flex
                  flex-col
                  items-end
                  gap-1.5
                  flex-shrink-0
                "
              >
                <span
                  className={`
                    text-sm
                    sm:text-base
                    font-bold
                    ${theme.colors.text}
                    whitespace-nowrap
                  `}
                >
                  ₹{formatAmount(invoice.total)}
                </span>

                {getStatusBadge(invoice.status)}

                {/* Date on desktop */}
                {formatDate(invoice.createdAt || invoice.issueDate) && (
                  <span
                    className={`
                      hidden
                      sm:block
                      text-[10px]
                      ${theme.colors.text}
                      opacity-40
                      whitespace-nowrap
                    `}
                  >
                    {formatDate(invoice.createdAt || invoice.issueDate)}
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default AdminRecentInvoices;
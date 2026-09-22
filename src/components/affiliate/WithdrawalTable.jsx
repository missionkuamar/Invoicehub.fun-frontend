// frontend/src/components/affiliate/WithdrawalTable.jsx
import React from 'react';
import {
  FaEye,
  FaTimes,
  FaCopy,
  FaHistory,
  FaWallet,
  FaMobile,
  FaPaypal,
} from 'react-icons/fa';
import { CiBank } from 'react-icons/ci';
import { useTheme } from '../../themes/ThemeProvider';
import toast from 'react-hot-toast';

const WithdrawalTable = ({
  withdrawals,
  pagination,
  onPageChange,
  onViewDetails,
  onCancel,
  onWithdraw,
  earnings,
}) => {
  const { theme } = useTheme();

  // =========================
  // STATUS BADGE
  // =========================
  const getStatusBadge = (status) => {
    const config = {
      pending: {
        color:
          'bg-yellow-100 text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-400',
        icon: '⏳',
        label: 'Pending',
      },
      approved: {
        color:
          'bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400',
        icon: '✅',
        label: 'Approved',
      },
      processing: {
        color:
          'bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-400',
        icon: '🔄',
        label: 'Processing',
      },
      completed: {
        color:
          'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400',
        icon: '🎉',
        label: 'Completed',
      },
      failed: {
        color:
          'bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400',
        icon: '❌',
        label: 'Failed',
      },
      cancelled: {
        color:
          'bg-gray-100 text-gray-700 dark:bg-gray-700 dark:text-gray-300',
        icon: '🚫',
        label: 'Cancelled',
      },
    };

    const style = config[status] || config.pending;

    return (
      <span
        className={`inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-medium whitespace-nowrap ${style.color}`}
      >
        <span>{style.icon}</span>
        <span>{style.label}</span>
      </span>
    );
  };

  // =========================
  // PAYMENT METHOD ICON
  // =========================
  const getPaymentMethodIcon = (method) => {
    const icons = {
      bank: <CiBank className="text-blue-500 text-lg" />,
      upi: <FaMobile className="text-green-500 text-lg" />,
      paypal: <FaPaypal className="text-blue-400 text-lg" />,
    };

    return icons[method] || <FaWallet className="text-gray-500 text-lg" />;
  };

  // =========================
  // PAYMENT METHOD NAME
  // =========================
  const getPaymentMethodName = (method) => {
    const names = {
      bank: 'Bank Transfer',
      upi: 'UPI',
      paypal: 'PayPal',
    };

    return names[method] || method || 'Unknown';
  };

  // =========================
  // COPY TRANSACTION ID
  // =========================
  const handleCopy = (transactionId) => {
    if (!transactionId) return;

    navigator.clipboard
      .writeText(transactionId)
      .then(() => {
        toast.success('Transaction ID copied!');
      })
      .catch(() => {
        toast.error('Failed to copy');
      });
  };

  // =========================
  // FORMAT DATE
  // =========================
  const formatDate = (date) => {
    if (!date) return 'N/A';

    return new Date(date).toLocaleDateString('en-IN', {
      day: 'numeric',
      month: 'short',
      year: 'numeric',
    });
  };

  // =========================
  // EMPTY STATE
  // =========================
  if (!withdrawals || withdrawals.length === 0) {
    return (
      <div
        className={`${theme.colors.card} rounded-2xl border ${theme.colors.border} overflow-hidden`}
      >
        <div className="text-center py-10 sm:py-14 px-4">
          <div
            className={`w-14 h-14 sm:w-16 sm:h-16 mx-auto mb-4 rounded-2xl ${theme.colors.background} flex items-center justify-center`}
          >
            <FaHistory
              className={`text-2xl sm:text-3xl ${theme.colors.text} opacity-30`}
            />
          </div>

          <p className={`text-base sm:text-lg font-semibold ${theme.colors.text}`}>
            No withdrawals yet
          </p>

          <p
            className={`text-xs sm:text-sm ${theme.colors.text} opacity-60 mt-1 max-w-sm mx-auto`}
          >
            You haven't made any withdrawal requests yet.
          </p>

          <button
            onClick={onWithdraw}
            disabled={earnings < 100}
            className={`
              mt-5
              ${theme.colors.button}
              text-white
              px-5 sm:px-6
              py-2.5
              rounded-xl
              text-sm
              font-medium
              transition-all
              w-full
              max-w-xs
              disabled:opacity-50
              disabled:cursor-not-allowed
              hover:scale-[1.02]
            `}
          >
            Make your first withdrawal
          </button>

          {earnings < 100 && (
            <p className="text-xs text-red-500 mt-2">
              Minimum withdrawal amount is ₹100
            </p>
          )}
        </div>
      </div>
    );
  }

  return (
    <div
      className={`${theme.colors.card} rounded-2xl border ${theme.colors.border} overflow-hidden`}
    >
      {/* =====================================================
          DESKTOP TABLE
      ====================================================== */}
      <div className="hidden md:block w-full overflow-x-auto">
        <table className="w-full min-w-[760px]">
          <thead className={theme.colors.background}>
            <tr>
              <th className="px-4 lg:px-5 py-3.5 text-left text-[11px] font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                ID
              </th>

              <th className="px-4 lg:px-5 py-3.5 text-left text-[11px] font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                Amount
              </th>

              <th className="px-4 lg:px-5 py-3.5 text-left text-[11px] font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                Method
              </th>

              <th className="px-4 lg:px-5 py-3.5 text-left text-[11px] font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                Status
              </th>

              <th className="px-4 lg:px-5 py-3.5 text-left text-[11px] font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                Date
              </th>

              <th className="px-4 lg:px-5 py-3.5 text-right text-[11px] font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                Actions
              </th>
            </tr>
          </thead>

          <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
            {withdrawals.map((withdrawal) => (
              <tr
                key={withdrawal._id}
                className={`${theme.colors.hover} transition-colors`}
              >
                {/* ID */}
                <td className="px-4 lg:px-5 py-4">
                  <span
                    className={`text-xs font-mono ${theme.colors.text} opacity-60`}
                  >
                    #{withdrawal._id?.slice(-8) || 'N/A'}
                  </span>
                </td>

                {/* Amount */}
                <td className="px-4 lg:px-5 py-4">
                  <span
                    className={`text-sm lg:text-base font-bold ${theme.colors.text}`}
                  >
                    ₹{Number(withdrawal.amount || 0).toFixed(2)}
                  </span>
                </td>

                {/* Method */}
                <td className="px-4 lg:px-5 py-4">
                  <div className="flex items-center gap-2">
                    {getPaymentMethodIcon(withdrawal.paymentMethod)}

                    <span
                      className={`text-sm ${theme.colors.text} whitespace-nowrap`}
                    >
                      {getPaymentMethodName(withdrawal.paymentMethod)}
                    </span>
                  </div>
                </td>

                {/* Status */}
                <td className="px-4 lg:px-5 py-4">
                  {getStatusBadge(withdrawal.status)}
                </td>

                {/* Date */}
                <td className="px-4 lg:px-5 py-4">
                  <span
                    className={`text-sm ${theme.colors.text} opacity-70 whitespace-nowrap`}
                  >
                    {formatDate(withdrawal.createdAt)}
                  </span>
                </td>

                {/* Actions */}
                <td className="px-4 lg:px-5 py-4">
                  <div className="flex items-center justify-end gap-1.5">
                    {/* View */}
                    <button
                      onClick={() => onViewDetails(withdrawal)}
                      className={`p-2 rounded-lg ${theme.colors.hover} transition-colors`}
                      title="View Details"
                    >
                      <FaEye
                        className={`text-sm ${theme.colors.text} opacity-70`}
                      />
                    </button>

                    {/* Cancel */}
                    {withdrawal.status === 'pending' && (
                      <button
                        onClick={() => onCancel(withdrawal._id)}
                        className="p-2 rounded-lg hover:bg-red-50 dark:hover:bg-red-900/20 transition-colors"
                        title="Cancel"
                      >
                        <FaTimes className="text-sm text-red-500" />
                      </button>
                    )}

                    {/* Copy */}
                    {withdrawal.transactionId && (
                      <button
                        onClick={() =>
                          handleCopy(withdrawal.transactionId)
                        }
                        className={`p-2 rounded-lg ${theme.colors.hover} transition-colors`}
                        title="Copy Transaction ID"
                      >
                        <FaCopy
                          className={`text-sm ${theme.colors.text} opacity-50`}
                        />
                      </button>
                    )}
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* =====================================================
          MOBILE CARDS
      ====================================================== */}
      <div className="md:hidden divide-y divide-gray-200 dark:divide-gray-700">
        {withdrawals.map((withdrawal) => (
          <div
            key={withdrawal._id}
            className={`p-4 ${theme.colors.hover} transition-colors`}
          >
            {/* Top */}
            <div className="flex items-start justify-between gap-3">
              <div className="min-w-0">
                <p
                  className={`text-[11px] uppercase tracking-wide ${theme.colors.text} opacity-50`}
                >
                  Transaction
                </p>

                <p
                  className={`text-xs font-mono ${theme.colors.text} opacity-70 mt-0.5 truncate`}
                >
                  #{withdrawal._id?.slice(-8) || 'N/A'}
                </p>
              </div>

              <div className="shrink-0">
                {getStatusBadge(withdrawal.status)}
              </div>
            </div>

            {/* Amount */}
            <div className="mt-4">
              <p
                className={`text-xs ${theme.colors.text} opacity-50`}
              >
                Amount
              </p>

              <p
                className={`text-xl font-bold ${theme.colors.text} mt-0.5`}
              >
                ₹{Number(withdrawal.amount || 0).toFixed(2)}
              </p>
            </div>

            {/* Details */}
            <div className="grid grid-cols-2 gap-3 mt-4">
              <div
                className={`rounded-xl p-3 ${theme.colors.background}`}
              >
                <p
                  className={`text-[11px] ${theme.colors.text} opacity-50`}
                >
                  Payment Method
                </p>

                <div className="flex items-center gap-2 mt-1">
                  {getPaymentMethodIcon(withdrawal.paymentMethod)}

                  <span
                    className={`text-xs font-medium ${theme.colors.text} truncate`}
                  >
                    {getPaymentMethodName(
                      withdrawal.paymentMethod
                    )}
                  </span>
                </div>
              </div>

              <div
                className={`rounded-xl p-3 ${theme.colors.background}`}
              >
                <p
                  className={`text-[11px] ${theme.colors.text} opacity-50`}
                >
                  Date
                </p>

                <p
                  className={`text-xs font-medium ${theme.colors.text} mt-1`}
                >
                  {formatDate(withdrawal.createdAt)}
                </p>
              </div>
            </div>

            {/* Actions */}
            <div className="flex items-center gap-2 mt-4">
              <button
                onClick={() => onViewDetails(withdrawal)}
                className={`flex-1 flex items-center justify-center gap-2 px-3 py-2 rounded-xl border ${theme.colors.border} ${theme.colors.text} text-xs font-medium ${theme.colors.hover} transition-colors`}
              >
                <FaEye />
                View Details
              </button>

              {withdrawal.status === 'pending' && (
                <button
                  onClick={() => onCancel(withdrawal._id)}
                  className="px-3 py-2 rounded-xl border border-red-200 dark:border-red-900/40 text-red-500 hover:bg-red-50 dark:hover:bg-red-900/20 transition-colors"
                  title="Cancel"
                >
                  <FaTimes />
                </button>
              )}

              {withdrawal.transactionId && (
                <button
                  onClick={() =>
                    handleCopy(withdrawal.transactionId)
                  }
                  className={`px-3 py-2 rounded-xl border ${theme.colors.border} ${theme.colors.text} ${theme.colors.hover} transition-colors`}
                  title="Copy Transaction ID"
                >
                  <FaCopy />
                </button>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* =====================================================
          PAGINATION
      ====================================================== */}
      {pagination?.pages > 1 && (
        <div
          className={`
            px-4 sm:px-5
            py-4
            border-t
            ${theme.colors.border}
            flex
            flex-col
            sm:flex-row
            items-center
            justify-between
            gap-3
          `}
        >
          {/* Showing */}
          <span
            className={`text-xs sm:text-sm ${theme.colors.text} opacity-70 text-center sm:text-left`}
          >
            Showing{' '}
            {((pagination.page - 1) * pagination.limit) + 1}{' '}
            to{' '}
            {Math.min(
              pagination.page * pagination.limit,
              pagination.total
            )}{' '}
            of {pagination.total}
          </span>

          {/* Buttons */}
          <div className="flex items-center gap-2 w-full sm:w-auto">
            <button
              onClick={() => onPageChange(pagination.page - 1)}
              disabled={pagination.page === 1}
              className={`
                flex-1 sm:flex-none
                px-4 py-2
                rounded-xl
                border
                ${theme.colors.border}
                ${theme.colors.text}
                ${theme.colors.hover}
                transition-colors
                disabled:opacity-40
                disabled:cursor-not-allowed
                text-xs sm:text-sm
                font-medium
              `}
            >
              ← Previous
            </button>

            <div
              className={`
                px-3 py-2
                rounded-xl
                ${theme.colors.background}
                ${theme.colors.text}
                text-xs sm:text-sm
                font-medium
                whitespace-nowrap
              `}
            >
              {pagination.page} / {pagination.pages}
            </div>

            <button
              onClick={() => onPageChange(pagination.page + 1)}
              disabled={pagination.page === pagination.pages}
              className={`
                flex-1 sm:flex-none
                px-4 py-2
                rounded-xl
                border
                ${theme.colors.border}
                ${theme.colors.text}
                ${theme.colors.hover}
                transition-colors
                disabled:opacity-40
                disabled:cursor-not-allowed
                text-xs sm:text-sm
                font-medium
              `}
            >
              Next →
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default WithdrawalTable;
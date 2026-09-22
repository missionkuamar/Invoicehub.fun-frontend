// frontend/src/components/invoices/InvoiceViewModal.jsx
import React, { useRef } from 'react';
import { format } from 'date-fns';
import { FaTimes, FaEnvelope } from 'react-icons/fa';
import { useTheme } from '../../themes/ThemeProvider';
import { useSelector } from 'react-redux';
import InvoiceDownloadButton from './InvoiceDownloadButton';

const InvoiceViewModal = ({ isOpen, onClose, invoice, onEmail }) => {
  const { user } = useSelector((state) => state.auth || {});
  const { theme } = useTheme();
  const printRef = useRef(null);

  if (!isOpen || !invoice) return null;

  const getStatusColor = (status) => {
    const colors = {
      draft: 'bg-gray-200 text-gray-700 dark:bg-gray-700 dark:text-gray-300',
      sent: 'bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400',
      paid: 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400',
      overdue: 'bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400',
      cancelled: 'bg-yellow-100 text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-400',
    };
    return colors[status] || colors.draft;
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/60 backdrop-blur-sm">
      <div className="flex items-center justify-center min-h-screen p-2 sm:p-4">
        {/* Backdrop click to close */}
        <div className="fixed inset-0" onClick={onClose} aria-hidden="true" />

        {/* Modal Container */}
        <div
          className={`relative w-full max-w-4xl max-h-[95vh] ${theme.colors.card} rounded-2xl shadow-2xl flex flex-col overflow-hidden`}
        >
          {/* ============================================================ */}
          {/* HEADER — Responsive */}
          {/* ============================================================ */}
          <div
            className={`flex flex-wrap items-center justify-between gap-2 px-3 sm:px-4 md:px-6 py-3 md:py-4 border-b ${theme.colors.border} ${theme.colors.background} flex-shrink-0`}
          >
            <div className="min-w-0 flex-1">
              <h3 className={`text-base sm:text-lg font-semibold ${theme.colors.text} truncate`}>
                Invoice Details
              </h3>
              <p className={`text-xs sm:text-sm ${theme.colors.text} opacity-60 truncate`}>
                {invoice.invoiceNumber}
              </p>
            </div>

            <div className="flex items-center gap-1 sm:gap-2 flex-shrink-0">
              {/* ✅ Download Button (new component) */}
              <InvoiceDownloadButton
                invoice={invoice}
                printRef={printRef}
                variant="icon"
                onSuccess={() => {}}
              />

              {/* ✅ Email button (optional, if prop passed) */}
              {onEmail && (
                <button
                  onClick={() => {
                    onClose();
                    onEmail(invoice);
                  }}
                  className={`p-2 rounded-lg ${theme.colors.hover} transition-colors`}
                  title="Email Invoice"
                >
                  <FaEnvelope className={`text-sm sm:text-base ${theme.colors.text}`} />
                </button>
              )}

              {/* Close */}
              <button
                onClick={onClose}
                className={`p-2 rounded-lg ${theme.colors.hover} transition-colors`}
                title="Close"
              >
                <FaTimes className={`text-sm sm:text-base ${theme.colors.text}`} />
              </button>
            </div>
          </div>

          {/* ============================================================ */}
          {/* BODY — Scrollable + Printable */}
          {/* ============================================================ */}
          <div className="flex-1 overflow-y-auto">
            <div
              ref={printRef}
              id="print-area"
              className={`px-3 sm:px-4 md:px-6 py-4 md:py-6 ${theme.colors.card}`}
            >
              {/* ===== Invoice Header ===== */}
              <div className="flex flex-col sm:flex-row justify-between items-start gap-4 mb-4 sm:mb-6">
                <div>
                  <h2 className={`text-xl sm:text-2xl md:text-3xl font-bold ${theme.colors.text}`}>
                    INVOICE
                  </h2>
                  <p className={`text-xs sm:text-sm ${theme.colors.text} opacity-60`}>
                    # {invoice.invoiceNumber}
                  </p>
                </div>

                <div className="text-left sm:text-right w-full sm:w-auto">
                  <div className={`text-xs sm:text-sm ${theme.colors.text} opacity-70 space-y-0.5`}>
                    <p>Date: {format(new Date(invoice.issueDate), 'MMM dd, yyyy')}</p>
                    <p>Due: {format(new Date(invoice.dueDate), 'MMM dd, yyyy')}</p>
                  </div>
                  <span
                    className={`inline-block mt-2 px-2 sm:px-3 py-1 rounded-full text-[10px] sm:text-xs font-semibold ${getStatusColor(
                      invoice.status
                    )}`}
                  >
                    {invoice.status?.toUpperCase() || 'DRAFT'}
                  </span>
                </div>
              </div>

              {/* ===== Client & Company Info ===== */}
              <div
                className={`grid grid-cols-1 sm:grid-cols-2 gap-4 p-3 sm:p-4 rounded-xl ${theme.colors.background} mb-4 sm:mb-6`}
              >
                <div>
                  <h4
                    className={`text-[10px] sm:text-xs font-semibold ${theme.colors.text} opacity-60 mb-2 uppercase tracking-wider`}
                  >
                    Bill To:
                  </h4>
                  <p className={`font-medium text-sm sm:text-base ${theme.colors.text}`}>
                    {invoice.client?.name || 'Unknown'}
                  </p>
                  {invoice.client?.email && (
                    <p className={`text-xs sm:text-sm ${theme.colors.text} opacity-70 break-all`}>
                      {invoice.client.email}
                    </p>
                  )}
                  {invoice.client?.phone && (
                    <p className={`text-xs sm:text-sm ${theme.colors.text} opacity-70`}>
                      {invoice.client.phone}
                    </p>
                  )}
                  {invoice.client?.address && (
                    <p className={`text-xs sm:text-sm ${theme.colors.text} opacity-70`}>
                      {invoice.client.address}
                    </p>
                  )}
                  {invoice.client?.gst && (
                    <p className={`text-xs sm:text-sm ${theme.colors.text} opacity-70`}>
                      GST: {invoice.client.gst}
                    </p>
                  )}
                </div>

                <div className="sm:text-right">
                  <h4
                    className={`text-[10px] sm:text-xs font-semibold ${theme.colors.text} opacity-60 mb-2 uppercase tracking-wider`}
                  >
                    From:
                  </h4>
                  <p className={`font-medium text-sm sm:text-base ${theme.colors.text}`}>
                    {user?.name || 'Your Company'}
                  </p>
                  {user?.email && (
                    <p className={`text-xs sm:text-sm ${theme.colors.text} opacity-70 break-all`}>
                      {user.email}
                    </p>
                  )}
                </div>
              </div>

              {/* ===== Items Table (Responsive) ===== */}
              <div className="overflow-x-auto -mx-3 sm:mx-0 mb-4 sm:mb-6">
                <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
                  <thead className={theme.colors.background}>
                    <tr>
                      <th className="px-2 sm:px-4 py-2 text-left text-[10px] sm:text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                        Description
                      </th>
                      <th className="px-2 sm:px-4 py-2 text-center text-[10px] sm:text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                        Qty
                      </th>
                      <th className="px-2 sm:px-4 py-2 text-right text-[10px] sm:text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                        Rate
                      </th>
                      <th className="px-2 sm:px-4 py-2 text-right text-[10px] sm:text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                        Amount
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
                    {invoice.items?.map((item, index) => (
                      <tr key={index}>
                        <td className={`px-2 sm:px-4 py-2 text-xs sm:text-sm ${theme.colors.text} break-words`}>
                          {item.description}
                        </td>
                        <td
                          className={`px-2 sm:px-4 py-2 text-xs sm:text-sm ${theme.colors.text} opacity-70 text-center`}
                        >
                          {item.quantity}
                        </td>
                        <td
                          className={`px-2 sm:px-4 py-2 text-xs sm:text-sm ${theme.colors.text} opacity-70 text-right whitespace-nowrap`}
                        >
                          ₹{item.rate?.toFixed(2) || '0.00'}
                        </td>
                        <td
                          className={`px-2 sm:px-4 py-2 text-xs sm:text-sm font-medium ${theme.colors.text} text-right whitespace-nowrap`}
                        >
                          ₹{item.amount?.toFixed(2) || '0.00'}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                  <tfoot className={theme.colors.background}>
                    <tr>
                      <td
                        colSpan="3"
                        className={`px-2 sm:px-4 py-2 text-right text-xs sm:text-sm font-medium ${theme.colors.text}`}
                      >
                        Subtotal:
                      </td>
                      <td
                        className={`px-2 sm:px-4 py-2 text-right text-xs sm:text-sm font-medium ${theme.colors.text} whitespace-nowrap`}
                      >
                        ₹{invoice.subtotal?.toFixed(2) || '0.00'}
                      </td>
                    </tr>
                    <tr>
                      <td
                        colSpan="3"
                        className={`px-2 sm:px-4 py-2 text-right text-xs sm:text-sm font-medium ${theme.colors.text}`}
                      >
                        Tax:
                      </td>
                      <td
                        className={`px-2 sm:px-4 py-2 text-right text-xs sm:text-sm font-medium ${theme.colors.text} whitespace-nowrap`}
                      >
                        ₹{invoice.tax?.toFixed(2) || '0.00'}
                      </td>
                    </tr>
                    <tr className={`border-t-2 ${theme.colors.border}`}>
                      <td
                        colSpan="3"
                        className={`px-2 sm:px-4 py-3 text-right font-bold text-sm sm:text-base md:text-lg ${theme.colors.text}`}
                      >
                        Total:
                      </td>
                      <td
                        className={`px-2 sm:px-4 py-3 text-right font-bold text-sm sm:text-base md:text-lg ${theme.colors.primary} whitespace-nowrap`}
                      >
                        ₹{invoice.total?.toFixed(2) || '0.00'}
                      </td>
                    </tr>
                  </tfoot>
                </table>
              </div>

              {/* ===== Notes & Terms ===== */}
              {(invoice.notes || invoice.terms) && (
                <div className={`p-3 sm:p-4 rounded-xl ${theme.colors.background} space-y-3`}>
                  {invoice.notes && (
                    <div>
                      <h4
                        className={`text-[10px] sm:text-xs font-semibold ${theme.colors.text} opacity-60 uppercase tracking-wider mb-1`}
                      >
                        Notes:
                      </h4>
                      <p className={`text-xs sm:text-sm ${theme.colors.text} opacity-80 whitespace-pre-line`}>
                        {invoice.notes}
                      </p>
                    </div>
                  )}
                  {invoice.terms && (
                    <div>
                      <h4
                        className={`text-[10px] sm:text-xs font-semibold ${theme.colors.text} opacity-60 uppercase tracking-wider mb-1`}
                      >
                        Terms:
                      </h4>
                      <p className={`text-xs sm:text-sm ${theme.colors.text} opacity-80 whitespace-pre-line`}>
                        {invoice.terms}
                      </p>
                    </div>
                  )}
                </div>
              )}

              {/* ===== Footer ===== */}
              <div className={`mt-6 pt-4 border-t ${theme.colors.border} text-center`}>
                <p className={`text-xs ${theme.colors.text} opacity-60`}>
                  Thank you for your business! 🙏
                </p>
              </div>
            </div>
          </div>

          {/* ============================================================ */}
          {/* FOOTER — Action Buttons (Mobile: stacked, Desktop: inline) */}
          {/* ============================================================ */}
          <div
            className={`flex flex-col sm:flex-row gap-2 px-3 sm:px-4 md:px-6 py-3 border-t ${theme.colors.border} ${theme.colors.background} flex-shrink-0`}
          >
            <div className="flex-1 flex flex-col sm:flex-row gap-2">
              {/* Print Button */}
              

              {/* Download PDF — using new component */}
              <InvoiceDownloadButton
                invoice={invoice}
                printRef={printRef}
                variant="button"
                className="flex-1"
              />
            </div>

            <button
              onClick={onClose}
              className={`px-4 py-2.5 rounded-xl ${theme.colors.button} text-white text-sm font-medium hover:scale-[1.02] transition-all`}
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InvoiceViewModal;
// frontend/src/components/email/DialogEmailBox.jsx
import React, { useState } from 'react';
import { FaTimes, FaEnvelope } from 'react-icons/fa';
import toast from 'react-hot-toast';
import api from '../../services/api';
import EmailScheduler from './EmailScheduler';
import { useTheme } from '../../themes/ThemeProvider';

const DialogEmailBox = ({ isOpen, onClose, invoice }) => {
  const { theme } = useTheme();
  const [loading, setLoading] = useState(false);
  const [emails, setEmails] = useState([]);

  const fetchEmails = async () => {
    setLoading(true);
    try {
      const response = await api.get('/emails/my-emails');
      setEmails(response.data.data || []);
      toast.success('Emails fetched successfully');
    } catch (error) {
      console.error('Error fetching emails:', error);
      toast.error('Failed to fetch scheduled emails');
    } finally {
      setLoading(false);
    }
  };

  if (!isOpen || !invoice) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-end sm:items-center justify-center bg-black/60 backdrop-blur-sm p-0 sm:p-4"
      onClick={onClose}
    >
      <div
        className={`relative w-full sm:max-w-lg md:max-w-xl lg:max-w-2xl ${theme.colors.card} rounded-t-2xl sm:rounded-2xl shadow-2xl max-h-[95vh] sm:max-h-[90vh] flex flex-col`}
        onClick={(e) => e.stopPropagation()}
      >
        {/* ================= HEADER ================= */}
        <div className={`flex items-center justify-between gap-2 border-b ${theme.colors.border} px-3 sm:px-5 py-3 sm:py-4 flex-shrink-0`}>
          <div className="min-w-0 flex-1 flex items-center gap-3">
            <div className={`p-2 rounded-lg ${theme.colors.background} flex-shrink-0 hidden sm:flex`}>
              <FaEnvelope className={`${theme.colors.primary} text-lg`} />
            </div>
            <div className="min-w-0">
              <h2 className={`text-base sm:text-lg font-semibold ${theme.colors.text} truncate`}>
                Schedule Email
              </h2>
              <p className={`text-xs sm:text-sm ${theme.colors.text} opacity-60 truncate`}>
                #{invoice.invoiceNumber} - {invoice.clientName}
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className={`p-2 rounded-lg ${theme.colors.hover} transition-colors flex-shrink-0`}
            aria-label="Close"
          >
            <FaTimes className={`${theme.colors.text} text-lg`} />
          </button>
        </div>

        {/* ================= BODY ================= */}
        <div className="flex-1 overflow-y-auto p-3 sm:p-5">
          <EmailScheduler
            invoiceId={invoice._id}
            onEmailSent={fetchEmails}
          />
        </div>

        {/* ================= FOOTER ================= */}
        <div className={`border-t ${theme.colors.border} px-3 sm:px-5 py-2 sm:py-3 flex justify-between items-center flex-shrink-0`}>
          <span className={`text-xs ${theme.colors.text} opacity-60`}>
            {loading ? 'Loading emails...' : `${emails.length} emails scheduled`}
          </span>
          <button
            onClick={onClose}
            className={`text-xs sm:text-sm font-medium ${theme.colors.primary} hover:opacity-80 transition-opacity`}
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default DialogEmailBox;
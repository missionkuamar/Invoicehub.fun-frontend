// frontend/src/pages/SimpleEmail.jsx
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import {
  FaEnvelope, FaPaperPlane, FaSpinner, FaTrash,
  FaCheckCircle, FaExclamationCircle, FaClock,
  FaUser, FaCalendarAlt,
} from 'react-icons/fa';
import api from '../../services/api';

import toast from 'react-hot-toast';
import { useTheme } from '../../themes/ThemeProvider';

export default function SimpleEmail() {
  const [emails, setEmails] = useState([]);
  const [loading, setLoading] = useState(false);
  const [fetching, setFetching] = useState(false);
  const [formData, setFormData] = useState({
    toEmail: '',
    subject: '',
    message: '',
    scheduleTime: '',
  });
  const [message, setMessage] = useState(null);

  const navigate = useNavigate();
  const { theme } = useTheme();
  const { user } = useSelector((state) => state.auth || {});

  // ✅ Fetch emails on mount
  useEffect(() => {
    fetchEmails();
  }, []);

  const fetchEmails = async () => {
    setFetching(true);
    try {
      const response = await api.get('/emails/my-emails');
      setEmails(response.data.data || []);
    } catch (error) {
      console.error('Error fetching emails:', error);
      toast.error('Failed to load emails');
    } finally {
      setFetching(false);
    }
  };

  // ✅ Schedule email
  const handleSchedule = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage(null);

    try {
      const payload = {
        ...formData,
        scheduleTime: formData.scheduleTime || new Date().toISOString(),
      };

      await api.post('/emails/schedule', payload);

      setMessage({ type: 'success', text: '✅ Email scheduled successfully!' });
      toast.success('Email scheduled successfully!');
      setFormData({ toEmail: '', subject: '', message: '', scheduleTime: '' });
      fetchEmails();
    } catch (error) {
      const errorMsg = error.response?.data?.message || 'Failed to schedule email';
      setMessage({ type: 'error', text: errorMsg });
      toast.error(errorMsg);
    } finally {
      setLoading(false);
    }
  };

  // ✅ Delete email
  const handleDelete = async (id) => {
    if (!window.confirm('Delete this scheduled email?')) return;

    try {
      await api.delete(`/emails/${id}`);
      setEmails((prev) => prev.filter((email) => email._id !== id));
      toast.success('Email deleted successfully!');
    } catch (error) {
      toast.error('Failed to delete email');
    }
  };

  // ✅ Status color helper
  const getStatusColor = (status) => {
    const colors = {
      pending: 'bg-yellow-100 text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-400',
      sent: 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400',
      failed: 'bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400',
    };
    return colors[status] || 'bg-gray-100 text-gray-700 dark:bg-gray-700 dark:text-gray-300';
  };

  // ✅ Common classes
  const inputClass = `w-full px-3 sm:px-4 py-2 sm:py-2.5 rounded-xl border ${theme.colors.border} ${theme.colors.text} bg-transparent focus:outline-none focus:ring-2 focus:ring-primary-500 text-sm transition-colors`;
  const labelClass = `block text-xs sm:text-sm font-medium ${theme.colors.text} opacity-80 mb-1`;

  return (
    <div className={`min-h-screen ${theme.colors.background} w-full overflow-x-hidden`}>
      <div className="w-full max-w-7xl mx-auto px-3 sm:px-4 md:px-6 py-4 sm:py-6 space-y-4 sm:space-y-6">

        {/* ============================================================ */}
        {/* HEADER */}
        {/* ============================================================ */}
        <div
          className={`flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 sm:gap-4 ${theme.colors.card} p-4 sm:p-5 md:p-6 rounded-2xl border ${theme.colors.border} shadow-sm`}
        >
          <div className="min-w-0 flex-1">
            <h1 className={`text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold ${theme.colors.text} flex items-center gap-2 truncate`}>
              <FaEnvelope className={theme.colors.primary} />
              Email Scheduler
            </h1>
            <p className={`text-xs sm:text-sm ${theme.colors.text} opacity-70 mt-1 flex items-center gap-2`}>
              <FaUser size={12} />
              Welcome, <span className="font-medium">{user?.name || 'User'}</span>!
            </p>
          </div>

          <button
            onClick={fetchEmails}
            disabled={fetching}
            className={`${theme.colors.button} text-white px-4 sm:px-5 py-2 sm:py-2.5 rounded-xl flex items-center justify-center gap-2 hover:scale-105 transition-all text-xs sm:text-sm font-medium w-full sm:w-auto disabled:opacity-50 disabled:hover:scale-100`}
          >
            {fetching ? (
              <>
                <FaSpinner className="animate-spin" />
                Loading...
              </>
            ) : (
              <>
                <FaClock />
                Refresh
              </>
            )}
          </button>
        </div>

        {/* ============================================================ */}
        {/* MESSAGE ALERT */}
        {/* ============================================================ */}
        {message && (
          <div
            className={`p-3 sm:p-4 rounded-xl flex items-start gap-3 text-xs sm:text-sm border ${
              message.type === 'success'
                ? 'bg-green-500/10 text-green-600 dark:text-green-400 border-green-500/30'
                : 'bg-red-500/10 text-red-600 dark:text-red-400 border-red-500/30'
            }`}
          >
            {message.type === 'success' ? (
              <FaCheckCircle className="mt-0.5 flex-shrink-0" />
            ) : (
              <FaExclamationCircle className="mt-0.5 flex-shrink-0" />
            )}
            <span>{message.text}</span>
          </div>
        )}

        {/* ============================================================ */}
        {/* MAIN GRID — Form + List */}
        {/* ============================================================ */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6">

          {/* ============================================================ */}
          {/* SCHEDULE FORM */}
          {/* ============================================================ */}
          <div className={`${theme.colors.card} p-4 sm:p-5 md:p-6 rounded-2xl border ${theme.colors.border} shadow-sm`}>
            <h2 className={`text-base sm:text-lg md:text-xl font-semibold ${theme.colors.text} mb-4 flex items-center gap-2`}>
              <FaPaperPlane className={theme.colors.primary} size={16} />
              Schedule Email
            </h2>

            <form onSubmit={handleSchedule} className="space-y-3 sm:space-y-4">
              <div>
                <label className={labelClass}>To Email *</label>
                <input
                  type="email"
                  placeholder="recipient@example.com"
                  value={formData.toEmail}
                  onChange={(e) => setFormData({ ...formData, toEmail: e.target.value })}
                  className={inputClass}
                  required
                />
              </div>

              <div>
                <label className={labelClass}>Subject *</label>
                <input
                  type="text"
                  placeholder="Email subject"
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  className={inputClass}
                  required
                />
              </div>

              <div>
                <label className={labelClass}>Message *</label>
                <textarea
                  placeholder="Write your message here..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className={`${inputClass} resize-none`}
                  rows="4"
                  required
                />
              </div>

              <div>
                <label className={labelClass}>Schedule Time *</label>
                <input
                  type="datetime-local"
                  value={formData.scheduleTime}
                  onChange={(e) => setFormData({ ...formData, scheduleTime: e.target.value })}
                  className={inputClass}
                  required
                  min={new Date().toISOString().slice(0, 16)}
                />
              </div>

              <button
                type="submit"
                disabled={loading}
                className={`w-full ${theme.colors.button} text-white py-2.5 sm:py-3 rounded-xl flex items-center justify-center gap-2 hover:scale-[1.02] transition-all text-sm font-medium disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100`}
              >
                {loading ? (
                  <>
                    <FaSpinner className="animate-spin" />
                    Scheduling...
                  </>
                ) : (
                  <>
                    <FaPaperPlane />
                    Schedule Email
                  </>
                )}
              </button>
            </form>
          </div>

          {/* ============================================================ */}
          {/* SCHEDULED EMAILS LIST */}
          {/* ============================================================ */}
          <div className={`${theme.colors.card} p-4 sm:p-5 md:p-6 rounded-2xl border ${theme.colors.border} shadow-sm flex flex-col`}>
            <div className="flex items-center justify-between gap-2 mb-4">
              <h2 className={`text-base sm:text-lg md:text-xl font-semibold ${theme.colors.text} flex items-center gap-2`}>
                <FaClock className={theme.colors.primary} size={16} />
                Scheduled Emails
              </h2>
              <span className={`text-xs sm:text-sm ${theme.colors.text} opacity-60 px-2 py-1 rounded-full ${theme.colors.background}`}>
                {emails.length}
              </span>
            </div>

            {/* Empty State */}
            {emails.length === 0 && !fetching && (
              <div className={`flex-1 flex flex-col items-center justify-center text-center py-12 px-4`}>
                <div className={`text-4xl sm:text-5xl mb-4 ${theme.colors.text} opacity-20`}>
                  <FaEnvelope className="mx-auto" />
                </div>
                <p className={`text-sm sm:text-base font-medium ${theme.colors.text}`}>
                  No emails scheduled
                </p>
                <p className={`text-xs sm:text-sm ${theme.colors.text} opacity-60 mt-1`}>
                  Schedule your first email to get started
                </p>
              </div>
            )}

            {/* Loading State */}
            {fetching && emails.length === 0 && (
              <div className="flex-1 flex items-center justify-center py-12">
                <FaSpinner className={`animate-spin text-3xl sm:text-4xl ${theme.colors.primary}`} />
              </div>
            )}

            {/* Email List */}
            {emails.length > 0 && (
              <div className="flex-1 space-y-3 max-h-[500px] lg:max-h-[600px] overflow-y-auto pr-1">
                {emails.map((email) => (
                  <div
                    key={email._id}
                    className={`${theme.colors.background} border ${theme.colors.border} rounded-xl p-3 sm:p-4 hover:shadow-md transition-all`}
                  >
                    <div className="flex items-start justify-between gap-2">
                      <div className="min-w-0 flex-1">
                        {/* Subject */}
                        <h3 className={`font-semibold text-sm sm:text-base ${theme.colors.text} truncate`}>
                          {email.subject || 'No subject'}
                        </h3>

                        {/* To Email */}
                        <p className={`text-xs sm:text-sm ${theme.colors.text} opacity-70 truncate mt-1 flex items-center gap-1.5`}>
                          <FaEnvelope size={10} className="flex-shrink-0" />
                          {email.toEmail}
                        </p>

                        {/* Schedule Time */}
                        <p className={`text-xs sm:text-sm ${theme.colors.text} opacity-70 flex items-center gap-1.5 mt-0.5`}>
                          <FaCalendarAlt size={10} className="flex-shrink-0" />
                          {new Date(email.scheduleTime).toLocaleString('en-IN', {
                            day: '2-digit',
                            month: 'short',
                            hour: '2-digit',
                            minute: '2-digit',
                          })}
                        </p>

                        {/* Status Badge */}
                        <span
                          className={`inline-block px-2 py-0.5 text-[10px] sm:text-xs font-semibold rounded-full mt-2 ${getStatusColor(
                            email.status
                          )}`}
                        >
                          {(email.status || 'pending').toUpperCase()}
                        </span>
                      </div>

                      {/* Delete Button (only for pending) */}
                      {email.status === 'pending' && (
                        <button
                          onClick={() => handleDelete(email._id)}
                          className={`p-2 rounded-lg text-red-500 hover:bg-red-500/10 transition-colors flex-shrink-0`}
                          title="Delete"
                          aria-label="Delete email"
                        >
                          <FaTrash size={12} />
                        </button>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
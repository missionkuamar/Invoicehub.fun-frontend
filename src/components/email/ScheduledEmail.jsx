// frontend/src/pages/ScheduledEmail.jsx
import React, { useEffect, useState, useMemo, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  fetchEmails,
  deleteEmail,
  setFilters,
  resetFilters,
  fetchEmailStats,
  setLocalSearchResults,
} from '../../store/slices/emailSlice';
import { useTheme } from '../../themes/ThemeProvider';
import { FaSpinner } from 'react-icons/fa';
import toast from 'react-hot-toast';
import EmailFilters from './EmailFilters';
import EmailStats from './EmailStats';
import EmailPagination from './EmailPagination';
import EmailList from './EmailList';

const ScheduledEmail = () => {
  const dispatch = useDispatch();
  const { theme } = useTheme();

  const {
    emails,
    loading,
    loadingStats,
    pagination,
    filters,
    error,
    deletingId,
    summary,
  } = useSelector((state) => state.emails);

  const [isRefreshing, setIsRefreshing] = useState(false);

  // ✅ Local filter state (mirrors Redux filters)
  const [localFilters, setLocalFilters] = useState({
    status: filters.status || '',
    emailType: filters.emailType || '',
    startDate: filters.startDate || '',
    endDate: filters.endDate || '',
    sortBy: filters.sortBy || 'createdAt',
    sortOrder: filters.sortOrder || 'desc',
  });

  // ✅ Keep localFilters in sync when Redux filters change (e.g., after reset)
  useEffect(() => {
    setLocalFilters({
      status: filters.status || '',
      emailType: filters.emailType || '',
      startDate: filters.startDate || '',
      endDate: filters.endDate || '',
      sortBy: filters.sortBy || 'createdAt',
      sortOrder: filters.sortOrder || 'desc',
    });
  }, [
    filters.status,
    filters.emailType,
    filters.startDate,
    filters.endDate,
    filters.sortBy,
    filters.sortOrder,
  ]);

  // Memoized local search filter
  const filteredEmails = useMemo(() => {
    const search = filters.search?.trim().toLowerCase();
    if (!search) return emails;

    const results = emails.filter((email) => {
      return (
        email.subject?.toLowerCase().includes(search) ||
        email.toEmail?.toLowerCase().includes(search) ||
        email.emailType?.toLowerCase().includes(search) ||
        email.status?.toLowerCase().includes(search) ||
        email.invoiceId?.invoiceNumber?.toLowerCase().includes(search) ||
        email.invoiceId?.clientName?.toLowerCase().includes(search)
      );
    });

    dispatch(setLocalSearchResults(results));
    return results;
  }, [emails, filters.search, dispatch]);

  // Initial load
  useEffect(() => {
    dispatch(fetchEmails(filters));
    dispatch(fetchEmailStats());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Debounced filter change handler
  useEffect(() => {
    if (loading) return;

    const timer = setTimeout(() => {
      dispatch(fetchEmails(filters));
    }, 500);

    return () => clearTimeout(timer);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [
    filters.search,
    filters.status,
    filters.emailType,
    filters.startDate,
    filters.endDate,
    filters.sortBy,
    filters.sortOrder,
    filters.page,
    filters.limit,
  ]);

  // Handle delete
  const handleDelete = async (id) => {
    if (!window.confirm('Delete this scheduled email?')) return;
    try {
      await dispatch(deleteEmail(id)).unwrap();
      toast.success('Email deleted successfully!');
    } catch (error) {
      console.error('Delete failed:', error);
      toast.error('Failed to delete email');
    }
  };

  // Handle apply filters
  const handleApplyFilters = (newFilters) => {
    dispatch(setFilters(newFilters));
  };

  // Handle reset filters
  const handleResetFilters = () => {
    const resetData = {
      page: 1,
      limit: pagination.limit || 10,
      search: '',
      status: '',
      emailType: '',
      startDate: '',
      endDate: '',
      sortBy: 'createdAt',
      sortOrder: 'desc',
    };

    setLocalFilters({
      status: '',
      emailType: '',
      startDate: '',
      endDate: '',
      sortBy: 'createdAt',
      sortOrder: 'desc',
    });

    dispatch(resetFilters());
    dispatch(fetchEmails(resetData));
  };

  // Error state
  if (error && !loading) {
    return (
      <div className={`min-h-screen ${theme.colors.background} w-full overflow-x-hidden`}>
        <div className="w-full max-w-3xl mx-auto px-3 sm:px-4 md:px-6 py-6">
          <div className={`${theme.colors.card} p-4 sm:p-6 rounded-2xl border ${theme.colors.border}`}>
            <div className="text-center text-red-500">
              <p className="text-base sm:text-lg font-semibold">Error loading emails</p>
              <p className="text-xs sm:text-sm break-words mt-1">{error}</p>
              <button
                onClick={() => {
                  dispatch(fetchEmails(filters));
                  dispatch(fetchEmailStats());
                }}
                className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 text-sm"
              >
                Retry
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    // ✅ Fully responsive wrapper — sidebar-aware
    <div className={`min-h-screen ${theme.colors.background} w-full overflow-x-hidden`}>
      <div className="w-full max-w-7xl mx-auto px-2 sm:px-4 md:px-6 lg:px-8 py-3 sm:py-4 md:py-6 space-y-3 sm:space-y-4 md:space-y-6">

        {/* ================= HEADER ================= */}
        <div className={`flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3 sm:gap-4 ${theme.colors.card} p-3 sm:p-4 md:p-6 rounded-2xl border ${theme.colors.border}`}>
          <div className="min-w-0 flex-1 w-full">
            <h1 className={`text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold ${theme.colors.text} break-words`}>
              📨 Scheduled Emails
            </h1>
            <p className={`text-xs sm:text-sm ${theme.colors.text} opacity-70 mt-1 line-clamp-2`}>
              Manage and track all your scheduled email communications
            </p>
          </div>
        </div>

        {/* ================= STATS ================= */}
        <div className={loadingStats ? 'opacity-50 pointer-events-none' : ''}>
          <EmailStats summary={summary} loadingStats={loadingStats} />
        </div>

        {/* ================= FILTERS ================= */}
        {/* ✅ key ensures filter inputs re-render when filters reset */}
       <EmailFilters
  filters={filters}
  localFilters={localFilters}
  setLocalFilters={setLocalFilters}
  onApplyFilters={handleApplyFilters}
  onResetFilters={handleResetFilters}
/>

        {/* ================= EMAIL LIST ================= */}
        <EmailList
          emails={filteredEmails}
          loading={loading}
          onDelete={handleDelete}
          deletingId={deletingId}
        />

        {/* ================= PAGINATION ================= */}
        <EmailPagination />

      </div>
    </div>
  );
};

export default ScheduledEmail;
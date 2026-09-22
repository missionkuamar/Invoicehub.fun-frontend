// frontend/src/components/affiliate/AffiliateReferrals.jsx

import React, {
  useState,
  useEffect,
  useCallback,
} from 'react';

import {
  FaUsers,
  FaHistory,
  FaTimes,
  FaChevronLeft,
  FaChevronRight,
  FaAngleDoubleLeft,
  FaAngleDoubleRight,
  FaFilter,
  FaSpinner,
} from 'react-icons/fa';

import { useTheme } from '../../themes/ThemeProvider';
import api from '../../services/api';
import toast from 'react-hot-toast';


// ============================================================
// DEFAULT PAGINATION
// ============================================================

const DEFAULT_PAGINATION = {
  page: 1,
  limit: 20,
  total: 0,
  pages: 1,
  hasNextPage: false,
  hasPreviousPage: false,
};


const ALLOWED_LIMITS = [5, 10, 20, 50, 100, 200];


// ============================================================
// COMPONENT
// ============================================================

const AffiliateReferrals = ({
  title,
  items: initialItems = [],
  type = 'referral',
  onClose,

  // optional — if true, component fetches its own data
  // (used for withdrawals)
  fetchUrl = null,

  // optional — external status filter
  availableStatuses = [],
}) => {
  const { theme } = useTheme();

  const isReferral = type === 'referral';
  const isServerPaginated = Boolean(fetchUrl);

  // ============================================================
  // STATE
  // ============================================================

  const [items, setItems] = useState(initialItems);

  const [pagination, setPagination] = useState(
    DEFAULT_PAGINATION
  );

  const [statusFilter, setStatusFilter] = useState('');

  const [loading, setLoading] = useState(false);

  const [showFilters, setShowFilters] = useState(false);


  // ============================================================
  // SYNC EXTERNAL ITEMS (for referrals)
  // ============================================================

  useEffect(() => {
    if (!isServerPaginated) {
      setItems(initialItems || []);
    }
  }, [initialItems, isServerPaginated]);


  // ============================================================
  // FETCH (for withdrawals)
  // ============================================================

  const fetchData = useCallback(
    async (page = 1, limit = 20, status = '') => {
      if (!fetchUrl) return;

      setLoading(true);

      try {
        const params = {
          page,
          limit,
        };

        if (status) {
          params.status = status;
        }

        const response = await api.get(fetchUrl, {
          params,
        });

        const data = response.data?.data;

        if (!data) {
          throw new Error('Invalid response');
        }

        // ✅ handle both withdrawals and referrals
const list =
  data.withdrawals ||
  data.referrals ||
  [];
        const pag = data.pagination || {};

        setItems(list);

        const total = Number(pag.total) || 0;
        const currentLimit =
          Number(pag.limit) || limit;
        const totalPages =
          Number(pag.pages) ||
          Math.max(
            1,
            Math.ceil(total / currentLimit)
          );

        setPagination({
          page: Number(pag.page) || page,
          limit: currentLimit,
          total,
          pages: totalPages,
          hasNextPage: page < totalPages,
          hasPreviousPage: page > 1,
        });
      } catch (error) {
        console.error(
          'Failed to fetch:',
          error.response?.data?.message ||
            error.message
        );

        // silent — parent already shows toast if needed
      } finally {
        setLoading(false);
      }
    },
    [fetchUrl]
  );


  // ============================================================
  // INITIAL FETCH (server paginated)
  // ============================================================

  useEffect(() => {
    if (isServerPaginated) {
      fetchData(1, 20, '');
    }
  }, [isServerPaginated, fetchData]);


  // ============================================================
  // FORMATTERS
  // ============================================================

  const formatAmount = (amount) => {
    const value = Number(amount ?? 0);

    return Number.isFinite(value)
      ? value.toFixed(2)
      : '0.00';
  };


  const formatDate = (date) => {
    if (!date) return '—';

    const parsed = new Date(date);

    if (Number.isNaN(parsed.getTime())) {
      return '—';
    }

    return parsed.toLocaleDateString(undefined, {
      day: '2-digit',
      month: 'short',
      year: 'numeric',
    });
  };


  // ============================================================
  // STATUS BADGE (referral)
  // ============================================================

  const getStatusBadge = (status) => {
    const config = {
      subscribed: {
        label: 'Subscribed',
        className:
          'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400',
      },
      registered: {
        label: 'Registered',
        className:
          'bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400',
      },
      pending: {
        label: 'Pending',
        className:
          'bg-yellow-100 text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-400',
      },
      approved: {
        label: 'Approved',
        className:
          'bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400',
      },
      completed: {
        label: 'Completed',
        className:
          'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400',
      },
      failed: {
        label: 'Failed',
        className:
          'bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400',
      },
      cancelled: {
        label: 'Cancelled',
        className:
          'bg-gray-100 text-gray-700 dark:bg-gray-700 dark:text-gray-300',
      },
      rejected: {
        label: 'Rejected',
        className:
          'bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400',
      },
      processing: {
        label: 'Processing',
        className:
          'bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-400',
      },
    };

    const current = config[status] || config.pending;

    return (
      <span
        className={`
          inline-flex
          items-center
          justify-center
          whitespace-nowrap
          rounded-full
          px-2.5
          py-1
          text-[10px]
          sm:text-xs
          font-medium
          ${current.className}
        `}
      >
        {current.label}
      </span>
    );
  };


  // ============================================================
  // STATUS COLOR (withdrawal)
  // ============================================================

  const getStatusColor = (status) => {
    const colors = {
      pending:
        'text-yellow-600 dark:text-yellow-400',
      approved:
        'text-blue-600 dark:text-blue-400',
      processing:
        'text-purple-600 dark:text-purple-400',
      completed:
        'text-green-600 dark:text-green-400',
      failed:
        'text-red-600 dark:text-red-400',
      cancelled:
        'text-gray-600 dark:text-gray-400',
      rejected:
        'text-red-600 dark:text-red-400',
    };

    return (
      colors[status] ||
      'text-gray-600 dark:text-gray-400'
    );
  };


  // ============================================================
  // PAGINATION HELPERS
  // ============================================================

  const handlePageChange = (page) => {
    const newPage = Number(page);

    if (
      !Number.isInteger(newPage) ||
      newPage < 1 ||
      newPage > pagination.pages
    ) {
      return;
    }

    if (newPage === pagination.page) return;

    fetchData(
      newPage,
      pagination.limit,
      statusFilter
    );
  };


  const handleLimitChange = (e) => {
    const newLimit = Number(e.target.value);

    if (!ALLOWED_LIMITS.includes(newLimit)) {
      return;
    }

    fetchData(1, newLimit, statusFilter);
  };


  const handleStatusChange = (e) => {
    const newStatus = e.target.value;

    setStatusFilter(newStatus);

    fetchData(1, pagination.limit, newStatus);
  };


  // ============================================================
  // PAGE NUMBERS
  // ============================================================

  const getPageNumbers = () => {
    const total = pagination.pages;
    const current = pagination.page;

    if (total <= 7) {
      return Array.from(
        { length: total },
        (_, i) => i + 1
      );
    }

    if (current <= 4) {
      return [1, 2, 3, 4, 5, '...', total];
    }

    if (current >= total - 3) {
      return [
        1,
        '...',
        total - 4,
        total - 3,
        total - 2,
        total - 1,
        total,
      ];
    }

    return [
      1,
      '...',
      current - 1,
      current,
      current + 1,
      '...',
      total,
    ];
  };


  // ============================================================
  // RANGE
  // ============================================================

  const startItem =
    pagination.total === 0
      ? 0
      : (pagination.page - 1) *
          pagination.limit +
        1;

  const endItem = Math.min(
    pagination.page * pagination.limit,
    pagination.total
  );


  // ============================================================
  // STATUS OPTIONS (for withdrawal filter)
  // ============================================================

  const statusOptions =
    availableStatuses.length > 0
      ? availableStatuses
      : [
          { value: '', label: 'All' },
          { value: 'pending', label: 'Pending' },
          { value: 'approved', label: 'Approved' },
          { value: 'processing', label: 'Processing' },
          { value: 'completed', label: 'Completed' },
          { value: 'failed', label: 'Failed' },
          { value: 'cancelled', label: 'Cancelled' },
          { value: 'rejected', label: 'Rejected' },
        ];


  // ============================================================
  // BUTTON CLASSES
  // ============================================================

  const baseBtn = `
    flex
    items-center
    justify-center
    transition-all
    duration-200
    rounded-lg
  `;


  // ============================================================
  // RENDER
  // ============================================================

  return (
    <div
      className={`
        w-full
        min-w-0
        ${theme.colors.card}
        rounded-xl
        sm:rounded-2xl
        border
        ${theme.colors.border}
        overflow-hidden
      `}
    >

      {/* ======================================================
          HEADER
      ====================================================== */}

      <div
        className={`
          flex
          items-center
          justify-between
          gap-3
          px-4
          py-3.5
          sm:px-5
          sm:py-4
          min-w-0
          border-b
          ${theme.colors.border}
        `}
      >
        <h3
          className={`
            flex
            items-center
            gap-2
            min-w-0
            flex-1
            ${theme.colors.text}
            text-sm
            sm:text-base
            font-semibold
          `}
        >
          {isReferral ? (
            <FaUsers
              className={`${theme.colors.primary} shrink-0`}
            />
          ) : (
            <FaHistory
              className={`${theme.colors.primary} shrink-0`}
            />
          )}

          <span className="truncate">
            {title}
          </span>

          {pagination.total > 0 && (
            <span
              className={`
                hidden
                sm:inline-flex
                text-xs
                font-normal
                ${theme.colors.text}
                opacity-50
              `}
            >
              ({pagination.total})
            </span>
          )}
        </h3>

        <div className="flex items-center gap-2 shrink-0">
          {/* FILTER TOGGLE (only for server-paginated withdrawal) */}
          {isServerPaginated && (
            <button
              type="button"
              onClick={() =>
                setShowFilters((p) => !p)
              }
              className={`
                ${baseBtn}
                w-8
                h-8
                ${theme.colors.text}
                opacity-60
                hover:opacity-100
                hover:bg-black/5
                dark:hover:bg-white/5
              `}
              title="Filters"
              aria-label="Toggle filters"
            >
              <FaFilter className="text-xs" />
            </button>
          )}

          {onClose && (
            <button
              type="button"
              onClick={onClose}
              aria-label="Close"
              className={`
                ${baseBtn}
                w-8
                h-8
                ${theme.colors.text}
                opacity-60
                hover:opacity-100
                hover:bg-black/5
                dark:hover:bg-white/5
              `}
            >
              <FaTimes className="text-sm" />
            </button>
          )}
        </div>
      </div>


      {/* ======================================================
          FILTERS PANEL
      ====================================================== */}

      {isServerPaginated && showFilters && (
        <div
          className={`
            px-4
            py-3
            sm:px-5
            border-b
            ${theme.colors.border}
            flex
            flex-wrap
            items-center
            gap-3
            text-xs
            sm:text-sm
          `}
        >
          <label
            className={`
              flex
              items-center
              gap-2
              ${theme.colors.text}
            `}
          >
            <span className="opacity-60">
              Status:
            </span>

            <select
              value={statusFilter}
              onChange={handleStatusChange}
              className={`
                px-2.5
                py-1.5
                rounded-lg
                border
                ${theme.colors.border}
                ${theme.colors.card}
                ${theme.colors.text}
                text-xs
                sm:text-sm
                outline-none
                cursor-pointer
              `}
            >
              {statusOptions.map((opt) => (
                <option
                  key={opt.value}
                  value={opt.value}
                >
                  {opt.label}
                </option>
              ))}
            </select>
          </label>

          {statusFilter && (
            <button
              type="button"
              onClick={() => {
                setStatusFilter('');
                fetchData(1, pagination.limit, '');
              }}
              className={`
                text-xs
                ${theme.colors.primary}
                hover:underline
              `}
            >
              Clear
            </button>
          )}
        </div>
      )}


      {/* ======================================================
          CONTENT
      ====================================================== */}

      {loading ? (
        <div className="px-4 py-12 text-center">
          <FaSpinner
            className={`
              animate-spin
              text-2xl
              mx-auto
              mb-2
              ${theme.colors.primary}
            `}
          />

          <p
            className={`
              text-sm
              ${theme.colors.text}
              opacity-60
            `}
          >
            Loading...
          </p>
        </div>
      ) : items.length === 0 ? (
        <div className="px-4 py-8 sm:px-5 sm:py-10">
          <p
            className={`
              text-center
              text-sm
              ${theme.colors.text}
              opacity-60
            `}
          >
            No {isReferral ? 'referrals' : 'withdrawals'}
            {statusFilter
              ? ` with status "${statusFilter}"`
              : ''}{' '}
            yet
          </p>
        </div>
      ) : (
        <>
          {/* ================================================
              SCROLLABLE LIST
          ================================================ */}

          <div
            className="
              max-h-[360px]
              sm:max-h-[420px]
              lg:max-h-[500px]
              overflow-y-auto
              overflow-x-hidden
              overscroll-contain
            "
          >
            <div className="px-4 sm:px-5">
              {items.map((item, index) => {
                const name =
                  item.referredUser?.name ||
                  'Anonymous User';

                const amount = formatAmount(
                  item.amount
                );

                const commission = Number(
                  item.commission ?? 0
                );

                return (
                  <div
                    key={
                      item._id ||
                      `${item.createdAt}-${index}`
                    }
                    className={`
                      w-full
                      min-w-0
                      py-3.5
                      sm:py-4
                      border-b
                      ${theme.colors.border}
                      last:border-b-0
                    `}
                  >
                    <div
                      className="
                        flex
                        flex-col
                        gap-2.5
                        sm:flex-row
                        sm:items-center
                        sm:justify-between
                        sm:gap-4
                        min-w-0
                      "
                    >
                      {/* LEFT */}

                      <div className="min-w-0 flex-1">
                        <p
                          className={`
                            ${theme.colors.text}
                            text-sm
                            font-medium
                            truncate
                          `}
                          title={
                            isReferral
                              ? name
                              : `₹${amount}`
                          }
                        >
                          {isReferral
                            ? name
                            : `₹${amount}`}
                        </p>

                        <p
                          className={`
                            mt-0.5
                            text-[11px]
                            sm:text-xs
                            ${theme.colors.text}
                            opacity-60
                          `}
                        >
                          {formatDate(
                            item.createdAt
                          )}
                        </p>
                      </div>

                      {/* RIGHT */}

                      <div
                        className="
                          flex
                          items-center
                          justify-between
                          sm:justify-end
                          gap-2
                          sm:gap-3
                          shrink-0
                          min-w-0
                        "
                      >
                        {isReferral ? (
                          <>
                            {getStatusBadge(
                              item.status
                            )}

                            {commission > 0 && (
                              <span
                                className="
                                  whitespace-nowrap
                                  text-xs
                                  sm:text-sm
                                  font-semibold
                                  text-green-600
                                  dark:text-green-400
                                "
                              >
                                +₹
                                {formatAmount(
                                  commission
                                )}
                              </span>
                            )}
                          </>
                        ) : (
                          <span
                            className={`
                              whitespace-nowrap
                              text-[10px]
                              sm:text-xs
                              font-semibold
                              ${getStatusColor(
                                item.status
                              )}
                            `}
                          >
                            {String(
                              item.status ||
                                'pending'
                            ).toUpperCase()}
                          </span>
                        )}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>


          {/* ================================================
              PAGINATION FOOTER (server-paginated only)
          ================================================ */}

          {isServerPaginated && pagination.total > 0 && (
            <div
              className={`
                px-4
                sm:px-5
                py-3
                border-t
                ${theme.colors.border}
                flex
                flex-col
                lg:flex-row
                lg:items-center
                lg:justify-between
                gap-3
              `}
            >
              {/* LEFT */}

              <div
                className={`
                  flex
                  flex-col
                  sm:flex-row
                  sm:items-center
                  gap-2
                  sm:gap-3
                  text-xs
                  sm:text-sm
                  ${theme.colors.text}
                  opacity-70
                `}
              >
                <span>
                  Showing{' '}
                  <strong className="opacity-100">
                    {startItem}
                  </strong>
                  {' '}to{' '}
                  <strong className="opacity-100">
                    {endItem}
                  </strong>
                  {' '}of{' '}
                  <strong className="opacity-100">
                    {pagination.total}
                  </strong>
                </span>

                <div className="flex items-center gap-2">
                  <span>Per page:</span>

                  <select
                    value={pagination.limit}
                    onChange={handleLimitChange}
                    className={`
                      px-2
                      py-1
                      rounded-lg
                      border
                      ${theme.colors.border}
                      ${theme.colors.card}
                      ${theme.colors.text}
                      text-xs
                      sm:text-sm
                      outline-none
                      cursor-pointer
                    `}
                  >
                    {ALLOWED_LIMITS.map((n) => (
                      <option key={n} value={n}>
                        {n}
                      </option>
                    ))}
                  </select>
                </div>
              </div>


              {/* RIGHT */}

              <div
                className="
                  flex
                  items-center
                  justify-center
                  gap-1.5
                  flex-wrap
                "
              >
                {/* FIRST */}

                <button
                  type="button"
                  disabled={!pagination.hasPreviousPage}
                  onClick={() => handlePageChange(1)}
                  className={`
                    ${baseBtn}
                    w-8
                    h-8
                    border
                    ${theme.colors.border}
                    ${
                      !pagination.hasPreviousPage
                        ? 'opacity-30 cursor-not-allowed'
                        : `${theme.colors.hover} hover:scale-105`
                    }
                  `}
                  title="First page"
                  aria-label="First page"
                >
                  <FaAngleDoubleLeft className="text-xs" />
                </button>


                {/* PREVIOUS */}

                <button
                  type="button"
                  disabled={!pagination.hasPreviousPage}
                  onClick={() =>
                    handlePageChange(
                      pagination.page - 1
                    )
                  }
                  className={`
                    ${baseBtn}
                    w-8
                    h-8
                    border
                    ${theme.colors.border}
                    ${
                      !pagination.hasPreviousPage
                        ? 'opacity-30 cursor-not-allowed'
                        : `${theme.colors.hover} hover:scale-105`
                    }
                  `}
                  title="Previous"
                  aria-label="Previous page"
                >
                  <FaChevronLeft className="text-xs" />
                </button>


                {/* PAGE NUMBERS */}

                <div className="flex items-center gap-1">
                  {getPageNumbers().map(
                    (page, idx) => {
                      if (page === '...') {
                        return (
                          <span
                            key={`dots-${idx}`}
                            className={`
                              w-8
                              h-8
                              flex
                              items-center
                              justify-center
                              text-xs
                              ${theme.colors.text}
                              opacity-50
                            `}
                          >
                            ...
                          </span>
                        );
                      }

                      const active =
                        page === pagination.page;

                      return (
                        <button
                          key={page}
                          type="button"
                          onClick={() =>
                            handlePageChange(page)
                          }
                          className={`
                            ${baseBtn}
                            w-8
                            h-8
                            text-xs
                            font-medium
                            ${
                              active
                                ? `${theme.colors.button} text-white shadow-sm`
                                : `${theme.colors.text} ${theme.colors.hover}`
                            }
                          `}
                          aria-current={
                            active
                              ? 'page'
                              : undefined
                          }
                        >
                          {page}
                        </button>
                      );
                    }
                  )}
                </div>


                {/* NEXT */}

                <button
                  type="button"
                  disabled={!pagination.hasNextPage}
                  onClick={() =>
                    handlePageChange(
                      pagination.page + 1
                    )
                  }
                  className={`
                    ${baseBtn}
                    w-8
                    h-8
                    border
                    ${theme.colors.border}
                    ${
                      !pagination.hasNextPage
                        ? 'opacity-30 cursor-not-allowed'
                        : `${theme.colors.hover} hover:scale-105`
                    }
                  `}
                  title="Next"
                  aria-label="Next page"
                >
                  <FaChevronRight className="text-xs" />
                </button>


                {/* LAST */}

                <button
                  type="button"
                  disabled={!pagination.hasNextPage}
                  onClick={() =>
                    handlePageChange(
                      pagination.pages
                    )
                  }
                  className={`
                    ${baseBtn}
                    w-8
                    h-8
                    border
                    ${theme.colors.border}
                    ${
                      !pagination.hasNextPage
                        ? 'opacity-30 cursor-not-allowed'
                        : `${theme.colors.hover} hover:scale-105`
                    }
                  `}
                  title="Last page"
                  aria-label="Last page"
                >
                  <FaAngleDoubleRight className="text-xs" />
                </button>
              </div>
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default AffiliateReferrals;
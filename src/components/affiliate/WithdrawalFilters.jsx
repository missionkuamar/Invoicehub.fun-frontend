// frontend/src/components/affiliate/WithdrawalFilters.jsx

import React from 'react';
import { FaSearch, FaTimes } from 'react-icons/fa';
import { useTheme } from '../../themes/ThemeProvider';

const WithdrawalFilters = ({ filters, onFilterChange }) => {
  const { theme } = useTheme();

  // ============================================================
  // HANDLE CHANGE
  // ============================================================

  const handleChange = (e) => {
    const { name, value } = e.target;

    onFilterChange({
      ...filters,
      [name]: value,
    });
  };

  // ============================================================
  // CLEAR FILTERS
  // ============================================================

  const handleClear = () => {
    onFilterChange({
      status: '',
      startDate: '',
      endDate: '',
      search: '',
      paymentMethod: '',
    });
  };

  // ============================================================
  // COMMON INPUT CLASS
  // ============================================================

  const inputClass = `
    w-full
    min-w-0
    h-10
    px-3
    rounded-xl
    border
    ${theme.colors.border}
    ${theme.colors.text}
    bg-transparent
    text-sm
    outline-none
    transition-all
    focus:ring-2
    focus:ring-primary-500
    focus:border-primary-500
  `;

  return (
    <div
      className={`
        w-full
        min-w-0
        ${theme.colors.card}
        rounded-xl
        sm:rounded-2xl
        p-3
        sm:p-4
        border
        ${theme.colors.border}
        overflow-hidden
      `}
    >
      {/* ======================================================
          FILTER CONTAINER
      ====================================================== */}

      <div className="w-full min-w-0">

        {/* ====================================================
            SEARCH
        ==================================================== */}

        <div className="w-full min-w-0">
          <label
            className={`
              block
              text-xs
              font-medium
              ${theme.colors.text}
              opacity-70
              mb-1.5
            `}
          >
            Search
          </label>

          <div className="relative w-full">
            <FaSearch
              className={`
                absolute
                left-3
                top-1/2
                -translate-y-1/2
                ${theme.colors.text}
                opacity-40
                text-sm
                pointer-events-none
              `}
            />

            <input
              type="text"
              name="search"
              placeholder="Search by transaction ID..."
              value={filters.search || ''}
              onChange={handleChange}
              className={`
                ${inputClass}
                pl-9
                pr-3
              `}
            />
          </div>
        </div>

        {/* ====================================================
            SELECT FILTERS
        ==================================================== */}

        <div
          className="
            grid
            grid-cols-1
            min-[420px]:grid-cols-2
            lg:grid-cols-2
            gap-3
            mt-3
          "
        >

          {/* STATUS */}

          <div className="min-w-0">
            <label
              className={`
                block
                text-xs
                font-medium
                ${theme.colors.text}
                opacity-70
                mb-1.5
              `}
            >
              Status
            </label>

            <select
              name="status"
              value={filters.status || ''}
              onChange={handleChange}
              className={inputClass}
            >
              <option value="">All Status</option>
              <option value="pending">⏳ Pending</option>
              <option value="approved">✅ Approved</option>
              <option value="processing">🔄 Processing</option>
              <option value="completed">🎉 Completed</option>
              <option value="failed">❌ Failed</option>
              <option value="cancelled">🚫 Cancelled</option>
            </select>
          </div>

          {/* PAYMENT METHOD */}

          <div className="min-w-0">
            <label
              className={`
                block
                text-xs
                font-medium
                ${theme.colors.text}
                opacity-70
                mb-1.5
              `}
            >
              Payment Method
            </label>

            <select
              name="paymentMethod"
              value={filters.paymentMethod || ''}
              onChange={handleChange}
              className={inputClass}
            >
              <option value="">All Methods</option>
              <option value="bank">🏦 Bank</option>
              <option value="upi">📱 UPI</option>
              <option value="paypal">💳 PayPal</option>
            </select>
          </div>
        </div>

        {/* ====================================================
            DATE FILTERS
        ==================================================== */}

        <div
          className="
            grid
            grid-cols-1
            min-[420px]:grid-cols-2
            gap-3
            mt-3
          "
        >

          {/* START DATE */}

          <div className="min-w-0">
            <label
              className={`
                block
                text-xs
                font-medium
                ${theme.colors.text}
                opacity-70
                mb-1.5
              `}
            >
              Start Date
            </label>

            <input
              type="date"
              name="startDate"
              value={filters.startDate || ''}
              onChange={handleChange}
              className={inputClass}
            />
          </div>

          {/* END DATE */}

          <div className="min-w-0">
            <label
              className={`
                block
                text-xs
                font-medium
                ${theme.colors.text}
                opacity-70
                mb-1.5
              `}
            >
              End Date
            </label>

            <input
              type="date"
              name="endDate"
              value={filters.endDate || ''}
              onChange={handleChange}
              className={inputClass}
            />
          </div>
        </div>

        {/* ====================================================
            ACTIONS
        ==================================================== */}

        <div className="mt-3 flex justify-end">

          <button
            type="button"
            onClick={handleClear}
            className={`
              w-full
              sm:w-auto
              min-h-10
              px-4
              py-2
              rounded-xl
              border
              ${theme.colors.border}
              ${theme.colors.text}
              flex
              items-center
              justify-center
              gap-2
              text-sm
              font-medium
              transition-all
              hover:opacity-80
              active:scale-[0.98]
            `}
          >
            <FaTimes className="shrink-0" />

            <span>
              Clear Filters
            </span>
          </button>
        </div>

      </div>
    </div>
  );
};

export default WithdrawalFilters;
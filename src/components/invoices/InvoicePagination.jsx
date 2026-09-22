// frontend/src/components/invoices/InvoicePagination.jsx
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  FaChevronLeft, FaChevronRight,
  FaAngleDoubleLeft, FaAngleDoubleRight,
} from 'react-icons/fa';
import { setPage, setLimit, fetchInvoices } from '../../store/slices/invoiceSlice';
import { useTheme } from '../../themes/ThemeProvider';

const InvoicePagination = () => {
  const dispatch = useDispatch();
  const { theme } = useTheme();
  const { pagination, loading } = useSelector((state) => state.invoices);

  const page = pagination?.page || 1;
  const limit = pagination?.limit || 10;
  const total = pagination?.total || 0;
  const pages = pagination?.pages || 1;

  const limitOptions = [5, 10, 20, 50, 100];

  // ✅ Page change handler — pagination + API call
  const handlePageChange = (newPage) => {
    if (newPage < 1 || newPage > pages || newPage === page) return;

    dispatch(setPage(newPage));
    dispatch(fetchInvoices({ page: newPage }));
  };

  // ✅ Limit change — page reset to 1
  const handleLimitChange = (e) => {
    const newLimit = Number(e.target.value);
    if (newLimit === limit) return;

    dispatch(setLimit(newLimit));   // reducer resets page to 1
    dispatch(fetchInvoices({ limit: newLimit, page: 1 }));
  };

  // ✅ Visible page numbers
  const getVisiblePages = () => {
    const pageNumbers = [];
    const maxVisible = 5;
    let start = Math.max(1, page - Math.floor(maxVisible / 2));
    let end = Math.min(pages, start + maxVisible - 1);

    if (end - start + 1 < maxVisible) {
      start = Math.max(1, end - maxVisible + 1);
    }

    for (let i = start; i <= end; i++) {
      pageNumbers.push(i);
    }
    return pageNumbers;
  };

  if (total === 0) return null;

  const startItem = (page - 1) * limit + 1;
  const endItem = Math.min(page * limit, total);

  // Common button base
  const navBtnBase = `flex items-center justify-center rounded-lg transition-colors disabled:cursor-not-allowed`;
  const navBtnSize = `p-1.5 sm:p-2 min-w-[30px] sm:min-w-[36px] h-[30px] sm:h-[36px]`;
  const navBtnEnabled = `${theme.colors.text} ${theme.colors.hover}`;
  const navBtnDisabled = `${theme.colors.text} opacity-30`;

  return (
    <div
      className={`flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between px-3 sm:px-4 py-3 ${theme.colors.card} border ${theme.colors.border} rounded-xl w-full`}
    >
      {/* ============================================================ */}
      {/* LEFT SECTION — Info + Rows per page */}
      {/* ============================================================ */}
      <div className="flex flex-col xs:flex-row items-center justify-between sm:justify-start gap-2 sm:gap-4 w-full sm:w-auto">
        {/* Info text */}
        <span className={`text-xs sm:text-sm ${theme.colors.text} opacity-70 whitespace-nowrap`}>
          <span className={`font-semibold ${theme.colors.text}`}>{startItem}</span>
          {' – '}
          <span className={`font-semibold ${theme.colors.text}`}>{endItem}</span>
          {' of '}
          <span className={`font-semibold ${theme.colors.text}`}>{total}</span>
        </span>

        {/* Rows per page selector */}
        <div className="flex items-center gap-2">
          <label className={`text-xs sm:text-sm ${theme.colors.text} opacity-70 whitespace-nowrap`}>
            Rows:
          </label>
          <select
            value={limit}
            onChange={handleLimitChange}
            disabled={loading}
            className={`border ${theme.colors.border} ${theme.colors.text} bg-transparent rounded-lg px-2 py-1 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-primary-500 cursor-pointer disabled:opacity-50`}
            style={{ colorScheme: 'auto' }}
          >
            {limitOptions.map((opt) => (
              <option key={opt} value={opt}>
                {opt}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* ============================================================ */}
      {/* RIGHT SECTION — Page navigation */}
      {/* ============================================================ */}
      <div className="flex items-center justify-center gap-1 sm:gap-1.5 w-full sm:w-auto">
        {/* First page */}
        <button
          onClick={() => handlePageChange(1)}
          disabled={page === 1 || loading}
          className={`${navBtnBase} ${navBtnSize} ${
            page === 1 || loading ? navBtnDisabled : navBtnEnabled
          }`}
          title="First page"
          aria-label="First page"
        >
          <FaAngleDoubleLeft className="text-xs sm:text-sm" />
        </button>

        {/* Prev page */}
        <button
          onClick={() => handlePageChange(page - 1)}
          disabled={page === 1 || loading}
          className={`${navBtnBase} ${navBtnSize} ${
            page === 1 || loading ? navBtnDisabled : navBtnEnabled
          }`}
          title="Previous page"
          aria-label="Previous page"
        >
          <FaChevronLeft className="text-xs sm:text-sm" />
        </button>

        {/* Page numbers — hide on very small screens if too many */}
        <div className="flex items-center gap-1">
          {getVisiblePages().map((pageNum) => {
            const isActive = pageNum === page;
            return (
              <button
                key={pageNum}
                onClick={() => handlePageChange(pageNum)}
                disabled={loading}
                className={`min-w-[30px] sm:min-w-[36px] h-[30px] sm:h-[36px] px-2 rounded-lg text-xs sm:text-sm font-medium transition-colors disabled:opacity-50 ${
                  isActive
                    ? `${theme.colors.button} text-white shadow-sm`
                    : `${theme.colors.text} ${theme.colors.hover}`
                }`}
                aria-label={`Page ${pageNum}`}
                aria-current={isActive ? 'page' : undefined}
              >
                {pageNum}
              </button>
            );
          })}
        </div>

        {/* Next page */}
        <button
          onClick={() => handlePageChange(page + 1)}
          disabled={page === pages || loading}
          className={`${navBtnBase} ${navBtnSize} ${
            page === pages || loading ? navBtnDisabled : navBtnEnabled
          }`}
          title="Next page"
          aria-label="Next page"
        >
          <FaChevronRight className="text-xs sm:text-sm" />
        </button>

        {/* Last page */}
        <button
          onClick={() => handlePageChange(pages)}
          disabled={page === pages || loading}
          className={`${navBtnBase} ${navBtnSize} ${
            page === pages || loading ? navBtnDisabled : navBtnEnabled
          }`}
          title="Last page"
          aria-label="Last page"
        >
          <FaAngleDoubleRight className="text-xs sm:text-sm" />
        </button>
      </div>
    </div>
  );
};

export default InvoicePagination;
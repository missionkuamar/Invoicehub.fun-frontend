// frontend/src/components/invoices/InvoiceFilters.jsx
import React, { useState, useEffect, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  FaSearch, FaFilter, FaTimes, FaSortAmountDown,
  FaSortAmountUp, FaUndo
} from 'react-icons/fa';
import {
  setFilters,
  clearFilters,
  fetchInvoices,
  localSearch,
  toggleInvoiceFilters,       // ✅ ADD
} from '../../store/slices/invoiceSlice';
import { useTheme } from '../../themes/ThemeProvider';
import debounce from 'lodash/debounce';

const DEBOUNCED_FIELDS = ['invoiceNumber', 'clientName', 'clientEmail', 'minAmount', 'maxAmount'];

const InvoiceFilters = () => {
  const dispatch = useDispatch();
  const { theme } = useTheme();
  const { filters, isOfflineSearch } = useSelector((state) => state.invoices);

  // ✅ showFilters Redux se — parent remount pe bhi persist rahega
  const showFilters = useSelector((state) => state.invoices.ui?.showFilters || false);

  // ✅ Local inputs — typing instant, Redux sirf debounced updates leta hai
  const [localInputs, setLocalInputs] = useState({
    search: '',
    invoiceNumber: '',
    clientName: '',
    clientEmail: '',
    minAmount: '',
    maxAmount: '',
  });

  // ✅ Mount pe ek baar Redux se sync
  useEffect(() => {
    setLocalInputs((prev) => ({
      ...prev,
      search: filters.search || '',
      invoiceNumber: filters.invoiceNumber || '',
      clientName: filters.clientName || '',
      clientEmail: filters.clientEmail || '',
      minAmount: filters.minAmount || '',
      maxAmount: filters.maxAmount || '',
    }));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // ✅ Debounced dispatcher
  const debouncedDispatch = useMemo(
    () =>
      debounce((name, value) => {
        if (name === 'search') {
          if (value && value.trim().length > 0) {
            dispatch(localSearch({ query: value }));
            dispatch(setFilters({ search: value }));
            dispatch(fetchInvoices({ search: value }));
          } else {
            dispatch(setFilters({ search: '' }));
            dispatch(fetchInvoices({ search: '' }));
          }
        } else {
          dispatch(setFilters({ [name]: value }));
          dispatch(fetchInvoices({ [name]: value }));
        }
      }, 500),
    [dispatch]
  );

  // ✅ Cleanup
  useEffect(() => {
    return () => debouncedDispatch.cancel();
  }, [debouncedDispatch]);

  // ✅ Single change handler
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setLocalInputs((prev) => ({ ...prev, [name]: value }));
    debouncedDispatch(name, value);
  };

  // ✅ Instant (select/date)
  const handleInstantFilterChange = (e) => {
    const { name, value } = e.target;
    dispatch(setFilters({ [name]: value }));
    dispatch(fetchInvoices({ [name]: value }));
  };

  const handleSortChange = (field) => {
    const newOrder =
      filters.sortBy === field && filters.sortOrder === 'asc' ? 'desc' : 'asc';
    dispatch(setFilters({ sortBy: field, sortOrder: newOrder }));
    dispatch(fetchInvoices({ sortBy: field, sortOrder: newOrder }));
  };

  const handleClearFilters = () => {
    debouncedDispatch.cancel();
    dispatch(clearFilters());
    setLocalInputs({
      search: '',
      invoiceNumber: '',
      clientName: '',
      clientEmail: '',
      minAmount: '',
      maxAmount: '',
    });
    dispatch(fetchInvoices({}));
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      debouncedDispatch.cancel();
      const value = localInputs.search;
      if (value.trim()) {
        dispatch(setFilters({ search: value }));
        dispatch(fetchInvoices({ search: value }));
      }
    }
  };

  // ✅ Active filters — debounced fields exclude (chip spam rokne ke liye)
  const activeFilters = Object.entries(filters).filter(
    ([key, value]) =>
      value &&
      value !== '' &&
      key !== 'sortBy' &&
      key !== 'sortOrder' &&
      !DEBOUNCED_FIELDS.includes(key) &&
      key !== 'search'
  );

  const inputClass = `w-full px-3 py-2 rounded-lg border ${theme.colors.border} ${theme.colors.text} bg-transparent focus:outline-none focus:ring-2 focus:ring-primary-500 text-sm`;
  const labelClass = `block text-xs sm:text-sm font-medium ${theme.colors.text} mb-1`;

  return (
    <div className={`${theme.colors.card} rounded-2xl border ${theme.colors.border} p-3 md:p-4 shadow-sm space-y-3 md:space-y-4 w-full`}>
      {/* ================= SEARCH BAR ================= */}
      <div className="flex flex-col sm:flex-row gap-2 sm:gap-3">
        <div className="flex-1 relative w-full">
          <input
            type="text"
            name="search"
            placeholder="Search by invoice #, client name, or email..."
            value={localInputs.search}
            onChange={handleInputChange}
            onKeyPress={handleKeyPress}
            className={`w-full pl-10 pr-10 py-2.5 rounded-xl border ${theme.colors.border} ${theme.colors.text} bg-transparent focus:outline-none focus:ring-2 focus:ring-primary-500 text-sm`}
          />
          <FaSearch className={`absolute left-3 top-1/2 -translate-y-1/2 ${theme.colors.text} opacity-40`} />
          {localInputs.search && (
            <button
              type="button"
              onClick={() => {
                debouncedDispatch.cancel();
                setLocalInputs((prev) => ({ ...prev, search: '' }));
                dispatch(setFilters({ search: '' }));
                dispatch(fetchInvoices({ search: '' }));
              }}
              className={`absolute right-3 top-1/2 -translate-y-1/2 ${theme.colors.text} opacity-40 hover:opacity-100`}
            >
              <FaTimes />
            </button>
          )}
        </div>

        <div className="flex gap-2 flex-shrink-0">
          {/* ✅ Redux action se toggle */}
          <button
            type="button"
            onClick={() => dispatch(toggleInvoiceFilters())}
            className={`flex-1 sm:flex-initial flex items-center justify-center gap-2 px-3 md:px-4 py-2.5 rounded-xl border ${theme.colors.border} ${theme.colors.text} hover:${theme.colors.hover} transition-colors text-sm ${showFilters ? 'border-primary-500' : ''
              }`}
          >
            <FaFilter />
            <span>Filters</span>
            {activeFilters.length > 0 && (
              <span className="bg-primary-500 text-white text-xs px-2 py-0.5 rounded-full">
                {activeFilters.length}
              </span>
            )}
          </button>

          <button
            type="button"
            onClick={handleClearFilters}
            className={`flex-1 sm:flex-initial flex items-center justify-center gap-2 px-3 md:px-4 py-2.5 rounded-xl border ${theme.colors.border} ${theme.colors.text} hover:${theme.colors.hover} transition-colors text-sm`}
          >
            <FaUndo />
            <span>Reset</span>
          </button>
        </div>
      </div>

      {/* ================= OFFLINE SEARCH STATUS ================= */}
      {isOfflineSearch && (
        <div className={`text-xs sm:text-sm ${theme.colors.primary} ${theme.colors.background} p-2 rounded-xl flex items-center gap-2`}>
          <FaSearch className={theme.colors.primary} />
          <span>Showing results from local cache. Click search again to refresh from server.</span>
        </div>
      )}

      {/* ================= ADVANCED FILTERS ================= */}
      {showFilters && (
        <div className={`border-t ${theme.colors.border} pt-3 md:pt-4 mt-2`}>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3">
            <div>
              <label className={labelClass}>Invoice Number</label>
              <input
                type="text"
                name="invoiceNumber"
                value={localInputs.invoiceNumber}
                onChange={handleInputChange}
                placeholder="INV-2024-00001"
                className={inputClass}
              />
            </div>

            <div>
              <label className={labelClass}>Client Name</label>
              <input
                type="text"
                name="clientName"
                value={localInputs.clientName}
                onChange={handleInputChange}
                placeholder="Client name"
                className={inputClass}
              />
            </div>

            <div>
              <label className={labelClass}>Client Email</label>
              <input
                type="email"
                name="clientEmail"
                value={localInputs.clientEmail}
                onChange={handleInputChange}
                placeholder="client@example.com"
                className={inputClass}
              />
            </div>

            <div>
              <label className={labelClass}>Status</label>
              <select
                name="status"
                value={filters.status || ''}
                onChange={handleInstantFilterChange}
                className={`${inputClass} cursor-pointer`}
              // ❌ style={{ colorScheme: 'dark' }} — HATA DO
              >
                <option value="">All Status</option>
                <option value="draft">Draft</option>
                <option value="sent">Sent</option>
                <option value="paid">Paid</option>
                <option value="overdue">Overdue</option>
                <option value="cancelled">Cancelled</option>
              </select>
            </div>

            <div>
              <label className={labelClass}>Min Amount (₹)</label>
              <input
                type="number"
                name="minAmount"
                value={localInputs.minAmount}
                onChange={handleInputChange}
                placeholder="0"
                className={inputClass}
                min="0"
              />
            </div>

            <div>
              <label className={labelClass}>Max Amount (₹)</label>
              <input
                type="number"
                name="maxAmount"
                value={localInputs.maxAmount}
                onChange={handleInputChange}
                placeholder="100000"
                className={inputClass}
                min="0"
              />
            </div>

            <div>
              <label className={labelClass}>Start Date</label>
              <input
                type="date"
                name="startDate"
                value={filters.startDate || ''}
                onChange={handleInstantFilterChange}
                className={inputClass}
              />
            </div>

            <div>
              <label className={labelClass}>End Date</label>
              <input
                type="date"
                name="endDate"
                value={filters.endDate || ''}
                onChange={handleInstantFilterChange}
                className={inputClass}
              />
            </div>
          </div>

          {/* ================= SORT OPTIONS ================= */}
          <div className={`mt-3 md:mt-4 flex flex-wrap gap-2 items-center border-t ${theme.colors.border} pt-3`}>
            <span className={`text-xs sm:text-sm font-medium ${theme.colors.text} mr-1`}>
              Sort by:
            </span>

            {['createdAt', 'total', 'client.name', 'status'].map((field) => (
              <button
                key={field}
                type="button"
                onClick={() => handleSortChange(field)}
                className={`flex items-center gap-1 px-3 py-1.5 rounded-full text-xs sm:text-sm transition-colors ${filters.sortBy === field
                    ? `${theme.colors.background} ${theme.colors.primary}`
                    : `${theme.colors.hover} ${theme.colors.text} opacity-70`
                  }`}
              >
                {field === 'createdAt' ? 'Date' :
                  field === 'total' ? 'Amount' :
                    field === 'client.name' ? 'Client' : 'Status'}
                {filters.sortBy === field &&
                  (filters.sortOrder === 'asc' ? <FaSortAmountUp size={12} /> : <FaSortAmountDown size={12} />)}
              </button>
            ))}
          </div>

          {/* ================= ACTIVE FILTERS ================= */}
          {activeFilters.length > 0 && (
            <div className="mt-3 flex flex-wrap gap-2">
              {activeFilters.map(([key, value]) => (
                <span
                  key={key}
                  className={`inline-flex items-center gap-1 ${theme.colors.background} px-2 py-1 rounded-full text-xs`}
                >
                  <span className={`font-medium ${theme.colors.text} opacity-70`}>
                    {key.replace(/([A-Z])/g, ' $1').trim()}:
                  </span>
                  <span className={theme.colors.text}>{value}</span>
                  <button
                    type="button"
                    onClick={() => {
                      dispatch(setFilters({ [key]: '' }));
                      dispatch(fetchInvoices({ [key]: '' }));
                      if (key in localInputs) {
                        setLocalInputs((prev) => ({ ...prev, [key]: '' }));
                      }
                    }}
                    className="text-red-400 hover:text-red-600 ml-1"
                  >
                    ×
                  </button>
                </span>
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default InvoiceFilters;
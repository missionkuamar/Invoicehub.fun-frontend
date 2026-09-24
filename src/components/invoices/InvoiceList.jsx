// frontend/src/components/invoices/InvoiceList.jsx
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { format } from 'date-fns';
import {
  FaEye, FaEdit, FaDownload, FaCheck,
  FaTimes, FaSpinner, FaPrint, FaEnvelope, FaFileInvoice,
  FaEllipsisV, FaChevronDown
} from 'react-icons/fa';
import { fetchInvoices, deleteInvoice, setPage } from '../../store/slices/invoiceSlice';
import InvoiceFilters from './InvoiceFilters';
import InvoicePagination from './InvoicePagination';
import InvoiceViewModal from './InvoiceViewModal';
import InvoiceEditModal from './InvoiceEditModal';
import { useTheme } from '../../themes/ThemeProvider';
import toast from 'react-hot-toast';
import { MdEmail } from "react-icons/md";
import DialogEmailBox from '../email/Email';

const InvoiceList = () => {
  const dispatch = useDispatch();
  const { theme } = useTheme();
  const { invoices, loading, pagination, filters, isOfflineSearch } = useSelector(
    (state) => state.invoices
  );

  const [viewModal, setViewModal] = useState({ isOpen: false, invoice: null });
  const [editModal, setEditModal] = useState({ isOpen: false, invoice: null });
  const [selectedInvoices, setSelectedInvoices] = useState([]);
  const [isBulkAction, setIsBulkAction] = useState(false);
  const [emailDialogBox, setEmailDialogBox] = useState({ isOpen: false, invoice: null });
  const [openMenuId, setOpenMenuId] = useState(null);  // ✅ Mobile actions dropdown

  useEffect(() => {
    dispatch(fetchInvoices({ page: pagination.page }));
  }, [dispatch, pagination.page]);

  // ✅ Close mobile menu on outside click
  useEffect(() => {
    const handleClick = () => setOpenMenuId(null);
    if (openMenuId) {
      document.addEventListener('click', handleClick);
      return () => document.removeEventListener('click', handleClick);
    }
  }, [openMenuId]);

  const handleDelete = async (id, invoiceNumber) => {
    if (window.confirm(`Are you sure you want to delete invoice ${invoiceNumber}?`)) {
      try {
        await dispatch(deleteInvoice(id)).unwrap();
        toast.success(`Invoice ${invoiceNumber} deleted successfully`);
        dispatch(fetchInvoices({ page: pagination.page }));
      } catch (error) {
        toast.error(error || 'Failed to delete invoice');
      }
    }
  };

  const handleView = (invoice) => {
    setViewModal({ isOpen: true, invoice });
    setOpenMenuId(null);
  };

  const handleEmail = (invoice) => {
    setEmailDialogBox({ isOpen: true, invoice });
    setOpenMenuId(null);
  };

  const handleEdit = (invoice) => {
    setEditModal({ isOpen: true, invoice });
    setOpenMenuId(null);
  };

  const handleDownload = (invoice) => {
    toast.success(`Downloading invoice ${invoice.invoiceNumber}...`);
  };

  const handlePrint = (invoice) => {
    window.print();
  };

  const handleSelectInvoice = (id) => {
    setSelectedInvoices(prev =>
      prev.includes(id)
        ? prev.filter(invId => invId !== id)
        : [...prev, id]
    );
  };

  const handleSelectAll = () => {
    if (selectedInvoices.length === invoices.length) {
      setSelectedInvoices([]);
    } else {
      setSelectedInvoices(invoices.map(inv => inv._id));
    }
  };

  const handleBulkDelete = async () => {
    if (!selectedInvoices.length) return;

    if (window.confirm(`Delete ${selectedInvoices.length} selected invoices?`)) {
      setIsBulkAction(true);
      try {
        await Promise.all(selectedInvoices.map(id => dispatch(deleteInvoice(id)).unwrap()));
        toast.success(`${selectedInvoices.length} invoices deleted successfully`);
        setSelectedInvoices([]);
        dispatch(fetchInvoices({ page: pagination.page }));
      } catch (error) {
        toast.error('Failed to delete some invoices');
      } finally {
        setIsBulkAction(false);
      }
    }
  };

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

  const getStatusIcon = (status) => {
    switch (status) {
      case 'paid': return <FaCheck className="text-green-500" />;
      case 'overdue': return <FaTimes className="text-red-500" />;
      default: return null;
    }
  };

  const toggleMenu = (e, id) => {
    e.stopPropagation();
    setOpenMenuId(openMenuId === id ? null : id);
  };

  // ✅ Loading state
  if (loading && invoices.length === 0) {
    return (
      <div className="flex justify-center items-center h-64">
        <FaSpinner className="animate-spin text-primary-500 text-3xl md:text-4xl" />
      </div>
    );
  }

  return (
    <div className="space-y-3 md:space-y-4 w-full">

      {/* ✅ Filters — always mounted, no remount */}
      <InvoiceFilters />

      <div className={`${theme.colors.card} rounded-2xl border ${theme.colors.border} shadow-sm w-full`}>

        {/* ================= BULK ACTIONS ================= */}
        {selectedInvoices.length > 0 && (
          <div className={`${theme.colors.background} border-b ${theme.colors.border} px-3 sm:px-4 py-3 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 sm:gap-3`}>
            <span className={`text-xs sm:text-sm font-medium ${theme.colors.text}`}>
              {selectedInvoices.length} invoice{selectedInvoices.length > 1 ? 's' : ''} selected
            </span>
            <div className="flex flex-wrap gap-2 w-full sm:w-auto">
              <button
                onClick={handleBulkDelete}
                disabled={isBulkAction}
                className="flex-1 sm:flex-initial px-3 py-1.5 rounded-lg border border-red-500/30 text-red-500 hover:bg-red-500/10 flex items-center justify-center gap-2 text-xs sm:text-sm transition-colors disabled:opacity-50"
              >
                {isBulkAction ? <FaSpinner className="animate-spin" /> : <FaTrash />}
                Delete Selected
              </button>
              <button
                onClick={() => setSelectedInvoices([])}
                className={`flex-1 sm:flex-initial px-3 py-1.5 rounded-lg border ${theme.colors.border} ${theme.colors.text} hover:${theme.colors.hover} text-xs sm:text-sm transition-colors`}
              >
                Clear
              </button>
            </div>
          </div>
        )}

        {/* ============================================================ */}
        {/* ✅ DESKTOP TABLE VIEW (md and above) */}
        {/* ============================================================ */}
        <div className="hidden md:block overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
            <thead className={theme.colors.background}>
              <tr>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                  Invoice #
                </th>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                  Client
                </th>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider hidden lg:table-cell">
                  Date
                </th>
                <th className="px-4 py-3 text-right text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                  Total
                </th>
                <th className="px-4 py-3 text-center text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                  Status
                </th>
                <th className="px-4 py-3 text-right text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className={`${theme.colors.card} divide-y divide-gray-200 dark:divide-gray-700`}>
              {invoices.map((invoice) => (
                <tr key={invoice._id} className={`${theme.colors.hover} transition-colors`}>
                  <td className="px-4 py-3 whitespace-nowrap">
                    <p className={`text-sm font-medium ${theme.colors.text}`}>
                      {invoice.invoiceNumber}
                    </p>
                  </td>
                  <td className="px-4 py-3 whitespace-nowrap">
                    <div className={`text-sm font-medium ${theme.colors.text}`}>
                      {invoice.client?.name || 'Unknown'}
                    </div>
                    <div className={`text-xs ${theme.colors.text} opacity-60`}>
                      {invoice.client?.email || ''}
                    </div>
                  </td>
                  <td className={`px-4 py-3 whitespace-nowrap text-sm ${theme.colors.text} opacity-70 hidden lg:table-cell`}>
                    {format(new Date(invoice.issueDate), 'MMM dd, yyyy')}
                  </td>
                  <td className="px-4 py-3 whitespace-nowrap text-right">
                    <p className={`text-sm font-semibold ${theme.colors.text}`}>
                      ₹{(invoice.total || 0).toFixed(2)}
                    </p>
                  </td>
                  <td className="px-4 py-3 whitespace-nowrap text-center">
                    <span className={`px-2 py-1 inline-flex items-center gap-1 text-xs leading-5 font-semibold rounded-full ${getStatusColor(invoice.status)}`}>
                      {getStatusIcon(invoice.status)}
                      {invoice.status?.charAt(0).toUpperCase() + invoice.status?.slice(1) || 'Draft'}
                    </span>
                  </td>
                  <td className="px-4 py-3 whitespace-nowrap text-right">
                    <div className="flex justify-end gap-1">
                      <button
                        onClick={() => handleEmail(invoice)}
                        className="p-2 text-blue-600 hover:bg-blue-50 dark:hover:bg-blue-900/20 rounded-lg transition-colors"
                        title="Email Invoice"
                      >
                        <MdEmail size={16} />
                      </button>
                      <button
                        onClick={() => handleView(invoice)}
                        className="p-2 text-blue-600 hover:bg-blue-50 dark:hover:bg-blue-900/20 rounded-lg transition-colors"
                        title="View Invoice"
                      >
                        <FaEye size={16} />
                      </button>
                      <button
                        onClick={() => handleEdit(invoice)}
                        className={`p-2 text-green-600 hover:bg-green-50 dark:hover:bg-green-900/20 rounded-lg transition-colors ${invoice.status === 'paid' ? 'opacity-50 cursor-not-allowed' : ''}`}
                        title="Edit Invoice"
                        disabled={invoice.status === 'paid'}
                      >
                        <FaEdit size={16} />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

     
        {/* ============================================================ */}
        {/* ✅ MOBILE CARD VIEW (below md) */}
        {/* ============================================================ */}
        <div className="md:hidden divide-y divide-gray-200 dark:divide-gray-700 overflow-y-auto">
          {invoices.map((invoice) => (
            <div key={invoice._id} className={`${theme.colors.hover} transition-colors p-3`}>
              {/* Row 1: Invoice # + Actions Menu */}
              <div className="flex items-start justify-between gap-2 mb-2">
                <div className="min-w-0 flex-1">
                  <p className={`text-sm font-bold ${theme.colors.text} truncate`}>
                    {invoice.invoiceNumber}
                  </p>
                  <p className={`text-xs ${theme.colors.text} opacity-60 truncate`}>
                    {invoice.client?.name || 'Unknown'}
                  </p>
                </div>

                {/* ✅ Mobile Actions Menu - FIXED */}
                <div className="relative flex-shrink-0 z-50">
                  <button
                    onClick={(e) => toggleMenu(e, invoice._id)}
                    className={`p-2 rounded-lg ${theme.colors.hover} transition-colors`}
                  >
                    <FaEllipsisV className={`text-sm ${theme.colors.text}`} />
                  </button>

                  {openMenuId === invoice._id && (
                    <div
                      className={`absolute right-0 top-full mt-1 w-40 ${theme.colors.card} border ${theme.colors.border} rounded-xl shadow-2xl z-[9999]`}
                      onClick={(e) => e.stopPropagation()}
                    >
                      <button
                        onClick={() => handleEmail(invoice)}
                        className={`w-full flex items-center gap-2 px-3 py-2 text-sm ${theme.colors.text} hover:${theme.colors.hover} transition-colors`}
                      >
                        <MdEmail className="text-blue-500" /> Email
                      </button>
                      <button
                        onClick={() => handleView(invoice)}
                        className={`w-full flex items-center gap-2 px-3 py-2 text-sm ${theme.colors.text} hover:${theme.colors.hover} transition-colors`}
                      >
                        <FaEye className="text-blue-500" /> View
                      </button>
                      <button
                        onClick={() => handleEdit(invoice)}
                        disabled={invoice.status === 'paid'}
                        className={`w-full flex items-center gap-2 px-3 py-2 text-sm ${theme.colors.text} hover:${theme.colors.hover} transition-colors disabled:opacity-50`}
                      >
                        <FaEdit className="text-green-500" /> Edit
                      </button>
                    </div>
                  )}
                </div>
              </div>

              {/* Row 2: Date + Amount + Status */}
              <div className="flex items-center justify-between gap-2 flex-wrap">
                <div className="flex items-center gap-3 text-xs">
                  <span className={`${theme.colors.text} opacity-60`}>
                    {format(new Date(invoice.issueDate), 'MMM dd, yyyy')}
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <span className={`text-sm font-bold ${theme.colors.text}`}>
                    ₹{(invoice.total || 0).toFixed(2)}
                  </span>
                  <span className={`px-2 py-0.5 inline-flex items-center gap-1 text-[10px] font-semibold rounded-full ${getStatusColor(invoice.status)}`}>
                    {getStatusIcon(invoice.status)}
                    {invoice.status?.charAt(0).toUpperCase() + invoice.status?.slice(1) || 'Draft'}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* ================= EMPTY STATE ================= */}
        {invoices.length === 0 && (
          <div className={`text-center py-12 px-4 ${theme.colors.text}`}>
            <div className={`text-4xl mb-4 ${theme.colors.text} opacity-30`}>
              <FaFileInvoice className="mx-auto" />
            </div>
            <p className={`text-lg font-medium ${theme.colors.text}`}>No invoices found</p>
            <p className={`text-sm ${theme.colors.text} opacity-60 mt-1 max-w-md mx-auto`}>
              {isOfflineSearch
                ? 'Try searching with different keywords or clear filters'
                : 'Create your first invoice to get started'}
            </p>
            {isOfflineSearch && (
              <button
                onClick={() => dispatch(fetchInvoices({}))}
                className={`mt-4 ${theme.colors.button} text-white px-6 py-2 rounded-xl text-sm`}
              >
                Refresh from Server
              </button>
            )}
          </div>
        )}
      </div>

      {/* ================= PAGINATION ================= */}
      <InvoicePagination />

      {/* ================= MODALS ================= */}
      <InvoiceViewModal
        isOpen={viewModal.isOpen}
        onClose={() => setViewModal({ isOpen: false, invoice: null })}
        invoice={viewModal.invoice}
      />

      <DialogEmailBox
        isOpen={emailDialogBox.isOpen}
        onClose={() => setEmailDialogBox({ isOpen: false, invoice: null })}
        invoice={emailDialogBox.invoice}
      />

      <InvoiceEditModal
        isOpen={editModal.isOpen}
        onClose={() => setEditModal({ isOpen: false, invoice: null })}
        invoice={editModal.invoice}
        onSuccess={() => dispatch(fetchInvoices({ page: pagination.page }))}
      />
    </div>
  );
};

export default InvoiceList;
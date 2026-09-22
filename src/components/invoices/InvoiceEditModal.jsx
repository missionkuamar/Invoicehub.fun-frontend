// frontend/src/components/invoices/InvoiceEditModal.jsx
import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { FaTimes, FaSpinner, FaSave, FaUser, FaCalendar, FaFileAlt } from 'react-icons/fa';
import { updateInvoice } from '../../store/slices/invoiceSlice';
import { useTheme } from '../../themes/ThemeProvider';
import toast from 'react-hot-toast';

const InvoiceEditModal = ({ isOpen, onClose, invoice, onSuccess }) => {
  const dispatch = useDispatch();
  const { theme } = useTheme();
  const [loading, setLoading] = useState(false);

  const [formData, setFormData] = useState({
    status: '',
    notes: '',
    terms: '',
    client: {
      name: '',
      email: '',
      phone: '',
      address: '',
      gst: '',
    },
    items: [],
    dueDate: '',
  });

  // ✅ Sync form data when invoice changes
  useEffect(() => {
    if (invoice) {
      setFormData({
        status: invoice.status || 'draft',
        notes: invoice.notes || '',
        terms: invoice.terms || '',
        client: {
          name: invoice.client?.name || '',
          email: invoice.client?.email || '',
          phone: invoice.client?.phone || '',
          address: invoice.client?.address || '',
          gst: invoice.client?.gst || '',
        },
        items: invoice.items || [],
        dueDate: invoice.dueDate
          ? new Date(invoice.dueDate).toISOString().split('T')[0]
          : '',
      });
    }
  }, [invoice]);

  // ✅ Escape key se close
  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.addEventListener('keydown', handleEsc);
      // Prevent body scroll
      document.body.style.overflow = 'hidden';
      return () => {
        document.removeEventListener('keydown', handleEsc);
        document.body.style.overflow = 'unset';
      };
    }
  }, [isOpen, onClose]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name.startsWith('client.')) {
      const field = name.split('.')[1];
      setFormData((prev) => ({
        ...prev,
        client: { ...prev.client, [field]: value },
      }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      await dispatch(
        updateInvoice({
          id: invoice._id,
          data: formData,
        })
      ).unwrap();
      toast.success('Invoice updated successfully');
      onSuccess();
      onClose();
    } catch (error) {
      toast.error(error || 'Failed to update invoice');
    } finally {
      setLoading(false);
    }
  };

  if (!isOpen || !invoice) return null;

  // ✅ Common classes
  const inputClass = `w-full px-3 py-2 sm:py-2.5 rounded-lg border ${theme.colors.border} ${theme.colors.text} bg-transparent focus:outline-none focus:ring-2 focus:ring-primary-500 text-sm transition-colors`;
  const labelClass = `block text-xs sm:text-sm font-medium ${theme.colors.text} opacity-80 mb-1`;
  const sectionTitleClass = `text-sm sm:text-base font-semibold ${theme.colors.text} mb-3 flex items-center gap-2`;

  return (
    <div
      className="fixed inset-0 z-50 flex items-end sm:items-center justify-center bg-black/60 backdrop-blur-sm p-0 sm:p-4"
      onClick={onClose}
    >
      {/* ============================================================ */}
      {/* MODAL CONTAINER */}
      {/* Mobile: bottom sheet (rounded top only) */}
      {/* Desktop: centered (fully rounded) */}
      {/* ============================================================ */}
      <div
        className={`relative w-full sm:max-w-2xl lg:max-w-3xl ${theme.colors.card} rounded-t-2xl sm:rounded-2xl shadow-2xl flex flex-col max-h-[95vh] sm:max-h-[90vh] overflow-hidden`}
        onClick={(e) => e.stopPropagation()}
      >
        {/* ================= HEADER ================= */}
        <div
          className={`flex items-center justify-between gap-2 px-3 sm:px-5 md:px-6 py-3 md:py-4 border-b ${theme.colors.border} ${theme.colors.background} flex-shrink-0`}
        >
          {/* Mobile: Drag handle indicator */}
          <div className="absolute top-1.5 left-1/2 -translate-x-1/2 w-10 h-1 rounded-full bg-gray-400 opacity-30 sm:hidden" />

          <div className="min-w-0 flex-1">
            <h3 className={`text-base sm:text-lg font-semibold ${theme.colors.text} truncate`}>
              Edit Invoice
            </h3>
            <p className={`text-xs sm:text-sm ${theme.colors.text} opacity-60 truncate`}>
              {invoice?.invoiceNumber}
            </p>
          </div>

          <button
            onClick={onClose}
            className={`p-2 rounded-lg ${theme.colors.hover} transition-colors flex-shrink-0`}
            aria-label="Close"
          >
            <FaTimes className={`text-sm sm:text-base ${theme.colors.text}`} />
          </button>
        </div>

        {/* ================= BODY (Scrollable) ================= */}
        <form
          onSubmit={handleSubmit}
          className="flex flex-col flex-1 overflow-hidden"
        >
          <div className="flex-1 overflow-y-auto px-3 sm:px-5 md:px-6 py-4 md:py-6 space-y-4 sm:space-y-5">

            {/* ===== STATUS SECTION ===== */}
            <div>
              <label className={labelClass}>Status</label>
              <select
                name="status"
                value={formData.status}
                onChange={handleChange}
                className={`${inputClass} cursor-pointer`}
              >
                <option value="draft">Draft</option>
                <option value="sent">Sent</option>
                <option value="paid">Paid</option>
                <option value="overdue">Overdue</option>
                <option value="cancelled">Cancelled</option>
              </select>
            </div>

            {/* ===== CLIENT INFORMATION ===== */}
            <div className={`border-t ${theme.colors.border} pt-4`}>
              <h4 className={sectionTitleClass}>
                <FaUser className={theme.colors.primary} size={14} />
                Client Information
              </h4>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                <div>
                  <label className={labelClass}>Client Name</label>
                  <input
                    type="text"
                    name="client.name"
                    value={formData.client.name}
                    onChange={handleChange}
                    className={inputClass}
                    placeholder="Client name"
                  />
                </div>

                <div>
                  <label className={labelClass}>Email</label>
                  <input
                    type="email"
                    name="client.email"
                    value={formData.client.email}
                    onChange={handleChange}
                    className={inputClass}
                    placeholder="client@example.com"
                  />
                </div>

                <div>
                  <label className={labelClass}>Phone</label>
                  <input
                    type="tel"
                    name="client.phone"
                    value={formData.client.phone}
                    onChange={handleChange}
                    className={inputClass}
                    placeholder="+91 98765 43210"
                  />
                </div>

                <div>
                  <label className={labelClass}>GST Number</label>
                  <input
                    type="text"
                    name="client.gst"
                    value={formData.client.gst}
                    onChange={handleChange}
                    className={inputClass}
                    placeholder="22AAAAA0000A1Z5"
                  />
                </div>

                <div className="sm:col-span-2">
                  <label className={labelClass}>Address</label>
                  <textarea
                    name="client.address"
                    value={formData.client.address}
                    onChange={handleChange}
                    className={`${inputClass} resize-none`}
                    rows="2"
                    placeholder="Client address"
                  />
                </div>
              </div>
            </div>

            {/* ===== DUE DATE ===== */}
            <div className={`border-t ${theme.colors.border} pt-4`}>
              <h4 className={sectionTitleClass}>
                <FaCalendar className={theme.colors.primary} size={14} />
                Due Date
              </h4>
              <input
                type="date"
                name="dueDate"
                value={formData.dueDate}
                onChange={handleChange}
                className={inputClass}
              />
            </div>

            {/* ===== NOTES & TERMS ===== */}
            <div className={`border-t ${theme.colors.border} pt-4`}>
              <h4 className={sectionTitleClass}>
                <FaFileAlt className={theme.colors.primary} size={14} />
                Notes & Terms
              </h4>

              <div className="space-y-3 sm:space-y-4">
                <div>
                  <label className={labelClass}>Notes</label>
                  <textarea
                    name="notes"
                    value={formData.notes}
                    onChange={handleChange}
                    className={`${inputClass} resize-none`}
                    rows="3"
                    placeholder="Additional notes..."
                  />
                </div>

                <div>
                  <label className={labelClass}>Terms & Conditions</label>
                  <textarea
                    name="terms"
                    value={formData.terms}
                    onChange={handleChange}
                    className={`${inputClass} resize-none`}
                    rows="3"
                    placeholder="Payment terms..."
                  />
                </div>
              </div>
            </div>
          </div>

          {/* ================= FOOTER (Sticky Actions) ================= */}
          <div
            className={`flex flex-col sm:flex-row justify-end gap-2 sm:gap-3 px-3 sm:px-5 md:px-6 py-3 sm:py-4 border-t ${theme.colors.border} ${theme.colors.background} flex-shrink-0`}
          >
            <button
              type="button"
              onClick={onClose}
              disabled={loading}
              className={`order-2 sm:order-1 px-4 py-2.5 rounded-xl border ${theme.colors.border} ${theme.colors.text} hover:${theme.colors.hover} transition-colors text-sm font-medium w-full sm:w-auto disabled:opacity-50`}
            >
              Cancel
            </button>

            <button
              type="submit"
              disabled={loading}
              className={`order-1 sm:order-2 ${theme.colors.button} text-white px-6 py-2.5 rounded-xl flex items-center justify-center gap-2 hover:scale-[1.02] transition-all text-sm font-medium w-full sm:w-auto disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100`}
            >
              {loading ? (
                <>
                  <FaSpinner className="animate-spin" />
                  Saving...
                </>
              ) : (
                <>
                  <FaSave />
                  Save Changes
                </>
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default InvoiceEditModal;
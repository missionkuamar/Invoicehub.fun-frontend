import React from 'react';
import { FaTimes, FaPrint } from 'react-icons/fa';

const InvoicePrintPreview = ({ isOpen, onClose, formData, totals, calculateItemTotal, getEffectiveTaxRate }) => {
  if (!isOpen) return null;

  const formatDate = (dateStr) => {
    if (!dateStr) return '-';
    const d = new Date(dateStr);
    return d.toLocaleDateString('en-IN', { day: '2-digit', month: 'short', year: 'numeric' });
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center print-modal-backdrop" style={{ background: 'rgba(0,0,0,0.7)' }}>
      {/* Modal Container */}
      <div className="print-modal-content w-full h-full sm:w-[95%] sm:h-[95%] md:w-[90%] md:h-[92%] lg:w-[850px] lg:h-[90%] bg-white rounded-none sm:rounded-2xl flex flex-col overflow-hidden shadow-2xl">

        {/* Modal Header — No Print */}
        <div className="no-print flex items-center justify-between px-4 sm:px-6 py-3 sm:py-4 border-b bg-gray-50" style={{ borderColor: '#e5e7eb' }}>
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-pink-500 to-purple-600 flex items-center justify-center">
              <FaPrint className="text-white text-xs" />
            </div>
            <div>
              <h2 className="text-sm sm:text-base font-bold text-gray-800">Invoice Preview</h2>
              <p className="text-[10px] sm:text-xs text-gray-500">Ready to print</p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={handlePrint}
              className="flex items-center gap-2 px-3 sm:px-5 py-2 rounded-lg bg-gradient-to-r from-pink-500 to-purple-600 text-white text-xs sm:text-sm font-medium hover:scale-105 transition-all"
            >
              <FaPrint /> <span className="hidden sm:inline">Print Invoice</span>
              <span className="sm:hidden">Print</span>
            </button>
            <button
              onClick={onClose}
              className="p-2 rounded-lg hover:bg-gray-200 text-gray-600 transition-colors"
            >
              <FaTimes />
            </button>
          </div>
        </div>

        {/* Scrollable Invoice Body */}
        <div className="flex-1 overflow-y-auto print-preview-scroll bg-gray-100 p-3 sm:p-6">
          
          {/* ✅ PRINT AREA — sirf yehi print hoga */}
          <div id="print-area" className="bg-white mx-auto shadow-sm" style={{ maxWidth: '800px', padding: '30px', color: '#1a1a1a' }}>

            {/* Invoice Header */}
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', paddingBottom: '20px', borderBottom: '2px solid #e5e7eb' }}>
              <div>
                <h1 style={{ fontSize: '28px', fontWeight: 'bold', margin: 0, background: 'linear-gradient(to right, #ec4899, #a855f7)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
                  INVOICE
                </h1>
                <p style={{ fontSize: '12px', color: '#6b7280', marginTop: '4px' }}>
                  InvoicePro v2.0
                </p>
              </div>
              <div style={{ textAlign: 'right' }}>
                <p style={{ fontSize: '11px', color: '#6b7280', margin: 0 }}>Issue Date</p>
                <p style={{ fontSize: '13px', fontWeight: '600', margin: '2px 0 8px 0' }}>
                  {formatDate(formData.issueDate)}
                </p>
                <p style={{ fontSize: '11px', color: '#6b7280', margin: 0 }}>Due Date</p>
                <p style={{ fontSize: '13px', fontWeight: '600', margin: '2px 0' }}>
                  {formatDate(formData.dueDate)}
                </p>
              </div>
            </div>

            {/* Client + Invoice Details */}
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px', marginTop: '20px', marginBottom: '24px' }}>
              <div>
                <p style={{ fontSize: '10px', fontWeight: '700', color: '#9ca3af', textTransform: 'uppercase', letterSpacing: '0.5px', marginBottom: '6px' }}>
                  Bill To
                </p>
                <p style={{ fontSize: '14px', fontWeight: '600', margin: '0 0 3px 0' }}>
                  {formData.client.name || '-'}
                </p>
                {formData.client.email && <p style={{ fontSize: '12px', color: '#4b5563', margin: '2px 0' }}>{formData.client.email}</p>}
                {formData.client.phone && <p style={{ fontSize: '12px', color: '#4b5563', margin: '2px 0' }}>{formData.client.phone}</p>}
                {formData.client.address && <p style={{ fontSize: '12px', color: '#4b5563', margin: '2px 0', whiteSpace: 'pre-line' }}>{formData.client.address}</p>}
                {formData.client.gst && <p style={{ fontSize: '11px', color: '#6b7280', margin: '4px 0 0 0' }}>GST: {formData.client.gst}</p>}
              </div>
              <div style={{ textAlign: 'right' }}>
                <p style={{ fontSize: '10px', fontWeight: '700', color: '#9ca3af', textTransform: 'uppercase', letterSpacing: '0.5px', marginBottom: '6px' }}>
                  Invoice Details
                </p>
                {formData.poNumber && (
                  <>
                    <p style={{ fontSize: '11px', color: '#6b7280', margin: '2px 0' }}>PO Number</p>
                    <p style={{ fontSize: '12px', fontWeight: '600', margin: '0 0 6px 0' }}>{formData.poNumber}</p>
                  </>
                )}
                <p style={{ fontSize: '11px', color: '#6b7280', margin: '2px 0' }}>Invoice #</p>
                <p style={{ fontSize: '12px', fontWeight: '600', margin: 0 }}>
                  INV-{Date.now().toString().slice(-6)}
                </p>
              </div>
            </div>

            {/* Items Table */}
            <table style={{ width: '100%', borderCollapse: 'collapse', marginBottom: '20px' }}>
              <thead>
                <tr style={{ background: '#f3f4f6' }}>
                  <th style={{ padding: '10px 8px', textAlign: 'left', fontSize: '11px', fontWeight: '700', color: '#4b5563', textTransform: 'uppercase', letterSpacing: '0.5px' }}>#</th>
                  <th style={{ padding: '10px 8px', textAlign: 'left', fontSize: '11px', fontWeight: '700', color: '#4b5563', textTransform: 'uppercase', letterSpacing: '0.5px' }}>Item</th>
                  <th style={{ padding: '10px 8px', textAlign: 'center', fontSize: '11px', fontWeight: '700', color: '#4b5563', textTransform: 'uppercase', letterSpacing: '0.5px' }}>Qty</th>
                  <th style={{ padding: '10px 8px', textAlign: 'right', fontSize: '11px', fontWeight: '700', color: '#4b5563', textTransform: 'uppercase', letterSpacing: '0.5px' }}>Price</th>
                  <th style={{ padding: '10px 8px', textAlign: 'center', fontSize: '11px', fontWeight: '700', color: '#4b5563', textTransform: 'uppercase', letterSpacing: '0.5px' }}>Disc%</th>
                  <th style={{ padding: '10px 8px', textAlign: 'center', fontSize: '11px', fontWeight: '700', color: '#4b5563', textTransform: 'uppercase', letterSpacing: '0.5px' }}>Tax</th>
                  <th style={{ padding: '10px 8px', textAlign: 'right', fontSize: '11px', fontWeight: '700', color: '#4b5563', textTransform: 'uppercase', letterSpacing: '0.5px' }}>Total</th>
                </tr>
              </thead>
              <tbody>
                {formData.items.map((item, idx) => {
                  const itemTotal = calculateItemTotal(item);
                  const taxRate = getEffectiveTaxRate(item);
                  return (
                    <tr key={idx} style={{ borderBottom: '1px solid #e5e7eb' }}>
                      <td style={{ padding: '10px 8px', fontSize: '12px', color: '#6b7280' }}>{idx + 1}</td>
                      <td style={{ padding: '10px 8px', fontSize: '12px', color: '#1f2937', fontWeight: '500' }}>{item.description || '-'}</td>
                      <td style={{ padding: '10px 8px', fontSize: '12px', color: '#4b5563', textAlign: 'center' }}>{item.quantity}</td>
                      <td style={{ padding: '10px 8px', fontSize: '12px', color: '#4b5563', textAlign: 'right' }}>₹{Number(item.rate).toFixed(2)}</td>
                      <td style={{ padding: '10px 8px', fontSize: '12px', color: '#4b5563', textAlign: 'center' }}>{item.discount || 0}%</td>
                      <td style={{ padding: '10px 8px', fontSize: '12px', color: '#4b5563', textAlign: 'center' }}>{taxRate}%</td>
                      <td style={{ padding: '10px 8px', fontSize: '12px', color: '#1f2937', fontWeight: '600', textAlign: 'right' }}>₹{itemTotal.total.toFixed(2)}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>

            {/* Totals */}
            <div style={{ display: 'flex', justifyContent: 'flex-end', marginBottom: '20px' }}>
              <div style={{ width: '280px' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', padding: '6px 0', fontSize: '13px' }}>
                  <span style={{ color: '#6b7280' }}>Subtotal:</span>
                  <span style={{ fontWeight: '500' }}>₹{totals.subtotal.toFixed(2)}</span>
                </div>
                {totals.totalDiscount > 0 && (
                  <div style={{ display: 'flex', justifyContent: 'space-between', padding: '6px 0', fontSize: '13px', color: '#16a34a' }}>
                    <span>Discount:</span>
                    <span style={{ fontWeight: '500' }}>-₹{totals.totalDiscount.toFixed(2)}</span>
                  </div>
                )}
                <div style={{ display: 'flex', justifyContent: 'space-between', padding: '6px 0', fontSize: '13px' }}>
                  <span style={{ color: '#6b7280' }}>Tax:</span>
                  <span style={{ fontWeight: '500' }}>+₹{totals.totalTax.toFixed(2)}</span>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', padding: '10px 0', marginTop: '6px', borderTop: '2px solid #a855f7' }}>
                  <span style={{ fontWeight: '700', fontSize: '16px' }}>Total:</span>
                  <span style={{ fontWeight: '700', fontSize: '16px', color: '#a855f7' }}>₹{totals.total.toFixed(2)}</span>
                </div>
              </div>
            </div>

            {/* Notes & Terms */}
            {(formData.notes || formData.terms) && (
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px', paddingTop: '16px', borderTop: '1px solid #e5e7eb' }}>
                {formData.notes && (
                  <div>
                    <p style={{ fontSize: '10px', fontWeight: '700', color: '#9ca3af', textTransform: 'uppercase', letterSpacing: '0.5px', marginBottom: '4px' }}>Notes</p>
                    <p style={{ fontSize: '11px', color: '#4b5563', margin: 0, whiteSpace: 'pre-line' }}>{formData.notes}</p>
                  </div>
                )}
                {formData.terms && (
                  <div>
                    <p style={{ fontSize: '10px', fontWeight: '700', color: '#9ca3af', textTransform: 'uppercase', letterSpacing: '0.5px', marginBottom: '4px' }}>Terms & Conditions</p>
                    <p style={{ fontSize: '11px', color: '#4b5563', margin: 0, whiteSpace: 'pre-line' }}>{formData.terms}</p>
                  </div>
                )}
              </div>
            )}

            {/* Footer */}
            <div style={{ marginTop: '30px', paddingTop: '16px', borderTop: '1px solid #e5e7eb', textAlign: 'center' }}>
              <p style={{ fontSize: '11px', color: '#9ca3af', margin: 0 }}>
                Thank you for your business! 🙏
              </p>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default InvoicePrintPreview;
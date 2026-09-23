// frontend/src/components/invoices/SimpleInvoiceForm.jsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import InvoicePrintPreview from './InvoicePrintPreview';

import {
  FaPlus, FaTrash, FaSave, FaSpinner, FaCopy,
  FaUser, FaEye, FaFileInvoice, FaBox, FaArrowLeft, FaPercent
} from 'react-icons/fa';
import { createInvoice } from '../../store/slices/invoiceSlice';
import { useTheme } from '../../themes/ThemeProvider';
import toast from 'react-hot-toast';

const TAX_OPTIONS = [
  { name: 'No Tax', rate: 0 },
  { name: 'GST 5%', rate: 5 },
  { name: 'GST 12%', rate: 12 },
  { name: 'GST 18%', rate: 18 },
  { name: 'GST 28%', rate: 28 },
  { name: 'VAT 5%', rate: 5 },
  { name: 'Service Tax 14%', rate: 14 },
  { name: 'Custom', rate: 'custom' },
];

const SimpleInvoiceForm = ({ type = 'standard' }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { theme } = useTheme();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showPrintPreview, setShowPrintPreview] = useState(false);


  const [formData, setFormData] = useState({
    client: { name: '', email: '', phone: '', address: '', gst: '' },
    items: [
      { description: '', quantity: 1, rate: 0, taxRate: 18, customTaxRate: '', discount: 0, isCustomTax: false }
    ],
    issueDate: new Date().toISOString().split('T')[0],
    dueDate: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000).toISOString().split('T')[0],
    notes: '',
    terms: '',
    discount: 0,
    shipping: 0,
    poNumber: '',
  });

  const handleInputChange = (e) => {
    const { name, value, type } = e.target;
    const parsedValue = type === 'number' ? parseFloat(value) || 0 : value;
    setFormData(prev => ({ ...prev, [name]: parsedValue }));
  };

  const handleClientChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, client: { ...prev.client, [name]: value } }));
  };

  const handleItemChange = (index, field, value) => {
    const updatedItems = [...formData.items];
    updatedItems[index] = { ...updatedItems[index], [field]: value };
    setFormData(prev => ({ ...prev, items: updatedItems }));
  };

  const handleTaxChange = (index, value) => {
    const updatedItems = [...formData.items];
    if (value === 'custom') {
      updatedItems[index] = {
        ...updatedItems[index],
        taxRate: 'custom',
        isCustomTax: true,
        customTaxRate: updatedItems[index].customTaxRate || ''
      };
    } else {
      updatedItems[index] = {
        ...updatedItems[index],
        taxRate: parseFloat(value),
        isCustomTax: false,
        customTaxRate: ''
      };
    }
    setFormData(prev => ({ ...prev, items: updatedItems }));
  };

  const addItem = () => {
    setFormData(prev => ({
      ...prev,
      items: [...prev.items, { description: '', quantity: 1, rate: 0, taxRate: 18, customTaxRate: '', discount: 0, isCustomTax: false }]
    }));
  };

  const removeItem = (index) => {
    if (formData.items.length === 1) {
      toast.error('Cannot remove last item');
      return;
    }
    setFormData(prev => ({ ...prev, items: prev.items.filter((_, i) => i !== index) }));
  };

  const duplicateItem = (index) => {
    const item = formData.items[index];
    setFormData(prev => ({ ...prev, items: [...prev.items, { ...item }] }));
  };

  const getEffectiveTaxRate = (item) => {
    if (item.isCustomTax || item.taxRate === 'custom') {
      return Number(item.customTaxRate) || 0;
    }
    return Number(item.taxRate) || 0;
  };

  const calculateItemTotal = (item) => {
    const qty = Number(item.quantity) || 0;
    const rate = Number(item.rate) || 0;
    const taxRate = getEffectiveTaxRate(item);
    const discount = Number(item.discount) || 0;
    const amount = qty * rate;
    const discountAmount = (amount * discount) / 100;
    const taxableAmount = amount - discountAmount;
    const taxAmount = (taxableAmount * taxRate) / 100;
    return { amount, discountAmount, taxAmount, total: taxableAmount + taxAmount };
  };

  const calculateTotals = () => {
    let subtotal = 0, totalTax = 0, totalDiscount = 0;
    formData.items.forEach(item => {
      const qty = Number(item.quantity) || 0;
      const rate = Number(item.rate) || 0;
      const taxRate = getEffectiveTaxRate(item);
      const discount = Number(item.discount) || 0;
      const amount = qty * rate;
      const discountAmount = (amount * discount) / 100;
      subtotal += amount;
      totalDiscount += discountAmount;
      totalTax += ((amount - discountAmount) * taxRate) / 100;
    });
    const total = subtotal - totalDiscount + totalTax + Number(formData.shipping || 0) - Number(formData.discount || 0);
    return { subtotal, totalTax, totalDiscount, total };
  };

 const handleSubmit = async (e) => {
  e.preventDefault();

  console.group('🚀 INVOICE SUBMISSION START');
  console.log('🕐 Time:', new Date().toISOString());
  console.log('📋 Raw formData:', formData);

  // =========================
  // 1. BASIC VALIDATION
  // =========================

  console.log('🔍 Starting validation...');

  if (!formData.client.name) {
    console.error('❌ Validation failed: Client name missing');
    console.groupEnd();
    toast.error('Please enter client name');
    return;
  }

  console.log('✅ Client name:', formData.client.name);

  if (formData.items.some(item => !item.description)) {
    console.error('❌ Validation failed: Item description missing');
    console.log('📦 Items:', formData.items);
    console.groupEnd();
    toast.error('Please enter description for all items');
    return;
  }

  console.log('✅ All item descriptions are valid');

  const invalidCustomTax = formData.items.some(
    item =>
      item.isCustomTax &&
      (!item.customTaxRate || Number(item.customTaxRate) <= 0)
  );

  if (invalidCustomTax) {
    console.error('❌ Validation failed: Invalid custom tax rate');

    console.log(
      '🧾 Invalid tax items:',
      formData.items.filter(
        item =>
          item.isCustomTax &&
          (!item.customTaxRate || Number(item.customTaxRate) <= 0)
      )
    );

    console.groupEnd();
    toast.error('Please enter valid custom tax rate');
    return;
  }

  console.log('✅ Custom tax validation passed');

  // =========================
  // 2. SUBMIT START
  // =========================

  setIsSubmitting(true);

  console.log('⏳ isSubmitting = true');

  try {
    // =========================
    // 3. CALCULATE TOTALS
    // =========================

    console.log('🧮 Calculating invoice totals...');

    const totals = calculateTotals();

    console.log('💰 Calculated totals:', totals);

    // =========================
    // 4. PREPARE INVOICE DATA
    // =========================

    const invoiceData = {
      client: formData.client,

      items: formData.items.map(item => ({
        description: item.description,
        quantity: Number(item.quantity) || 0,
        rate: Number(item.rate) || 0,
        amount:
          (Number(item.quantity) || 0) *
          (Number(item.rate) || 0),
        taxRate: getEffectiveTaxRate(item),
        discount: Number(item.discount) || 0,
      })),

      issueDate: formData.issueDate,
      dueDate: formData.dueDate,
      notes: formData.notes,
      terms: formData.terms,
      discount: Number(formData.discount) || 0,
      shipping: Number(formData.shipping) || 0,
      subtotal: totals.subtotal,
      tax: totals.totalTax,
      total: totals.total,
      poNumber: formData.poNumber,
    };

    // =========================
    // 5. LOG FINAL PAYLOAD
    // =========================

    console.log('📤 FINAL invoiceData:');
    console.log(JSON.stringify(invoiceData, null, 2));

    console.log('👤 Client:', invoiceData.client);
    console.log('📦 Items:', invoiceData.items);
    console.log('📅 Issue Date:', invoiceData.issueDate);
    console.log('📅 Due Date:', invoiceData.dueDate);
    console.log('💵 Subtotal:', invoiceData.subtotal);
    console.log('🧾 Tax:', invoiceData.tax);
    console.log('🎁 Discount:', invoiceData.discount);
    console.log('🚚 Shipping:', invoiceData.shipping);
    console.log('💰 TOTAL:', invoiceData.total);
    console.log('📄 PO Number:', invoiceData.poNumber);

    // =========================
    // 6. REDUX API REQUEST
    // =========================

    console.log('🚀 Dispatching createInvoice...');
    console.time('⏱️ createInvoice API');

    const result = await dispatch(
      createInvoice(invoiceData)
    ).unwrap();

    console.timeEnd('⏱️ createInvoice API');

    // =========================
    // 7. API SUCCESS RESPONSE
    // =========================

    console.log('✅ Invoice created successfully!');
    console.log('📥 Backend response:', result);

    // =========================
    // 8. SUCCESS
    // =========================

    toast.success('Invoice created successfully! 🎉');

    console.log('➡️ Navigating to /invoices');

    navigate('/invoices');

  } catch (error) {

    // =========================
    // 9. ERROR
    // =========================

    console.error('❌ INVOICE CREATION FAILED');

    console.error('🔴 Error:', error);
    console.error('🔴 Error message:', error?.message);
    console.error('🔴 Error response:', error?.response);
    console.error('🔴 Error data:', error?.response?.data);
    console.error('🔴 Error status:', error?.response?.status);

    toast.error(
      error?.message || 'Failed to create invoice'
    );

  } finally {

    // =========================
    // 10. FINISH
    // =========================

    setIsSubmitting(false);

    console.log('🏁 isSubmitting = false');
    console.log('🏁 INVOICE SUBMISSION END');
    console.groupEnd();
  }
};

  const totals = calculateTotals();
  const inputClass = `w-full px-3 py-2 md:px-4 md:py-2.5 rounded-xl border ${theme.colors.border} ${theme.colors.text} bg-transparent focus:outline-none focus:ring-2 focus:ring-primary-500 text-sm md:text-base`;
  const labelClass = `block text-xs sm:text-sm font-medium ${theme.colors.text} mb-1`;

  return (
    <div className={`min-h-screen ${theme.colors.background} w-full overflow-x-hidden`}>
      <div className="w-full max-w-7xl mx-auto px-3 sm:px-4 md:px-6 py-3 sm:py-4 md:py-6">

        {/* Header */}
        <div className={`flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 mb-4 md:mb-6 ${theme.colors.card} p-3 sm:p-4 md:p-6 rounded-2xl border ${theme.colors.border}`}>
          <div className="flex items-center gap-2 sm:gap-3 w-full sm:w-auto">
            <button onClick={() => navigate('/invoices')} className={`p-2 rounded-xl ${theme.colors.hover} transition-colors flex-shrink-0`}>
              <FaArrowLeft className={theme.colors.text} />
            </button>
            <div className="min-w-0">
              <h1 className={`text-lg sm:text-xl md:text-2xl font-bold ${theme.colors.text} truncate`}>Create Invoice</h1>
              <p className={`text-xs sm:text-sm ${theme.colors.text} opacity-70`}>Fill in the details to create a professional invoice</p>
            </div>
          </div>
          <button
            type="button"
            onClick={() => setShowPrintPreview(true)}
            className={`${theme.colors.button} text-white px-4 py-2 rounded-xl flex items-center gap-2 hover:scale-105 transition-all text-xs sm:text-sm w-full sm:w-auto justify-center flex-shrink-0`}
          >
            <FaEye /> Preview & Print
          </button>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4 md:space-y-6">

          {/* Client Section */}
          <div className={`${theme.colors.card} p-3 sm:p-4 md:p-6 rounded-2xl border ${theme.colors.border}`}>
            <h2 className={`text-sm sm:text-base md:text-lg font-semibold ${theme.colors.text} mb-3 sm:mb-4 flex items-center gap-2`}>
              <FaUser className={theme.colors.primary} /> Client Information
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-4">
              <div>
                <label className={labelClass}>Client Name *</label>
                <input type="text" name="name" value={formData.client.name} onChange={handleClientChange} className={inputClass} placeholder="Enter client name" required />
              </div>
              <div>
                <label className={labelClass}>Email</label>
                <input type="email" name="email" value={formData.client.email} onChange={handleClientChange} className={inputClass} placeholder="client@example.com" />
              </div>
              <div>
                <label className={labelClass}>Phone</label>
                <input type="tel" name="phone" value={formData.client.phone} onChange={handleClientChange} className={inputClass} placeholder="+91 98765 43210" />
              </div>
              <div>
                <label className={labelClass}>GST Number</label>
                <input type="text" name="gst" value={formData.client.gst} onChange={handleClientChange} className={inputClass} placeholder="22AAAAA0000A1Z5" />
              </div>
              <div className="sm:col-span-2">
                <label className={labelClass}>Address</label>
                <textarea name="address" value={formData.client.address} onChange={handleClientChange} className={`${inputClass} resize-none`} rows="2" placeholder="Client address" />
              </div>
            </div>
          </div>

          {/* Invoice Details */}
          <div className={`${theme.colors.card} p-3 sm:p-4 md:p-6 rounded-2xl border ${theme.colors.border}`}>
            <h2 className={`text-sm sm:text-base md:text-lg font-semibold ${theme.colors.text} mb-3 sm:mb-4 flex items-center gap-2`}>
              <FaFileInvoice className={theme.colors.primary} /> Invoice Details
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-4">
              <div>
                <label className={labelClass}>Issue Date</label>
                <input type="date" name="issueDate" value={formData.issueDate} onChange={handleInputChange} className={inputClass} />
              </div>
              <div>
                <label className={labelClass}>Due Date</label>
                <input type="date" name="dueDate" value={formData.dueDate} onChange={handleInputChange} className={inputClass} />
              </div>
              <div className="sm:col-span-2 lg:col-span-1">
                <label className={labelClass}>PO Number</label>
                <input type="text" name="poNumber" value={formData.poNumber} onChange={handleInputChange} className={inputClass} placeholder="PO-2024-001" />
              </div>
            </div>
          </div>

          {/* ================= ITEMS SECTION (REBUILT) ================= */}
          <div className={`${theme.colors.card} p-3 sm:p-4 md:p-6 rounded-2xl border ${theme.colors.border}`}>
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 mb-3 sm:mb-4">
              <h2 className={`text-sm sm:text-base md:text-lg font-semibold ${theme.colors.text} flex items-center gap-2`}>
                <FaBox className={theme.colors.primary} /> Items
              </h2>
              <button type="button" onClick={addItem} className={`${theme.colors.button} text-white px-4 py-2 rounded-xl flex items-center gap-2 hover:scale-105 transition-all text-xs sm:text-sm w-full sm:w-auto justify-center`}>
                <FaPlus /> Add Item
              </button>
            </div>

            {/* ✅ Desktop Column Headers (xl and above only) */}
            <div className="hidden xl:grid grid-cols-[3fr_80px_110px_80px_180px_120px_90px] gap-2 px-3 mb-2">
              <div className="text-xs font-medium text-gray-500 dark:text-gray-400">Item Name</div>
              <div className="text-xs font-medium text-gray-500 dark:text-gray-400 text-center">Qty</div>
              <div className="text-xs font-medium text-gray-500 dark:text-gray-400 text-center">Price (₹)</div>
              <div className="text-xs font-medium text-gray-500 dark:text-gray-400 text-center">Disc %</div>
              <div className="text-xs font-medium text-gray-500 dark:text-gray-400 text-center">Tax</div>
              <div className="text-xs font-medium text-gray-500 dark:text-gray-400 text-right">Total</div>
              <div className="text-xs font-medium text-gray-500 dark:text-gray-400 text-center">Action</div>
            </div>

            {/* Items List */}
            <div className="space-y-3">
              {formData.items.map((item, index) => {
                const itemTotals = calculateItemTotal(item);
                return (
                  <div
                    key={index}
                    className={`${theme.colors.background} border ${theme.colors.border} rounded-xl p-3`}
                  >
                    {/* ---------- DESKTOP VIEW (xl+) ---------- */}
                    <div className="hidden xl:grid grid-cols-[3fr_80px_110px_80px_180px_120px_90px] gap-2 items-start">
                      {/* Item Name */}
                      <input
                        type="text"
                        value={item.description}
                        onChange={(e) => handleItemChange(index, 'description', e.target.value)}
                        className={`w-full px-3 py-2 rounded-lg border ${theme.colors.border} ${theme.colors.text} bg-transparent focus:outline-none focus:ring-2 focus:ring-primary-500 text-sm`}
                        placeholder="Item description *"
                      />

                      {/* Qty */}
                      <input
                        type="number"
                        value={item.quantity}
                        onChange={(e) => handleItemChange(index, 'quantity', parseFloat(e.target.value) || 0)}
                        className={`w-full px-2 py-2 rounded-lg border ${theme.colors.border} ${theme.colors.text} bg-transparent focus:outline-none focus:ring-2 focus:ring-primary-500 text-sm text-center`}
                        min="0.01" step="0.01" placeholder="Qty"
                      />

                      {/* Price */}
                      <input
                        type="number"
                        value={item.rate}
                        onChange={(e) => handleItemChange(index, 'rate', parseFloat(e.target.value) || 0)}
                        className={`w-full px-2 py-2 rounded-lg border ${theme.colors.border} ${theme.colors.text} bg-transparent focus:outline-none focus:ring-2 focus:ring-primary-500 text-sm text-center`}
                        min="0" step="0.01" placeholder="Price"
                      />

                      {/* Discount */}
                      <input
                        type="number"
                        value={item.discount}
                        onChange={(e) => handleItemChange(index, 'discount', parseFloat(e.target.value) || 0)}
                        className={`w-full px-2 py-2 rounded-lg border ${theme.colors.border} ${theme.colors.text} bg-transparent focus:outline-none focus:ring-2 focus:ring-primary-500 text-sm text-center`}
                        min="0" max="100" step="0.5" placeholder="0"
                      />

                      {/* ✅ Tax — Fixed height slot, no overlap */}
                      <div className="flex flex-col gap-1.5">
                        <select
                          value={item.isCustomTax ? 'custom' : item.taxRate}
                          onChange={(e) => handleTaxChange(index, e.target.value)}
                          className={`w-full px-2 py-2 rounded-lg border ${theme.colors.border} ${theme.colors.text} cursor-pointer focus:outline-none focus:ring-2 focus:gray-200 text-sm`}
                        >
                          {TAX_OPTIONS.map((tax, i) => (
                            <option key={i} value={tax.rate === 'custom' ? 'custom' : tax.rate}>
                              {tax.name}
                            </option>
                          ))}
                        </select>

                        {item.isCustomTax && (
                          <div className="relative">
                            <input
                              type="number"
                              value={item.customTaxRate}
                              onChange={(e) => handleItemChange(index, 'customTaxRate', e.target.value)}
                              className={`w-full px-2 py-1.5 pr-7 rounded-lg border-2 border-primary-500 ${theme.colors.text} bg-transparent focus:outline-none focus:ring-2 focus:ring-primary-500 text-sm text-center cursor-pointer`}
                              min="0" max="100" step="0.01" placeholder="Custom %"
                              autoFocus
                            />
                            <FaPercent className="absolute right-2 top-1/2 -translate-y-1/2 text-primary-500 text-[10px] pointer-events-none" />
                          </div>
                        )}
                      </div>

                      {/* Total */}
                      <div className="flex items-center justify-end h-full pt-2">
                        <span className={`text-sm font-semibold ${theme.colors.text}`}>
                          ₹{itemTotals.total.toFixed(2)}
                        </span>
                      </div>

                      {/* Actions */}
                      <div className="flex items-center justify-center gap-1 pt-1">
                        <button type="button" onClick={() => duplicateItem(index)} className={`p-2 rounded-lg ${theme.colors.hover} transition-colors`} title="Duplicate">
                          <FaCopy className={`text-xs ${theme.colors.text} opacity-60`} />
                        </button>
                        <button type="button" onClick={() => removeItem(index)} className="p-2 rounded-lg hover:bg-red-50 dark:hover:bg-red-900/20 transition-colors" title="Remove">
                          <FaTrash className="text-xs text-red-500" />
                        </button>
                      </div>
                    </div>

                    {/* ---------- MOBILE / TABLET VIEW (<xl) ---------- */}
                    <div className="xl:hidden space-y-3">
                      {/* Item Name */}
                      <div>
                        <label className={labelClass}>Item Name *</label>
                        <input
                          type="text"
                          value={item.description}
                          onChange={(e) => handleItemChange(index, 'description', e.target.value)}
                          className={`w-full px-3 py-2 rounded-lg border ${theme.colors.border} ${theme.colors.text} bg-transparent focus:outline-none focus:ring-2 focus:ring-primary-500 text-sm`}
                          placeholder="Item description *"
                        />
                      </div>

                      {/* Row: Qty, Price, Discount */}
                      <div className="grid grid-cols-3 gap-2 sm:gap-3">
                        <div>
                          <label className={labelClass}>Qty</label>
                          <input
                            type="number"
                            value={item.quantity}
                            onChange={(e) => handleItemChange(index, 'quantity', parseFloat(e.target.value) || 0)}
                            className={`w-full px-2 py-2 rounded-lg border ${theme.colors.border} ${theme.colors.text} bg-transparent focus:outline-none focus:ring-2 focus:ring-primary-500 text-sm text-center`}
                            min="0.01" step="0.01" placeholder="Qty"
                          />
                        </div>
                        <div>
                          <label className={labelClass}>Price (₹)</label>
                          <input
                            type="number"
                            value={item.rate}
                            onChange={(e) => handleItemChange(index, 'rate', parseFloat(e.target.value) || 0)}
                            className={`w-full px-2 py-2 rounded-lg border ${theme.colors.border} ${theme.colors.text} bg-transparent focus:outline-none focus:ring-2 focus:ring-primary-500 text-sm text-center`}
                            min="0" step="0.01" placeholder="Price"
                          />
                        </div>
                        <div>
                          <label className={labelClass}>Disc %</label>
                          <input
                            type="number"
                            value={item.discount}
                            onChange={(e) => handleItemChange(index, 'discount', parseFloat(e.target.value) || 0)}
                            className={`w-full px-2 py-2 rounded-lg border ${theme.colors.border} ${theme.colors.text} bg-transparent focus:outline-none focus:ring-2 focus:ring-primary-500 text-sm text-center`}
                            min="0" max="100" step="0.5" placeholder="0"
                          />
                        </div>
                      </div>

                      {/* Row: Tax + Custom Tax */}
                      <div>
                        <label className={labelClass}>Tax</label>
                        <div className="flex flex-col sm:flex-row gap-2">
                          <select
                            value={item.isCustomTax ? 'custom' : item.taxRate}
                            onChange={(e) => handleTaxChange(index, e.target.value)}
                            className={`w-full sm:w-1/2 px-3 py-2 rounded-lg border ${theme.colors.border} ${theme.colors.text} bg-transparent focus:outline-none focus:ring-2 focus:ring-primary-500 text-sm`}
                          >
                            {TAX_OPTIONS.map((tax, i) => (
                              <option key={i} value={tax.rate === 'custom' ? 'custom' : tax.rate}>
                                {tax.name}
                              </option>
                            ))}
                          </select>

                          {item.isCustomTax && (
                            <div className="relative w-full sm:w-1/2">
                              <input
                                type="number"
                                value={item.customTaxRate}
                                onChange={(e) => handleItemChange(index, 'customTaxRate', e.target.value)}
                                className={`w-full px-3 py-2 pr-8 rounded-lg border-2 border-primary-500 ${theme.colors.text} bg-transparent focus:outline-none focus:ring-2 focus:ring-primary-500 text-sm text-center`}
                                min="0" max="100" step="0.01" placeholder="Custom tax %"
                              />
                              <FaPercent className="absolute right-3 top-1/2 -translate-y-1/2 text-primary-500 text-xs pointer-events-none" />
                            </div>
                          )}
                        </div>
                      </div>

                      {/* Row: Total + Actions */}
                      <div className="flex items-center justify-between pt-2 border-t border-dashed border-gray-300 dark:border-gray-700">
                        <div className="flex flex-col">
                          <span className="text-xs font-medium text-gray-500 dark:text-gray-400">Item Total</span>
                          <span className={`text-base font-bold ${theme.colors.text}`}>
                            ₹{itemTotals.total.toFixed(2)}
                          </span>
                        </div>
                        <div className="flex items-center gap-1">
                          <button type="button" onClick={() => duplicateItem(index)} className={`p-2.5 rounded-lg ${theme.colors.hover} transition-colors`} title="Duplicate">
                            <FaCopy className={`text-sm ${theme.colors.text} opacity-60`} />
                          </button>
                          <button type="button" onClick={() => removeItem(index)} className="p-2.5 rounded-lg hover:bg-red-50 dark:hover:bg-red-900/20 transition-colors" title="Remove">
                            <FaTrash className="text-sm text-red-500" />
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Notes & Terms */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
            <div className={`${theme.colors.card} p-3 sm:p-4 md:p-6 rounded-2xl border ${theme.colors.border}`}>
              <label className={labelClass}>Notes</label>
              <textarea name="notes" value={formData.notes} onChange={handleInputChange} className={`${inputClass} resize-none`} rows="3" placeholder="Additional notes..." />
            </div>
            <div className={`${theme.colors.card} p-3 sm:p-4 md:p-6 rounded-2xl border ${theme.colors.border}`}>
              <label className={labelClass}>Terms & Conditions</label>
              <textarea name="terms" value={formData.terms} onChange={handleInputChange} className={`${inputClass} resize-none`} rows="3" placeholder="Payment terms..." />
            </div>
          </div>

          {/* Summary */}
          <div className={`${theme.colors.card} p-3 sm:p-4 md:p-6 rounded-2xl border ${theme.colors.border}`}>
            <div className="flex flex-col sm:flex-row justify-end gap-3">
              <div className="w-full space-y-2">
                <div className="flex justify-between py-1">
                  <span className={`text-sm ${theme.colors.text} opacity-70`}>Subtotal:</span>
                  <span className={`text-sm font-medium ${theme.colors.text}`}>₹{totals.subtotal.toFixed(2)}</span>
                </div>
                {totals.totalDiscount > 0 && (
                  <div className="flex justify-between py-1 text-green-600">
                    <span className="text-sm">Discount:</span>
                    <span className="text-sm font-medium">-₹{totals.totalDiscount.toFixed(2)}</span>
                  </div>
                )}
                <div className="flex justify-between py-1">
                  <span className={`text-sm ${theme.colors.text} opacity-70`}>Tax:</span>
                  <span className={`text-sm font-medium ${theme.colors.primary}`}>+₹{totals.totalTax.toFixed(2)}</span>
                </div>
                <div className="flex justify-between py-2 border-t-2 border-primary-500/30">
                  <span className={`text-base md:text-lg font-bold ${theme.colors.text}`}>Total:</span>
                  <span className={`text-base md:text-lg font-bold ${theme.colors.primary}`}>₹{totals.total.toFixed(2)}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Actions */}
          <div className={`flex flex-col-reverse sm:flex-row justify-between gap-3 ${theme.colors.card} p-3 sm:p-4 md:p-6 rounded-2xl border ${theme.colors.border}`}>
            <button type="button" onClick={() => navigate('/invoices')} className={`px-4 md:px-6 py-2.5 md:py-3 rounded-xl border ${theme.colors.border} ${theme.colors.text} hover:${theme.colors.hover} transition-colors text-sm w-full sm:w-auto`}>
              Cancel
            </button>
            <button type="submit" disabled={isSubmitting} className={`${theme.colors.button} text-white px-4 md:px-8 py-2.5 md:py-3 rounded-xl flex items-center justify-center gap-2 hover:scale-105 transition-all text-sm w-full sm:w-auto disabled:opacity-50 disabled:cursor-not-allowed`}>
              {isSubmitting ? (<><FaSpinner className="animate-spin" /> Creating...</>) : (<><FaSave /> Create Invoice</>)}
            </button>
          </div>
        </form>

        {/* Print Preview Modal */}
<InvoicePrintPreview
  isOpen={showPrintPreview}
  onClose={() => setShowPrintPreview(false)}
  formData={formData}
  totals={totals}
  calculateItemTotal={calculateItemTotal}
  getEffectiveTaxRate={getEffectiveTaxRate}
/>
      </div>
    </div>
  );
};

export default SimpleInvoiceForm;
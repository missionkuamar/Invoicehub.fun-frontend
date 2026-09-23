// frontend/src/components/email/EmailScheduler.jsx
import React, { useState } from 'react';
import { FaEnvelope, FaRocket, FaSpinner, FaCheckCircle, FaExclamationCircle } from 'react-icons/fa';
import toast from 'react-hot-toast';
import api from '../../services/api';
import { useTheme } from '../../themes/ThemeProvider';

const EmailScheduler = ({ invoiceId, onEmailSent }) => {
  const { theme } = useTheme();
  const [emailType, setEmailType] = useState('simple');
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState(null);

  // Simple email form state
  const [simpleForm, setSimpleForm] = useState({
    toEmail: '',
    subject: '',
    message: '',
    scheduleTime: '',
  });

  // Advanced email form state
  const [advancedForm, setAdvancedForm] = useState({
    emailType: 'invoice',
    scheduleTime: '',
    paymentDetails: '',
    reason: '',
    changes: '',
    creditAmount: '',
    cycle: 'monthly',
  });

  const emailTypes = [
    { value: 'invoice', label: '💰 Send Invoice' },
    { value: 'reminder', label: '⏰ Payment Reminder' },
    { value: 'overdue', label: '🚨 Overdue Alert' },
    { value: 'confirmation', label: '✅ Payment Confirmation' },
    { value: 'cancellation', label: '❌ Invoice Cancellation' },
    { value: 'revised', label: '📝 Revised Invoice' },
    { value: 'proforma', label: '📄 Proforma Invoice' },
    { value: 'credit_note', label: '💳 Credit Note' },
    { value: 'recurring', label: '🔄 Recurring Invoice' },
  ];

  const advancedEndpoints = {
    invoice: '/send-invoice',
    reminder: '/send-reminder',
    overdue: '/send-overdue',
    confirmation: '/send-confirmation',
    cancellation: '/send-cancellation',
    revised: '/send-revised',
    proforma: '/send-proforma',
    credit_note: '/send-credit-note',
    recurring: '/send-recurring',
  };

  // ✅ Common input class
  const inputClass = `w-full px-3 sm:px-4 py-2 sm:py-2.5 rounded-lg border ${theme.colors.border} ${theme.colors.text} bg-transparent focus:outline-none focus:ring-2 focus:ring-primary-500 text-sm`;
  const labelClass = `block text-xs sm:text-sm font-medium ${theme.colors.text} opacity-80 mb-1`;

  // ================= HANDLERS =================
  const handleSimpleSubmit = async (e) => {
  e.preventDefault();
  setLoading(true);
  setMessage(null);

  try {
    // ============================================
    // CONVERT LOCAL TIME → UTC
    // ============================================

    let finalScheduleTime;

    if (simpleForm.scheduleTime) {
      const localDate = new Date(simpleForm.scheduleTime);

      console.log('\n🕐 SELECTED LOCAL DATE:');
      console.log('Raw:', simpleForm.scheduleTime);
      console.log('Date object:', localDate);
      console.log('Local:', localDate.toString());
      console.log('ISO UTC:', localDate.toISOString());

      finalScheduleTime = localDate.toISOString();
    } else {
      finalScheduleTime = new Date().toISOString();
    }

    // ============================================
    // FINAL PAYLOAD
    // ============================================

    const payload = {
      ...simpleForm,
      scheduleTime: finalScheduleTime,
    };

    console.log('\n📦 FINAL SIMPLE EMAIL PAYLOAD:');
    console.log(payload);

    console.log(
      '🕐 FINAL UTC scheduleTime:',
      payload.scheduleTime
    );

    // ============================================
    // SEND API
    // ============================================

    await api.post('/emails/schedule', payload);

    // ============================================
    // SUCCESS
    // ============================================

    setMessage({
      type: 'success',
      text: '✅ Email scheduled successfully!',
    });

    setSimpleForm({
      toEmail: '',
      subject: '',
      message: '',
      scheduleTime: '',
    });

    if (onEmailSent) {
      onEmailSent();
    }

    toast.success('Email scheduled successfully!');

  } catch (error) {

    console.error('\n❌ SIMPLE EMAIL SCHEDULING ERROR');
    console.error('Error:', error);
    console.error('Message:', error.message);
    console.error('Response:', error.response);
    console.error('Response data:', error.response?.data);
    console.error('Response status:', error.response?.status);

    const errorMsg =
      error.response?.data?.message ||
      'Failed to schedule email';

    setMessage({
      type: 'error',
      text: errorMsg,
    });

    toast.error(errorMsg);

  } finally {
    setLoading(false);
  }
};

  const handleAdvancedSubmit = async (e) => {
  e.preventDefault();
  setLoading(true);
  setMessage(null);

  try {
    // ============================================
    // CONVERT LOCAL TIME → UTC
    // ============================================

    let finalScheduleTime;

    if (advancedForm.scheduleTime) {
      const localDate = new Date(advancedForm.scheduleTime);

      console.log('\n🕐 SELECTED LOCAL DATE:');
      console.log('Raw:', advancedForm.scheduleTime);
      console.log('Date object:', localDate);
      console.log('Local:', localDate.toString());
      console.log('ISO UTC:', localDate.toISOString());

      finalScheduleTime = localDate.toISOString();
    } else {
      finalScheduleTime = new Date().toISOString();
    }

    // ============================================
    // FINAL PAYLOAD
    // ============================================

    const payload = {
      invoiceId,
      scheduleTime: finalScheduleTime,
    };

    // ============================================
    // ADD EMAIL TYPE SPECIFIC DATA
    // ============================================

    switch (advancedForm.emailType) {
      case 'confirmation':
        payload.paymentDetails = advancedForm.paymentDetails;
        break;

      case 'cancellation':
        payload.reason = advancedForm.reason;
        break;

      case 'revised':
        payload.changes = advancedForm.changes;
        break;

      case 'credit_note':
        payload.creditAmount = advancedForm.creditAmount;
        payload.reason = advancedForm.reason;
        break;

      case 'recurring':
        payload.cycle = advancedForm.cycle;
        break;

      default:
        break;
    }

    // ============================================
    // DEBUG FINAL PAYLOAD
    // ============================================

    console.log('\n📦 FINAL ADVANCED EMAIL PAYLOAD:');
    console.log(payload);

    console.log(
      '🕐 FINAL UTC scheduleTime:',
      payload.scheduleTime
    );

    // ============================================
    // SEND API
    // ============================================

    await api.post(
      `/emails${advancedEndpoints[advancedForm.emailType]}`,
      payload
    );

    // ============================================
    // SUCCESS
    // ============================================

    const typeLabel = advancedForm.emailType.replace('_', ' ');

    setMessage({
      type: 'success',
      text: `✅ ${typeLabel} email scheduled!`,
    });

    setAdvancedForm({
      ...advancedForm,
      scheduleTime: '',
      paymentDetails: '',
      reason: '',
      changes: '',
      creditAmount: '',
    });

    if (onEmailSent) {
      onEmailSent();
    }

    toast.success(
      `${typeLabel} email scheduled successfully!`
    );

  } catch (error) {

    // ============================================
    // ERROR
    // ============================================

    console.error('\n❌ ADVANCED EMAIL SCHEDULING ERROR');
    console.error('Error:', error);
    console.error('Message:', error.message);
    console.error('Response:', error.response);
    console.error('Response data:', error.response?.data);
    console.error('Response status:', error.response?.status);

    const errorMsg =
      error.response?.data?.message ||
      'Failed to schedule';

    setMessage({
      type: 'error',
      text: errorMsg,
    });

    toast.error(errorMsg);

  } finally {
    setLoading(false);
  }
};
  return (
    <div className="space-y-3 sm:space-y-4 w-full">

      {/* ================= EMAIL TYPE TABS ================= */}
      <div className={`flex gap-2 border-b ${theme.colors.border} pb-3`}>
        <button
          type="button"
          onClick={() => setEmailType('simple')}
          className={`flex-1 sm:flex-initial flex items-center justify-center gap-2 px-3 sm:px-4 py-2 rounded-lg text-xs sm:text-sm font-medium transition-all ${
            emailType === 'simple'
              ? `${theme.colors.button} text-white`
              : `${theme.colors.background} ${theme.colors.text} opacity-70 hover:opacity-100`
          }`}
        >
          <FaEnvelope size={12} />
          <span>Simple</span>
        </button>
        <button
          type="button"
          onClick={() => setEmailType('advanced')}
          className={`flex-1 sm:flex-initial flex items-center justify-center gap-2 px-3 sm:px-4 py-2 rounded-lg text-xs sm:text-sm font-medium transition-all ${
            emailType === 'advanced'
              ? `${theme.colors.button} text-white`
              : `${theme.colors.background} ${theme.colors.text} opacity-70 hover:opacity-100`
          }`}
        >
          <FaRocket size={12} />
          <span>Advanced</span>
        </button>
      </div>

      {/* ================= MESSAGE ALERT ================= */}
      {message && (
        <div
          className={`p-3 rounded-lg flex items-start gap-2 text-xs sm:text-sm ${
            message.type === 'success'
              ? 'bg-green-500/10 text-green-600 dark:text-green-400 border border-green-500/30'
              : 'bg-red-500/10 text-red-600 dark:text-red-400 border border-red-500/30'
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
      {/* SIMPLE EMAIL FORM */}
      {/* ============================================================ */}
      {emailType === 'simple' && (
        <form onSubmit={handleSimpleSubmit} className="space-y-3">
          <div>
            <label className={labelClass}>To Email *</label>
            <input
              type="email"
              value={simpleForm.toEmail}
              onChange={(e) => setSimpleForm({ ...simpleForm, toEmail: e.target.value })}
              className={inputClass}
              placeholder="client@example.com"
              required
            />
          </div>

          <div>
            <label className={labelClass}>Subject *</label>
            <input
              type="text"
              value={simpleForm.subject}
              onChange={(e) => setSimpleForm({ ...simpleForm, subject: e.target.value })}
              className={inputClass}
              placeholder="Email subject"
              required
            />
          </div>

          <div>
            <label className={labelClass}>Message *</label>
            <textarea
              value={simpleForm.message}
              onChange={(e) => setSimpleForm({ ...simpleForm, message: e.target.value })}
              className={`${inputClass} resize-none`}
              rows="4"
              placeholder="Write your message here..."
              required
            />
          </div>

          <div>
            <label className={labelClass}>Schedule Time</label>
            <input
              type="datetime-local"
              value={simpleForm.scheduleTime}
              onChange={(e) => setSimpleForm({ ...simpleForm, scheduleTime: e.target.value })}
              className={inputClass}
              min={new Date().toISOString().slice(0, 16)}
            />
            <p className={`text-[10px] sm:text-xs ${theme.colors.text} opacity-60 mt-1`}>
              Leave empty to send immediately
            </p>
          </div>

          <button
            type="submit"
            disabled={loading}
            className={`w-full ${theme.colors.button} text-white py-2.5 sm:py-3 rounded-lg transition-all hover:scale-[1.02] disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100 font-medium text-sm flex items-center justify-center gap-2`}
          >
            {loading ? (
              <>
                <FaSpinner className="animate-spin" />
                Scheduling...
              </>
            ) : (
              <>
                <FaEnvelope />
                Schedule Email
              </>
            )}
          </button>
        </form>
      )}

      {/* ============================================================ */}
      {/* ADVANCED EMAIL FORM */}
      {/* ============================================================ */}
      {emailType === 'advanced' && (
        <form onSubmit={handleAdvancedSubmit} className="space-y-3">
          <div>
            <label className={labelClass}>Email Type *</label>
            <select
              value={advancedForm.emailType}
              onChange={(e) => setAdvancedForm({ ...advancedForm, emailType: e.target.value })}
              className={`${inputClass} cursor-pointer`}
            >
              {emailTypes.map((type) => (
                <option key={type.value} value={type.value}>
                  {type.label}
                </option>
              ))}
            </select>
          </div>

          {/* Dynamic fields based on email type */}
          {advancedForm.emailType === 'confirmation' && (
            <div>
              <label className={labelClass}>Payment Details *</label>
              <textarea
                value={advancedForm.paymentDetails}
                onChange={(e) =>
                  setAdvancedForm({ ...advancedForm, paymentDetails: e.target.value })
                }
                className={`${inputClass} resize-none`}
                rows="3"
                placeholder="Enter payment details (amount, transaction ID, etc.)"
                required
              />
            </div>
          )}

          {(advancedForm.emailType === 'cancellation' ||
            advancedForm.emailType === 'credit_note') && (
            <div>
              <label className={labelClass}>Reason *</label>
              <textarea
                value={advancedForm.reason}
                onChange={(e) =>
                  setAdvancedForm({ ...advancedForm, reason: e.target.value })
                }
                className={`${inputClass} resize-none`}
                rows="3"
                placeholder="Enter reason for cancellation/credit note"
                required
              />
            </div>
          )}

          {advancedForm.emailType === 'revised' && (
            <div>
              <label className={labelClass}>Changes Made *</label>
              <textarea
                value={advancedForm.changes}
                onChange={(e) =>
                  setAdvancedForm({ ...advancedForm, changes: e.target.value })
                }
                className={`${inputClass} resize-none`}
                rows="3"
                placeholder="Describe the changes made to the invoice"
                required
              />
            </div>
          )}

          {advancedForm.emailType === 'credit_note' && (
            <div>
              <label className={labelClass}>Credit Amount *</label>
              <input
                type="number"
                value={advancedForm.creditAmount}
                onChange={(e) =>
                  setAdvancedForm({ ...advancedForm, creditAmount: e.target.value })
                }
                className={inputClass}
                placeholder="0.00"
                step="0.01"
                required
              />
            </div>
          )}

          {advancedForm.emailType === 'recurring' && (
            <div>
              <label className={labelClass}>Billing Cycle *</label>
              <select
                value={advancedForm.cycle}
                onChange={(e) =>
                  setAdvancedForm({ ...advancedForm, cycle: e.target.value })
                }
                className={`${inputClass} cursor-pointer`}
              >
                <option value="monthly">Monthly</option>
                <option value="quarterly">Quarterly</option>
                <option value="half-yearly">Half Yearly</option>
                <option value="yearly">Yearly</option>
              </select>
            </div>
          )}

          <div>
            <label className={labelClass}>Schedule Time</label>
            <input
              type="datetime-local"
              value={advancedForm.scheduleTime}
              onChange={(e) =>
                setAdvancedForm({ ...advancedForm, scheduleTime: e.target.value })
              }
              className={inputClass}
              min={new Date().toISOString().slice(0, 16)}
            />
            <p className={`text-[10px] sm:text-xs ${theme.colors.text} opacity-60 mt-1`}>
              Leave empty to send immediately
            </p>
          </div>

          <button
            type="submit"
            disabled={loading || !invoiceId}
            className={`w-full ${theme.colors.button} text-white py-2.5 sm:py-3 rounded-lg transition-all hover:scale-[1.02] disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100 font-medium text-sm flex items-center justify-center gap-2`}
          >
            {loading ? (
              <>
                <FaSpinner className="animate-spin" />
                Scheduling...
              </>
            ) : (
              <>
                <FaRocket />
                Schedule {advancedForm.emailType.replace('_', ' ')} Email
              </>
            )}
          </button>

          {!invoiceId && (
            <p className="text-yellow-500 text-xs sm:text-sm text-center mt-2 flex items-center justify-center gap-2">
              <FaExclamationCircle />
              Please select an invoice first
            </p>
          )}
        </form>
      )}
    </div>
  );
};

export default EmailScheduler;
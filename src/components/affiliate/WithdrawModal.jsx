// frontend/src/components/affiliate/WithdrawModal.jsx
import React from 'react';
import {
  FaTimes,
  FaWallet,
  FaSpinner,
  FaMobile,
  FaPaypal,
  FaInfoCircle,
} from 'react-icons/fa';
import { CiBank } from 'react-icons/ci';
import { useTheme } from '../../themes/ThemeProvider';

const WithdrawModal = ({
  isOpen,
  onClose,
  earnings,
  amount,
  setAmount,
  paymentMethod,
  setPaymentMethod,
  paymentDetails,
  setPaymentDetails,
  onSubmit,
  loading,
}) => {
  const { theme } = useTheme();

  if (!isOpen) return null;

  const safeEarnings = Number(earnings || 0);
  const maxAmount = Math.min(10000, safeEarnings);

  const inputClass = `
    w-full min-w-0
    px-3 sm:px-4 py-2.5
    rounded-xl
    border ${theme.colors.border}
    ${theme.colors.text}
    bg-transparent
    placeholder:opacity-40
    focus:outline-none
    focus:ring-2 focus:ring-primary-500
    text-sm
    transition-all
  `;

  const paymentMethods = [
    {
      id: 'bank',
      label: 'Bank',
      icon: CiBank,
    },
    {
      id: 'upi',
      label: 'UPI',
      icon: FaMobile,
    },
    {
      id: 'paypal',
      label: 'PayPal',
      icon: FaPaypal,
    },
  ];

  const updatePaymentDetail = (field, value) => {
    setPaymentDetails({
      ...paymentDetails,
      [field]: value,
    });
  };

  return (
    <div className="fixed inset-0 z-[100] overflow-hidden">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
        onClick={!loading ? onClose : undefined}
      />

      {/* Modal wrapper */}
      <div className="relative z-10 flex min-h-screen items-center justify-center p-2 sm:p-4">
        <div
          className={`
            relative
            flex
            flex-col
            w-full
            max-w-md
            max-h-[96vh] sm:max-h-[92vh]
            overflow-hidden
            rounded-2xl sm:rounded-3xl
            border ${theme.colors.border}
            ${theme.colors.card}
            shadow-2xl
          `}
        >
          {/* =====================================================
              HEADER
          ====================================================== */}
          <div
            className={`
              flex-shrink-0
              flex items-center justify-between
              px-4 sm:px-6
              py-4
              border-b ${theme.colors.border}
            `}
          >
            <div className="flex items-center gap-3 min-w-0">
              <div
                className={`
                  flex-shrink-0
                  w-9 h-9 sm:w-10 sm:h-10
                  rounded-xl
                  flex items-center justify-center
                  bg-purple-500/10
                `}
              >
                <FaWallet className="text-purple-500 text-base sm:text-lg" />
              </div>

              <div className="min-w-0">
                <h3
                  className={`
                    text-base sm:text-lg
                    font-semibold
                    ${theme.colors.text}
                    truncate
                  `}
                >
                  Withdraw Earnings
                </h3>

                <p
                  className={`
                    text-[11px] sm:text-xs
                    ${theme.colors.text}
                    opacity-60
                  `}
                >
                  Request your affiliate payout
                </p>
              </div>
            </div>

            <button
              type="button"
              onClick={onClose}
              disabled={loading}
              className={`
                flex-shrink-0
                w-8 h-8
                rounded-lg
                flex items-center justify-center
                ${theme.colors.text}
                opacity-60
                hover:opacity-100
                hover:bg-red-500/10
                transition-all
                disabled:opacity-30
              `}
              aria-label="Close modal"
            >
              <FaTimes />
            </button>
          </div>

          {/* =====================================================
              SCROLLABLE CONTENT
          ====================================================== */}
          <div className="flex-1 overflow-y-auto overscroll-contain">
            <form onSubmit={onSubmit}>
              <div className="p-4 sm:p-6 space-y-4">

                {/* =================================================
                    BALANCE CARD
                ================================================== */}
                <div
                  className={`
                    relative overflow-hidden
                    p-4
                    rounded-2xl
                    ${theme.colors.background}
                    border ${theme.colors.border}
                  `}
                >
                  <div className="flex items-start justify-between gap-3">
                    <div className="min-w-0">
                      <p
                        className={`
                          text-xs sm:text-sm
                          ${theme.colors.text}
                          opacity-60
                        `}
                      >
                        Available Balance
                      </p>

                      <p
                        className={`
                          mt-1
                          text-2xl sm:text-3xl
                          font-bold
                          ${theme.colors.primary}
                          break-words
                        `}
                      >
                        ₹{safeEarnings.toFixed(2)}
                      </p>
                    </div>

                    <div
                      className="
                        flex-shrink-0
                        w-10 h-10
                        rounded-xl
                        bg-green-500/10
                        flex items-center justify-center
                      "
                    >
                      <FaWallet className="text-green-500" />
                    </div>
                  </div>

                  <div
                    className={`
                      mt-3
                      flex flex-wrap
                      gap-x-3 gap-y-1
                      text-[11px] sm:text-xs
                      ${theme.colors.text}
                      opacity-60
                    `}
                  >
                    <span>Min: ₹100</span>
                    <span>•</span>
                    <span>Max: ₹10,000</span>
                  </div>
                </div>

                {/* =================================================
                    AMOUNT
                ================================================== */}
                <div>
                  <label
                    className={`
                      block
                      text-sm
                      font-medium
                      ${theme.colors.text}
                      mb-1.5
                    `}
                  >
                    Withdrawal Amount
                  </label>

                  <div className="relative">
                    <span
                      className={`
                        absolute
                        left-3
                        top-1/2
                        -translate-y-1/2
                        text-sm
                        font-medium
                        ${theme.colors.text}
                        opacity-50
                      `}
                    >
                      ₹
                    </span>

                    <input
                      type="number"
                      inputMode="decimal"
                      value={amount}
                      onChange={(e) => setAmount(e.target.value)}
                      className={`${inputClass} pl-8`}
                      placeholder="Enter amount"
                      min="100"
                      max={maxAmount}
                      step="0.01"
                      required
                    />
                  </div>

                  <div className="flex justify-between gap-2 mt-1.5">
                    <p
                      className={`
                        text-[11px]
                        ${theme.colors.text}
                        opacity-50
                      `}
                    >
                      Minimum ₹100
                    </p>

                    <p
                      className={`
                        text-[11px]
                        ${theme.colors.text}
                        opacity-50
                        text-right
                      `}
                    >
                      Available ₹{safeEarnings.toFixed(2)}
                    </p>
                  </div>
                </div>

                {/* =================================================
                    PAYMENT METHOD
                ================================================== */}
                <div>
                  <label
                    className={`
                      block
                      text-sm
                      font-medium
                      ${theme.colors.text}
                      mb-2
                    `}
                  >
                    Payment Method
                  </label>

                  <div className="grid grid-cols-3 gap-2 sm:gap-3">
                    {paymentMethods.map((method) => {
                      const Icon = method.icon;
                      const active = paymentMethod === method.id;

                      return (
                        <button
                          key={method.id}
                          type="button"
                          onClick={() => setPaymentMethod(method.id)}
                          className={`
                            min-w-0
                            p-2.5 sm:p-3
                            rounded-xl
                            border-2
                            transition-all
                            active:scale-[0.98]
                            ${
                              active
                                ? 'border-primary-500 bg-primary-500/10'
                                : `${theme.colors.border} ${theme.colors.hover}`
                            }
                          `}
                        >
                          <Icon
                            className={`
                              mx-auto
                              mb-1
                              text-lg sm:text-xl
                              ${
                                active
                                  ? theme.colors.primary
                                  : theme.colors.text
                              }
                            `}
                          />

                          <span
                            className={`
                              block
                              text-[11px] sm:text-xs
                              font-medium
                              truncate
                              ${
                                active
                                  ? theme.colors.primary
                                  : theme.colors.text
                              }
                            `}
                          >
                            {method.label}
                          </span>
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* =================================================
                    BANK
                ================================================== */}
                {paymentMethod === 'bank' && (
                  <div
                    className={`
                      p-3 sm:p-4
                      rounded-2xl
                      ${theme.colors.background}
                      border ${theme.colors.border}
                    `}
                  >
                    <div className="flex items-center gap-2 mb-3">
                      <CiBank
                        className={`${theme.colors.primary} text-xl`}
                      />

                      <h4
                        className={`
                          text-sm
                          font-semibold
                          ${theme.colors.text}
                        `}
                      >
                        Bank Details
                      </h4>
                    </div>

                    <div className="space-y-3">
                      <input
                        type="text"
                        placeholder="Account Holder Name"
                        value={paymentDetails.accountHolderName}
                        onChange={(e) =>
                          updatePaymentDetail(
                            'accountHolderName',
                            e.target.value
                          )
                        }
                        className={inputClass}
                        required
                      />

                      <input
                        type="text"
                        placeholder="Bank Name"
                        value={paymentDetails.bankName}
                        onChange={(e) =>
                          updatePaymentDetail(
                            'bankName',
                            e.target.value
                          )
                        }
                        className={inputClass}
                        required
                      />

                      <input
                        type="text"
                        inputMode="numeric"
                        placeholder="Account Number"
                        value={paymentDetails.accountNumber}
                        onChange={(e) =>
                          updatePaymentDetail(
                            'accountNumber',
                            e.target.value
                          )
                        }
                        className={inputClass}
                        required
                      />

                      <input
                        type="text"
                        placeholder="IFSC Code"
                        value={paymentDetails.ifscCode}
                        onChange={(e) =>
                          updatePaymentDetail(
                            'ifscCode',
                            e.target.value.toUpperCase()
                          )
                        }
                        className={inputClass}
                        required
                      />
                    </div>
                  </div>
                )}

                {/* =================================================
                    UPI
                ================================================== */}
                {paymentMethod === 'upi' && (
                  <div
                    className={`
                      p-3 sm:p-4
                      rounded-2xl
                      ${theme.colors.background}
                      border ${theme.colors.border}
                    `}
                  >
                    <div className="flex items-center gap-2 mb-3">
                      <FaMobile
                        className={`${theme.colors.primary} text-lg`}
                      />

                      <h4
                        className={`
                          text-sm
                          font-semibold
                          ${theme.colors.text}
                        `}
                      >
                        UPI Details
                      </h4>
                    </div>

                    <div className="space-y-3">
                      <input
                        type="text"
                        placeholder="UPI ID (e.g. name@upi)"
                        value={paymentDetails.upiId}
                        onChange={(e) =>
                          updatePaymentDetail(
                            'upiId',
                            e.target.value
                          )
                        }
                        className={inputClass}
                        required
                      />

                      <input
                        type="text"
                        placeholder="Name on UPI"
                        value={paymentDetails.upiName}
                        onChange={(e) =>
                          updatePaymentDetail(
                            'upiName',
                            e.target.value
                          )
                        }
                        className={inputClass}
                      />
                    </div>
                  </div>
                )}

                {/* =================================================
                    PAYPAL
                ================================================== */}
                {paymentMethod === 'paypal' && (
                  <div
                    className={`
                      p-3 sm:p-4
                      rounded-2xl
                      ${theme.colors.background}
                      border ${theme.colors.border}
                    `}
                  >
                    <div className="flex items-center gap-2 mb-3">
                      <FaPaypal
                        className={`${theme.colors.primary} text-lg`}
                      />

                      <h4
                        className={`
                          text-sm
                          font-semibold
                          ${theme.colors.text}
                        `}
                      >
                        PayPal Details
                      </h4>
                    </div>

                    <div className="space-y-3">
                      <input
                        type="email"
                        placeholder="PayPal Email"
                        value={paymentDetails.paypalEmail}
                        onChange={(e) =>
                          updatePaymentDetail(
                            'paypalEmail',
                            e.target.value
                          )
                        }
                        className={inputClass}
                        required
                      />

                      <input
                        type="text"
                        placeholder="Name on PayPal"
                        value={paymentDetails.paypalName}
                        onChange={(e) =>
                          updatePaymentDetail(
                            'paypalName',
                            e.target.value
                          )
                        }
                        className={inputClass}
                      />
                    </div>
                  </div>
                )}

                {/* =================================================
                    INFO
                ================================================== */}
                <div
                  className={`
                    p-3 sm:p-4
                    rounded-2xl
                    ${theme.colors.background}
                    border ${theme.colors.border}
                  `}
                >
                  <div className="flex items-start gap-2.5">
                    <FaInfoCircle
                      className={`
                        flex-shrink-0
                        mt-0.5
                        ${theme.colors.primary}
                      `}
                    />

                    <div
                      className={`
                        text-[11px] sm:text-xs
                        ${theme.colors.text}
                        opacity-70
                        leading-relaxed
                      `}
                    >
                      <p>📌 Processing time: 2–3 business days</p>
                      <p className="mt-1">
                        📌 Admin will review and approve your request
                      </p>
                      <p className="mt-1">
                        📌 You'll receive a notification after the status
                        update
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* =================================================
                  FOOTER
              ================================================== */}
              <div
                className={`
                  sticky bottom-0
                  flex-shrink-0
                  px-4 sm:px-6
                  py-3 sm:py-4
                  border-t ${theme.colors.border}
                  ${theme.colors.card}
                  backdrop-blur-xl
                `}
              >
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  <button
                    type="button"
                    onClick={onClose}
                    disabled={loading}
                    className={`
                      order-2 sm:order-1
                      w-full
                      px-4 py-2.5
                      rounded-xl
                      border ${theme.colors.border}
                      ${theme.colors.text}
                      ${theme.colors.hover}
                      transition-all
                      text-sm
                      font-medium
                      disabled:opacity-40
                    `}
                  >
                    Cancel
                  </button>

                  <button
                    type="submit"
                    disabled={loading || safeEarnings < 100}
                    className={`
                      order-1 sm:order-2
                      w-full
                      ${theme.colors.button}
                      text-white
                      px-4 py-2.5
                      rounded-xl
                      flex items-center justify-center
                      gap-2
                      transition-all
                      text-sm
                      font-medium
                      hover:scale-[1.01]
                      active:scale-[0.98]
                      disabled:opacity-50
                      disabled:cursor-not-allowed
                      disabled:hover:scale-100
                    `}
                  >
                    {loading ? (
                      <>
                        <FaSpinner className="animate-spin" />
                        Processing...
                      </>
                    ) : (
                      <>
                        <FaWallet />
                        Request Withdrawal
                      </>
                    )}
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WithdrawModal;
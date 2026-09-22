// frontend/src/components/affiliate/WithdrawalHeader.jsx

import React from 'react';
import {
  FaArrowLeft,
  FaWallet,
  FaChartLine,
} from 'react-icons/fa';
import { useTheme } from '../../themes/ThemeProvider';

const WithdrawalHeader = ({
  onBack,
  onViewStats,
  onWithdraw,
  earnings = 0,
}) => {
  const { theme } = useTheme();

  const availableEarnings = Number(earnings) || 0;
  const canWithdraw = availableEarnings >= 100;

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
      <div
        className="
          p-4
          sm:p-5
          md:p-6
        "
      >
        {/* =====================================================
            TOP SECTION
        ===================================================== */}

        <div
          className="
            flex
            flex-col
            lg:flex-row
            lg:items-center
            lg:justify-between
            gap-4
            lg:gap-6
          "
        >
          {/* ===================================================
              LEFT SIDE
          =================================================== */}

          <div
            className="
              flex
              items-start
              gap-3
              min-w-0
              flex-1
            "
          >
            {/* BACK BUTTON */}

            <button
              type="button"
              onClick={onBack}
              aria-label="Go back"
              className={`
                shrink-0
                w-9
                h-9
                sm:w-10
                sm:h-10
                rounded-xl
                ${theme.colors.hover}
                flex
                items-center
                justify-center
                transition-all
                hover:scale-105
                active:scale-95
              `}
            >
              <FaArrowLeft
                className={`
                  ${theme.colors.text}
                  text-sm
                  sm:text-base
                `}
              />
            </button>

            {/* TITLE */}

            <div className="min-w-0">
              <h1
                className={`
                  ${theme.colors.text}
                  text-xl
                  sm:text-2xl
                  md:text-3xl
                  font-bold
                  flex
                  items-center
                  gap-2
                  leading-tight
                `}
              >
                <span className="shrink-0">
                  💰
                </span>

                <span className="truncate">
                  Withdrawals
                </span>
              </h1>

              <p
                className={`
                  mt-1
                  ${theme.colors.text}
                  opacity-70
                  text-xs
                  sm:text-sm
                  leading-relaxed
                  max-w-xl
                `}
              >
                Manage your withdrawals and
                track earnings
              </p>
            </div>
          </div>

          {/* ===================================================
              ACTION BUTTONS
          =================================================== */}

          <div
            className="
              flex
              flex-col
              sm:flex-row
              gap-2
              w-full
              lg:w-auto
              shrink-0
            "
          >
            {/* VIEW STATS */}

            <button
              type="button"
              onClick={onViewStats}
              className={`
                w-full
                sm:w-auto
                min-h-[40px]
                px-4
                py-2.5
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
                whitespace-nowrap
              `}
            >
              <FaChartLine className="shrink-0" />

              <span>
                View Stats
              </span>
            </button>

            {/* WITHDRAW */}

            <button
              type="button"
              onClick={onWithdraw}
              disabled={!canWithdraw}
              title={
                !canWithdraw
                  ? 'Minimum withdrawal amount is ₹100'
                  : 'Withdraw your earnings'
              }
              className={`
                w-full
                sm:w-auto
                min-h-[40px]
                px-4
                py-2.5
                rounded-xl
                flex
                items-center
                justify-center
                gap-2
                text-sm
                font-medium
                text-white
                whitespace-nowrap
                transition-all
                ${
                  canWithdraw
                    ? `
                      ${theme.colors.button}
                      hover:scale-[1.02]
                      active:scale-[0.98]
                    `
                    : `
                      ${theme.colors.button}
                      opacity-50
                      cursor-not-allowed
                    `
                }
              `}
            >
              <FaWallet className="shrink-0" />

              <span>
                Withdraw Now
              </span>
            </button>
          </div>
        </div>

        {/* =====================================================
            EARNINGS INFO
        ===================================================== */}

        <div
          className={`
            mt-4
            pt-4
            border-t
            ${theme.colors.border}
          `}
        >
          <div
            className="
              flex
              flex-col
              xs:flex-row
              sm:flex-row
              sm:items-center
              sm:justify-between
              gap-2
            "
          >
            <div className="min-w-0">
              <p
                className={`
                  text-[11px]
                  sm:text-xs
                  ${theme.colors.text}
                  opacity-60
                `}
              >
                Available Earnings
              </p>

              <p
                className={`
                  mt-0.5
                  text-lg
                  sm:text-xl
                  font-bold
                  ${theme.colors.text}
                `}
              >
                ₹
                {availableEarnings.toFixed(2)}
              </p>
            </div>

            <div
              className={`
                self-start
                sm:self-auto
                px-2.5
                py-1
                rounded-full
                text-[10px]
                sm:text-xs
                font-medium
                whitespace-nowrap
                ${
                  canWithdraw
                    ? `
                      bg-green-100
                      text-green-700
                      dark:bg-green-900/30
                      dark:text-green-400
                    `
                    : `
                      bg-yellow-100
                      text-yellow-700
                      dark:bg-yellow-900/30
                      dark:text-yellow-400
                    `
                }
              `}
            >
              {canWithdraw
                ? 'Eligible for withdrawal'
                : 'Minimum ₹100 required'}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WithdrawalHeader;
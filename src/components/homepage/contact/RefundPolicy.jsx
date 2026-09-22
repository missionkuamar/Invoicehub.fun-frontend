import React from 'react';
import { useTheme } from '../../../themes/ThemeProvider';
import { FaUndo, FaEnvelope, FaPhone } from 'react-icons/fa';

const RefundPolicy = () => {
  const { theme } = useTheme();

  return (
    <section
      className={`min-h-screen py-28 px-4 ${theme.colors.background}`}
    >
      <div className="max-w-5xl mx-auto">

        {/* Header */}
        <div className="text-center mb-12">
          <div
            className={`
              w-16 h-16 mx-auto mb-5
              rounded-2xl
              ${theme.colors.primary}
              bg-opacity-10
              flex items-center justify-center
            `}
          >
            <FaUndo
              className={`text-3xl ${theme.colors.primary}`}
            />
          </div>

          <h1
            className={`text-4xl md:text-5xl font-bold ${theme.colors.text} mb-4`}
          >
            Refund Policy
          </h1>

          <p className={`${theme.colors.text} opacity-60`}>
            Last updated: September 20, 2026
          </p>
        </div>

        {/* Content */}
        <div
          className={`
            ${theme.colors.card}
            border
            ${theme.colors.border}
            rounded-3xl
            p-6 md:p-10
            shadow-lg
          `}
        >

          {/* 1 */}
          <div className="mb-10">
            <h2 className={`text-2xl font-bold ${theme.colors.text} mb-4`}>
              1. General Refund Policy
            </h2>

            <p className={`${theme.colors.text} opacity-75 leading-7`}>
              We want you to have a positive experience with InvoiceHub.
              Because our paid plans provide immediate access to digital
              services and features, subscription payments are generally
              non-refundable once the subscription has been activated.
            </p>
          </div>

          {/* 2 */}
          <div className="mb-10">
            <h2 className={`text-2xl font-bold ${theme.colors.text} mb-4`}>
              2. Duplicate Payments
            </h2>

            <p className={`${theme.colors.text} opacity-75 leading-7`}>
              If you are charged more than once for the same subscription
              due to a duplicate payment, please contact us. After
              verification, the duplicate transaction may be eligible
              for a refund.
            </p>
          </div>

          {/* 3 */}
          <div className="mb-10">
            <h2 className={`text-2xl font-bold ${theme.colors.text} mb-4`}>
              3. Payment Errors
            </h2>

            <p className={`${theme.colors.text} opacity-75 leading-7`}>
              If you believe that you were incorrectly charged or a
              payment was processed incorrectly, contact our support
              team with your payment or transaction details. We will
              review the issue and determine the appropriate resolution.
            </p>
          </div>

          {/* 4 */}
          <div className="mb-10">
            <h2 className={`text-2xl font-bold ${theme.colors.text} mb-4`}>
              4. Service Issues
            </h2>

            <p className={`${theme.colors.text} opacity-75 leading-7`}>
              If you experience a significant technical issue that
              prevents you from using a paid feature, please contact us
              as soon as possible. We may investigate the issue and,
              where appropriate, provide a suitable resolution.
            </p>
          </div>

          {/* 5 */}
          <div className="mb-10">
            <h2 className={`text-2xl font-bold ${theme.colors.text} mb-4`}>
              5. Refund Eligibility
            </h2>

            <p className={`${theme.colors.text} opacity-75 leading-7 mb-4`}>
              Refund requests are reviewed individually. A refund may be
              considered in situations such as:
            </p>

            <ul
              className={`
                list-disc pl-6 space-y-2
                ${theme.colors.text}
                opacity-75
              `}
            >
              <li>Duplicate subscription payment.</li>
              <li>Verified payment processing error.</li>
              <li>Other circumstances determined by InvoiceHub support.</li>
            </ul>
          </div>

          {/* 6 */}
          <div className="mb-10">
            <h2 className={`text-2xl font-bold ${theme.colors.text} mb-4`}>
              6. Non-Refundable Situations
            </h2>

            <p className={`${theme.colors.text} opacity-75 leading-7 mb-4`}>
              Refunds generally will not be provided for:
            </p>

            <ul
              className={`
                list-disc pl-6 space-y-2
                ${theme.colors.text}
                opacity-75
              `}
            >
              <li>Change of mind after purchasing a paid plan.</li>
              <li>Unused invoice or email limits.</li>
              <li>Failure to use the service during the billing period.</li>
              <li>Expired subscription periods.</li>
              <li>Features that were available and accessible at the time of purchase.</li>
            </ul>
          </div>

          {/* 7 */}
          <div className="mb-10">
            <h2 className={`text-2xl font-bold ${theme.colors.text} mb-4`}>
              7. How to Request a Refund
            </h2>

            <p className={`${theme.colors.text} opacity-75 leading-7`}>
              To request a refund or report a payment issue, contact us
              using the email address or phone number provided below.
              Please include your registered email address and relevant
              payment or transaction information so that we can review
              your request.
            </p>
          </div>

          {/* 8 */}
          <div className="mb-10">
            <h2 className={`text-2xl font-bold ${theme.colors.text} mb-4`}>
              8. Refund Processing
            </h2>

            <p className={`${theme.colors.text} opacity-75 leading-7`}>
              If a refund is approved, it will generally be processed
              through the applicable payment method or payment provider.
              The time required for the refund to appear in your account
              may depend on the payment provider and your bank.
            </p>
          </div>

          {/* 9 */}
          <div>
            <h2 className={`text-2xl font-bold ${theme.colors.text} mb-4`}>
              9. Contact Us
            </h2>

            <p className={`${theme.colors.text} opacity-75 leading-7 mb-5`}>
              If you have questions about this Refund Policy, contact us:
            </p>

            <div className="space-y-3">

              <a
                href="mailto:missionk935@gmail.com"
                className={`
                  flex items-center gap-3
                  ${theme.colors.text}
                  opacity-75
                  hover:opacity-100
                `}
              >
                <FaEnvelope />
                missionk935@gmail.com
              </a>

              <a
                href="mailto:missionk408@gmail.com"
                className={`
                  flex items-center gap-3
                  ${theme.colors.text}
                  opacity-75
                  hover:opacity-100
                `}
              >
                <FaEnvelope />
                missionk408@gmail.com
              </a>

              <a
                href="tel:+919354689368"
                className={`
                  flex items-center gap-3
                  ${theme.colors.text}
                  opacity-75
                  hover:opacity-100
                `}
              >
                <FaPhone />
                +91 93546 89368
              </a>

              <a
                href="tel:+919341072315"
                className={`
                  flex items-center gap-3
                  ${theme.colors.text}
                  opacity-75
                  hover:opacity-100
                `}
              >
                <FaPhone />
                +91 93410 72315
              </a>

            </div>
          </div>

        </div>

        <p
          className={`
            text-xs
            ${theme.colors.text}
            opacity-50
            text-center
            max-w-3xl
            mx-auto
            mt-8
          `}
        >
          Refund requests are subject to review and applicable laws and
          regulations.
        </p>

      </div>
    </section>
  );
};

export default RefundPolicy;
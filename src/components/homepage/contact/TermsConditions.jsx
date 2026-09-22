import React from 'react';
import { useTheme } from '../../../themes/ThemeProvider';
import { FaFileContract, FaEnvelope, FaPhone } from 'react-icons/fa';

const TermsConditions = () => {
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
            <FaFileContract
              className={`text-3xl ${theme.colors.primary}`}
            />
          </div>

          <h1
            className={`text-4xl md:text-5xl font-bold ${theme.colors.text} mb-4`}
          >
            Terms & Conditions
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
              1. Acceptance of Terms
            </h2>

            <p className={`${theme.colors.text} opacity-75 leading-7`}>
              By accessing or using InvoiceHub, you agree to comply with
              these Terms & Conditions. If you do not agree with these
              terms, please do not use the service.
            </p>
          </div>

          {/* 2 */}
          <div className="mb-10">
            <h2 className={`text-2xl font-bold ${theme.colors.text} mb-4`}>
              2. About InvoiceHub
            </h2>

            <p className={`${theme.colors.text} opacity-75 leading-7`}>
              InvoiceHub is an online invoicing platform that provides
              tools for creating, managing, sending, and tracking
              invoices, managing clients, and sending invoice-related
              email reminders.
            </p>
          </div>

          {/* 3 */}
          <div className="mb-10">
            <h2 className={`text-2xl font-bold ${theme.colors.text} mb-4`}>
              3. Account Registration
            </h2>

            <p className={`${theme.colors.text} opacity-75 leading-7 mb-4`}>
              To use certain features of InvoiceHub, you may need to
              create an account.
            </p>

            <ul
              className={`
                list-disc pl-6 space-y-2
                ${theme.colors.text}
                opacity-75
              `}
            >
              <li>You must provide accurate account information.</li>
              <li>You are responsible for maintaining your login credentials.</li>
              <li>You are responsible for activity performed through your account.</li>
              <li>You should notify us if you believe your account has been accessed without authorization.</li>
            </ul>
          </div>

          {/* 4 */}
          <div className="mb-10">
            <h2 className={`text-2xl font-bold ${theme.colors.text} mb-4`}>
              4. Use of the Service
            </h2>

            <p className={`${theme.colors.text} opacity-75 leading-7 mb-4`}>
              You agree to use InvoiceHub only for lawful business and
              professional purposes.
            </p>

            <p className={`${theme.colors.text} opacity-75 leading-7`}>
              You must not use the service to create fraudulent invoices,
              distribute illegal content, attempt unauthorized access,
              interfere with the service, or misuse another person's
              information.
            </p>
          </div>

          {/* 5 */}
          <div className="mb-10">
            <h2 className={`text-2xl font-bold ${theme.colors.text} mb-4`}>
              5. Invoice and Client Data
            </h2>

            <p className={`${theme.colors.text} opacity-75 leading-7`}>
              You are responsible for the accuracy of information entered
              into invoices and client records. You are also responsible
              for ensuring that you have the necessary permission to
              process and store client information through InvoiceHub.
            </p>
          </div>

          {/* 6 */}
          <div className="mb-10">
            <h2 className={`text-2xl font-bold ${theme.colors.text} mb-4`}>
              6. Free and Paid Plans
            </h2>

            <p className={`${theme.colors.text} opacity-75 leading-7 mb-4`}>
              InvoiceHub provides different plans with different usage
              limits and features.
            </p>

            <ul
              className={`
                list-disc pl-6 space-y-2
                ${theme.colors.text}
                opacity-75
              `}
            >
              <li>
                The Free plan allows up to 5 invoices per month.
              </li>
              <li>
                The Free plan allows up to 5 email reminders per month.
              </li>
              <li>
                Paid plans provide higher invoice and email limits.
              </li>
              <li>
                Plan limits are subject to the plan selected by the user.
              </li>
            </ul>
          </div>

          {/* 7 */}
          <div className="mb-10">
            <h2 className={`text-2xl font-bold ${theme.colors.text} mb-4`}>
              7. Subscription and Payments
            </h2>

            <p className={`${theme.colors.text} opacity-75 leading-7`}>
              Paid subscriptions are subject to the price and billing
              information displayed on the applicable pricing page at
              the time of purchase.
            </p>

            <p className={`${theme.colors.text} opacity-75 leading-7 mt-4`}>
              Payment processing may be handled by third-party payment
              providers. InvoiceHub does not intentionally store complete
              card or banking credentials on its own servers.
            </p>
          </div>

          {/* 8 */}
          <div className="mb-10">
            <h2 className={`text-2xl font-bold ${theme.colors.text} mb-4`}>
              8. Usage Limits
            </h2>

            <p className={`${theme.colors.text} opacity-75 leading-7`}>
              Each plan has defined invoice and email usage limits.
              When a user reaches the applicable monthly limit, further
              usage may be restricted until the limit resets or the user
              upgrades to a plan with a higher limit.
            </p>
          </div>

          {/* 9 */}
          <div className="mb-10">
            <h2 className={`text-2xl font-bold ${theme.colors.text} mb-4`}>
              9. Email Reminders
            </h2>

            <p className={`${theme.colors.text} opacity-75 leading-7`}>
              InvoiceHub may provide email reminder functionality for
              invoice-related communication. Users are responsible for
              ensuring that email addresses provided to the service are
              accurate and that their use of email communication complies
              with applicable laws.
            </p>
          </div>

          {/* 10 */}
          <div className="mb-10">
            <h2 className={`text-2xl font-bold ${theme.colors.text} mb-4`}>
              10. Intellectual Property
            </h2>

            <p className={`${theme.colors.text} opacity-75 leading-7`}>
              The InvoiceHub platform, including its software, design,
              branding, interface, and original content, is protected by
              applicable intellectual property laws. You may not copy,
              modify, distribute, or commercially exploit these elements
              without appropriate authorization.
            </p>
          </div>

          {/* 11 */}
          <div className="mb-10">
            <h2 className={`text-2xl font-bold ${theme.colors.text} mb-4`}>
              11. Service Availability
            </h2>

            <p className={`${theme.colors.text} opacity-75 leading-7`}>
              We aim to keep InvoiceHub available and reliable, but we
              do not guarantee that the service will always be available
              without interruption. Maintenance, technical problems,
              third-party service issues, or circumstances outside our
              reasonable control may temporarily affect availability.
            </p>
          </div>

          {/* 12 */}
          <div className="mb-10">
            <h2 className={`text-2xl font-bold ${theme.colors.text} mb-4`}>
              12. Account Suspension or Termination
            </h2>

            <p className={`${theme.colors.text} opacity-75 leading-7`}>
              We may restrict or suspend access to an account if we
              reasonably believe that the account is being used in
              violation of these Terms, applicable law, or in a way that
              may harm the service or other users.
            </p>
          </div>

          {/* 13 */}
          <div className="mb-10">
            <h2 className={`text-2xl font-bold ${theme.colors.text} mb-4`}>
              13. Limitation of Liability
            </h2>

            <p className={`${theme.colors.text} opacity-75 leading-7`}>
              To the extent permitted by applicable law, InvoiceHub will
              not be responsible for indirect, incidental, special, or
              consequential losses arising from the use or inability to
              use the service.
            </p>
          </div>

          {/* 14 */}
          <div className="mb-10">
            <h2 className={`text-2xl font-bold ${theme.colors.text} mb-4`}>
              14. Changes to These Terms
            </h2>

            <p className={`${theme.colors.text} opacity-75 leading-7`}>
              We may update these Terms & Conditions from time to time.
              Updated terms will be published on this page with a
              revised effective date. Continued use of InvoiceHub after
              changes are published may constitute acceptance of the
              updated terms.
            </p>
          </div>

          {/* 15 */}
          <div>
            <h2 className={`text-2xl font-bold ${theme.colors.text} mb-4`}>
              15. Contact Us
            </h2>

            <p className={`${theme.colors.text} opacity-75 leading-7 mb-5`}>
              If you have questions regarding these Terms & Conditions,
              please contact us:
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
          These Terms & Conditions should be reviewed and adapted to
          your actual business practices and applicable legal
          requirements.
        </p>

      </div>
    </section>
  );
};

export default TermsConditions;
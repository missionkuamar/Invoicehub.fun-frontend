import React from 'react';
import { useTheme } from '../../../themes/ThemeProvider';
import { FaShieldAlt, FaEnvelope, FaPhone } from 'react-icons/fa';

const PrivacyPolicy = () => {
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
            <FaShieldAlt
              className={`text-3xl ${theme.colors.primary}`}
            />
          </div>

          <h1
            className={`text-4xl md:text-5xl font-bold ${theme.colors.text} mb-4`}
          >
            Privacy Policy
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

          {/* Introduction */}
          <div className="mb-10">
            <h2
              className={`text-2xl font-bold ${theme.colors.text} mb-4`}
            >
              1. Introduction
            </h2>

            <p
              className={`${theme.colors.text} opacity-75 leading-7`}
            >
              Welcome to InvoiceHub. We respect your privacy and are
              committed to protecting the information you provide while
              using our invoicing platform. This Privacy Policy explains
              what information we collect, how we use it, and how we
              protect it.
            </p>
          </div>

          {/* Information */}
          <div className="mb-10">
            <h2
              className={`text-2xl font-bold ${theme.colors.text} mb-4`}
            >
              2. Information We Collect
            </h2>

            <p
              className={`${theme.colors.text} opacity-75 leading-7 mb-4`}
            >
              When you use InvoiceHub, we may collect the following
              information:
            </p>

            <ul
              className={`
                list-disc
                pl-6
                space-y-2
                ${theme.colors.text}
                opacity-75
              `}
            >
              <li>Name and account information.</li>
              <li>Email address and contact information.</li>
              <li>Business information provided by you.</li>
              <li>Client information entered into invoices.</li>
              <li>Invoice numbers, items, amounts, dates, and payment status.</li>
              <li>Information related to your subscription and plan.</li>
              <li>Technical information such as browser, device, and basic usage data.</li>
            </ul>
          </div>

          {/* Invoice Data */}
          <div className="mb-10">
            <h2
              className={`text-2xl font-bold ${theme.colors.text} mb-4`}
            >
              3. Invoice and Client Information
            </h2>

            <p
              className={`${theme.colors.text} opacity-75 leading-7`}
            >
              InvoiceHub allows you to store information required to
              create and manage invoices. This may include client names,
              email addresses, business details, invoice items, amounts,
              dates, notes, and payment status.
            </p>

            <p
              className={`${theme.colors.text} opacity-75 leading-7 mt-4`}
            >
              You are responsible for ensuring that you have the
              appropriate permission to enter and process client
              information through the service.
            </p>
          </div>

          {/* How we use */}
          <div className="mb-10">
            <h2
              className={`text-2xl font-bold ${theme.colors.text} mb-4`}
            >
              4. How We Use Your Information
            </h2>

            <p
              className={`${theme.colors.text} opacity-75 leading-7 mb-4`}
            >
              We may use collected information to:
            </p>

            <ul
              className={`
                list-disc
                pl-6
                space-y-2
                ${theme.colors.text}
                opacity-75
              `}
            >
              <li>Create and manage your InvoiceHub account.</li>
              <li>Create, store, and manage invoices.</li>
              <li>Send invoices and email reminders requested by you.</li>
              <li>Track invoice and payment status.</li>
              <li>Manage subscriptions and billing.</li>
              <li>Provide customer support.</li>
              <li>Improve the performance and functionality of InvoiceHub.</li>
              <li>Detect and prevent fraud, abuse, or unauthorized activity.</li>
              <li>Maintain the security of our services.</li>
            </ul>
          </div>

          {/* Payment */}
          <div className="mb-10">
            <h2
              className={`text-2xl font-bold ${theme.colors.text} mb-4`}
            >
              5. Payment Information
            </h2>

            <p
              className={`${theme.colors.text} opacity-75 leading-7`}
            >
              Payments for InvoiceHub subscriptions may be processed
              through third-party payment providers. We do not intend to
              store your complete card, banking, or other sensitive
              payment credentials on our servers.
            </p>

            <p
              className={`${theme.colors.text} opacity-75 leading-7 mt-4`}
            >
              Payment information is handled according to the policies
              and security practices of the applicable payment provider.
            </p>
          </div>

          {/* Emails */}
          <div className="mb-10">
            <h2
              className={`text-2xl font-bold ${theme.colors.text} mb-4`}
            >
              6. Email Communication
            </h2>

            <p
              className={`${theme.colors.text} opacity-75 leading-7`}
            >
              We may use your email address to provide account-related
              communications, invoice notifications, payment reminders,
              service updates, and customer support messages.
            </p>
          </div>

          {/* Cookies */}
          <div className="mb-10">
            <h2
              className={`text-2xl font-bold ${theme.colors.text} mb-4`}
            >
              7. Cookies and Similar Technologies
            </h2>

            <p
              className={`${theme.colors.text} opacity-75 leading-7`}
            >
              InvoiceHub may use cookies or similar technologies to
              maintain login sessions, remember preferences, improve
              functionality, and understand basic usage of the service.
            </p>
          </div>

          {/* Security */}
          <div className="mb-10">
            <h2
              className={`text-2xl font-bold ${theme.colors.text} mb-4`}
            >
              8. Data Security
            </h2>

            <p
              className={`${theme.colors.text} opacity-75 leading-7`}
            >
              We take reasonable technical and organizational measures
              to protect your information against unauthorized access,
              alteration, disclosure, or destruction. However, no
              internet-based service can guarantee absolute security.
            </p>
          </div>

          {/* Sharing */}
          <div className="mb-10">
            <h2
              className={`text-2xl font-bold ${theme.colors.text} mb-4`}
            >
              9. Sharing of Information
            </h2>

            <p
              className={`${theme.colors.text} opacity-75 leading-7`}
            >
              We do not sell your personal information. Information may
              be shared with trusted service providers when necessary to
              operate InvoiceHub, such as hosting, database, email,
              analytics, authentication, and payment service providers.
            </p>

            <p
              className={`${theme.colors.text} opacity-75 leading-7 mt-4`}
            >
              Information may also be disclosed when required by law,
              regulation, legal process, or to protect the security and
              rights of InvoiceHub and its users.
            </p>
          </div>

          {/* Data Retention */}
          <div className="mb-10">
            <h2
              className={`text-2xl font-bold ${theme.colors.text} mb-4`}
            >
              10. Data Retention
            </h2>

            <p
              className={`${theme.colors.text} opacity-75 leading-7`}
            >
              We retain information for as long as reasonably necessary
              to provide the service, maintain business and transaction
              records, comply with applicable legal obligations, resolve
              disputes, and enforce our agreements.
            </p>
          </div>

          {/* User Rights */}
          <div className="mb-10">
            <h2
              className={`text-2xl font-bold ${theme.colors.text} mb-4`}
            >
              11. Your Rights
            </h2>

            <p
              className={`${theme.colors.text} opacity-75 leading-7`}
            >
              Depending on applicable law, you may have rights regarding
              your personal information, including requesting access,
              correction, or deletion of certain information.
            </p>

            <p
              className={`${theme.colors.text} opacity-75 leading-7 mt-4`}
            >
              To make a privacy-related request, please contact us using
              the contact information below.
            </p>
          </div>

          {/* Third Party */}
          <div className="mb-10">
            <h2
              className={`text-2xl font-bold ${theme.colors.text} mb-4`}
            >
              12. Third-Party Services
            </h2>

            <p
              className={`${theme.colors.text} opacity-75 leading-7`}
            >
              InvoiceHub may use third-party services to provide
              infrastructure, authentication, email delivery, payment
              processing, analytics, and other functionality. These
              providers may process information according to their own
              privacy policies and applicable agreements.
            </p>
          </div>

          {/* Children */}
          <div className="mb-10">
            <h2
              className={`text-2xl font-bold ${theme.colors.text} mb-4`}
            >
              13. Children's Privacy
            </h2>

            <p
              className={`${theme.colors.text} opacity-75 leading-7`}
            >
              InvoiceHub is intended for business and professional use.
              We do not knowingly collect personal information from
              children where prohibited by applicable law.
            </p>
          </div>

          {/* Changes */}
          <div className="mb-10">
            <h2
              className={`text-2xl font-bold ${theme.colors.text} mb-4`}
            >
              14. Changes to This Privacy Policy
            </h2>

            <p
              className={`${theme.colors.text} opacity-75 leading-7`}
            >
              We may update this Privacy Policy from time to time.
              Changes will be reflected on this page with an updated
              effective date.
            </p>
          </div>

          {/* Contact */}
          <div>
            <h2
              className={`text-2xl font-bold ${theme.colors.text} mb-4`}
            >
              15. Contact Us
            </h2>

            <p
              className={`${theme.colors.text} opacity-75 leading-7 mb-5`}
            >
              If you have questions or concerns regarding this Privacy
              Policy or your personal information, you can contact us:
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

        {/* Disclaimer */}
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
          This Privacy Policy is provided for informational purposes and
          should be reviewed and adapted to your actual business
          practices and applicable legal requirements.
        </p>

      </div>
    </section>
  );
};

export default PrivacyPolicy;
// src/components/sections/FAQ.jsx

import React, { useState } from 'react';
import { useTheme } from '../../../themes/ThemeProvider';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';

const FAQ = () => {
  const { theme } = useTheme();
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: 'What is InvoiceHub?',
      answer:
        'InvoiceHub is an invoicing platform that helps businesses create, manage, send, and track professional invoices from one simple dashboard.',
    },
    {
      question: 'Can I create professional invoices?',
      answer:
        'Yes. You can create professional invoices with your business details, client information, invoice items, amounts, dates, notes, and payment terms.',
    },
    {
      question: 'Can I manage my clients?',
      answer:
        'Yes. You can add and manage your clients and keep their information organized in one place.',
    },
    {
      question: 'Can I track invoice payments?',
      answer:
        'Yes. InvoiceHub allows you to track the payment status of your invoices, including paid, pending, overdue, and other available statuses.',
    },
    {
      question: 'Can I send invoices by email?',
      answer:
        'Yes. You can send professional invoices directly to your clients by email.',
    },
    {
      question: 'Can I send payment reminders?',
      answer:
        'Yes. You can send email reminders to help you follow up on upcoming and overdue invoice payments.',
    },
    {
      question: 'Is InvoiceHub available on mobile?',
      answer:
        'Yes. InvoiceHub is responsive and can be accessed from smartphones, tablets, and desktop devices.',
    },
    {
      question: 'Do I need technical knowledge to use InvoiceHub?',
      answer:
        'No. InvoiceHub is designed to make invoice creation and management simple and easy to use.',
    },
   {
  question: 'Is there a free plan?',
  answer:
    'Yes. InvoiceHub offers a free plan that allows you to create up to 5 invoices and send up to 5 email reminders per month.',
},
{
  question: 'What happens when I reach my monthly limit?',
  answer:
    'When you reach your monthly invoice or email reminder limit, you will need to wait until your monthly limit resets or upgrade to a paid plan with a higher limit.',
},
  ];

  return (
    <section
      id="faq"
      className={`py-20 px-4 ${theme.colors.background}`}
    >
      <div className="max-w-7xl mx-auto">

        {/* Heading */}
        <div className="text-center mb-12">
          <h2
            className={`text-4xl font-bold ${theme.colors.text} mb-4`}
          >
            Frequently Asked
            <span
              className={`bg-gradient-to-r ${theme.colors.gradient} text-transparent bg-clip-text`}
            >
              {' '}Questions
            </span>
          </h2>

          <p
            className={`${theme.colors.text} opacity-70 max-w-2xl mx-auto`}
          >
            Find answers to common questions about InvoiceHub.
          </p>
        </div>

        {/* FAQ */}
        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <div
                key={index}
                className={`
                  ${theme.colors.card}
                  rounded-2xl
                  border
                  ${theme.colors.primary}
                  border-opacity-20
                  overflow-hidden
                `}
              >
                <button
                  type="button"
                  onClick={() =>
                    setOpenIndex(isOpen ? null : index)
                  }
                  className="w-full px-6 py-4 flex items-center justify-between gap-4 text-left hover:bg-opacity-5 transition-colors"
                >
                  <span
                    className={`font-medium ${theme.colors.text}`}
                  >
                    {faq.question}
                  </span>

                  {isOpen ? (
                    <FaChevronUp
                      className={`${theme.colors.primary} flex-shrink-0`}
                    />
                  ) : (
                    <FaChevronDown
                      className={`${theme.colors.primary} flex-shrink-0`}
                    />
                  )}
                </button>

                {isOpen && (
                  <div className="px-6 pb-5">
                    <p
                      className={`${theme.colors.text} opacity-70 leading-relaxed`}
                    >
                      {faq.answer}
                    </p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default FAQ;
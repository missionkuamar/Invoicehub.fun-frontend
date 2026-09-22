// frontend/src/components/invoices/InvoiceDownloadButton.jsx
import React, { useState } from 'react';
import { FaDownload, FaFilePdf, FaFileImage, FaPrint, FaSpinner } from 'react-icons/fa';
import { useTheme } from '../../themes/ThemeProvider';
import toast from 'react-hot-toast';

/**
 * InvoiceDownloadButton — versatile download component
 *
 * Props:
 *  - invoice: invoice object
 *  - printRef: React ref pointing to the DOM element to print/download (optional)
 *  - variant: 'icon' | 'button' | 'dropdown'  (default: 'button')
 *  - className: extra classes
 *  - onSuccess: callback on successful download
 */
const InvoiceDownloadButton = ({
  invoice,
  printRef,
  variant = 'button',
  className = '',
  onSuccess,
}) => {
  const { theme } = useTheme();
  const [loading, setLoading] = useState(false);
  const [showMenu, setShowMenu] = useState(false);

  const fileName = `Invoice-${invoice?.invoiceNumber || 'Draft'}`;

  // ============================================================
  // ✅ PRINT — browser print dialog
  // ============================================================
  const handlePrint = async () => {
    try {
      setShowMenu(false);

      // If printRef provided, use @media print with that element
      if (printRef?.current) {
        window.print();
      } else {
        window.print();
      }

      toast.success('Print dialog opened');
      onSuccess?.();
    } catch (err) {
      console.error(err);
      toast.error('Failed to print');
    }
  };

  // ============================================================
  // ✅ DOWNLOAD AS PDF — uses html2pdf.js dynamically
  // ============================================================
  const handleDownloadPDF = async () => {
    setLoading(true);
    setShowMenu(false);

    try {
      // ✅ Lazy load html2pdf.js (only when needed — performance)
      let html2pdf;
      try {
        html2pdf = (await import('html2pdf.js')).default;
      } catch (e) {
        toast.error('PDF library not installed. Run: npm i html2pdf.js');
        setLoading(false);
        return;
      }

      if (!printRef?.current) {
        toast.error('Nothing to download');
        setLoading(false);
        return;
      }

      const element = printRef.current;

      const opt = {
        margin: [10, 10, 10, 10],
        filename: `${fileName}.pdf`,
        image: { type: 'jpeg', quality: 0.98 },
        html2canvas: {
          scale: 2,
          useCORS: true,
          backgroundColor: '#ffffff',
          logging: false,
        },
        jsPDF: {
          unit: 'mm',
          format: 'a4',
          orientation: 'portrait',
        },
        pagebreak: { mode: ['avoid-all', 'css', 'legacy'] },
      };

      await html2pdf().set(opt).from(element).save();

      toast.success('PDF downloaded successfully!');
      onSuccess?.();
    } catch (err) {
      console.error('PDF download failed:', err);
      toast.error('Failed to download PDF');
    } finally {
      setLoading(false);
    }
  };

  // ============================================================
  // ✅ DOWNLOAD AS IMAGE — uses html2canvas
  // ============================================================
  const handleDownloadImage = async () => {
    setLoading(true);
    setShowMenu(false);

    try {
      let html2canvas;
      try {
        html2canvas = (await import('html2canvas')).default;
      } catch (e) {
        toast.error('Image library not installed. Run: npm i html2canvas');
        setLoading(false);
        return;
      }

      if (!printRef?.current) {
        toast.error('Nothing to download');
        setLoading(false);
        return;
      }

      const element = printRef.current;
      const canvas = await html2canvas(element, {
        scale: 2,
        backgroundColor: '#ffffff',
        useCORS: true,
        logging: false,
      });

      // Convert canvas → blob → download
      canvas.toBlob((blob) => {
        if (!blob) {
          toast.error('Failed to create image');
          setLoading(false);
          return;
        }
        const url = URL.createObjectURL(blob);
        const link = document.createElement('a');
        link.href = url;
        link.download = `${fileName}.png`;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        URL.revokeObjectURL(url);

        toast.success('Image downloaded successfully!');
        onSuccess?.();
        setLoading(false);
      }, 'image/png');
    } catch (err) {
      console.error('Image download failed:', err);
      toast.error('Failed to download image');
      setLoading(false);
    }
  };

  // ============================================================
  // ✅ RENDER — 3 variants
  // ============================================================

  // ---- ICON variant (for modal header) ----
  if (variant === 'icon') {
    return (
      <div className="relative">
        <button
          onClick={() => setShowMenu((s) => !s)}
          disabled={loading}
          className={`p-2 rounded-lg ${theme.colors.hover} transition-colors disabled:opacity-50`}
          title="Download"
        >
          {loading ? (
            <FaSpinner className={`animate-spin text-sm sm:text-base ${theme.colors.text}`} />
          ) : (
            <FaDownload className={`text-sm sm:text-base ${theme.colors.text}`} />
          )}
        </button>

        {showMenu && (
          <DownloadMenu
            theme={theme}
            onPrint={handlePrint}
            onPDF={handleDownloadPDF}
            onImage={handleDownloadImage}
            onClose={() => setShowMenu(false)}
          />
        )}
      </div>
    );
  }

  // ---- DROPDOWN variant (standalone) ----
  if (variant === 'dropdown') {
    return (
      <div className="relative inline-block">
        <button
          onClick={() => setShowMenu((s) => !s)}
          disabled={loading}
          className={`${theme.colors.button} text-white px-4 py-2 rounded-xl flex items-center gap-2 hover:scale-105 transition-all text-sm disabled:opacity-50 ${className}`}
        >
          {loading ? <FaSpinner className="animate-spin" /> : <FaDownload />}
          Download
        </button>

        {showMenu && (
          <DownloadMenu
            theme={theme}
            onPrint={handlePrint}
            onPDF={handleDownloadPDF}
            onImage={handleDownloadImage}
            onClose={() => setShowMenu(false)}
          />
        )}
      </div>
    );
  }

  // ---- BUTTON variant (default — direct PDF download) ----
  return (
    <button
      onClick={handleDownloadPDF}
      disabled={loading}
      className={`flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl ${theme.colors.button} text-white text-sm font-medium hover:scale-[1.02] transition-all disabled:opacity-50 disabled:hover:scale-100 ${className}`}
    >
      {loading ? (
        <>
          <FaSpinner className="animate-spin" /> Downloading...
        </>
      ) : (
        <>
          <FaFilePdf /> Download PDF
        </>
      )}
    </button>
  );
};

// ============================================================
// DROPDOWN MENU (used in both icon and dropdown variants)
// ============================================================
const DownloadMenu = ({ theme, onPrint, onPDF, onImage, onClose }) => {
  return (
    <>
      {/* Backdrop */}
      <div className="fixed inset-0 z-40" onClick={onClose} />

      {/* Menu */}
      <div
        className={`absolute right-0 top-full mt-1 w-48 z-50 ${theme.colors.card} border ${theme.colors.border} rounded-xl shadow-2xl overflow-hidden`}
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onPDF}
          className={`w-full flex items-center gap-3 px-4 py-2.5 text-sm ${theme.colors.text} hover:${theme.colors.hover} transition-colors`}
        >
          <FaFilePdf className="text-red-500" />
          Download PDF
        </button>

        <button
          onClick={onImage}
          className={`w-full flex items-center gap-3 px-4 py-2.5 text-sm ${theme.colors.text} hover:${theme.colors.hover} transition-colors`}
        >
          <FaFileImage className="text-blue-500" />
          Download PNG
        </button>

        <div className={`border-t ${theme.colors.border}`} />

       
      </div>
    </>
  );
};

export default InvoiceDownloadButton;
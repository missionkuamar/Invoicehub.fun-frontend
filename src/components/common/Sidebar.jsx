// frontend/src/components/common/Sidebar.jsx

import React, { useEffect, useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';

import {
  FaHome,
  FaFileInvoice,
  FaPlus,
  FaCog,
  FaCreditCard,
  FaUsers,
  FaChartBar,
  FaWallet,
  FaBell,
  FaShareAlt,
  FaChevronDown,
  FaChevronRight,
  FaFileAlt,
  FaTimes,
  FaShieldAlt,
  FaUserShield,
  FaTools,
} from 'react-icons/fa';

import { HiOutlineMail } from 'react-icons/hi';
import { MdOutlineAlternateEmail } from 'react-icons/md';
import { SiMinutemailer } from 'react-icons/si';

import api from '../../services/api';
import toast from 'react-hot-toast';
import { useTheme } from '../../themes/ThemeProvider';

const Sidebar = ({ onClose }) => {
  const { user } = useSelector((state) => state.auth);
  const { theme } = useTheme();
  const location = useLocation();

  const role = user?.role;

  const isAdmin = role === 'admin';
  const isSuperAdmin = role === 'super_admin';
  const hasAdminAccess = isAdmin || isSuperAdmin;

  const [pendingWithdrawals, setPendingWithdrawals] = useState(0);

  const [isCreateSubmenuOpen, setIsCreateSubmenuOpen] = useState(
    location.pathname.startsWith('/create-invoice')
  );

  const [isEmailSubmenuOpen, setIsEmailSubmenuOpen] = useState(
    location.pathname.startsWith('/email-')
  );

  const [isAdminSubmenuOpen, setIsAdminSubmenuOpen] = useState(
    location.pathname.startsWith('/admin')
  );

  // ============================================================
  // FETCH ADMIN STATS
  // ============================================================

  useEffect(() => {
    if (!hasAdminAccess) return;

    fetchPendingCount();

    const interval = setInterval(() => {
      fetchPendingCount();
    }, 30000);

    return () => clearInterval(interval);
  }, [hasAdminAccess]);

  const fetchPendingCount = async () => {
    try {
      const response = await api.get('/admin/stats');

      setPendingWithdrawals(
        response.data?.data?.pendingWithdrawals || 0
      );
    } catch (error) {
      console.error('Failed to fetch admin stats:', error);
    }
  };

  // ============================================================
  // MOBILE CLOSE
  // ============================================================

  const handleLinkClick = () => {
    if (window.innerWidth < 1024 && onClose) {
      onClose();
    }
  };

  // ============================================================
  // MENU DATA
  // ============================================================

  const userMenuItems = [
    {
      path: '/dashboard',
      icon: FaHome,
      label: 'Dashboard',
    },

    {
      label: 'Create Invoice',
      icon: FaPlus,
      submenu: true,
      isOpen: isCreateSubmenuOpen,
      toggle: () =>
        setIsCreateSubmenuOpen((prev) => !prev),

      submenuItems: [
        {
          path: '/create-invoice/simple',
          icon: FaFileAlt,
          label: 'Simple',
          description: 'Create simple invoice',
        },
      ],
    },

    {
      label: 'Email Service',
      icon: HiOutlineMail,
      submenu: true,
      isOpen: isEmailSubmenuOpen,
      toggle: () =>
        setIsEmailSubmenuOpen((prev) => !prev),

      submenuItems: [
        {
          path: '/email-simple',
          icon: MdOutlineAlternateEmail,
          label: 'Simple Service',
          description: 'Send emails',
        },
        {
          path: '/email-scheduled',
          icon: SiMinutemailer,
          label: 'Scheduled Email',
          description: 'Schedule emails',
        },
      ],
    },

    {
      path: '/invoices',
      icon: FaFileInvoice,
      label: 'All Invoices',
    },

    {
      path: '/subscription',
      icon: FaCreditCard,
      label: 'Subscription',
    },

    {
      path: '/affiliate',
      icon: FaShareAlt,
      label: 'Affiliate',
    },

    {
      path: '/settings',
      icon: FaCog,
      label: 'Settings',
    },
  ];

  // ============================================================
  // ADMIN MENU
  // ============================================================

  const adminMenuItems = [
    {
      path: '/admin/dashboard',
      icon: FaChartBar,
      label: 'Dashboard',
    },

    {
      path: '/admin/users',
      icon: FaUsers,
      label: 'Users',
    },

    {
      path: '/admin/withdrawals',
      icon: FaWallet,
      label: 'Withdrawals',
      badge:
        pendingWithdrawals > 0
          ? pendingWithdrawals
          : null,
    },

    {
      path: '/admin/notifications',
      icon: FaBell,
      label: 'Notifications',
    },
  ];

  // ============================================================
  // SUPER ADMIN ONLY
  // ============================================================

  const superAdminMenuItems = [
    {
      path: '/admin/admins',
      icon: FaUserShield,
      label: 'Manage Admins',
    },

    {
      path: '/admin/system',
      icon: FaTools,
      label: 'System Settings',
    },
  ];

  // ============================================================
  // COMMON CLASSES
  // ============================================================

  const sidebarClass = `
    h-full
    w-full
    ${theme.colors.card}
    ${theme.colors.text}
    flex
    flex-col
    border-r
    ${theme.colors.border}
    overflow-hidden
  `;

  const navLinkClass = `
    group
    flex
    items-center
    justify-between
    w-full
    min-h-[44px]
    px-3
    sm:px-4
    py-2.5
    rounded-xl
    mb-1
    transition-all
    duration-200
    text-sm
    sm:text-[15px]
  `;

  const inactiveClass = `
    opacity-75
    hover:opacity-100
    hover:bg-gray-100
    dark:hover:bg-gray-800
  `;

  const activeClass = `
    ${theme.colors.button}
    text-white
    shadow-sm
  `;

  // ============================================================
  // RENDER SUBMENU
  // ============================================================

  const renderSubmenu = (item) => {
    return (
      <div
        className="
          ml-3
          sm:ml-5
          mt-1
          mb-2
          pl-2
          sm:pl-3
          border-l-2
          border-gray-200
          dark:border-gray-700
          space-y-1
        "
      >
        {item.submenuItems.map((subItem, index) => (
          <NavLink
            key={subItem.path || index}
            to={subItem.path}
            onClick={handleLinkClick}
            className={({ isActive }) => `
              flex
              items-center
              gap-2.5
              px-3
              py-2
              rounded-lg
              text-xs
              sm:text-sm
              transition-all
              duration-200
              ${
                isActive
                  ? activeClass
                  : `
                    opacity-65
                    hover:opacity-100
                    hover:bg-gray-100
                    dark:hover:bg-gray-800
                  `
              }
            `}
          >
            <subItem.icon
              className="flex-shrink-0"
              size={15}
            />

            <div className="min-w-0">
              <div className="truncate">
                {subItem.label}
              </div>

              {subItem.description && (
                <div
                  className="
                    text-[10px]
                    sm:text-[11px]
                    opacity-50
                    truncate
                    mt-0.5
                  "
                >
                  {subItem.description}
                </div>
              )}
            </div>
          </NavLink>
        ))}
      </div>
    );
  };

  // ============================================================
  // RENDER NORMAL ITEM
  // ============================================================

  const renderNormalItem = (item, index) => {
    return (
      <NavLink
        key={item.path || index}
        to={item.path}
        onClick={handleLinkClick}
        className={({ isActive }) =>
          `${navLinkClass} ${
            isActive
              ? activeClass
              : inactiveClass
          }`
        }
      >
        <div className="flex items-center gap-3 min-w-0">
          <item.icon
            size={18}
            className="flex-shrink-0"
          />

          <span className="truncate font-medium">
            {item.label}
          </span>
        </div>

        {item.badge && (
          <span
            className="
              flex-shrink-0
              min-w-[22px]
              h-[22px]
              px-1.5
              flex
              items-center
              justify-center
              rounded-full
              bg-red-500
              text-white
              text-[10px]
              sm:text-xs
              font-bold
            "
          >
            {item.badge > 99
              ? '99+'
              : item.badge}
          </span>
        )}
      </NavLink>
    );
  };

  // ============================================================
  // RENDER SUBMENU ITEM
  // ============================================================

  const renderSubmenuItem = (item, index) => {
    return (
      <div key={index}>
        <button
          type="button"
          onClick={item.toggle}
          className={`
            ${navLinkClass}
            ${inactiveClass}
          `}
          aria-expanded={item.isOpen}
        >
          <div className="flex items-center gap-3 min-w-0">
            <item.icon
              size={18}
              className="flex-shrink-0"
            />

            <span className="truncate font-medium">
              {item.label}
            </span>
          </div>

          {item.isOpen ? (
            <FaChevronDown
              size={12}
              className="flex-shrink-0 opacity-60"
            />
          ) : (
            <FaChevronRight
              size={12}
              className="flex-shrink-0 opacity-60"
            />
          )}
        </button>

        {item.isOpen &&
          renderSubmenu(item)}
      </div>
    );
  };

  // ============================================================
  // RENDER
  // ============================================================

  return (
    <aside className={sidebarClass}>
      {/* ======================================================
          HEADER
      ====================================================== */}

      <div
        className={`
          flex-shrink-0
          px-4
          sm:px-5
          py-4
          border-b
          ${theme.colors.border}
        `}
      >
        <div className="flex items-center justify-between gap-3">
          <div className="min-w-0">
            <h1
              className={`
                text-xl
                sm:text-2xl
                font-bold
                tracking-tight
                ${theme.colors.text}
                truncate
              `}
            >
              Invoice
              <span className={theme.colors.primary}>
                Pro
              </span>
            </h1>

            <div className="flex items-center gap-2 mt-1">
              <span
                className="
                  text-[10px]
                  sm:text-xs
                  opacity-50
                "
              >
                v2.0
              </span>

              {isSuperAdmin && (
                <span
                  className="
                    text-[10px]
                    px-2
                    py-0.5
                    rounded-full
                    bg-purple-100
                    text-purple-700
                    dark:bg-purple-900/30
                    dark:text-purple-300
                    font-medium
                  "
                >
                  Super Admin
                </span>
              )}

              {isAdmin && (
                <span
                  className="
                    text-[10px]
                    px-2
                    py-0.5
                    rounded-full
                    bg-blue-100
                    text-blue-700
                    dark:bg-blue-900/30
                    dark:text-blue-300
                    font-medium
                  "
                >
                  Admin
                </span>
              )}
            </div>
          </div>

          {/* Mobile close */}

          {onClose && (
            <button
              type="button"
              onClick={onClose}
              className="
                lg:hidden
                flex-shrink-0
                w-9
                h-9
                flex
                items-center
                justify-center
                rounded-xl
                hover:bg-gray-100
                dark:hover:bg-gray-800
                transition-colors
              "
              aria-label="Close sidebar"
            >
              <FaTimes
                className={theme.colors.text}
              />
            </button>
          )}
        </div>
      </div>

      {/* ======================================================
          NAVIGATION
      ====================================================== */}

      <nav
        className="
          flex-1
          min-h-0
          overflow-y-auto
          overflow-x-hidden
          px-2
          sm:px-3
          py-4
          scrollbar-thin
          scrollbar-thumb-gray-300
          dark:scrollbar-thumb-gray-700
        "
      >
        {/* USER MENU */}

        <div>
          {userMenuItems.map((item, index) =>
            item.submenu
              ? renderSubmenuItem(item, index)
              : renderNormalItem(item, index)
          )}
        </div>

        {/* ADMIN SECTION */}

        {hasAdminAccess && (
          <div className="mt-6 pt-4 border-t border-gray-200 dark:border-gray-700">
            <div className="px-3 mb-2">
              <p
                className="
                  text-[10px]
                  sm:text-xs
                  font-semibold
                  uppercase
                  tracking-wider
                  opacity-40
                "
              >
                Administration
              </p>
            </div>

            {adminMenuItems.map((item, index) =>
              renderNormalItem(item, index)
            )}

            {/* SUPER ADMIN */}

            {isSuperAdmin && (
              <>
                <div className="px-3 mt-5 mb-2">
                  <p
                    className="
                      text-[10px]
                      sm:text-xs
                      font-semibold
                      uppercase
                      tracking-wider
                      opacity-40
                    "
                  >
                    Super Admin
                  </p>
                </div>

                {superAdminMenuItems.map(
                  (item, index) =>
                    renderNormalItem(item, index)
                )}
              </>
            )}
          </div>
        )}
      </nav>

      {/* ======================================================
          FOOTER
      ====================================================== */}

      <div
        className={`
          flex-shrink-0
          px-4
          py-3
          border-t
          ${theme.colors.border}
        `}
      >
        <div
          className="
            flex
            flex-col
            sm:flex-row
            sm:items-center
            sm:justify-between
            gap-1
            text-[10px]
            sm:text-xs
            opacity-50
          "
        >
          <span>
            © 2024 InvoicePro
          </span>

          <span>
            v2.0.0
          </span>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
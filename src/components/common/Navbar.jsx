import React, { useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  FaBars,
  FaTimes,
  FaChevronDown,
  FaSignOutAlt,
  FaUserCircle,
} from 'react-icons/fa';
import { CgProfile } from 'react-icons/cg';
import { Link, useNavigate } from 'react-router-dom';

import { logout } from '../../store/slices/authSlice';
import { useTheme } from '../../themes/ThemeProvider';
import ThemeSwitcher from '../homepage/ThemeSwitcher';

const Navbar = ({ onToggleSidebar, isSidebarOpen }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { theme } = useTheme();

  const { user } = useSelector((state) => state.auth);

  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const dropdownRef = useRef(null);

  // --------------------------------------------------
  // Close dropdown when clicking outside
  // --------------------------------------------------
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target)
      ) {
        setIsDropdownOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  // --------------------------------------------------
  // Logout
  // --------------------------------------------------
  const handleLogout = () => {
    dispatch(logout());
    setIsDropdownOpen(false);
    navigate('/');
  };

  // --------------------------------------------------
  // Profile image fallback
  // --------------------------------------------------
  const profileImage = user?.picture;

  return (
    <nav
      className={`
        fixed
        top-0
        right-0
        left-0
        lg:left-[230px]
        z-40
        ${theme.colors.card}
        border-b
        ${theme.colors.border}
        backdrop-blur-xl
        bg-opacity-95
      `}
    >
      <div className="w-full">
        <div
          className="
            h-16
            sm:h-[68px]
            px-3
            sm:px-4
            md:px-6
            flex
            items-center
            justify-between
            gap-3
          "
        >
          {/* =====================================================
              LEFT SECTION
          ====================================================== */}
          <div className="flex items-center min-w-0 gap-2 sm:gap-3">
            {/* Sidebar Toggle */}
            <button
              type="button"
              onClick={onToggleSidebar}
              aria-label="Toggle sidebar"
              aria-expanded={isSidebarOpen}
              className={`
                flex
                items-center
                justify-center
                shrink-0
                w-9
                h-9
                sm:w-10
                sm:h-10
                rounded-xl
                ${theme.colors.hover}
                transition-all
                duration-200
                active:scale-95
              `}
            >
              {isSidebarOpen ? (
                <FaTimes
                  className={`${theme.colors.text} text-base sm:text-lg`}
                />
              ) : (
                <FaBars
                  className={`${theme.colors.text} text-base sm:text-lg`}
                />
              )}
            </button>

            {/* Brand */}
            <Link
              to="/dashboard"
              className="
                flex
                items-center
                gap-2
                min-w-0
                group
              "
            >
              {/* Desktop Logo */}
              <span
                className={`
                  hidden
                  xs:inline
                  sm:inline
                  text-lg
                  sm:text-xl
                  md:text-2xl
                  font-extrabold
                  tracking-tight
                  whitespace-nowrap
                  ${theme.colors.text}
                `}
              >
                Invoice
                <span
                  className={`
                    bg-gradient-to-r
                    ${theme.colors.gradient}
                    text-transparent
                    bg-clip-text
                  `}
                >
                  Pro
                </span>
              </span>

              {/* Mobile Logo */}
              <span
                className={`
                  sm:hidden
                  text-base
                  font-extrabold
                  ${theme.colors.text}
                `}
              >
                IP
              </span>

              {/* Online indicator */}
              <span
                className="
                  hidden
                  sm:block
                  w-2
                  h-2
                  rounded-full
                  bg-green-500
                  animate-pulse
                  shrink-0
                "
                title="Online"
              />
            </Link>
          </div>

          {/* =====================================================
              RIGHT SECTION
          ====================================================== */}
          <div className="flex items-center gap-1 sm:gap-2 md:gap-3 shrink-0">
            {/* Theme Switcher */}
            <div className="flex items-center justify-center">
              <ThemeSwitcher />
            </div>

            {/* =================================================
                USER PROFILE
            ================================================== */}
            <div
              ref={dropdownRef}
              className="relative"
            >
              <button
                type="button"
                onClick={() => setIsDropdownOpen((prev) => !prev)}
                aria-label="Open user menu"
                aria-expanded={isDropdownOpen}
                className={`
                  flex
                  items-center
                  gap-2
                  p-1
                  sm:p-1.5
                  rounded-xl
                  ${theme.colors.hover}
                  transition-all
                  duration-200
                  active:scale-[0.98]
                `}
              >
                {/* Avatar */}
                <div className="relative shrink-0">
                  {profileImage ? (
                    <img
                      src={profileImage}
                      alt={user?.name || 'User'}
                      className="
                        w-9
                        h-9
                        sm:w-10
                        sm:h-10
                        rounded-full
                        object-cover
                        border-2
                        border-white
                        dark:border-gray-700
                        shadow-sm
                      "
                      onError={(e) => {
                        e.currentTarget.style.display = 'none';
                        e.currentTarget.nextSibling.style.display = 'flex';
                      }}
                    />
                  ) : null}

                  {/* Fallback avatar */}
                  <div
                    className={`
                      ${profileImage ? 'hidden' : 'flex'}
                      items-center
                      justify-center
                      w-9
                      h-9
                      sm:w-10
                      sm:h-10
                      rounded-full
                      ${theme.colors.background}
                      border
                      ${theme.colors.border}
                    `}
                  >
                    <FaUserCircle
                      className={`${theme.colors.text} text-2xl`}
                    />
                  </div>

                  {/* Online status */}
                  <span
                    className="
                      absolute
                      bottom-0
                      right-0
                      w-2.5
                      h-2.5
                      rounded-full
                      bg-green-500
                      border-2
                      border-white
                      dark:border-gray-800
                    "
                  />
                </div>

                {/* User info */}
                <div className="hidden md:block text-left max-w-[150px] lg:max-w-[180px]">
                  <p
                    className={`
                      ${theme.colors.text}
                      font-semibold
                      text-sm
                      truncate
                    `}
                  >
                    {user?.name || 'User'}
                  </p>

                  <p
                    className={`
                      ${theme.colors.text}
                      opacity-50
                      text-[11px]
                      capitalize
                      truncate
                    `}
                  >
                    {user?.role || 'User'}
                  </p>
                </div>

                {/* Chevron */}
                <FaChevronDown
                  className={`
                    hidden
                    sm:block
                    ${theme.colors.text}
                    opacity-40
                    text-xs
                    transition-transform
                    duration-200
                    ${isDropdownOpen ? 'rotate-180' : ''}
                  `}
                />
              </button>

              {/* =================================================
                  DROPDOWN
              ================================================== */}
              {isDropdownOpen && (
                <div
                  className={`
                    absolute
                    right-0
                    top-full
                    mt-2
                    w-[calc(100vw-24px)]
                    max-w-[320px]
                    sm:w-72
                    ${theme.colors.card}
                    border
                    ${theme.colors.border}
                    rounded-2xl
                    shadow-2xl
                    overflow-hidden
                    z-50
                    animate-slideDown
                  `}
                >
                  {/* Profile Header */}
                  <div
                    className={`
                      p-4
                      border-b
                      ${theme.colors.border}
                    `}
                  >
                    <div className="flex items-center gap-3 min-w-0">
                      <div className="relative shrink-0">
                        {profileImage ? (
                          <img
                            src={profileImage}
                            alt={user?.name || 'User'}
                            className="
                              w-11
                              h-11
                              rounded-full
                              object-cover
                              border-2
                              border-white
                              dark:border-gray-700
                            "
                          />
                        ) : (
                          <div
                            className={`
                              w-11
                              h-11
                              rounded-full
                              flex
                              items-center
                              justify-center
                              ${theme.colors.background}
                            `}
                          >
                            <FaUserCircle
                              className={`${theme.colors.text} text-3xl`}
                            />
                          </div>
                        )}

                        <span
                          className="
                            absolute
                            bottom-0
                            right-0
                            w-2.5
                            h-2.5
                            bg-green-500
                            border-2
                            border-white
                            dark:border-gray-800
                            rounded-full
                          "
                        />
                      </div>

                      <div className="min-w-0">
                        <p
                          className={`
                            text-sm
                            font-semibold
                            ${theme.colors.text}
                            truncate
                          `}
                        >
                          {user?.name || 'User'}
                        </p>

                        <p
                          className={`
                            text-xs
                            ${theme.colors.text}
                            opacity-60
                            truncate
                          `}
                        >
                          {user?.email || 'user@example.com'}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Menu */}
                  <div className="p-1.5">
                    <DropdownLink
                      to="/dashboard"
                      icon="📊"
                      label="Dashboard"
                      theme={theme}
                      onClick={() => setIsDropdownOpen(false)}
                    />

                    <DropdownLink
                      to="/personaldata"
                      icon={<CgProfile />}
                      label="Profile"
                      theme={theme}
                      onClick={() => setIsDropdownOpen(false)}
                    />

                    <DropdownLink
                      to="/invoices"
                      icon="📄"
                      label="Invoices"
                      theme={theme}
                      onClick={() => setIsDropdownOpen(false)}
                    />

                    <DropdownLink
                      to="/create-invoice"
                      icon="➕"
                      label="Create Invoice"
                      theme={theme}
                      onClick={() => setIsDropdownOpen(false)}
                    />

                    <DropdownLink
                      to="/settings"
                      icon="⚙️"
                      label="Settings"
                      theme={theme}
                      onClick={() => setIsDropdownOpen(false)}
                    />

                    <div
                      className={`
                        h-px
                        ${theme.colors.border}
                        my-1
                      `}
                    />

                    {/* Logout */}
                    <button
                      type="button"
                      onClick={handleLogout}
                      className="
                        w-full
                        flex
                        items-center
                        gap-3
                        px-3
                        py-2.5
                        rounded-xl
                        text-sm
                        text-red-600
                        hover:bg-red-50
                        dark:hover:bg-red-900/20
                        transition-colors
                      "
                    >
                      <FaSignOutAlt className="text-base" />
                      <span>Sign Out</span>
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

/* ============================================================
   DROPDOWN LINK COMPONENT
============================================================ */

const DropdownLink = ({
  to,
  icon,
  label,
  theme,
  onClick,
}) => {
  return (
    <Link
      to={to}
      onClick={onClick}
      className={`
        flex
        items-center
        gap-3
        px-3
        py-2.5
        rounded-xl
        text-sm
        ${theme.colors.text}
        ${theme.colors.hover}
        transition-colors
        duration-150
      `}
    >
      <span className="w-5 text-center text-base shrink-0">
        {icon}
      </span>

      <span className="truncate">
        {label}
      </span>
    </Link>
  );
};

export default Navbar;
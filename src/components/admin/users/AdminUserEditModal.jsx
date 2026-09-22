// frontend/src/components/admin/users/AdminUserEditModal.jsx
import React, { useEffect } from 'react';
import {
  FaTimes,
  FaSpinner,
  FaUser,
  FaEnvelope,
  FaShieldAlt,
  FaCreditCard,
  FaToggleOn,
  FaSave,
} from 'react-icons/fa';
import { useTheme } from '../../../themes/ThemeProvider';
import { useSelector } from 'react-redux';

const AdminUserEditModal = ({
  isOpen,
  onClose,
  selectedUser,
  setSelectedUser,
  onSubmit,
  loading = false,
}) => {
  const { theme } = useTheme();
  
const { user } = useSelector((state) => state.auth);

const currentUserRole = user?.role || 'user';

const canManageAdmin = ['admin', 'super_admin'].includes(currentUserRole);
const canManageSuperAdmin = currentUserRole === 'super_admin';
  // Prevent background scrolling while modal is open
  useEffect(() => {
    if (!isOpen) return;

    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    return () => {
      document.body.style.overflow = originalOverflow;
    };
  }, [isOpen]);

  if (!isOpen || !selectedUser) return null;

  const inputClass = `
    w-full
    px-3.5
    py-2.5
    rounded-xl
    border
    ${theme.colors.border}
    ${theme.colors.text}
    ${theme.colors.card}
    placeholder:opacity-40
    focus:outline-none
    focus:ring-2
    focus:ring-primary-500/30
    focus:border-primary-500
    transition-all
    text-sm
  `;

  const selectClass = `
    w-full
    px-3.5
    py-2.5
    rounded-xl
    border
    ${theme.colors.border}
    ${theme.colors.text}
    ${theme.colors.card}
    focus:outline-none
    focus:ring-2
    focus:ring-primary-500/30
    focus:border-primary-500
    transition-all
    text-sm
    cursor-pointer
  `;

  const labelClass = `
    block
    text-sm
    font-medium
    ${theme.colors.text}
    mb-1.5
  `;

  const updateUser = (updates) => {
    setSelectedUser({
      ...selectedUser,
      ...updates,
    });
  };

  const updateSubscription = (updates) => {
    setSelectedUser({
      ...selectedUser,
      subscription: {
        ...(selectedUser.subscription || {}),
        ...updates,
      },
    });
  };

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center p-3 sm:p-4"
      role="dialog"
      aria-modal="true"
      aria-labelledby="edit-user-title"
    >
      {/* Overlay */}
      <div
        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* Modal */}
      <div
        className={`
          relative
          w-full
          max-w-lg
          max-h-[92vh]
          sm:max-h-[90vh]
          ${theme.colors.card}
          rounded-2xl
          sm:rounded-3xl
          border
          ${theme.colors.border}
          shadow-2xl
          overflow-hidden
          flex
          flex-col
          animate-[fadeIn_.2s_ease-out]
        `}
      >
        {/* Header */}
        <div
          className={`
            flex
            items-center
            justify-between
            gap-3
            px-4
            sm:px-6
            py-4
            border-b
            ${theme.colors.border}
            shrink-0
          `}
        >
          <div className="flex items-center gap-3 min-w-0">
            <div
              className={`
                w-10
                h-10
                rounded-xl
                ${theme.colors.background}
                flex
                items-center
                justify-center
                shrink-0
              `}
            >
              <FaUser className={`${theme.colors.primary} text-lg`} />
            </div>

            <div className="min-w-0">
              <h2
                id="edit-user-title"
                className={`text-base sm:text-lg font-bold ${theme.colors.text} truncate`}
              >
                Edit User
              </h2>

              <p
                className={`text-xs ${theme.colors.text} opacity-50 truncate`}
              >
                Update user account details
              </p>
            </div>
          </div>

          <button
            type="button"
            onClick={onClose}
            disabled={loading}
            aria-label="Close modal"
            className={`
              w-9
              h-9
              rounded-xl
              flex
              items-center
              justify-center
              ${theme.colors.text}
              opacity-60
              hover:opacity-100
              hover:bg-red-50
              dark:hover:bg-red-900/20
              transition-all
              shrink-0
              disabled:opacity-30
            `}
          >
            <FaTimes />
          </button>
        </div>

        {/* Body */}
        <div className="overflow-y-auto flex-1 px-4 sm:px-6 py-5">
          <form id="edit-user-form" onSubmit={onSubmit}>
            <div className="space-y-4">

              {/* Name */}
              <div>
                <label className={labelClass}>
                  <span className="inline-flex items-center gap-2">
                    <FaUser className="text-xs opacity-60" />
                    Full Name
                  </span>
                </label>

                <input
                  type="text"
                  value={selectedUser.name || ''}
                  onChange={(e) =>
                    updateUser({ name: e.target.value })
                  }
                  placeholder="Enter full name"
                  className={inputClass}
                  disabled={loading}
                  autoComplete="name"
                />
              </div>

              {/* Email */}
              <div>
                <label className={labelClass}>
                  <span className="inline-flex items-center gap-2">
                    <FaEnvelope className="text-xs opacity-60" />
                    Email Address
                  </span>
                </label>

                <input
                  type="email"
                  value={selectedUser.email || ''}
                  onChange={(e) =>
                    updateUser({ email: e.target.value })
                  }
                  placeholder="Enter email address"
                  className={inputClass}
                  disabled={loading}
                  autoComplete="email"
                />
              </div>

              {/* Role + Plan */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">

                {/* Role */}
                <div>
                  <label className={labelClass}>
                    <span className="inline-flex items-center gap-2">
                      <FaShieldAlt className="text-xs opacity-60" />
                      Role
                    </span>
                  </label>

                  <select
  value={selectedUser.role || 'user'}
  onChange={(e) =>
    updateUser({ role: e.target.value })
  }
  className={selectClass}
  disabled={loading}
>
  {/* User - Everyone can select */}
  <option value="user">
    User
  </option>

  {/* Admin - Only Admin/Super Admin */}
  {canManageAdmin && (
    <option value="admin">
      Admin
    </option>
  )}

  {/* Super Admin - Only Super Admin */}
  {canManageSuperAdmin && (
    <option value="super_admin">
      Super Admin
    </option>
  )}
</select>
                </div>

                {/* Plan */}
                <div>
                  <label className={labelClass}>
                    <span className="inline-flex items-center gap-2">
                      <FaCreditCard className="text-xs opacity-60" />
                      Plan
                    </span>
                  </label>

                  <select
                    value={selectedUser.subscription?.plan || 'free'}
                    onChange={(e) =>
                      updateSubscription({
                        plan: e.target.value,
                      })
                    }
                    className={selectClass}
                    disabled={loading}
                  >
                    <option value="free">Free</option>
                    <option value="basic">Basic</option>
                    <option value="pro">Pro</option>
                    <option value="enterprise">Enterprise</option>
                  </select>
                </div>
              </div>

              {/* Subscription Status */}
              <div>
                <label className={labelClass}>
                  <span className="inline-flex items-center gap-2">
                    <FaCreditCard className="text-xs opacity-60" />
                    Subscription Status
                  </span>
                </label>

                <select
                  value={
                    selectedUser.subscription?.status || 'inactive'
                  }
                  onChange={(e) =>
                    updateSubscription({
                      status: e.target.value,
                    })
                  }
                  className={selectClass}
                  disabled={loading}
                >
                  <option value="inactive">Inactive</option>
                  <option value="active">Active</option>
                  <option value="expired">Expired</option>
                  <option value="cancelled">Cancelled</option>
                </select>
              </div>

              {/* Account Status */}
              <div>
                <label className={labelClass}>
                  <span className="inline-flex items-center gap-2">
                    <FaToggleOn className="text-xs opacity-60" />
                    Account Status
                  </span>
                </label>

                <select
                  value={selectedUser.isActive ? 'true' : 'false'}
                  onChange={(e) =>
                    updateUser({
                      isActive: e.target.value === 'true',
                    })
                  }
                  className={selectClass}
                  disabled={loading}
                >
                  <option value="true">Active</option>
                  <option value="false">Inactive</option>
                </select>
              </div>

              {/* User Summary */}
              <div
                className={`
                  mt-2
                  p-3.5
                  rounded-xl
                  ${theme.colors.background}
                  border
                  ${theme.colors.border}
                `}
              >
                <p
                  className={`text-xs font-semibold ${theme.colors.text} opacity-60 uppercase tracking-wide mb-2`}
                >
                  Current Account
                </p>

                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <p
                      className={`text-[11px] ${theme.colors.text} opacity-50`}
                    >
                      User ID
                    </p>
                    <p
                      className={`text-xs font-mono ${theme.colors.text} truncate`}
                      title={selectedUser._id}
                    >
                      {selectedUser._id
                        ? `#${selectedUser._id.slice(-8)}`
                        : 'N/A'}
                    </p>
                  </div>

                  <div>
                    <p
                      className={`text-[11px] ${theme.colors.text} opacity-50`}
                    >
                      Status
                    </p>
                    <p
                      className={`text-xs font-medium ${
                        selectedUser.isActive
                          ? 'text-green-500'
                          : 'text-red-500'
                      }`}
                    >
                      {selectedUser.isActive
                        ? 'Active'
                        : 'Inactive'}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </form>
        </div>

        {/* Footer */}
        <div
          className={`
            shrink-0
            px-4
            sm:px-6
            py-3.5
            border-t
            ${theme.colors.border}
            ${theme.colors.card}
          `}
        >
          <div className="flex flex-col-reverse sm:flex-row sm:justify-end gap-2.5">
            <button
              type="button"
              onClick={onClose}
              disabled={loading}
              className={`
                w-full
                sm:w-auto
                px-5
                py-2.5
                rounded-xl
                border
                ${theme.colors.border}
                ${theme.colors.text}
                hover:${theme.colors.hover}
                transition-all
                text-sm
                font-medium
                disabled:opacity-50
                disabled:cursor-not-allowed
              `}
            >
              Cancel
            </button>

            <button
              type="submit"
              form="edit-user-form"
              disabled={loading}
              className={`
                w-full
                sm:w-auto
                px-5
                py-2.5
                rounded-xl
                ${theme.colors.button}
                text-white
                flex
                items-center
                justify-center
                gap-2
                transition-all
                text-sm
                font-semibold
                shadow-sm
                hover:scale-[1.02]
                active:scale-[0.98]
                disabled:opacity-60
                disabled:cursor-not-allowed
                disabled:hover:scale-100
              `}
            >
              {loading ? (
                <>
                  <FaSpinner className="animate-spin" />
                  Saving...
                </>
              ) : (
                <>
                  <FaSave />
                  Save Changes
                </>
              )}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminUserEditModal;
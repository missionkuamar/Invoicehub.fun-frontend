// frontend/src/pages/admin/AdminUsers.jsx
import React, { useState, useEffect, useCallback } from 'react';
import { FaSpinner, FaUsers } from 'react-icons/fa';
import { useTheme } from '../../themes/ThemeProvider';
import api from '../../services/api';
import toast from 'react-hot-toast';

// Import components
import AdminUsersHeader from '../../components/admin/users/AdminUsersHeader';
import AdminUsersFilters from '../../components/admin/users/AdminUsersFilters';
import AdminUsersTable from '../../components/admin/users/AdminUsersTable';
import AdminUserEditModal from '../../components/admin/users/AdminUserEditModal';
import AdminUserDetailsModal from '../../components/admin/users/AdminUserDetailsModal';
import { useSelector } from 'react-redux';

const AdminUsers = () => {
  const { theme } = useTheme();
  const { user } = useSelector((state) => state.auth);
  const [users, setUsers] = useState([]);
 // console.log("user", user)
  const [loading, setLoading] = useState(true);

  const [pagination, setPagination] = useState({
    page: 1,
    limit: 10,
    total: 0,
    pages: 0,
  });

  const [filters, setFilters] = useState({
    search: '',
    role: '',
    subscription: '',
    status: '',
  });

  const [selectedUser, setSelectedUser] = useState(null);
  const [showEditModal, setShowEditModal] = useState(false);

  const [showDetailsModal, setShowDetailsModal] = useState(false);
  const [userDetails, setUserDetails] = useState(null);


  const handlePageChange = (page) => {
  setPagination((prev) => ({
    ...prev,
    page,
  }));
};

const handleLimitChange = (limit) => {
  setPagination((prev) => ({
    ...prev,
    page: 1,
    limit: Number(limit),
  }));
};


  // ============================================================
  // FETCH USERS
  // ============================================================

  const fetchUsers = useCallback(async () => {
    setLoading(true);

    try {
      const params = {
        page: pagination.page,
        limit: pagination.limit,
      };

      Object.entries(filters).forEach(([key, value]) => {
        if (value?.trim?.() || value) {
          params[key] = value;
        }
      });

      const response = await api.get('/admin/users', { params });

      const data = response.data?.data;

      setUsers(data?.users || []);

      setPagination((prev) => ({
        ...prev,
        ...(data?.pagination || {}),
      }));
    } catch (error) {
      toast.error(
        error.response?.data?.message ||
          error.message ||
          'Failed to load users'
      );
    } finally {
      setLoading(false);
    }
  }, [pagination.page, pagination.limit, filters]);

  useEffect(() => {
    fetchUsers();
  }, [fetchUsers]);

  // ============================================================
  // DELETE USER
  // ============================================================

  const handleDeleteUser = async (userId) => {
    const confirmed = window.confirm(
      'Are you sure you want to delete this user? All associated data will be lost.'
    );

    if (!confirmed) return;

    try {
      await api.delete(`/admin/users/${userId}`);

      toast.success('User deleted successfully');

      // If deleting last user on current page,
      // move back one page.
      if (users.length === 1 && pagination.page > 1) {
        setPagination((prev) => ({
          ...prev,
          page: prev.page - 1,
        }));
      } else {
        fetchUsers();
      }
    } catch (error) {
      toast.error(
        error.response?.data?.message ||
          'Failed to delete user'
      );
    }
  };

  // ============================================================
  // UPDATE USER
  // ============================================================

  const handleUpdateUser = async (e) => {
    e.preventDefault();

    if (!selectedUser?._id) return;

    try {
      await api.put(
        `/admin/users/${selectedUser._id}`,
        selectedUser
      );

      toast.success('User updated successfully');

      setShowEditModal(false);
      setSelectedUser(null);

      fetchUsers();
    } catch (error) {
      toast.error(
        error.response?.data?.message ||
          'Failed to update user'
      );
    }
  };

  // ============================================================
  // TOGGLE USER STATUS
  // ============================================================

  const handleToggleStatus = async (userId, currentStatus) => {
    try {
      const newStatus = !currentStatus;

      await api.put(`/admin/users/${userId}`, {
        isActive: newStatus,
      });

      toast.success(
        `User ${
          newStatus ? 'activated' : 'deactivated'
        } successfully`
      );

      fetchUsers();
    } catch (error) {
      toast.error(
        error.response?.data?.message ||
          'Failed to update user status'
      );
    }
  };

  // ============================================================
  // VIEW USER DETAILS
  // ============================================================

  const handleViewDetails = async (userId) => {
    try {
      const response = await api.get(
        `/admin/users/${userId}`
      );

      setUserDetails(response.data?.data || null);
      setShowDetailsModal(true);
    } catch (error) {
      toast.error(
        error.response?.data?.message ||
          'Failed to load user details'
      );
    }
  };

  // ============================================================
  // FILTERS
  // ============================================================

  const handleFilterChange = (key, value) => {
    setFilters((prev) => ({
      ...prev,
      [key]: value,
    }));

    setPagination((prev) => ({
      ...prev,
      page: 1,
    }));
  };

  const handleClearFilters = () => {
    setFilters({
      search: '',
      role: '',
      subscription: '',
      status: '',
    });

    setPagination((prev) => ({
      ...prev,
      page: 1,
    }));
  };

  // ============================================================
  // PAGINATION
  // ============================================================

  // const handlePageChange = (newPage) => {
  //   if (
  //     newPage < 1 ||
  //     (pagination.pages > 0 &&
  //       newPage > pagination.pages)
  //   ) {
  //     return;
  //   }

  //   setPagination((prev) => ({
  //     ...prev,
  //     page: newPage,
  //   }));
  // };

  // ============================================================
  // EDIT USER
  // ============================================================

  const handleEditUser = (user) => {
    setSelectedUser({
      ...user,
      subscription: user.subscription || {
        plan: 'free',
        status: 'inactive',
      },
    });

    setShowEditModal(true);
  };

  // ============================================================
  // INITIAL LOADING
  // ============================================================

  if (loading && users.length === 0) {
    return (
      <div
        className={`
          min-h-screen
          ${theme.colors.background}
          flex
          items-center
          justify-center
          p-4
        `}
      >
        <div
          className={`
            ${theme.colors.card}
            border ${theme.colors.border}
            rounded-2xl
            p-6 sm:p-8
            text-center
            w-full
            max-w-sm
          `}
        >
          <div
            className="
              w-14
              h-14
              mx-auto
              rounded-2xl
              bg-blue-500/10
              flex
              items-center
              justify-center
              mb-4
            "
          >
            <FaUsers
              className={`${theme.colors.primary} text-xl`}
            />
          </div>

          <FaSpinner
            className={`
              animate-spin
              text-2xl
              ${theme.colors.primary}
              mx-auto
              mb-3
            `}
          />

          <p
            className={`
              text-sm
              sm:text-base
              font-medium
              ${theme.colors.text}
            `}
          >
            Loading users...
          </p>

          <p
            className={`
              text-xs
              ${theme.colors.text}
              opacity-60
              mt-1
            `}
          >
            Please wait while we fetch the user data.
          </p>
        </div>
      </div>
    );
  }

  // ============================================================
  // PAGE
  // ============================================================

  return (
    <div
      className={`
        min-h-screen
        w-full
        ${theme.colors.background}
        p-3
        sm:p-4
        lg:p-6
        overflow-x-hidden
      `}
    >
      <div
        className="
          w-full
          max-w-7xl
          mx-auto
          space-y-4
          sm:space-y-5
          lg:space-y-6
        "
      >
        {/* Header */}
        <AdminUsersHeader
          totalUsers={pagination.total}
          onRefresh={fetchUsers}
          loading={loading}
        />

        {/* Filters */}
        <AdminUsersFilters
          filters={filters}
          onFilterChange={handleFilterChange}
          onClearFilters={handleClearFilters}
          usersCount={users.length}
        />

        {/* Table */}
        <div className="relative w-full min-w-0">
          <AdminUsersTable
  users={users}
  pagination={pagination}
  onPageChange={handlePageChange}
  onLimitChange={handleLimitChange}
  onViewDetails={handleViewDetails}
  onEditUser={handleEditUser}
  onToggleStatus={handleToggleStatus}
  onDeleteUser={handleDeleteUser}
/>

          {/* Loading Overlay */}
          {loading && users.length > 0 && (
            <div
              className="
                absolute
                inset-0
                z-10
                flex
                items-start
                justify-center
                pt-10
                pointer-events-none
              "
            >
              <div
                className="
                  flex
                  items-center
                  gap-2
                  px-4
                  py-2
                  rounded-xl
                  bg-black/5
                  dark:bg-white/10
                  backdrop-blur-sm
                "
              >
                <FaSpinner className="animate-spin text-sm" />

                <span
                  className={`
                    text-xs
                    ${theme.colors.text}
                  `}
                >
                  Updating...
                </span>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* ========================================================
          EDIT USER MODAL
      ======================================================== */}

      <AdminUserEditModal
        isOpen={showEditModal}
        onClose={() => {
          setShowEditModal(false);
          setSelectedUser(null);
        }}
        selectedUser={selectedUser}
        setSelectedUser={setSelectedUser}
        onSubmit={handleUpdateUser}
      />

      {/* ========================================================
          USER DETAILS MODAL
      ======================================================== */}

      <AdminUserDetailsModal
        isOpen={showDetailsModal}
        onClose={() => {
          setShowDetailsModal(false);
          setUserDetails(null);
        }}
        userDetails={userDetails}
      />
    </div>
  );
};

export default AdminUsers;
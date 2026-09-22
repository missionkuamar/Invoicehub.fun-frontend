// frontend/src/pages/AffiliateWithdrawals.jsx

import React, {
  useState,
  useEffect,
  useCallback,
} from 'react';

import { useNavigate } from 'react-router-dom';
import { useTheme } from '../themes/ThemeProvider';
import api from '../services/api';
import toast from 'react-hot-toast';
import { FaSpinner } from 'react-icons/fa';

// Components
import WithdrawalHeader from '../components/affiliate/WithdrawalHeader';
import WithdrawalStats from '../components/affiliate/WithdrawalStats';
import WithdrawalFilters from '../components/affiliate/WithdrawalFilters';
import WithdrawalTable from '../components/affiliate/WithdrawalTable';
import WithdrawModal from '../components/affiliate/WithdrawModal';
import WithdrawalDetailModal from '../components/affiliate/WithdrawalDetailModal';
import WithdrawalStatsModal from '../components/affiliate/WithdrawalStatsModal';

const AffiliateWithdrawals = () => {
  const navigate = useNavigate();
  const { theme } = useTheme();

  // ============================================================
  // LOADING STATES
  // ============================================================

  const [loading, setLoading] = useState(true);
  const [withdrawLoading, setWithdrawLoading] = useState(false);

  // ============================================================
  // DATA
  // ============================================================

  const [withdrawals, setWithdrawals] = useState([]);
  const [stats, setStats] = useState(null);
  const [withdrawStats, setWithdrawStats] = useState(null);
  const [earnings, setEarnings] = useState(0);

  // ============================================================
  // PAGINATION
  // ============================================================

  const [pagination, setPagination] = useState({
    page: 1,
    limit: 10,
    total: 0,
    pages: 0,
  });

  // ============================================================
  // FILTERS
  // ============================================================

  const [filters, setFilters] = useState({
    status: '',
    startDate: '',
    endDate: '',
    search: '',
    paymentMethod: '',
  });

  // ============================================================
  // MODALS
  // ============================================================

  const [showWithdrawModal, setShowWithdrawModal] =
    useState(false);

  const [showStatsModal, setShowStatsModal] =
    useState(false);

  const [showDetailModal, setShowDetailModal] =
    useState(false);

  // ============================================================
  // WITHDRAWAL FORM
  // ============================================================

  const [amount, setAmount] = useState('');
  const [paymentMethod, setPaymentMethod] =
    useState('bank');

  const [paymentDetails, setPaymentDetails] =
    useState({
      accountHolderName: '',
      bankName: '',
      accountNumber: '',
      ifscCode: '',
      accountType: 'savings',
      upiId: '',
      upiName: '',
      paypalEmail: '',
      paypalName: '',
    });

  const [selectedWithdrawal, setSelectedWithdrawal] =
    useState(null);

  // ============================================================
  // RESET PAYMENT DETAILS
  // ============================================================

  const resetPaymentDetails = () => {
    setPaymentDetails({
      accountHolderName: '',
      bankName: '',
      accountNumber: '',
      ifscCode: '',
      accountType: 'savings',
      upiId: '',
      upiName: '',
      paypalEmail: '',
      paypalName: '',
    });
  };

  // ============================================================
  // FETCH EARNINGS
  // ============================================================

  const fetchEarnings = useCallback(async () => {
    try {
      const response =
        await api.get('/affiliate/dashboard');

      const totalEarnings =
        response?.data?.data?.stats?.totalEarnings;

      setEarnings(
        Number(totalEarnings) || 0
      );
    } catch (error) {
      console.error(
        'Failed to fetch earnings:',
        error
      );

      toast.error(
        error.response?.data?.message ||
          'Failed to load earnings'
      );
    }
  }, []);

  // ============================================================
  // FETCH WITHDRAWAL STATS
  // ============================================================

  const fetchStats = useCallback(async () => {
    try {
      const response =
        await api.get(
          '/affiliate/withdrawals/stats'
        );

      setWithdrawStats(
        response?.data?.data || null
      );
    } catch (error) {
      console.error(
        'Failed to fetch withdrawal stats:',
        error
      );

      toast.error(
        error.response?.data?.message ||
          'Failed to load withdrawal stats'
      );
    }
  }, []);

  // ============================================================
  // FETCH WITHDRAWALS
  // ============================================================

  const fetchWithdrawals = useCallback(
    async () => {
      setLoading(true);

      try {
        const params = {
          page: pagination.page,
          limit: pagination.limit,
        };

        // Status
        if (filters.status) {
          params.status = filters.status;
        }

        // Payment method
        if (filters.paymentMethod) {
          params.paymentMethod =
            filters.paymentMethod;
        }

        // Search
        if (filters.search?.trim()) {
          params.search =
            filters.search.trim();
        }

        // Dates
        if (filters.startDate) {
          params.startDate =
            filters.startDate;
        }

        if (filters.endDate) {
          params.endDate =
            filters.endDate;
        }

        const response = await api.get(
          '/affiliate/withdrawals',
          {
            params,
          }
        );

        if (!response?.data?.success) {
          toast.error(
            response?.data?.message ||
              'Failed to load withdrawals'
          );

          return;
        }

        const data =
          response?.data?.data || {};

        setWithdrawals(
          Array.isArray(data.withdrawals)
            ? data.withdrawals
            : []
        );

        setStats(data.stats || null);

        // Preserve existing limit if API
        // doesn't return it.
        setPagination((prev) => ({
          ...prev,
          ...(data.pagination || {}),
          limit:
            data.pagination?.limit ||
            prev.limit,
        }));
      } catch (error) {
        console.error(
          'Fetch withdrawals error:',
          error
        );

        toast.error(
          error.response?.data?.message ||
            'Failed to load withdrawals'
        );
      } finally {
        setLoading(false);
      }
    },
    [
      pagination.page,
      pagination.limit,
      filters.status,
      filters.paymentMethod,
      filters.search,
      filters.startDate,
      filters.endDate,
    ]
  );

  // ============================================================
  // INITIAL / FILTER / PAGE LOAD
  // ============================================================

  useEffect(() => {
    fetchWithdrawals();
  }, [fetchWithdrawals]);

  useEffect(() => {
    fetchStats();
    fetchEarnings();
  }, [fetchStats, fetchEarnings]);

  // ============================================================
  // REFRESH ALL DATA
  // ============================================================

  const refreshAllData = async () => {
    await Promise.all([
      fetchWithdrawals(),
      fetchStats(),
      fetchEarnings(),
    ]);
  };

  // ============================================================
  // HANDLE WITHDRAW
  // ============================================================

  const handleWithdraw = async (e) => {
    e.preventDefault();

    const amountNum = Number(
      parseFloat(amount)
    );

    const MIN_WITHDRAWAL = 100;
    const MAX_WITHDRAWAL = 10000;

    // ----------------------------------------------------------
    // VALIDATION
    // ----------------------------------------------------------

    if (
      !Number.isFinite(amountNum) ||
      amountNum <= 0
    ) {
      toast.error(
        'Please enter a valid withdrawal amount'
      );
      return;
    }

    if (amountNum < MIN_WITHDRAWAL) {
      toast.error(
        `Minimum withdrawal is ₹${MIN_WITHDRAWAL}`
      );
      return;
    }

    if (amountNum > MAX_WITHDRAWAL) {
      toast.error(
        `Maximum per transaction is ₹${MAX_WITHDRAWAL}`
      );
      return;
    }

    if (amountNum > earnings) {
      toast.error(
        'Insufficient earnings'
      );
      return;
    }

    // ----------------------------------------------------------
    // SUBMIT
    // ----------------------------------------------------------

    setWithdrawLoading(true);

    try {
      const payload = {
        amount: amountNum,
        paymentMethod,
        paymentDetails,
      };

      const response = await api.post(
        '/affiliate/withdraw',
        payload
      );

      if (!response?.data?.success) {
        toast.error(
          response?.data?.message ||
            'Failed to request withdrawal'
        );
        return;
      }

      toast.success(
        'Withdrawal request submitted! Admin will process it shortly.'
      );

      // --------------------------------------------------------
      // RESET FORM
      // --------------------------------------------------------

      setShowWithdrawModal(false);
      setAmount('');
      resetPaymentDetails();

      // --------------------------------------------------------
      // REFRESH DATA
      // --------------------------------------------------------

      await refreshAllData();
    } catch (error) {
      console.error(
        'Withdrawal error:',
        error
      );

      toast.error(
        error.response?.data?.message ||
          'Failed to request withdrawal'
      );
    } finally {
      setWithdrawLoading(false);
    }
  };

  // ============================================================
  // CANCEL WITHDRAWAL
  // ============================================================

  const handleCancelWithdrawal = async (
    id
  ) => {
    if (!id) return;

    const confirmed = window.confirm(
      'Are you sure you want to cancel this withdrawal?'
    );

    if (!confirmed) return;

    try {
      const response = await api.post(
        `/affiliate/withdraw/${id}/cancel`
      );

      if (!response?.data?.success) {
        toast.error(
          response?.data?.message ||
            'Failed to cancel withdrawal'
        );
        return;
      }

      toast.success(
        'Withdrawal cancelled successfully'
      );

      await refreshAllData();
    } catch (error) {
      console.error(
        'Cancel withdrawal error:',
        error
      );

      toast.error(
        error.response?.data?.message ||
          'Failed to cancel withdrawal'
      );
    }
  };

  // ============================================================
  // VIEW DETAILS
  // ============================================================

  const handleViewDetails = (
    withdrawal
  ) => {
    setSelectedWithdrawal(
      withdrawal
    );

    setShowDetailModal(true);
  };

  // ============================================================
  // FILTER CHANGE
  // ============================================================

  const handleFilterChange = (
    newFilters
  ) => {
    setFilters({
      status: newFilters?.status || '',
      startDate:
        newFilters?.startDate || '',
      endDate:
        newFilters?.endDate || '',
      search:
        newFilters?.search || '',
      paymentMethod:
        newFilters?.paymentMethod || '',
    });

    // Filter change ke baad first page.
    setPagination((prev) => ({
      ...prev,
      page: 1,
    }));
  };

  // ============================================================
  // PAGE CHANGE
  // ============================================================

  const handlePageChange = (
    newPage
  ) => {
    const page = Number(newPage);

    if (!Number.isFinite(page)) {
      return;
    }

    if (
      page < 1 ||
      (pagination.pages > 0 &&
        page > pagination.pages)
    ) {
      return;
    }

    setPagination((prev) => ({
      ...prev,
      page,
    }));
  };

  // ============================================================
  // OPEN WITHDRAW MODAL
  // ============================================================

  const openWithdrawModal = () => {
    setShowWithdrawModal(true);
  };

  // ============================================================
  // INITIAL FULL PAGE LOADING
  // ============================================================

  if (
    loading &&
    withdrawals.length === 0
  ) {
    return (
      <div
        className={`
          min-h-screen
          w-full
          ${theme.colors.background}
          flex
          items-center
          justify-center
          px-4
        `}
      >
        <div className="text-center">
          <FaSpinner
            className={`
              animate-spin
              text-3xl
              sm:text-4xl
              ${theme.colors.primary}
              mx-auto
              mb-4
            `}
          />

          <p
            className={`
              text-sm
              sm:text-base
              ${theme.colors.text}
            `}
          >
            Loading withdrawals...
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
        min-w-0
        ${theme.colors.background}
        overflow-x-hidden
        px-3
        py-4
        sm:px-4
        sm:py-5
        md:px-6
        md:py-6
        lg:px-8
      `}
    >
      <div
        className="
          w-full
          max-w-7xl
          mx-auto
          min-w-0
          space-y-4
          sm:space-y-5
          md:space-y-6
        "
      >
        {/* ======================================================
            HEADER
        ====================================================== */}

        <div className="w-full min-w-0">
          <WithdrawalHeader
            onBack={() =>
              navigate('/affiliate')
            }
            onViewStats={() =>
              setShowStatsModal(true)
            }
            onWithdraw={
              openWithdrawModal
            }
            earnings={earnings}
          />
        </div>

        {/* ======================================================
            STATS
        ====================================================== */}

        <div className="w-full min-w-0">
          <WithdrawalStats
            withdrawStats={
              withdrawStats
            }
            withdrawals={
              withdrawals
            }
          />
        </div>

        {/* ======================================================
            FILTERS
        ====================================================== */}

        <div className="w-full min-w-0">
          <WithdrawalFilters
            filters={filters}
            onFilterChange={
              handleFilterChange
            }
          />
        </div>

        {/* ======================================================
            TABLE
        ====================================================== */}

        <div
          className="
            w-full
            min-w-0
            overflow-hidden
          "
        >
          <WithdrawalTable
            withdrawals={withdrawals}
            loading={loading}
            pagination={pagination}
            onPageChange={
              handlePageChange
            }
            onViewDetails={
              handleViewDetails
            }
            onCancel={
              handleCancelWithdrawal
            }
            onWithdraw={
              openWithdrawModal
            }
            earnings={earnings}
          />
        </div>
      </div>

      {/* ========================================================
          WITHDRAW MODAL
      ======================================================== */}

      <WithdrawModal
        isOpen={showWithdrawModal}
        onClose={() => {
          if (!withdrawLoading) {
            setShowWithdrawModal(false);
          }
        }}
        earnings={earnings}
        amount={amount}
        setAmount={setAmount}
        paymentMethod={
          paymentMethod
        }
        setPaymentMethod={
          setPaymentMethod
        }
        paymentDetails={
          paymentDetails
        }
        setPaymentDetails={
          setPaymentDetails
        }
        onSubmit={handleWithdraw}
        loading={withdrawLoading}
      />

      {/* ========================================================
          DETAIL MODAL
      ======================================================== */}

      <WithdrawalDetailModal
        isOpen={showDetailModal}
        onClose={() =>
          setShowDetailModal(false)
        }
        withdrawal={
          selectedWithdrawal
        }
      />

      {/* ========================================================
          STATS MODAL
      ======================================================== */}

      <WithdrawalStatsModal
        isOpen={showStatsModal}
        onClose={() =>
          setShowStatsModal(false)
        }
        withdrawals={
          withdrawals
        }
      />
    </div>
  );
};

export default AffiliateWithdrawals;
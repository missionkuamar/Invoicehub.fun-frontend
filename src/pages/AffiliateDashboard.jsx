// frontend/src/pages/AffiliateDashboard.jsx

import React, {
  useState,
  useEffect,
  useCallback,
  useRef,
} from 'react';

import { useNavigate } from 'react-router-dom';
import { FaSpinner } from 'react-icons/fa';

import { useTheme } from '../themes/ThemeProvider';
import api from '../services/api';
import toast from 'react-hot-toast';

// Components
import AffiliateHeader from '../components/affiliate/AffiliateHeader';
import AffiliateStats from '../components/affiliate/AffiliateStats';
import AffiliateCommission from '../components/affiliate/AffiliateCommission';
import AffiliateLinks from '../components/affiliate/AffiliateLinks';
import AffiliateReferrals from '../components/affiliate/AffiliateReferrals';
import AffiliateJoin from '../components/affiliate/AffiliateJoin';
import CreateLinkModal from '../components/affiliate/CreateLinkModal';


const DEFAULT_PAGINATION = {
  page: 1,
  limit: 10,
  total: 0,
  pages: 1,
  hasNextPage: false,
  hasPreviousPage: false,
};


const AffiliateDashboard = () => {
  const navigate = useNavigate();
  const { theme } = useTheme();

  // ============================================================
  // STATE
  // ============================================================

  const [loading, setLoading] = useState(true);

  const [affiliate, setAffiliate] = useState(null);

  const [stats, setStats] = useState(null);

  const [links, setLinks] = useState([]);

  const [linksPagination, setLinksPagination] = useState(
    DEFAULT_PAGINATION
  );

  const [referrals, setReferrals] = useState([]);

  const [earnings, setEarnings] = useState(0);

  const [withdrawals, setWithdrawals] = useState([]);

  const [showCreateLink, setShowCreateLink] = useState(false);

  const [showHistory, setShowHistory] = useState(false);

  const [isCreatingLink, setIsCreatingLink] = useState(false);

  const [newLink, setNewLink] = useState({
    name: '',
    destination: '',
    slug: '',
  });

  // Ref to prevent duplicate concurrent fetches
  const fetchingRef = useRef(false);


  // ============================================================
  // FETCH WITHDRAWALS
  // ============================================================

  const fetchWithdrawals = useCallback(async () => {
    try {
      const response = await api.get(
        '/affiliate/withdrawals'
      );

      setWithdrawals(
        response.data?.data?.withdrawals || []
      );
    } catch (error) {
      console.error(
        'Failed to fetch withdrawals:',
        error.response?.data?.message ||
        error.message
      );
    }
  }, []);


  // ============================================================
  // FETCH DASHBOARD
  // ============================================================

  const fetchDashboard = useCallback(async () => {
    // prevent duplicate concurrent calls
    if (fetchingRef.current) return;
    fetchingRef.current = true;

    setLoading(true);

    try {
      // console.log('API REQUEST:', {
      //   page: linksPagination.page,
      //   limit: linksPagination.limit,
      // });

      const response = await api.get('/affiliate/dashboard', {
        params: {
          linkPage: linksPagination.page,
          linkLimit: linksPagination.limit,
        },
      });

      const data = response.data?.data;

      if (!data) {
        throw new Error('Invalid affiliate dashboard response');
      }

     // console.log('API RESPONSE pagination:', data.linkPagination);
     // console.log('API RESPONSE links:', data.links);

      setAffiliate(data.affiliate || null);
      setStats(data.stats || null);
      setEarnings(data.stats?.totalEarnings || 0);
      setLinks(data.links || []);

      // ✅ FIX: backend sends `linkPagination` (with alias `linksPagination`)
      const pag =
        data.linkPagination ||
        data.linksPagination;

      if (pag) {
        setLinksPagination((prev) => ({
          ...prev,
          page: Number(pag.page) || 1,
          limit: Number(pag.limit) || prev.limit,
          total: Number(pag.total) || 0,
          pages: Number(pag.pages) || 1,
          hasNextPage: Boolean(pag.hasNextPage),
          hasPreviousPage: Boolean(pag.hasPreviousPage),
        }));
      }

      setReferrals(data.recentReferrals || []);

      if (data.affiliate) {
        fetchWithdrawals();
      }
    } catch (error) {
      if (error.response?.status === 404) {
        setAffiliate(null);
      } else {
        const message =
          error.response?.data?.message ||
          error.message ||
          'Failed to load affiliate dashboard';

        console.error('Affiliate dashboard error:', message);
        toast.error(message);
      }
    } finally {
      setLoading(false);
      fetchingRef.current = false;
    }
  }, [
    linksPagination.page,
    linksPagination.limit,
    fetchWithdrawals,
  ]);


  // ============================================================
  // INITIAL / PAGINATION LOAD
  // ============================================================

  useEffect(() => {
    fetchDashboard();
  }, [fetchDashboard]);


  // ============================================================
  // JOIN AFFILIATE
  // ============================================================

  const handleJoinAffiliate = async () => {
    try {
      await api.post('/affiliate/join');

      toast.success(
        'Joined affiliate program successfully!'
      );

      // Reset pagination to first page
      setLinksPagination((prev) => ({
        ...prev,
        page: 1,
      }));

      // If already on page 1, useEffect won't re-trigger,
      // so call manually.
      if (linksPagination.page === 1) {
        await fetchDashboard();
      }
    } catch (error) {
      const message =
        error.response?.data?.message ||
        'Failed to join affiliate program';

      console.error(message);
      toast.error(message);
    }
  };


  // ============================================================
  // PAGE CHANGE
  // ============================================================

  const handleLinkPageChange = (page) => {
    const newPage = Number(page);

    //console.log('PAGE CHANGE:', newPage);

    if (!Number.isInteger(newPage) || newPage < 1) {
      return;
    }

    setLinksPagination((prev) => {
      if (prev.page === newPage) return prev;

      return {
        ...prev,
        page: newPage,
      };
    });
  };


  // ============================================================
  // LIMIT CHANGE
  // ============================================================

  const handleLinkLimitChange = (limit) => {
    const newLimit = Number(limit);

   // console.log('LIMIT CHANGE:', newLimit);

    const allowedLimits = [5, 10, 20, 50, 100, 200];

    if (!allowedLimits.includes(newLimit)) {
      return;
    }

    setLinksPagination((prev) => {
      if (
        prev.limit === newLimit &&
        prev.page === 1
      ) {
        return prev;
      }

      return {
        ...prev,
        page: 1,
        limit: newLimit,
      };
    });
  };


  // ============================================================
  // CREATE AFFILIATE LINK
  // ============================================================

  const handleCreateLink = async (e) => {
    e.preventDefault();

    const name = newLink.name.trim();
    const destination = newLink.destination.trim();
    const slug = newLink.slug.trim();

    // Validation
    if (!name) {
      toast.error('Please enter a link name');
      return;
    }

    if (!destination) {
      toast.error('Please enter a destination URL');
      return;
    }

    setIsCreatingLink(true);

    try {
      await api.post('/affiliate/links', {
        name,
        destination,
        slug: slug || undefined,
      });

      // Reset form
      setNewLink({
        name: '',
        destination: '',
        slug: '',
      });

      // Close modal
      setShowCreateLink(false);

      // ✅ If already on page 1, useEffect won't re-trigger;
      //    call fetch manually. Otherwise changing page -> 1 will refetch.
      const wasOnFirstPage = linksPagination.page === 1;

      setLinksPagination((prev) => ({
        ...prev,
        page: 1,
      }));

      if (wasOnFirstPage) {
        await fetchDashboard();
      }

      toast.success('Affiliate link created successfully!');
    } catch (error) {
      const message =
        error.response?.data?.message ||
        'Failed to create affiliate link';

      console.error('Create affiliate link:', message);
      toast.error(message);
    } finally {
      setIsCreatingLink(false);
    }
  };


  // ============================================================
  // DELETE AFFILIATE LINK
  // ============================================================

  const handleDeleteLink = async (id) => {
    const confirmed = window.confirm(
      'Are you sure you want to delete this affiliate link?'
    );

    if (!confirmed) return;

    try {
      await api.delete(`/affiliate/links/${id}`);

      toast.success('Affiliate link deleted');

      // --------------------------------------------------------
      // If current page becomes empty after delete,
      // move to previous page.
      // --------------------------------------------------------

      const currentPage = linksPagination.page;
      const currentTotal = linksPagination.total;
      const currentLimit = linksPagination.limit;

      const remainingItems = Math.max(0, currentTotal - 1);

      const maxPageAfterDelete = Math.max(
        1,
        Math.ceil(remainingItems / currentLimit)
      );

      const nextPage = Math.min(
        currentPage,
        maxPageAfterDelete
      );

      const pageChanged = nextPage !== currentPage;

      setLinksPagination((prev) => ({
        ...prev,
        page: nextPage,
        total: remainingItems,
      }));

      // ✅ If page didn't change, refetch manually
      if (!pageChanged) {
        await fetchDashboard();
      }
    } catch (error) {
      const message =
        error.response?.data?.message ||
        'Failed to delete affiliate link';

      console.error('Delete affiliate link:', message);
      toast.error(message);
    }
  };


  // ============================================================
  // COPY AFFILIATE LINK
  // ============================================================

  const handleCopyLink = async (slug, code) => {
    try {
      const backendUrl =
        import.meta.env.VITE_API_URL ||
        'http://localhost:5000';

      const url = `${backendUrl}/r/${slug}?ref=${code}`;

      await navigator.clipboard.writeText(url);

      toast.success('Affiliate link copied!');
    } catch (error) {
      console.error('Copy failed:', error);
      toast.error('Failed to copy link');
    }
  };


  // ============================================================
  // LOADING
  // ============================================================

  if (loading) {
    return (
      <div
        className={`
          min-h-screen
          flex
          justify-center
          items-center
          ${theme.colors.background}
        `}
      >
        <div className="text-center">
          <FaSpinner
            className={`
              animate-spin
              text-4xl
              ${theme.colors.primary}
              mx-auto
              mb-4
            `}
          />

          <p className={theme.colors.text}>
            Loading dashboard...
          </p>
        </div>
      </div>
    );
  }


  // ============================================================
  // NOT AFFILIATE
  // ============================================================

  if (!affiliate) {
    return (
      <AffiliateJoin
        onJoin={handleJoinAffiliate}
        stats={stats}
      />
    );
  }


  // ============================================================
  // DASHBOARD
  // ============================================================

  return (
    <div
      className={`
        min-h-screen
        ${theme.colors.background}
        p-3
        md:p-6
      `}
    >
      <div
        className="
          max-w-7xl
          mx-auto
          space-y-4
          md:space-y-6
        "
      >

        {/* ================================================== */}
        {/* HEADER */}
        {/* ================================================== */}

        <AffiliateHeader
          affiliate={affiliate}
          onToggleHistory={() =>
            setShowHistory((prev) => !prev)
          }
          showHistory={showHistory}
          onWithdraw={() =>
            navigate('/affiliate/withdrawals')
          }
        />


        {/* ================================================== */}
        {/* STATS */}
        {/* ================================================== */}

        <AffiliateStats
          stats={stats}
          earnings={earnings}
        />


        {/* ================================================== */}
        {/* COMMISSION */}
        {/* ================================================== */}

        <AffiliateCommission affiliate={affiliate} />


        {/* ================================================== */}
        {/* WITHDRAWAL HISTORY */}
        {/* ================================================== */}

        {showHistory && (
          <AffiliateReferrals
            title="Withdrawal History"
            type="withdrawal"
            fetchUrl="/affiliate/withdrawals"
            onClose={() => setShowHistory(false)}
            availableStatuses={[
              { value: '', label: 'All' },
              { value: 'pending', label: 'Pending' },
              { value: 'approved', label: 'Approved' },
              { value: 'processing', label: 'Processing' },
              { value: 'completed', label: 'Completed' },
              { value: 'failed', label: 'Failed' },
              { value: 'cancelled', label: 'Cancelled' },
              { value: 'rejected', label: 'Rejected' },
            ]}
          />
        )}


        {/* ================================================== */}
        {/* AFFILIATE LINKS */}
        {/* ================================================== */}

        <AffiliateLinks
          links={links}
          affiliateCode={affiliate.affiliateCode}
          pagination={linksPagination}
          onPageChange={handleLinkPageChange}
          onLimitChange={handleLinkLimitChange}
          onCopyLink={handleCopyLink}
          onDeleteLink={handleDeleteLink}
          onCreateLink={() => setShowCreateLink(true)}
        />


        {/* ================================================== */}
        {/* RECENT REFERRALS */}
        {/* ================================================== */}

        {/* ================================================== */}
        {/* REFERRALS (full paginated) */}
        {/* ================================================== */}

        <AffiliateReferrals
          title="Referrals"
          type="referral"
          fetchUrl="/affiliate/referrals"
          availableStatuses={[
            { value: '', label: 'All' },
            { value: 'subscribed', label: 'Subscribed' },
            { value: 'registered', label: 'Registered' },
            { value: 'pending', label: 'Pending' },
            { value: 'approved', label: 'Approved' },

          ]}
        />


        {/* ================================================== */}
        {/* CREATE LINK MODAL */}
        {/* ================================================== */}

        <CreateLinkModal
          isOpen={showCreateLink}
          onClose={() => setShowCreateLink(false)}
          newLink={newLink}
          setNewLink={setNewLink}
          onSubmit={handleCreateLink}
          isCreating={isCreatingLink}
        />

      </div>
    </div>
  );
};


export default AffiliateDashboard;
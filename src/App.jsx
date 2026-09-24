// frontend/src/App.jsx
import React, { useEffect, useState } from 'react';
import { Routes, Route, Navigate, useLocation, useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { checkAuth } from './store/slices/authSlice';

// Import all your components
import Dashboard from './pages/Dashboard';
import Invoices from './pages/Invoices';
import SimpleInvoiceForm from './components/invoices/SimpleInvoiceForm';
import Settings from './pages/Settings';
import Login from './components/auth/Login';
import Register from './components/auth/Register';
import SubscriptionPlans from './components/subscription/SubscriptionPlans';
import PaymentSuccess from './components/subscription/PaymentSuccess';
import Layout from './components/common/Layout';
import AdminRoute from './components/common/AdminRoute';
import AdminDashboard from './pages/admin/AdminDashboard';
import AdminUsers from './pages/admin/AdminUsers';
import AdminUserDetails from './pages/admin/AdminUserDetails';
import AdminWithdrawals from './pages/admin/AdminWithdrawals';
import AdminNotifications from './pages/admin/AdminNotifications';
import AffiliateDashboard from './pages/AffiliateDashboard';
import AffiliateWithdrawals from './pages/AffiliateWithdrawals';
import Home from './components/homepage/Home';

// Import all invoice form components
import VintagePaperInvoiceForm from './components/invoices/forms/VintagePaperInvoiceForm';
import StandardInvoiceForm from './components/invoices/forms/StandardInvoiceForm';
import ModernInvoiceForm from './components/invoices/forms/ModernInvoiceForm';
import MinimalInvoiceForm from './components/invoices/forms/MinimalInvoiceForm';
import ProfessionalInvoiceForm from './components/invoices/forms/ProfessionalInvoiceForm';
import CreativeInvoiceForm from './components/invoices/forms/CreativeInvoiceForm';
import ElegantInvoiceForm from './components/invoices/forms/ElegantInvoiceForm';
import DarkLuxeInvoiceForm from './components/invoices/forms/DarkLuxeInvoiceForm';
import NatureGreenInvoiceForm from './components/invoices/forms/NatureGreenInvoiceForm';
import NeonGlowInvoiceForm from './components/invoices/forms/NeonGlowInvoiceForm';
import OceanBlueInvoiceForm from './components/invoices/forms/OceanBlueInvoiceForm';
import SunsetOrangeInvoiceForm from './components/invoices/forms/SunsetOrangeInvoiceForm';
import RoyalPurpleInvoiceForm from './components/invoices/forms/RoyalPurpleInvoiceForm';
import GlassmorphismInvoiceForm from './components/invoices/forms/GlassmorphismInvoiceForm';
import NordicMinimalInvoiceForm from './components/invoices/forms/NordicMinimalInvoiceForm';
import GradientWaveInvoiceForm from './components/invoices/forms/GradientWaveInvoiceForm';
import SimpleEmail from './components/email/SimpleEmail';

import ScheduledEmail from './components/email/ScheduledEmail';
import { PersonalData } from './components/common/PersonalData';
import PrivacyPolicy from './components/homepage/contact/PrivacyPolicy';
import TermsConditions from './components/homepage/contact/TermsConditions';
import RefundPolicy from './components/homepage/contact/RefundPolicy';

// ✅ Affiliate Redirect Component
// ✅ Affiliate Redirect Component
const AffiliateRedirect = () => {
  const { slug } = useParams();
  const location = useLocation();

  useEffect(() => {
    // ============================================================
    // 🔍 DEBUG: Component Mount Info
    // ============================================================
    // console.group('🔗 AffiliateRedirect Component Mounted');
    // console.log('📍 Current URL:', window.location.href);
    // console.log('📍 Pathname:', window.location.pathname);
    // console.log('📍 Search:', window.location.search);
    // console.log('📍 Hash:', window.location.hash);
    // console.log('📍 Slug (from useParams):', slug);
    // console.log('📍 Location object:', location);
    // console.log('📍 Backend URL from env:', import.meta.env.VITE_BACKEND_URL);
    // console.groupEnd();

    // ============================================================
    // 🔍 DEBUG: Parse ref from URL
    // ============================================================
    const params = new URLSearchParams(location.search);
    const ref = params.get('ref');

    // console.group('🎯 Ref Parsing');
    // console.log('📦 Raw search string:', location.search);
    // console.log('📦 URLSearchParams entries:', [...params.entries()]);
    // console.log('📦 Extracted ref:', ref);
    // console.log('📦 ref type:', typeof ref);
    // console.log('📦 ref is truthy?', !!ref);
    // console.groupEnd();

    // ============================================================
    // ✅ STEP 1: Save ref to localStorage
    // ============================================================
    if (ref) {
      console.group('💾 Saving to localStorage');
      // console.log('💾 Before save:', localStorage.getItem('affiliateRef'));
      
      try {
        localStorage.setItem('affiliateRef', ref);
        // console.log('✅ Saved successfully:', localStorage.getItem('affiliateRef'));
      } catch (err) {
        console.error('❌ localStorage save failed:', err);
      }
      
      // console.log('💾 All localStorage keys:', Object.keys(localStorage));
      // console.groupEnd();
    } else {
      console.warn('⚠️ No ref found in URL! Cannot save to localStorage.');
      console.warn('⚠️ URL should be like: /r/SLUG?ref=CODE');
      console.warn('⚠️ Current search:', location.search);
    }

    // ============================================================
    // ✅ STEP 2: Build redirect URL
    // ============================================================
    const backendUrl = 'https://invoicehub-fun-backend.onrender.com'
   // const backendUrl = import.meta.env.VITE_BACKEND_URL || 'http://localhost:5000';
    const redirectUrl = `${backendUrl}/r/${slug}${location.search}`;

    // console.group('🔄 Redirect Info');
    // console.log('🔄 Backend URL (from env):', import.meta.env.VITE_BACKEND_URL);
    // console.log('🔄 Fallback used?', !import.meta.env.VITE_BACKEND_URL);
    // console.log('🔄 Final backendUrl:', backendUrl);
    // console.log('🔄 Redirect URL:', redirectUrl);
    // console.groupEnd();

    // ============================================================
    // ✅ STEP 3: Redirect (with small delay for logs to appear)
    // ============================================================
    // console.log('🚀 Redirecting in 1 second... (so you can read logs)');
    
    const timer = setTimeout(() => {
      // console.log('🚀 NOW redirecting to:', redirectUrl);
      window.location.href = redirectUrl;
    }, 1000);  // 1 second delay

    // Cleanup
    return () => {
      // console.log('🧹 AffiliateRedirect unmounting, clearing timer');
      clearTimeout(timer);
    };
  }, [slug, location.search]);

  return (
    <div className="flex justify-center items-center h-64">
      <div className="text-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary-500 mx-auto mb-4"></div>
        <p className="text-gray-600">Redirecting...</p>
        <p className="text-xs text-gray-400 mt-2">
          Check console for debug logs...
        </p>
      </div>
    </div>
  );
};

// ✅ Protected Route Component
const ProtectedRoute = ({ children }) => {
  const { token, isAuthenticated } = useSelector((state) => state.auth);
  const location = useLocation();

  if (!token || !isAuthenticated) {
    return <Navigate to="/login" state={{ from: location.pathname }} replace />;
  }

  return children;
};

function App() {
  const dispatch = useDispatch();
  const { token, loading, isAuthenticated } = useSelector((state) => state.auth);
  const [authChecked, setAuthChecked] = useState(false);


  // ✅ Capture ref from ANY URL on app load
  // useEffect(() => {
  //   const params = new URLSearchParams(window.location.search);
  //   const ref = params.get('ref');
  //   if (ref) {
  //     localStorage.setItem('affiliateRef', ref);
  //     console.log('✅ Global ref captured:', ref);
  //   }
  // }, []);





  // ✅ Check auth on app mount - runs only once
  useEffect(() => {
    if (!authChecked) {
      dispatch(checkAuth()).finally(() => {
        setAuthChecked(true);
      });
    }
  }, [dispatch, authChecked]);

  // ✅ Show loading state while checking auth
  if (!authChecked || loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center">
          <div className="animate-spin rounded-full h-16 w-16 border-b-4 border-primary-500 mx-auto mb-4"></div>
          <p className="text-gray-600 font-medium">Loading...</p>
        </div>
      </div>
    );
  }

  // ✅ Determine if user is authenticated
  const isAuth = !!token && isAuthenticated;

  return (
    <Routes>
      {/* ============ PUBLIC ROUTES ============ */}

      {/* Landing Page */}
      <Route
        path="/"
        element={isAuth ? <Navigate to="/dashboard" replace /> : <Home />}
      />

      <Route
        path="/landing"
        element={isAuth ? <Navigate to="/dashboard" replace /> : <Home />}
      />
      <Route
        path="/privacy-policy"
        element={<PrivacyPolicy />}
      />

      <Route
        path="/terms"
        element={<TermsConditions />}
      />

      <Route
        path="/refund-policy"
        element={<RefundPolicy />}
      />
      {/* Auth Routes */}
      <Route
        path="/login"
        element={isAuth ? <Navigate to="/dashboard" replace /> : <Login />}
      />

      <Route
        path="/register"
        element={isAuth ? <Navigate to="/dashboard" replace /> : <Register />}
      />

      {/* Public Routes (always accessible) */}
      <Route path="/payment-success" element={<PaymentSuccess />} />
      <Route path="/r/:slug" element={<AffiliateRedirect />} />

      {/* ============ PROTECTED ROUTES (with Layout) ============ */}
      <Route
        element={
          <ProtectedRoute>
            <Layout />
          </ProtectedRoute>
        }
      >
        {/* Dashboard */}
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path='/personaldata' element={<PersonalData />} />
        {/* Invoices */}
        <Route path="/invoices" element={<Invoices />} />

        {/* Create Invoice Routes */}
        {/* <Route path="/create-invoice" element={<SimpleInvoiceForm type="standard" />} /> */}
        <Route path="/email-simple" element={<SimpleEmail />} />

        <Route path="/email-scheduled" element={<ScheduledEmail />} />


        {/* <Route path="/create-invoice/:type" element={<SimpleInvoiceForm />} /> */}



        <Route path="/create-invoice/simple" element={<SimpleInvoiceForm type="simple" />} />


        {/* <Route path="/create-invoice/minimal" element={<MinimalInvoiceForm type="minimal" />} />
        <Route path="/create-invoice/standard" element={<StandardInvoiceForm type="standard" />} />
        <Route path="/create-invoice/modern" element={<ModernInvoiceForm type="modern" />} />
        <Route path="/create-invoice/professional" element={<ProfessionalInvoiceForm type="professional" />} />
        <Route path="/create-invoice/creative" element={<CreativeInvoiceForm type="creative" />} />
        <Route path="/create-invoice/vintage" element={<VintagePaperInvoiceForm type="vintage" />} />
        <Route path="/create-invoice/elegant" element={<ElegantInvoiceForm type="elegant" />} />
        <Route path="/create-invoice/dark-luxe" element={<DarkLuxeInvoiceForm type="dark-luxe" />} />
        <Route path="/create-invoice/nature" element={<NatureGreenInvoiceForm type="nature" />} />
        <Route path="/create-invoice/neon-glow" element={<NeonGlowInvoiceForm type="neon-glow" />} />
        <Route path="/create-invoice/ocean" element={<OceanBlueInvoiceForm type="ocean" />} />
        <Route path="/create-invoice/sunset" element={<SunsetOrangeInvoiceForm type="sunset" />} />
        <Route path="/create-invoice/royal" element={<RoyalPurpleInvoiceForm type="royal" />} />
        <Route path="/create-invoice/glass" element={<GlassmorphismInvoiceForm type="glass" />} />
        <Route path="/create-invoice/nordic" element={<NordicMinimalInvoiceForm type="nordic" />} />
        <Route path="/create-invoice/wave" element={<GradientWaveInvoiceForm type="wave" />} /> */}

        {/* Settings & Subscription */}
        <Route path="/settings" element={<Settings />} />
        <Route path="/subscription" element={<SubscriptionPlans />} />

        {/* Affiliate Routes */}
        <Route path="/affiliate" element={<AffiliateDashboard />} />
        <Route path="/affiliate/withdrawals" element={<AffiliateWithdrawals />} />

        {/* Admin Routes */}
        <Route path="/admin/dashboard" element={<AdminDashboard />} />
        <Route path="/admin/users" element={<AdminUsers />} />
        <Route path="/admin/users/:id" element={<AdminUserDetails />} />
        <Route path="/admin/withdrawals" element={<AdminWithdrawals />} />
        <Route path="/admin/notifications" element={<AdminNotifications />} />
      </Route>

      {/* ============ 404 - Catch All ============ */}
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}

export default App;

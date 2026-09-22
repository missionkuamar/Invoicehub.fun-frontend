// frontend/src/components/auth/Login.jsx
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { FaArrowLeft } from 'react-icons/fa';
import { GoogleLogin } from '@react-oauth/google';
import { loginWithGoogle } from '../../store/slices/authSlice';
import { useTheme } from '../../themes/ThemeProvider';
import toast from 'react-hot-toast';
import ThemeSwitcher from '../homepage/ThemeSwitcher';

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { theme } = useTheme();
  const { loading } = useSelector((state) => state.auth);
  const [isLoggingIn, setIsLoggingIn] = useState(false);

  const handleGoogleSuccess = async (credentialResponse) => {
    setIsLoggingIn(true);
    try {
      await dispatch(loginWithGoogle(credentialResponse)).unwrap();
      navigate('/dashboard');
    } catch (error) {
      console.error('Google login error:', error);
    } finally {
      setIsLoggingIn(false);
    }
  };

  const handleGoogleError = () => {
    toast.error('Google login failed. Please try again.');
  };

  const handleGoBack = () => {
    navigate(-1);
  };

  // Loading state
  if (loading || isLoggingIn) {
    return (
      <div className={`min-h-screen flex items-center justify-center ${theme.colors.background} px-4`}>
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary-600 mx-auto mb-4"></div>
          <p className={`${theme.colors.text} opacity-70 text-sm sm:text-base`}>
            {isLoggingIn ? 'Authenticating with Google...' : 'Loading...'}
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className={`min-h-screen flex items-center justify-center p-4 relative ${theme.colors.background}`}>
      {/* Top Navigation Bar */}
      <div className="absolute top-0 left-0 right-0 p-3 sm:p-4 flex justify-between items-center">
        <button
          onClick={handleGoBack}
          className={`flex items-center gap-2 px-3 sm:px-4 py-2 rounded-xl ${theme.colors.card} border ${theme.colors.border} ${theme.colors.text} hover:${theme.colors.hover} transition-all`}
        >
          <FaArrowLeft className="text-xs sm:text-sm" />
          <span className="text-xs sm:text-sm font-medium">Back</span>
        </button>

        <div className="flex items-center gap-2 sm:gap-3">
          <ThemeSwitcher />
          <Link
            to="/"
            className={`px-3 sm:px-4 py-2 rounded-xl ${theme.colors.card} border ${theme.colors.border} ${theme.colors.text} hover:${theme.colors.hover} transition-all text-xs sm:text-sm font-medium`}
          >
            Home
          </Link>
        </div>
      </div>

      <div className="w-full max-w-md">
        <div className={`${theme.colors.card} rounded-2xl shadow-2xl p-6 sm:p-8 border ${theme.colors.border}`}>
          {/* Logo / Brand */}
          <div className="text-center mb-8">
            <div className="inline-flex items-center justify-center w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-gradient-to-r from-primary-500 to-primary-600 text-white text-2xl sm:text-3xl font-bold mb-4 shadow-lg">
              IP
            </div>
            <h1 className={`text-2xl sm:text-3xl font-bold ${theme.colors.text}`}>
              Invoice<span className={`bg-gradient-to-r ${theme.colors.gradient} text-transparent bg-clip-text`}>Pro</span>
            </h1>
            <p className={`${theme.colors.text} opacity-70 mt-2 text-sm sm:text-base`}>
              Sign in to your account
            </p>
          </div>

          {/* Google Login */}
          <div className="flex justify-center w-full">
            <GoogleLogin
              onSuccess={handleGoogleSuccess}
              onError={handleGoogleError}
              theme="filled_blue"
              size="large"
              text="continue_with"
              shape="rectangular"
              width="100%"
              useOneTap={false}
              auto_select={false}
            />
          </div>

          {/* Divider */}
          <div className="relative my-6">
            <div className="absolute inset-0 flex items-center">
              <div className={`w-full border-t ${theme.colors.border}`}></div>
            </div>
            <div className="relative flex justify-center text-xs sm:text-sm">
              <span className={`px-3 ${theme.colors.card} ${theme.colors.text} opacity-60`}>
                Secure authentication
              </span>
            </div>
          </div>

          {/* Info Box */}
          <div className={`rounded-xl p-4 border ${theme.colors.border} ${theme.colors.background}`}>
            <div className={`flex items-start gap-2 text-xs sm:text-sm ${theme.colors.text} opacity-80`}>
              <svg className="w-5 h-5 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
              </svg>
              <span>Your data is protected with Google OAuth 2.0</span>
            </div>
          </div>

          {/* Footer */}
          <p className={`text-center text-xs ${theme.colors.text} opacity-50 mt-6`}>
            By signing in, you agree to our Terms & Privacy Policy
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
// frontend/src/store/slices/authSlice.js
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import api from '../../services/api';
import toast from 'react-hot-toast';




export const loginWithGoogle = createAsyncThunk(
  'auth/loginWithGoogle',
  async (credentialResponse, { rejectWithValue }) => {
    try {
      // ============================================================
      // 🔍 DEBUG: Initial State
      // ============================================================
      // console.group('🚀 loginWithGoogle START');
      // console.log('📍 Current URL:', window.location.href);
      // console.log('📍 Credential received?', !!credentialResponse?.credential);
      // console.log('📍 Credential length:', credentialResponse?.credential?.length || 0);
      // console.log('📍 Credential preview:', credentialResponse?.credential?.substring(0, 30) + '...');
      // console.groupEnd();

      const { credential } = credentialResponse;

      // ============================================================
      // 🔍 DEBUG: localStorage Before Reading
      // ============================================================
      // console.group('💾 localStorage State BEFORE reading ref');
      // console.log('💾 affiliateRef:', localStorage.getItem('affiliateRef'));
      // console.log('💾 affiliateRef type:', typeof localStorage.getItem('affiliateRef'));
      // console.log('💾 All keys:', Object.keys(localStorage));
      // console.log('💾 Full dump:');
      Object.keys(localStorage).forEach((key) => {
        const value = localStorage.getItem(key);
        const preview = value?.length > 50 ? value.substring(0, 50) + '...' : value;
        // console.log(`   - ${key}: ${preview}`);
      });
      console.groupEnd();

      // ✅ STEP 1: Get ref from localStorage
      const ref = localStorage.getItem('affiliateRef') || '';
      
      // console.group('🎯 Ref Extraction');
      // console.log('🎯 Raw ref value:', localStorage.getItem('affiliateRef'));
      // console.log('🎯 Final ref (with fallback):', ref);
      // console.log('🎯 Ref is empty?', ref === '');
      // console.log('🎯 Ref length:', ref.length);
      if (!ref) {
        console.warn('⚠️ REF IS EMPTY! Affiliate tracking will NOT work.');
        console.warn('⚠️ Possible reasons:');
        console.warn('   1. User did not visit /r/SLUG?ref=CODE');
        console.warn('   2. AffiliateRedirect did not save to localStorage');
        console.warn('   3. localStorage was cleared');
        console.warn('   4. Different browser/tab used');
      }
      console.groupEnd();

      // console.log('🔗 Sending ref to backend:', ref);

      // ============================================================
      // 🔍 DEBUG: API Request
      // ============================================================
      const requestPayload = {
        credential: credential ? credential.substring(0, 30) + '...' : null,
        ref,
      };
      
      // console.group('📤 API Request');
      // console.log('📤 URL: /auth/google');
      // console.log('📤 Method: POST');
      // console.log('📤 Payload:', requestPayload);
      // console.log('📤 Ref in payload:', ref || '(empty)');
      // console.groupEnd();

      // ✅ STEP 2: Send credential + ref to backend
      const response = await api.post('/auth/google', {
        credential,
        ref,
      });

      // ============================================================
      // 🔍 DEBUG: API Response
      // // ============================================================
      // console.group('📥 API Response');
      // console.log('📥 Status:', response.status);
      // console.log('📥 Success:', response.data?.success);
      // console.log('📥 Message:', response.data?.message);
      // console.log('📥 Data:', response.data?.data);
      // console.log('📥 User:', {
      //   id: response.data?.data?._id,
      //   name: response.data?.data?.name,
      //   email: response.data?.data?.email,
      //   username: response.data?.data?.username,
      // });
      // console.groupEnd();

      const { data } = response.data;

      localStorage.setItem('token', data.token);
      localStorage.setItem('user', JSON.stringify(data));

      // console.group('💾 localStorage AFTER save');
      // console.log('💾 token saved:', !!localStorage.getItem('token'));
      // console.log('💾 user saved:', !!localStorage.getItem('user'));
      // console.log('💾 affiliateRef still there?:', localStorage.getItem('affiliateRef'));
      // console.log('💾 All keys:', Object.keys(localStorage));
      // console.groupEnd();

      // ✅ STEP 3: Clean up ref after successful registration
      if (response.data.message === 'Registration successful') {
        // console.group('🧹 Cleanup - Registration Successful');
        // console.log('🧹 Removing affiliateRef from localStorage');
        // console.log('🧹 Value before removal:', localStorage.getItem('affiliateRef'));
        
        localStorage.removeItem('affiliateRef');
        
        // console.log('🧹 Value after removal:', localStorage.getItem('affiliateRef'));
        // console.log('🧹 All keys after removal:', Object.keys(localStorage));
        // console.groupEnd();
        
        toast.success(`Welcome ${data.name}! Account created successfully.`);
      } else {
        // console.log('ℹ️ Existing user login, not removing affiliateRef');
        toast.success(`Welcome back ${data.name}!`);
      }

      // console.log('✅ loginWithGoogle SUCCESS');
      return data;
    } catch (error) {
      // ============================================================
      // 🔍 DEBUG: Error
      // ============================================================
      console.group('❌ loginWithGoogle FAILED');
      console.error('❌ Error:', error);
      console.error('❌ Error message:', error.message);
      console.error('❌ Error response:', error.response);
      console.error('❌ Error status:', error.response?.status);
      console.error('❌ Error data:', error.response?.data);
      console.error('❌ Error URL:', error.config?.url);
      console.error('❌ Error method:', error.config?.method);
      console.error('❌ Request payload:', error.config?.data);
      console.groupEnd();

      const errorMsg = error.response?.data?.message || 'Login failed. Please try again.';
      toast.error(errorMsg);
      return rejectWithValue(errorMsg);
    }
  }
);


// ✅ Login Thunk
export const login = createAsyncThunk(
  'auth/login',
  async (credentials, { rejectWithValue }) => {
    try {
      // console.log("credentials ", credentials);
      const response = await api.post('/auth/login', credentials);
      //console.log("login user data ", response);
      const { data } = response.data;
      localStorage.setItem('token', data.token);
      localStorage.setItem('user', JSON.stringify(data));
      return data;
    } catch (error) {
      return rejectWithValue(error.response?.data?.message || 'Login failed');
    }
  }
);

// ✅ Register Thunk
export const register = createAsyncThunk(
  'auth/register',
  async (userData, { rejectWithValue }) => {
    try {
      //   console.log('📤 API Call - Register with:', userData);
      const response = await api.post('/auth/register', {
        name: userData.name,
        email: userData.email,
        password: userData.password,
        ref: userData.ref || '',
      });
      // console.log('📥 API Response:', response.data);
      const { data } = response.data;
      localStorage.setItem('token', data.token);
      localStorage.setItem('user', JSON.stringify(data));
      return data;
    } catch (error) {
      //  console.error('Registration error:', error);
      return rejectWithValue(error.response?.data?.message || 'Registration failed');
    }
  }
);

// ✅ Get Profile Thunk
export const getProfile = createAsyncThunk(
  'auth/profile',
  async (_, { rejectWithValue }) => {
    try {
      const response = await api.get('/auth/profile');
      // console.log("getProfile response: ", response)
      return response.data.data;
    } catch (error) {
      return rejectWithValue(error.response?.data?.message || 'Failed to get profile');
    }
  }
);

// ✅ Update Profile Thunk
export const updateProfile = createAsyncThunk(
  'auth/updateProfile',
  async (data, { rejectWithValue }) => {
    try {
      const response = await api.put('/auth/profile', data);
      return response.data.data;
    } catch (error) {
      return rejectWithValue(error.response?.data?.message || 'Failed to update profile');
    }
  }
);

// ✅ CHECK AUTH - This was missing!
export const checkAuth = createAsyncThunk(
  'auth/checkAuth',
  async (_, { rejectWithValue }) => {
    try {
      const token = localStorage.getItem('token');
      if (!token) {
        return rejectWithValue('No token found');
      }

      // Set token in axios headers
      api.defaults.headers.common['Authorization'] = `Bearer ${token}`;

      const response = await api.get('/auth/profile');
      // console.log("checkAuth :", response);
      const userData = response.data.data;

      // Update localStorage
      localStorage.setItem('user', JSON.stringify(userData));

      return userData;
    } catch (error) {
      // Clear invalid token
      localStorage.removeItem('token');
      localStorage.removeItem('user');
      delete api.defaults.headers.common['Authorization'];
      return rejectWithValue(error.response?.data?.message || 'Auth check failed');
    }
  }
);

// ✅ Initial State
const initialState = {
  user: JSON.parse(localStorage.getItem('user')) || null,
  token: localStorage.getItem('token') || null,
  loading: false,
  error: null,
  isAuthenticated: !!localStorage.getItem('token'),
};

// ✅ Auth Slice
const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    logout: (state) => {
      state.user = null;
      state.token = null;
      state.isAuthenticated = false;
      localStorage.removeItem('token');
      localStorage.removeItem('user');
      delete api.defaults.headers.common['Authorization'];
    },
    clearError: (state) => {
      state.error = null;
    },
    setCredentials: (state, action) => {
      const { user, token } = action.payload;
      state.user = user;
      state.token = token;
      state.isAuthenticated = true;
      localStorage.setItem('token', token);
      localStorage.setItem('user', JSON.stringify(user));
      api.defaults.headers.common['Authorization'] = `Bearer ${token}`;
    },
  },
  extraReducers: (builder) => {
    builder
      // ============ LOGIN ============
      .addCase(loginWithGoogle.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(loginWithGoogle.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload;
        state.token = action.payload.token;
        state.isAuthenticated = true;
        state.error = null;
        api.defaults.headers.common['Authorization'] = `Bearer ${action.payload.token}`;
      })
      .addCase(loginWithGoogle.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
        state.isAuthenticated = false;
      })
      // ============ LOGIN ============
      .addCase(login.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(login.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload;
        state.token = action.payload.token;
        state.isAuthenticated = true;
        state.error = null;
        api.defaults.headers.common['Authorization'] = `Bearer ${action.payload.token}`;
      })
      .addCase(login.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
        state.isAuthenticated = false;
      })

      // ============ REGISTER ============
      .addCase(register.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(register.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload;
        state.token = action.payload.token;
        state.isAuthenticated = true;
        state.error = null;
        api.defaults.headers.common['Authorization'] = `Bearer ${action.payload.token}`;
      })
      .addCase(register.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
        state.isAuthenticated = false;
      })

      // ============ CHECK AUTH ============
      .addCase(checkAuth.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(checkAuth.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload;
        state.isAuthenticated = true;
        state.error = null;
      })
      .addCase(checkAuth.rejected, (state, action) => {
        state.loading = false;
        state.user = null;
        state.token = null;
        state.isAuthenticated = false;
        state.error = action.payload;
        localStorage.removeItem('token');
        localStorage.removeItem('user');
        delete api.defaults.headers.common['Authorization'];
      })

      // ============ GET PROFILE ============
      .addCase(getProfile.pending, (state) => {
        state.loading = true;
      })
      .addCase(getProfile.fulfilled, (state, action) => {
        state.loading = false;
        state.user = { ...state.user, ...action.payload };
        localStorage.setItem('user', JSON.stringify(state.user));
        state.isAuthenticated = true;
      })
      .addCase(getProfile.rejected, (state) => {
        state.loading = false;
        state.isAuthenticated = false;
      })

      // ============ UPDATE PROFILE ============
      .addCase(updateProfile.pending, (state) => {
        state.loading = true;
      })
      .addCase(updateProfile.fulfilled, (state, action) => {
        state.loading = false;
        state.user = { ...state.user, ...action.payload };
        localStorage.setItem('user', JSON.stringify(state.user));
      })
      .addCase(updateProfile.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export const { logout, clearError, setCredentials } = authSlice.actions;
export default authSlice.reducer;
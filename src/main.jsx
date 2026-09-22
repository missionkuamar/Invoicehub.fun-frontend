import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import App from './App';
import { store } from './store/store';
import './index.css';
import { ThemeProvider } from './themes/ThemeProvider';       
import { GoogleOAuthProvider } from '@react-oauth/google';

const GOOGLE_CLIENT_ID = import.meta.env.VITE_GOOGLE_CLIENT_ID || '15482745781-lu3ftl1j0pikh9ioe1sb0nhplnv9dnu8.apps.googleusercontent.com'
 
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <ThemeProvider>

    <Provider store={store}>

      <GoogleOAuthProvider clientId={GOOGLE_CLIENT_ID}>

      <BrowserRouter>
        <App />
        <Toaster position="top-right" />
      </BrowserRouter>
      </GoogleOAuthProvider>
    </Provider>
  </ThemeProvider>
  </React.StrictMode>
);
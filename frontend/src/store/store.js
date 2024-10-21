import { configureStore } from '@reduxjs/toolkit';
import authReducer from '../slices/authSlice';
import uiReducer from '../slices/uiSlice';

const preloadedState = {
  auth: {
    token: localStorage.getItem('token') || null,
    user: null,
    user_id:null,
    isLoggedIn: !!localStorage.getItem('token'),
    username: '',
    loading: false,
    error: null,
  },
  
  ui: {
    isCouponViewerOpen: false,
  },
};

const store = configureStore({
  reducer: {
    auth: authReducer,
    ui: uiReducer,
  },
  preloadedState,
});

export default store;
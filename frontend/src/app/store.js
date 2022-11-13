import { configureStore } from '@reduxjs/toolkit';
import authReducer from "../features/auth/admin/authSlice"

export const store = configureStore({
  reducer: {
    auth: authReducer
  },
});

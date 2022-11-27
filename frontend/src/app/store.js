import { configureStore } from '@reduxjs/toolkit';
import authReducer from "../features/auth/admin/authSlice"
import formReducer from '../features/forms/formSlice'

export const store = configureStore({
  reducer: {
    auth: authReducer,
    forms: formReducer
  },
});

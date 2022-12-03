import { configureStore } from '@reduxjs/toolkit';
import authReducer from "../features/auth/admin/authSlice"
import formReducer from '../features/forms/formSlice'
import usersReducer from '../features/users/usersSlice'

export const store = configureStore({
  reducer: {
    auth: authReducer,
    userResources: formReducer,
    adminResources: usersReducer
  },
});

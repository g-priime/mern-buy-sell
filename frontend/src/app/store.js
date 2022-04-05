import { configureStore } from '@reduxjs/toolkit';
import authReducer from '../features/auth/authSlice'
import goalReducer from '../features/goals/goalSlice'
import itemReducer from '../features/items/itemSlice'

export const store = configureStore({
  reducer: {
    auth: authReducer,
    goals: goalReducer,
    items: itemReducer,
  },
});

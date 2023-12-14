import invoiceReducer from '../services/invoiceSlice/invoiceSlice';
import { configureStore, createSlice } from "@reduxjs/toolkit";
import authReducer from '../services/authSlice/authSlice';

export const todoSlice = createSlice({
  name: "todo",
  initialState: [],
  reducers: {
    addTodo: (state, { payload }) => {
      state.push(payload);
    },
  },
});

export const store = configureStore({
  reducer: {
    [todoSlice.name]: todoSlice.reducer,
    auth: authReducer,
    invoice: invoiceReducer,
  },
});

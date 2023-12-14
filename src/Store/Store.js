import invoiceReducer from "../services/invoice-slice/invoice-slice";
import { configureStore, createSlice } from "@reduxjs/toolkit";
import authReducer from "../services/auth-slice/auth-slice";

export const todoSlice = createSlice({
  name: "invoices",
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

import invoiceReducer from "../services/InvoiceSlice/InvoiceSlice";
import { configureStore, createSlice } from "@reduxjs/toolkit";
import authReducer from "../services/AuthSlice/AuthSlice";

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

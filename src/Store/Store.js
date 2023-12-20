import invoiceReducer from "../services/InvoiceSlice/InvoiceSlice";
import authReducer from "../services/AuthSlice/AuthSlice";
import { configureStore } from "@reduxjs/toolkit";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    invoice: invoiceReducer,
  },
});

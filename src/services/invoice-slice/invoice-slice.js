import { createInvoice as createInvoiceService } from "../invoice-service/invoice-service";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const createNewInvoice = createAsyncThunk(
  "invoice/create",
  async (invoiceData, { rejectWithValue }) => {
    try {
      const response = await createInvoiceService(invoiceData);
      return response;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

const invoiceSlice = createSlice({
  name: "invoice",
  initialState: {
    invoice: null,
    error: null,
    isLoading: false,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(createNewInvoice.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(createNewInvoice.fulfilled, (state, action) => {
        state.invoice = action.payload;
        state.isLoading = false;
        state.error = null;
      })
      .addCase(createNewInvoice.rejected, (state, action) => {
        state.error = action.payload;
        state.isLoading = false;
      });
  },
});

export default invoiceSlice.reducer;

import { createInvoice, getInvoices, getOneInvoices } from "../InvoiceService/InvoiceService";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchInvoices = createAsyncThunk(
  "invoice/get",
  async (_, { rejectWithValue }) => {
    try {
      const data = await getInvoices();
      return data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

export const fetchOneInvoices = createAsyncThunk(
  "oneInvoice/get",
  async (id, { rejectWithValue }) => {
    try {
      const data = await getOneInvoices(id);
      return data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

export const createNewInvoice = createAsyncThunk(
  "invoice/create",
  async (invoiceData, { rejectWithValue }) => {
    try {
      const response = await createInvoice(invoiceData);
      return response;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

const invoiceSlice = createSlice({
  name: "invoice",
  initialState: {
    invoices: [],
    error: null,
    isLoading: false,
    oneInvoice: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(createNewInvoice.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(createNewInvoice.fulfilled, (state, action) => {
        state.invoices = action.payload;
        state.isLoading = false;
        state.error = null;
      })
      .addCase(createNewInvoice.rejected, (state, action) => {
        state.error = action.payload;
        state.isLoading = false;
      })
      .addCase(fetchInvoices.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchInvoices.fulfilled, (state, action) => {
        state.invoices = action.payload;
        state.isLoading = false;
        state.error = null;
      })
      .addCase(fetchInvoices.rejected, (state, action) => {
        state.error = action.payload;
        state.isLoading = false;
      })
      .addCase(fetchOneInvoices.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchOneInvoices.fulfilled, (state, action) => {
        state.oneInvoice = action.payload;
        state.isLoading = false;
        state.error = null;
      })
      .addCase(fetchOneInvoices.rejected, (state, action) => {
        state.error = action.payload;
        state.isLoading = false;
      });
  },
});

export default invoiceSlice.reducer;

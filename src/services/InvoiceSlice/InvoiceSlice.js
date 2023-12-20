import {
  createInvoice,
  getInvoices,
  getOneInvoices,
  deleteInvoice,
  patchInvoice,
} from "../InvoiceService/InvoiceService";
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
      console.log("response 2 =>", response);
      return response.data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const deleteInvoiceThunk = createAsyncThunk(
  "invoice/delete",
  async (id, { rejectWithValue }) => {
    try {
      const response = await deleteInvoice(id);
      return response;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const patchInvoiceThunk = createAsyncThunk(
  "invoice/patch",
  async (id, invoiceDate, { rejectWithValue }) => {
    console.log('invoiceDate patch slice =>', invoiceDate);
    try {
      const response = patchInvoice(id);
      return response;
    } catch (error) {
      console.log('error patch', error);
      return rejectWithValue(error);
    }
  }
);

const invoiceSlice = createSlice({
  name: "invoice",
  initialState: {
    invoices: [],
    status: null,
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
        console.log("payload =>", action.payload);
        state.invoices = [...state.invoices, action.payload];
        state.status = 201;
        state.isLoading = false;
        state.error = null;
      })
      .addCase(createNewInvoice.rejected, (state, action) => {
        state.error = action.payload.response.data;
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
      })
      .addCase(deleteInvoiceThunk.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(deleteInvoiceThunk.fulfilled, (state, action) => {
        console.log("payload =>", action.payload.status);
        state.status = action.payload.status;
        state.isLoading = false;
        state.error = null;
      })
      .addCase(deleteInvoiceThunk.rejected, (state, action) => {
        state.error = action.payload;
        state.isLoading = false;
      })
      .addCase(patchInvoiceThunk.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(patchInvoiceThunk.fulfilled, (state, action) => {
        console.log('patch action', action.payload);
        // state.invoices = action.payload;
        state.isLoading = false;
        state.error = null;
      })
      .addCase(patchInvoiceThunk.rejected, (state) => {
        state.isLoading = false;
        state.error = null;
      });
  },
});

export default invoiceSlice.reducer;

import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import {
  createInvoice,
  getInvoices,
  getOneInvoices,
  deleteInvoice,
  patchInvoice,
  putInvoice,
} from "../InvoiceService/InvoiceService";

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
  async (id, { rejectWithValue }) => {
    try {
      const response = await patchInvoice(id);
      return response;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const putInvoiceThunk = createAsyncThunk(
  "invoice/put",
  async ({ id, invoiceData, paid }, { rejectWithValue }) => {
    try {
      const response = await putInvoice(id, invoiceData, paid);
      return response;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const filterInvoice = createAsyncThunk(
  "invoice/filter",
  async (status, { rejectWithValue }) => {
    try {
      console.log("status =>", status);
      return status;
    } catch (error) {
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
  reducers: {
    // filterInvoice: (state, action) => {
    //   console.log(action.payload);
    //   switch (action.payload) {
    //     case "all":
    //       console.log("all =>", state.invoices);
    //       return state;
    //     case "pending":
    //       const result = state.invoices.filter((invoices) =>
    //         console.log("invoices", invoices)
    //       );
    //       console.log("result", result);
    //       return { ...state, invoices: result };
    //     default:
    //       return state;
    //   }
    // },
  },
  extraReducers: (builder) => {
    builder
      .addCase(createNewInvoice.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(createNewInvoice.fulfilled, (state, action) => {
        state.invoices = [...state.invoices, action.payload];
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
        state.oneInvoice = action.payload;
        state.isLoading = false;
        state.error = null;
      })
      .addCase(patchInvoiceThunk.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      .addCase(putInvoiceThunk.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(putInvoiceThunk.fulfilled, (state, action) => {
        state.oneInvoice = action.payload;
        state.isLoading = false;
        state.error = null;
      })
      .addCase(putInvoiceThunk.rejected, (state, action) => {
        state.error = action.payload;
        state.isLoading = false;
      })
      .addCase(filterInvoice.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(filterInvoice.fulfilled, (state, action) => {
        console.log("payload =>", action.payload);

        switch (action.payload) {
          case "all":
            return { ...state, isLoading: false };

          case "pending":
            const resultPending = state.invoices.filter(
              (invoice) => invoice.paid === false
            );
            console.log("result =>", resultPending);
            return { ...state, invoices: resultPending, isLoading: false };

          case "paid":
            const resultPaid = state.invoices.filter(
              (invoice) => invoice.paid === true
            );
            console.log("resultPaid =>", resultPaid);
            return { ...state, invoices: resultPaid, isLoading: false };

          default:
            console.log("Default case =>", action.payload);
            return { ...state, invoices: action.payload, isLoading: false };
        }
      })

      .addCase(filterInvoice.rejected, (state, action) => {
        console.error("Error in filterInvoice:", action.payload);
        state.error = action.payload;
        state.isLoading = false;
      });
  },
});

export default invoiceSlice.reducer;

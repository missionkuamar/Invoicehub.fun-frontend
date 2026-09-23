import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import api from '../../services/api';




export const fetchInvoices = createAsyncThunk(
  'invoices/fetchAll',
  async (overrideParams = {}, { rejectWithValue, getState }) => {
    try {
      const { invoices } = getState();

      // ✅ Merge filters + pagination + override params
      const params = {
        ...invoices.filters,
        page: invoices.pagination.page,
        limit: invoices.pagination.limit,
        ...overrideParams,   // override comes last — wins
      };

      // ✅ Remove empty / null values
      Object.keys(params).forEach((key) => {
        const val = params[key];
        if (val === '' || val === null || val === undefined) {
          delete params[key];
        }
      });

      const response = await api.get('/invoices', { params });

     // console.log(" total invoice response ", response);
      return response.data.data;
    } catch (error) {
      return rejectWithValue(error.response?.data?.message || 'Failed to fetch invoices');
    }
  }
);

export const createInvoice = createAsyncThunk(
  'invoices/create',
  async (invoiceData, { rejectWithValue }) => {
    try {
      const response = await api.post('/invoices', invoiceData);
      console.log(response);
      return response.data.data;
    } catch (error) {
      return rejectWithValue(error.response?.data?.message || 'Failed to create invoice');
    }
  }
);

export const updateInvoice = createAsyncThunk(
  'invoices/update',
  async ({ id, data }, { rejectWithValue }) => {
    try {
      const response = await api.put(`/invoices/${id}`, data);
      return response.data.data;
    } catch (error) {
      return rejectWithValue(error.response?.data?.message || 'Failed to update invoice');
    }
  }
);

export const deleteInvoice = createAsyncThunk(
  'invoices/delete',
  async (id, { rejectWithValue }) => {
    try {
      await api.delete(`/invoices/${id}`);
      return id;
    } catch (error) {
      return rejectWithValue(error.response?.data?.message || 'Failed to delete invoice');
    }
  }
);

export const fetchInvoiceById = createAsyncThunk(
  'invoices/fetchById',
  async (id, { rejectWithValue }) => {
    try {
      const response = await api.get(`/invoices/${id}`);
      return response.data.data;
    } catch (error) {
      return rejectWithValue(error.response?.data?.message || 'Failed to fetch invoice');
    }
  }
);


// ... saare createAsyncThunk same rahenge

const invoiceSlice = createSlice({
  name: 'invoices',
  initialState: {
    invoices: [],
    selectedInvoice: null,
    pagination: {
      page: 1,
      limit: 10,
      total: 0,
      pages: 0,
    },

     stats: {
    totalInvoices: 0,
    totalRevenue: 0,
    totalClients: 0,
  },


    loading: false,
    error: null,
    filters: {
      search: '',
      status: '',
      clientName: '',
      clientEmail: '',
      invoiceNumber: '',
      startDate: '',
      endDate: '',
      minAmount: '',
      maxAmount: '',
      sortBy: 'createdAt',
      sortOrder: 'desc',
    },
    searchCache: {},
    isOfflineSearch: false,

    // ✅ YE ADD KARO (initialState mein):
    ui: {
      showFilters: false,
    },
  },

  // ✅ SYNC REDUCERS — YAHAN DAALO (extraReducers mein nahi!)
  reducers: {
    setFilters: (state, action) => {
      state.filters = { ...state.filters, ...action.payload };
      state.pagination.page = 1;
    },
    clearFilters: (state) => {
      state.filters = {
        search: '',
        status: '',
        clientName: '',
        clientEmail: '',
        invoiceNumber: '',
        startDate: '',
        endDate: '',
        minAmount: '',
        maxAmount: '',
        sortBy: 'createdAt',
        sortOrder: 'desc',
      };
      state.pagination.page = 1;
    },
    setPage: (state, action) => {
      state.pagination.page = action.payload;
    },
    setLimit: (state, action) => {
      state.pagination.limit = action.payload;
      state.pagination.page = 1;
    },
    clearSelectedInvoice: (state) => {
      state.selectedInvoice = null;
    },
    setOfflineSearch: (state, action) => {
      state.isOfflineSearch = action.payload;
    },
    localSearch: (state, action) => {
      const { query } = action.payload;
      if (!query || query.trim() === '') {
        state.isOfflineSearch = false;
        return;
      }
      const searchTerm = query.toLowerCase().trim();
      const results = state.invoices.filter(invoice => {
        const searchableFields = [
          invoice.invoiceNumber,
          invoice.client?.name,
          invoice.client?.email,
          invoice.client?.phone,
        ];
        return searchableFields.some(field =>
          field && field.toLowerCase().includes(searchTerm)
        );
      });
      if (results.length > 0) {
        state.isOfflineSearch = true;
        state.invoices = results;
        state.pagination.total = results.length;
        state.pagination.pages = Math.ceil(results.length / state.pagination.limit);
      } else {
        state.isOfflineSearch = false;
      }
    },

    // ✅ YE YAHAN DAALO (reducers mein, extraReducers mein NAHI):
    toggleInvoiceFilters: (state) => {
      state.ui.showFilters = !state.ui.showFilters;
    },
    setInvoiceFiltersOpen: (state, action) => {
      state.ui.showFilters = action.payload;
    },
  },

  // ✅ ASYNC THUNKS — YAHAN (sirf addCase wale)
  extraReducers: (builder) => {
    builder
      .addCase(fetchInvoices.pending, (state) => {
        state.loading = true;
        state.error = null;
        state.isOfflineSearch = false;
      })
      .addCase(fetchInvoices.fulfilled, (state, action) => {
        state.loading = false;
        state.invoices = action.payload.invoices || [];

        // ✅ Merge pagination — safe defaults
        const p = action.payload.pagination || {};
        state.pagination = {
          page: p.page ?? state.pagination.page ?? 1,
          limit: p.limit ?? state.pagination.limit ?? 10,
          total: p.total ?? 0,
          pages: p.pages ?? Math.max(1, Math.ceil((p.total ?? 0) / (p.limit ?? 10))),
        };

            state.stats = {
    totalInvoices:
      action.payload.invoiceCount ?? 0,

    totalRevenue:
      action.payload.totalRevenue ?? 0,
      totalClients: action.payload.totalClients ?? 0,
  };

        state.isOfflineSearch = false;

        if (state.filters.search) {
          state.searchCache[state.filters.search] = action.payload;
        }
      })
      .addCase(fetchInvoices.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
        state.isOfflineSearch = false;
      })
      .addCase(fetchInvoiceById.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchInvoiceById.fulfilled, (state, action) => {
        state.loading = false;
        state.selectedInvoice = action.payload;
      })
      .addCase(fetchInvoiceById.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(createInvoice.fulfilled, (state, action) => {
        state.invoices.unshift(action.payload);
        state.pagination.total += 1;
        state.pagination.pages = Math.ceil(state.pagination.total / state.pagination.limit);
      })
      .addCase(updateInvoice.fulfilled, (state, action) => {
        const index = state.invoices.findIndex(
          inv => inv._id === action.payload._id
        );
        if (index !== -1) {
          state.invoices[index] = action.payload;
        }
        if (state.selectedInvoice?._id === action.payload._id) {
          state.selectedInvoice = action.payload;
        }
      })
      .addCase(deleteInvoice.fulfilled, (state, action) => {
        state.invoices = state.invoices.filter(
          inv => inv._id !== action.payload
        );
        state.pagination.total -= 1;
        state.pagination.pages = Math.ceil(state.pagination.total / state.pagination.limit);
        if (state.selectedInvoice?._id === action.payload) {
          state.selectedInvoice = null;
        }
      });
  },
});

// ✅ Exports — yahan bhi add karo
export const {
  setFilters,
  clearFilters,
  setPage,
  setLimit,
  clearSelectedInvoice,
  setOfflineSearch,
  localSearch,
  toggleInvoiceFilters,      // ✅ ADD
  setInvoiceFiltersOpen,     // ✅ ADD
} = invoiceSlice.actions;

export default invoiceSlice.reducer;
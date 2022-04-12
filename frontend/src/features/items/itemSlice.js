import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import itemService from "./itemService";

const initialState = {
  items: [],
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: "",
};

// create new item
export const createItem = createAsyncThunk(
  "items/create",
  async (itemData, thunkAPI) => {
    try {
      const token = thunkAPI.getState().auth.user.token;
      return await itemService.createItem(itemData, token);
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();
      return thunkAPI.rejectWithValue(message);
    }
  }
);

// Add buyer attribute to item
export const addBuyerToItem = createAsyncThunk(
  "items/addBuyer",
  async (id, thunkAPI) => {
    try {
      const token = thunkAPI.getState().auth.user.token;
      return await itemService.addBuyerToItem(id, token);
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();
      return thunkAPI.rejectWithValue(message);
    }
  }
);

// Make buyer attribute null for item
export const removeBuyerFromItem = createAsyncThunk(
  "items/removeBuyer",
  async (id, thunkAPI) => {
    try {
      const token = thunkAPI.getState().auth.user.token;
      return await itemService.removeBuyerFromItem(id, token);
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();
      return thunkAPI.rejectWithValue(message);
    }
  }
);

// Get user items
export const getItems = createAsyncThunk(
  "items/get",
  async (_, thunkAPI) => {
    try {
      const token = thunkAPI.getState().auth.user.token;
      return await itemService.getItems(token);
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();
      return thunkAPI.rejectWithValue(message);
    }
  }
);

// Get items for kart of currently logged in user
export const getKartItems = createAsyncThunk(
  "items/getKart",
  async (_, thunkAPI) => {
    try {
      const token = thunkAPI.getState().auth.user.token;
      return await itemService.getKartItems(token);
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();
      return thunkAPI.rejectWithValue(message);
    }
  }
);

// Get items not currently in any user karts
export const getAvailableItems = createAsyncThunk(
  "items/getAvailable",
  async (_, thunkAPI) => {
    try {
      const token = thunkAPI.getState().auth.user.token;
      return await itemService.getAvailableItems(token);
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();
      return thunkAPI.rejectWithValue(message);
    }
  }
);

// Get available items belonging to certain category
export const getCategoryItems = createAsyncThunk(
  "items/getCategory",
  async (category, thunkAPI) => {
    try {
      const token = thunkAPI.getState().auth.user.token;
      return await itemService.getCategoryItems(category, token);
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();
      return thunkAPI.rejectWithValue(message);
    }
  }
);

// Get items of all users
export const getAllItems = createAsyncThunk(
  "items/getAll",
  async (_, thunkAPI) => {
    try {
      const token = thunkAPI.getState().auth.user.token;
      return await itemService.getAllItems(token);
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();
      return thunkAPI.rejectWithValue(message);
    }
  }
);

// Delete user item
export const deleteItem = createAsyncThunk(
  "items/delete",
  async (id, thunkAPI) => {
    try {
      const token = thunkAPI.getState().auth.user.token;
      return await itemService.deleteItem(id, token);
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();
      return thunkAPI.rejectWithValue(message);
    }
  }
);

export const itemSlice = createSlice({
  name: "item",
  initialState,
  reducers: {
    reset: (state) => initialState,
  },
  extraReducers: (builder) => {
    builder
      .addCase(createItem.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(createItem.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.items.push(action.payload);
      })
      .addCase(createItem.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      })
      .addCase(getItems.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getItems.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.items = action.payload;
      })
      .addCase(getItems.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      })
      .addCase(getKartItems.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getKartItems.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.items = action.payload;
      })
      .addCase(getKartItems.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      })
      .addCase(getAvailableItems.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getAvailableItems.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.items = action.payload;
      })
      .addCase(getAvailableItems.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      })
      .addCase(getCategoryItems.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getCategoryItems.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.items = action.payload;
      })
      .addCase(getCategoryItems.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      })
      .addCase(getAllItems.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getAllItems.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.items = action.payload;
      })
      .addCase(getAllItems.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      })
      .addCase(deleteItem.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(deleteItem.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.items = state.items.filter(
          (item) => item._id !== action.payload.id
        );
      })
      .addCase(deleteItem.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      })
      .addCase(addBuyerToItem.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(addBuyerToItem.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.items = state.items.filter(
          (item) => item._id !== action.payload._id
        );
      })
      .addCase(addBuyerToItem.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      })
      .addCase(removeBuyerFromItem.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(removeBuyerFromItem.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.items = state.items.filter(
          (item) => item._id !== action.payload._id
        );
      })
      .addCase(removeBuyerFromItem.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      })
  },
});

export const { reset } = itemSlice.actions;
export default itemSlice.reducer;

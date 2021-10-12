import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import getCategories from '../api/getCategories';

export const fetchCategories = createAsyncThunk('categories/fetchCategories', async () => {
  const response = await getCategories();
  return response;
});

const categories = createSlice({
  name: 'categories',
  initialState: [],
  extraReducers: {
    [fetchCategories.fulfilled]: (state, action) => action.payload,
  },
});

export default categories.reducer;

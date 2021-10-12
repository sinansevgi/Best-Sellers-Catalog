import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import getBooks from '../api/getBooks';

export const fetchBookList = createAsyncThunk('bookList/fetchBookList', async (categoryName) => {
  const response = await getBooks(categoryName);
  return response;
});

const bookList = createSlice({
  name: 'bookList',
  initialState: [],
  extraReducers: {
    [fetchBookList.fulfilled]: (state, action) => action.payload,
  },
});

export default bookList.reducer;

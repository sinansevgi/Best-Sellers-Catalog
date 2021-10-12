import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import getBooks from '../api/getBooks';

export const fetchBookList = createAsyncThunk('bookList/fetchBookList', async () => {
  const response = await getBooks();
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

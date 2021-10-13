import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

export const fetchBookList = createAsyncThunk('bookList/fetchBookList', async (apiGateway) => {
  const response = await apiGateway();
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

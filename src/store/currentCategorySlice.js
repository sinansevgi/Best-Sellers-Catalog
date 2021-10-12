import { createSlice } from '@reduxjs/toolkit';

const currentCategory = createSlice({
  name: 'currentCategory',
  initialState: 'combined-print-and-e-book-fiction',
  reducers: {
    setCategory: (state, action) => action.payload,
  },
});

export const { setCategory } = currentCategory.actions;
export default currentCategory.reducer;

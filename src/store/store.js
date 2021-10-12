import { configureStore } from '@reduxjs/toolkit';
import bookList from './bookListSlice';

const store = configureStore({
  reducer: {
    bookList,
  },
});

export default store;

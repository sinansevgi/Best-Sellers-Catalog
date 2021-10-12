import { configureStore } from '@reduxjs/toolkit';
import bookList from './bookListSlice';
import currentCategory from './currentCategorySlice';
import categories, { fetchCategories } from './categoryListSlice';

const store = configureStore({
  reducer: {
    bookList,
    currentCategory,
    categories,
  },
});

store.dispatch(fetchCategories());
export default store;

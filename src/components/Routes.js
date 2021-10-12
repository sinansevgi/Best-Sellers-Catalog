import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import Catalog from '../containers/Catalog';
import BookDetails from '../containers/BookDetails';
import { fetchBookList } from '../store/bookListSlice';

const Routes = () => {
  const category = (state) => state.currentCategory;
  const currentCategory = useSelector(category);
  const bookList = (state) => state.bookList;
  const books = useSelector(bookList);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchBookList(currentCategory));
  }, [currentCategory]);
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/details/:isbn">
          <BookDetails books={books} />
        </Route>
        <Route path="/">
          <Catalog books={books} />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;

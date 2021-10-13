import { Switch, Route } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import Catalog from '../components/Catalog';
import BookDetails from './BookDetails';
import { fetchBookList } from '../store/bookListSlice';
import getBooks from '../api/getBooks';

const Routes = () => {
  const { bookList } = useSelector((state) => state);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchBookList(getBooks));
  }, [dispatch]);
  return (
    <Switch>
      <Route path="/details/:isbn">
        <BookDetails books={bookList} />
      </Route>
      <Route path="/">
        <Catalog books={bookList} />
      </Route>
    </Switch>
  );
};

export default Routes;

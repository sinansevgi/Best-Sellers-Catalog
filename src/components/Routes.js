import { Switch, Route } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import Catalog from '../containers/Catalog';
import BookDetails from '../containers/BookDetails';
import { fetchBookList } from '../store/bookListSlice';

const Routes = () => {
  const { bookList } = useSelector((state) => state);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchBookList());
  }, []);
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

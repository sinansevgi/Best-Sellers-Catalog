import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Book from '../components/Book';

const Catalog = ({ books }) => {
  const book = books.map((book) => (
    <Link
      to={`/details/${book.primary_isbn13}`}
      key={book.primary_isbn13}
    >
      <Book
        title={book.title}
        isbn={book.primary_isbn13}
      />
    </Link>
  ));
  return (
    <div>
      {book}
    </div>
  );
};

Catalog.propTypes = {
  books: PropTypes.instanceOf(Object).isRequired,
};

export default Catalog;

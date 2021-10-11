import React, { useState } from 'react';
// import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Book from '../components/Book';
import mockBooks from '../components/mockBooks';

const Catalog = () => {
  const [testBooks, setTestBooks] = useState(mockBooks);
  const handleChange = () => {
    setTestBooks(['Test']);
  };
  const book = testBooks.map((book) => (
    <Link
      to={`/details/${book.primary_isbn13}`}
      key={book.primary_isbn13}
    >
      <Book
        title={book.title}
        isbn={book.primary_isbn13}
        onClick={handleChange}
      />
    </Link>
  ));
  return (
    <div>
      {book}
    </div>
  );
};

// Catalog.propTypes = {
//
// };

export default Catalog;

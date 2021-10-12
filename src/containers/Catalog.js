import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Book from '../components/Book';

const Catalog = ({ books }) => {
  const [bookFilter, setBookFilter] = useState('');
  const [filteredBooks, setFilteredBooks] = useState([]);
  const listify = (list) => list.map((book) => (
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

  const handleChange = ({ target }) => {
    setBookFilter(target.value);
  };

  useEffect(() => {
    const filteredResult = books.filter(
      (book) => book.title.toLowerCase().includes(bookFilter.toLowerCase()),
    );
    setFilteredBooks(filteredResult);
  }, [bookFilter]);

  return (
    <section>
      <input type="text" placeholder="Filter books by name" value={bookFilter} onChange={handleChange} />
      {bookFilter ? listify(filteredBooks) : listify(books)}
    </section>
  );
};

Catalog.propTypes = {
  books: PropTypes.instanceOf(Object).isRequired,
};

export default Catalog;

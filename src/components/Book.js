import React from 'react';
import PropTypes from 'prop-types';
import bookStyles from '../assets/Book.module.css';

const Book = ({ title, isbn }) => (
  <div className={bookStyles.book}>
    <img src={`http://covers.openlibrary.org/b/isbn/${isbn}-L.jpg`} alt="Book Cover" />
    <div>
      <h3>{title}</h3>
    </div>

  </div>
);

Book.propTypes = {
  title: PropTypes.string.isRequired,
  isbn: PropTypes.string.isRequired,
};

export default Book;

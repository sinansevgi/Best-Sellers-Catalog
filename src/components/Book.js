import React from 'react';
import PropTypes from 'prop-types';
// import PropTypes from 'prop-types';

const Book = ({ title, isbn }) => (
  <div>
    <h3>{title}</h3>
    <img src={`http://covers.openlibrary.org/b/isbn/${isbn}-L.jpg`} alt="Book Cover" />
  </div>
);

Book.propTypes = {
  title: PropTypes.string.isRequired,
  isbn: PropTypes.string.isRequired,
};

export default Book;

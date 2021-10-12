import React from 'react';
import PropTypes from 'prop-types';

const Details = ({ book }) => {
  if (!book) {
    return (
      <h2>Please do not use direct links.</h2>
    );
  }
  return (
    <div>
      <h2>{book.title}</h2>
      <img src={`http://covers.openlibrary.org/b/isbn/${book.primary_isbn13}-L.jpg`} alt="Book Cover" />
      <h3>
        {`Author : ${book.author}`}
      </h3>
      <p>{`Description : ${book.description}`}</p>
    </div>
  );
};

Details.propTypes = {
  book: PropTypes.instanceOf(Object).isRequired,
};

export default Details;

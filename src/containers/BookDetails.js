import React from 'react';
import { useParams } from 'react-router-dom';
import PropTypes from 'prop-types';
import Details from '../components/Details';

const BookDetails = ({ books }) => {
  const { isbn } = useParams();
  const book = books.filter((book) => book.primary_isbn13.toString() === isbn);
  return (
    <Details book={book[0]} />
  );
};

BookDetails.propTypes = {
  books: PropTypes.instanceOf(Array).isRequired,
};

export default BookDetails;

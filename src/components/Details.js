import React from 'react';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom';
import detailsStyle from '../assets/Details.module.css';

const Details = ({ book }) => {
  if (!book) {
    return (
      <div>
        <h2>Please do not use direct links.</h2>
        <Redirect to="/" />
      </div>
    );
  }
  return (
    <div className={detailsStyle.details}>
      <h2>{book.title}</h2>
      <img src={`http://covers.openlibrary.org/b/isbn/${book.primary_isbn13}-L.jpg`} alt="Book Cover" />
      <div className={detailsStyle.container}>
        <h2>Author</h2>
        <h3>{book.author}</h3>
      </div>
      <div className={detailsStyle.container}>
        <h2>Description</h2>
        <p>{book.description}</p>
      </div>

    </div>
  );
};

Details.propTypes = {
  book: PropTypes.instanceOf(Object).isRequired,
};

export default Details;

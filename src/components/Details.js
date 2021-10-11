import React from 'react';
import PropTypes from 'prop-types';

const Details = ({ isbn }) => (
  <div>
    <img src={`http://covers.openlibrary.org/b/isbn/${isbn}-L.jpg`} alt="" />
    <h2>
      This is Details

    </h2>
  </div>
);

Details.propTypes = {
  isbn: PropTypes.string.isRequired,
};

export default Details;

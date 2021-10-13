import React from 'react';
import PropTypes from 'prop-types';

const Filter = ({ changeHandler, value }) => (
  <input
    type="text"
    placeholder="Filter books by name"
    value={value}
    onChange={({ target }) => changeHandler(target.value)}
    className="search-box"
  />
);

Filter.propTypes = {
  changeHandler: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
};

export default Filter;

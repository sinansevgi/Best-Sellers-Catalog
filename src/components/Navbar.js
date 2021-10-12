import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';
import { Link, useLocation } from 'react-router-dom';

import { setCategory } from '../store/currentCategorySlice';

const Navbar = () => {
  const location = useLocation();
  const dispatch = useDispatch();
  const categoryList = (state) => state.categories;
  const categories = useSelector(categoryList);
  const handleChange = ({ value }) => { dispatch(setCategory(value)); };
  return (
    <div>
      <Link to="/">Back</Link>
      {location.pathname === '/' && <Dropdown options={categories} onChange={handleChange} />}
    </div>
  );
};

export default Navbar;

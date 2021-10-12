import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';

import { setCategory } from '../store/currentCategorySlice';

const Navbar = () => {
  const dispatch = useDispatch();
  const categoryList = (state) => state.categories;
  const categories = useSelector(categoryList);
  const handleChange = ({ value }) => { dispatch(setCategory(value)); };
  return (
    <div>
      <Dropdown options={categories} onChange={handleChange} />
      <h1>This is Navbar</h1>
    </div>
  );
};

export default Navbar;

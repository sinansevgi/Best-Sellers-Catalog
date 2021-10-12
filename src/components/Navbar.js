import React from 'react';
import { Link } from 'react-router-dom';
import navbarStyles from '../assets/Navbar.module.css';
import backArrow from '../assets/ic_arrow_back.svg';
import settingsIcon from '../assets/settings.svg';

const Navbar = () => (
  <div className={navbarStyles.navbar}>
    <Link to="/"><img src={backArrow} alt="" /></Link>
    <h1>The New York Times Best Sellers</h1>
    <img src={settingsIcon} alt="" />

  </div>
);

export default Navbar;

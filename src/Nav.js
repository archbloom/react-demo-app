import React from 'react';
import { Link } from 'react-router-dom';

const Nav = () => {
  const navStyle = {
    color: 'black'
  };
  return (
    <nav className='navbar navbar-expand-lg navbar-light bg-light'>
      <div className='collapse navbar-collapse' id='navbarNav'>
        <Link style={navStyle} to='/'>
          <h3>Experiments</h3>
        </Link>
        <ul className='navbar-nav ml-auto'>
          <Link to='/recipe-listing'>
            <li className='nav-item'>
              <span className='nav-link'>Recipe listings</span>
            </li>
          </Link>
          <Link to='/about'>
            <li className='nav-item'>
              <span className='nav-link'>About</span>
            </li>
          </Link>
          <Link to='/breaking-bad'>
            <span className='nav-link'>BreakingBad</span>
          </Link>
        </ul>
      </div>
    </nav>
  );
};

export default Nav;

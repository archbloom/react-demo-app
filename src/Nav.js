import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { MoviesContext } from './MoviesContext';

const Nav = () => {
  const navStyle = {
    color: 'black',
  };
  const [movies, setMovies] = useContext(MoviesContext);
  return (
    <nav className='navbar navbar-expand-lg navbar-light bg-light'>
      <div className='collapse navbar-collapse' id='navbarNav'>
        <Link style={navStyle} to={`${process.env.PUBLIC_URL}/`}>
          <h3>Experiments</h3>
        </Link>
        <ul className='navbar-nav ml-auto'>
          <Link to={`${process.env.PUBLIC_URL}/movies`}>
            <li className='nav-item'>
              <span className='nav-link'>Movies: {movies.length}</span>
            </li>
          </Link>
          <Link to={`${process.env.PUBLIC_URL}/recipe-listing`}>
            <li className='nav-item'>
              <span className='nav-link'>Recipe listings</span>
            </li>
          </Link>
          <Link to={`${process.env.PUBLIC_URL}/about`}>
            <li className='nav-item'>
              <span className='nav-link'>About</span>
            </li>
          </Link>
          <Link to={`${process.env.PUBLIC_URL}/breaking-bad`}>
            <span className='nav-link'>BreakingBad</span>
          </Link>
        </ul>
      </div>
    </nav>
  );
};

export default Nav;

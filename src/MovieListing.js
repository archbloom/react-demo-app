import React, { useContext } from 'react';
import Movie from './Movie';
import AddMovie from './AddMovie';
import { MoviesContext } from './MoviesContext';

const MovieListing = () => {
  const [movies, setMovies] = useContext(MoviesContext);

  return (
    <div>
      <AddMovie />
      <div className='container'>
        <div className='row justify-content-center align-items-center'>
          {movies.map((movie) => (
            <Movie name={movie.name} key={movie.id} info={movie.info} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default MovieListing;

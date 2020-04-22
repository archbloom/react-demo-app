import React, { useState, createContext } from 'react';

export const MoviesContext = createContext();

export const MovieProvider = (props) => {
  const [movies, setMovies] = useState([
    {
      name: 'Movie 1',
      info: 'Some More info',
      id: '1',
    },
    {
      name: 'Movie 2',
      info: 'Some More info',
      id: '2',
    },
    {
      name: 'Movie 3',
      info: 'Some More info',
      id: '3',
    },
    {
      name: 'Movie 4',
      info: 'Some More info',
      id: '4',
    },
  ]);

  return (
    <MoviesContext.Provider value={[movies, setMovies]}>
      {props.children}
    </MoviesContext.Provider>
  );
};

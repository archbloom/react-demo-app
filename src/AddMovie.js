import React, { useState, useContext } from 'react';
import { MoviesContext } from './MoviesContext';

const AddMovie = () => {
  const [movies, setMovies] = useContext(MoviesContext);
  const [name, setName] = useState('');
  const [info, setInfo] = useState('');

  const updateName = (e) => {
    setName(e.target.value);
  };
  const updateInfo = (e) => {
    setInfo(e.target.value);
  };

  const addMovie = (e) => {
    e.preventDefault();
    console.log(movies);

    setMovies((oldMovies) => [
      ...oldMovies,
      { name: name, info: info, id: oldMovies.length + 1 },
    ]);
  };
  return (
    <div className='row justify-content-center align-items-center form-group mt-2'>
      <form onSubmit={addMovie}>
        <div className='input-group-append' id='button-addon4'>
          <input
            type='text'
            className='col-md-4 form-control'
            value={name}
            placeholder='Movie Name'
            onChange={updateName}
          />
          <input
            type='text'
            className='col-md-4 form-control ml-2'
            value={info}
            placeholder='Movie Information'
            onChange={updateInfo}
          />
          <button className='form-control btn btn-primary ml-2' type='submit'>
            Add Movie
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddMovie;

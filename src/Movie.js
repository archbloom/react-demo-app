import React from 'react';

const Movie = ({ name, info }) => {
  return (
    <div className='col-sm-6 mt-1 align-centre'>
      <div className='card' width='18rem'>
        <div className='card-body'>
          <h3 className='card-title'>{name}</h3>
          <p className='card-text'>{info}</p>
        </div>
      </div>
    </div>
  );
};

export default Movie;

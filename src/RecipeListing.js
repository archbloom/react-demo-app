import React, { useEffect, useState } from 'react';
import Recipe from './Recipe';

const RecipeListing = () => {
  const APP_ID = '11cbe344';
  const APP_KEY = '797e46b298abfd26de41839921b778f1';

  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState('');
  const [query, setQuery] = useState('paneer');

  useEffect(() => {
    getRecipes();
  }, [query]);

  const getRecipes = async () => {
    const response = await fetch(
      `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`
    );
    const data = await response.json();
    setRecipes(data.hits);
  };

  const updateSearch = (e) => {
    setSearch(e.target.value);
  };

  const getSearch = (e) => {
    console.log(search);
    e.preventDefault();
    setQuery(search);
    setSearch('');
  };

  return (
    <div className='row justify-content-center align-items-center'>
      <form onSubmit={getSearch} className='search-form'>
        <div className='input-group-append' id='button-addon4'>
          <input
            type='text'
            className='search-bar form-control'
            value={search}
            onChange={updateSearch}
            aria-describedby='button-addon4'
          />
          <button
            className='search-btn btn btn-outline-secondary ml-3'
            placeholder='Search Recipe'
            type='submit'
          >
            Search
          </button>
        </div>
      </form>
      <div className='row mt-1 mr-1 ml-1'>
        {recipes.map((recipe) => (
          <Recipe
            key={recipe.recipe.label}
            title={recipe.recipe.label}
            calories={recipe.recipe.calories}
            image={recipe.recipe.image}
            link={recipe.recipe.url}
          />
        ))}
      </div>
    </div>
  );
};

export default RecipeListing;

// https://breakingbadapi.com/documentation

import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const BreakingBad = () => {
  const [characters, setCharacters] = useState([]);
  useEffect(() => {
    fetchCharacters();
  }, []);

  const fetchCharacters = async () => {
    const allCharacters = await fetch(
      `https://www.breakingbadapi.com/api/characters`
    );
    const chars = await allCharacters.json();
    setCharacters(chars);
    console.log(chars);
  };

  return (
    <div className="BreakingBad">
      <h1>Few Characters:</h1>
      {characters.map(char => (
        <Link to={`/breaking-bad/${char.char_id}`}>
          <span key={char.char_id}>{char.name}</span>
        </Link>
      ))}
    </div>
  );
};

export default BreakingBad;

// https://breakingbadapi.com/documentation

import React, { useState, useEffect } from "react";
const BreakingBadCharacter = ({ match }) => {
  const [character, setCharacter] = useState({});
  useEffect(() => {
    fetchCharacter();
  }, []);

  const fetchCharacter = async () => {
    const character = await fetch(
      `https://www.breakingbadapi.com/api/characters/${match.params.id}`
    );
    const charInfo = await character.json();
    setCharacter(charInfo);
    console.log(charInfo);
  };

  return (
    <div className="BreakingBadCharacter">
      <h1>
        {character.name} played by {character.portrayed}
      </h1>
      <h3>{character.nickname}</h3>
      <img src={character.img} alt="" />
    </div>
  );
};

export default BreakingBadCharacter;

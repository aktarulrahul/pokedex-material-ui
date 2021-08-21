import React from "react";
const Pokemon = (props) => {
  const { match } = props;
  const { params } = match;
  const { pokemonId } = params;
  return (
    <div>
      <h1>This is the pokemon page for pokemon ID of {pokemonId}</h1>
    </div>
  );
};

export default Pokemon;

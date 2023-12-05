import React from 'react'


const PokemonInfo = ({ pokemonData }) => {
//   const moves = pokemonData?.moves || []; // Ensure moves is an array

  return (
    <div>
        
      {pokemonData?.moves?.map((move, idx) => (
        <li key={idx}>{move.move.name}</li>
      ))}
    </div>
  );
};


export default PokemonInfo
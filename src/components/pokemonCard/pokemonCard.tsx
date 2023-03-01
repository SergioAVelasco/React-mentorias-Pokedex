import React from "react";

type PokemonCardProps = {
  pokemon: any;
  showButtons: boolean;
};

const PokemonCard = ({ pokemon, showButtons }: PokemonCardProps) => {
  const { sprites } = pokemon;
  return (
    <div className="pokemon-card">
      <img src={sprites.front_default} alt="" />
      <p>{`${pokemon.id}. ${pokemon.name}`}</p>
      {showButtons && (
        <div className="card-button-container">
          <button>Add my team</button>
          <button>Compare</button>
        </div>
      )}
    </div>
  );
};

export default PokemonCard;

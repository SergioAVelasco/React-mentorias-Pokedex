import { useContext } from "react";

import Layout from "../../components/layout";
import { PokemonContext } from "../../context/pokemonContext";
import PokemonCard from "./../../components/pokemonCard/pokemonCard";

import "./styles.css";

const MyTeam = () => {
  const pokemonContext = useContext(PokemonContext);
  const { myTeam } = pokemonContext;

  return (
    <Layout>
      <h2>My team</h2>
      <div className="my-team-wrapper">
        {myTeam.length === 0 && <p>Aun no has agregado ningun pokemon</p>}
        {myTeam.map((currentPokemon) => (
          <PokemonCard
            pokemon={currentPokemon}
            key={currentPokemon.id}
            showButtons={false}
          />
        ))}
      </div>
    </Layout>
  );
};

export default MyTeam;

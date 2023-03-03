import axios from "axios";
import React, { useEffect, useState, useContext } from "react";

import Layout from "../../components/layout";
import PokemonCard from "./../../components/pokemonCard/pokemonCard";
import { PokemonContext } from "../../context/pokemonContext";

import "./styles.css";

const Dashboard = () => {
  const pokemonContext = useContext(PokemonContext);
  const [pokemonCollection, setPokemonCollection] = useState({});

  const addPokemon = (newPokemon: any) => {
    setPokemonCollection((currentState) => {
      return { [newPokemon.id]: newPokemon, ...currentState };
    });
  };

  useEffect(() => {
    for (let i = 1; i < 152; i++) {
      axios.get(`https://pokeapi.co/api/v2/pokemon/${i}`).then((results) => {
        addPokemon(results.data);
      });
    }
  }, []);

  const array = Object.entries(pokemonCollection);

  return (
    <Layout>
      <h2>Pokemon List</h2>
      <div className="list-container">
        {array.map((cPokemon) => {
          const data = cPokemon[1] as any;
          return (
            <PokemonCard
              onAddTeam={pokemonContext.addToMyTeam}
              pokemon={data}
              key={data.id}
              showButtons={true}
            />
          );
        })}
      </div>
    </Layout>
  );
};

export default Dashboard;

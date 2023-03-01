import React, { useEffect, useState } from "react";
import Layout from "../../components/layout";
import "./styles.css";
import axios from "axios";
import PokemonCard from "./../../components/pokemonCard/pokemonCard";

const Dashboard = () => {
  const [pokemonCollection, setPokemonCollection] = useState({});

  const addPokemon = (newPokemon: any) => {
    setPokemonCollection((currentState) => {
      return { [newPokemon.id]: newPokemon, ...currentState };
    });
  };

  useEffect(() => {
    for (let i = 0; i < 152; i++) {
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
          return <PokemonCard pokemon={data} key={data.id} showButtons />;
        })}
      </div>
    </Layout>
  );
};

export default Dashboard;

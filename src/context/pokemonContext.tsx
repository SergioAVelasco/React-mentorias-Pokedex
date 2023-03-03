import React, { createContext, useState } from "react";

interface PokemonContextProps {
  children: JSX.Element | JSX.Element[];
}

/* 
    React context documentation
    https://beta.reactjs.org/reference/react/createContext
*/

export const PokemonContext = createContext<{
  myTeam: any[];
  addToMyTeam: (pokemon: any) => void;
}>({
  myTeam: [],
  addToMyTeam: () => {},
});

const PokemonContextWrapper = ({ children }: PokemonContextProps) => {
  const [myTeam, setMyTeam] = useState<any[]>([]);
  const addToMyTeam = (pokemon: any) => {
    const alreadyOnTeam = myTeam.some((currentPokemon: any) => {
      return currentPokemon.id === pokemon.id;
    });
    if (alreadyOnTeam) {
      return;
    }
    myTeam.push(pokemon);
    setMyTeam(myTeam);
  };

  return (
    <PokemonContext.Provider
      value={{
        myTeam,
        addToMyTeam,
      }}
    >
      {children}
    </PokemonContext.Provider>
  );
};

export default PokemonContextWrapper;

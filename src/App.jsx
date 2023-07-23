import { useState, useEffect } from "react";
import "./App.css";

const pokemonList = [
  {
    name: "bulbasaur",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
  },
  {
    name: "charmander",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/4.png",
  },
  {
    name: "squirtle",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/7.png",
  },
  {
    name: "pikachu",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png",
  },
  {
    name: "mew",
  },
];

const App = () => {
  const [pokemonIndex, setPokemonIndex] = useState(0);

  const handleClickSuiv = () =>
    setPokemonIndex(
      pokemonIndex < pokemonList.length - 1 ? pokemonIndex + 1 : pokemonIndex
    );

  const handleClickPrec = () =>
    setPokemonIndex(pokemonIndex > 0 ? pokemonIndex - 1 : pokemonIndex);

  const Pokemon = pokemonList[pokemonIndex];

  useEffect(() => {
    alert("hello pokemon trainer :)");
  }, []);

  useEffect(() => {
    if (Pokemon.name === "pikachu") {
      alert("pika pikachu !!!");
    }
  }, [Pokemon.name]);

  return (
    <div>
      <img src={Pokemon.imgSrc} alt={Pokemon.name} />
      <div>
        {pokemonIndex > 0 ? (
          <button onClick={handleClickPrec}>Précédent</button>
        ) : undefined}
        {pokemonIndex < pokemonList.length - 1 ? (
          <button onClick={handleClickSuiv}>Suivant</button>
        ) : undefined}
      </div>
    </div>
  );
};

export default App;

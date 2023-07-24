import { useState, useEffect } from "react";
import "./App.css";
import NavBar from "./components/navbar";

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

  const handleClickPokemon = (index) => setPokemonIndex(index);

  const Pokemon = pokemonList[pokemonIndex];

  useEffect(() => {
    alert("hello pokemon trainer :)");
  }, []);

  useEffect(() => {
    if (Pokemon && Pokemon.name === "pikachu") {
      alert("pika pikachu !!!");
    }
  }, [Pokemon]);

  return (
    <div>
      {Pokemon && <img src={Pokemon.imgSrc} alt={Pokemon.name} />}
      <NavBar
        pokemonList={pokemonList}
        handleClickPokemon={handleClickPokemon}
      />
    </div>
  );
};

export default App;

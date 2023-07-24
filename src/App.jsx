import { useState, useEffect } from "react";
import "./App.css";
<<<<<<< HEAD
import NavBar from "./composant/NavBar";
=======
>>>>>>> 2e7ff59f2e7334220a34360e0493de54d14a46a8

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
<<<<<<< HEAD
=======
    // Cette alerte sera déclenchée au "démarrage" de l'application (premier rendu)
>>>>>>> 2e7ff59f2e7334220a34360e0493de54d14a46a8
    alert("hello pokemon trainer :)");
  }, []);

  useEffect(() => {
<<<<<<< HEAD
    if (Pokemon && Pokemon.name === "pikachu") {
      alert("pika pikachu !!!");
    }
  }, [Pokemon]);
=======
    // Cette alerte sera déclenchée lorsque le pokémon choisi devient "pikachu"
    if (Pokemon.name === "pikachu") {
      alert("pika pikachu !!!");
    }
  }, [Pokemon.name]); // On utilise le nom du pokémon comme dépendance du useEffect
>>>>>>> 2e7ff59f2e7334220a34360e0493de54d14a46a8

  return (
    <div>
      {Pokemon && <img src={Pokemon.imgSrc} alt={Pokemon.name} />}
      <div>
        {pokemonIndex > 0 ? (
          <button onClick={handleClickPrec}>Précédent</button>
        ) : null}
        {pokemonIndex < pokemonList.length - 1 ? (
          <button onClick={handleClickSuiv}>Suivant</button>
        ) : null}
      </div>
      <NavBar
        handleClickPrec={handleClickPrec}
        handleClickSuiv={handleClickSuiv}
        pokemonIndex={pokemonIndex}
        pokemonListLength={pokemonList.length}
      />
    </div>
  );
};

export default App;

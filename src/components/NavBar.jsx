import PropTypes from "prop-types";

const NavBar = ({ pokemonList, handleClickPokemon }) => {
  return (
    <div>
      {pokemonList.map((pokemon, index) => (
        <button key={index} onClick={() => handleClickPokemon(index)}>
          {pokemon.name}
        </button>
      ))}
    </div>
  );
};

NavBar.propTypes = {
  pokemonList: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
    })
  ).isRequired,
  handleClickPokemon: PropTypes.func.isRequired,
};

export default NavBar;

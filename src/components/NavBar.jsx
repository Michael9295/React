import PropTypes from "prop-types";

const NavBar = ({
  handleClickPrec,
  handleClickSuiv,
  pokemonIndex,
  pokemonListLength,
}) => {
  return (
    <div>
      {pokemonIndex > 0 ? (
        <button onClick={handleClickPrec}>Précédent</button>
      ) : null}
      {pokemonIndex < pokemonListLength - 1 ? (
        <button onClick={handleClickSuiv}>Suivant</button>
      ) : null}
    </div>
  );
};

NavBar.propTypes = {
  handleClickPrec: PropTypes.func.isRequired,
  handleClickSuiv: PropTypes.func.isRequired,
  pokemonIndex: PropTypes.number.isRequired,
  pokemonListLength: PropTypes.number.isRequired,
};

export default NavBar;

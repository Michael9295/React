import PropTypes from "prop-types";

function PokemonCard(props) {
  return (
    <figure>
      {props.pokemon.imgSrc ? (
        <img src={props.pokemon.imgSrc} alt={props.pokemon.name} />
      ) : (
        <p>???</p>
      )}
      <figcaption>{props.pokemon.name}</figcaption>
    </figure>
  );
}

PokemonCard.propTypes = {
  pokemon: PropTypes.shape({
    imgSrc: PropTypes.string,
    name: PropTypes.string.isRequired,
  }).isRequired,
};

export default PokemonCard;

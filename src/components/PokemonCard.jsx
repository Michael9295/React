import PropTypes from "prop-types";

function PokemonCard(props) { 
  console.log(props.pokemon);
  return (
    <figure>
		{props.pokemon.imgSrc != null ? (
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
  }
export default PokemonCard;






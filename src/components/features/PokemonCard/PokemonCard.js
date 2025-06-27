import React from "react";
import { useNavigate } from "react-router-dom";
import "./PokemonCard.css";
import { formatName, formatNumber, getTypeArray } from "../../../utils/formatters";
import PokemonType from "../PokemonType/PokemonType";

const PokemonCard = ({ pokemonItem }) => {
  let navigate = useNavigate();
  const pokemonImage =
    pokemonItem.sprites?.other?.["official-artwork"]?.front_default;
  const name = formatName(pokemonItem.name);
  const typesArray = getTypeArray(pokemonItem.types);

  return (
    <button
      className="pokemon-card-container"
      onClick={() => navigate(`/${pokemonItem.name}`)}
      type="button"
      aria-label={`View ${name} details`}
    >
      {pokemonImage && (
        <img
          className="pokemon-card-image"
          alt={`${name} official artwork`}
          src={pokemonImage}
        />
      )}
      <div className="pokemon-card-copy">
        <span className="pokemon-card-id" aria-label="Pokémon number">{formatNumber(pokemonItem.id)}</span>
        <h3 className="pokemon-card-name">{name}</h3>
        <div className="pokemon-card-type-container" aria-label="Pokémon types">
          <PokemonType isLarge={false} typesArray={typesArray} />
        </div>
      </div>
    </button>
  );
};

export default PokemonCard;

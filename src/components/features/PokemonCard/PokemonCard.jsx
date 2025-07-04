import React from "react";
import { useNavigate } from "react-router-dom";
import styles from "./PokemonCard.module.css";
import { formatName, formatNumber, getTypeArray } from "../../../utils/pokemonFormatters";
import PokemonTypeBadge from "../PokemonTypeBadge/PokemonTypeBadge";

const PokemonCard = ({ pokemonItem }) => {
  let navigate = useNavigate();
  const pokemonImage =
    pokemonItem.sprites?.other?.["official-artwork"]?.front_default;
  const name = formatName(pokemonItem.name);
  const typesArray = getTypeArray(pokemonItem.types);

  return (
    <button
      className={styles.pokemonContainer}
      onClick={() => navigate(`/${pokemonItem.name}`)}
      type="button"
      aria-label={`View ${name} details`}
    >
      {pokemonImage && (
        <img
          className={styles.pokemonImage}
          alt={`${name} official artwork`}
          src={pokemonImage}
        />
      )}
      <div className={styles.pokemonCopy}>
        <span className={styles.pokemonId} aria-label="Pokémon number">{formatNumber(pokemonItem.id)}</span>
        <h3 className={styles.pokemonName}>{name}</h3>
        <div className={styles.pokemonTypeContainer} aria-label="Pokémon types">
          <PokemonTypeBadge isLarge={false} typesArray={typesArray} />
        </div>
      </div>
    </button>
  );
};

export default PokemonCard;

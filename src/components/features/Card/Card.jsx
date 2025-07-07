import React from "react";
import { Link } from "react-router-dom";
import styles from "./Card.module.css";
import { formatName, formatNumber, getTypeArray } from "../../../utils/pokemonFormatters";
import Type from "../Type/Type";

const Card = ({ pokemonItem }) => {
  const pokemonImage =
    pokemonItem.sprites?.other?.["official-artwork"]?.front_default;
  const name = formatName(pokemonItem.name);
  const typesArray = getTypeArray(pokemonItem.types);

  return (
    <Link
      to={`/${pokemonItem.name}`}
      className={styles.pokemonCard}
      aria-label={`View ${name} details`}
    >
      {pokemonImage && (
        <img
          className={styles.pokemonImage}
          alt={`${name} official artwork`}
          src={pokemonImage}
        />
      )}
      <div className={styles.pokemonInfo}>
        <small className={styles.pokemonId} aria-label="Pokémon number">{formatNumber(pokemonItem.id)}</small>
        <strong className={styles.pokemonName}>{name}</strong>
        <Type isLarge={false} typesArray={typesArray} />
      </div>
    </Link>
  );
};

export default Card;

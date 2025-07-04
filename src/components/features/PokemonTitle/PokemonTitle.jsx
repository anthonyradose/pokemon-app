import React from "react";
import styles from "./PokemonTitle.module.css";
import { formatName, formatNumber } from "../../../utils/pokemonFormatters";

const PokemonTitle = ({ pokemonItem }) => {
  const name = formatName(pokemonItem.name);
  const number = formatNumber(pokemonItem.id);
  return (
    <div className={styles.titleContainer}>
      <h1 className={styles.titleName}>{name}</h1>
      <span className={styles.titleId} aria-label={`Pokémon number ${number}`}>{number}</span>
    </div>
  );
};

export default PokemonTitle;

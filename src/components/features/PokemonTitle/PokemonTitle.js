import React from "react";
import styles from "./PokemonTitle.module.css";
import { formatName, formatNumber } from "../../../utils/formatters";

const PokemonTitle = ({ pokemonItem }) => {
  const name = formatName(pokemonItem.name);
  const number = formatNumber(pokemonItem.id);
  return (
    <div className={styles.pokemonTitleWrapper}>
      <h1 className={styles.pokemonTitleName}>{name}</h1>
      <span className={styles.pokemonTitleId}>{number}</span>
    </div>
  );
};

export default PokemonTitle;

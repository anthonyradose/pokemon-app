import React from "react";
import { Link } from "react-router-dom";
import { formatName, formatNumber, getTypeArray } from "../../../utils/pokemonFormatters";
import Types from "../Types/Types";
import styles from "./Evolution.module.css";

const Evolution = ({ pokemonItem }) => {
  const typesArray = getTypeArray(pokemonItem.types);

  const evolutions = pokemonItem?.evoListItems?.map((item) => (
    <li key={item.name} className={styles.evolutionCard}>
      <Link
        to={`/${item.name}`}
        aria-label={`View ${formatName(item.name)} details`}
      >
        <img
          className={styles.evolutionImg}
          height={200}
          width={200}
          src={item.sprites?.other["official-artwork"]?.front_default}
          alt={`${formatName(item.name)} evolution`}
        />
        <div className={styles.evolutionHeader}>
          <span className={styles.evolutionName}>{formatName(item.name)}</span>
          <span className={styles.evolutionNumber}>{formatNumber(item.id)}</span>
        </div>
        <Types typesArray={typesArray} isLarge={false} />
      </Link>
    </li>
  ));

  return (
    <div className={styles.evolutionContainer}>
      {pokemonItem.evoListItems.length <= 1 ? (
        <p className={styles.evolutionNone}>This Pokémon does not evolve</p>
      ) : null}
      <ul className={styles.evolutionContent} aria-label="Evolution options">
        {evolutions}
      </ul>
    </div>
  );
};

export default Evolution;

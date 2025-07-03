import styles from "./PokemonType.module.css";
import React from "react";

const PokemonType = ({ typesArray, isLarge }) => {
  return (
    <div className={isLarge ? styles.pokemonTypeContainerLarge : styles.pokemonTypeContainerSmall} role="group" aria-label="Pokémon types">
      {typesArray?.map((item) => {
        return (
          <div
            className={
              isLarge ? `${styles.pokemonTypesCardLarge} ${styles[item]}` : `${styles.pokemonTypesCardSmall} ${styles[item]}`
            }
            key={item}
            role="button"
            aria-label={`${item} type`}
          >
            {item}
          </div>
        );
      })}
    </div>
  );
};

export default PokemonType;

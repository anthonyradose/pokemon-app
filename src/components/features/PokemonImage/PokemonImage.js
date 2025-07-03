import styles from "./PokemonImage.module.css";
import React from "react";

const PokemonImage = ({ src, name }) => {
  return (
    <div className={styles.pokemonImageWrapper}>
      <img src={src} alt={`${name} official artwork`} className={styles.pokemonImage} />
    </div>
  );
};

export default PokemonImage;

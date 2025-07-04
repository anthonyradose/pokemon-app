import styles from "./Image.module.css";
import React from "react";

const Image = ({ src, name }) => {
  return (
    <div className={styles.pokemonImageWrapper}>
      <img src={src} alt={`${name} official artwork`} className={styles.pokemonImage} />
    </div>
  );
};

export default Image;

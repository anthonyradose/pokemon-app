import React from "react";
import styles from "./Loader.module.css";

const Loader = () => {
  return (
    <div 
      className={styles.pokeballLoader}
      role="status"
      aria-label="Loading Pokémon data"
    />
  );
};

export default Loader;

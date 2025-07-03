import React from "react";
import CatchingPokemonIcon from "@mui/icons-material/CatchingPokemon";
import useVersionToggle from "../../../hooks/useVersionToggle";
import styles from "./PokemonVersion.module.css";

const PokemonVersion = ({ blue, red }) => {
  const { showBlue, toggleToBlue, toggleToRed } = useVersionToggle(true);
  return (
    <div className={styles.pokemonVersionContainer}>
      <div className={styles.pokemonVersionContent}>
        <div>
          <p className={styles.pokemonVersionText}>{showBlue ? blue : red} </p>
        </div>
        <div className={styles.pokemonVersionHeading}>
          Versions:{" "}
          <span className={styles.pokemonVersionToggle}>
            <button
              className={styles.pokemonVersionBlueBtn}
              onClick={toggleToBlue}
              type="button"
              aria-label="Show Blue version description"
              aria-pressed={showBlue}
            >
              <CatchingPokemonIcon aria-hidden="true" />
            </button>
          </span>
          <span className={styles.pokemonVersionToggle}>
            <button
              className={styles.pokemonVersionRedBtn}
              onClick={toggleToRed}
              type="button"
              aria-label="Show Red version description"
              aria-pressed={!showBlue}
            >
              <CatchingPokemonIcon aria-hidden="true" />
            </button>
          </span>
        </div>
      </div>
    </div>
  );
};

export default PokemonVersion;

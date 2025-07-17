import React from "react";
import CatchingPokemonIcon from "@mui/icons-material/CatchingPokemon";
import useVersion from "../../../hooks/useVersion";
import styles from "./Version.module.css";

const Version = ({ blue, red }) => {
  const { showBlue, toggleToBlue, toggleToRed } = useVersion(true);
  return (
    <div className={styles.versionContainer}>
      <div className={styles.versionContent}>
        <div>
          <p className={styles.versionText}>{showBlue ? blue : red} </p>
        </div>
        <div className={styles.versionHeading}>
          Versions:{" "}
          <span className={styles.versionToggle}>
            <button
              className={styles.versionBlueBtn}
              onClick={toggleToBlue}
              type="button"
              aria-label="Show Blue version description"
              aria-pressed={showBlue}
            >
              <CatchingPokemonIcon aria-hidden="true" />
            </button>
          </span>
          <span className={styles.versionToggle}>
            <button
              className={styles.versionRedBtn}
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

export default Version;

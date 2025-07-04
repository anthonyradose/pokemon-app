import React from "react";
import MaleIcon from "@mui/icons-material/Male";
import FemaleIcon from "@mui/icons-material/Female";
import styles from "./Info.module.css";
import { UNITS } from "../../../constants/measurementUnits";
import { POKEMON_SUFFIX } from "../../../constants/pokemonNameRules";

const Info = ({ pokemonItem }) => {
  let height = pokemonItem.height;
  let weight = pokemonItem.weight;
  let category = pokemonItem.category.replace(POKEMON_SUFFIX, "");

  const abilities = pokemonItem.abilities?.map(({ ability }, index) => (
    <span key={ability.name} className={styles.abilityValue}>
      {ability?.name.replaceAll("-", " ")}
    </span>
  ));

  const decimalize = (num) => {
    return (num / 10).toFixed(1);
  };

  return (
    <section className={styles.infoSection} aria-label="Pokémon information">
      <div className={styles.physicalTraits}>
        <ul className={styles.physicalTraitsList}>
          <li className={styles.traitItem}>
            <span className={styles.traitLabel}>Height</span>
            <span className={styles.traitValue}>{decimalize(height)} {UNITS.HEIGHT}</span>
          </li>
          <li className={styles.traitItem}>
            <span className={styles.traitLabel}>Weight</span>
            <span className={styles.traitValue}>{decimalize(weight)} {UNITS.WEIGHT}</span>
          </li>
          <li className={styles.traitItem}>
            <span className={styles.traitLabel}>Gender</span>
            <div className={styles.genderContainer} aria-label="Gender options">
              {pokemonItem.canBeMale ? (
                <span className={styles.traitValue} aria-label="Can be male">
                  <MaleIcon className={styles.maleIcon} aria-hidden="true" />
                </span>
              ) : null}
              {pokemonItem.canBeFemale ? (
                <span className={styles.traitValue} aria-label="Can be female">
                  <FemaleIcon className={styles.femaleIcon} aria-hidden="true" />
                </span>
              ) : null}
              {pokemonItem.unknown ? (
                <span className={styles.traitValue}>Unknown</span>
              ) : null}
            </div>
          </li>
        </ul>
      </div>
      <div className={styles.pokemonCategory}>
        <ul className={styles.categoryTraitsList}>
          <li className={styles.traitItem}>
            <span className={styles.traitLabel}>Category</span>
            <span className={styles.traitValue}>{category}</span>
          </li>
          <li className={styles.traitItem}>
            <span className={styles.traitLabel}>Abilities</span>
            <div aria-label="Pokémon abilities">
              {abilities}
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Info;

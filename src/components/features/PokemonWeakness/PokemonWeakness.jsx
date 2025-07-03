import React from "react";
import PokemonType from "../PokemonType/PokemonType";
import styles from "./PokemonWeakness.module.css";

const PokemonWeakness = ({ damageStuff1, damageStuff2 }) => {
  let weakness1 = damageStuff1.double_damage_from.map((item) => item.name);
  let weakness2 = damageStuff2?.double_damage_from.map((item) => item.name);

  const alpha = weakness1.concat(weakness2);
  const beta = [...new Set(alpha)];

  return (
    <div className={styles.pokemonWeaknessCard} role="region" aria-label="Pokémon type weaknesses">
      <h3 className={styles.pokemonWeaknessTitle}>Weaknesses</h3>
      <PokemonType typesArray={beta} isLarge={true} />
    </div>
  );
};

export default PokemonWeakness;

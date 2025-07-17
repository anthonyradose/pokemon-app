import React from "react";
import Types from "../Types/Types";
import styles from "./Weakness.module.css";

const Weakness = ({ damageStuff1, damageStuff2 }) => {
  let weakness1 = damageStuff1?.double_damage_from?.map((item) => item.name) || [];
  let weakness2 = damageStuff2?.double_damage_from?.map((item) => item.name) || [];

  const alpha = weakness1.concat(weakness2);
  const beta = [...new Set(alpha)];

  return (
    <div className={styles.weaknessContainer} role="region" aria-label="Pokémon type weaknesses">
      <div className={styles.weaknessContent}>
        <Types typesArray={beta} isLarge={true} />
      </div>
    </div>
  );
};

export default Weakness;

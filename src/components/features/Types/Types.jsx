import styles from "./Types.module.css";
import React from "react";

const Types = ({ typesArray, isLarge }) => {
  return (
    <div className={isLarge ? styles.typeContainerLarge : styles.typeContainerSmall} role="group" aria-label="Pokémon types">
      {typesArray?.map((item) => {
        return (
          <div
            className={
              isLarge ? `${styles.typeBadgeLarge} ${styles[item]}` : `${styles.typeBadgeSmall} ${styles[item]}`
            }
            key={item}
            aria-label={`${item} type`}
          >
            {item}
          </div>
        );
      })}
    </div>
  );
};

export default Types;

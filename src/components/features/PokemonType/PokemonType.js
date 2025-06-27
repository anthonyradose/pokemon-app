import "./PokemonType.css";
import React from "react";

const PokemonType = ({ typesArray, isLarge }) => {
  return (
    <div className={isLarge ? "pokemon-type-container-large" : "pokemon-type-container-small"}>
      {typesArray?.map((item) => {
        return (
          <div
            className={
              isLarge ? `pokemon-types-card-large ${item}` : `pokemon-types-card-small ${item}`
            }
            key={item}
          >
            {item}
          </div>
        );
      })}
    </div>
  );
};

export default PokemonType;

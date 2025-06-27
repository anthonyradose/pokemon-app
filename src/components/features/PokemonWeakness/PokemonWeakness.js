import React from "react";
import PokemonType from "../PokemonType/PokemonType";
import "../PokemonType/PokemonType.css";
import "./PokemonWeakness.css";

const PokemonWeakness = ({ damageStuff1, damageStuff2 }) => {
  let weakness1 = damageStuff1.double_damage_from.map((item) => item.name);
  let weakness2 = damageStuff2?.double_damage_from.map((item) => item.name);

  const alpha = weakness1.concat(weakness2);
  const beta = [...new Set(alpha)];

  return (
    <div className="pokemon-weakness-card">
      <h3 className="pokemon-weakness-title">Weaknesses</h3>
      <PokemonType typesArray={beta} isLarge={true} />
    </div>
  );
};

export default PokemonWeakness;

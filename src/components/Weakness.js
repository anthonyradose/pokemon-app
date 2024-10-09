import React from "react";
import Type from "./Type/Type";
import "./Type/Type.css";

const Weakness = ({ damageStuff1, damageStuff2 }) => {
  let weakness1 = damageStuff1.double_damage_from.map((item) => item.name);
  let weakness2 = damageStuff2?.double_damage_from.map((item) => item.name);

  const alpha = weakness1.concat(weakness2);
  const beta = [...new Set(alpha)];

  return (
    <div className="weakness-card">
      <h3 className="weakness-h3">Weaknesses</h3>
      <Type typesArray={beta} isLarge={true} />
    </div>
  );
};

export default Weakness;

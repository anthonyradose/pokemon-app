import React from "react";
import MaleIcon from "@mui/icons-material/Male";
import FemaleIcon from "@mui/icons-material/Female";
import "../../../pages/PokemonDetails/PokemonDetails.css";

const PokemonInfo = ({ pokemonItem }) => {
  let height = pokemonItem.height;
  let weight = pokemonItem.weight;
  let category = pokemonItem.category.replace("Pokémon", "");

  const abilities = pokemonItem.abilities?.map(({ ability }, index) => (
    <span key={ability.name} className="info-value info-abilities">
      {ability?.name.replaceAll("-", " ")}
    </span>
  ));

  const decimalize = (num) => {
    return (num / 10).toFixed(1);
  };

  return (
    <section className="info-div" aria-label="Pokémon information">
      <div className="info-ul-div1">
        <ul className="info-ul1">
          <li className="info-li">
            <span className="info-label">Height</span>
            <span className="info-value">{decimalize(height)} m</span>
          </li>
          <li className="info-li">
            <span className="info-label">Weight</span>
            <span className="info-value">{decimalize(weight)} kg</span>
          </li>
          <li className="info-li">
            <span className="info-label">Gender</span>
            <div className="info-gender-div" aria-label="Gender options">
              {pokemonItem.canBeMale ? (
                <span className="info-value" aria-label="Can be male">
                  <MaleIcon className="malePokemon" aria-hidden="true" />
                </span>
              ) : null}
              {pokemonItem.canBeFemale ? (
                <span className="info-value" aria-label="Can be female">
                  <FemaleIcon className="femalePokemon" aria-hidden="true" />
                </span>
              ) : null}
              {pokemonItem.unknown ? (
                <span className="info-value">Unknown</span>
              ) : null}
            </div>
          </li>
        </ul>
      </div>
      <div className="info-ul-div2">
        <ul className="info-ul2">
          <li className="info-li">
            <span className="info-label">Category</span>
            <span className="info-value">{category}</span>
          </li>
          <li className="info-li">
            <span className="info-label">Abilities</span>
            <div aria-label="Pokémon abilities">
              {abilities}
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default PokemonInfo;

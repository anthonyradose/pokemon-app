import React from "react";
import MaleIcon from "@mui/icons-material/Male";
import FemaleIcon from "@mui/icons-material/Female";
import "../../../pages/PokemonDetails/PokemonDetails.css";
import "./PokemonInfo.css";
import { UNITS } from "../../../constants/measurementUnits";
import { POKEMON_SUFFIX } from "../../../constants/pokemonNameRules";

const PokemonInfo = ({ pokemonItem }) => {
  let height = pokemonItem.height;
  let weight = pokemonItem.weight;
  let category = pokemonItem.category.replace(POKEMON_SUFFIX, "");

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
      <div className="physical-traits">
        <ul className="physical-traits-list">
          <li className="trait-item">
            <span className="trait-label">Height</span>
            <span className="trait-value">{decimalize(height)} {UNITS.HEIGHT}</span>
          </li>
          <li className="trait-item">
            <span className="trait-label">Weight</span>
            <span className="trait-value">{decimalize(weight)} {UNITS.WEIGHT}</span>
          </li>
          <li className="trait-item">
            <span className="trait-label">Gender</span>
            <div className="info-gender-div" aria-label="Gender options">
              {pokemonItem.canBeMale ? (
                <span className="trait-value" aria-label="Can be male">
                  <MaleIcon className="malePokemon" aria-hidden="true" />
                </span>
              ) : null}
              {pokemonItem.canBeFemale ? (
                <span className="trait-value" aria-label="Can be female">
                  <FemaleIcon className="femalePokemon" aria-hidden="true" />
                </span>
              ) : null}
              {pokemonItem.unknown ? (
                <span className="trait-value">Unknown</span>
              ) : null}
            </div>
          </li>
        </ul>
      </div>
      <div className="pokemon-category">
        <ul className="category-traits-list">
          <li className="trait-item">
            <span className="trait-label">Category</span>
            <span className="trait-value">{category}</span>
          </li>
          <li className="trait-item">
            <span className="trait-label">Abilities</span>
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

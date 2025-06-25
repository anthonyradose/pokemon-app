import React from "react";
import "../../../pages/PokemonDetails/PokemonDetails.css";
import { formatName, formatNumber } from "../../../utils/formatters";

const PokemonTitle = ({ pokemonItem }) => {
  const name = formatName(pokemonItem.name);
  const number = formatNumber(pokemonItem.id);
  return (
    <div className="pokemon-heading-div">
      <h1 className="pokemon-heading-name">{name}</h1>
      <span className="pokemon-heading-id">{number}</span>
    </div>
  );
};

export default PokemonTitle;

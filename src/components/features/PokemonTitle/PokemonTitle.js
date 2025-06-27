import React from "react";
import "../../../pages/PokemonDetails/PokemonDetails.css";
import "./PokemonTitle.css";
import { formatName, formatNumber } from "../../../utils/formatters";

const PokemonTitle = ({ pokemonItem }) => {
  const name = formatName(pokemonItem.name);
  const number = formatNumber(pokemonItem.id);
  return (
    <div className="pokemon-title-wrapper">
      <h1 className="pokemon-title-name">{name}</h1>
      <span className="pokemon-title-id">{number}</span>
    </div>
  );
};

export default PokemonTitle;

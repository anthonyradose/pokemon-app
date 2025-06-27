import "./PokemonImage.css";
import "../../../pages/PokemonDetails/PokemonDetails.css";
import React from "react";

const PokemonImage = ({ src, name }) => {
  return (
    <div className="pokemon-image-wrapper">
      <img src={src} alt={`${name} official artwork`} className="pokemon-image" />
    </div>
  );
};

export default PokemonImage;

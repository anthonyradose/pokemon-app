import "../../pages/PokemonDetails/PokemonDetails.css";
import React from "react";

const PokemonImage = ({ src, name }) => {
  return (
    <div className="image-div">
      <img src={src} alt={name} className="pokemon-image" />
    </div>
  );
};

export default PokemonImage;

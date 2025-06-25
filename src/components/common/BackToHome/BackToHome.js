import React from "react";
import { Link } from "react-router-dom";
import "../../../pages/PokemonDetails/PokemonDetails.css";

const BackToHome = () => {
  return (
    <div className="explore-div">
      <Link to="/" className="explore-link">
        Explore More Pokémon
      </Link>
    </div>
  );
};

export default BackToHome;

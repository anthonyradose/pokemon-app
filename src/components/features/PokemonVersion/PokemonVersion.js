import React from "react";
import CatchingPokemonIcon from "@mui/icons-material/CatchingPokemon";
import useVersionToggle from "../../../hooks/useVersionToggle";
import "../../../pages/PokemonDetails/PokemonDetails.css";
import "./PokemonVersion.css";

const PokemonVersion = ({ blue, red }) => {
  const { showBlue, toggleToBlue, toggleToRed } = useVersionToggle(true);
  return (
    <div className="pokemon-version-container">
      <div className="pokemon-version-content">
        <div>
          <p className="pokemon-version-text">{showBlue ? blue : red} </p>
        </div>
        <div className="pokemon-version-heading">
          Versions:{" "}
          <span className="pokemon-version-toggle">
            <button
              className="pokemon-version-blue-btn"
              onClick={toggleToBlue}
              type="button"
            >
              <CatchingPokemonIcon />
            </button>
          </span>
          <span className="pokemon-version-toggle">
            <button
              className="pokemon-version-red-btn"
              onClick={toggleToRed}
              type="button"
            >
              <CatchingPokemonIcon />
            </button>
          </span>
        </div>
      </div>
    </div>
  );
};

export default PokemonVersion;

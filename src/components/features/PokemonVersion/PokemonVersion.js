import React from "react";
import CatchingPokemonIcon from "@mui/icons-material/CatchingPokemon";
import useVersionToggle from "../../../hooks/useVersionToggle";
import "../../../pages/PokemonDetails/PokemonDetails.css";

const PokemonVersion = ({ blue, red }) => {
  const { showBlue, toggleToBlue, toggleToRed } = useVersionToggle(true);
  return (
    <div className="version-container">
      <div className="version-div">
        <div>
          <p className="versions-p">{showBlue ? blue : red} </p>
        </div>
        <div className="versions-heading">
          Versions:{" "}
          <span className="version-span">
            <CatchingPokemonIcon
              className="version-blue"
              onClick={toggleToBlue}
            >
              Blue
            </CatchingPokemonIcon>
          </span>
          <span className="version-span">
            <CatchingPokemonIcon
              className="version-red"
              onClick={toggleToRed}
            >
              Red
            </CatchingPokemonIcon>
          </span>
        </div>
      </div>
    </div>
  );
};

export default PokemonVersion;

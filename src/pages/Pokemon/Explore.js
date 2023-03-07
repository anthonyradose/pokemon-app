import React from "react";
import { useNavigate } from "react-router-dom";
import "./pokemon.css";

const Explore = () => {
  const navigate = useNavigate();

  return (
    <div className="explore-div" onClick={() => navigate(`/`)}>
      <a className="explore-link">
        Explore More Pokémon
      </a>
    </div>
  );
};

export default Explore;

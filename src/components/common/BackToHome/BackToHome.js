import React from "react";
import { Link } from "react-router-dom";
import "./BackToHome.css";

const BackToHome = () => {
  return (
    <div className="back-to-home-wrapper">
      <Link to="/" className="back-to-home-link">
        Explore More Pokémon
      </Link>
    </div>
  );
};

export default BackToHome;

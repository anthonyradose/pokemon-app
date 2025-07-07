import React from "react";
import { Link } from "react-router-dom";
import styles from "./BackToHome.module.css";

const BackToHome = () => {
  return (
    <Link to="/" className={styles.backToHomeLink}>
      Explore More Pokémon
    </Link>
  );
};

export default BackToHome;

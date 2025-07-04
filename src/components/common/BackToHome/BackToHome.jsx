import React from "react";
import { Link } from "react-router-dom";
import styles from "./BackToHome.module.css";

const BackToHome = () => {
  return (
    <div className={styles.backToHome}>
      <Link to="/" className={styles.backToHomeLink}>
        Explore More Pokémon
      </Link>
    </div>
  );
};

export default BackToHome;

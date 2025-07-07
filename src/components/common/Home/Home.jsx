import { Link } from "react-router-dom";
import styles from "./Home.module.css";

const Home = () => {
  return (
    <Link to="/" className={styles.homeLink} aria-label="Go to home page">
      <div className={styles.homeIconOuter}>
        <div className={styles.homeIconInner}>
          <div className={styles.homeIconCore}>
            <div className={styles.homeIconReflection}></div>
          </div>
        </div>
      </div>
      <div className={styles.homeLinkLabel}>Home</div>
    </Link>
  );
};

export default Home;

import { Link } from "react-router-dom";
import styles from "./Nav.module.css";

const Nav = () => {
  return (
    <nav className={styles.navBar} role="navigation" aria-label="Main navigation">
      <Link to="/" className={styles.navHomeLink} aria-label="Go to home page">
        <div className={styles.navHomeIconOuter}>
          <div className={styles.navHomeIconInner}>
            <div className={styles.navHomeIconCore}>
              <div className={styles.navHomeIconReflection}></div>
            </div>
          </div>
        </div>
        <div className={styles.navLinkLabel}>Home</div>
      </Link>
    </nav>
  );
};

export default Nav;

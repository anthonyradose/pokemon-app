import { Link } from "react-router-dom";
import "./Nav.css";

const Nav = () => {
  return (
    <nav role="navigation" aria-label="Main navigation">
      <Link to="/" className="home-tab" aria-label="Go to home page">
        <div className="pokeball-outer-ring">
          <div className="pokeball-inner-ring">
            <div className="pokeball-core-outer">
              <div className="pokeball-core-inner">
                <div className="pokeball-reflection"></div>
              </div>
            </div>
          </div>
        </div>
        <div className="navigation-link">Home</div>
      </Link>
    </nav>
  );
};

export default Nav;

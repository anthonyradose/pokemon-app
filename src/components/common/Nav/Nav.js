import { Link } from "react-router-dom";
import "./Nav.css";

const Nav = () => {
  return (
    <nav role="navigation" aria-label="Main navigation">
      <Link to="/" className="home" aria-label="Go to home page">
        <div className="big-light-outer">
          <div className="big-light-inner">
            <div className="light-core-outer">
              <div className="light-core-inner">
                <div className="big-dot"></div>
              </div>
            </div>
          </div>
        </div>
        <div className="nav-link">Home</div>
      </Link>
    </nav>
  );
};

export default Nav;

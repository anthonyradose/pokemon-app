import { useNavigate } from "react-router-dom";
import "./Nav.css";

const Nav = () => {
  const navigate = useNavigate();

  return (
    <nav>
      <div className="home"  onClick={() => navigate(`/`)}>
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
      </div>
    </nav>
  );
};

export default Nav;

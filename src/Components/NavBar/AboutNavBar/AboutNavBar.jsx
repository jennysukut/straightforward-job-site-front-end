import "./AboutNavBar.css";
import { Link } from "react-router-dom";

function AboutNavBar({ setClickedButton }) {
  const buttonClick = () => {
    setClickedButton("");
  };

  return (
    <div className="nav__about-buttons">
      <Link to="/about">
        <button
          className="nav__about-button about-us-button"
          onClick={buttonClick}
        >
          about us
        </button>
      </Link>
      <Link to="/our-process">
        <button
          className="nav__about-button our-process-button"
          onClick={buttonClick}
        >
          our process
        </button>
      </Link>
      <Link to="/pricing">
        <button
          className="nav__about-button pricing-button"
          onClick={buttonClick}
        >
          pricing
        </button>
      </Link>
    </div>
  );
}

export default AboutNavBar;

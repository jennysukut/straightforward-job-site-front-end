import "./MainNavBar.css";
import { useState } from "react";
import { Link } from "react-router-dom";
import AboutNavBar from "../AboutNavBar/AboutNavBar";

function MainNavBar() {
  const [clickedButton, setClickedButton] = useState("");

  const handleAboutClick = (event) => {
    setClickedButton("about");
  };

  const handleLoginClick = (event) => {
    setClickedButton("login");
  };

  const handleSignupClick = (event) => {
    setClickedButton("signup");
  };

  const unClick = () => {
    setClickedButton("");
  };

  return (
    <div className="mainNavBar">
      <div className="nav__buttons">
        <button
          onClick={clickedButton === "about" ? unClick : handleAboutClick}
          className={
            clickedButton === "about"
              ? "buttonPress clickButton nav__button nav__about_button"
              : "nav__button nav__about_button"
          }
        >
          about
        </button>
        <button
          onClick={clickedButton === "login" ? unClick : handleLoginClick}
          className={
            clickedButton === "login"
              ? "buttonPress clickButton nav__button nav__login_button"
              : "nav__button nav__login_button"
          }
        >
          login
        </button>
        <button
          onClick={clickedButton === "signup" ? unClick : handleSignupClick}
          className={
            clickedButton === "signup"
              ? "buttonPress clickButton nav__button nav__signup_button"
              : "nav__button nav__signup_button"
          }
        >
          signup
        </button>
      </div>
      {clickedButton === "about" ? (
        <AboutNavBar setClickedButton={setClickedButton} />
      ) : (
        ""
      )}
    </div>
  );
}

export default MainNavBar;

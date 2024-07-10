import "./MainNavBar.css";
import { useState } from "react";

function MainNavBar() {
  const [clickedButton, setClickedButton] = useState("");
  const [clickedAboutButton, setClickedAboutButton] = useState("");

  const handleAboutClick = (event) => {
    setClickedButton("about");
  };

  const handleLoginClick = (event) => {
    setClickedButton("login");
  };

  const handleSignupClick = (event) => {
    setClickedButton("signup");
  };

  const handleAboutUsClick = (event) => {
    setClickedAboutButton("about-us");
  };

  const handleProcessClick = (event) => {
    setClickedAboutButton("our-process");
  };

  const handlePricingClick = (event) => {
    setClickedAboutButton("pricing");
  };

  return (
    <div className="mainNavBar">
      <div className="nav__buttons">
        <button
          onClick={handleAboutClick}
          className={
            clickedButton === "about"
              ? "buttonPress hollowButton nav__button nav__about_button"
              : "nav__button nav__about_button"
          }
        >
          about
        </button>
        <button
          onClick={handleLoginClick}
          className={
            clickedButton === "login"
              ? "buttonPress clickButton nav__button nav__login_button"
              : "nav__button nav__login_button"
          }
        >
          login
        </button>
        <button
          onClick={handleSignupClick}
          className={
            clickedButton === "signup"
              ? "buttonPress clickButton nav__button nav__signup_button"
              : "nav__button nav__signup_button"
          }
        >
          signup
        </button>
      </div>
      <div
        className={
          clickedButton === "about"
            ? "visible nav__about-buttons"
            : "nav__about-buttons"
        }
      >
        <button
          onClick={handleAboutUsClick}
          className={
            clickedAboutButton === "about-us"
              ? "buttonPress clickButton nav__about-button about-us-button"
              : "nav__about-button about-us-button"
          }
        >
          about us
        </button>
        <button
          onClick={handleProcessClick}
          className={
            clickedAboutButton === "our-process"
              ? "buttonPress clickButton nav__about-button our-process-button"
              : "nav__about-button our-process-button"
          }
        >
          our process
        </button>
        <button
          onClick={handlePricingClick}
          className={
            clickedAboutButton === "pricing"
              ? "buttonPress clickButton nav__about-button pricing-button"
              : "nav__about-button pricing-button"
          }
        >
          pricing
        </button>
      </div>
    </div>
  );
}

export default MainNavBar;

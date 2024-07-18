import "./Footer.css";
import { useState, useRef, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

function Footer({ footerIsFixed }) {
  const [clickedButton, setClickedButton] = useState("");

  const handleAboutClick = () => {
    console.log("clicked the 'about' button");
    setClickedButton("about");
  };

  const handleContactClick = (event) => {
    console.log("clicked the 'login' button");
    setClickedButton("contact");
  };

  const handleTransparencyClick = (event) => {
    console.log("clicked the 'signup' button");
    setClickedButton("transparency");
  };

  const DelayedLink = ({ delay, replace, state, to, ...props }) => {
    const navigate = useNavigate();
    const timerRef = useRef();

    useEffect(() => () => clearTimeout(timerRef.current), []);

    const clickHandler = (e) => {
      e.preventDefault();
      timerRef.current = setTimeout(navigate, delay, to, { replace, state });
    };

    return <Link to={to} {...props} onClick={clickHandler} />;
  };

  return (
    <div
      className={footerIsFixed === "true" ? "footer footer__fixed" : "footer"}
    >
      <div className="footer__buttons">
        <button
          onClick={handleContactClick}
          className={
            clickedButton === "contact"
              ? "footerButtonPress clickButton footer_button footer_contact-button"
              : "footer_button footer_contact-button"
          }
        >
          contact
        </button>
        <Link onClick={handleAboutClick} to="/about">
          <button
            className={
              clickedButton === "about"
                ? "footerButtonPress clickButton footer_button footer_about-button"
                : "footer_button footer_about-button"
            }
          >
            about
          </button>
        </Link>
        <Link onClick={handleTransparencyClick} to="/pricing">
          <button
            className={
              clickedButton === "transparency"
                ? "footerButtonPress clickButton footer_button footer_transparency-button"
                : "footer_button footer_transparency-button"
            }
          >
            pricing
          </button>
        </Link>
      </div>
      <p className="footer_copyright">©2024, Straightforward Job Site</p>
    </div>
  );
}

export default Footer;

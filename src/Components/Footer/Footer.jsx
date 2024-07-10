import "./Footer.css";
import { useState } from "react";

function Footer() {
  const [clickedButton, setClickedButton] = useState("");

  const handleAboutClick = (event) => {
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

  return (
    <div className="footer">
      <div className="footer__buttons">
        <button
          onClick={handleContactClick}
          className={
            clickedButton === "contact"
              ? "buttonPress clickButton footer_button footer_contact-button"
              : "footer_button footer_contact-button"
          }
        >
          contact
        </button>
        <button
          onClick={handleAboutClick}
          className={
            clickedButton === "about"
              ? "buttonPress clickButton footer_button footer_about-button"
              : "footer_button footer_about-button"
          }
        >
          about
        </button>
        <button
          onClick={handleTransparencyClick}
          className={
            clickedButton === "transparency"
              ? "buttonPress clickButton footer_button footer_transparency-button"
              : "footer_button footer_transparency-button"
          }
        >
          transparency
        </button>
      </div>
      <p className="footer_copyright">©2024, Straightforward Job Site</p>
    </div>
  );
}

export default Footer;

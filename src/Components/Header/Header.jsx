import { Link } from "react-router-dom";

import "./Header.css";
import logo from "../../images/SFJSLogo.svg";
import MainNavBar from "../NavBar/MainNavBar/MainNavBar";
import IndivNavBar from "../NavBar/IndivNavBar/IndivNavBar";

//type of header should reflect the logged-in status of the user or business at any given moment.

function Header({ handleLogInClick, activeModal, typeOfHeader }) {
  const handleLogoClick = () => {
    console.log("logo clicked");
  };

  return (
    <div className={typeOfHeader === "mail" ? "header header__mail" : "header"}>
      <Link to="/">
        <img
          src={logo}
          onClick={handleLogoClick}
          alt="Straightforward Job Site Logo"
          className={
            typeOfHeader === "mail"
              ? "header__logo header__logo-mail"
              : "header__logo"
          }
        />
      </Link>
      {(typeOfHeader === "profile") | (typeOfHeader === "mail") ? (
        <IndivNavBar typeOfHeader={typeOfHeader} />
      ) : (
        <MainNavBar
          handleLogInClick={handleLogInClick}
          activeModal={activeModal}
        />
      )}
    </div>
  );
}

export default Header;

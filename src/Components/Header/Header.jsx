import { Link } from "react-router-dom";

import "./Header.css";
import logo from "../../images/SFJSLogo.svg";
import MainNavBar from "../NavBar/MainNavBar/MainNavBar";

function Header() {
  const handleLogoClick = () => {
    console.log("logo clicked");
  };

  return (
    <div className="header">
      <Link to="/">
        <img
          src={logo}
          onClick={handleLogoClick}
          alt="Straightforward Job Site Logo"
          className="header__logo"
        />
      </Link>
      <MainNavBar />
    </div>
  );
}

export default Header;

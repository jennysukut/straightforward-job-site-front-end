import "./Header.css";
import logo from "../../images/SFJSLogo.svg";
import MainNavBar from "../NavBar/MainNavBar/MainNavBar";

function Header() {
  const handleLogoClick = () => {
    console.log("logo clicked");
  };

  return (
    <div className="header">
      <img
        src={logo}
        onClick={handleLogoClick}
        alt="Straightforward Job Site Logo"
        className="header__logo"
      />
      <MainNavBar />
    </div>
  );
}

export default Header;

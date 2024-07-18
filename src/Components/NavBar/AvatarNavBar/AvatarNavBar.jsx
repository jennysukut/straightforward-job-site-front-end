import "./AvatarNavBar.css";
import { useState } from "react";
import { Link } from "react-router-dom";

function AvatarNavBar() {
  const [clickedButton, setClickedButton] = useState("");

  const handleProfileClick = () => {
    setClickedButton("profile");
  };

  const handleSettingsClick = () => {
    setClickedButton("settings");
  };

  const unClick = () => {
    setClickedButton("");
  };

  return (
    <div className="avatarNavBar">
      <div className="avatarNavBar__buttons">
        <Link to="/user" onClick={unClick}>
          <button
            onClick={clickedButton === "profile" ? unClick : handleProfileClick}
            className={
              clickedButton === "profile"
                ? "buttonPress clickButton avatarNavBar__button profile"
                : "avatarNavBar__button profile"
            }
          >
            profile
          </button>
        </Link>
        <Link to="/settings">
          <button
            onClick={
              clickedButton === "settings" ? unClick : handleSettingsClick
            }
            className={
              clickedButton === "settings"
                ? "buttonPress clickButton avatarNavBar__button settings"
                : "avatarNavBar__button settings"
            }
          >
            settings
          </button>
        </Link>
      </div>
    </div>
  );
}

export default AvatarNavBar;

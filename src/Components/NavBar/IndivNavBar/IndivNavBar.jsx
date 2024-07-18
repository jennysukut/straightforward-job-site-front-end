import "./IndivNavBar.css";
import AvatarNavBar from "../AvatarNavBar/AvatarNavBar";

import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import Avatar from "../../../images/LargeTestAvatar.svg";

function IndivNavBar({ typeOfHeader }) {
  const [clickedButton, setClickedButton] = useState("");

  const handleMailClick = (event) => {
    setClickedButton("mail");
  };

  const handleJobsButton = (event) => {
    setClickedButton("jobs");
  };

  const handleAppsClick = (event) => {
    setClickedButton("apps");
  };

  const handleAvatarClick = () => {
    setClickedButton("avatar");
  };

  const unClick = () => {
    setClickedButton("");
  };

  return (
    <div className="indivNavBar">
      <div className="nav__buttons">
        <Link to="/mail">
          <button
            onClick={clickedButton === "mail" ? unClick : handleMailClick}
            className={
              clickedButton === "mail"
                ? "buttonPress clickButton nav__button nav__mail_button"
                : "nav__button nav__mail_button"
            }
          >
            mail
          </button>
        </Link>
        <button
          onClick={clickedButton === "jobs" ? unClick : handleJobsButton}
          className={
            clickedButton === "jobs"
              ? "buttonPress clickButton nav__button nav__jobs_button"
              : "nav__button nav__jobs_button"
          }
        >
          jobs
        </button>
        <button
          onClick={clickedButton === "apps" ? unClick : handleAppsClick}
          className={
            clickedButton === "apps"
              ? "buttonPress clickButton nav__button nav__apps_button"
              : "nav__button nav__apps_button"
          }
        >
          apps
        </button>
        <img
          src={Avatar}
          alt="user avatar"
          onClick={clickedButton === "avatar" ? unClick : handleAvatarClick}
          className={
            clickedButton === "avatar"
              ? "buttonPress clickButton nav__avatar"
              : "nav__avatar"
          }
        />
      </div>
      {clickedButton === "avatar" ? <AvatarNavBar /> : ""}
    </div>
  );
}

export default IndivNavBar;

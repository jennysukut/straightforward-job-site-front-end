import "./Main.css";
import { useState } from "react";
import { Link } from "react-router-dom";

import Header from "../Header/Header";
import Footer from "../Footer/Footer";

function Main({ handleLogInClick, activeModal }) {
  const [clickedButton, setClickedButton] = useState("");
  const [footerIsFixed, setFooterIsFixed] = useState("true");

  const handleDifferentButton = (event) => {
    console.log("clicked different button");
    setClickedButton("different");
  };

  const handleExploreJobsButton = (event) => {
    console.log("clicked the 'explore jobs' button");
    setClickedButton("view-jobs");
  };

  return (
    <>
      <Header handleLogInClick={handleLogInClick} activeModal={activeModal} />
      <div className="main">
        <h1 className="main__info">
          here, we utilize
          <span className="highlightedword fadeIn"> simplicity </span>
          and
          <span className="highlightedword fadeIn">
            {" "}
            effective communication{" "}
          </span>
          to make job searching & recruiting better for
          <span className="highlightedword fadeIn"> everyone.</span>
        </h1>
        <div className="main__buttons">
          <Link to="/about">
            <button
              onClick={handleDifferentButton}
              className={
                clickedButton === "different"
                  ? "buttonPress clickButtonMain main__button main__different_button"
                  : "main__button main__different_button"
              }
            >
              what makes us different?
            </button>
          </Link>
          <Link to="/listings">
            <button
              onClick={handleExploreJobsButton}
              className={
                clickedButton === "view-jobs"
                  ? "buttonPress clickButtonMain main__button main__explore_jobs_button"
                  : "main__button main__explore_jobs_button"
              }
            >
              explore jobs
            </button>
          </Link>
        </div>
        <Footer footerIsFixed={footerIsFixed} />
      </div>
    </>
  );
}

export default Main;

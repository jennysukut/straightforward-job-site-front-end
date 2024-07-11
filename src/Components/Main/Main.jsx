import "./Main.css";
import { useState } from "react";

function Main() {
  const [clickedButton, setClickedButton] = useState("");

  const handleDifferentButton = (event) => {
    console.log("clicked different button");
    setClickedButton("different");
  };

  const handleExploreJobsButton = (event) => {
    console.log("clicked the 'explore jobs' button");
    setClickedButton("view-jobs");
  };

  return (
    <div className="main">
      <h1 className="main__info">
        here, we utilize
        <span className="highlightedword fadeIn"> simplicity </span>
        and
        <span className="highlightedword fadeIn">
          {" "}
          effective communication{" "}
        </span>
        to make job searching & recruiting better for everyone.
      </h1>
      <div className="main__buttons">
        <button
          onClick={handleDifferentButton}
          className={
            clickedButton === "different"
              ? "buttonPress clickButton main__button main__different_button"
              : "main__button main__different_button"
          }
        >
          what makes us different?
        </button>
        <button
          onClick={handleExploreJobsButton}
          className={
            clickedButton === "view-jobs"
              ? "buttonPress clickButton main__button main__explore_jobs_button"
              : "main__button main__explore_jobs_button"
          }
        >
          explore jobs
        </button>
      </div>
    </div>
  );
}

export default Main;

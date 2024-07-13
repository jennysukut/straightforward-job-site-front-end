import "./JobListings.css";

import { useState } from "react";

import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Data from "../../utils/MOCK_DATA.json";

function JobListings({ handleLogInClick, activeModal }) {
  const [query, setQuery] = useState("");

  //differentiate query from the search,
  //that way the search only happens once the user clicks the button

  return (
    <>
      <Header handleLogInClick={handleLogInClick} activeModal={activeModal} />
      <div className="listing">
        <div className="listing__search-bar">
          <div className="search-bar-and-button">
            <input
              type="text"
              className="search-bar"
              placeholder="search for opportunities"
              onChange={(event) => setQuery(event.target.value)}
            />
            <button className="search__submit-button">find openings</button>
          </div>
          <div className="listing__filter-buttons">
            <button className="listing__filter">level</button>
            <button className="listing__filter">pay</button>
            <button className="listing__filter">location</button>
          </div>
        </div>
        <div className="listing__results">
          {Data.filter((job) => {
            if (query === "") {
              return;
            } else if (job.title.toLowerCase().includes(query.toLowerCase())) {
              return job;
            }
          }).map((job) => {
            return (
              <div key={job} className="jobinfo">
                <p className="job">{job.title}</p>
                <p className="company"> {job.company} </p>
                <p className="job__pay"> {job.pay}</p>
              </div>
            );
          })}
        </div>
        <Footer />
      </div>
    </>
  );
}

export default JobListings;

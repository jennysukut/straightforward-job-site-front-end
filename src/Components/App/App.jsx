import { useState, useEffect } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";

import "./App.css";
import Header from "../Header/Header";
import Main from "../Main/Main";
import Footer from "../Footer/Footer";
import About from "../About/About";
import Process from "../Process/Process";
import Pricing from "../Pricing/Pricing";
import JobListings from "../JobListings/JobListings";
import ModalWithForm from "../ModalWithForm/ModalWithForm";
import LoginModal from "../LoginModal/LoginModal";
import IndividualProfile from "../IndividualProfile/IndividualProfile";

function App() {
  const [displayType, setDisplayType] = useState("static");
  const [activeModal, setActiveModal] = useState("");

  const closeActiveModal = () => {
    setActiveModal("");
  };

  const handleLogInClick = () => {
    setActiveModal("login");
  };

  return (
    <>
      <div className="app">
        <Routes>
          <Route
            path="/"
            element={
              <Main
                handleLogInClick={handleLogInClick}
                activeModal={activeModal}
              />
            }
          />
          <Route
            path="/about"
            element={
              <About
                handleLogInClick={handleLogInClick}
                activeModal={activeModal}
              />
            }
          />
          <Route
            path="/our-process"
            element={
              <Process
                handleLogInClick={handleLogInClick}
                activeModal={activeModal}
              />
            }
          />
          <Route
            path="/pricing"
            element={
              <Pricing
                handleLogInClick={handleLogInClick}
                activeModal={activeModal}
              />
            }
          />
          <Route
            path="/listings"
            element={
              <JobListings
                handleLogInClick={handleLogInClick}
                activeModal={activeModal}
              />
            }
          />
          <Route
            path="/user"
            element={
              <IndividualProfile
                handleLogInClick={handleLogInClick}
                activeModal={activeModal}
              />
            }
          />
        </Routes>
        <LoginModal
          activeModal={activeModal}
          setActiveModal={setActiveModal}
          closeActiveModal={closeActiveModal}
        />
      </div>
    </>
  );
}

export default App;

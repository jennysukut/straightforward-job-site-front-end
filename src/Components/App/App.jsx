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
import Settings from "../Settings/Settings";
import Mail from "../Mail/Mail";

import { AppContext, CurrentUserContext } from "../../contexts/AppContext";

//"setTestState" - can be used to update the current page information whenever a page rerenders,
//that way the information can be tailored to each page on load?

function App() {
  const [displayType, setDisplayType] = useState("static");
  const [activeModal, setActiveModal] = useState("");
  const [testState, setTestState] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [currentUser, setCurrentUser] = useState({
    _id: "",
    type: "",
    name: "",
    avatar: "",
    email: "",
  });

  console.log(testState);

  const closeActiveModal = () => {
    setActiveModal("");
  };

  const handleLogInClick = () => {
    setActiveModal("login");
  };

  return (
    <>
      <CurrentUserContext.Provider value={{ currentUser, setCurrentUser }}>
        <div className="app">
          <AppContext.Provider value={{ isLoggedIn, setIsLoggedIn }}>
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
                    setTestState={setTestState}
                  />
                }
              />
              <Route
                path="/our-process"
                element={
                  <Process
                    handleLogInClick={handleLogInClick}
                    activeModal={activeModal}
                    setTestState={setTestState}
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
              <Route path="/settings" element={<Settings />} />

              <Route path="/mail" element={<Mail />} />
            </Routes>
            <LoginModal
              activeModal={activeModal}
              setActiveModal={setActiveModal}
              closeActiveModal={closeActiveModal}
            />
          </AppContext.Provider>
        </div>
      </CurrentUserContext.Provider>
    </>
  );
}

export default App;

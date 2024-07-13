import { useState } from "react";
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

function App() {
  const [displayType, setDisplayType] = useState("static");
  const [activeModal, setActiveModal] = useState("");

  const closeActiveModal = () => {
    console.log("closing active modal");
    setActiveModal("");
  };

  return (
    <>
      <div className="app">
        <Header />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/about" element={<About />} />
          <Route path="/our-process" element={<Process />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/listings" element={<JobListings />} />
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

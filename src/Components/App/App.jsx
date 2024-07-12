import { useState } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";

import "./App.css";
import Header from "../Header/Header";
import Main from "../Main/Main";
import Footer from "../Footer/Footer";
import About from "../About/About";
import Process from "../Process/Process";

function App() {
  const [displayType, setDisplayType] = useState("static");

  return (
    <>
      <div className="app">
        <Header />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/about" element={<About />} />
          <Route path="/our-process" element={<Process />} />
        </Routes>
        <Footer />
      </div>
    </>
  );
}

export default App;

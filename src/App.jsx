import Garden from "./Garden";
import Manifesto from "./Manifesto";
import "./app.scss";
import React, { Component }  from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Navbar from "./components/navbar/NavBar";
import { useState, useEffect } from "react";
function App() {
    const [selectedSection, setSelectedSection] = useState("intro");
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768); 
    };

    handleResize(); // Initial check

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const handleSectionChange = (section) => {
    setSelectedSection(section);
  }
  return (
    <>
      <BrowserRouter>
        <React.Fragment>
          <Navbar />
        </React.Fragment>
        <Routes>
          <Route path="/garden" element={<Garden {...{selectedSection, isMobile, setSelectedSection, handleSectionChange}} />} />
          <Route path="manifesto" element={<Manifesto />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

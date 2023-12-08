import React, { useState, useEffect } from "react";
import Topbar from "./components/topbar/Topbar";
import RightImage from "./components/right/Right";
import Intro from "./components/intro/Intro";
import Portfolio from "./components/portfolio/Portfolio";
import Contact from "./components/contact/Contact";
import Bottombar from "./components/bottombar/Bottombar";
import Navbar from "./components/navbar/NavBar";
import "./garden.scss";

export default function Garden({
  selectedSection,
  isMobile,
  handleSectionChange,
}) {


  return (
    <div className="garden">
      <div className={`sections ${isMobile ? "mobile" : ""}`}>
        {isMobile && (
          <>
            {selectedSection === "intro" && <Intro />}
            {selectedSection === "portfolio" && <Portfolio />}
            {selectedSection === "contact" && <Contact />}
          </>
        )}
        {!isMobile && (
          <>
            <Intro />
            <Portfolio />
            <Contact />
          </>
        )}
      </div>
      {isMobile && <Bottombar {...{ handleSectionChange, selectedSection }} />}
    </div>
  );
}

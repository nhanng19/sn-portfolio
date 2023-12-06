import React, { useState, useEffect } from "react";
import Topbar from "./components/topbar/Topbar";
import RightImage from "./components/right/Right";
import Intro from "./components/intro/Intro";
import Portfolio from "./components/portfolio/Portfolio";
import Contact from "./components/contact/Contact";
import Bottombar from "./components/bottombar/Bottombar";
import Navbar from "./components/navbar/NavBar";
import "./garden.scss";

export default function Garden() {
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
  };

  return (
    <div className="garden">
      <Navbar />
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
      {isMobile && <Bottombar {...{handleSectionChange, selectedSection}} />}
    </div>
  );
}

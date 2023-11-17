import Topbar from "./components/topbar/Topbar";
import RightImage from "./components/right/Right";
import Intro from "./components/intro/Intro";
import Portfolio from "./components/portfolio/Portfolio";
import Contact from "./components/contact/Contact";
import "./garden.scss";

export default function Garden() {
    return (
      <div className="garden">
        <Topbar />
        <RightImage />
        <div className="sections">
          <Intro/>
          <Portfolio/>
          <Contact/>
        </div>
      </div>
    );
}

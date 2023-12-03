import "./Bottombar.scss";
import data from "./data";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
const Bottombar = () => {
  const { pathname } = useLocation();
  function shouldShowBottombar() {
    const screenWidthThreshold = 1024;
    return window.innerWidth < screenWidthThreshold;
  }
  return (
    <div className={`bottombar ${shouldShowBottombar() ? '' : 'hidden'}`}>
      {data.map((item, i) => (
        <Link
        className={`item ${item.route === pathname ? "item-active" : ""}`}
        key={i}
        to={item.route}
      >
          <p className="number">0{i + 1}.</p>
          <p className="navigation">{item.title}</p>
        </Link>
      ))}
    </div>
  );
};

export default Bottombar;

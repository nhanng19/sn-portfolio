import "./Bottombar.scss";
import data from "./data";
const Bottombar = ({handleSectionChange, selectedSection}) => {
  function shouldShowBottombar() {
    const screenWidthThreshold = 1024;
    return window.innerWidth < screenWidthThreshold;
  }
  return (
    <div className={`bottombar ${shouldShowBottombar() ? '' : 'hidden'}`}>
      {data.map((item, i) => (
        <div
        className={`item ${item.route === selectedSection ? "item-active" : ""}`}
        key={i}
          onClick={() => handleSectionChange(item.route)}
      >
          <p className="number">0{i + 1}.</p>
          <p className="navigation">{item.title}</p>
        </div>
      ))}
    </div>
  );
};

export default Bottombar;

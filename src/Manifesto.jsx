import Topbar from "./components/topbar/Topbar";
import "./manifesto.scss";

export default function Manifesto() {
    return (
      <div className="manifesto">
        <Topbar />

        <div className="section">
            <span className="Title title-position">
                THE MANIFESTO<span className="Dashes">//</span>
            </span>

            <div className="line-break"></div>

            <span className="Quotation quotation-position-1">
                Think big, go far...<br />
                Be a pioneer, be ready to forge new paths and take smart risks.<br />
                <br />
                Build together...<br />
                Achieve amazing things by connecting and leveraging the diversity of perspectives,<br />
                skills, experiences and backgrounds of those around you. Design is collaborative.<br />
                <br />
                Fail fast and fail forward...<br />
                Good design is cultivated through iterations.<br />
                <br />
                We rise together.<br />
                We build together.<br />
                We grow together.<br />
                <br />
                Ready to jump in the rabbit hole?
            </span>
        </div>
      </div>
    );
}

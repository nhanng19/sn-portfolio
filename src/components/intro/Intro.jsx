import "./intro.scss";

export default function Intro() {
  return (
    <div className='intro' id="intro">
      <span className="Title title-position">
        WELCOME TO<br />
        THE GARDEN<span className="Dashes">//</span>
      </span>


      <span className="Quotation quotation-position-1">
        It looks like a jumble of rectangles.<br />
        Greys and whites.<br />
        Iterations and prototyping.<br />
        Then, eventually sigh of relief and a feeling of accomplishment.<br />
        That is design.
      </span>

      <div className="Red-highlighting red-highlight-position">
        My name is Sandy Nguyen.
      </div>

      <span className="Quotation quotation-position-2">
        I’m a California-based designer with a passion for beautiful, accessible design.<br />
        I want to serve as the bridge between business goals and user goals,<br />
        while at the same time, be an advocate and doer for design.<br />
      </span>

      <span className="Quotation quotation-position-3">
        Are you ready to build together?<span className="Dashes">//</span>
        <a className="Black-button black-button-sizing" href="#portfolio">
          They Were ↓
        </a>
      </span>
    </div>
  )
}

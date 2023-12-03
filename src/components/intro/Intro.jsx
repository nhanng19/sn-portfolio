import React, { Component }  from 'react';

import "./intro.scss";

export default function Intro() {
  return (
    <div className='intro' id="intro">
      <span class="Title title-position">
        WELCOME TO<br />
        THE GARDEN<span class="Dashes">//</span>
      </span>


      <span class="Quotation quotation-position-1">
        It looks like a jumble of rectangles.<br />
        Greys and whites.<br />
        Iterations and prototyping.<br />
        Then, eventually sigh of relief and a feeling of accomplishment.<br />
        That is design.
      </span>

      <div class="Red-highlighting red-highlight-position">
        My name is Sandy Nguyen.
      </div>

      <span class="Quotation quotation-position-2">
        I’m a California-based designer with a passion for beautiful, accessible design.<br />
        I want to serve as the bridge between business goals and user goals,<br />
        while at the same time, be an advocate and doer for design.<br />
      </span>

      <span class="Quotation quotation-position-3">
        Are you ready to build together?<span class="Dashes">//</span>
        <a class="Black-button black-button-sizing" href="#portfolio">
          They Were ↓
        </a>
      </span>
    </div>
  )
}

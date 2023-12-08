import React, { Component }  from 'react';

import "./contact.scss";

export default function Contact() {
  return (
    <div className="contact" id="contact">
      <span class="Title title-position">
        INTO THE<br />
        RABBIT HOLE<span class="Dashes">//</span>
      </span>

      <span class="Quotation quotation-position-1">
        Jump down the rabbit hole with me and lets get started on a new project together.<br /> Contact me through any of the following.
      </span>


      <div className="line-break hide-mobile"></div>
      <hr className="hide-desktop"/>
      <div className="personal-info-box">

          <a className="link" href="mailto:sandynguyen1276@gmail.com">
            <li className="tile">
              <img src="images/contact-bird.png" alt="Image" className="bird-image"/>
              <span className="title">EMAIL</span>
              <span className="message">Send me and email</span>
            </li>
          </a>

          <a className="link" href="https://www.linkedin.com/in/-sandy-nguyen/">
            <li className="tile">
              <img src="images/linkedin-bird.png" alt="Image" className="bird-image"/>
              <span className="title">LINKEDIN</span>
              <span className="message">Connect with me</span>
            </li>
          </a>

          <a className="link" href="https://t.me/sandyngu">
            <li className="tile">
              <img src="images/telegram-bird.png" alt="Image" className="bird-image"/>
              <span className="title">TELEGRAM</span>
              <span className="message">Send me a message</span>
            </li>
          </a>

          <a className="link" href="https://calendly.com/sandy_nguyen/30?month=2022-05">
            <li className="tile">
              <img src="images/calendy-bird.png" alt="Image" className="bird-image"/>
              <span className="title">CALENDY</span>
              <span className="message">Schedule a hangout</span>
            </li>
          </a>
   
      </div>
    </div>
  )
}

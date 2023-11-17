import React, { Component }  from 'react';

import "./topbar.scss";
import { Link } from "react-router-dom";

export default function Topbar() {
  return (
    <div className="topbar">
      <div className="wrapper">
        <div className="left">
          <Link to="/garden" style={{ textDecoration: 'none' }}>
            <span className="name">
              SANDY
            </span>
          </Link>
        </div>
        <div className="right">
            <Link to="/garden" style={{ textDecoration: 'none' }}>
              <span className="name garden-name">GARDEN</span>
            </Link>
            <Link to="/manifesto" style={{ textDecoration: 'none' }}>
              <span className="name manifesto-name">MANIFESTO</span>
            </Link>
            <div>
              <a className="name" href="https://drive.google.com/file/d/1CeBOftEQb7FyD2K8waF91TloiMtjClnT/view">RESUME</a>
            </div>
            <div>
              <a className="name" href="https://www.linkedin.com/in/-sandy-nguyen/">LINKEDIN</a>
            </div>
            <div>
              <a className="name" href="mailto:sandynguyen1276@gmail.com">CONTACT</a>
            </div>
        </div>
      </div>
    </div>
  )
}

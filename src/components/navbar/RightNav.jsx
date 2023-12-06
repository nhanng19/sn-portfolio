import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Ul = styled.ul`
  list-style: none;
  display: flex;
  align-items: center;
  text-align: center;
  li {
    position: relative;
    padding: 5px 10px;
    cursor: none;
    color: black;
    
  }
  li a {
    transition: 0.2s all linear;
    text-decoration: none;
    color: black;
  }
  li:hover a {
    font-weight: bold;
  }

  li:hover div {
    display: block;
  }
  div {
    display: none;
    position: absolute;
    background-color: #111;
    margin-top: 0.25rem;
    min-width: 160px;
    box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
    z-index: 1;
    transition: 0.2s linear all;
    text-align: left;
  }

  div a {
    padding: 12px 16px;
    text-decoration: none;
    display: block;
    font-size: 0.75rem;
  }

  div a:hover {
    background-color: rgb(227, 229, 196);
    color: black;
  }

  div:hover div {
    display: block;
  }

  p {
    display: none;
  }

  .logo {
    width: 72px;
    height: 32px;
    border-radius: 5px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #a53c46;
    font-family: Poppins;
    font-size: 16px;
    font-weight: 900;
    color: #fff;
    position: absolute;
    top: 32px;
    display: none;
  }

  .navigation {
    font-family: Ubuntu Mono;
    line-height: 1.4;
    letter-spacing: 1.2px;
  }

  @media (max-width: 600px) {
    flex-flow: column nowrap;
    background: white;
    position: fixed;
    transform: ${({ open }) => (open ? "translateX(0)" : "translateX(100%)")};
    top: 0;
    right: 0;
    height: 100vh;
    width: 100vw;
    padding: 7rem 22px;
    transition: transform 0.3s ease-in-out;
    align-items: start;
    gap: 1rem;
    li {
      color: #000 !important;
      font-family: Poppins;
      font-size: 24px;
      font-style: normal;
      font-weight: 800;
      line-height: 103.5%; /* 24.84px */
      color: #000 !important;
      font-family: Poppins;
      font-size: 24px;
      font-style: normal;
      font-weight: 800;
      line-height: 103.5%; /* 24.84px */
      width: 100%;
      text-align: left;
      border-bottom: 1px solid #ece7e5;
      padding: 1.5rem 0rem;
    }

    li:last-child {
      border: none;
    }

    p {
      justify-self: flex-end;
      display: block;
      position: absolute;
      bottom: 32px;
      color: #262626;
      font-family: Ubuntu Mono;
      font-size: 12px;
      font-style: normal;
      font-weight: 400;
      line-height: 24px; /* 200% */
      letter-spacing: 0.072px;
    }

    .logo {
      display: flex;
    }
  }
`;

const RightNav = ({ open }) => {
  const navigation = [
    {
      title: "GARDEN",
      href: "/garden",
    },
    {
      title: "MANIFESTO",
      href: "/manifesto",
    },
    {
      title: "RESUME",
      href: "https://drive.google.com/file/d/1CeBOftEQb7FyD2K8waF91TloiMtjClnT/view",
      isHard: true
    },
    {
      title: "LINKEDIN",
      href: "https://www.linkedin.com/in/-sandy-nguyen/",
      isHard: true
    },
    {
      title: "CONTACT",
      href: "mailto:sandynguyen1276@gmail.com",
      isHard: true
    },
  ];
  return (
    <div className="topbar">
      <div className="wrapper">
        <div className="left">
          <Link to="/garden" style={{ textDecoration: "none" }}>
            <span className="name">SANDY</span>
          </Link>
        </div>
        <Ul open={open}>
          <Link to="/garden">
            <span className="logo">SANDY</span>
          </Link>
          {navigation.map((item) =>
            !item.isHard ? (
              <li key={item.title}>
                <Link to={item.href}>
                  <span className="navigation">{item.title}</span>
                </Link>
              </li>
            ) : (
              <li key={item.title}>
                <a href={item.href}>
                  <span className="navigation">{item.title}</span>
                </a>
              </li>
            )
          )}
          <p>Made with love in Los Angeles, CA.</p>
        </Ul>
      </div>
    </div>
  );
};

export default RightNav;

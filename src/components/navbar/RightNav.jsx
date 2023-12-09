import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
const Ul = styled.ul`
  list-style: none;
  display: flex;
  align-items: center;
  text-align: center;
  li {
    position: relative;
    padding: 5px 10px;
    color: black;
  }
  li a {
    text-decoration: none;
    color: black;
    font-family: Ubuntu Mono;
    padding: 6px 8px;
  }

  .text-decoration-underline {
    text-decoration: underline;
  }

  li a span {
    font-family: Ubuntu Mono;
    font-size: 12px;
    font-style: normal;
    font-weight: 400;
    line-height: 16.8px; /* 140% */
    letter-spacing: 1.2px;
  }

  li:hover a {
    text-decoration: underline;
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

  p {
    display: none;
  }

  .name {
    border-radius: 4px;
    background-color: #333;
    text-decoration: none;
    color: #fff !important;
  }

  .name:hover {
    text-decoration: none !important;
  }

  .manifesto-name {
    background-color: #b3b3b3;
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

  @media (max-width: 768px) {
    flex-flow: column nowrap;
    background: white;
    position: fixed;
    transform: ${({ open }) => (open ? "translateX(0)" : "translateX(100%)")};
    top: 0;
    right: 0;
    height: 100dvh;
    width: 100vw;
    padding: 7rem 22px;
    transition: transform 0.3s ease-in-out;
    align-items: start;
    gap: 1rem;
    li {
      width: 100%;
      text-align: left;
      border-bottom: 1px solid #ece7e5;
      padding: 1.3rem 0rem;
    }

    .text-decoration-underline {
      text-decoration: none !important;
    }

    li a span {
      color: #000;
      font-family: Poppins;
      font-size: 24px;
      font-style: normal;
      font-weight: 800;
      line-height: 103.5%;
    }
    li:hover a {
      text-decoration: none!important;
    }

    li:last-child {
      border: none;
    }
    li a {
      background: white !important;
    }

    li a:hover {
      text-decoration: none;
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

const RightNav = ({ open, setOpen, setSelectedSection, dark, setDark, isMobile }) => {
  const navigate = useNavigate();

  const navigation = [
    {
      title: "RESUME",
      href: "https://drive.google.com/file/d/1CeBOftEQb7FyD2K8waF91TloiMtjClnT/view",
      isHard: true,
    },
    {
      title: "LINKEDIN",
      href: "https://www.linkedin.com/in/-sandy-nguyen/",
      isHard: true,
    },
    {
      title: "CONTACT",
      href: "mailto:sandynguyen1276@gmail.com",
      isHard: true,
    },
  ];
  return (
    <div style={{ background: dark ? "black" : "white" }} className="topbar">
      <div className="wrapper">
        <div className="left">
          <a
            onClick={() => {
              setOpen(false);
              setSelectedSection("intro");
              setDark(false);
              navigate("/garden");
            }}
            href={"#"}
            style={{ textDecoration: "none" }}
          >
            <span className="name">SANDY</span>
          </a>
        </div>
        <Ul open={open}>
          <a
            onClick={() => {
              setOpen(false);
              setSelectedSection("intro");
              setDark(false);
              navigate("/garden");
            }}
            to="/garden"
          >
            <span className="logo">SANDY</span>
          </a>
          <li key={"garden"}>
            <a
              onClick={() => {
                setOpen(false);
                setSelectedSection("intro");
                setDark(false);
                navigate("/garden");
              }}
              href={"#"}
              className={` ${
                dark && !isMobile ? "name" : "text-decoration-underline"
              }`}
            >
              <span className="navigation">GARDEN</span>
            </a>
          </li>
          <li key={"manifesto"}>
            <a
              onClick={() => {
                setOpen(false);
                navigate("/manifesto");
                setDark(true);
              }}
              href={"#"}
              className={` ${dark && !isMobile ? "name manifesto-name" : ""}`}
            >
              <span className="navigation">MANIFESTO</span>
            </a>
          </li>
          {navigation.map((item) =>
            !item.isHard ? (
              <li key={item.title}>
                <a
                  className={` ${dark && !isMobile ? "name" : ""}`}
                  onClick={() => {
                    setOpen(false);
                  }}
                  href={item.href}
                >
                  <span className="navigation">{item.title}</span>
                </a>
              </li>
            ) : (
              <li key={item.title}>
                <a
                  className={` ${dark && !isMobile ? "name" : ""}`}
                  onClick={() => setOpen(false)}
                  href={item.href}
                >
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

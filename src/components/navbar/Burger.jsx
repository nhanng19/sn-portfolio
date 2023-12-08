import React, { useState } from "react";
import styled from "styled-components";
import RightNav from "./RightNav";

const StyledBurger = styled.div`
  width: 2rem;
  height: 2rem;
  position: fixed;
  top: 32px;
  right: 20px;
  z-index: 20;
  display: none;
  @media (max-width: 600px) {
    display: flex;
    justify-content: space-around;
    flex-flow: column nowrap;
  }
  div {
    width: 2rem;
    height: 3px;
    background-color: ${({ open }) => (open ? "#000000" : "#000000")};
    border-radius: 10px;
    transform-origin: 1px;
    transition: all 0.3s linear;
    &:nth-child(1) {
      transform: ${({ open }) => (open ? "rotate(45deg)" : "rotate(0)")};
    }
    &:nth-child(2) {
      transform: ${({ open }) => (open ? "translateX(100%)" : "translateX(0)")};
      opacity: ${({ open }) => (open ? 0 : 1)};
    }
    &:nth-child(3) {
      transform: ${({ open }) => (open ? "rotate(-45deg)" : "rotate(0)")};
    }
  }
`;

const Burger = ({ setSelectedSection }) => {
    const [dark, setDark] = useState(false);
  const [open, setOpen] = useState(false);

  return (
    <>
      <StyledBurger open={open} onClick={() => setOpen(!open)}>
        <div style={{ backgroundColor: dark ? "white" : "black" }} />
        <div style={{  backgroundColor: dark ? "white" : "black" }} />
        <div style={{  backgroundColor: dark ? "white" : "black" }} />
      </StyledBurger>
      <RightNav
        dark={dark}
        setDark={ setDark}
        setSelectedSection={setSelectedSection}
        setOpen={setOpen}
        open={open}
      />
    </>
  );
};

export default Burger;

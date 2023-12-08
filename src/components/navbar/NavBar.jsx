import React from "react";
import styled from "styled-components";
import Burger from "./Burger";

const Nav = styled.nav`
  width: 100%;
  height: 70px;
  background: none;
  display: flex;
  justify-content: center;
  position: fixed;
  text-align: center;
  z-index: 9999;
  align-items: center;
`;

const Navbar = ({ isMobile, setSelectedSection}) => {
  return (
    <Nav>
      <Burger {...{ isMobile, setSelectedSection }} />
    </Nav>
  );
};

export default Navbar;

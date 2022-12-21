import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import Logo from "../Images/logo.png";
import Nav from "./Nav";
const Header = () => {
  return (
    <MainHeader>
      <NavLink to="/">
        <img
          src={Logo}
          alt="my logo"
          style={{ height: "50px", width: "100%" }}
        />
      </NavLink>
      <Nav />
    </MainHeader>
  );
};
const MainHeader = styled.header`
  height: 70px;
  background-color: ${({ theme }) => theme.colors.bg};
  display: flex;
  justify-content: space-between;
  align-items: center;  
  position: relative;
  padding: 0 20px;

  .logo {
    height: 5rem;
  }

  @media (min-width: ${({ theme }) => theme.media.mobile}) {
  }
`;
export default Header;

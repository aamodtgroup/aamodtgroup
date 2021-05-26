import React from "react";
import { connect, styled } from "frontity";
import Link from "../link";
import MobileMenu from "./menu";
import Toggle from "../toggle";
import Logo from "./logo";
import Nav from "./nav";

const NavBar = () => {
  return (
    <NavContainer>
        <Logo />
        <Nav />
        <div className="buttons">
            <Toggle />
            <MobileMenu />
        </div>
    </NavContainer>
  );
};

export default connect(NavBar);

const NavContainer = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 auto;
  transition: padding 0.5s ease;
  background-color: var(--background);
  transition: background-color var(--transition);
  padding: 0 15px;
  border-bottom: 1px solid var(--border);
  .buttons {
    display: flex;
  }
`;
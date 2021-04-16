import React from "react";
import { connect, styled } from "frontity";
import Link from "../link";
import MobileMenu from "./menu";
import logo from "../../images/logo.svg";
import darkLogo from "../../images/darklogo.svg";
import Toggle from "../toggle";
import Logo from "./logo";
import Nav from "./nav";

const Header = ({ state }) => {
  const { mode } = state.theme;

  return (
    <>
      <TopNavContainer>
          <Logo />
          <div className="buttons">
            <Nav />
            <Toggle />
            <MobileMenu />
          </div>
      </TopNavContainer>
    </>
  );
};

export default connect(Header);

const TopNavContainer = styled.nav`
  position: fixed;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 auto;
  padding: 15px 50px;
  transition: padding 0.5s ease;
  background-color: var(--background);
  transition: background-color var(--transition);
  z-index: 99;
  max-width: 100%;
  width: 100%;
  border-bottom: 1px solid var(--border);
  .buttons {
    display: flex;
  }
  @media (max-width: 1230px) {
    padding: 15px;
  }
`;
import React from "react";
import { connect, styled } from "frontity";
import Link from "../link";
import MobileMenu from "./menu";
import Toggle from "../toggle";
import Logo from "./logo";
import Nav from "./nav";

const Header = () => {
  return (
    <>
      <TopNavContainer>
          <Logo />
          <Nav />
          <div className="buttons">
            <Toggle />
            <MobileMenu />
          </div>
      </TopNavContainer>
    </>
  );
};

export default connect(Header);

const TopNavContainer = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 auto;
  transition: padding 0.5s ease;
  background-color: var(--background);
  transition: background-color var(--transition);
  z-index: 99;
  width: 100%;
  padding: 0 15px;
  //border-bottom: 1px solid var(--border);
  .buttons {
    display: flex;
  }
`;
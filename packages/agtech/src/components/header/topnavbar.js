import React from "react";
import { connect, styled } from "frontity";
import Link from "../link";
import MobileMenu from "./menu";
import Toggle from "../toggle";
import Logo from "./logo";
import Nav from "./nav";

const TopNavBar = () => {
  return (
    <Container>
      <div className="rainbow"></div>
      <TopNavContainer>
          <Logo />
          <Nav />
          <div className="buttons">
            <Toggle />
            <MobileMenu />
          </div>
      </TopNavContainer>
    </Container>
  );
};

export default connect(TopNavBar);

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
  padding: 25px 15px;
  //border-bottom: 1px solid var(--border);
  .buttons {
    display: flex;
  }
`;


const Container = styled.div`
  .rainbow {
    height: 8px;
    width: 100vw;
    background: linear-gradient(
      90deg,
      #000,
      #784f16,
      #e40303,
      #ff8c00,
      #ffed00,
      #008026,
      #004dff,
      #750787
    );
  }
`;
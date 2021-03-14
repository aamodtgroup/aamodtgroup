import React from "react";
import { connect, styled } from "frontity";
import Link from "../link";
import MobileMenu from "./menu";
import logo from "../../images/logo.png";

const TopNavbar = ({ state }) => (
    <TopNavContainer>
        <Logo>
          <Link link="/" alt="Forside link">
            <img src={logo} alt="logo" width="150px" height="50px" />
          </Link>
        </Logo>
        <div className="open_menu">
          <p>Meny</p>
          <MobileMenu />
        </div>
    </TopNavContainer>
);

export default connect(TopNavbar);

const TopNavContainer = styled.nav`
  position: fixed;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 auto;
  padding: 15px 50px;
  background-color: #fff;
  transition: padding 0.5s ease;
  z-index: 99;
  max-width: 100%;
  width: 100%;
  border-bottom: 1px solid #e0e0e0;
  @media (max-width: 1230px) {
    padding: 15px;
  }
  .open_menu {
    display: flex;
    align-items: center;

    p {
      margin: 0 5px;
      font-size: 18px;
      font-weight: 600;
      transition: color .3s ease;
    }

    :hover {
      p {
        color: var(--brand);
      }
    }
  }
`;

const Logo = styled.div`
  img {
    width: 150px;
    height: 50px;
  }
`;
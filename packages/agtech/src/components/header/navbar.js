import React from "react";
import { connect, styled } from "frontity";
import Link from "../link";
import Nav from "./nav";
import MobileMenu from "./menu";
import logo from "../../images/logo.svg";

const NavBar = ({ state }) => (
    <NavContainer>
        <Logo>
          <Link link="/" alt="Forside link">
            <img src={logo} alt="logo" width="120px" height="40px" />
          </Link>
        </Logo>
        <Nav />
        <MobileMenu />
    </NavContainer>
);

export default connect(NavBar);

const NavContainer = styled.nav`
    display: flex;
    justify-content: space-between;
    margin: 0 auto;
    padding: .5rem 1rem;
    background-color: #fff;
    border-bottom: 1px solid #ddd;
`;

const Logo = styled.div`
    width: 120px;
    height: 40px;
`;
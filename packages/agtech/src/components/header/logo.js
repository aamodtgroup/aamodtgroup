import React from "react";
import { connect, styled } from "frontity";
import Link from "../link";

const Logo = () => {
  return (
    <>
    <Link link="/" alt="Forside link">
      <LogoWrapper>
        <span>&gt;</span><p className="logo-text">Aamodt</p><p>Group</p>
      </LogoWrapper>
    </Link>
    </>
  );
};

export default connect(Logo);

const LogoWrapper = styled.div`
  width: auto;
  display: flex;
  flex-wrap: nowrap;
  .logo-text {
    color: var(--logocolor);
  }
  p {
    font-size: var(--textsize);
    font-family: Apercu Mono Pro;
    color: var(--text);
    line-height: 2rem;
    margin-bottom: 0;
  }
  span {
    font-size: var(--textsize);
    font-family: Apercu Mono Pro;
    color: var(--text);
    line-height: 2rem;
    display: block;
    margin-right: 5px;
    transition: 500ms ease !important;
  }
  :hover {
    span {
      transform: rotateY(180deg);
    }
  }
`;
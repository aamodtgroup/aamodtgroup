import React from "react";
import { connect, styled } from "frontity";
import Link from "./link";

const Hero = () => {
  return (
    <>
      <HeroContainer>

      </HeroContainer>
    </>
  );
};

export default connect(Hero);

const HeroContainer = styled.div`
  display: flex;
  height: calc(100vh - 71px);
  min-height: calc(100vh - 71px);
  align-items: center;
  justify-content: center;
  width: 100%;
  max-width: 100vw;
  margin: 0 auto;
  color: white;
  h1 {
    margin-bottom: 1rem;
    font-size: var(--h1sizehero);
    font-weight: 600;
    width: 100%;
    max-width: 620px;
    color: #fff;
  }
  p {
    margin-bottom: 2rem;
    width: 100%;
    max-width: 620px;
    color: var(--blue-text);
  }
  .hero-inner {
    display: flex;
    align-items: flex-end;
    width: 1200px;
    height: 80%;
  }

  .buttons .wp-block-button__link {
    margin-bottom: 1rem;
    margin-right: 1rem;
  }

  @media (min-width: 1230px) {
    justify-content: center;
  }

  @media (max-width: 1230px) {
    padding-left: 15px;
    padding-right: 15px;
    width: auto;
  }

  @media (max-width: 600px) {
    height: auto;
    min-height: 600px;
    background: -webkit-linear-gradient(
        -90deg,
        rgba(0, 0, 0, 0.75),
        rgba(0, 0, 0, 0.75)
      ),
      url(https://backend.aamodtgroup.com/wp-content/uploads/2021/03/AdobeStock_314816591-scaled.jpeg);
    background-size: cover;
    background-position: 60% 50%;
    h1 {
      font-size: var(--h1size);
    }
  }
`;

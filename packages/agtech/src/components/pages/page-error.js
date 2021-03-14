import React from "react";
import { styled, connect } from "frontity";
import Link from "../link";
import Error404 from "../../images/404.svg";

const description404 = (
  <>
    <strong>Denne siden kan ikke bli funnet{" "}</strong>
    <span role="img" aria-label="confused face">
      😕
    </span>
    <br></br>
    <button className="wp-block-button__link"><Link link="/">Tilbake til hjem</Link></button>
  </>
);

const description = (
  <>
    Don&apos;t panic! Seems like you encountered an error. If this persists,
    <a href="https://example.com"> let us know </a> or try refreshing
    your browser.
  </>
);

// The 404 page component
const Page404 = ({ state }) => {
  const data = state.source.get(state.router.link);

  const title = "Oops! Noe gikk galt";

  return (
    <Container>
      {data.is404 ? <Img src={Error404} alt="404"></Img> : <Title>title</Title>}
      <Description>{data.is404 ? description404 : description}</Description>
    </Container>
  );
};

export default connect(Page404);

const Container = styled.div`
  width: 800px;
  margin: 0;
  padding: 24px;
  text-align: center;
`;

const Title = styled.h1`
  margin: 0;
  margin-top: 24px;
  margin-bottom: 8px;
  color: rgba(12, 17, 43);
  font-size: 4em;
`;

const Description = styled.div`
  line-height: 1.6em;
  color: rgba(12, 17, 43, 0.8);
  margin: 24px 0;
`;

const Img = styled.img`
  height: 303px;
  width: 350px;
  max-width: 100%;
  margin-bottom: 24px;
`;
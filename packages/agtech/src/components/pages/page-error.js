import React from "react";
import { styled, connect } from "frontity";
import Link from "@frontity/components/link";
import Error404 from "../../images/404.svg";

const description404 = (
  <>
    <strong>That page can’t be found{" "}</strong>
    <span role="img" aria-label="confused face">
      😕
    </span>
    <br></br>
    <button><Link link="/">Back to home</Link></button>
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

  const title = "Oops! Something went wrong";

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
  margin-top: 80px;
  padding: 24px;
  text-align: center;
  button {
    box-sizing: content-box;
    border: solid var(--black);
    border-width: thin;
    background-color: transparent;
    height: 1.8em;
    line-height: 1.8em;
    padding-left: 10px;
    padding-right: 10px;
    border-radius: 6px;
    margin-top: 24px;
    font-size: 16px;
    font-weight: 500;
    cursor: pointer;
    a {
      color: #043959;
    }
    :hover {
      opacity: .85;
    }
  }
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
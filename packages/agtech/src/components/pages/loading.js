import React from "react";
import { styled } from "frontity";
import Lottie from "react-lottie-player";
import animationData from "../../lottie/loading1.json";

const Loading = () => (
  <Container>
    <Lottie
      loop
      animationData={animationData}
      play
      style={{ width: 500, height: 500 }}
    />
  </Container>
);

export default Loading;


const Container = styled.div`
  width: 800px;
  margin: 0;
  padding: 24px;
  display: flex;
  justify-content: center;
  align-items: center;

  & > * {
    margin-top: 24px;
  }
`;

import React from "react";
import { styled } from "frontity";
import Lottie from "react-lottie-player";
import animationData from "../../lottie/space.json";

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
  width: 500px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: white;
  border-radius: 100%;
`;

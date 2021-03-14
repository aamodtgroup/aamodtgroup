import React, { useEffect } from "react";
import { connect, styled } from "frontity";
import List from "../list";
import Hero from "../hero";

//import Image from "@frontity/components/image";

const HomePage = ({ state, actions, libraries }) => {
  // Get information about the current URL.
  const data = state.source.get(state.router.link);
  // Get the data of the post.
  const homepage = state.source[data.type][data.id];

  // Get the html2react component.
  const Html2React = libraries.html2react.Component;
  //const BannerSlider = homepage.acf.banner_slider;

  useEffect(() => {
    actions.source.fetch("/");
    List.preload();
  }, []);

  // Load the post, but only if the data is ready.
  return data.isReady ? (
    <Content>
      <Hero />
      <Html2React html={homepage.content.rendered} />
    </Content>
  ) : null;
};

export default connect(HomePage);

const Content = styled.div`
  width: 100%;
  position: relative;
  .wp-block-group__inner-container {
    width: 100%;
    max-width: 1200px;
    margin: 0px auto;
  }
  @media (max-width: 1230px) {
    .wp-block-group__inner-container {
      max-width: 1230px;
      padding-right: 15px;
      padding-left: 15px;
      width: auto;
    }
  }
`;

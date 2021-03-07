import React from "react";
import { connect, styled } from "frontity";
import Link from "../link";
import {useTransition, animated} from 'react-spring';
import { useInView } from 'react-intersection-observer';
import TopNavbar from "./topnavbar";
import Navbar from "./navbar";

const Header = ({ state }) => {
  const [ref, inView] = useInView();
  const transitions = useTransition(!inView, null, {
    from: { position: "fixed", top: 0, left: 0, transform: "translateY(-100%)", width:"100%", maxWidth:"100%", zIndex:99 },
    enter: { transform: "translateY(0)" },
    leave: { transform: "translateY(-100%)" }
  });
  
  return (
    <>
      <div ref={ref}>
        <TopNavbar />
      </div>
      {transitions.map(
        ({ item, key, props }) =>
          item && (
            <animated.div key={key} style={props}>
              <Navbar />
            </animated.div>
          )
      )}
    </>
  );
};

export default connect(Header);
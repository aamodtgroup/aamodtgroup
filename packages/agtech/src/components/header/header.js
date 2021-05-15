  
import React from "react";
import { connect, styled } from "frontity";
import {useTransition, animated} from 'react-spring';
import { useInView } from 'react-intersection-observer';
import TopNavbar from "./topnavbar";
import Navbar from "./navbar";

const Header = () => {
  const [ref, inView] = useInView();
  const transitions = useTransition(!inView, {
    from: { position: "fixed", top: 0, left: 0, transform: "translateY(-100%)", zIndex:99, width:"100%", maxWidth:"100%" },
    enter: { transform: "translateY(0)" },
    leave: { transform: "translateY(-100%)" },
  });
  
  return (
    <>
      <div ref={ref}>
        <TopNavbar />
      </div>
      {transitions((props, item, key) =>
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
  
import React from "react";
import { connect, styled } from "frontity";
import {useTransition, animated} from 'react-spring';
import { useInView } from 'react-intersection-observer';
import TopNavbar from "./topnavbar";
import Navbar from "./navbar";
import SearchModal from "../search/search-modal";

const Header = () => {
  const [ref, inView] = useInView();
  const transitions = useTransition(!inView, {
    from: { transform: "translate3d(0,-100%,0)" },
    enter: { transform: "translate3d(0,0px,0)" },
    leave: { transform: "translate3d(0,-100%,0)" },
  });
  
  return (
    <HeaderContainer>
      <div className="rainbow"></div>
      <div ref={ref}>
        <TopNavbar />
      </div>
      {transitions((props, item, key) =>
          item && (
            <Animated>
              <animated.div key={key} style={props}>
                <Navbar />
              </animated.div>
            </Animated>
          )
      )}
      <SearchModal />
    </HeaderContainer>
  );
};

export default connect(Header);

const Animated = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 99; 
  width: 100%;
  max-width: 100%;
`;

const HeaderContainer = styled.div`
  .rainbow {
    position: fixed;
    insert: 0;
    z-index: 999;
    height: 5px;
    width: 100vw;
    background: linear-gradient(
      90deg,
      #000,
      #000 12.5%,
      #784f16 12.5%,
      #784f16 25%,
      #e40303 25%,
      #e40303 37.5%,
      #ff8c00 37.5%,
      #ff8c00 50%,
      #ffed00 50%,
      #ffed00 62.5%,
      #008026 62.5%,
      #008026 75%,
      #004dff 75%,
      #004dff 87.5%,
      #750787 87.5%,
      #750787
    );
  }
`;
import React from "react";
import { connect, styled } from "frontity";
import Switch from "@frontity/components/switch";
import sun from "../images/sun.svg";
import moon from "../images/moon.svg";


const Toggle = ({ actions, state }) => {
    const { setLightMode, setDarkMode } = actions.theme;
    const { mode } = state.theme;
    return (
        <Box onClick={ mode === "light" ? setDarkMode  : setLightMode }>
            <Switch>
                <img className="toggleicon" src={sun} height="25px" width="25px" when={mode === "dark"}/>
                <img className="toggleicon" height="25px" width="25px" src={moon}/>
            </Switch>
        </Box>
    )
}

export default connect(Toggle);

const Box = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 1rem;
    cursor: pointer;

    img {
        height: 25px;
        width: 25px;
    }
`;


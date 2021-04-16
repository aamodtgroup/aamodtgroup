import React from "react";
import { connect, styled } from "frontity";
import { DarkModeIcon, TextSizeIcon } from "./header/menu-icon";

const Toggle = ({ actions, state }) => {
    const { setLightMode, setDarkMode, setNormalText, setLargeText } = actions.theme;
    const { isMobileMenuOpen, mode, text } = state.theme;
    return (
        <ToggleContainer>
            <Box onClick={ text === "normal" ? setLargeText  : setNormalText } className="box2">
                {isMobileMenuOpen ? (
                    <TextSizeIcon color="#fff" size="25px" />
                ) : (
                    <TextSizeIcon color="var(--text)" size="25px" />
                )}
            </Box>
            <Box onClick={ mode === "light" ? setDarkMode  : setLightMode } className="box1">
                {isMobileMenuOpen ? (
                    <DarkModeIcon color="#fff" size="25px" />
                ) : (
                    <DarkModeIcon color="var(--text)" size="25px" />
                )}
            </Box>
        </ToggleContainer>
    )
}

export default connect(Toggle);

const ToggleContainer = styled.div`
    display: flex;
    height: auto;
    width: auto;
    z-index: 5;
`;


const Box = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    background: transparent;
    border: 0;
    padding: 0;
    z-index: 5;
    height: 40px;
    width: 40px;
    outline:0;
    cursor: pointer;
    transition: all .3s ease;
    &:focus {
        outline:0;
    }
`;


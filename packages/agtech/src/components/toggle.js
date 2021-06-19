import React from "react";
import { connect, styled } from "frontity";
import { DarkModeIcon, TextSizeIcon, SearchIcon } from "./icons";

const Toggle = ({ actions, state }) => {
    const { setLightMode, setDarkMode, openSearchModal, closeSearchModal, setNormalText, setLargeText } = actions.theme;
    const { isMobileMenuOpen, isSearchModalOpen, mode, text } = state.theme;
    return (
        <ToggleContainer>
            <Box onClick={ isSearchModalOpen === false ? openSearchModal  : closeSearchModal } aria-label="Click to open search bar">
                <SearchIcon color="var(--text)" size="25px" />
            </Box>
            <Box onClick={ text === "normal" ? setLargeText  : setNormalText } aria-label="Click to set large text">
                <TextSizeIcon color="var(--text)" size="25px" />
            </Box>
            <Box onClick={ mode === "light" ? setDarkMode  : setLightMode } aria-label="Click to toggle darkmode">
                <DarkModeIcon color="var(--text)" size="25px" />
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


const Box = styled.button`
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


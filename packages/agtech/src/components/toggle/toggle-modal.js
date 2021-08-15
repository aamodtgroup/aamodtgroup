import React from 'react';
import { connect, styled } from 'frontity';
import { DarkModeIcon, TextSizeIcon, SearchIcon } from '../icons';

const ToggleModal = ({ actions, state }) => {
    const {
        setLightMode,
        setDarkMode,
        openSearchModal,
        closeSearchModal,
        setNormalText,
        setLargeText,
    } = actions.theme;
    const { isSearchModalOpen, mode, text } = state.theme;
    return (
        <ToggleContainer>
            {/* <Box
                onClick={ isSearchModalOpen === false ? openSearchModal : closeSearchModal }
                aria-label="Click to open search bar"
            >
                <SearchIcon color="var(--toggle)" size="25px" />
            </Box> */}
            <Box
                onClick={text === 'normal' ? setLargeText : setNormalText}
                aria-label="Click to set large text"
            >
                <TextSizeIcon color="var(--toggle)" size="25px" />
            </Box>
            <Box
                onClick={mode === 'light' ? setDarkMode : setLightMode}
                aria-label="Click to toggle darkmode"
            >
                <DarkModeIcon color="var(--toggle)" size="25px" />
            </Box>
        </ToggleContainer>
    );
};

export default connect(ToggleModal);

const ToggleContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    height: auto;
    width: 40px;
    z-index: 5;
    background-color: var(--headerbackground);
    opacity: .95;
    border-radius: 50px;
    position: fixed;
    bottom: 110px;
    right: 55px;
    padding: 2.5px 5px;

    @media (max-width: 768px) {
        right: 20px;
        bottom: 85px;
    }
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
    outline: 0;
    cursor: pointer;
    transition: all 0.3s ease;
    &:focus {
        outline: 0;
    }
`;

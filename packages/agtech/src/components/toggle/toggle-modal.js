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
            <Grid>
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
                    <p>Toogle Large text</p>
                </Box>
                <Box
                    onClick={mode === 'light' ? setDarkMode : setLightMode}
                    aria-label="Click to toggle darkmode"
                >
                    <DarkModeIcon color="var(--toggle)" size="25px" />
                    <p>Toogle dark mode</p>
                </Box>
            </Grid>
        </ToggleContainer>
    );
};

export default connect(ToggleModal);

const ToggleContainer = styled.div`
    display: flex;
    height: auto;
    width: 250px;
    z-index: 5;
    background-color: var(--headerbackground);
    opacity: 1;
    border-radius: 50px;
    position: fixed;
    bottom: 110px;
    right: 55px;
    padding: 30px;

    @media (max-width: 768px) {
        right: 20px;
        bottom: 85px;
    }
`;

const Grid = styled.div`
    display: flex;
    flex-wrap: wrap;
    align-self: flex-start;
`;

const Box = styled.button`
    display: flex;
    background: transparent;
    margin: 10px 0;
    width: 100%;
    border: 0;
    padding: 0;
    z-index: 5;
    outline: 0;
    cursor: pointer;
    transition: all 0.3s ease;
    :not(:last-of-type) {
        border-bottom: 1px solid #fff;
        padding-bottom: 15px;
    }
    &:focus {
        outline: 0;
    }
    p {
        color: var(--toggle);
        margin-left: 10px;
        font-size: 18px;
        margin-bottom: 0;
    }
`;

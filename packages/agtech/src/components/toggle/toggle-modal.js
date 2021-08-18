import React from 'react';
import { connect, styled } from 'frontity';
import { DarkModeIcon, TextSizeIcon, SearchIcon } from '../icons';
import Switch from "react-switch";

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
            <Header>
                <h2>
                    Accessibility settings
                </h2>
            </Header>
            <Grid>
                <Box>
                    <label>
                        <span>Toogle Large text</span>
                    </label>
                    <Switch onChange={text === 'normal' ? setLargeText : setNormalText} checked={text === 'normal' ? false : true} />
                </Box>
                <Box>
                    <label>
                        <span>Toogle dark mode</span>
                    </label>
                    <Switch onChange={mode === 'light' ? setDarkMode : setLightMode} checked={mode === 'light' ? false : true} />
                </Box>
            </Grid>
            <Footer>
                <p>
                    Read more about our commitment to accessibility
                </p>
            </Footer>
        </ToggleContainer>
    );
};

export default connect(ToggleModal);

const ToggleContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    height: 75%;
    width: 500px;
    max-width: 100%;
    z-index: 9999999;
    background-color: #fff;
    opacity: 1;
    border-radius: 50px;
    position: fixed;
    bottom: 110px;
    right: 55px;
    padding: 0;
    overflow: hidden;
    box-shadow: 0 2px 4px rgb(0 0 0 / 16%);

    @media (max-width: 768px) {
        right: 20px;
        bottom: 85px;
    }
`;

const Header = styled.div`
    width: 100%;
    height: 15%;
    background-color: #0077b5;
    padding: 30px;
    align-self: flex-start;
    display: flex;
    align-items: center;
    justify-content: center;

    h2 {
        color: #fff;
        font-size: 34px;
        margin-bottom: 0;
    }
`;

const Footer = styled.div`
    width: 100%;
    height: 7.5%;
    background-color: #0077b5;
    padding: 0 10px;
    align-self: flex-end;
    display: flex;
    align-items: center;
    justify-content: center;

    p {
        color: #fff;
        font-size: 16px;
        margin-bottom: 0;
    }
`;

const Grid = styled.div`
    display: flex;
    flex-wrap: wrap;
    align-self: flex-start;
    width: 100%;
    padding: 0 15px;

    span {
        color: #000;
        font-size: 18px;
        margin-bottom: 0;
    }

    label {
        width: 100%;
        margin-bottom: 0;
    }
`;

const Box = styled.div`
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
    &:focus {
        outline: 0;
    }
`;
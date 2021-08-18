import React from 'react';
import { connect, styled } from 'frontity';
import { DarkModeIcon, TextSizeIcon, SearchIcon } from '../icons';

const ToggleModal = ({ actions, state }) => {
    const {
        setLightMode,
        setDarkMode,
        setNormalText,
        setLargeText,
    } = actions.theme;
    const { mode, text } = state.theme;
    return (
        <ToggleContainer>
            <Grid>
                <Box
                    onClick={text === 'normal' ? setLargeText : setNormalText}
                    aria-label="Click to set large text"
                    className={text === 'normal' ? '' : 'checked'}
                >
                    <TextSizeIcon color="#fff" className={text === 'normal' ? '' : 'checked'} size="25px" />
                    <label>
                        <span>Large text</span>
                    </label>
                    <p>{text === 'normal' ? 'Off' : 'On'}</p>
                </Box>
                <Box
                    onClick={mode === 'light' ? setDarkMode : setLightMode}
                    aria-label="Click to toggle darkmode"
                    className={mode === 'light' ? '' : 'checked'}
                >
                    <DarkModeIcon color="#fff" className={mode === 'light' ? '' : 'checked'} size="25px" />
                    <label>
                        <span>Dark mode</span>
                    </label>
                    <p>{mode === 'light' ? 'Off' : 'On'}</p>
                </Box>
            </Grid>
        </ToggleContainer>
    );
};

export default connect(ToggleModal);

const ToggleContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    height: auto;
    width: 500px;
    z-index: 9999999;
    background: linear-gradient(360deg,#383836 10%,#4a4a4a 360%);
    opacity: 1;
    border-radius: 30px;
    position: fixed;
    bottom: 110px;
    right: 55px;
    padding: 0;
    overflow: hidden;
    box-shadow: 0 2px 4px rgb(0 0 0 / 16%);

    @media (max-width: 768px) {
        width: auto;
        right: 15px;
        left: 15px;
        bottom: 85px;
    }
`;


const Grid = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 20px;
    align-self: flex-start;
    width: 100%;
    padding: 20px;

    span {
        color: #000;
        font-size: 18px;
        margin-bottom: 0;
    }

    label {
        width: 100%;
        margin-bottom: 0;
    }

    /* .darkmode-toggle {
        background: var(--togglecolor);
    }

    .text-toggle {
        background: var(--togglecolor2);
    } */
`;

const Box = styled.div`
    display: flex;
    flex-wrap: wrap;
    //background-color: #485461;
    //background-image: linear-gradient(315deg, #485461 0%, #28313b 74%);
    //background-color: #5b6467;
    //background-image: linear-gradient(315deg, #5b6467 0%, #8b939a 74%);
    background: linear-gradient(360deg, #1C1C1C 10%, #494949 360%);
    width: 100%;
    height: 100%;
    border-radius: 15px;
    padding: 20px;
    z-index: 5;
    outline: 0;
    cursor: pointer;
    transition: all 0.3s ease;
    &:focus {
        outline: 0;
    }

    &.checked {
        //background-color: #b8c6db;
        //background-image: linear-gradient(315deg, #b8c6db 0%, #f5f7fa 74%);
        background: linear-gradient(360deg, #dee1e1 10%, #f4f4f4 360%);
        //border: 1px solid #1e1e1e;

        span, p {
            color: #000;
        }
    }

    .checked {
        color: #000;
    }

    label {
        width: 100%;
        margin: 20px 0;

        span {
            color: #fff;
        }
    }

    p {
        color: #fff;
        font-size: 18px;
        margin-bottom: 0;
    }
`;

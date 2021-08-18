import React from 'react';
import { styled, connect, Global } from 'frontity';
import { CloseIcon, HamburgerIcon, AccessabilityIcon } from '../icons';
import ToggleModal from './toggle-modal';

function Toggle({ state, actions }) {
    const { isToggleOpen } = state.theme;
    return (
        <>
            <ToggleButton onClick={actions.theme.openToggleModal}>
                {isToggleOpen ? (
                    <>
                        {/* <Global styles={{ body: { overflowY: 'hidden' } }} /> */}
                        <CloseIcon color="#fff" size="25px" />
                    </>
                ) : (
                    <AccessabilityIcon color="#fff" size="35px" />
                )}
            </ToggleButton>
            {isToggleOpen && <ToggleModal />}
        </>
    );
}

const ToggleButton = styled.button`
    position: fixed;
    bottom: 50px;
    right: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #0077b5;
    opacity: 1;
    border: 0;
    padding: 0px;
    border-radius: 50%;
    z-index: 5;
    height: 50px;
    width: 50px;
    outline: 0;
    transition: all 0.3s ease;
    &:focus {
        outline: 0;
    }

    @media (max-width: 768px) {
        right: 15px;
        bottom: 30px;
    }
`;

export default connect(Toggle);

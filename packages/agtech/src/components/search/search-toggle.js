import React from 'react';
import { connect, styled } from 'frontity';
import { SearchIcon } from '../icons';

const ToggleModal = ({ actions, state }) => {
    const {
        openSearchModal,
        closeSearchModal,
    } = actions.theme;
    const { isSearchModalOpen } = state.theme;
    return (
        <ToggleContainer>
            <Box
                onClick={ isSearchModalOpen === false ? openSearchModal : closeSearchModal }
                aria-label="Click to open search bar"
            >
                <SearchIcon color="var(--toggle)" size="25px" />
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

    @media (max-width: 768px) {
        display: none;
        opacity: 0;
    }
`;

const Box = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    background: transparent;
    border-radius: 50px;
    border: 1px solid var(--toggle);
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

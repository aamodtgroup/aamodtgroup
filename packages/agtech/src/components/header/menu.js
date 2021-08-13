import React from 'react';
import { styled, connect, Global } from 'frontity';
import { CloseIcon, HamburgerIcon } from '../icons';
import MenuModal from './menu-modal';

function MobileMenu({ state, actions }) {
    const { isMobileMenuOpen } = state.theme;
    return (
        <>
            <MenuToggle onClick={actions.theme.toggleMobileMenu}>
                {isMobileMenuOpen ? (
                    <>
                        <Global styles={{ body: { overflowY: 'hidden' } }} />
                        <CloseIcon color="var(--text)" size="25px" />
                    </>
                ) : (
                    <HamburgerIcon color="var(--toggle)" size="25px" />
                )}
            </MenuToggle>
            {isMobileMenuOpen && <MenuModal />}
        </>
    );
}

const MenuToggle = styled.button`
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
    transition: all 0.3s ease;
    &:focus {
        outline: 0;
    }
    @media (min-width: 800px) {
        display: none;
    }
`;

export default connect(MobileMenu);

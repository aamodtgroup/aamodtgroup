import React from "react";
import { styled, connect, Global } from "frontity";
import { CloseIcon, HamburgerIcon } from "./menu-icon";
import MenuModal from "./menu-modal";

function MobileMenu({ state, actions }) {
  const { isMobileMenuOpen, mode } = state.theme;
  return (
    <>
      <MenuToggle onClick={actions.theme.toggleMobileMenu}>
        {isMobileMenuOpen ? (
          <>
            {/* Add some style to the body when menu is open,
            to prevent body scroll */}
            <CloseIcon color={mode === 'light' ? "white": "white"} size="25px" />
          </>
        ) : (
          <HamburgerIcon color={mode === 'light' ? "black": "white"} size="25px" />
        )}
      </MenuToggle>
      {/* If the menu is open, render the menu modal */}
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
  outline:0;
  transition: all .3s ease;
  &:focus {
    outline:0;
  }
  .opensvg, .closesvg {
    transition: all .3s ease;
  }
  &:hover {
    .opensvg {
      color:var(--menutogglehover);
    }
    .closesvg {
      color:var(--menutogglehoverclose);
    }
  }
`;

export default connect(MobileMenu);
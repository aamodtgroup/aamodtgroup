import React from 'react';
import { styled, connect } from 'frontity';
import Link from '../link';

const MenuModal = ({ state }) => {
    const items = state.source.get(`/menu/${state.theme.menuUrl}/`).items;

    return (
        <MenuContent as="nav">
            {items.map((item) => {
                if (!item.child_items) {
                    return (
                        <MenuLink key={item.ID} link={item.url}>
                            {item.title}
                        </MenuLink>
                    );
                } else {
                    const childItems = item.child_items;
                    return (
                        <NavItemWithChildMobile key={item.ID}>
                            <MenuLink key={item.ID} link={item.url}>
                                {item.title}
                            </MenuLink>
                            <ChildMenuMobile className="submenu_mobile">
                                {childItems.map((childItem) => {
                                    return (
                                        <MenuLink
                                            key={childItem.ID}
                                            link={childItem.url}
                                        >
                                            {childItem.title}
                                        </MenuLink>
                                    );
                                })}
                            </ChildMenuMobile>
                        </NavItemWithChildMobile>
                    );
                }
            })}
        </MenuContent>
    );
};

export default connect(MenuModal);

const onClick = () => {
    if (state.theme.isMobileMenuOpen) {
        actions.theme.closeMobileMenu();
    }
};

const MenuContent = styled.div`
    z-index: 1;
    width: 350px;
    position: absolute;
    text-align: center;
    right: 0;
    display: grid;
    grid-auto-rows: min-content;
    margin-top: 3rem;
    margin-left: 1rem;
    margin-right: 1rem;
    background-color: var(--menubackground);
    box-shadow: 0 9px 48px rgb(16 21 23 / 25%);
    border-radius: 7px;

    ::before {
        content: '';
        position: absolute;
        top: -5px;
        right: 10px;
        border-radius: 0px;
        background: inherit;
        width: 25px;
        height: 36px;
        transform: rotate(45deg);
        z-index: -1;
    }

    @media (max-width: 600px) {
        width: calc(100% - 2rem);
    }
`;

const MenuLink = styled(Link)`
    width: 100%;
    outline: 0;
    font-size: 20px;
    font-weight: 600;
    text-align: center;
    padding: 0.8rem 0;
    color: var(--text);
    display: block;
    position: relative;
    z-index: 999;
    transition: all 0.3s ease 0s;
    &:hover,
    &:focus {
        color: var(--brand) !important;
    }
    :not(:last-of-type) {
        border-bottom: 1px solid var(--border);
    }
`;

const NavItemWithChildMobile = styled.div`
    position: relative;
    display: block;

    @media (min-width: 745px) {
        :hover .submenu_mobile {
            visibility: visible;
            opacity: 1;
        }
    }
`;

const ChildMenuMobile = styled.div`
    position: absolute;
    width: 100%;
    left: -100%;
    top: 0;
    font-size: 16px;
    z-index: 5;
    background-color: white;
    box-shadow: 0 9px 48px rgb(16 21 23 / 15%);
    border-radius: 7px;
    visibility: hidden;
    opacity: 0;
`;

import React from "react";
import { styled, connect } from "frontity";
import Link from "../link";
import Logo from "./menu-logo";

const MenuModal = ({ state }) => {
  const items = state.source.get(`/menu/${state.theme.menuUrl}/`).items;

  return (
    <>
      <BigMenu>
        <div className="menu-header">
          <Logo />
        </div>
        <BigMenuInner>
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
                          <MenuLink key={childItem.ID} link={childItem.url}>
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
        </BigMenuInner>
        <div className="menu-footer">
          <p className="copyright">© 2021 Aamodt Group</p>
          <p className="copyright align-right">
            <Link link="/personvern">Personvern</Link>
          </p>
        </div>
      </BigMenu>
    </>
  );
};

const BigMenu = styled.div`
  z-index: 1;
  width: 100vw;
  height: 100vh;
  position: absolute;
  top:0;
  left:0;
  right:0;
  bottom: 0;
  background-color: #121212;
  box-sizing: border-box;

  .menu-header {
    width: 100%;
    max-width: 100%;
    height: auto;
    display: flex;
    padding: 25px 15px;
    justify-content: space-between;
    align-items: center;
  }

  .menu-footer {
    width: 100%;
    max-width: 1200px;
    margin: 0 auto;
    height: auto;
    flex-wrap: wrap;
    padding: 0px 15px;
    display: flex;
    align-items: center;

    .copyright {
      color: white !important;
      font-weight: 400;
      width: 100%;

      a {
        color: white;
        transition: color .2s ease;

        &:hover,
        &:focus {
          color: #cce4f0 !important;
        }
      }
    }
    p {
      margin: 0;
    }
  }
`;

const BigMenuInner = styled.div`
  z-index: 1;
  width: 100%;
  max-width: 1200px;
  height: calc(100% - 71px - 71px);
  margin: 4rem auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-sizing: border-box;

  @media (max-width: 600px) {
    flex-wrap: wrap;
    align-items: flex-start;
    height: auto;
  }
  @media (max-width: 1230px) {
    padding: 0 15px;
  }
`;

const MenuContent = styled.div`
  display: grid;
  grid-auto-rows: min-content;
  text-align: left;
  width: 100%;
`;

const MenuLink = styled(Link)`
  width: 100%;
  outline: 0;
  font-size: 70px;
  line-height: 1;
  font-weight: 600;
  text-align: left;
  padding: 0.8rem 0;
  color: #fff;
  display: block;
  position: relative;
  z-index: 999;
  transition: color .2s ease;
  &:hover,
  &:focus {
    color: #cce4f0 !important;
  }
  @media (max-width: 600px) {
    font-size: 2rem;
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

export default connect(MenuModal);
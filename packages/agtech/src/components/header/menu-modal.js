import React from "react";
import { styled, connect } from "frontity";
import Link from "../link";
import logo from "../../images/logo_white.svg";
import facebook from "../../images/facebook.png";
import linkedin from "../../images/linkedin.png";
import email from "../../images/email.png";
import instagram from "../../images/instagram.png";
import github from "../../images/github.png";

const MenuModal = ({ state }) => {
  const items = state.source.get(`/menu/${state.theme.menuUrl}/`).items;

  return (
    <>
      <BigMenu>
        <div className="menu-header">
          <Link link="/" alt="Forside link">
            <img src={logo} alt="logo" width="150px" height="50px" />
          </Link>
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
          <div className="small-menu">
          <Link link="https://www.linkedin.com/company/aamodtgroup/" target="_blank"><img src={linkedin} /></Link>
          <br />
          <Link link="https://www.facebook.com/aamodtgroup/" target="_blank"><img src={facebook} /></Link>
          <br />
          <Link link="https://www.instagram.com/aamodtgroup/" target="_blank"><img src={instagram} /></Link>
          <br />
          <Link link="https://www.github.com/aamodtgroup/" target="_blank"><img src={github} /></Link>
          <br />
          <Link link="mailto:kasper@aamodtgroup.com"><img src={email} /></Link>
          </div>
        </BigMenuInner>
      </BigMenu>
    </>
  );
};

const onClick = () => {
  if (state.theme.isMobileMenuOpen) {
    actions.theme.closeMobileMenu();
  }
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
  background-color: var(--brand);
  box-sizing: border-box;

  .menu-header {
    width: 100%;
    max-width: 100%;
    height: 81px;
    display: flex;
    padding: 15px 50px;

    img {
      width: 150px;
      height: 50px;
    }

    @media (max-width: 1230px) {
      padding: 15px;
    }
  }
`;

const BigMenuInner = styled.div`
  z-index: 1;
  width: 100%;
  max-width: 1200px;
  height: calc(100% - 81px);
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-sizing: border-box;

  .small-menu {
    img {
      height: 32px;
      width: 32px;
      margin: 5px 0;

      :hover {
        transition: .5s;
        transform: rotate(360deg);
      }
    }

  }

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
  color: var(--white);
  display: block;
  position: relative;
  z-index: 999;
  &:hover,
  &:focus {
    color: var(--black) !important;
  }
  @media (max-width: 600px) {
    font-size: 40px;
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
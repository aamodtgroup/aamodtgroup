import React from 'react';
import { connect, styled } from 'frontity';
import MobileMenu from './menu';
import Logo from './logo';
import Nav from './nav';
import SearchModal from '../search/search-modal';
import SearchToggle from '../search/search-toggle';
import { Button } from './buttons';

const Header = () => {
    return (
        <Container>
            <NavContainer>
                <Logo />
                <Nav />
                <div className="buttons">
                    <Button 
                        buttonLink="/contact/"
                        buttonText="Contact"
                    />
                    <SearchToggle />
                    <MobileMenu />
                </div>
            </NavContainer>
            <SearchModal />
        </Container>
    );
};

export default connect(Header);

const Container = styled.div`
    position: fixed;
    width: 100%;
    padding: 0 15px;
    padding-top: 15px;
    z-index: 999;
`;

const NavContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 0 auto;
    transition: padding 0.5s ease;
    background-color: var(--headerbackground);
    //opacity: .95;
    transition: background-color var(--transition);
    padding: 0 15px;
    max-width: 1250px;
    width: 100%;
    border-radius: 50px;
    .buttons {
        display: flex;
    }
`;

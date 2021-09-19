import React from 'react';
import { connect, styled } from 'frontity';
import MobileMenu from './menu';
import Logo from './logo';
import Nav from './nav';

const Header = () => {
    return (
        <Container>
            <Container__inner>
                <NavContainer>
                    <Logo />
                    <Nav />
                    <MobileMenu />
                </NavContainer>
            </Container__inner>
        </Container>
    );
};

export default connect(Header);

const Container = styled.div`
    position: fixed;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    padding-top: 15px;
    z-index: 999;
`;

const Container__inner = styled.div`
    width: auto;
    padding: 0 15px;
    
    @media (max-width: 600px) {
        width: 100%;
    }
`;

const NavContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 0 auto;
    transition: padding 0.5s ease;
    background: rgba( 255, 255, 255, 0.75 );
    box-shadow: 0 8px 32px 0 rgba( 31, 38, 135, 0.37 );
    backdrop-filter: blur( 7.5px );
    -webkit-backdrop-filter: blur( 7.5px );
    //opacity: .95;
    transition: background-color var(--transition);
    padding: 0 15px;
    border-radius: 50px;
    .buttons {
        display: flex;
    }
`;

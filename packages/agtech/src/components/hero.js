import React from "react";
import { connect, styled } from "frontity";
import Link from "@frontity/components/link";

const Hero = ({ state }) => {
    return (
        <>
        <HeroContainer>
                <div className="hero-inner">
                    <h1>Aamodt Group - Konsulenter innen utvikling og drift</h1>
                    <p>Vi hjelper deg med alle dine behov innen utvikling og drift.</p>
                    <div className="buttons">
                        <Link link="/kontakt-oss/"><button className="wp-block-button__link">Kontakt oss</button></Link>
                    </div>
                </div>
        </HeroContainer>
        </>
    );
};

export default connect(Hero);

const HeroContainer = styled.div`
    display: flex;
    height: calc(100vh - 80px);
    min-height: calc(100vh - 80px);
    align-items: flex-end;
    width: 100%;
    max-width: 100vw;
    background: -webkit-linear-gradient(-90deg, rgba(0, 0, 0, 0.0), rgba(0, 0, 0, 1.0)), url(https://backend.aamodtgroup.com/wp-content/uploads/2021/03/AdobeStock_314816591-scaled.jpeg);
    background-size: cover;
    background-position: 50% 50%;
    margin: 0 auto;
    color: white;
    h1 {
        font-size: 64px;
        margin-bottom: 1rem;
        font-weight: 600;
        width: 100%;
        max-width: 620px;
        color: var(--white);
    }
    p {
        font-size: 24px;
        margin-bottom: 2rem;
        width: 100%;
        max-width: 620px;
        color: var(--blue-text);
    }
    .hero-inner {
        width: 1200px;
        padding-bottom: 5rem;
    }
        
    .buttons .wp-block-button__link {
        margin-bottom: 1rem;
    }

    @media (min-width: 1230px) {
        justify-content: center;
    }

    @media (max-width: 1230px) {
        padding-left: 15px;
        padding-right: 15px;
        width: auto;
    }

    @media (max-width: 600px) {
        height: 600px;
        min-height: 600px;
        background: -webkit-linear-gradient(-90deg, rgba(0, 0, 0, 0.75), rgba(0, 0, 0, 0.75)), url(https://backend.aamodtgroup.com/wp-content/uploads/2021/03/AdobeStock_314816591-scaled.jpeg);
        background-size: cover;
        background-position: 60% 50%;
        h1 {
            font-size: 40px;
        }
    }
`;